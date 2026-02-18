"use client";

import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

function Projects({ projects }: { projects: Project[] }) {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-bold tracking-tight sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          My Projects
        </h2>
        {/* <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Enhance your strategy with intelligent tools designed for success.
        </p> */}
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {projects.map(
            ({ category, title, details, projectUrl, image }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse group">
                <div className="w-full aspect-video bg-muted/50 rounded-xl border border-border/50 basis-1/2 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={"/images/projects/" + image}
                    alt={title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="basis-1/2 shrink-0">
                  <span className="uppercase font-medium text-sm text-primary tracking-wider">
                    {category}
                  </span>
                  <h4 className="my-3 text-3xl font-bold tracking-tight">
                    {title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{details}</p>
                  <Button asChild size="lg" className="mt-6 rounded-full gap-3 group/btn">
                    <Link href={projectUrl}>
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;
