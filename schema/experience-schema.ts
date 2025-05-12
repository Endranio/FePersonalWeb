

import {z} from 'zod'

export const AddExperienceSchema = z.object({
    image:z.custom<FileList>(),
    company:z.string().min(1),
    position:z.string().min(1),
    tech:z.array(z.string()),
    jobdesk:z.array(z.string()),
    startDate:z.string().date(),
    endDate:z.string().date()
})

export type AddExperienceSchemaDTO = z.infer<typeof AddExperienceSchema>


export const EditExperienceSchema = z.object({
    image:z.custom<FileList | string>(),
    company:z.string().min(1),
    position:z.string().min(1),
    tech:z.array(z.string()),
    jobdesk:z.array(z.string()),
    startDate:z.string().date(),
    endDate:z.string().date()
})

export type EditExperienceSchemaDTO = z.infer<typeof EditExperienceSchema>