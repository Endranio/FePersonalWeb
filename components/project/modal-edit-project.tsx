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
import { ReactNode, useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { ProjectSchema, ProjectSchemaDTO } from "@/schema/project-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RxCross1 } from "react-icons/rx";
import UseField from "../work-experience/hooks/use-field";
import { ProjectDTO } from "@/types/type";

export function ModalEditProject({
  trigger,
  defaultValue,
}: {
  trigger: ReactNode;
  defaultValue: ProjectDTO;
}) {
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
        demo: defaultValue.isDemo,
        description: defaultValue.description,
        github: defaultValue.isGithub,
        linkDemo: defaultValue.linkDemo,
        linkGithub: defaultValue.linkGithub,
        tech: defaultValue.tech,
        name: defaultValue.title,
      });
    }
  }, [defaultValue, reset]);

  const github = watch("github", false);
  const demo = watch("demo", false);

  const { handleDeleteTech, handletech, techs } = UseField(defaultValue.tech);

  const onSubmit = (data: any) => console.log(data);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
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
            <Button className="w-[20%]" onClick={handletech}>Add tech</Button>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="description"
              {...register("description")}
            />
          </div>
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
            </div>
          )}

          {demo && (
            <div className=" flex flex-col gap-2">
              <Label htmlFor="link-demo">Link Live Demo</Label>
              <Input id="link-demo" {...register("linkDemo")} />
            </div>
          )}
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Project Picture</Label>
            <Input id="company" type="file" {...register("image")} />
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
