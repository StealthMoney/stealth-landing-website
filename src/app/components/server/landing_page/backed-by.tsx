import React from "react";
import Image from "next/image";

export default function Backedby() {
  return (
    <section className="w-screen bg-[#111111] flex flex-col justify-center items-center">
      <div className="w-full leading-[16px] md:text-[16px] text-[12px] font-[500] flex flex-col gap-y-6 py-8 px-5 justify-center items-center">
        <h1 className="text-white-200">WE ARE BACKED BY:</h1>
        <div className="lg:w-[30%] flex justify-center">
          <Image
            src={"/recursiveCapitalLogo.svg"}
            width={100}
            height={100}
            alt="recursive-capital"
            objectFit="cover"
            className="lg:w-2/4 h-full"
          />
        </div>
      </div>
    </section>
  );
}
