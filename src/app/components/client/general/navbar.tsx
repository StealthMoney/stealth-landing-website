"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

type NavState = boolean;

const Navbar: React.FC = () => {
  const router = useRouter();
  const [openNav, setOpenNav] = useState<NavState>(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const handleNavOpen = (): void => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hamburgerRef]);

  // if mobile menu is open and user switched to desktop view, close the mobile menu
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 768) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MobileMenu = () => {
    return (
      <div className="flex flex-col w-3/4 fixed top-20 right-2 z-10 h-1/4 py-2 px-6 gap-y-5 bg-black-700 items-center">
        
        <Link href={"/resources"} className="hover:text-orange-100 text-white-100 my-4">Bitcoin Education</Link>
        

        <button
          onClick={() => {
            window.open("http://app.stealth.money/account/login", "_blank");
          }}
        >
          <span className="text-white-100 bg-black-600 border border-black-700 hover:bg-black-500 leading-3 py-[16px] my-3 px-8 rounded">
            Log in
          </span>
        </button>

        <button
          onClick={() => {
            window.open("http://app.stealth.money/account/register", "_blank");
          }}
          className="md:block bg-orange-100 border border-black-700 hover:bg-orange-500 text-[16px] leading-3 text-white-100 font-normal-200 px-8 my-3 py-[16px] rounded"
        >
          <span>Get Started</span>
        </button>
      </div>
    );
  };

  return (
    <nav className="max-h-[100px] border-b border-b-black-500">
      <div className="flex justify-between items-center py-2 px-4 md:px-12">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            className="w-[80px] h-[50px] md:w-[132px]"
            src="/stealth-logo.svg"
            alt="stealth Logo"
            width={132}
            height={80}
            priority
          />
        </div>
        <div className="buttons flex space-x-4 items-center">
          <div
            className="flex flex-col items-center gap-y-1 md:hidden"
            onClick={handleNavOpen}
            ref={hamburgerRef}
          >
            <span className="bg-white-100 w-[20px] h-[2px]"></span>
            <span className="bg-white-100 w-[20px] h-[2px]"></span>
            <span className="bg-white-100 w-[20px] h-[2px]"></span>
          </div>

          <Link href={"/resources"} className="hover:text-orange-100 text-white-100 hidden md:block">Bitcoin Education</Link>

          <button
            onClick={() => {
              window.open("http://app.stealth.money/account/login", "_blank");
            }}
            className="hidden cursor-pointer md:block border border-black-700 hover:bg-black-600 bg-black-500 text-[16px] leading-3 text-white-100 font-normal-200 py-[16px] px-8 rounded"
          >
            <span className="hidden md:block">Log in</span>
          </button>

          <button
            onClick={() => {
              window.open(
                "http://app.stealth.money/account/register",
                "_blank"
              );
            }}
            className="hidden cursor-pointer md:block bg-orange-100 border border-black-700 hover:bg-orange-500 text-[16px] leading-3 text-white-100 font-normal-200 px-8 py-[16px] rounded"
          >
            <span>Get Started</span>
          </button>

          {openNav && MobileMenu()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
