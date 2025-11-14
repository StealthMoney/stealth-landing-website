import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Subroutes from "./components/client/general/subroutes";
import LocalFont from "next/font/local";
import { twak_WIDGET_id, twak_property_id } from "@/config";
import Twak from "./components/client/general/twak";
import TanstackProvider from "./components/client/general/tanstack";
import Navrender from "./components/client/general/navrender";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stealth Money",
  description: "Stealth Money",
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
      </body>
    </html>
  );
}
