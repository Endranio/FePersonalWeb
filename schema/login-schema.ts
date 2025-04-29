import {z} from 'zod'


export const loginschema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type LoginSchemaDTO = z.infer<typeof loginschema>