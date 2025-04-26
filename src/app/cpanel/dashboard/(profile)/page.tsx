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
import Image from "next/image";
import ImagesLogo from "@/assets/dumbways.png";

const ProfilePage = () => {
  return (
    <div className="p-4 mt-10">
      <h1 className="text-4xl mb-8 font-bold">Profile Setting</h1>
      <div className="flex justify-center">
        <Image
          src={ImagesLogo}
          alt="logo"
          className="w-32 h-32 rounded-full bg-cover bg-center"
        />
      </div>
      <div className="my-4">
        <label htmlFor="name">Name:</label>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4">
        <label htmlFor="skill">Profession:</label>
        <Input
          id="profession"
          name="profession"
          type="text"
          placeholder="Full Stack Developer"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4">
        <label htmlFor="bio">Bio:</label>
        <Textarea id="bio" placeholder="Bio" name="bio" />
      </div>
      <div className="my-4">
        <label htmlFor="location">Location</label>
        <Input
          id="location"
          placeholder="Location"
          name="location"
          className="px-4 py-6"
        />
      </div>
      <div>
        <label htmlFor="available">Available or No</label>
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
