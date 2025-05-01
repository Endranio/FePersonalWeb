"use client";

import { Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import StackIcon from "tech-stack-icons";

export default function TechCard() {
  const Icon = [
    <StackIcon key="reactjs" name="reactjs" className="w-10 h-10" />,
    <StackIcon key="typescript" name="typescript" className="w-10 h-10" />,
    <StackIcon key="js" name="js" className="w-10 h-10" />,
    <StackIcon key="tailwindcss" name="tailwindcss" className="w-10 h-10" />,
    <StackIcon key="nextjs" name="nextjs" className="w-10 h-10" />,
    <StackIcon key="nodejs" name="nodejs" className="w-10 h-10" />,
    <StackIcon key="postgresql" name="postgresql" className="w-10 h-10" />,
    <StackIcon key="prisma" name="prisma" className="w-10 h-10" />,
  ];

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
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {Icon.map((icons, index) => (
            <SwiperSlide key={index}>
              <div className="inline-flex p-5 rounded-xl justify-center dark:bg-gray-800 ">
                {icons}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
