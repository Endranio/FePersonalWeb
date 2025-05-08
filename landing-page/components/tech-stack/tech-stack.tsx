import { api } from "@/lib/api";
import TechCard from "./tech-card";
import type { TechStack } from "@/types/type";


export default async function TechStack(){

    const res = await api.get("/techs")
    const techList = res.data;
    return(
        <div id="tech-stack" className="pt-28">
            <h1 className="text-2xl md:text-3xl font-bold mb-12">Tech Stack - Tools I Use Every Day</h1>
           
    <TechCard techList = {techList}/>

        </div>
    )
}