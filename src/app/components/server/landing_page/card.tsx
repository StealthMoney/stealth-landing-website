import Image from "next/image";

export default function Card() {
  return (
    <div className="flex justify-center items-center my-6 px-2 rounded-3xl">
      <div className="w-full h-full md:flex items-center md:gap-x-12">
        <div className="border border-white-300 py-5 px-10 rounded-xl mb-10 md:w-[400px] lg:w-[580px] md:h-[300px] lg:h-[400] flex md:order-2 justify-center items-center">
          <Image
            src="/banner.svg"
            alt="trezor"
            className="w-full h-full"
            width={600}
            height={600}
          />
        </div>
        <div className="text-white-100 bg-[#010101] z-50 h-full flex md:justify-center md:items-center md:order-1 flex-col md:max-w-xl">
          <h1 className="md:text-[40px] text-[24px] font-semibold tracking-wide">
            We are partnered with one of the best hardware wallets
          </h1>
          <p className="pt-4 leading-7 text-left">
            Trezor created the first hardware wallet in 2012 and has been a
            market leader ever since.
          </p>
        </div>
      </div>
    </div>
  );
}
