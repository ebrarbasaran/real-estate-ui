import React from "react";
import TrendsSwiper from "./TrendsSwiper";

export default function Trends() {
  return(
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 lg:py-16 max-w-screen-xl h-[900px] bg-primary-brand-color flex flex-col items-center relative">
        <div className="hidden md:block w-24 h-24 bg-gradient-to-r from-color-1 rotate-45 rounded-full absolute -right-3 -top-4 z-0"></div>
        <p className="uppercase mb-2 text-xs md:text-sm text-white tracking-widest">what's trending</p>
        <p className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">Latest Blogs & Posts</p>
        <TrendsSwiper/>
        <div className="sm:block md:hidden flex justify-center mt-4">
        <button className="border-2 border-white bg-white text-primary-brand-color rounded-full py-2 px-4">View more blogs</button>
      </div>
    </div>
  );
}
