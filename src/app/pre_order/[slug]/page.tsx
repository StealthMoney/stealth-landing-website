"use client";
import Image from "next/image";
import data from "../../components/dummy-data/pre_order_data.json";
import Link from "next/link";
import { useState } from "react";
import { usePurchase } from "@/app/components/context/pre_order";
import { itemType, Item } from "@/app/components/types/pre_order";

export default function Page({ params }: { params: { slug: string } }) {
  const item: itemType | undefined = data.find(
    (item) => item.id.toString() === params.slug
  );
  const [amount, setAmount] = useState<number>(1);

  const [details, setDetails] = useState<Item>({
    id: item?.id || 0,
    amount: 1,
    product_name: item?.product_name || "",
    price: item?.price || 0,
    complete: false,
    image: item?.product_images[0] || "",
  });

  const { purchaseItems = [], addToCart = () => {} } = usePurchase() || {};

  if (!item) {
    return (
      <div className="text-white-100 text-center flex justify-center items-center w-screen h-screen text-4xl">
        Item not found
      </div>
    );
  }

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
    if (details.amount >= 1) {
      setDetails((prev) => ({
        ...prev,
        amount: prev.amount + 1,
        price: (item?.price || 0) * (prev.amount + 1),
      }));
    }
  };

  const decreaseAmount = () => {
    if (details.amount > 1) {
      setDetails((prev) => ({
        ...prev,
        amount: prev.amount - 1,
        price: (item?.price || 0) * (prev.amount - 1),
      }));
    }
  };

  const saveValues = () => {
    addToCart(details);
    console.log(purchaseItems);
  };

  return (
    <section className="text-white-100 w-full md:px-12 px-6 py-2">
      <section className="w-full flex gap-x-4 my-8">
        <div className="w-[80px] my-2">
          {item.product_images.map((value, index) => (
            <Image
              width={80}
              height={50}
              src={value}
              alt={`imagge-${index + 1}`}
              key={index}
              className="my-2"
            />
          ))}
        </div>

        <div className="w-full flex gap-x-6 md:flex-nowrap flex-wrap">
          <div className="md:w-2/4 w-full bg-[#161616] flex flex-col items-center justify-center">
            <Image
              width={100}
              height={100}
              quality={100}
              className="w-full"
              src={item.product_images[1]}
              alt={`image-${1}`}
            />
          </div>

          <div className="md:w-2/4 w-full flex flex-col gap-4 leading-8 md:my-auto my-6">
            <h1 className="text-2xl font-bold">{item.product_name}</h1>
            <p className="text-lg">The original hardware wallet</p>
            <small>{item.description}</small>

            {item.product_details.map((value, index) => (
              <div key={index} className="flex gap-x-1 items-center">
                <span className="mx-1">
                  <Image width={30} height={50} src={value.icon} alt="icon" />
                </span>
                <small className="mx-1">{value.description}</small>
              </div>
            ))}

            <div className="w-full flex gap-x-2 items-center">
              <button
                onClick={() => decreaseAmount()}
                className="rounded-full cursor-pointer px-2 w-6 h-6 shadow-sm shadow-[#888888] border-[#494949] border flex items-center justify-center"
              >
                -
              </button>
              {details.amount}
              <button
                onClick={() => increaseAmount()}
                className="rounded-full cursor-pointer px-2 w-6 h-6 shadow-sm shadow-[#888888] border-[#494949] border flex items-center justify-center"
              >
                +
              </button>
            </div>

            <div className="my-2 px-4">
              <Link
                href={`/pre_order/${item.id}/checkout`}
                onClick={saveValues}
                className="w-full inline-block p-4 bg-orange-100 text-center text-white-100 font-bold rounded-md"
              >
                Buy for NGN {details.price}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl border-b border-b-[#494949] my-8">
            {item.specs?.main_text}
          </h1>
          <span className="leading-8 inline-block my-4">
            <p className="text-lg">{item.product_name}</p>
            <small>{item.specs?.sub_text}</small>
          </span>
        </div>

        {item.glance && (
          <div className="w-full border-b border-b-[#494949] py-4">
            <h1 className="font-bold text-2xl my-8">{item.glance.main_text}</h1>
            <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
              {item.glance.items.map((value, index) => (
                <div
                  key={index}
                  className="flex lg:flex-row flex-col lg:items-center gap-x-2 lg:my-auto my-4"
                >
                  <span className="leading-8 inline-block lg:mx-2 lg:my-auto my-4">
                    <Image src={value.icon} alt="icon" width={40} height={20} />
                  </span>
                  <div>
                    <h1 className="text-lg font-bold">{value.header}</h1>
                    <small>{value.text}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">{item.security.main_text}</h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {item.security.items.map((value, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:items-center gap-x-2 lg:my-auto my-4"
              >
                <span className="leading-8 inline-block lg:mx-2 lg:my-auto my-4">
                  <Image src={value.icon} alt="icon" width={40} height={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold">{value.header}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">{item.privacy.main_text}</h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {item.privacy.items.map((value, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:items-center gap-x-2 lg:my-auto my-4"
              >
                <span className="leading-8 inline-block lg:mx-2 lg:my-auto my-4">
                  <Image src={value.icon} alt="icon" width={40} height={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold">{value.header}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">{item.backup.main_text}</h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {item.backup.items.map((value, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:items-center gap-x-2 lg:my-auto my-4"
              >
                <span className="leading-8 inline-block lg:mx-2 lg:my-auto my-4">
                  <Image src={value.icon} alt="icon" width={40} height={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold">{value.header}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">
            {item.authentication.main_text}
          </h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {item.authentication.items.map((value, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:items-center gap-x-2 lg:my-auto my-4"
              >
                <span className="leading-8 inline-block lg:mx-2 lg:my-auto my-4">
                  <Image src={value.icon} alt="icon" width={40} height={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold">{value.header}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">
            {item.product_details2.main_text}
          </h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8 flex-wrap">
            {item.product_details2.items.map((value, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:items-center gap-x-2 lg:my-auto my-4"
              >
                <span className="leading-8 inline-block lg:mx-2 lg:my-4 my-4">
                  <Image src={value.icon} alt="icon" width={40} height={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold">{value.header}</h1>
                  <small>{value.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">
            {item.in_the_box.main_text}
          </h1>
          <div className="flex md:flex-row flex-col flex-wrap lg:items-center md:gap-x-24 my-8">
            {item.in_the_box.items.map((value, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:items-center gap-x-2 my-4 flex-wrap"
              >
                <span className="leading-8 inline-block lg:mx-2 lg:my-auto my-4">
                  <Image src={value.icon} alt="icon" width={40} height={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold">{value.header}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl my-8">{item.safety.main_text}</h1>
          <span className="leading-8 inline-block my-4">
            <small>{item.safety.sub_text}</small>
          </span>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4 mb-12">
          <h1 className="font-bold text-2xl my-8">{item.material.main_text}</h1>
          <span className="leading-8 inline-block my-4">
            <small>{item.material.sub_text}</small>
          </span>
        </div>
      </section>
    </section>
  );
}
