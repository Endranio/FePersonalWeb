

import {z} from 'zod'

export const AddExperienceSchema = z.object({
    image:z.custom<FileList>(),
    position:z.string().min(1),
    tech:z.string().min(1),
    jobdesk:z.string().min(1),
    startDate:z.string().date(),
    endDate:z.string().date()
})

export type AddExperienceSchemaDTO = z.infer<typeof AddExperienceSchema>