import { api } from "@/lib/api";
import { FormProjectSchema, FormProjectSchemaDTO, ProjectSchemaDTO } from "@/schema/project-schema";
import { ProjectResponse } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseAddProject(){
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
const [file, setFile] = useState<File | null>(null);
  const github = watch("isGithub", false);
  const demo = watch("isDemo", false);

    const closeRef = useRef<HTMLButtonElement>(null)

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<ProjectResponse, Error, ProjectSchemaDTO>({
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
      setFile(null)
      reset();
      toast.success(data.message);
      closeRef.current?.click()
    },
  });

  const onSubmit = async (data: FormProjectSchemaDTO) => {
    const transformData: ProjectSchemaDTO = {
      ...data,
      tech: data.tech.map((item) => item.value),
    };
    await mutateAsync(transformData);
  };

    return{
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
        setFile,
        file
    }
    
    
}