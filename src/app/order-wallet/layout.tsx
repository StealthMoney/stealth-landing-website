"use client";
import { PurchaseProvider } from "../components/context/pre_order";

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PurchaseProvider>
      <section className="relative flex min-h-screen max-w-[1440px] m-auto flex-col items-center justify-between">
        {children}
      </section>
    </PurchaseProvider>
  );
}
