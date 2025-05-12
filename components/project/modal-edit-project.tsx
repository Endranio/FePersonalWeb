"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { ProjectSchema, ProjectSchemaDTO } from "@/schema/project-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RxCross1 } from "react-icons/rx";
import UseField from "../work-experience/hooks/use-field";
import { ProjectDTO } from "@/types/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { ProjectResponse } from "@/response/project-response";
import axios from "axios";
import { toast } from "sonner";
import Spinner from "../ui/spiner";
import { DialogClose } from "@radix-ui/react-dialog";

export function ModalEditProject({
  trigger,
  defaultValue,
}: {
  trigger: ReactNode;
  defaultValue: ProjectDTO;
}) {

  const closeRef = useRef<HTMLButtonElement>(null)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProjectSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
  });

  useEffect(() => {
    if (defaultValue) {
      reset({
        isDemo: defaultValue.isDemo,
        description: defaultValue.description,
        isGithub: defaultValue.isGithub,
        linkDemo: defaultValue.linkDemo,
        linkGithub: defaultValue.linkGithub,
        tech: defaultValue.tech,
       
        title: defaultValue.title,

      });
    }
  }, [defaultValue, reset]);

  const github = watch("isGithub", false);
  const demo = watch("isDemo", false);

  const { handleDeleteTech, handletech, techs } = UseField(defaultValue.tech);

  const queryClient = useQueryClient()
  const {mutateAsync,isPending} = useMutation<any,Error,ProjectSchemaDTO>({
    mutationKey:["edit-project"],
    mutationFn: async(data:ProjectSchemaDTO)=>{
      let imageUrl = defaultValue.image
      if(data.image[0]){
      const formData = new FormData()
      formData.append("image",data.image[0])
      const newImageurl = await api.post("/upload",formData)
      imageUrl = newImageurl.data.imageUrl
      console.log(imageUrl,"imageurl")}
      const projectData = {
      
       ...data,
        image:imageUrl
      }
      console.log("projectdata",projectData)
      console.log(defaultValue.id,"id")
      const response = await api.patch(`/projects/${defaultValue.id}`,projectData)
      console.log(response.data,"res")
      return response.data
    },
    onError:(error)=>{
      if (axios.isAxiosError(error)){
        return toast.error(error.response?.data.message)
      }
      toast.error("something wrong")
    },
    onSuccess: async (data) =>{
      await queryClient.invalidateQueries({
        queryKey:["projects"]
        
      })
      toast.success(data.message)
      closeRef.current?.click()
    }

  })

  const onSubmit = async(data: ProjectSchemaDTO) => {
    console.log(data,"ini dtaa")
    await mutateAsync(data)
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[110vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
          <DialogDescription>
            Edit your project
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className=" flex flex-col gap-2">
            <Label htmlFor="position">Title Project</Label>
            <Input
              id="position"
              placeholder="Fullstack Developer"
              {...register("title")}
            />
             <p className="text-red-500 text-xs">{errors.title?.message}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            {techs.map((_, index) => (
              <div className="flex" key={index}>
                <Input
                  id="tech"
                  placeholder="React"
                  {...register(`tech.${index}`)}
                />
                 <p className="text-red-500 text-xs">{errors.tech?.message}</p>
                {index !== 0 && (
                  <Button
                    className="w-[10%]"
                    variant="ghost"
                    type="button"
                    onClick={() => handleDeleteTech(index)}
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button className="w-[20%]" type="button" onClick={handletech}>Add tech</Button>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="description"
              {...register("description")}
              
            />
             <p className="text-red-500 text-xs">{errors.description?.message}</p>
          </div>
          <div className="flex gap-5 w-full">
            <div className="w-1/2 mt-2 flex items-center gap-2">
              <Input
                id="available"
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                {...register("isGithub")}
              />

              <Label htmlFor="available" className="text-sm">
                Github
              </Label>
              <p className="text-red-500 text-xs">{errors.isGithub?.message}</p>
            </div>

            <div className="w-1/2 mt-2 flex items-center gap-2">
              <Input
                id="available"
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                {...register("isDemo")}
              />

              <Label htmlFor="available" className="text-sm">
                Live Demo
              </Label>
              <p className="text-red-500 text-xs">{errors.isDemo?.message}</p>
            </div>
          </div>
          {github && (
            <div className=" flex flex-col gap-2">
              <Label htmlFor="link-github">Link Github</Label>
              <Input id="link-github" {...register("linkGithub")} />
              <p className="text-red-500 text-xs">{errors.linkGithub?.message}</p>
            </div>
          )}

          {demo && (
            <div className=" flex flex-col gap-2">
              <Label htmlFor="link-demo">Link Live Demo</Label>
              <Input id="link-demo" {...register("linkDemo")} />
              <p className="text-red-500 text-xs">{errors.linkDemo?.message}</p>
            </div>
          )}
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Project Picture</Label>
            <Input id="company" type="file" {...register("image")} />
            <p className="text-red-500 text-xs">{errors.isGithub?.message}</p>
          </div>
          {Object.entries(errors).map(([key, val]) => (
  <p key={key} className="text-red-500 text-xs">
    {val?.message as string}
  </p>
))}

          <DialogFooter>
            <Button disabled={isPending} type="submit">{isPending?(<Spinner/> ):"Save"}</Button>
            <DialogClose asChild>
              <Button ref={closeRef} hidden/>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
