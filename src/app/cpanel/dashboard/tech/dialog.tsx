import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const TechDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="p-2 cursor-pointer border rounded-md">
        Add New Tech
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Technology</DialogTitle>
        </DialogHeader>
        <div>
          <label htmlFor="name">Name Tech:</label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            className="py-6 px-4"
          />
        </div>
        <div className="my-4">
          <label htmlFor="images">images:</label>
          <Input id="images" type="file" name="images" />
        </div>
        <Button className="w-full bg-cyan-500 text-2xl hover:bg-cyan-700 cursor-pointer px-4 py-6 ">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TechDialog;
