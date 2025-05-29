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
import { api } from "@/lib/api";
import { ProjectDTO } from "@/types/type";
import { DialogClose } from "@radix-ui/react-dialog";
import { ReactNode, useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import ImagePreview from "../../ui/image-preview";
import Spinner from "../../ui/spiner";
import { Textarea } from "../../ui/textarea";
import UseEditProjects from "../hooks/edit-prjects";

export function ModalEditProject({
  trigger,
  defaultValue,
}: {
  trigger: ReactNode;
  defaultValue: ProjectDTO;
}) {
  const {
    onSubmit,
    closeRef,
    register,
    unregister,
    handleSubmit,
    errors,
    control,
    github,
    demo,
    isPending,
    reset,
  } = UseEditProjects(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      const techFields = defaultValue.tech.map((item) => ({ value: item }));
      reset({
        isDemo: defaultValue.isDemo,
        description: defaultValue.description,
        isGithub: defaultValue.isGithub,

        tech: techFields,

        title: defaultValue.title,
      });
      replace(techFields);
    }
  }, [defaultValue, reset]);

  useEffect(() => {
    const linkGithub = async () => {
      if (!github) {
        unregister("linkGithub");
      }
      await api.patch(`/projects/${defaultValue.id}`, { linkGithub: null });
    };

    linkGithub();
  }, [github]);

  useEffect(() => {
    const linkDemo = async () => {
      if (!demo) {
        unregister("linkDemo");
      }
      await api.patch(`/projects/${defaultValue.id}`, { linkDemo: null });

      linkDemo();
    };
  }, [demo]);

  const [file, setFile] = useState<File | null>(null);

  const { append, fields, remove, replace } = useFieldArray({
    control,
    name: "tech",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[110vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
          <DialogDescription>Edit your project</DialogDescription>
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
            {fields.map((field, index) => (
              <div className="flex" key={field.id}>
                <Input
                  id="tech"
                  placeholder="React"
                  {...register(`tech.${index}.value`)}
                />
                <p className="text-red-500 text-xs">{errors.tech?.message}</p>
                {index !== 0 && (
                  <Button
                    className="w-[10%]"
                    variant="ghost"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button
              className="w-[20%]"
              type="button"
              onClick={() => append({ value: "" })}
            >
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
            <p className="text-red-500 text-xs">
              {errors.description?.message}
            </p>
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
              <Input
                id="link-github"
                {...register("linkGithub")}
                defaultValue={defaultValue.linkGithub}
              />
              <p className="text-red-500 text-xs">
                {errors.linkGithub?.message}
              </p>
            </div>
          )}

          {demo && (
            <div className=" flex flex-col gap-2">
              <Label htmlFor="link-demo">Link Live Demo</Label>
              <Input
                id="link-demo"
                {...register("linkDemo")}
                defaultValue={defaultValue.linkDemo}
              />
              <p className="text-red-500 text-xs">{errors.linkDemo?.message}</p>
            </div>
          )}
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Project Picture</Label>
            <Input
              id="company"
              type="file"
              {...register("image", {
                onChange: (e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  setFile(selectedFile);
                },
              })}
            />

            <ImagePreview file={file} defaultPreview={defaultValue.image} />
            <p className="text-red-500 text-xs">{errors.isGithub?.message}</p>
          </div>

          <DialogFooter>
            <Button disabled={isPending} type="submit">
              {isPending ? <Spinner /> : "Save"}
            </Button>
            <DialogClose asChild>
              <Button ref={closeRef} hidden />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
