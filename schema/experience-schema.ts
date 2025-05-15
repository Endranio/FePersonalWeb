

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
    tech:z.array(z.string().min(1)),
    jobdesk:z.array(z.string()),
    startDate:z.string().date(),
    endDate:z.string().date()
})



export type EditExperienceSchemaDTO = z.infer<typeof EditExperienceSchema>

export const ExperienceSchema = z.object({
    image:z.custom<FileList>(),
    company:z.string().min(1),
    position:z.string().min(1),
    tech:z.array(z.object({value:z.string().min(1)})),
    jobdesk:z.array(z.object({value:z.string().min(1)})),
    startDate:z.string().date(),
    endDate:z.string().date()
})

export type ExperienceSchemaDTO = z.infer<typeof ExperienceSchema>