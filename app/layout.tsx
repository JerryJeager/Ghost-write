import type { Metadata } from "next";
import {  Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const comfortaa =Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghost Write",
  description: "Send out anonymous messages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
