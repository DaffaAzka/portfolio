import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import Image from "next/image";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import { getAllExperiences, getAllProjects, getAllSkills } from "@/lib/data";

// Regenerate halaman setiap 1 jam untuk mengurangi edge request
export const revalidate = 3600; // ISR: 1 jam

export default function Home() {
  const experiences = getAllExperiences();
  const projects = getAllProjects();
  const skills = getAllSkills();

  return (
    <div>
      <Hero />
      <Timeline experiences={experiences} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
    </div>
  );
}
