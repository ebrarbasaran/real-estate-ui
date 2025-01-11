import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

export default function Header() {
  return (
    <div className="hidden md:flex bg-primary-brand-color mx-auto w-full h-10 justify-around items-center text-white text-sm">
      <div className="flex justify-start items-center gap-2">
        <CiLocationOn />
        <p>Lorem ipsum has been the industry's standart dummy </p>
      </div>
      <div className="flex gap-6">
        <div className="flex justify-start items-center gap-2">
          <AiOutlinePhone />
          <p>+90123 45 67</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <CiMail />
          <p>mail@mail.com</p>
        </div>
      </div>
    </div>
  );
}
