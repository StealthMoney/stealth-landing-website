"use client";
import { PurchaseProvider } from "../components/context/pre_order";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PurchaseProvider>
      <QueryClientProvider client={queryClient}>
        <section className="relative flex min-h-screen max-w-[1440px] m-auto flex-col items-center justify-between">
          {children}
        </section>
      </QueryClientProvider>
    </PurchaseProvider>
  );
}
