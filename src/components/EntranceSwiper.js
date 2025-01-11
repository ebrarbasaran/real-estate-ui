import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import bedroom from '../assets/bedroom-suite-hotel.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

export default function SwiperComp() {
  return (
    <div className="swiper-container relative">
      <style>
        {`
          .swiper-button-next::after,
          .swiper-button-prev::after {
            display: none;
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
        }}
        loop={true}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <img src={bedroom} alt="Bedroom Suite" className="w-full h-[340px] object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Property 1" className="w-full h-[340px] object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Property 2" className="w-full h-[340px] object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Property 3" className="w-full h-[340px] object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <button className="swiper-button-prev h-6 w-6 bg-white rounded-full p-2 shadow-md">
          <FaChevronLeft className='text-sm text-text-color-3' />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <button className="swiper-button-next h-6 w-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <FaChevronRight className='text-sm text-text-color-3'/>
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination absolute bottom-4"></div>
    </div>
  );
}