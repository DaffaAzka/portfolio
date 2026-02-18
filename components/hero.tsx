"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <BackgroundPattern />
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 bg-background/50 backdrop-blur-sm z-0 rounded-2xl dark:bg-slate-900/50 border border-border/50">
          <div className="flex items-center content-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>
                <Badge
                  variant="indigo"
                  className="rounded-full py-1 border-border px-4"
                  asChild>
                  <Link href="https://www.linkedin.com/in/daffa-islami-azka/">
                    DAFFA ISLAMI AZKA
                  </Link>
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.1] tracking-tight">
                Hi, I&apos;m a{" "}
                <span className="text-primary">Software Developer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 max-w-[60ch] sm:text-lg text-muted-foreground leading-relaxed">
                I love building meaningful software. When I&apos;m not coding,
                I&apos;m up late with coffee, exploring new tech, or polishing
                old projects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex gap-4">
                {/* Buttons could go here if uncommented */}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-video bg-accent/20 rounded-xl overflow-hidden border border-border/50 shadow-xl">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/res1.jpeg"
                alt="My Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
