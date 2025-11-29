"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import data from "../../../components/dummy-data/pre_order_data.json";

export default function Subroutes() {
  const [path, setPath] = useState<string | null>(null);
  const url = usePathname();
  const router = useRouter();

  useEffect(() => {
    setPath(url);
  }, [url]);

  const resourcesRegex = /\/resources\/(\d+)/i;
  const orderWalletRegex = /\/order-wallet\/([a-z-]+)/i;
  const checkoutRegex = /\/order-wallet\/([a-z-]+)\/checkout/i;

  const getProductSlug = () => {
    const checkoutMatch = url.match(checkoutRegex);
    if (checkoutMatch) return checkoutMatch[1];

    const orderMatch = url.match(orderWalletRegex);
    if (orderMatch) return orderMatch[1];

    return null;
  };

  const getProductName = (slug: string | null) => {
    if (!slug) return "";
    const product = data.find((item: any) => item.slug === slug);
    return product?.product_name || "";
  };

  const productSlug = getProductSlug();
  const productName = getProductName(productSlug);

  const isProductPage = orderWalletRegex.test(url) && !checkoutRegex.test(url);

  const isCheckoutPage = checkoutRegex.test(url);

  // Resources breadcrumb
  const resourcesMatch = url.match(resourcesRegex);
  const resourceNumber = resourcesMatch ? parseInt(resourcesMatch[1], 10) : 0;

  return (
    <>
      {/* Resources breadcrumb */}
      {resourcesRegex.test(url) && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="/resources"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Resources <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`/resources/${resourceNumber}`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              path?.includes(resourceNumber.toString())
                ? "text-orange-100"
                : "text-white-100"
            }`}
          >
            Bitcoin Self-Custody
          </Link>
        </nav>
      )}

      {/* Order wallet main page */}
      {url === "/order-wallet" && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="/order-wallet"
            className="mx-2 text-nowrap hover:text-orange-100 py-4 text-orange-100"
          >
            Order wallet
          </Link>
        </nav>
      )}

      {/* Product detail page */}
      {isProductPage && productSlug && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="/order-wallet"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Order wallet <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.refresh();
            }}
            className="mx-2 text-nowrap hover:text-orange-100 py-4 text-orange-100"
          >
            {productName}
          </Link>
        </nav>
      )}

      {/* Checkout page */}
      {isCheckoutPage && productSlug && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="/order-wallet"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Order wallet <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`/order-wallet/${productSlug}`}
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            {productName}
            <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.refresh();
            }}
            className="mx-2 text-nowrap hover:text-orange-100 py-4 text-orange-100"
          >
            Checkout
          </Link>
        </nav>
      )}
    </>
  );
}
