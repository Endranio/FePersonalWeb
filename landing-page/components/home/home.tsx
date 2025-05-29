"use client"

import { Button } from "@/components/ui/button";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { api } from "@/lib/api";
import { ProfileDTO } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/spiner";

export default function HomePage() {

  const {data,isPending} = useQuery<ProfileDTO>({
     queryKey:["profile"],
     queryFn: async()=>{
       const res = await api.get("/profile");
       return res.data

     }
  })

  if(isPending){
    return <Spinner/>
  }

  return (

    <div className="flex flex-col lg:flex-row gap-20 text-left mt-15 items-center lg:items-right">
      <div className=" w-[350px] lg:w-[1800px] h-[350px] rounded-xl overflow-hidden flex items-center">
        <img
          src={data?.image}
          width={450}
          height={450}
          alt={"my-image"}
          className="object-cover"
        />
      </div>
      <div className="space-y-10 flex-col lg:text-left text-center ">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl  font-bold mb-6">{data?.headers}</h1>
          <h2 className="text-2xl  text-gray-600 dark:text-gray-400 font-bold ">
            {data?.position}
          </h2>
          <p className=" text-gray-600 dark:text-gray-400 leading-relaxed">
            {data?.description}
          </p>
          <p className="flex items-center gap-2">
            <IoLocationOutline /> {data?.location}
          </p>
            {data?.available &&
          <ul className="list-disc list-inside text-green-600">
            <li>Avaible for new projects</li>
          </ul>
          }
        </div>
        <div className="flex gap-5 justify-center lg:justify-start">
          <Button className="bg-green-600 text-white hover:bg-green-500">
            <FaWhatsapp />
            <a href={`https://wa.me/${data?.whatsapp}`} target="_blank">
              Let's Talk
            </a>
          </Button>
          <Button>
            <IoMdDownload />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
