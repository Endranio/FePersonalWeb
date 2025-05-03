'use client'


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
import { ReactNode, useState } from "react";
import { Textarea } from "./textarea";

export function ModalAddProject({ trigger }: { trigger: ReactNode }) {


  const [isCheckedGithub, setIsCheckedGithub] = useState(false);
  const [isCheckedDemo, setIsCheckedDemo] = useState(false);
  

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Add a new project to your portfolio
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className=" flex flex-col gap-2">
            <Label htmlFor="position">Title Project</Label>
            <Input id="position" placeholder="Fullstack Developer" />
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            <Input id="tech" placeholder="React" />
          </div>
          <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="description" />
          </div>
          <div className="flex gap-5 w-full">
          <div className="w-1/2 mt-2 flex items-center gap-2">
          <Input
            id="available"
            type="checkbox"
            checked={isCheckedGithub}
            onChange={(e)=>{setIsCheckedGithub(e.target.checked)}}
            className="w-4 h-4 accent-blue-600"
          />
          <Label htmlFor="available" className="text-sm">
            Github
          </Label>
        </div>
       
        <div className="w-1/2 mt-2 flex items-center gap-2">
          <Input
            id="available"
            type="checkbox"
            className="w-4 h-4 accent-blue-600"
            checked={isCheckedDemo}
            onChange={(e)=>{setIsCheckedDemo(e.target.checked)}}
          />
          <Label htmlFor="available" className="text-sm">
            Live Demo
          </Label>
        </div>
          </div>
          {isCheckedGithub &&
        <div className=" flex flex-col gap-2">
        <Label htmlFor="link-github">Link Github</Label>
        <Input id="link-github" />
      </div>
        }

        {
          isCheckedDemo && 
          <div className=" flex flex-col gap-2">
        <Label htmlFor="link-demo">Link Live Demo</Label>
        <Input id="link-demo" />
      </div>
        }
          <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Project Picture</Label>
            <Input id="company" type="file" />
          </div>


      

        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
