'use client'

import { Autoplay, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

import StackIcon from 'tech-stack-icons';

export default function TechCard () {

   const Icon=[ 
   <StackIcon key="reactjs" name="reactjs" className="w-10 h-10" />,
    <StackIcon key="typescript" name="typescript" className="w-10 h-10" />,
    <StackIcon key="js" name="js" className="w-10 h-10" />,
    <StackIcon key="tailwindcss" name="tailwindcss" className="w-10 h-10" />,
    <StackIcon key="nextjs" name="nextjs" className="w-10 h-10" />,
   
   ]
  
 
  
  return (
    <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={4} loop speed={9000} autoplay={{delay:1,disableOnInteraction: false}}>
      {Icon.map((icons, index) => (
        <SwiperSlide key={index} >
          <div className='flex justify-center'>
            {icons}
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};