import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ProfilePage = () => {
  return (
    <div className="p-4 w-7xl">
      <h1>Profile Setting</h1>
      <div className="my-4">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4">
        <Input
          name="skill"
          type="text"
          placeholder="Full Stack Developer"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4">
        <Textarea placeholder="Bio" name="bio" />
      </div>
      <div className="my-4">
        <Input placeholder="Location" name="location" className="px-4 py-6" />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="Available or No" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="my-4">
        <Button className="w-full px-4 py-6 text-4xl font-bold bg-cyan-500 text-white cursor-pointer hover:bg-cyan-700 shadow-lg shadow-cyan-300">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
