import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Subroutes from "./components/client/general/subroutes";
import LocalFont from "next/font/local";
import { twak_WIDGET_id, twak_property_id } from "@/config";
import Twak from "./components/client/general/twak";
import TanstackProvider from "./components/client/general/tanstack";
import Navrender from "./components/client/general/navrender";
import { OrderCleanup } from "./components/client/general/order-cleanup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stealth Money | Simplified Bitcoin Savings & Self Custody",

  description:
    "Stealth Money helps individuals and businesses save Bitcoin securely with full self custody. Simple, private, and built for long-term Bitcoin holders.",

  keywords: [
    "Stealth Money",
    "Bitcoin savings",
    "Bitcoin self custody",
    "Bitcoin wallet",
    "secure Bitcoin storage",
    "Bitcoin investment platform",
    "Bitcoin custody alternative",
    "crypto self custody",
    "Bitcoin for long term savings",
    "Bitcoin wealth management",
  ],

  authors: [{ name: "Stealth Money" }],
  creator: "Stealth Money",
  publisher: "Stealth Money",

  metadataBase: new URL("https://www.stealth.money"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Stealth Money | Simplified Bitcoin Savings & Self Custody",
    description:
      "Save Bitcoin securely with full self custody. Stealth Money is built for individuals and businesses who want long-term Bitcoin ownership without complexity.",
    url: "https://www.stealth.money",
    siteName: "Stealth Money",
    images: [
      {
        url: "", // need something
        width: 1200,
        height: 630,
        alt: "Stealth Money - Simplified Bitcoin Savings & Self Custody",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Stealth Money | Simplified Bitcoin Savings & Self Custody",
    description:
      "Securely save Bitcoin with full self custody. Built for serious Bitcoin holders.",
    images: [".."], // need something
    creator: "@stealthmoney_",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Finance",
};

const satoshiItalic = LocalFont({
  src: [
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-VariableItalic.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-VariableItalic.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-VariableItalic.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-VariableItalic.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-VariableItalic.ttf",
      weight: "900",
    },
  ],
  variable: "--satoshi-italic",
});

const satoshi = LocalFont({
  src: [
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf",
      weight: "900",
    },
  ],
  variable: "--satoshi",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${satoshi.variable} ${satoshiItalic.variable} relative scrollbar bg-black-700 overflow-x-hidden`}
      >
        <TanstackProvider>
          <Navrender />
          <Subroutes />
          {children}
          <div className="absolute bottom-8 right-8">
            <Twak
              propertyID={twak_property_id || ""}
              widgetID={twak_WIDGET_id || ""}
            />
          </div>
        </TanstackProvider>
        <OrderCleanup />
      </body>
    </html>
  );
}
