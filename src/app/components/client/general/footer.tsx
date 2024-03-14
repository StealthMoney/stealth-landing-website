import { baseUrl } from "@/config";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "../../client/landing_page/waitlist-form";

export type WaitlistFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
};

const joinWaitlist = async (formData: WaitlistFormData) => {
  "use server";
  const url = baseUrl + "/waitlists";
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(url, config);
  if (response.status !== 201) {
    const error = await response.json();
    if (error?.message?.toLowerCase() === "error.alreadyexist") {
      return { error: "You are already on the waitlist." };
    }
    return {
      error: "Something went wrong. Please try again later.",
    };
  }
  const data = await response.json();
  return { success: data };
};

const Footer = () => {
  return (
    <footer
      className="absolute bottom-0 translate-y-[110%] px-4 md:px-0 pb-20 w-full bg-[#111111]"
      id="waitlist"
    >
      <section className="flex flex-col justify-center items-center mt-10 w-full px-6">
        <fieldset className="max-w-[1000px]">
          <WaitlistForm joinWaitlist={joinWaitlist} />
        </fieldset>
        <div className="w-full h-[1px] bg-black-500 my-28"></div>
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
              <Image
                src={"/twitter.svg"}
                width={28}
                height={28}
                alt="twitter"
              />
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
      </section>
    </footer>
  );
};

export default Footer;
