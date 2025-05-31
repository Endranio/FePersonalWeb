import { api } from "@/lib/api";
import { AddTechSchema, AddTechSchemaDTO } from "@/schema/tech-schema";
import { TechResponse } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseAddTech(){
 const closeRef = useRef<HTMLButtonElement>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<AddTechSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(AddTechSchema),
  });
  
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<TechResponse, Error, AddTechSchemaDTO>({
    mutationKey: ["add-techs"],
    mutationFn: async (data: AddTechSchemaDTO) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("tech", data.tech[0]);

      const response = await api.post("/techs", formData);
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
        queryKey: ["techs"],
      });
      setFile(null)
      toast.success(data.message);
      closeRef.current?.click();
      reset();
    },
  });

  const onSubmit = async (data: AddTechSchemaDTO) => {
    await mutateAsync(data);
  };

  return{
    handleSubmit,
    onSubmit,
    errors,
    register,
    file,
    setFile,
    isPending,
    closeRef
  }
}