import Image from "next/image";
import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <div className="w-full h-px bg-black-500 my-28"></div>
      <div className="flex flex-col items-center gap-y-10">
        <Image
          src="/stealth-logo.svg"
          width={200}
          height={50}
          alt="stealth logo"
        />
        <p className="text-white-300 text-[15px] text-center max-w-[600px] leading-9">
          Stealth Money is a Bitcoin only platform that simplifies buying and
          saving Bitcoin into your self-custody hardware wallets.
        </p>
        <div className="flex gap-x-8">
          <Link
            href="https://twitter.com/stealthmoney_"
            target="_blank"
            className="p-4 rounded-full border border-black-500 hover:bg-black-700"
          >
            <Image src={"/twitter.svg"} width={28} height={28} alt="twitter" />
          </Link>
          <Link
            href="http://www.facebook.com/stealthmoney"
            target="_blank"
            className="p-4 rounded-full border border-black-500 hover:bg-blue-500"
          >
            <Image
              src={"/facebook.svg"}
              width={28}
              height={28}
              alt="facebook"
            />
          </Link>
        </div>
      </div>
      <p className="text-white-300 text-[13px] tracking-wide text-center mt-28">
        Stealth Money <span className="text-[16px]">©</span> is in Beta.
      </p>
    </>
  );
}
