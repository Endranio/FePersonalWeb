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
import { DialogClose } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import ImagePreview from "../../ui/image-preview";
import UseAddTech from "../hooks/add-tech";

export function ModalTech({ trigger }: { trigger: ReactNode }) {
  const {
    handleSubmit,
    onSubmit,
    errors,
    register,
    file,
    setFile,
    isPending,
    closeRef,
  } = UseAddTech();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Technology</DialogTitle>
          <DialogDescription>
            Add a new technology to your tech stack
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Tech
            </Label>
            <Input
              id="username"
              type="file"
              className="col-span-3"
              {...register("tech", {
                onChange: (e) => {
                  const selectedFile = e.target.files?.[0] || null;

                  setFile(selectedFile);
                },
              })}
            /> 
            <ImagePreview file={file} />
            <p>{errors.tech?.message}</p>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <div className="w-5 h-5 border-2 border-t-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Continue"
              )}
            </Button>
            <DialogClose asChild>
              <Button ref={closeRef} hidden />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
