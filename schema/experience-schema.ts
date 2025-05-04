

import {z} from 'zod'

export const AddExperienceSchema = z.object({
    image:z.custom<FileList>(),
    position:z.string().min(1),
    tech:z.array(z.string()),
    jobdesk:z.array(z.string()),
    startDate:z.string().date(),
    endDate:z.string().date()
})

export type AddExperienceSchemaDTO = z.infer<typeof AddExperienceSchema>