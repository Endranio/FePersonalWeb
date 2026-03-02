"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import type { TechStack } from "@/types/type";
import { useRef } from "react";
import type { SwiperClass } from "swiper/react";

type Props = {
  techList?: TechStack[];
};

export default function TechCard({ techList }: Props) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative py-4">
      {/* Edge fading gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        loop={true}
        speed={4000}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        allowTouchMove={false}
        simulateTouch={false}
        grabCursor={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onClick={() => {
          // Force restart autoplay if it gets paused by click
          if (swiperRef.current) {
            swiperRef.current.autoplay.start();
          }
        }}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
        className="!overflow-hidden select-none"
      >
        {techList?.map((tech, index) => (
          <SwiperSlide key={index} className="!pointer-events-none">
            <div className="flex flex-col items-center justify-center gap-3 py-5 px-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-foreground/5 mx-1">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tech.tech}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs text-foreground/50 font-medium truncate max-w-full">
                {tech.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
