/**
 * In-memory Rate Limiter using Sliding Window Algorithm
 *
 * Membatasi jumlah request per IP address dalam window waktu tertentu.
 * Counter akan reset otomatis saat server restart.
 */

const WINDOW_MS = 60 * 1000; // 60 detik
const MAX_REQUESTS = 1000;

interface RateLimitEntry {
    timestamps: number[];
}

// In-memory store per IP
const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup interval - hapus expired entries setiap 5 menit
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup() {
    const now = Date.now();
    if (now - lastCleanup < CLEANUP_INTERVAL) return;

    lastCleanup = now;
    const cutoff = now - WINDOW_MS;

    for (const [ip, entry] of rateLimitStore.entries()) {
        // Filter timestamps yang masih valid
        entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
        // Hapus entry jika sudah kosong
        if (entry.timestamps.length === 0) {
            rateLimitStore.delete(ip);
        }
    }
}

export interface RateLimitResult {
    success: boolean;
    limit: number;
    remaining: number;
    resetIn: number; 
}

export function rateLimit(ip: string): RateLimitResult {
    const now = Date.now();
    const cutoff = now - WINDOW_MS;

    cleanup();
    let entry = rateLimitStore.get(ip);
    if (!entry) {
        entry = { timestamps: [] };
        rateLimitStore.set(ip, entry);
    }

    entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

    const remaining = Math.max(0, MAX_REQUESTS - entry.timestamps.length);
    const oldestTimestamp = entry.timestamps[0] || now;
    const resetIn = Math.max(0, oldestTimestamp + WINDOW_MS - now);

    if (entry.timestamps.length >= MAX_REQUESTS) {
        return {
            success: false,
            limit: MAX_REQUESTS,
            remaining: 0,
            resetIn,
        };
    }

    entry.timestamps.push(now);

    return {
        success: true,
        limit: MAX_REQUESTS,
        remaining: remaining - 1,
        resetIn: WINDOW_MS,
    };
}
