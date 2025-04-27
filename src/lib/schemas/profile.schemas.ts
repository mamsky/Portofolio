import { z } from "zod";

export const ProfileSchemas = z.object({
  surname: z.string().max(20),
  images: z
    .any()
    .refine((image) => image instanceof FileList && image.length > 0, {
      message: "Please upload an image",
    }),
  profession: z.string(),
  bio: z.string(),
  location: z.string(),
  status: z.enum(["true", "false"]),
});

export type ProfileSchemaDTO = z.infer<typeof ProfileSchemas>;
