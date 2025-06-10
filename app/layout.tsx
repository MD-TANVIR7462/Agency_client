import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiSCOTEK",
  description: "Your next web destination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />{" "}
        <ReduxProvider>
          <div className="bg-gray-900"> {children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
