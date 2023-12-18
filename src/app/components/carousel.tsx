"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BackwardArrowIcon, ForwardArrowIcon } from "./arrow-icon";

const slidesData = [
  {
    title: "Bitcoin Self Custody",
    description:
      "With Stealth Money, you can hold your Bitcoin in a self-custodial or hardware wallet ensuring that only you have access to your Bitcoin. A hardware wallet is a physical wallet device that secures your Bitcoin.",
    image: "/images/padlock.png",
    indexIcon: "/01.svg",
  },
  {
    title: "Dollar-Cost Averaging",
    description:
      "With Stealth Money, you can you can initiate Dollar-Cost Averaging (DCA). Dollar-cost averaging (DCA) is the automatic investment of a fixed amount on a periodic basis (weekly/monthly).",
    image: "/images/calender.png",
    indexIcon: "/02.svg",
  },
  {
    title: "Hedge against Currency Devaluation",
    description:
      "With Stealth Money, you can keep your savings in Bitcoin to avoid the risk of your money losing value compared to other currencies. Currency devaluation occurs when a country's currency loses value relative to other currencies.",
    image: "/images/currency.png",
    indexIcon: "/03.svg",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide(
      (currentSlide) =>
        (currentSlide - 1 + slidesData.length) % slidesData.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % slidesData.length);
  };

  return (
    <div className="text-white-100 flex items-center justify-between gap-x-24">
      <picture className="border border-black-500 rounded-xl">
        <Image
          src={slidesData[currentSlide].image}
          alt={slidesData[currentSlide].title}
          width={500}
          height={500}
        />
      </picture>
      <div className="max-w-lg flex flex-col gap-y-28">
        <div className="flex flex-col gap-4">
          <picture>
            <Image
              src={slidesData[currentSlide].indexIcon}
              alt={slidesData[currentSlide].title}
              width={50}
              height={50}
            />
          </picture>
          <div className="flex flex-col gap-6">
            <p className="text-[35px]">{slidesData[currentSlide].title}</p>
            <p className="text-white-300">
              {slidesData[currentSlide].description}
            </p>
            <button className="w-fit border border-black-500 mt-4 py-2 px-4 rounded bg-black-600 text-white-300 hover:border-white-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <button
            onClick={goToPrevious}
            className="border border-black-500 p-3 rounded hover:border-white-100"
          >
            <BackwardArrowIcon
              fillColor={currentSlide === 0 ? "#2B2B2B" : "#FFFFFF"}
            />
          </button>
          <button
            onClick={goToNext}
            className="border border-black-500 p-3 rounded hover:border-white-100"
          >
            <ForwardArrowIcon
              fillColor={
                currentSlide === slidesData.length - 1 ? "#2B2B2B" : "#FFFFFF"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
