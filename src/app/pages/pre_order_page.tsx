"use client";
import Image from "next/image";
import data1 from "../components/dummy-data/pre_order_data.json";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getWalletDetails } from "../components/shared/functions";
import { useEffect, useState } from "react";
import { itemType } from "../components/types/pre_order";

export default function Pre_order_page() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["wallet"],
    queryFn: getWalletDetails,
    select: (values) => {
      if (!data1 || !Array.isArray(data1)) return null;

      return data1.map((itemvalues: any) => {
        const walletData = values.data.find(
          (newItem: any) => newItem.id === itemvalues.id
        );

        return {
          ...itemvalues,
          id: walletData.id,
          product_name: walletData.walletName,
          price: walletData.price,
          outOfStock: walletData.outOfStock,
        };
      });
    },
    staleTime: 1000 * 60 * 30,
  });

  type Display = "all" | "tangem" | "ledger";
  const [displayType, setDisplayType] = useState<Display>("all");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handlDisplayFilter = (button: Display) => {
    if (!data) return;

    if (button === "all") {
      setFilteredData(data);
    } else {
      const values = data.filter((item) =>
        item.product_name.toLowerCase().includes(button)
      );
      setFilteredData(values);
    }

    setDisplayType(button);
  };

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
    <section className="w-full md:px-12 px-6 py-2 text-white-100">
      <div className="w-full font-Satoshi flex flex-col gap-y-2">
        <h1 className="text-center text-white text-[40px] font-bold">
          Order Wallet
        </h1>
        <p className="text-center text-[#CCCCCC] text-[20px] font-Nunito">
          Order the best selling wallets from us
        </p>

        <div className="w-full flex justify-center items-center gap-x-4">
          <div className="md:w-1/3 w-full flex justify-evenly items-center gap-x-2">
            <button
              onClick={() => handlDisplayFilter("all")}
              className={`
        rounded-2xl border border-[#494949] p-2 px-4 cursor-pointer
        transition-all duration-300 ease-in-out
        ${
          displayType === "all"
            ? "bg-white text-[#090909]"
            : "bg-[#111111] text-white hover:bg-white hover:text-black"
        }
      `}
            >
              All wallets
            </button>

            <button
              onClick={() => handlDisplayFilter("ledger")}
              className={`
        rounded-2xl border border-[#494949] p-2 px-4 cursor-pointer
        transition-all duration-300 ease-in-out
        ${
          displayType === "ledger"
            ? "bg-white text-[#090909]"
            : "bg-[#111111] text-white hover:bg-white hover:text-black"
        }
      `}
            >
              Ledger wallet
            </button>

            <button
              onClick={() => handlDisplayFilter("tangem")}
              className={`
        rounded-2xl border border-[#494949] p-2 px-4 cursor-pointer
        transition-all duration-300 ease-in-out
        ${
          displayType === "tangem"
            ? "bg-white text-[#090909]"
            : "bg-[#111111] text-white hover:bg-white hover:text-black"
        }
      `}
            >
              Tangem wallet
            </button>
          </div>
        </div>
      </div>

      <section className="flex md:flex-row flex-col flex-wrap">
        {filteredData?.length &&
          Array.isArray(filteredData) &&
          filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0D0D0D] md:w-[45%] w-full md:mx-2 my-6 flex flex-col justify-between
          transition-all duration-500 ease-in-out transform opacity-100 hover:scale-105"
            >
              <div className="w-full flex flex-col justify-center items-center p-4">
                <div className="w-full flex flex-col justify-center items-center bg-[#161616]">
                  <Image
                    src={item.product_images[0]}
                    alt="Trezor-wallet"
                    width={100}
                    height={60}
                    className="w-2/4"
                  />
                </div>
                <div className="bg-[#0D0D0D] my-4">
                  <h1 className="text-lg font-bold !text-[24px]">
                    {item.product_name}
                  </h1>
                  <p className="!leading-8 !text-[#CCCCCC] !text-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="my-2 px-4">
                <Link
                  href={`/order-wallet/${item.id}`}
                  className="!w-full !inline-block !p-4 !bg-orange-100 !text-center !text-[24px] !text-white-100 !font-bold !rounded-md"
                >
                  Buy for NGN{" "}
                  {item.price.toLocaleString("en", {
                    maximumFractionDigits: 2,
                  })}
                </Link>
              </div>
            </div>
          ))}
      </section>
    </section>
  );
}
