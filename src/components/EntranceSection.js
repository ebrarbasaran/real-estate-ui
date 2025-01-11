import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import SwiperComp from "./EntranceSwiper";

import personData from "../assets/person.json";
import home from "../assets/home.jpg";

export default function HeroSection() {

  const getImageSrc = (filename) => {
    try {
      return require(`../assets${filename}`);
    } catch (error) {
      console.error(`Error loading image: ${filename}`, error);
      return null;
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 lg:py-16 max-w-screen-xl bg-gradient-to-r from-primary-gradient-color to-secondary-gradient-color rounded-b-[50px] md:rounded-b-full relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 text-left lg:text-left w-full lg:w-3/5">
          <h4 className="text-color-1 font-medium uppercase mb-2 text-xs md:text-sm tracking-widest">
            Real Estate
          </h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-text-color-1 leading-tight mb-4">
            Find a perfect <br className="hidden md:block" />
            home you love..!
          </h1>
          <p className="text-text-color-3 mb-6 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </p>

          <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
            <div className="w-14 h-14 absolute z-0 -top-8 -right-5 -rotate-45 rounded-full bg-gradient-to-r from-inherit to-color-1"></div>
            <SwiperComp />
          </div>
        </div>

        <div className="flex-1 w-full lg:w-2/5 bg-white rounded-lg p-4 md:p-6">
          <div className="flex justify-center items-center border-b pb-3 mb-4 gap-4">
            <button className="text-primary-brand-color font-semibold b border-b-2 border-primary-brand-color px-2 md:px-4 text-sm md:text-base">
              For Sale
            </button>
            <button className="text-text-color-3 px-2 md:px-4 text-sm md:text-base hover:text-primary-brand-color transition-colors">
              For Rent
            </button>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="New York, San Francisco, etc"
              className="w-full rounded-2xl p-3 text-text-color-4 bg-text-color-5 text-sm md:text-base"
            />
            <select className="w-full rounded-2xl p-3 text-text-color-4 bg-text-color-5 text-sm md:text-base">
              <option>Select Property Type</option>
            </select>
            <select className="w-full rounded-2xl p-3 text-text-color-4 bg-text-color-5 text-sm md:text-base">
              <option>Select Rooms</option>
            </select>

            <a
              href="#"
              className="text-primary-brand-color text-xs md:text-sm flex gap-2 items-center -mt-2 hover:underline"
            >
              <GiSettingsKnobs className="text-base md:text-lg" />
              Advance Search
            </a>

            <button
              type="submit"
              className="w-full bg-primary-brand-color text-white rounded-full py-2.5 md:py-3 my-4 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <CiSearch className="text-lg md:text-xl" />
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-8 gap-4 md:gap-5">
        <div className="bg-white rounded-full w-full md:w-1/4 h-16 md:h-24 flex justify-center md:justify-start items-center text-text-color-2 px-2">
          <div className="flex items-center ml-2">
            <div className="flex -space-x-4">
              {personData.map((person, index) => (
                <div
                  key={person.id}
                  className="relative"
                  style={{ zIndex: index + 1 }}
                >
                  <img
                    src={getImageSrc(person.src)}
                    alt={`Person ${person.id}`}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                </div>
              ))}
              <div
                className="relative cursor-pointer hover:z-10"
                style={{ zIndex: personData.length + 1 }}
              >
                <div className="w-9 h-9 rounded-full relative -left-5 bg-black/[0.8] border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm">+</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base">72+ Happy Customers</p>
        </div>
        <div className="bg-white rounded-full w-full gap-2 md:w-1/4 h-16 md:h-24 flex justify-center md:justify-start items-center text-text-color-2 px-2">
          <img src={home} className="w-12 h-12 md:w-12 md:h-12 rounded-full object-fill ml-2" />
          <p className="text-sm md:text-base px-3">200+ New Listings Everyday!</p>
        </div>
      </div>

      <div className="hidden md:block w-24 h-24 bg-gradient-to-r from-color-1 rotate-45 rounded-full absolute bottom-0 left-1"></div>
    </div>
  );
}
