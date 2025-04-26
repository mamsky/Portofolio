"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "./nav-item";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";

const DashboardLayout = () => {
  const location = usePathname();
  const [isShow, setIsShow] = useState<boolean>(false);

  const filterPage = navigationItems.find(
    (field) => field.path === location
  )?.components;

  return (
    <>
      <Button
        onClick={() => setIsShow(!isShow)}
        className={`cursor-pointer fixed z-11 bg-transparent border hover:bg-stone-800  ${
          isShow ? "left-2 top-2" : "left-48 top-2"
        }`}
      >
        <RxHamburgerMenu className="text-white" />
      </Button>
      <div
        className={`${
          isShow
            ? "hidden"
            : "block bg-black fixed w-60 top-0 duration-300 z-10 h-full"
        }`}
      >
        <div className="w-[10%] flex flex-col gap-8 p-4 mt-10">
          {navigationItems.map((field, index) => (
            <div
              key={index}
              className={
                field.path === location
                  ? "text-cyan-500 duration-300"
                  : "text-white"
              }
            >
              <Link href={field.path} className="text-2xl md:text-4xl">
                {field.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className={isShow ? "duration-300" : "md:ml-60 md:mr-30 duration-300"}
      >
        {filterPage}
      </div>
    </>
  );
};

export default DashboardLayout;

{
  /* <div className="flex">
      <div className="w-[10%] flex flex-col gap-8">
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
    </div> */
}
