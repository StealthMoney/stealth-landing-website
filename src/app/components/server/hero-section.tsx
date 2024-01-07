import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoBanner = () => {
  return (
    <div className="text-white-300 px-0 py-4 md:p-4 flex justify-between items-center gap-2 md:gap-4 text-[6.3px] md:text-[12px]">
      <span className="text-center px-4 border border-black-500 rounded-3xl py-2">
        Bitcoin Self-Custody
      </span>
      <span className="text-center px-4 border border-black-500 rounded-3xl py-2">
        It&apos;s not your Bitcoin until you self-custody 🔐
      </span>
      <span className="text-center px-4 border border-black-500 rounded-3xl py-2">
        Dollar-Cost Averaging
      </span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-2">
      <InfoBanner />
      <h2 className="text-white-100 text-4xl md:text-5xl font-medium text-center mt-2 md:mt-5 leading-[50px] md:leading-[70px] max-w-4xl">
        Secure Your Financial Future with Bitcoin Savings & Self Custody.
      </h2>
      <p className="text-white-300 text-[16px] text-center mt-6 max-w-2xl">
        Embrace Self-Custody and Dollar-Cost Averaging (DCA), a sustainable path
        to long term wealth accumulation.
      </p>
      <div className="buttons flex space-x-4 my-8">
        <button className="bg-black-600 border border-black-700 hover:bg-black-500 text-[14px] md:text-[16px] leading-3 text-white-100 font-normal-200 h-[70px] px-8 rounded">
          <Link href={"/#waitlist"}>Start Saving Now</Link>
        </button>
        <button className="bg-orange-100 border border-black-700 hover:bg-orange-500 text-[14px] md:text-[16px] leading-3 text-white-100 font-normal-200 px-8 h-[70px] rounded">
          <Link href={"/#waitlist"}>Pre Order Wallet</Link>
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
