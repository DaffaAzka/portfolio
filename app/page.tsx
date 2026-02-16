import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import Image from "next/image";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skills from "@/components/skills";

// Regenerate halaman setiap 1 jam untuk mengurangi edge request
export const revalidate = 3600; // ISR: 1 jam

export default function Home() {
  return (
    <div>
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
