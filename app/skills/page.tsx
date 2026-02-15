import Skills from "@/components/skills";

export const metadata = {
  title: "Skills - DAFFA AZKA",
  description:
    "My technical skills, programming languages, frameworks, and tools",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto">
        <Skills />
      </div>
    </main>
  );
}
