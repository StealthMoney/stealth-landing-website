"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Subroutes() {
  const [path, setPath] = useState<string | null>(null);
  const url = usePathname();

  useEffect(() => {
    setPath(url);
  }, [url]);

  const pathRegex = /\/resources\/(\d+)/i;
  const includeNumUrl = /\/pre_order\/(\d+)/i;
  const match = url.match(pathRegex);
  let number = match ? parseInt(match[1], 10) : 0;

  return (
    <>
      {pathRegex.test(url) && (
        <nav className="flex mt-6 md:px-12 px-6 text-[#494949] w-screen justify-start -py-4 items-end overflow-x-auto">
          <a href="/" className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4">Home <span className="mx-2">&gt;</span></a>
          <a href="/resources" className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4">Resources <span className="mx-2">&gt;</span></a>
          <a href={`/resources/${number}`} className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${path?.includes(number.toString()) ? "text-orange-100" : "text-white-100"}`}>Bitcoin Self-Custody</a>
        </nav>
      )}

      {url === "/pre_order" && (
        <nav className="flex mt-6 md:px-12 px-6 text-[#494949] w-screen justify-start -py-4 items-end overflow-x-auto">
          <a href="/" className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4">Home <span className="mx-2">&gt;</span></a>
          <a href={`/pre_order`} className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${url === "/pre_order" ? "text-orange-100" : "text-white-100"}`}>Pre-order wallet</a>
        </nav>
      )}

      {(url === "/pre_order/1" || url === "/pre_order/2") && (
        <nav className="flex mt-6 md:px-12 px-6 text-[#494949] w-screen justify-start -py-4 items-end overflow-x-auto">
          <a href="/" className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4">Home <span className="mx-2">&gt;</span></a>
          <a href={`/pre_order`} className={`mx-2 text-nowrap hover:text-orange-100 py-4`}>Pre-order wallet <span className="mx-2">&gt;</span></a>
          <a href={`/pre_order`} className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${url.match(includeNumUrl) ? "text-orange-100" : "text-white-100"}`}>
            {url.match(includeNumUrl) && (url === "/pre_order/1" ? "Trezor model one" : (url === "/pre_order/2" ? "Trezor safe3" : ""))}
          </a>
        </nav>
      )}
    </>
  );
}
