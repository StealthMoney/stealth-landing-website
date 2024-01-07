"use client";
import { useState } from "react";
import { WaitlistFormData } from "../server/footer";
import Image from "next/image";
import { revalidatePath } from "next/cache";

type Props = {
  joinWaitlist: (formData: WaitlistFormData) => Promise<
    | {
        error: string;
        success?: undefined;
      }
    | {
        success: any;
        error?: undefined;
      }
  >;
};

export default function WaitlistForm({ joinWaitlist }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData: WaitlistFormData = {
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      phoneNumber,
      email: email.toLowerCase(),
    };
    console.log({ formData });
    const { error } = await joinWaitlist(formData);
    setLoading(false);
    if (error) {
      console.error(error);
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000); // 5 seconds
      return;
    }
    setSuccess(true);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setTimeout(() => {
      setSuccess(false);
    }, 5000); // 5 seconds
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
      <div className="flex flex-col w-full">
        <p className="text-center font-semibold uppercase mb-8 text-white-100 text-[45px]">
          Join Our Waitlist
        </p>
        <p className="text-white-300 mb-2 text-center">
          Join our waitlist, and be the VIP to experience all the excitement
          when we launch! Your anticipation means the world to us. 🚀
        </p>
        <p className="text-white-300 mb-2 text-center font-medium">
          {error && <span className="text-red-700">{error}</span>}
          {success && (
            <span className="text-green-700">
              Thank you for joining our waitlist. We will reach out to you soon.
            </span>
          )}
        </p>
      </div>
      <div className="flex justify-between gap-x-8 mb-7">
        <div className="flex flex-col w-full">
          <label className="text-white-100 mb-2 text-[14px]">
            First Name<span className="text-red-700">*</span>
          </label>
          <input
            className="w-full p-4 border border-black-600 rounded-md bg-transparent text-white-100 placeholder:opacity-50"
            type="text"
            placeholder="Enter your first name"
            id="firstname"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastname" className="text-white-100 mb-2 text-[14px]">
            Last Name
            <span className="text-red-700">*</span>
          </label>
          <input
            className="w-full p-4 border border-black-600 rounded-md bg-transparent text-white-100 placeholder:opacity-50"
            value={lastName}
            type="text"
            placeholder="Enter your last name"
            id="lastname"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-end justify-end gap-x-8">
        <div className="flex flex-col items-start w-full">
          <label className="text-white-100 mb-2 text-[14px]">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            className="w-full p-4 border border-black-600 rounded-md bg-transparent text-white-100 placeholder:opacity-50"
            type="text"
            placeholder="Enter your email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="phone" className="text-white-100 mb-2 text-[14px]">
            Phone Number <span className="italic">(Optional)</span>
          </label>
          <input
            className="w-full p-4 border border-black-600 rounded-md bg-transparent text-white-100 placeholder:opacity-50"
            type="string"
            placeholder="08123456789"
            id="phone"
            value={phoneNumber}
            onChange={(e) => {
              // only allow numbers
              const re = /^\d*\.?\d*$/;
              const value = e.target.value;
              if (re.test(value)) {
                setPhoneNumber(e.target.value);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-y-24">
        <p className="text-white-300 mb-2 text-center text-[13px] flex gap-x-1 items-center justify-center">
          <Image src="/info.svg" alt="phone" width={20} height={20} />
          Add your phone number if you will like to join our WhatsApp group. No
          spams, we promise
        </p>
        <button
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-orange-500"
          } bg-orange-100 w-1/2 text-white-100 rounded-md h-[58px] text-[16px]`}
        >
          {loading ? <Spinner /> : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
}

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black-700"></div>
    </div>
  );
};
