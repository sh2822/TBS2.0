import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shoppingcart/header";
import Footer from "./shoppingcart/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Beer Store",
  description: "TBS-2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className='relative'>
    <Header />
    <main className="flex-1 overflow-y-auto">{children}</main>
    <Footer />
      </body>
  </html>
  );
}
