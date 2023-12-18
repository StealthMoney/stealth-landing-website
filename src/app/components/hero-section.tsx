import Image from "next/image";
import React from "react";

const InfoBanner = () => {
  return (
    <div className="text-white-300 p-4 flex justify-between items-center gap-4 text-[12px]">
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
      <h2 className="text-white-100 text-5xl font-medium text-center mt-6 leading-[70px] max-w-4xl">
        Secure Your Financial Future with Bitcoin Savings & Self Custody.
      </h2>
      <p className="text-white-300 text-[16px] text-center mt-6 max-w-2xl">
        Embrace Self-Custody and Dollar-Cost Averaging (DCA), a sustainable path
        to long term wealth accumulation.
      </p>
      <div className="buttons flex space-x-4 my-8">
        <button className="bg-black-600 border border-black-700 hover:bg-black-500 text-[16px] leading-3 text-black-200 font-normal-200 h-[70px] px-8 rounded">
          Start Saving Now
        </button>
        <button className="bg-orange-100 border border-black-700 hover:bg-orange-600 text-[16px] leading-3 text-black-200 font-normal-200 px-8 h-[70px] rounded">
          Pre Order Wallet
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
