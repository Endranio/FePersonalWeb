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
import { useFieldArray, useForm } from "react-hook-form";
import {
  FormProjectSchema,
  FormProjectSchemaDTO,
  ProjectSchema,
  ProjectSchemaDTO,
} from "@/schema/project-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import UseField from "../work-experience/hooks/use-field";
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import axios from "axios";
import { toast } from "sonner";
import Spinner from "../ui/spiner";
import ImagePreview from "../ui/image-preview";

export function ModalAddProject({ trigger }: { trigger: ReactNode }) {
  const {
    register,
    unregister,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
    control,
  } = useForm<FormProjectSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(FormProjectSchema),
  });

  const github = watch("isGithub", false);
  const demo = watch("isDemo", false);

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<any, Error, ProjectSchemaDTO>({
    mutationKey: ["add-project"],
    mutationFn: async (data: ProjectSchemaDTO) => {
      const formData = new FormData();

      formData.append("image", data.image[0]);

      const imageResponse = await api.post("/upload", formData);

      const projectData = {
        ...data,
        image: imageResponse.data.imageUrl,
      };

      const response = await api.post("/projects", projectData);

      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      reset();
      toast.success(data.message);
    },
  });

  const onSubmit = async (data: FormProjectSchemaDTO) => {
    const transformData: ProjectSchemaDTO = {
      ...data,
      tech: data.tech.map((item) => item.value),
    };
    await mutateAsync(transformData);
  };

  useEffect(() => {
    if (fields.length === 0) {
      append({ value: "" });
    }
  }, []);

  useEffect(() => {
    if (!github) {
      unregister("linkGithub");
    }
    if (!demo) {
      unregister("linkDemo");
    }
  }, [github, demo, unregister]);

  const { append, fields, remove } = useFieldArray({ control, name: "tech" });
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[110vh] overflow-y-auto">
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
              {...register("title")}
            />
            <p className="text-red-500 text-sm">{errors.title?.message}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            {fields.map((field, index) => (
              <div className="flex gap-2" key={field.id}>
                <Input
                  id="tech"
                  placeholder="React"
                  {...register(`tech.${index}.value`)}
                />
                <p className="text-red-500 text-sm">{errors.tech?.message}</p>
                {index !== 0 && (
                  <Button
                    className="w-[10%]"
                    variant="ghost"
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
          </div>
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
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
            <ImagePreview file={file} />
            <p className="text-red-500 text-sm">{errors.image?.message}</p>
          </div>
          <DialogFooter>
            <Button disabled={isPending} type="submit">
              {isPending ? <Spinner /> : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
