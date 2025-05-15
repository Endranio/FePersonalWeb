"use client";

import { Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";


import type { TechStack } from "@/types/type";

type Props={
  techList?:TechStack[]
}

export default function TechCard({techList}:Props) {

  return (
    <div className="relative">
      <div className=" absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none"></div>
      <div className=" absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none"></div>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          
          loop
          speed={9000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4},
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 6 },
          }}
        >
          {techList?.map((tech, index) => (
  <SwiperSlide key={index}>
    <div className="inline-flex p-5 rounded-xl justify-center dark:bg-gray-800">
      <img src={tech.tech} alt={tech.name} className="w-10 h-10 object-contain" />
    </div>
  </SwiperSlide>
))}
        </Swiper>
        
      </div>
    </div>
  );
}
