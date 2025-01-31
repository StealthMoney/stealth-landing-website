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
      className="absolute bottom-0 translate-y-[110%] px-4 md:px-0 pb-20 w-full bg-[#010101] text-white-100"
      id="waitlist"
    >
      <section className="flex flex-col justify-center items-center mt-10 w-full px-6">
        {/* <fieldset className="max-w-[1000px]">
          <WaitlistForm joinWaitlist={joinWaitlist} />
        </fieldset> */}

        <div className="w-full flex md:flex-row flex-col md:gap-y-0 gap-y-6 md:px-4 md:items-start py-12 font-Nunito">
          <div className="md:w-1/4 w-full gap-x-4 flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <Image
                src={"/stealth-logo.svg"}
                width={100}
                height={100}
                alt="logo"
              />
            </div>
            <div className="lg:w-1/4 md:w-2/4 max-sm:w-1/4 flex justify-between items-center">
              <button title="twitter">
                <Link href={"https://x.com/stealthmoney_"} target="_blank">
                  <Image
                    src={"/twitter.svg"}
                    width={30}
                    height={100}
                    alt="twitter-icon"
                  />
                </Link>
              </button>

              <button title="facebook">
                <Link
                  href={"https://Facebook.com/stealthmoney"}
                  target="_blank"
                >
                  <Image
                    src={"/facebook.svg"}
                    width={30}
                    height={100}
                    alt="facebook-icon"
                  />
                </Link>
              </button>
            </div>
          </div>

          <div className="md:w-1/4 w-full gap-x-4 flex flex-col gap-y-4">
            <h1 className="font-bold">QUICK LINK</h1>
            <div className="flex flex-col md:gap-y-4 gap-y-6 text-white-300">
              <Link href="#faq" className="text-sm">
                FAQs
              </Link>
              <Link
                href="https://calendar.app.google/7gHUwCk2WNNLkX3AA"
                target="_blank"
                className="text-sm"
              >
                Setup your wallet
              </Link>
              <Link
                href="https://education.stealth.money"
                target="_blank"
                className="text-sm"
              >
                Bitcoin Education
              </Link>
              <Link href="/pre_order" className="text-sm">
                Buy your wallets
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full gap-x-4 flex flex-col gap-y-4">
            <div className="w-full gap-x-4 flex flex-col gap-y-4">
              <h1 className="font-bold">LEGAL</h1>
              <div className="flex flex-col md:gap-y-4 gap-y-6 text-white-300">
                <Link
                  href="https://drive.google.com/file/d/1Uynx0IhZhq9VxH5XrExPe4MiPnzyxcEd/view?usp=sharing"
                  target="_blank"
                  className="text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1ZfGS2ryTgWk3wpe3J8uIOBFMLfWQLm19/view?usp=sharing"
                  target="_blank"
                  className="text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1uQLQTqs4ANyChHdubsGU8BchJr5Uegom/view?usp=sharing"
                  target="_blank"
                  className="text-sm"
                >
                  AML Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 w-full gap-x-4 flex flex-col gap-y-4 md:mt-0 mt-4">
            <div className="w-full flex flex-col md:gap-y-2 gap-y-4 text-white-300">
              <h1 className="text-white-100 font-bold">GET STARTED</h1>
              <fieldset className="flex flex-col gap-y-2">
                <label htmlFor="mail" className="text-sm">
                  Email
                </label>
                <input
                  readOnly={true}
                  title="mail"
                  type="email"
                  id="mail"
                  className="py-3 border border-[#494949] bg-[#111111] rounded-md lg:w-3/4 focus:border focus:border-[#F7931A] focus:outline-none px-4"
                />
              </fieldset>

              <button
                disabled={true}
                title="Signup"
                className="bg-[#F7931A] py-4 px-2 rounded-md text-white-100 lg:w-1/4 flex justify-center items-center font-semibold font-Montserrat"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black-500 my-12"></div>

        <div className="text-white-300 flex flex-col max-w-[800px] font-Nunito">
          <small className="font-bold text-[12px] mb-1">
            Copyright 2024, All Rights Reserved by Stealth Money.
          </small>

          <small className="text-[12px] leading-5">
            Stealth Money does not provide investment, legal, or tax advice.
            Information about digital assets like Bitcoin serve as a general
            explanation of the services provided. Users on our platform need to
            verify their identity & complete KYC before they can use our
            service. Stealth Money is currently in beta.
          </small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
