import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllSkills } from "@/lib/data";
import * as Icons from "lucide-react";

export default function Skills() {
  const skills = getAllSkills();

  type IconName = keyof typeof Icons;

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as IconName] as React.ComponentType<{
      className?: string;
    }>;
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  return (
    <div className="flex items-center justify-center pt-12 pb-16 md:pt-16">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Skills & Expertise
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical skills, tools, and
              languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      {getIcon(skillGroup.icon)}
                    </div>
                    <CardTitle className="text-lg">
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
                        className="px-3 py-1 text-sm font-medium rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
