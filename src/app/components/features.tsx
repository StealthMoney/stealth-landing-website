"use client";

import Image from "next/image";
import React from "react";

const Features = () => {
  const [step, setStep] = React.useState(0);

  const switchSteps = () => {
    if (step === 0) {
      return (
        <Image
          src="/images/instant-buy.png"
          alt="instant-buy"
          width={500}
          height={500}
        />
      );
    } else if (step === 1) {
      return <Image src="/images/dca.png" alt="dca" width={500} height={500} />;
    } else if (step === 2) {
      return (
        <Image
          src="/images/gift-bitcoin.png"
          alt="gift-bitcoin"
          width={500}
          height={500}
        />
      );
    }
  };
  return (
    <section className="flex flex-col items-center my-14">
      <p className="text-center text-[38px] text-white-100 font-medium">
        Our Features
      </p>
      <p className="text-white-300">Highlighting our pioneering products.</p>
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full mt-14">
        <div className="absolute left-[1px] h-[420px] w-[2px] bg-black-600"></div>

        <div className="w-1/2 z-10">
          <div
            className={`mb-10 pr-10 pl-6 py-4 border-l-[4px] cursor-pointer ${
              step === 0
                ? "border-l-orange-100"
                : "opacity-20 border-l-transparent"
            }`}
            onClick={() => setStep(0)}
          >
            <h2 className="text-xl font-medium mb-2 text-white-100">
              Instant Purchase
            </h2>
            <p className="text-white-300">
              Instantly buy Bitcoin directly into your hardware wallet -
              effortlessly acquire Bitcoin and safeguard your assets with
              self-custody.
            </p>
          </div>
          <div
            className={`mb-10 pr-10 pl-6 py-4 border-l-[4px] cursor-pointer ${
              step === 1
                ? "border-l-orange-100"
                : "opacity-20 border-l-transparent"
            }`}
            onClick={() => setStep(1)}
          >
            <div className="flex gap-x-4 mb-3 items-center">
              <h2 className="text-xl font-medium mb-2 text-white-100">
                Dollar-Cost Averaging
              </h2>
              <span className="text-[12px] font-normal inline-block py-3 px-4 rounded-3xl text-white-300 border-black-600 border last:mr-0 mr-1">
                Coming Soon
              </span>
            </div>
            <p className="text-white-300">
              Create a Dollar-Cost Averaging (DCA) plan to automatically buy
              Bitcoin into your hardware wallet on set dates for a set period of
              time.
            </p>
          </div>
          <div
            className={`mb-10 pr-10 pl-6 py-4 border-l-[4px] cursor-pointer ${
              step === 2
                ? "border-l-orange-100"
                : "opacity-20 border-l-transparent"
            }`}
            onClick={() => setStep(2)}
          >
            <h2 className="text-xl font-medium mb-2 text-white-100">
              Gift Bitcoin
            </h2>
            <p className="text-white-300">
              Generate a secure payment link and share with friends and families
              to facilitate the purchase of Bitcoin directly into your
              self-custody hardware wallet.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4">
          <picture className="p-10 bg-black-600 rounded-xl">
            {switchSteps()}
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Features;
