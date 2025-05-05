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
import { ReactNode, useState } from "react";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { ProjectSchema, ProjectSchemaDTO } from "@/schema/project-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import UseField from "../work-experience/hooks/use-field";
import { RxCross1 } from "react-icons/rx";

export function ModalAddProject({ trigger }: { trigger: ReactNode }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ProjectSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
  });

  const github = watch("github", false);
  const demo = watch("demo", false);

  const onSubmit = ()=>console.log(watch())
  const { techs, handletech, handleDeleteTech } = UseField();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Add a new project to your portfolio
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className=" flex flex-col gap-2">
            <Label htmlFor="position">Title Project</Label>
            <Input
              id="position"
              placeholder="Fullstack Developer"
              {...register("name")}
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            {techs.map((_, index) => (
              <div className="flex gap-2" key={index}>
                <Input
                  id="tech"
                  placeholder="React"
                  {...register(`tech.${index}`)}
                />
                <p className="text-red-500 text-sm">{errors.tech?.message}</p>
                {index !== 0 && (
                  <Button
                    className="w-[10%]"
                    variant="ghost"
                    onClick={() => handleDeleteTech(index)}
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button className="w-[20%]" onClick={handletech}>
              Add tech
            </Button>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="description"
              {...register("description")}
            />
          </div>
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
          <div className="flex gap-5 w-full">
            <div className="w-1/2 mt-2 flex items-center gap-2">
              <Input
                id="available"
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                {...register("github")}
              />
              <Label htmlFor="available" className="text-sm">
                Github
              </Label>
            </div>

            <div className="w-1/2 mt-2 flex items-center gap-2">
              <Input
                id="available"
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                {...register("demo")}
              />
              <Label htmlFor="available" className="text-sm">
                Live Demo
              </Label>
            </div>
          </div>
          {github && (
            <div className=" flex flex-col gap-2">
              <Label htmlFor="link-github">Link Github</Label>
              <Input id="link-github" {...register("linkGithub")} />
              <p className="text-red-500 text-sm">
                {errors.linkGithub?.message}
              </p>
            </div>
          )}

          {demo && (
            <div className=" flex flex-col gap-2">
              <Label htmlFor="link-demo">Link Live Demo</Label>
              <Input id="link-demo" {...register("linkDemo")} />
              <p className="text-red-500 text-sm">{errors.linkDemo?.message}</p>
            </div>
          )}
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Project Picture</Label>
            <Input id="company" type="file" {...register("image")} />
            <p className="text-red-500 text-sm">{errors.image?.message}</p>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
