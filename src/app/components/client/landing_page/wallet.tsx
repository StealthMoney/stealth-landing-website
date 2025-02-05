import Image from "next/image";

export default function Wallet() {
  return (
    <section className="bg-[#010101] w-screen lg:h-[560px] flex justify-center items-center">
      <div className="w-auto flex flex-col justify-center items-center max-w-[1440px]">
        <div className="flex lg:flex-row flex-col my-8 py-8 px-4 w-3/4 gap-x-4">
          <div className="lg:w-2/4 w-full text-white-100 flex flex-col items-center justify-center lg:mb-0 mb-6">
            <h1 className="md:text-[38px] text-[24px] font-bold font-Satoshi">
              We are partnered with one of the best hardware wallets
            </h1>
            <small className="md:text-[24px] text-[18px] font-Nunito">
              Trezor created the first hardware wallet in 2013 and has been a
              market leader ever since.
            </small>
          </div>
          <div className="lg:w-2/4 w-full lg:mt-0 mt-6">
            <Image
              src={"/trezor.svg"}
              alt="wallet"
              width={100}
              height={100}
              quality={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
