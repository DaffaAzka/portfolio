import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 300,
  experimental: {},
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
