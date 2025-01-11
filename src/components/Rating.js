import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { FaStar } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/person6.jpg";
import image2 from "../assets/person5.jpg";
import image3 from "../assets/person4.jpg";

const cards = [
  {
    id: 1,
    author: "Barbara D. Smith",
    img: image1,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
  },
  {
    id: 2,
    author: "Angelina Jersey",
    img: image2,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
  },
  {
    id: 3,
    author: "Danilo Pellegrini",
    img: image3,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
  },
];

export default function Rating() {
  return (
    <div className="container mx-auto w-full px-4 py-8 max-w-screen-xl flex flex-col lg:flex-row gap-9 lg:gap-12">
      <div className="w-full lg:w-2/5">
        <div className="text-left">
          <p className="text-color-1 font-medium uppercase mb-3 text-xs md:text-sm tracking-widest">
            testimonials
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-color-1 leading-tight mb-4">
            Look What Our Customers Say!
          </p>
          <p className="text-text-color-3 mb-6 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
          loop={false}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="h-48 w-1/3">
              <div className="border rounded-xl shadow-lg py-6 px-4 bg-white h-full">
                <p className="text-text-color-2 text-sm p-4">
                  {card.description}
                </p>
                <hr />
                <div className="flex justify-between px-4">
                  <div className="flex justify-start items-center gap-3 p-2">
                    <img src={card.img} className="h-12 w-12 rounded-full" />
                    <p className="font-bold text-sm text-text-color-2">
                      {card.author}
                    </p>
                    </div>
                    <div className="flex justify-end items-center text-yellow-star">
                      <FaStar className="text-yellow-star" />
                      <FaStar className="text-yellow-star" />
                      <FaStar className="text-yellow-star" />
                      <FaStar className="text-yellow-star" />
                      <FaStar className="text-text-color-4" />
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
