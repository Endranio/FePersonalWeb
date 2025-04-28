import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function AppAvatar(){
    return(

        <Avatar>
        <AvatarImage src="" className="w-5 rounded-full"/>
        <AvatarFallback>EP</AvatarFallback>
    </Avatar>
    )
}