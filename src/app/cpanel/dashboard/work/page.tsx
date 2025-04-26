"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DialogPage from "./dialog";
import Image from "next/image";
import LogoImages from "@/assets/dumbways.png";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

const WorkPage = () => {
  return (
    <div className="p-4 mt-10">
      <h1 className="text-4xl mb-8 font-bold">Work Experience Setting</h1>
      <DialogPage />
      <Table className="my-4">
        <TableCaption>A list of your work experience.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Images</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <Image
                src={LogoImages}
                alt="work logo"
                width={32}
                height={32}
                className="max-w-32"
              />
            </TableCell>
            <TableCell>Learn Hallo World</TableCell>
            <TableCell>Dumbways</TableCell>
            <TableCell className="">
              Learn Hallo World with typescript
            </TableCell>
            <TableCell>
              <div className="flex gap-3">
                <Button className="cursor-pointer bg-red-500 hover:bg-red-900">
                  <FaTrash />
                </Button>
                <Button className="cursor-pointer bg-yellow-500 hover:bg-yellow-900">
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

export default WorkPage;
