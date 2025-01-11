import React, { useState } from "react";
import { TbHomeCheck } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative h-20">
      <div className="h-20 flex justify-between md:justify-around items-center px-4 md:px-7 text-text-color-2 font-medium">
        <div className="hidden md:flex gap-3 flex-1">
          <a href="#" className="px-3 py-1 rounded-2xl hover:bg-brand-lilac">
            Home
          </a>
          <a href="#" className="px-3 py-1 rounded-2xl hover:bg-brand-lilac">
            About
          </a>
          <a href="#" className="px-3 py-1 rounded-2xl hover:bg-brand-lilac">
            Listing
          </a>
          <a href="#" className="px-3 py-1 rounded-2xl hover:bg-brand-lilac">
            Services
          </a>
          <a href="#" className="px-3 py-1 rounded-2xl hover:bg-brand-lilac">
            Blogs
          </a>
        </div>

        <div className="flex items-center gap-2 flex-1 justify-start md:justify-center">
          <div className="bg-primary-brand-color flex justify-center items-center w-12 h-12 rounded-full text-2xl">
            <TbHomeCheck className="text-white" />
          </div>
          <a href="#" className="text-xl font-semibold">
            Logo
          </a>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="hidden md:flex items-center gap-2">
            <FaRegUserCircle />
            <a href="#">Login/Register</a>
          </div>

          <div className="hidden md:flex items-center gap-1 text-white bg-primary-brand-color rounded-2xl py-1 px-4">
            <TbHomeCheck />
            <a href="#">Add Listing</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-text-color-2 hover:text-primary-brand-color"
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col py-4">
            <a href="#" className="px-4 py-2 hover:bg-brand-lilac">
              Home
            </a>
            <a href="#" className="px-4 py-2 hover:bg-brand-lilac">
              About
            </a>
            <a href="#" className="px-4 py-2 hover:bg-brand-lilac">
              Listing
            </a>
            <a href="#" className="px-4 py-2 hover:bg-brand-lilac">
              Services
            </a>
            <a href="#" className="px-4 py-2 hover:bg-brand-lilac">
              Blogs
            </a>
            <div className="border-t mt-2 pt-2">
              <a
                href="#"
                className="px-4 py-2 hover:bg-brand-lilac flex items-center gap-2"
              >
                <FaRegUserCircle />
                Login/Register
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:bg-brand-lilac flex items-center gap-2 text-primary-brand-color"
              >
                <TbHomeCheck />
                Add Listing
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
