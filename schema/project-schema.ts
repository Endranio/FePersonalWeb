import { z } from "zod";

export const ProjectSchema = z.object({
  image: z.custom<FileList | string>(),
  title: z.string().min(1),
  tech: z.array(z.string()).min(1),
  description: z.string().min(1),
  linkGithub: z.string().optional(),
  linkDemo: z.string().optional(),
  isGithub: z.boolean(),
  isDemo: z.boolean(),
});

export type ProjectSchemaDTO = z.infer<typeof ProjectSchema>;

export const FormProjectSchema = z.object({
  image: z.custom<FileList | string>(),
  title: z.string().min(1),
  tech: z.array(z.object({ value: z.string().min(1) })),
  description: z.string().min(1),
  linkGithub: z.string().optional(),
  linkDemo: z.string().optional(),
  isGithub: z.boolean(),
  isDemo: z.boolean(),
});

export type FormProjectSchemaDTO = z.infer<typeof FormProjectSchema>;
