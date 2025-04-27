"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import {
  HiOutlineDocumentDownload,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { DataDummyHero, DummyHero } from "./types/dummy-data";

const Layout = () => {
  const data: DummyHero = DataDummyHero;

  return (
    <div className="container mx-auto px-6 py-12 md:py-24 mt-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
        <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Image
            className="relative w-64 h-64 lg:w-[320px] lg:h-[320px] rounded-xl shadow-2xl shadow-stone-800 object-cover transform transition duration-500 hover:scale-105"
            src={data.image}
            alt="paste prosmana"
          />
        </div>
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-6xl font-bold mb-6">
              {`Hi, I'm ${data.surname} 👋`}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl  font-medium mb-6">
              {data.profesi}
            </p>
            <p className="text-justify text-base lg:text-lg leading-relaxed">
              {data.bio}
            </p>
            <div className="flex flex-col items-center lg:items-start space-y-3 my-8">
              <div className="flex items-center space-x-2">
                <HiOutlineLocationMarker size={30} />
                {data.location}
              </div>
              <div className="flex items-center space-x-2">
                <GoDotFill color={data.status ? "green" : "red"} size={30} />
                {data.status ? "Available" : "Not Available"} for new projects
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://wa.me/6289611241174"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white text-sm cursor-pointer px-4 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
                >
                  <FaWhatsapp />
                  {" Let's Talk"}
                </a>
                <Button>
                  <HiOutlineDocumentDownload />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
