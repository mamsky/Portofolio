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
import {
  ProjectSchemas,
  ProjectSchemasDTO,
} from "@/lib/schemas/project.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useFieldArray, useForm } from "react-hook-form";

const ProjectDialog = () => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectSchemasDTO>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchemas),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tech",
  });

  const onSubmit = () => {
    console.log(errors);

    console.log(watch());
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="cursor-pointer border p-2 rounded-md">
          Add New Project
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <div className="">
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              type="text"
              {...register("title")}
              placeholder="Title"
              className="px-4 py-6"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="">
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Description...."
              className="px-4 py-6"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div className=" w-6.5xl flex flex-col gap-4">
            <Button
              onClick={() => append({ value: "" })}
              className="py-6 px-4 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white"
            >
              Add New Tech
            </Button>
            <label htmlFor="tech">Tech</label>
            {fields.map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Input
                  id="tech"
                  type="text"
                  {...register(`tech.${i}.value`)}
                  placeholder="Tech"
                  className="px-4 py-6"
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
            {errors.tech && (
              <p className="text-red-500">{errors.tech.message}</p>
            )}
          </div>
          <div className="">
            <label htmlFor="link-demo">Link Demo</label>
            <Input
              id="link-demo"
              type="text"
              {...register("demo")}
              placeholder="Link Demo"
              className="px-4 py-6"
            />
            {errors.demo && (
              <p className="text-red-500">{errors.demo.message}</p>
            )}
          </div>
          <div className="">
            <label htmlFor="link-repo">Link Github</label>
            <Input
              id="link-repo"
              type="text"
              {...register("github")}
              placeholder="Link Github"
              className="px-4 py-6"
            />
            {errors.github && (
              <p className="text-red-500">{errors.github.message}</p>
            )}
          </div>
          <div className="">
            <label htmlFor="images">Images</label>
            <Input id="images" type="file" {...register("images")} />
            {errors.images && (
              <p className="text-red-500">
                {(errors.images as FieldError).message}
              </p>
            )}
          </div>

          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full px-4 py-6 text-2xl bg-cyan-500 hover:bg-cyan-700 cursor-pointer"
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDialog;
