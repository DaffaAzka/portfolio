import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import Image from "next/image";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
