import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { AiFillFire } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/image4.jpg";
import image2 from "../assets/image5.jpg";
import image3 from "../assets/image6.jpg";
import image4 from "../assets/image7.jpg";

const propertyData = [
  {
    image: image1,
    price: "$ 5,970",
    title: "Tranquil Haven in the Woods",
    address: "103 Wright CourtBurien, WA 98168",
    beds: "4 Beds",
    baths: "3 Bath",
    tag: "Popular",
  },
  {
    image: image2,
    price: "$ 1,970",
    title: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    beds: "3 Beds",
    baths: "2 Bath",
    tag: "New Listing",
  },
  {
    image: image3,
    price: "$ 3,450",
    title: "Charming Cottage in the Meadow",
    address: "1508 Centennial Farm RoadHorion, S1K37",
    beds: "4 Beds",
    baths: "4 Bath",
    tag: "Discounted Price",
  },
  {
    image: image4,
    price: "$ 2,389",
    title: "Grand Estate by the Lake",
    address: "2699 Fidler Drive, TX",
    beds: "4 Beds",
    baths: "3 Bath",
    tag: "Popular",
  },
];

export default function LatestSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={3.5}
      navigation
      pagination={{ clickable: true,
        el: '.swiper-pagination',
       }}
      className="mt-8"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
      }}
    >
      {propertyData.map((property, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white overflow-hidden">
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-[340px] h-[340px] object-cover rounded-2xl"
              />
              <div className="absolute z-50 bottom-4 left-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 ${
                    property.tag === "Popular"
                      ? "bg-red-200 text-red-600"
                      : property.tag === "New Listing"
                      ? "bg-blue-200 text-blue-600"
                      : property.tag === "Discounted Price"
                      ? "bg-green-200 text-green-600"
                      : ""
                  }`}
                >
                  {property.tag === "Popular" && <AiFillFire className="text-red-600" />}
                  {property.tag === "New Listing" && <MdHomeFilled className="text-blue-600" />}
                  {property.tag === "Discounted Price" && <MdAttachMoney className="text-green-600" />}
                  {property.tag}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-text-color-1 mb-2">
                {property.price}
              </h3>
              <h4 className="font-medium text-text-color-2 mb-2">
                {property.title}
              </h4>
              <p className="text-text-color-3 text-xs mb-4">
                {property.address}
              </p>
              <div className="flex items-center gap-4 text-text-color-2">
                <p className="flex items-center gap-1">
                  <LuBed />
                  {property.beds}
                </p>
                <p className="flex items-center gap-1">
                  <LuBath />
                  {property.baths}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
