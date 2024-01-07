import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="max-h-[100px] border-b border-b-black-500">
      <div className="flex justify-between items-center py-2 px-4 md:px-12">
        <div>
          <Image
          className="w-[80px] h-[50px] md:w-[132px]"
            src="/stealth-logo.svg"
            alt="stealth Logo"
            width={132}
            height={50}
            priority
          />
        </div>
        <div className="buttons flex space-x-4">
          <div className="flex flex-col items-center gap-y-1 md:hidden">
            <span className="bg-white-100 w-[20px] h-[2px]"></span>
            <span className="bg-white-100 w-[20px] h-[2px]"></span>
            <span className="bg-white-100 w-[20px] h-[2px]"></span>
            </div>
          {/* <button className="border border-black-700 rounded hover:border-black-500 hover:bg-black-600 px-8 py-[10px] text-white-300 text-[16px] leading-6">
            Resources
          </button> */}
          <button className="hidden md:block bg-black-600 border border-black-700 hover:bg-black-500 text-[16px] leading-3 text-white-100 font-normal-200 py-[16px] px-8 rounded">
            <Link href={"/#waitlist"}>Log in</Link>
          </button>
          <button className="hidden md:block bg-orange-100 border border-black-700 hover:bg-orange-500 text-[16px] leading-3 text-white-100 font-normal-200 px-8 py-[16px] rounded">
            <Link href={"/#waitlist"}>Get Started</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
