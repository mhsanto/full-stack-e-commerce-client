import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import {Toaster} from "react-hot-toast";
const unbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Created By Mahmodul Hasan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={unbanist.className}>
        <ModalProvider />
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
