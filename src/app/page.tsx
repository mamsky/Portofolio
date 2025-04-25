import ContactPage from "@/contact/page";
import { Dashboard } from "@/dashboard/page";
import FooterPage from "@/footer/page";
import PageMarquee from "@/marquee-components/page";
import { MyProject } from "@/my-project/page";
import WorkExperience from "@/work-experience/page";

export default function Home() {
  return (
    <div className="mx-4 md:mx-[5%] xl:mx-[15%]">
      <Dashboard />
      <PageMarquee />
      <WorkExperience />
      <MyProject />
      <ContactPage />
      <hr />
      <FooterPage />
    </div>
  );
}
