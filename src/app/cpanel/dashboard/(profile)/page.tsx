"use client";
import ImagesLogo from "@/assets/dumbways.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ProfileSchemaDTO,
  ProfileSchemas,
} from "@/lib/schemas/profile.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaPaperclip } from "react-icons/fa";

const ProfilePage = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<ProfileSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(ProfileSchemas),
  });

  const onSubmit = () => {
    console.log(watch());
  };

  return (
    <div className="p-4 mt-10">
      <h1 className="text-4xl mb-8 font-bold">Profile Setting</h1>
      <div className="flex justify-center">
        <label htmlFor="images" className="cursor-pointer relative">
          <div className="absolute left-[70%] top-[70%]">
            <FaPaperclip size={20} />
          </div>
          <Image
            src={ImagesLogo}
            alt="logo"
            className="w-32 h-32 rounded-full bg-cover bg-center"
          />
          {errors.images && <p>{!!errors.images.message}</p>}
        </label>
        <Input id="images" type="file" hidden {...register("images")} />
      </div>
      <div className="my-4">
        <label htmlFor="name">Name:</label>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          className="px-4 py-6"
          {...register("surname")}
        />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>
      <div className="my-4">
        <label htmlFor="skill">Profession:</label>
        <Input
          id="profession"
          {...register("profession")}
          type="text"
          placeholder="Full Stack Developer"
          className="px-4 py-6"
        />
        {errors.profession && <p>{errors.profession.message}</p>}
      </div>
      <div className="my-4">
        <label htmlFor="bio">Bio:</label>
        <Textarea id="bio" placeholder="Bio" {...register("bio")} />
      </div>
      <div className="my-4">
        <label htmlFor="location">Location</label>
        <Input
          id="location"
          placeholder="Location"
          className="px-4 py-6"
          {...register("location")}
        />
        {errors.location && <p>{errors.location.message}</p>}
      </div>
      <div>
        <label htmlFor="available">Status</label>
        <div>
          <select
            {...register("status")}
            className="border px-2 py-4 text-muted-foreground rounded-md w-full bg-muted"
          >
            <option value={"true"}>Available</option>
            <option value="false">Not Available</option>
          </select>
          {errors.status && <p>{errors.status.message}</p>}
        </div>
      </div>
      <div className="my-4">
        <Button
          onClick={handleSubmit(onSubmit)}
          className="w-full px-4 py-6 text-4xl font-bold bg-cyan-500 text-white cursor-pointer hover:bg-cyan-700 shadow-lg shadow-cyan-300"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
