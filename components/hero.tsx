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

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />
      <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 bg-background z-0 rounded-2xl dark:bg-slate-900">
          <div className="flex items-center content-center">
            <div>
              <Badge
                variant="indigo"
                className="rounded-full py-1 border-border"
                asChild>
                <Link href="https://www.linkedin.com/in/daffa-islami-azka/">
                  DAFFA ISLAMI AZKA
                </Link>
              </Badge>
              <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
                Hi, I&apos;m a Software Developer
              </h1>
              <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
                I love building meaningful software. When Im not coding,
                I&apos;m up late with coffee, exploring new tech, or polishing
                old projects.
              </p>
              {/* <div className="mt-12 flex items-center gap-4">
              <Button size="lg" className="rounded-full text-base">
                Get Started <ArrowUpRight className="h-5! w-5!" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none">
                <CirclePlay className="h-5! w-5!" /> Watch Demo
              </Button>
            </div> */}
            </div>
          </div>
          <div className="relative w-full aspect-video bg-accent rounded-xl overflow-hidden">
            <Image
              src="/images/res1.jpeg"
              alt="My Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
