
import {z} from 'zod'

export const ProjectSchema =z.object({
    image:z.custom<FileList>(),
    name:z.string().min(1),
    tech:z.string().min(1),
    description:z.string().min(1),
    linkGithub:z.string(),
    linkDemo:z.string(),

})

export type ProjectSchemaDTO = z.infer<typeof ProjectSchema>