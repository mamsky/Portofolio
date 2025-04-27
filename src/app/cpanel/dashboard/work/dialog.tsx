"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  WorkExperienceShemas,
  WorkExperienceShemasDTO,
} from "@/lib/schemas/work.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useFieldArray, useForm } from "react-hook-form";

const DialogPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WorkExperienceShemasDTO>({
    mode: "onChange",
    resolver: zodResolver(WorkExperienceShemas),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "description",
  });

  const onSubmit = () => {
    console.log(watch());
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="border p-2 rounded-md cursor-pointer">
          Add New Work Experience
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Work Experience</DialogTitle>
            <div className="">
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                type="text"
                placeholder="Title"
                className="px-4 py-6"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div className="">
              <label htmlFor="location">location</label>
              <Input
                id="location"
                type="text"
                placeholder="Location"
                className="px-4 py-6"
                {...register("location")}
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div className=" w-6.5xl flex flex-col gap-4">
              <Button
                onClick={() => append({ desc: "" })}
                className="py-6 px-4 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white"
              >
                Add New Description
              </Button>
              <label htmlFor="desc">Description</label>
              {fields.map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder={`Description ${i + 1}`}
                    className="px-4 py-6"
                    {...register(`description.${i}.desc`)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => remove(i)}
                    className="px-4 py-6 text-xl"
                  >
                    X
                  </Button>
                </div>
              ))}
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <div className="">
              <label htmlFor="date">Date</label>
              <Input
                id="date"
                type="date"
                min="2017-06-01"
                max="2030-12-12"
                className="px-4 py-6"
                {...register("date")}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div className="">
              <label htmlFor="image">Picture</label>
              <Input type="file" id="image" {...register("images")} />
              {errors.images?.message && (
                <p className="text-red-500">
                  {(errors.images as FieldError).message}
                </p>
              )}
            </div>
            <div className="my-3">
              <Button
                onClick={handleSubmit(onSubmit)}
                className="w-full px-4 py-6 text-4xl font-medium text-shadow-2xs text-shadow-amber-400 bg-cyan-500 text-white cursor-pointer hover:bg-cyan-700 shadow-lg shadow-cyan-300"
              >
                Submit
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPage;
