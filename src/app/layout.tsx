import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/client/general/navbar";
import Footer from "./components/client/general/footer";

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
      <body className={`${inter.className} scrollbar bg-black-700`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
