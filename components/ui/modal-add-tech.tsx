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
import { AddTechSchema, AddTechSchemaDTO } from "@/schema/tech-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReactNode } from "react"
import { useForm } from "react-hook-form"

export function ModalTech({ trigger }: { trigger: ReactNode }) {

  const {handleSubmit,register,formState:{errors}} = useForm<AddTechSchemaDTO>({
    mode:"onChange",
    resolver:zodResolver(AddTechSchema)
  })
  const onSubmit = (data:any)=>{console.log(data)}

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
          <Button type="submit">Add</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
