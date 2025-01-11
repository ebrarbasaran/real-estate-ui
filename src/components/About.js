import React from "react";
import { RiHomeWifiLine } from "react-icons/ri";
import { TbUserHexagon } from "react-icons/tb";

import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-2/5">
          <div className="text-left">
            <p className="text-color-1 font-medium uppercase mb-3 text-xs md:text-sm tracking-widest">
              who are we
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-color-1 leading-tight mb-4">
              Assisting individuals in locating the appropriate real estate.
            </p>
            <p className="text-text-color-3 mb-6 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it.
            </p>
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-row items-center bg-white rounded-2xl shadow-lg p-4 gap-4">
                <RiHomeWifiLine className="text-color-1 text-3xl sm:text-4xl" />
                <div className="flex flex-col text-center sm:text-left">
                  <p className="text-color-1">Lorem ipsum has been the </p>
                  <p className="text-text-color-3">
                    when an unknown printer took a galley
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center bg-white rounded-2xl shadow-lg p-4 gap-4">
                <TbUserHexagon className="text-color-1 text-3xl sm:text-4xl" />
                <div className="flex flex-col text-center sm:text-left">
                  <p className="text-color-1">Lorem ipsum has been the </p>
                  <p className="text-text-color-3">
                    when an unknown printer took a galley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[550px] lg:w-1/2">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3">
              <img
                src={img1}
                alt="House"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <img
                src={img2}
                alt="Bedroom"
                className="w-full h-[180px] sm:h-[240px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="row-span-2 col-span-2 relative">
              <img
                src={img3}
                alt="Living room"
                className="w-full h-[200px] sm:h-[240px] object-cover rounded-2xl shadow-lg"
              />
              <div className="hidden md:block w-14 h-14 absolute z-10 top-12.5 left-8 rotate-90 rounded-full bg-gradient-to-r from-color-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
