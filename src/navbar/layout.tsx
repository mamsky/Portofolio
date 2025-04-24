"use client";
import AvatarImages from "@/assets/images.jpg";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const Layout = () => {
  const refById = useRef<HTMLDivElement>(null);
  const handleButtonTech = () => {
    console.log(refById.current);
  };
  return (
    <div className="flex justify-between my-4">
      <div>
        <Avatar className="w-12 h-12">
          <AvatarImage src={AvatarImages.src} alt="Paste" />
          <AvatarFallback>Paste</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden cursor-pointer">
            <RxHamburgerMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:hidden">
            <DropdownMenuItem>
              <Link href="#tech">Tech Stack</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <ModeToggle />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" hidden md:block">
        <div className="flex gap-4 items-center">
          <Button onClick={handleButtonTech}>Tech Stack</Button>
          <Link href="#work-experience">Experience</Link>
          <Link href="/portofolio">Projects</Link>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-sm cursor-pointer px-4 py-2 rounded-lg transition-colors flex items-center font-medium">
            <FaWhatsapp />
            {" Let's Talk"}
          </Button>
          <Button>
            <HiOutlineDocumentDownload />
            Download CV
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Layout;
