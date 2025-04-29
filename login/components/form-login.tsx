'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginSchemaDTO } from "@/schema/login-schema";
import { useForm } from 'react-hook-form';


export default function FormLogin(){

    const{
        register,
        handleSubmit
    } = useForm<LoginSchemaDTO>({
        mode:'onChange'

    })
    const onSubmit = handleSubmit((data)=>(console.log(data)))

    return(
        <form onSubmit={onSubmit} className="flex flex-col w-[350px] gap-5">
        <div>
             <Label htmlFor="email">Email</Label>
             <Input id="email" type="text" placeholder="Email*" {...register("email")} />
        </div>
        <div>
             <Label htmlFor="password">Password</Label>
             <Input id="password" type="password" placeholder="Password*" {...register("password")}/>
        </div>
        <Button type="submit">Login</Button>
        </form>
    )
}