"use client";
import Image from "next/image";
import { usePurchase } from "@/app/components/context/pre_order";

export default function Page({ params }: { params: { id: string } }) {
  const { purchaseItems = [] } = usePurchase();
  console.log(purchaseItems);

  const getStatusImage = () => {
    const completed = purchaseItems.some((item) => item.complete);
    return completed ? "/radioFilled.svg" : "/radioEmpty.svg";
  };

  return (
    <section className="text-white-100 w-full md:px-12 px-6 py-2 my-6">
      <section className="py-4 px-2">
        <div className="border-b border-b-[#494949] flex gap-x-4 items-center md:flex-nowrap flex-wrap">
          <div className="w-2/4">
            <h1 className="lg:text-4xl md:text-2xl">Complete Your order</h1>
          </div>
          <div className="w-full flex gap-x-4 items-center justify-evenly py-8">
            <span className="w-1/3 flex items-center justify-center">
              <Image
                src={"/radioFilled.svg"}
                alt="status"
                width={40}
                height={40}
              />
              <p>Information</p>
            </span>
            <div className=" border-b border-b-[#494949] w-1/3"></div>
            <span className="w-1/3 flex items-center justify-center">
              <Image
                src={getStatusImage()}
                alt="status"
                width={40}
                height={40}
              />
              <p>Finish</p>
            </span>
          </div>
        </div>
        <div className=" my-4 py-4">
          <div className="flex gap-x-4 my-2 items-center">
            <span>
              <Image
                src={"/checkboxFilled.svg"}
                alt="checkbox"
                width={20}
                height={20}
              />
            </span>
            <p>
              All orders within Lagos will be delivered in 1 - 3 business days.
              Orders outside Lagos will be delivered in 5 - 7 business days
            </p>
          </div>
          <div className="flex gap-x-4 my-2 items-center">
            <span>
              <Image
                src={"/checkboxFilled.svg"}
                alt="checkbox"
                width={20}
                height={20}
              />
            </span>
            <p>
              Delivery fees are inclusive, orders outside Lagos and Abuja may be
              delivered to a pick up point, details will be provided by courier.
            </p>
          </div>
        </div>
      </section>

      <section className="flex gap-x-6">
        <div className="lg:w-2/4 w-full">
          <h1 className="text-2xl">Billing & Shipping</h1>
        </div>

        <div className="lg:w-2/4 w-full">
          <h1 className="text-2xl">Your Order</h1>
        </div>
      </section>
    </section>
  );
}
