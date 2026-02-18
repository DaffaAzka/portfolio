import Projects from "@/components/projects";
import { getAllProjects } from "@/lib/data";

export const metadata = {
  title: "Projects - DAFFA AZKA",
  description: "My portfolio of projects and work",
};

export default function Page() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 md:py-20">
      <Projects projects={projects} />
    </div>
  );
}
