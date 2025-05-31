import { api } from "@/lib/api";
import {
  FormProjectSchema,
  FormProjectSchemaDTO,
  ProjectSchemaDTO,
} from "@/schema/project-schema";
import { ProjectResponse } from "@/types/response";
import { ProjectDTO } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseEditProjects(defaultValue: ProjectDTO) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    reset,
    control,
    unregister,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormProjectSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(FormProjectSchema),
  });
  const github = watch("isGithub", false);
  const demo = watch("isDemo", false);
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<ProjectResponse, Error, ProjectSchemaDTO>({
    mutationKey: ["edit-project"],
    mutationFn: async (data: ProjectSchemaDTO) => {
      let imageUrl = defaultValue.image;
      if (data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const newImageurl = await api.post("/upload", formData);
        imageUrl = newImageurl.data.imageUrl;
      }
      const projectData = {
        ...data,
        image: imageUrl,
      };

      const response = await api.patch(
        `/projects/${defaultValue.id}`,
        projectData
      );

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
      toast.success(data.message);
      closeRef.current?.click();
    },
  });

  const onSubmit = async (data: FormProjectSchemaDTO) => {
    const transformData: ProjectSchemaDTO = {
      ...data,
      tech: data.tech.map((item) => item.value),
    };
    await mutateAsync(transformData);
  };
  return {
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
  };
}
