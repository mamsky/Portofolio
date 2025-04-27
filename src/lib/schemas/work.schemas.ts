import { z } from "zod";

export const WorkExperienceShemas = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z
    .array(
      z.object({
        desc: z.string().min(1, { message: "Description cannot be empty" }),
      })
    )
    .min(1, { message: "At least one description is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  images: z.any().refine((img) => img instanceof FileList && img.length > 0, {
    message: "Please Upload an Image",
  }),
});

export type WorkExperienceShemasDTO = z.infer<typeof WorkExperienceShemas>;
