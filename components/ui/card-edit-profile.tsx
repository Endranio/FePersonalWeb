import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { Textarea } from "./textarea";

export default function CardEditProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex gap-5 w-full">
          <div className="w-1/2 flex flex-col gap-2">
            <Label htmlFor="name">Headers</Label>
            <Input id="name" placeholder="Headers of your project" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <Label htmlFor="position">Posistion</Label>
            <Input id="position" placeholder="Position" />
          </div>
        </div>
        <div className="flex gap-5 w-full">
           
          <div className="w-1/2 flex flex-col gap-2">
            <Label htmlFor="whatsapp">Whatsapp</Label>
            <Input id="whatsapp" placeholder="08123" />
          </div>
        <div className=" flex flex-col w-1/2 gap-2">
          <Label htmlFor="cv">Link Cv</Label>
          <Input id="cv" type="url" placeholder="cv" />
        </div>
        </div>


        <div className="w-1/2 mt-2 flex items-center gap-2">
          <Input
            id="available"
            type="checkbox"
            className="w-4 h-4 accent-blue-600"
          />
          <Label htmlFor="available" className="text-sm">
            Available For New Project
          </Label>
        </div>

        <div className=" flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="endranio576@gmail.com" />
        </div>
        <div className=" flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" className="h-25"  />
        </div>
        <div className=" flex flex-col gap-2">
          <Label htmlFor="profile">Profile Picture</Label>
          <Input id="profile" type="file" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
