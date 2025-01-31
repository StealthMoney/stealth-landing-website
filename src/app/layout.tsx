"use client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/client/general/navbar";
import Subroutes from "./components/client/general/subroutes";
import LocalFont from "next/font/local";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HelmetProvider>
      <html lang="en">
        <Helmet>
          <title>Stealth Money</title>
          <meta name="description" content="Stealth Money" />
          <meta property="og:title" content="Stealth Money" />
          <meta property="og:description" content="Stealth Money" />
          <meta name="twitter:title" content="Stealth Money" />
          <meta name="twitter:description" content="Stealth Money" />
        </Helmet>
        <body
          className={`${inter.className} ${satoshi.variable} ${satoshiItalic.variable} scrollbar bg-black-700 overflow-x-hidden`}
        >
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Subroutes />
            {children}
          </QueryClientProvider>
        </body>
      </html>
    </HelmetProvider>
  );
}
