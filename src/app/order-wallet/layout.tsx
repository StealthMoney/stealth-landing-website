import Order_layout from "../components/client/order-wallet/order_layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Order Bitcoin Hardware Wallets | Secure Self Custody with Stealth Money",

  description:
    "Order trusted Bitcoin hardware wallets through Stealth Money. Secure your Bitcoin with self custody using verified devices designed for long-term safety.",

  keywords: [
    "Bitcoin hardware wallet",
    "order hardware wallet",
    "Bitcoin self custody wallet",
    "cold storage Bitcoin",
    "secure Bitcoin wallet",
    "hardware wallet Nigeria",
    "Bitcoin cold wallet",
    "Stealth Money hardware wallet",
    "Bitcoin wallet order",
    "crypto hardware wallet",
  ],

  authors: [{ name: "Stealth Money" }],
  creator: "Stealth Money",
  publisher: "Stealth Money",

  metadataBase: new URL("https://www.stealth.money"),

  alternates: {
    canonical: "/order-wallet",
  },

  openGraph: {
    title:
      "Order Bitcoin Hardware Wallets | Secure Self Custody with Stealth Money",
    description:
      "Buy verified Bitcoin hardware wallets through Stealth Money and take full control of your Bitcoin with secure self custody.",
    url: "https://www.stealth.money/order-wallet",
    siteName: "Stealth Money",
    images: [
      {
        url: "", // need an image here
        width: 1200,
        height: 630,
        alt: "Stealth Money Hardware Wallets for Secure Bitcoin Self Custody",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Order Bitcoin Hardware Wallets | Secure Self Custody with Stealth Money",
    description:
      "Secure your Bitcoin with trusted hardware wallets ordered through Stealth Money.",
    images: [""], // need an image
    creator: "@stealthmoney_",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Finance",
};

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Order_layout>
      <section className="relative flex min-h-screen max-w-[1440px] m-auto flex-col items-center justify-between">
        {children}
      </section>
    </Order_layout>
  );
}
