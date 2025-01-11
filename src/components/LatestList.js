import React from "react";
import LatestSwiper from "./LatestSwiper";

export default function LatestList() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      <p className="text-color-1 font-medium uppercase mb-3 text-xs md:text-sm tracking-widest">
        checkout our new
      </p>
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="flex flex-col md:w-2/4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-color-1 leading-tight mb-4">
            Latest Listed Properties
          </p>
          <p className="text-text-color-3 mb-6 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex justify-center gap-4 md:w-2/4">
          <button className="rounded-full h-12 w-20 border-2 border-primary-brand-color px-4 text-primary-brand-color">
            All
          </button>
          <button className="rounded-full h-12 w-20 border-2 border-primary-brand-color px-4 text-primary-brand-color">
            Sell
          </button>
          <button className="rounded-full h-12 w-20 border-2 border-primary-brand-color px-4 text-primary-brand-color">
            Rent
          </button>
        </div>
      </div>
      <div>
        <LatestSwiper />
      </div>
      <div className="sm:block md:hidden flex justify-center mt-4">
        <button className="border-2 border-primary-brand-color rounded-full py-2 px-4">View more properties</button>
      </div>
    </div>
  );
}
