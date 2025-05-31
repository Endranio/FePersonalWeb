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
import { ReactNode, useEffect } from "react";
import { useFieldArray } from "react-hook-form";

import { RxCross1 } from "react-icons/rx";

import { DialogClose } from "@radix-ui/react-dialog";
import ImagePreview from "../../ui/image-preview";
import Spinner from "../../ui/spiner";
import UseAddExperience from "../hooks/add-experience";

export function ModalAddExperience({ trigger }: { trigger: ReactNode }) {
  const {
    register,
    handleSubmit,
    errors,
    control,
    isPending,
    onSubmit,
    closeRef,
    file,
    setFile
  } = UseAddExperience();
  
  const {
    append: appendTech,
    remove: removeTech,
    fields: fieldsTech,
  } = useFieldArray({ control, name: "tech" });
  const {
    append: appendJob,
    remove: removeJob,
    fields: fieldJob,
  } = useFieldArray({ control, name: "jobdesk" });
  useEffect(() => {
    if (fieldsTech.length === 0) {
      appendTech({ value: "" });
    }
    if (fieldJob.length === 0) {
      appendJob({ value: "" });
    }
  }, [appendJob,appendTech,fieldJob.length,fieldsTech.length]);


  
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[110vh] overflow-y-auto">
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
            {fieldsTech.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <Input
                  id="tech"
                  placeholder="React"
                  {...register(`tech.${index}.value`)}
                />

                <p className="text-red-500 text-sm">{errors.tech?.message}</p>
                {index !== 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      removeTech(index);
                    }}
                  >
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button
              onClick={() => appendTech({ value: "" })}
              className="w-[20%]"
            >
              AddTech
            </Button>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            {fieldJob.map((field, index) => (
              <div className="flex gap-2" key={field.id}>
                <Input
                  id="description"
                  placeholder="description"
                  {...register(`jobdesk.${index}.value`)}
                />
                {index !== 0 && (
                  <Button
                    type="button"
                    onClick={() => {
                      removeJob(index);
                    }}
                    variant="ghost"
                  >
                    {" "}
                    <RxCross1 />
                  </Button>
                )}
              </div>
            ))}
            <Button
              onClick={() => appendJob({ value: "" })}
              className="w-[20%]"
            >
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
            <Input id="company" type="text" {...register("company")} />

            <p className="text-red-500 text-sm">{errors.company?.message}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Image</Label>
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
            <DialogClose asChild>
              <Button ref={closeRef} className="hidden" />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
