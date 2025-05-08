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
import {
  AddExperienceSchema,
  AddExperienceSchemaDTO,
} from "@/schema/experience-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WorkExDTO } from "@/types/type";
import { api } from "@/lib/api";
import UseField from "./hooks/use-field";
import { RxCross1 } from "react-icons/rx";
import Spinner from "../ui/spiner";

export function ModalEditExperience({
  trigger,
  defaultValues,
}: {
  trigger: ReactNode;
  defaultValues: WorkExDTO;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
    reset,
  } = useForm<AddExperienceSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(AddExperienceSchema),
  });


  useEffect(() => {
    if (defaultValues) {
      reset({
        position: defaultValues.position,
        tech: defaultValues.tech,
        jobdesk: defaultValues.jobDesk,
        startDate: defaultValues.startDate,
        endDate: defaultValues.endDate,
        image: undefined,
      });
    }
  }, [defaultValues, reset]);

  const queryClient = useQueryClient()
  const {mutateAsync,isPending} = useMutation<any,Error,AddExperienceSchemaDTO>({
    mutationKey:["edit-experience"],
    mutationFn:async (data:AddExperienceSchemaDTO)=>{
let imageUrl = defaultValues.image
if(data.image){
  const formData = new FormData()
  formData.append("image",data.image[0])
  const newImageUrl = await api.post("/upload",formData)
  imageUrl = newImageUrl.data.imageUrl
}

const experienceData ={
  ...data,
  image:imageUrl
}
const res = await api.patch(`/experience/${defaultValues.id}`,experienceData)
return res.data
    }
  })

  const onSubmit = (data:AddExperienceSchemaDTO) => {
    mutateAsync(data)
  };

  const {
    handleDeleteJob,
    handleDeleteTech,
    handlejobdesk,
    handletech,
    jobs,
    techs,
  } = UseField(defaultValues.jobDesk, defaultValues.tech);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[110vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Experience</DialogTitle>
          <DialogDescription>
            Add a new work experience to your portfolio
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className=" flex flex-col gap-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              placeholder="Fullstack Developer"
              defaultValue={defaultValues.position}
              {...register("position")}
            />
            <p className="text-red-500 text-sm">{errors.position?.message}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            {techs.map((_, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  id="tech"
                  placeholder="React"
                  {...register(`tech.${index}`)}
                />
                <p className="text-red-500 text-sm">{errors.tech?.message}</p>
                {index !== 0 && (
                  <Button
                    onClick={() => handleDeleteTech(index)}
                    variant="ghost"
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button onClick={handletech} className="w-[20%]">
              Add tech
            </Button>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            {jobs.map((_, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  id="description"
                  placeholder="description"
                  {...register(`jobdesk.${index}`)}
                />
                <p className="text-red-500 text-sm">
                  {errors.jobdesk?.message}
                </p>
                {index !== 0 && (
                  <Button
                    onClick={() => handleDeleteJob(index)}
                    variant="ghost"
                  >
                    {" "}
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button onClick={handlejobdesk} className="w-[20%]">
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
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Company" {...register("company")} />
            <p className="text-red-500 text-sm">{errors.company?.message}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Image</Label>
            <Input id="company" type="file" {...register("image")} />
            <p className="text-red-500 text-sm">{errors.image?.message}</p>
          </div>
          <DialogFooter>
            <Button  type="submit" disabled={isPending}>{isPending?<Spinner/>:"Save"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
