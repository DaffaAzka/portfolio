"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillCategory } from "@/lib/types";
import * as Icons from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

export default function Skills({ skills }: { skills: SkillCategory[] }) {

  type IconName = keyof typeof Icons;

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as IconName] as React.ComponentType<{
      className?: string;
    }>;
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  return (
    <SectionWrapper className="flex items-center justify-center pt-12 pb-16 md:pt-16">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
        <div className="space-y-8">
          <div className="space-y-2 sm:text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Skills & Expertise
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and
              languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary bg-primary/10 p-2 rounded-lg">
                        {getIcon(skillGroup.icon)}
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {skillGroup.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
