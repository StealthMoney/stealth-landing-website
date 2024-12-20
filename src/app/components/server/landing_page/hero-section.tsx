import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoBanner = () => {
  return (
    <div className="text-white-300 px-0 py-4 md:p-4 flex justify-between items-center gap-2 font-Nunito md:gap-4 text-[6.3px] md:text-[12px]">
      <span className="text-center px-4 border border-black-500 rounded-3xl py-2">
        Bitcoin Self-Custody
      </span>
      <span className="text-center px-4 border border-black-500 rounded-3xl py-2">
        Bitcoin is generational wealth 🚀
      </span>
      <span className="text-center px-4 border border-black-500 rounded-3xl py-2">
        Save in Bitcoin
      </span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-2">
      <InfoBanner />
      <h2 className="text-white-100 text-4xl md:text-5xl font-semibold font-Montserrat text-center mt-2 md:mt-5 leading-[50px] md:leading-[70px] max-w-4xl">
        Secure Your Financial Future with Bitcoin Savings & Self Custody.
      </h2>

      <div className="buttons flex space-x-4 my-8">
        <button className="bg-orange-100 border text-center border-black-700 font-Satoshi hover:bg-orange-500 text-[14px] md:text-[16px] leading-3 text-white-100 font-medium px-8 h-[70px] rounded">
          <Link href={"/#waitlist"}>Start Saving Now</Link>
        </button>
        <button className="bg-black-600 border text-center border-black-700 font-Satoshi hover:bg-black-500 text-[14px] md:text-[16px] leading-3 text-white-100 font-medium h-[70px] px-8 rounded">
          <Link href={"/#waitlist"}>Order Wallet</Link>
        </button>
      </div>
      <picture className="flex items-center">
        <Image
          src="/images/dashboard.png"
          alt="hero section"
          width={1440}
          height={500}
          priority
        />
      </picture>
    </section>
  );
};

export default HeroSection;
