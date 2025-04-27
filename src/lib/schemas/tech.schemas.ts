import { z } from "zod";

export const TechShcemas = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  images: z.any().refine((img) => img instanceof FileList && img.length > 0, {
    message: "Please upload an image",
  }),
});

export type TechShcemasDTO = z.infer<typeof TechShcemas>;
