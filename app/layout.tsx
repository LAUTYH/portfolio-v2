import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  });


export const metadata: Metadata = {
  title: "LauForDevs Landing Page 👨‍💻",
  description: "Landing page for LauForDevs, made by Lautaro Olmos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
