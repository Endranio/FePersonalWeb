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
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from "react";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import {
  AddExperienceSchema,
  AddExperienceSchemaDTO,
} from "@/schema/experience-schema";

import { RxCross1 } from "react-icons/rx";
import UseField from "./hooks/use-field";

export function ModalAddExperience({ trigger }: { trigger: ReactNode }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddExperienceSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(AddExperienceSchema),
  });
  const onSubmit = (data: any) => console.log(data);

  const {handleDeleteJob,handleDeleteTech,handlejobdesk,handletech,jobs,techs} = UseField()

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Experience</DialogTitle>
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
                    variant="ghost"
                    onClick={() => {
                      handleDeleteTech(index);
                    }}
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button onClick={handletech} className="w-[20%]">
              AddTech
            </Button>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            {jobs.map((_,index) => (
              <div className="flex gap-2" key={index}>
                <Input
                  id="description"
                  placeholder="description"
                  {...register(`jobdesk.${index}`)}
                />
                {index !== 0 && (
                  <Button
                    onClick={() => {
                      handleDeleteJob(index);
                    }}
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

            <p className="text-red-500 text-sm">{errors.jobdesk?.message}</p>
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
            <Input id="company" type="file" {...register("image")} />

            <p className="text-red-500 text-sm">{errors.image?.message}</p>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
