import DumbwaysImage from "@/assets/dumbways.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

export const LayoutMyProject = () => {
  return (
    <div>
      <div className="bg-white/10 backdrop-blur-2xl rounded-lg p-4 shadow-lg shadow-stone-800 dark:shadow-white/50">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-md">
          <Image src={DumbwaysImage} alt="my project" />
        </div>
        <hr />
        <div className="p-4">
          <h3 className="font-semibold text-xl mb-3">Create Hallo World</h3>
          <p className="text-gray-600 dark:text-white text-sm mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos autem
            accusamus quas qui labore recusandae eligendi voluptatibus animi
            architecto in.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-6 px-4">
          <span className="px-3 py-1 bg-gray-100 dark:bg-white/30 rounded-full text-xs font-medium text-gray-600 dark:text-white">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-white/30 rounded-full text-xs font-medium text-gray-600 dark:text-white">
            Express
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-white/30 rounded-full text-xs font-medium text-gray-600 dark:text-white">
            Prisma
          </span>
        </div>
        <div className="px-4 flex gap-6 ">
          <div className="flex items-center gap-3 text-sm">
            <FaGithub size={25} />
            My Repository
          </div>
          <div className="flex items-center gap-3 text-sm cursor-pointer text-blue-400 hover:text-blue-800">
            <LuLink size={25} />
            Live Demo
          </div>
        </div>
      </div>
    </div>
  );
};
