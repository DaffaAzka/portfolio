import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const projects = getAllProjects();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          My Projects
        </h2>
        {/* <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Enhance your strategy with intelligent tools designed for success.
        </p> */}
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {projects.map(
            ({ category, title, details, projectUrl, image }, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse">
                <div className="w-full aspect-video bg-muted rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                  <Image
                    src={"/images/projects/" + image}
                    alt={title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="basis-1/2 shrink-0">
                  <span className="uppercase font-medium text-sm text-muted-foreground">
                    {category}
                  </span>
                  <h4 className="my-3 text-3xl font-semibold tracking-[-0.02em]">
                    {title}
                  </h4>
                  <p className="text-muted-foreground">{details}</p>
                  <Button asChild size="lg" className="mt-6 rounded-full gap-3">
                    <Link href={projectUrl}>
                      Learn More <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
