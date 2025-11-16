"use client";

import Navbar from "./navbar";
import { usePathname } from "next/navigation";

export default function Navrender() {
  const pathname = usePathname();

  return <>{!pathname.includes("vip") && <Navbar />}</>;
}
