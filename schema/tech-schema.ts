import {z} from 'zod'

export const AddTechSchema = z.object({
    tech:z.custom<FileList>(),
    name:z.string()
})
 
export type AddTechSchemaDTO = z.infer<typeof AddTechSchema>

export const UpdateTechSchema =z.object({
    tech:z.custom<FileList>(),
    name:z.string()
})

export type UpdateTechSchemaDTO = z.infer<typeof UpdateTechSchema>

export const DeleteTechSchema = z.object({
    id:z.string().uuid()
})

export type DeleteSchemaDTO = z.infer<typeof DeleteTechSchema>