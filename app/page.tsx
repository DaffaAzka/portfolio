import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Timeline />
      <Projects />
    </div>
  );
}
