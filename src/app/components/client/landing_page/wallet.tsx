import Image from "next/image";

export default function Wallet() {
  return (
    <section className="bg-[#010101] w-screen lg:h-[560px] flex justify-center items-center">
      <div className="w-auto flex flex-col justify-center items-center max-w-[1440px] gap-y-8 md:px-28 px-12 max-sm:px-8 py-12">
        <h1 className="text-white lg:text-[48px] md:text-[38px] font-semibold text-[38px] font-Satoshi">
          We are partnered with the leading wallets.
        </h1>

        <div className="w-full flex lg:flex-row flex-col gap-x-8 gap-y-8 justify-center items-center">
          <span className="lg:w-2/4 inline-flex w-full">
            <Image
              src="/tangem.svg"
              width={100}
              height={100}
              alt="tangem"
              objectFit="cover"
              className="w-full h-full"
            />
          </span>

          <span className="lg:w-2/4 inline-flex w-full">
            <Image
              src="/ledger.svg"
              width={100}
              height={100}
              alt="tangem"
              objectFit="cover"
              className="w-full h-full"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
