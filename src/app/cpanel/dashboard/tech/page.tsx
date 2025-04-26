import React from "react";
import TechDialog from "./dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import ImageLogo from "@/assets/dumbways.png";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

const TechPage = () => {
  return (
    <div className="mt-10 p-4">
      <h1 className="text-4xl mb-8 font-bold">Technology Setting</h1>
      <TechDialog />
      <Table className="my-4">
        <TableCaption>A list of your recent Technology.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Techology</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <Image
                src={ImageLogo}
                alt="logo-tech"
                width={20}
                height={20}
                className="w-16"
              />
            </TableCell>
            <TableCell>React</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button className="bg-red-500 hover:bg-red-900 cursor-pointer">
                  <FaTrash />
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-900 cursor-pointer">
                  <FaEdit />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TechPage;
