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
import {
  EditExperienceSchema,
  EditExperienceSchemaDTO,
  ExperienceSchema,
  ExperienceSchemaDTO,
} from "@/schema/experience-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WorkExDTO, WorkExFormDTO } from "@/types/type";
import { api } from "@/lib/api";
import { RxCross1 } from "react-icons/rx";
import Spinner from "../ui/spiner";
import axios from "axios";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";
import ImagePreview from "../ui/image-preview";

type EditExperianceProps = {
  trigger: ReactNode;
  defaultValues: WorkExDTO;
};

export function ModalEditExperience({
  trigger,
  defaultValues,
}: EditExperianceProps) {
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
      replaceTech(techFields), replaceJobs(jobdeskFields);
    }
  }, [defaultValues, reset]);

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<
    any,
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
  const [file, setFile] = useState<File | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[100vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Experience</DialogTitle>
          <DialogDescription>
            Update your work experience information
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              placeholder="Fullstack Developer"
              {...register("position")}
            />
            <p className="text-red-500 text-sm">{errors.position?.message}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            {techFields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <Input
                  placeholder="React"
                  {...register(`tech.${index}.value`)}
                />
                <p className="text-red-500 text-sm">
                  {errors.tech?.[index]?.value?.message}
                </p>
                {index !== 0 && (
                  <Button
                    type="button"
                    onClick={() => removeTech(index)}
                    variant="ghost"
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              onClick={() => appendTech({ value: "" })}
              className="w-[20%]"
            >
              Add tech
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="jobdesk">Description</Label>
            {jobFields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <Input
                  placeholder="Worked on APIs..."
                  {...register(`jobdesk.${index}.value`)}
                />
                <p className="text-red-500 text-sm">
                  {errors.jobdesk?.[index]?.value?.message}
                </p>
                {index !== 0 && (
                  <Button
                    type="button"
                    onClick={() => removeJob(index)}
                    variant="ghost"
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              onClick={() => appendJob({ value: "" })}
              className="w-[20%]"
            >
              Add job
            </Button>
          </div>

          <div className="flex gap-5 w-full">
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="start">Start Date</Label>
              <Input id="start" type="date" {...register("startDate")} />
              <p className="text-red-500 text-sm">
                {errors.startDate?.message}
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="end">End Date</Label>
              <Input id="end" type="date" {...register("endDate")} />
              <p className="text-red-500 text-sm">{errors.endDate?.message}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Company"
              {...register("company")}
            />
            <p className="text-red-500 text-sm">{errors.company?.message}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="file"
              {...register("image", {
                onChange: (e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  setFile(selectedFile);
                },
              })}
            />
            <ImagePreview file={file} defaultPreview={defaultValues.image} />
            <p className="text-red-500 text-sm">{errors.image?.message}</p>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? <Spinner /> : "Save"}
            </Button>
            <DialogClose asChild>
              <button ref={closeRef} hidden />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
