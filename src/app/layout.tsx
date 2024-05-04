import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/client/general/navbar";
import Subroutes from "./components/client/general/subroutes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stealth Money",
  description: "Stealth Money",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar bg-black-700 overflow-x-hidden`}
      >
        <Navbar />
        <Subroutes />
        {children}
      </body>
    </html>
  );
}
