import ProjectDialog from "./dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ImagesLogo from "@/assets/dumbways.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className="p-4 mt-10">
      <h1 className="text-4xl mb-8 font-bold">My Project Setting</h1>
      <ProjectDialog />
      <Table className="my-4">
        <TableCaption>A list of your project.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Images</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>tech</TableHead>
            <TableHead>Link Demo</TableHead>
            <TableHead>Link Github</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <Image
                src={ImagesLogo}
                alt="Logo Project"
                width={30}
                height={30}
                className="max-w-32"
              />
            </TableCell>
            <TableCell>Circle</TableCell>
            <TableCell>Create with typescript and express</TableCell>
            <TableCell>react, node, express, typescript</TableCell>
            <TableCell>https://www.papoy.com</TableCell>
            <TableCell>https://www.github.com</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button className="bg-red-500 hover:bg-red-900 cursor-pointer">
                  <FaTrash />
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-900 cursor-pointer">
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

// title, description, tech, link demo, repo
export default ProjectPage;
