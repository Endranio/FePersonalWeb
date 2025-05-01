import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactNode } from "react"

export function ModalEditExperience({ trigger }: { trigger: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
{trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Experience</DialogTitle>
          <DialogDescription>
          Add a new work experience to your portfolio
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className=" flex flex-col gap-2">
            <Label htmlFor="position">Position</Label>
            <Input id="position" placeholder="Fullstack Developer" />
          </div>
        <div className=" flex flex-col gap-2">
            <Label htmlFor="tech">Tech Stack</Label>
            <Input id="tech" placeholder="React" />
          </div>
        <div className=" flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="description" />
          </div>
          <div className="flex gap-5 w-full">
          <div className="w-1/2 flex flex-col gap-2">
            <Label htmlFor="start">Start Date</Label>
            <Input id="start" type="date"/>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <Label htmlFor="end">End Date</Label>
            <Input id="end" type="date"/>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" type="file" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
