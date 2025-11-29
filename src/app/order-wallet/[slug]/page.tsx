"use client";
import Image from "next/image";
import data1 from "../../components/dummy-data/pre_order_data.json";
import { useState, useEffect, use } from "react";
import { usePurchase } from "@/app/components/context/pre_order";
import {
  itemType,
  Item,
  type ProductDetail,
} from "@/app/components/types/pre_order";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getWalletDetails } from "@/app/components/shared/functions";
import VideoPlayer from "@/app/components/client/general/video-player";

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);

  const item: itemType | undefined = data1.find(
    (item) => item.slug === params.slug
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["wallet", params.slug],
    queryFn: getWalletDetails,
    select: (values) => {
      if (!item) return null;

      const walletData = values.data.find(
        (newItem: any) => newItem.id === item.id
      );

      return {
        ...item,
        id: walletData.id,
        slug: item.slug,
        product_name: walletData.walletName,
        price: walletData.price,
        outOfStock: walletData.outOfStock,
        quantity: walletData.quantity,
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
  const [details, setDetails] = useState<Item | null>(null);

  const {
    purchaseItems = [],
    addToCart = () => {},
    setPurchaseItems,
  } = usePurchase() || {};

  const increaseAmount = () => {
    if (!details || !data) return;

    if (details.amount >= data.quantity) return;

    setDetails((prev) => {
      if (!prev) return prev;
      const nextAmount = prev.amount + 1;

      return {
        ...prev,
        amount: nextAmount,
        price: (data.price || 0) * nextAmount,
      };
    });
  };

  const decreaseAmount = () => {
    if (!details || !data) return;

    if (data.quantity < 1) return;

    if (details.amount <= 1) return;

    setDetails((prev) => {
      if (!prev) return prev;
      const nextAmount = prev.amount - 1;

      return {
        ...prev,
        amount: nextAmount,
        price: (data.price || 0) * nextAmount,
      };
    });
  };

  const saveValues = (slug: string) => {
    if (!details) return;

    addToCart(details);

    router.push(`/order-wallet/${slug}/checkout`);
  };
  // End of update product details in state

  // clear existinng oderState on page load
  useEffect(() => {
    setPurchaseItems([]);
  }, [setPurchaseItems]);

  useEffect(() => {
    if (!data || !details) return;

    const key = `orderitem-${params.slug}`;
    localStorage.setItem(key, JSON.stringify(details));
  }, [details, data, params.slug]);

  useEffect(() => {
    if (!data) return;

    const key = `orderitem-${params.slug}`;
    const saved = localStorage.getItem(key);

    if (saved) {
      const parsed = JSON.parse(saved);
      setDetails({
        ...parsed,
        price: (data.price || 0) * parsed.amount,
      });
    } else {
      // Initialize fresh ONLY when no saved values exist
      setDetails({
        id: data.id,
        amount: 1,
        slug: data.slug,
        product_name: data.product_name,
        price: data.price,
        complete: false,
        image: item?.product_images?.[0] || "",
      });
    }
  }, [data, item?.product_images, params.slug]);

  if (isLoading)
    return (
      <section className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-2xl font-bold text-center text-white-100">
          Loading...
        </h1>
      </section>
    );

  if (!data) {
    return (
      <div className="text-white-100 text-center flex justify-center items-center w-screen h-screen text-4xl">
        Item not found
      </div>
    );
  }

  const hasColor = (detail: ProductDetail): detail is { color: string } => {
    return "color" in detail;
  };

  return !details ? (
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

          <div className={`md:w-2/4 w-full flex flex-col gap-4 leading-8 md:my-auto my-6 ${data.id === 3 ? "gap-y-12" : ""}`}>
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
            <p className="text-lg">
              {(data.product_details[0] as { color: string }).color}
            </p>
            <p className="text-[#D4D4D4] !text-[16px] !leading-[24px]">
              {data.description}
            </p>

            <div className="flex gap-x-2">
              {data.product_name.toLowerCase().includes("ledger") ? (
                <>
                  <div
                    className={`${
                      hasColor(data.product_details[0]) &&
                      data.product_details[0].color
                        .toLowerCase()
                        .includes("emerald")
                        ? "w-7 h-7 border-2 border-[#494949]"
                        : "w-6 h-6"
                    } flex justify-center items-center rounded-full`}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={"/emerald.svg"}
                      alt="color"
                      className={
                        hasColor(data.product_details[0]) &&
                        data.product_details[0].color
                          .toLowerCase()
                          .includes("emerald")
                          ? `w-3/4 h-3/4 rounded-full`
                          : ""
                      }
                    />
                  </div>

                  <div
                    className={`${
                      hasColor(data.product_details[0]) &&
                      data.product_details[0].color
                        .toLowerCase()
                        .includes("gold")
                        ? "w-7 h-7 border-2 border-[#494949]"
                        : "w-6 h-6"
                    } flex justify-center items-center rounded-full`}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={"/gold.svg"}
                      alt="color"
                      className={
                        hasColor(data.product_details[0]) &&
                        data.product_details[0].color
                          .toLowerCase()
                          .includes("gold")
                          ? `w-3/4 h-3/4 rounded-full`
                          : ""
                      }
                    />
                  </div>
                </>
              ) : (
                <div
                  className={`${
                    hasColor(data.product_details[0]) &&
                    data.product_details[0].color
                      .toLowerCase()
                      .includes("black")
                      ? "w-7 h-7 border-2 border-[#494949]"
                      : "w-6 h-6"
                  } flex justify-center items-center rounded-full`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={"/black.svg"}
                    alt="color"
                    className={
                      hasColor(data.product_details[0]) &&
                      data.product_details[0].color
                        .toLowerCase()
                        .includes("emerald")
                        ? `w-3/4 h-3/4 rounded-full`
                        : ""
                    }
                  />
                </div>
              )}
            </div>

            {data.product_details.map((value, index) => {
              if ("icon" in value && data.id !== 3) {
                return (
                  <div key={index} className="flex gap-x-1 items-center">
                    <span className="">
                      <Image
                        width={40}
                        height={50}
                        src={value.icon}
                        alt="icon"
                      />
                    </span>
                    <small className="ml-1 text-[20px]">
                      {value.description}
                    </small>
                  </div>
                );
              }
              return null;
            })}

            <div className="w-full flex gap-x-2 items-center">
              <button
                onClick={() => decreaseAmount()}
                className="!rounded-full !cursor-pointer !px-2 !min-w-2 !max-w-2 !min-h-6 !max-h-6 !shadow-xs !shadow-[#888888] !border-black-500 !border !flex !items-center !justify-center"
              >
                -
              </button>
              {details.amount}
              <button
                onClick={() => increaseAmount()}
                className="!rounded-full !cursor-pointer !px-2 !min-w-2 !max-w-2 !min-h-6 !max-h-6 !shadow-xs !shadow-[#888888] !border-black-500 !border !flex !items-center !justify-center"
              >
                +
              </button>

              <span className="!text-orange-100 !text-[28px]">
                NGN{" "}
                {details.price.toLocaleString("en", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <div className="my-2 px-4">
              <button
                onClick={() => saveValues(details.slug)}
                className={`!w-full !inline-block !p-4 !text-center !text-[20px] !text-white-100 !font-bold !rounded-md ${
                  data.outOfStock
                    ? "!bg-gray-500 !cursor-not-allowed"
                    : "!bg-orange-100 !cursor-pointer"
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
        <div className="w-full border-b border-b-black-500 py-4">
          <h1 className="font-bold text-[40px] font-Satoshi border-b border-b-black-500 my-8">
            {data.specs?.main}
          </h1>
          <div className="w-full space-y-12">
            {(data.specs.items ?? data.specs.items2)?.map((specItem, index) => (
              <div
                key={index}
                className="!w-full grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6"
              >
                {Object.entries(specItem).map(([key, value]) => (
                  <div key={key}>
                    <h1 className="!font-semibold md:text-[28px]! !text-[20px] !font-Satoshi">
                      {key}
                    </h1>

                    {key === "in the box" ? (
                      <ul className="list-disc marker:text-white pl-6 space-y-1 mt-2">
                        {value.map((v: string, i: number) => (
                          <li
                            key={i}
                            className="!text-[#D4D4D4] md:text-[20px]! !text-[14px] !font-Nunito"
                          >
                            {v}
                          </li>
                        ))}
                      </ul>
                    ) : Array.isArray(value) ? (
                      <small className="!text-[#D4D4D4] md:text-[20px]! !text-[14px] block !font-Nunito">
                        {value.map((v, i) => (
                          <span key={i} className="block">
                            {v}
                          </span>
                        ))}
                      </small>
                    ) : (
                      <small className="!text-[#D4D4D4] !text-[20px] block max-w-[85%] !font-Nunito">
                        {value}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {data.id === 3 && (
          <div className="my-12">
            <h2 className="text-[40px] font-bold font-Satoshi mb-4">
              {data.product_name} (Preview Video)
            </h2>
            <VideoPlayer videoSrc="https://youtu.be/zjFiNQE0_64?si=wXeZ-Cr99wD9rUZa" />
          </div>
        )}
      </section>
    </section>
  );
}
