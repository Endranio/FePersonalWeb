'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/lib/api"
import { AddTechSchema, AddTechSchemaDTO } from "@/schema/tech-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogClose } from "@radix-ui/react-dialog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { ReactNode, useRef } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function ModalTech({ trigger }: { trigger: ReactNode }) {

  const closeRef = useRef<HTMLButtonElement>(null)

  const {handleSubmit,register,formState:{errors},reset} = useForm<AddTechSchemaDTO>({
    mode:"onChange",
    resolver:zodResolver(AddTechSchema)
  })

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<
    any,
    Error,
    AddTechSchemaDTO
  >({
    mutationKey: ['add-techs'],
    mutationFn: async (data: AddTechSchemaDTO) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('tech', data.tech[0]);

      const response = await api.post('/techs', formData);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }

      toast.error('something wrong');
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['techs'],
      });
      toast.success(data.message);
      closeRef.current?.click()
      reset()

    },
  });


  const onSubmit = async(data:AddTechSchemaDTO)=>{
    
    await mutateAsync(data)

  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
{trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Technology</DialogTitle>
          <DialogDescription>
          Add a new technology to your tech stack
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" {...register("name")}/>
            <p>{errors.name?.message}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Tech
            </Label>
            <Input id="username" type="file" className="col-span-3" {...register("tech")} />
            <p>{errors.tech?.message}</p>
          </div>
      
          
        <DialogFooter>
        

          <Button type="submit" disabled={isPending}>{isPending ? (
            <div className="w-5 h-5 border-2 border-t-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Continue"
          )}</Button>
        <DialogClose asChild>
          <Button ref={closeRef} hidden/>
        </DialogClose>
        </DialogFooter>

        
        </form>
      </DialogContent>
    </Dialog>
  )
}
