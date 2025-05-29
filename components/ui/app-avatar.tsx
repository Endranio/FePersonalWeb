import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function AppAvatar(){
    return(

        <Avatar>
        <AvatarImage src="" className="w-5 rounded-full"/>
        <AvatarFallback className="bg-black text-white p-2 font-bold rounded-lg">EP</AvatarFallback>
    </Avatar>
    )
}