"use client";
import Image from "next/image";
import { WorkExperienceDTO } from "./types/dummy-data-we";

export const ListWork = ({ data }: { data: WorkExperienceDTO }) => {
  return (
    <div className="space-y-6 mb-12 shadow-gray-500 shadow-lg rounded-xl">
      <div className="flex flex-col md:flex-row items-start bg-white dark:bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm">
        <Image
          height={0}
          width={0}
          alt="Dumbways Logo"
          src={data.images}
          className="w-16 h-16 rounded-lg mb-4 md:mb-0 object-contain bg-white"
        />
        <div className="md:ml-8 flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h1 className="font-semibold text-lg">{data.position}</h1>
              <p className="text-green-600 dark:text-green-400 text-sm">
                {data.company}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              Oct 2022 - Present
            </span>
          </div>

          <ul className="text-gray-600  dark:text-white text-sm space-y-2 list-disc list-inside mb-4">
            {data.description?.map((desc, index) => (
              <li key={index} className="block mb-2">
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {data.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-white/50 rounded-full text-xs font-medium text-gray-600 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
