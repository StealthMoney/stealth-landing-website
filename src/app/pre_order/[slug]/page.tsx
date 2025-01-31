"use client";
import Image from "next/image";
import data1 from "../../components/dummy-data/pre_order_data.json";
import { useState, useEffect } from "react";
import { usePurchase } from "@/app/components/context/pre_order";
import { itemType, Item } from "@/app/components/types/pre_order";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getWalletDetails } from "@/app/components/shared/functions";

export default function Page({ params }: { params: { slug: string } }) {
  const item: itemType | undefined = data1.find(
    (item) => item.id.toString() === params.slug
  );

  const { data, isPending, isError } = useQuery({
    queryKey: ["wallet"],
    queryFn: getWalletDetails,
    select: (values) => {
      if (!item) return null;

      const walletData = values.data.find(
        (newItem: any) => newItem.id === item.id
      );

      return {
        ...item,
        id: walletData.id,
        product_name: walletData.walletName,
        price: walletData.price,
        outOfStock: walletData.outOfStock,
      };
    },
    staleTime: 1000 * 60 * 30,
  });

  const router = useRouter();

  // Product animation showcase
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (item && item.product_images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === item.product_images.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [item]);
  // End of product animation showcase

  // update order details in state
  const [details, setDetails] = useState<Item>({
    id: data?.id || 0,
    amount: 1,
    product_name: data?.product_name || "",
    price: data?.price || 0,
    complete: false,
    image: item?.product_images[0] || "",
  });

  const {
    purchaseItems = [],
    addToCart = () => {},
    setPurchaseItems,
  } = usePurchase() || {};

  const increaseAmount = () => {
    if (details.amount >= 1) {
      setDetails((prev) => ({
        ...prev,
        amount: prev.amount + 1,
        price: (data?.price || 0) * (prev.amount + 1),
      }));
    }
  };

  const decreaseAmount = () => {
    if (details.amount > 1) {
      setDetails((prev) => ({
        ...prev,
        amount: prev.amount - 1,
        price: (data?.price || 0) * (prev.amount - 1),
      }));
    }
  };

  const saveValues = (value: number) => {
    addToCart(details);

    setDetails((prev) => ({
      ...prev,
      id: data?.id || 0,
      amount: 1,
      product_name: data?.product_name || "",
      price: data?.price || 0,
      complete: false,
      image: item?.product_images[0] || "",
    }));

    router.push(`/pre_order/${value}/checkout`);
  };
  // End of update product details in state

  // clear existinng oderState on page load
  useEffect(() => {
    setPurchaseItems([]);
  }, []);

  if (!data) {
    return (
      <div className="text-white-100 text-center flex justify-center items-center w-screen h-screen text-4xl">
        Item not found
      </div>
    );
  }

  return isPending ? (
    <section className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl font-bold text-center text-white-100">
        Loading...
      </h1>
    </section>
  ) : isError ? (
    <section className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl font-bold text-center text-red-500">
        Error getting data, check back later :(
      </h1>
    </section>
  ) : (
    <section className="text-white-100 w-full md:px-12 px-6 py-2">
      <section className="w-full flex gap-x-4 my-8">
        <div className="w-[80px] my-2">
          {data.product_images.map((value, index) => (
            <Image
              width={80}
              height={50}
              src={value}
              alt={`image-${index + 1}`}
              key={index}
              className={`my-2 bg-[#161616] rounded-md cursor-pointer ${
                index === currentImageIndex ? "border-2 border-orange-100" : ""
              }`}
              onClick={() => {
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>

        <div className="w-full flex gap-x-6 md:flex-nowrap flex-wrap">
          <div className="md:w-2/4 w-full bg-[#161616] flex flex-col items-center justify-center py-6">
            <Image
              width={100}
              height={100}
              quality={100}
              className="w-full"
              src={data.product_images[currentImageIndex]}
              alt={`image-${currentImageIndex + 1}`}
            />
            <div className="w-full flex justify-between items-center px-4 lg:flex-row flex-col lg:gap-y-0 gap-y-4 lg:my-0 my-4">
              <div className="rounded-2xl bg-[#090909] flex justify-between px-2 items-center py-4 lg:w-auto w-full">
                <div>
                  <Image
                    src={"/amazon-icon.svg"}
                    alt="amazon-icon"
                    width={20}
                    height={40}
                  />
                </div>

                <div>
                  <p className="flex px-4 gap-x-2">
                    4.5
                    <span>
                      <Image
                        src={"/starFilled.svg"}
                        alt="star-review"
                        width={20}
                        height={40}
                      />
                    </span>
                    6884 reviews
                  </p>
                </div>
              </div>

              <div className="bg-[#2B2B2B] rounded-2xl px-4 py-4 flex gap-2 items-center lg:w-auto w-full justify-between">
                <div>
                  <Image src={"/box1.svg"} alt="box" width={20} height={40} />
                </div>

                <div>
                  <p>Tech space</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/4 w-full flex flex-col gap-4 leading-8 md:my-auto my-6">
            <div className="flex items-center gap-x-4 md:flex-nowrap flex-wrap">
              <h1 className="text-2xl font-bold">{data.product_name}</h1>
              <span
                className={`rounded-2xl px-4 py-1 ${
                  !data.outOfStock
                    ? "bg-[#D1EBD5] text-[#199B2E]"
                    : "bg-[#ebd1d1] text-[#9b2819]"
                }`}
              >
                {!data.outOfStock ? (
                  <p className=" text-nowrap">IN STOCK</p>
                ) : (
                  <p className=" text-nowrap">OUT OF STOCK</p>
                )}
              </span>
            </div>
            <p className="text-lg">The original hardware wallet</p>
            <small>{data.description}</small>

            {data.product_details.map((value, index) => (
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
              <button
                onClick={() => saveValues(details.id)}
                className={`w-full inline-block p-4 bg-orange-100 text-center text-white-100 font-bold rounded-md ${
                  data.outOfStock ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={data.outOfStock}
              >
                Buy for NGN{" "}
                {details.price.toLocaleString("en", {
                  maximumFractionDigits: 2,
                })}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full border-b border-b-[#494949] py-4">
          <h1 className="font-bold text-2xl border-b border-b-[#494949] my-8">
            {data.specs?.main_text}
          </h1>
          <span className="leading-8 inline-block my-4">
            <p className="text-lg">{data.product_name}</p>
            <small>{data.specs?.sub_text}</small>
          </span>
        </div>

        {data.glance && (
          <div className="w-full border-b border-b-[#494949] py-4">
            <h1 className="font-bold text-2xl my-8">{data.glance.main_text}</h1>
            <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
              {data.glance.items.map((value, index) => (
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
          <h1 className="font-bold text-2xl my-8">{data.security.main_text}</h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {data.security.items.map((value, index) => (
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
          <h1 className="font-bold text-2xl my-8">{data.privacy.main_text}</h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {data.privacy.items.map((value, index) => (
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
          <h1 className="font-bold text-2xl my-8">{data.backup.main_text}</h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {data.backup.items.map((value, index) => (
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
            {data.authentication.main_text}
          </h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8">
            {data.authentication.items.map((value, index) => (
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
            {data.product_details2.main_text}
          </h1>
          <div className="flex md:flex-row flex-col lg:items-center md:gap-x-24 my-8 flex-wrap">
            {data.product_details2.items.map((value, index) => (
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
            {data.in_the_box.main_text}
          </h1>
          <div className="flex md:flex-row flex-col flex-wrap lg:items-center md:gap-x-24 my-8">
            {data.in_the_box.items.map((value, index) => (
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
          <h1 className="font-bold text-2xl my-8">{data.safety.main_text}</h1>
          <span className="leading-8 inline-block my-4">
            <small>{data.safety.sub_text}</small>
          </span>
        </div>

        <div className="w-full border-b border-b-[#494949] py-4 mb-12">
          <h1 className="font-bold text-2xl my-8">{data.material.main_text}</h1>
          <span className="leading-8 inline-block my-4">
            <small>{data.material.sub_text}</small>
          </span>
        </div>
      </section>
    </section>
  );
}
