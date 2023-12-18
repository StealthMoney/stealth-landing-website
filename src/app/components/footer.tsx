import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 w-full">
      <fieldset className="w-[600px]">
        <p className="text-center font-semibold uppercase mb-8">
          Join Our Waitlist
        </p>

        <form className="flex flex-col gap-y-8">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <label className="text-white-300 mb-2">First name</label>
              <input
                className="w-full p-4 border border-black-600 rounded-md bg-transparent"
                type="text"
                placeholder="Enter your firstname"
                id="firstname"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="text-white-300 mb-2">
                Last name
              </label>
              <input
                className="w-full p-4 border border-black-600 rounded-md bg-transparent"
                type="text"
                placeholder="Enter your lastname"
                id="lastname"
                required
              />
            </div>
          </div>
          <div className="flex items-end justify-end gap-x-4">
            <div className="flex flex-col items-start w-full">
              <label className="text-white-300 mb-2">Email</label>
              <input
                className="w-full p-4 border border-black-600 rounded-md bg-transparent"
                type="text"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <button className="bg-orange-100 w-1/3 text-white rounded-md h-[58px] uppercase hover:bg-orange-500">
              Join
            </button>
          </div>
        </form>
      </fieldset>
      <div className="w-full h-[1px] bg-black-500 my-28"></div>
      <div className="flex flex-col items-center gap-y-10">
        <Image
          src="/stealth-logo.svg"
          width={200}
          height={50}
          alt="stealth logo"
        />
        <p className="text-white-300 text-center max-w-[600px]">
          Embrace Self-Custody and Dollar-Cost Averaging (DCA) as a Sustainable
          Path to Long-term Wealth Accumulation with Bitcoin.
        </p>
        <div className="flex gap-x-8">
          <Link
            href="https://twitter.com/stealthmoney_"
            target="_blank"
            className="p-4 rounded-full border border-black-500 hover:bg-black-700"
          >
            <Image src={"/twitter.svg"} width={30} height={30} alt="twitter" />
          </Link>
          <Link
            href="http://www.facebook.com/stealthmoney"
            target="_blank"
            className="p-4 rounded-full border border-black-500 hover:bg-blue-500"
          >
            <Image
              src={"/facebook.svg"}
              width={30}
              height={30}
              alt="facebook"
            />
          </Link>
        </div>
      </div>
      <p className="text-white-300 text-[14px] tracking-wide text-center mt-28">
        Stealth Money © is still in beta. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
