
import {z} from 'zod'

export const ProjectSchema =z.object({
    image:z.custom<FileList>(),
    name:z.string().min(1),
    tech:z.array(z.string()).min(1),
    description:z.string().min(1),
    linkGithub:z.string().optional(),
    linkDemo:z.string().optional(),
    github : z.boolean().optional(),
    demo : z.boolean().optional()
    
})

export type ProjectSchemaDTO = z.infer<typeof ProjectSchema>