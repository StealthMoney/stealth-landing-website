"use client";
import Image from "next/image";
import data1 from "../components/dummy-data/pre_order_data.json";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getWalletDetails } from "../components/shared/functions";

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
      <h1 className="text-2xl my-2">Trezor Hardware Wallet for You</h1>
      <p className="text-black-200">
        Pre-order your Trezor hardware wallet from anywhere in Nigeria and get
        it within 48 hours in Lagos or 7 days elsewhere. Secure your assets with
        Trezor &#8210; order now for quick delivery.
      </p>

      <section className="flex md:flex-row flex-col">
        {data &&
          Array.isArray(data) &&
          data.map((item, index) => (
            <div
              className="bg-[#0D0D0D] md:w-2/4 w-full md:mx-2 my-6 flex flex-col justify-between"
              key={index}
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
                  <h1 className="text-lg font-bold">{item.product_name}</h1>
                  <p className="leading-8">{item.description}</p>
                </div>
              </div>

              <div className="my-2 px-4">
                <Link
                  href={`/pre_order/${item.id}`}
                  className="!w-full !inline-block !p-4 !bg-orange-100 !text-center !text-white-100 f!ont-bold !rounded-md"
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
