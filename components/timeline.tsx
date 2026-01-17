import { Badge } from "@/components/ui/badge";
import { getAllExperiences } from "@/lib/data";
import { Building2, Calendar } from "lucide-react";

export default function Timeline() {
  const experiences = getAllExperiences();
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-16 px-6">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base font-medium">{company}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
