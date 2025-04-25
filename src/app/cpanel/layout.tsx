"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "./nav-item";

const CpanelLayout = () => {
  const location = usePathname();

  const filterPage = navigationItems.find(
    (field) => field.path === location
  )?.components;

  return (
    <div className="flex p-4">
      <div className="w-[20%] flex flex-col gap-8">
        {navigationItems.map((field, index) => (
          <div
            key={index}
            className={
              field.path === location
                ? "text-cyan-500 duration-300"
                : "text-white"
            }
          >
            <Link href={field.path} className="text-4xl">
              {field.label}
            </Link>
          </div>
        ))}
      </div>
      <div>{filterPage}</div>
    </div>
  );
};

export default CpanelLayout;
