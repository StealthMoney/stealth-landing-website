import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/client/general/navbar";
import Footer from "./components/client/general/footer";
import Subroutes from "./components/client/general/subroutes";
import LocalFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stealth Money",
  description: "Stealth Money",
};

const satoshi = LocalFont({
  src: [
    { path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf", weight: "200" },
    { path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf", weight: "400" },
    { path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf", weight: "500" },
    { path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf", weight: "700" },
    { path: "../../public/fonts/satoshi_variable/Satoshi-Variable.ttf", weight: "900" },
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
        className={`${inter.className} ${satoshi.variable} scrollbar bg-black-700 overflow-x-hidden`}
      >
        <Navbar />
        <Subroutes />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
