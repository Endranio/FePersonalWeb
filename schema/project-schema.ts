
import {z} from 'zod'

export const ProjectSchema =z.object({
   image:z.custom<FileList | string>(),
    title:z.string().min(1),
    tech:z.array(z.string()).min(1),
    description:z.string().min(1),
    linkGithub:z.string().optional().transform((val) => (val === "" ? null : val)).nullable(),
    linkDemo:z.string().optional().nullable().transform((val) => (val === "" ? null : val)),
    isGithub : z.boolean(),
    isDemo : z.boolean() 
})
.refine((data)=>!data.isGithub || (data.isGithub && data.linkGithub?.trim() !==""),{
    message:"link github is required",
    path:["linkGithub"]
} )
.refine((data)=>!data.isDemo || (data.isDemo && data.linkDemo?.trim() !== ""),{
    message:"link demo is required",
    path:['linkDemo']
})
export type ProjectSchemaDTO = z.infer<typeof ProjectSchema>