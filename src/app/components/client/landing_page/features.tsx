"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import featuresData from "../../dummy-data/features_data";

const Features = () => {
  const [step, setStep] = React.useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentScreenSize, setCurrentScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    if (currentScreenSize <= 1023) {
      return setIsMobileScreen(true);
    }

    return setIsMobileScreen(false);
  }, [currentScreenSize]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isMobileScreen) {
      intervalId = setInterval(() => {
        setStep((prevStep) => {
          const newStep = (prevStep + 1) % featuresData.length;
          return newStep;
        });
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isMobileScreen, step]);

  function updateStep(index: number) {
    setStep(index);
  }

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = endX - startX;

    if (deltaX > 50) {
      setStep((prevStep) =>
        prevStep === 0 ? featuresData.length - 1 : prevStep - 1
      );
    } else if (deltaX < -50) {
      setStep((prevStep) => (prevStep + 1) % featuresData.length);
    }

    setStartX(0);
    setEndX(0);
  };

  const switchSteps = () => {
    const feature = featuresData[step];
    return (
      <Image
        src={feature.image}
        alt={feature.title.toLowerCase()}
        width={500}
        height={500}
      />
    );
  };

  return (
    <section
      className="flex flex-col items-center my-14"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="text-center text-[38px] text-white-100 font-bold font-Satoshi">
        Our Features
      </h1>
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full mt-14">
        <div className="absolute left-[1px] h-[420px] w-[2px] bg-black-600"></div>

        <div className="lg:w-1/2 w-full z-10 mt-4 md:mt-auto lg:h-auto h-[200px] overflow-hidden">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`mb-10 pr-10 pl-6 py-4 lg:border-l-[4px] cursor-pointer ${
                step === index
                  ? "lg:border-l-orange-100"
                  : "lg:opacity-20 lg:border-l-transparent"
              }`}
              onClick={() => (!isMobileScreen ? updateStep(index) : "")}
            >
              <div className="lg:hidden flex justify-center w-full my-4">
                {featuresData.map((indicator, i) => (
                  <div
                    key={i}
                    onClick={() => updateStep(i)}
                    className={`rounded-full mx-2 w-[20px] h-[20px] z-10 cursor-pointer ${
                      step === i ? "bg-orange-100" : "bg-black-500"
                    }`}
                  ></div>
                ))}
              </div>

              <h2 className="text-xl font-medium mb-2 text-white-100 text-center lg:text-left">
                {isMobileScreen ? featuresData[step].title : feature.title}
              </h2>
              <p className="text-white-300 md:text-left text-center">
                {isMobileScreen
                  ? featuresData[step].description
                  : feature.description}
              </p>
            </div>
          ))}
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
