import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="max-h-[100px] border-b border-b-black-500">
      <div className="flex justify-between items-center py-2 px-12">
        <div>
          <Image
            src="/stealth-logo.svg"
            alt="stealth Logo"
            width={132}
            height={50}
            priority
          />
        </div>
        <div className="buttons flex space-x-4">
          <button className="border border-black-700 rounded hover:border-black-500 hover:bg-black-600 px-8 py-[10px] text-white-300 text-[16px] leading-6">
            Resources
          </button>
          <button className="bg-black-600 border border-black-700 hover:bg-black-500 text-[16px] leading-3 text-black-200 font-normal-200 py-[10px] px-8 rounded">
            Log in
          </button>
          <button className="bg-orange-100 border border-black-700 hover:bg-orange-600 text-[16px] leading-3 text-black-200 font-normal-200 px-8 py-[10px] rounded">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
