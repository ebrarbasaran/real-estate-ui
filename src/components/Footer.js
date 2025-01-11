import React from "react";
import { TbHomeCheck } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container bg-brand-lilac mx-auto w-full px-12 py-8 max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-600">
      {/* col1 */}
      <div className="flex flex-col items-start gap-4 sm:justify-center">
        <div className="flex justify-start items-center gap-2">
          <div className="bg-primary-brand-color flex justify-center items-center w-12 h-12 rounded-full text-2xl">
            <TbHomeCheck className="text-white" />
          </div>
          <a href="#" className="text-xl">
            Rezilla
          </a>
        </div>
        <p>Lorem Ipsum has been the industry standard dummy text.</p>
        <div className="mt-4 flex items-center gap-2">
          <AiOutlinePhone />
          <p>+90123 45 67</p>
        </div>
        <div className="flex items-center gap-2">
          <CiMail />
          <p>mail@mail.com</p>
        </div>
      </div>

      {/* col2 */}
      <div>
        <h4 className="text-lg font-semibold text-text-color-1 mb-4">
          Quick Links
        </h4>
        <ul className="space-y-2 text-text-color-2">
          <li>Home</li>
          <li>About</li>
          <li>Listings</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Become a Agent</li>
        </ul>
      </div>
      {/* col3 */}
      <div>
        <h4 className="text-lg font-semibold text-text-color-1 mb-4">
          Discovery
        </h4>
        <ul className="space-y-2 text-text-color-2">
          <li>Canada</li>
          <li>United States</li>
          <li>Germany</li>
          <li>Africa</li>
          <li>India</li>
        </ul>
      </div>

      {/* col4 */}
      <div>
        <h4 className="text-lg font-semibold text-text-color-1 mb-4">
          Subscribe to our Newsletter!
        </h4>
        <form className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-20px px-4 py-2 border rounded-full shadow-sm "
          />
          <button
            type="submit"
            className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-primary-brand-color text-white rounded-full p-2"
          >
            <GoArrowRight className="text-xl" />
          </button>
        </form>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Follow Us on
        </h4>
        <div className="flex items-center gap-4 mt-4">
          <a href="#" className="text-primary-brand-color">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-primary-brand-color">
            <FaFacebookF />
          </a>
          <a href="#" className="text-primary-brand-color">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
