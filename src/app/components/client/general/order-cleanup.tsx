"use client";
import { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";

export function OrderCleanup() {
  const path = usePathname();
  const params = useParams();

  useEffect(() => {
    const isPreOrderRoute = path.startsWith("/order-wallet") && params.slug;

    if (!isPreOrderRoute) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("orderitem-")) {
          localStorage.removeItem(key);
        }
      });
    }
  }, [path, params]);

  return null;
}
