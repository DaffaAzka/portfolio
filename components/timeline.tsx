"use client";

import { Badge } from "@/components/ui/badge";
import { Experience } from "@/lib/types";
import { Building2, Calendar } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

export default function Timeline({ experiences }: { experiences: Experience[] }) {
  return (
    <SectionWrapper className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-16 px-6">
      <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-bold tracking-tight sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
        My Experiences
      </h2>
      <div className="relative ml-3 mt-8 md:mt-16">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2 border-primary/20" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background shadow-sm" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0 h-9 w-9 bg-accent/50 rounded-full flex items-center justify-center border border-border/50">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base font-medium">{company}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-3 py-0.5 text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ),
        )}
      </div>
    </SectionWrapper>
  );
}
