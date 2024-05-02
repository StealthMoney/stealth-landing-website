"use client"
import { PurchaseProvider } from "../components/context/pre_order";

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PurchaseProvider>{children}</PurchaseProvider>;
}
