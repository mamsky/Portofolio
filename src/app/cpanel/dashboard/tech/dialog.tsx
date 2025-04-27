import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { TechShcemas, TechShcemasDTO } from "@/lib/schemas/tech.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";

const TechDialog = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TechShcemasDTO>({
    mode: "onChange",
    resolver: zodResolver(TechShcemas),
  });

  const onSubmit = () => {
    console.log(watch());
  };

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
            {...register("name")}
            placeholder="Name"
            className="py-6 px-4"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="my-4">
          <label htmlFor="images">images:</label>
          <Input id="images" type="file" {...register("images")} />
          {errors.images && (
            <p className="text-red-500">
              {(errors.images as FieldError).message}
            </p>
          )}
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          className="w-full bg-cyan-500 text-2xl hover:bg-cyan-700 cursor-pointer px-4 py-6 "
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TechDialog;
