import React from "react";

export default function FooterEnd() {
  return (
    <div className="bg-text-color-1 mx-auto w-full h-12 flex justify-around items-center text-text-color-4 text-sm">
      <div className="flex justify-start items-center gap-2">
        <p>© Company – All rights reserved </p>
      </div>
      <div className="hidden md:flex gap-6">
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Disclaimer</p>
      </div>
    </div>
  );
}
