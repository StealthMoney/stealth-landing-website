"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Subroutes() {
  const [path, setPath] = useState<string | null>(null);
  const url = usePathname();

  const pathRegex = /\/resources\/(\d+)/i;
  let number = 0;
  const match = url.match(pathRegex);
  if (match && match[1]) {
    number = parseInt(match[1], 10);
  }

  function trackPathName() {
    setPath(url);
  }

  useEffect(() => {
    trackPathName();
    console.log(url);
  }, [url]);

  return (
    <>
      {pathRegex.test(url) ? (
        <nav
          className="flex mt-6 md:px-12 px-6 text-[#494949] w-screen justify-start -py-4 items-end 
        overflow-x-auto"
        >
          <a
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </a>

          <a
            href="/resources"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Resources <span className="mx-2">&gt;</span>
          </a>

          <a
            href={`/resources/${number}`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              path?.includes(number.toString())
                ? "text-orange-100"
                : "text-white-100"
            }`}
          >
            Bitcoin Self-Custody
          </a>
        </nav>
      ) : url === "/pre_order" ? (
        <nav
          className="flex mt-6 md:px-12 px-6 text-[#494949] w-screen justify-start -py-4 items-end 
      overflow-x-auto"
        >
          <a
            href="/"
            className="mx-2 text-nowrap text-white-100 hover:text-orange-100 py-4"
          >
            Home <span className="mx-2">&gt;</span>
          </a>

          <a
            href={`/pre_order`}
            className={`mx-2 text-nowrap hover:text-orange-100 py-4 ${
              url === "/pre_order" ? "text-orange-100" : "text-white-100"
            }`}
          >
            Pre-order wallet
          </a>
        </nav>
      ) : null}
    </>
  );
}
