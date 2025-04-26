import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ProjectDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="cursor-pointer border p-2 rounded-md">
          Add New Project
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <div className="">
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className="px-4 py-6"
            />
          </div>
          <div className="">
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              name="description"
              placeholder="Description...."
              className="px-4 py-6"
            />
          </div>
          <div className="">
            <label htmlFor="tech">Tect</label>
            <Input
              id="tech"
              type="text"
              name="tech"
              placeholder="Tech"
              className="px-4 py-6"
            />
          </div>
          <div className="">
            <label htmlFor="link-demo">Link Demo</label>
            <Input
              id="link-demo"
              type="text"
              name="link-demo"
              placeholder="Link Demo"
              className="px-4 py-6"
            />
          </div>
          <div className="">
            <label htmlFor="link-repo">Link Github</label>
            <Input
              id="link-repo"
              type="text"
              name="link-repo"
              placeholder="Link Github"
              className="px-4 py-6"
            />
          </div>
          <div className="">
            <label htmlFor="images">Images</label>
            <Input id="images" type="file" name="images" />
          </div>

          <Button className="w-full px-4 py-6 text-2xl bg-cyan-500 hover:bg-cyan-700 cursor-pointer">
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDialog;
