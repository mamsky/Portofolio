import type { ReactNode } from "react";
import ProfilePage from "./(profile)/page";
import WorkPage from "./work/page";
import ProjectPage from "./project/page";
import TechPage from "./tech/page";
import LoginPage from "../login/page";

export type NavigationItems = {
  path: string;
  label: string;
  components: ReactNode;
};

export const navigationItems: NavigationItems[] = [
  {
    path: "/cpanel/dashboard",
    label: "Profile",
    components: <ProfilePage />,
  },
  {
    path: "/cpanel/dashboard/work",
    label: "Work",
    components: <WorkPage />,
  },
  {
    path: "/cpanel/dashboard/project",
    label: "Project",
    components: <ProjectPage />,
  },
  {
    path: "/cpanel/dashboard/tech",
    label: "Tech",
    components: <TechPage />,
  },
  {
    path: "/cpanel",
    label: "Logout",
    components: <LoginPage />,
  },
];
