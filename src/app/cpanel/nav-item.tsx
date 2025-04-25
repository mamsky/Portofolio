import type { ReactNode } from "react";
import ProfilePage from "./profile/page";
import WorkPage from "./work/page";
import ProjectPage from "./project/page";
import TechPage from "./tech/page";
export type NavigationItems = {
  path: string;
  label: string;
  components: ReactNode;
};

export const navigationItems: NavigationItems[] = [
  {
    path: "/cpanel/profile",
    label: "Profile",
    components: <ProfilePage />,
  },
  {
    path: "/cpanel/work",
    label: "Work",
    components: <WorkPage />,
  },
  {
    path: "/cpanel/project",
    label: "Project",
    components: <ProjectPage />,
  },
  {
    path: "/cpanel/tech",
    label: "Tech",
    components: <TechPage />,
  },
];
