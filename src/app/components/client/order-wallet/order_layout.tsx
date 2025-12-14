"use client"
import { PurchaseProvider } from "../../context/pre_order";

export default function Order_layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PurchaseProvider>{children}</PurchaseProvider>;
}
