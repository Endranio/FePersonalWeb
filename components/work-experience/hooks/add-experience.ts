
import {
    AddExperienceSchemaDTO,
    ExperienceSchema,
    ExperienceSchemaDTO
} from "@/schema/experience-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";


import { api } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export default function UseAddExperience(){
     const closeRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ExperienceSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(ExperienceSchema),
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<
    any,
    Error,
    AddExperienceSchemaDTO
  >({
    mutationKey: ["add-experience"],
    mutationFn: async (data: AddExperienceSchemaDTO) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      const imageUrl = await api.post("/upload", formData);

      const experienceData = {
        ...data,
        image: imageUrl.data.imageUrl,
      };
      const response = await api.post("/experience", experienceData);
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
        queryKey: ["experience"],
      });
      reset();
      toast.success(data.message);
      closeRef.current?.click();
    },
  });

  const onSubmit = async (data: ExperienceSchemaDTO) => {
    const transformData: AddExperienceSchemaDTO = {
      ...data,
      tech: data.tech.map((item) => item.value),
      jobdesk: data.jobdesk.map((item) => item.value),
    };
    await mutateAsync(transformData);
  };
  return{
    register,handleSubmit,errors,control,
    isPending,onSubmit,closeRef
  }
}