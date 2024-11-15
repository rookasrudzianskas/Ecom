import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Studio",
  description: "Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}
