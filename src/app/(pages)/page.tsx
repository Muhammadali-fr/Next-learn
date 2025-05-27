// components/ImageSlider.jsx
'use client'; // if using Next.js 13+ App Router

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ImageSlider() {
  return (
    <Swiper 
    className='bg-red-600'
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide><img src="/images/slide1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="/images/slide2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="/images/slide3.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
}
