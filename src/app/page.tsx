import { Dashboard } from "@/dashboard/page";
import PageMarquee from "@/marquee-components/page";
import WorkExperience from "@/work-experience/page";

export default function Home() {
  return (
    <div className="mx-4 md:mx-[5%] lg:mx-[10%] xl:mx-[15%]">
      <Dashboard />
      <PageMarquee />
      <WorkExperience />
    </div>
  );
}
