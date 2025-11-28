"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Subroutes() {
  const [path, setPath] = useState<string | null>(null);
  const url = usePathname();
  const router = useRouter();

  useEffect(() => {
    setPath(url);
  }, [url]);

  const pathRegex = /\/resources\/(\d+)/i;
  const includeNumUrl = /\/order-wallet\/(\d+)/i;
  const match = url.match(pathRegex);
  let number = match ? parseInt(match[1], 10) : 0;

  return (
    <>
      {pathRegex.test(url) && (
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
            href={`/resources/${number}`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              path?.includes(number.toString())
                ? "text-orange-100"
                : "text-white-100"
            }`}
          >
            Bitcoin Self-Custody
          </Link>
        </nav>
      )}

      {url === "/order-wallet" && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`/order-wallet`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              url === "/order-wallet" ? "text-orange-100" : "text-white-100"
            }`}
          >
            order wallet
          </Link>
        </nav>
      )}

      {(url === "/order-wallet/1" ||
        url === "/order-wallet/2" ||
        url === "/order-wallet/3") && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`/order-wallet`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4`}
          >
            order wallet <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`#`}
            onClick={() => router.refresh()}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              url.match(includeNumUrl) ? "text-orange-100" : "text-white-100"
            }`}
          >
            {url.match(includeNumUrl) &&
              (url === "/order-wallet/1"
                ? "Ledger Nano S Plus (Emerald Green)"
                : url === "/order-wallet/2"
                ? "Ledger Nano S Plus (Gold)"
                : url === "/order-wallet/3"
                ? "Tangem Wallet - Stealth"
                : "")}
          </Link>
        </nav>
      )}

      {(url === "/order-wallet/1/checkout" ||
        url === "/order-wallet/2/checkout" ||
        url === "/order-wallet/3/checkout") && (
        <nav className="flex mt-6 md:px-12 px-6 text-black-500 w-screen justify-start -py-4 items-end overflow-x-auto">
          <Link
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`/order-wallet`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4`}
          >
            Order wallet <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href={`#`}
            onClick={() => router.back()}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4`}
          >
            {url.match(includeNumUrl) &&
              (url === "/order-wallet/1/checkout"
                ? "Ledger Nano S Plus (Emerald Green)"
                : url === "/order-wallet/2/checkout"
                ? "Ledger Nano S Plus (Gold)"
                : url === "/order-wallet/3/checkout"
                ? "Tangem Wallet - Stealth"
                : "")}
            <span className="mx-2">&gt;</span>
          </Link>
          <Link
            href="#"
            onClick={() => router.refresh()}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              url.match(includeNumUrl) &&
              (url === "/order-wallet/1/checkout" ||
                url === "/order-wallet/2/checkout" ||
                "/order-wallet/3/checkout")
                ? "text-orange-100"
                : "text-white-100"
            }`}
          >
            Checkout
          </Link>
        </nav>
      )}
    </>
  );
}
