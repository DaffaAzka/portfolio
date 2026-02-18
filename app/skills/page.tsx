import Skills from "@/components/skills";
import { getAllSkills } from "@/lib/data";

export const metadata = {
  title: "Skills - DAFFA AZKA",
  description:
    "My technical skills, programming languages, frameworks, and tools",
};

export default function SkillsPage() {
  const skills = getAllSkills();

  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto">
        <Skills skills={skills} />
      </div>
    </main>
  );
}
