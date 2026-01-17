import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="">
        <h2 className="mt-12 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em] text-center">
          My Experiences
        </h2>
        <Timeline />
      </div>
    </div>
  );
}
