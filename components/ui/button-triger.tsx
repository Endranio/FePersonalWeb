import { Button } from "./button";
import { DialogTrigger } from "./dialog";

export default function ButtonTriger(){
    return(
        <DialogTrigger asChild>
        <Button variant="outline">+ Add Technology</Button>
      </DialogTrigger>
    )
}