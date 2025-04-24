import AvatarImages from "@/assets/images.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import {
  HiOutlineDocumentDownload,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Layout = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 mb-32">
        <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Image
            className="relative w-64 h-64 lg:w-[320px] lg:h-[320px] rounded-xl shadow-2xl shadow-stone-900 object-cover transform transition duration-500 hover:scale-105"
            src={AvatarImages}
            alt="paste prosmana"
          />
        </div>
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-6">
              {"Hi, I'm Paste Prosmana"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl  font-medium mb-6">
              Full Stack Developer
            </p>
            <p className="text-justify text-base lg:text-lg leading-relaxed">
              I build and ship digital products from scratch to production.
              Passionate about creating end-to-end solutions and turning ideas
              into fully functional applications. With expertise in both
              frontend and backend development, I handle everything from initial
              concept to deployment and maintenance.
            </p>
            <div className="flex flex-col items-center lg:items-start space-y-3 my-8">
              <div className="flex items-center space-x-2">
                <HiOutlineLocationMarker size={30} />
                Depok, Sawangan, Indonesia
              </div>
              <div className="flex items-center space-x-2">
                <GoDotFill color="green" size={30} />
                Available for new projects
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white text-sm cursor-pointer px-4 py-2 rounded-lg transition-colors flex items-center font-medium">
                  <FaWhatsapp />
                  {" Let's Talk"}
                </Button>
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
