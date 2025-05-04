'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginschema, LoginSchemaDTO } from "@/schema/login-schema";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod";


export default function FormLogin(){

    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<LoginSchemaDTO>({
        mode:'onChange',
        resolver:zodResolver(loginschema)
    })

    const router = useRouter()

    const onSubmit = handleSubmit((data)=>{(console.log(data)),router.push('/dashboard')})

    return(
        <form onSubmit={onSubmit} className="flex flex-col w-[350px] gap-5">
        <div>
             <Label htmlFor="email">Email</Label>
             <Input id="email" type="text" placeholder="Email*" {...register("email")} />
             <p className="text-red-500 tex">{errors.email?.message}</p>
        </div>
        <div>
             <Label htmlFor="password">Password</Label>
             <Input id="password" type="password" placeholder="Password*" {...register("password")}/>
             <p className="text-red-500 tex">{errors.password?.message}</p>
        </div>
        <Button type="submit">Login</Button>
        </form>
    )
}