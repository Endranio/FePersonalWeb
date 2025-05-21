"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../ui/button";
import ImagePreview from "../../ui/image-preview";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import Spinner from "../../ui/spiner";
import { Textarea } from "../../ui/textarea";
import UseEditProfile from "../hooks/edit-Profile";

export default function CardEditProfile() {
  const { register,
    handleSubmit,
    errors,
    isPending,
    onSubmit,
    file,
    setFile,
    profile} = UseEditProfile()

    console.log(errors,"ini error")
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information </CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-5">
          <div className="flex gap-5 w-full">
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="name">Headers</Label>
              <Input
                id="name"
                placeholder="Headers of your project"
                {...register("headers")}
              />
              <p className="text-red-500 text-sm">{errors.headers?.message}</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="position">Location</Label>
              <Input
                id="position"
                placeholder="Position"
                {...register("location")}
              />
              <p className="text-red-500 text-sm">{errors.location?.message}</p>
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="whatsapp">Whatsapp</Label>
              <Input
                id="whatsapp"
                placeholder="08123"
                {...register("whatsapp")}
              />
              <p className="text-red-500 text-sm">{errors.whatsapp?.message}</p>
            </div>
            <div className=" flex flex-col w-1/2 gap-2">
              <Label htmlFor="cv">Link Cv</Label>
              <Input id="cv" type="url" placeholder="cv" {...register("cv")} />
              <p className="text-red-500 text-sm">{errors.cv?.message}</p>
            </div>
          </div>

          <div className="w-1/2 mt-2 flex items-center gap-2">
            <Input
              id="available"
              type="checkbox"
              className="w-4 h-4 accent-blue-600"
              {...register("available")}
            />
            <Label htmlFor="available" className="text-sm">
              Available For New Project
            </Label>
            <p className="text-red-500 text-sm">{errors.available?.message}</p>
          </div>

            <div className="flex gap-5 w-full">
          <div className=" w-full flex flex-col gap-2">

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="endranio576@gmail.com"
              {...register("email")}
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div className=" flex flex-col gap-2 w-full">

            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              type="position"
              placeholder="Fullstack dev"
              {...register("position")}
            />
            <p className="text-red-500 text-sm">{errors.position?.message}</p>
          </div>
            </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="h-25"
              {...register("description")}
            />
            <p className="text-red-500 text-sm">
              {errors.description?.message}
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="profile">Profile Picture</Label>
            <Input
              id="profile"
              type="file"
              {...register("image", {
                onChange: (e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  setFile(selectedFile);
                },
              })}
            />
            <ImagePreview file={file} defaultPreview={profile?.image} />
            <p className="text-red-500 text-sm">{errors.image?.message}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled={isPending} type="submit">
            {isPending ? <Spinner /> : "Save"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
