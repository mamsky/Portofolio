import { Marquee } from "@/components/magicui/marquee";
import { iconDummy } from "@/lib/dummy-data/icons-dummy";
import Image from "next/image";
import React from "react";
import Layout from "./layout";

const PageMarquee = () => {
  return (
    <div id="tech">
      <Layout />
      <div className="relative mb-32">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white dark:from-stone-950 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white dark:from-stone-950 to-transparent pointer-events-none"></div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {iconDummy.map((icons) => (
            <div key={icons.no}>
              <div className="mx-6 border p-1 bg-white/30 backdrop-blur-sm rounded-2xl w-16 h-16 ">
                <Image
                  src={icons.images}
                  alt="icons"
                  width={100}
                  height={100}
                  className="hover:scale-110 cursor-pointer rounded-md"
                />
              </div>
              <h3 className="text-center">{icons.name}</h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PageMarquee;
