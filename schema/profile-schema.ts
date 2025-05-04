import {z} from 'zod'

export const ProfileSchema = z.object({
    image:z.custom<FileList>(),
    headers:z.string().min(1),
    description:z.string().min(1),
    location:z.string().min(1),
    email:z.string().email(),
    whatsapp:z.number()
    
})