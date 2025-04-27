import { z } from "zod";

export const ProjectSchemas = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  tech: z
    .array(
      z.object({
        value: z.string().min(1, { message: "Tech is required" }),
      })
    )
    .min(1, { message: "Tech is required" }),
  demo: z.string().min(1, { message: "Link Demo is required" }),
  github: z.string().min(1, { message: "Link Github is required" }),
  images: z.any().refine((img) => img instanceof FileList && img.length > 0, {
    message: "Please Upload An Image",
  }),
});

export type ProjectSchemasDTO = z.infer<typeof ProjectSchemas>;
