import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSwiper } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import image1 from "../assets/image8.jpg";
import image2 from "../assets/image9.jpg";
import image3 from "../assets/image10.jpg";

const trendsData = [
  {
    date: "28",
    month: "Thu",
    image: image1,
    title: "Top 10 Home Buying Mistakes to Avoid",
    description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    date: "08",
    month: "Mon",
    image: image2,
    title: "How to Stage Your Home for a Quick Sale",
    description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
  },
  {
    date: "26",
    month: "Wed",
    image: image3,
    title: "5 Tips for First-Time Home Sellers",
    description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
  },
  {
    date: "28",
    month: "Thu",
    image: image1,
    title: "Top 10 Home Buying Mistakes to Avoid",
    description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    date: "08",
    month: "Mon",
    image: image2,
    title: "How to Stage Your Home for a Quick Sale",
    description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
  },
  {
    date: "26",
    month: "Wed",
    image: image3,
    title: "5 Tips for First-Time Home Sellers",
    description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
  },
];

export default function TrendsSwiper() {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
        }}
        loop={true}
        className="mt-8 relative"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {trendsData.map((trend, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden text-white cursor-pointer hover:opacity-90 transition-opacity h-full">
              <div className="relative">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-[200px] object-cover shadow-lg mb-3 rounded-2xl"
                />
                <div className="absolute top-0 left-4 bg-white text-primary-brand-color rounded-lg p-2 text-center min-w-[40px]">
                  <div className="text-lg font-bold">{trend.date}</div>
                  <div className="text-xs">{trend.month}</div>
                </div>
              </div>
              <div className="p-6 mt-4">
                <h3 className="text-xl font-semibold mb-3 line-clamp-1">
                  {trend.title}
                </h3>
                <p className="text-sm opacity-80 line-clamp-2">
                  {trend.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-8">
        <button className="swiper-button-prev w-12 h-12 rounded-full border-2 border-primary-brand-color flex items-center justify-center text-primary-brand-color hover:bg-primary-brand-color hover:text-white transition-colors">
          <MdChevronLeft size={24} />
        </button>
        <button className="swiper-button-next w-12 h-12 rounded-full border-2 border-primary-brand-color flex items-center justify-center text-primary-brand-color hover:bg-primary-brand-color hover:text-white transition-colors">
          <MdChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}