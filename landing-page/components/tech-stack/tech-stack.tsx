"use client"

import { api } from "@/lib/api";
import TechCard from "./tech-card";
import type {  TechStack } from "@/types/type";
import { useQuery } from "@tanstack/react-query";


export default function TechStack(){
const {data:techList} = useQuery<TechStack[]>({
queryKey:["techs"],
queryFn: async () =>{

    const res = await api.get("/techs")
    return res.data;
}
})
    return(
        <div id="tech-stack" className="pt-15">
            <h1 className="text-2xl md:text-3xl font-bold mb-12">Tech Stack - Tools I Use Every Day</h1>
           
    <TechCard techList = {techList}/>

        </div>
    )
}