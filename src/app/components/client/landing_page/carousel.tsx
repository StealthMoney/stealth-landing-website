"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BackwardArrowIcon, ForwardArrowIcon } from "../general/arrow-icon";

const slidesData = [
  {
    title: "Bitcoin Self Custody",
    description:
      "With Stealth Money, you can hold your Bitcoin in a self-custodial or hardware wallet ensuring that only you have access to your Bitcoin. A hardware wallet is a physical wallet device that secures your Bitcoin.",
    image: "/images/bitcoin_save.svg",
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
      "Stealth Money simplifies saving in Bitcoin to avoid the risk of your money losing value and purchasing power. In the last decade, most African currencies have devalued against the Dollar. Bitcoin is a hedge against endless currency depreciation.",
    image: "/images/dollar.jpg",
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
    <div className="text-white-100 flex md:items-center md:justify-between gap-x-24 flex-col lg:flex-row">
      <picture className="border border-black-500 rounded-xl">
        <Image
          src={slidesData[currentSlide].image}
          alt={slidesData[currentSlide].title}
          width={500}
          height={500}
        />
      </picture>
      <div className="max-w-lg flex flex-col gap-y-28 mt-5 md:mt-auto md:justify-center md:items-center justify-start">
        <div className="flex flex-col gap-4">
          <picture className="hidden lg:flex">
            <Image
              src={slidesData[currentSlide].indexIcon}
              alt={slidesData[currentSlide].title}
              width={50}
              height={50}
            />
          </picture>
          <div className="flex flex-col gap-6 lg:text-left text-center lg:mt-auto mt-6 lg:justify-start justify-center lg:items-start items-center">
            <p className="text-[35px]">{slidesData[currentSlide].title}</p>
            <p className="text-white-300">
              {slidesData[currentSlide].description}
            </p>
            <button className="w-fit border border-black-500 mt-4 py-2 px-4 rounded bg-black-600 text-white-300 hover:border-white-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex gap-8 lg:justify-start justify-center">
          <button
            title="previous"
            onClick={goToPrevious}
            className="border border-black-500 p-3 rounded hover:border-white-100"
          >
            <BackwardArrowIcon
              fillColor={currentSlide === 0 ? "#2B2B2B" : "#FFFFFF"}
            />
          </button>
          <button
            title="next"
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
