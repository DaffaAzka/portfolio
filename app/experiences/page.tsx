import Timeline from "@/components/timeline";
import { getAllExperiences } from "@/lib/data";

export const metadata = {
  title: "Experiences - DAFFA AZKA",
  description: "My professional experiences and career journey",
};

export default function Page() {
  const experiences = getAllExperiences();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <Timeline experiences={experiences} />
    </div>
  );
}
