import { api } from "@/lib/api";
import {
    EditExperienceSchemaDTO,
    ExperienceSchema,
    ExperienceSchemaDTO
} from "@/schema/experience-schema";
import { WorkExResponse } from "@/types/response";
import { WorkExDTO } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseEditExperience(defaultValues:WorkExDTO){
   const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ExperienceSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(ExperienceSchema),
  });

  const closeRef = useRef<HTMLButtonElement>(null);

const {
    fields: techFields,
    append: appendTech,
    remove: removeTech,
    replace: replaceTech,
  } = useFieldArray({ control, name: "tech" });

  const {
    fields: jobFields,
    append: appendJob,
    remove: removeJob,
    replace: replaceJobs,
  } = useFieldArray({ control, name: "jobdesk" });


  useEffect(() => {
    if (defaultValues) {
      const techFields = defaultValues.tech.map((item) => ({ value: item }));
      const jobdeskFields = defaultValues.jobdesk.map((item) => ({
        value: item,
      }));

      reset({
        position: defaultValues.position,
        company: defaultValues.company,
        tech: techFields,
        jobdesk: jobdeskFields,
        startDate: defaultValues.startDate,
        endDate: defaultValues.endDate,
      });
      replaceTech(techFields); replaceJobs(jobdeskFields);
    }
  }, [defaultValues, reset,replaceTech,replaceJobs]);

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<
    WorkExResponse,
    Error,
    EditExperienceSchemaDTO
  >({
    mutationKey: ["edit-experience"],
    mutationFn: async (data: EditExperienceSchemaDTO) => {
      let imageUrl = defaultValues.image;

      if (data.image) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const newImageUrl = await api.post("/upload", formData);
        imageUrl = newImageUrl.data.imageUrl;
      }

      const experienceData = {
        ...data,
        image: imageUrl,
      };

      const res = await api.patch(
        `/experience/${defaultValues.id}`,
        experienceData
      );
      return res.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Upload failed");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["experience"] });
      toast.success(data.message);
      closeRef.current?.click();
    },
  });

  const onSubmit = (data: ExperienceSchemaDTO) => {
    const transformData: EditExperienceSchemaDTO = {
      ...data,
      tech: data.tech.map((item) => item.value),
      jobdesk: data.jobdesk.map((item) => item.value),
    };
    mutateAsync(transformData);
  };

  
  const [file, setFile] = useState<File | null>(null);

  return{
    register,
    handleSubmit,
    errors,
    techFields,
    appendTech,
    removeTech,
    jobFields,
    appendJob,
    removeJob,
    file,
    setFile,
    isPending,
    onSubmit,
    closeRef
  }
    
}