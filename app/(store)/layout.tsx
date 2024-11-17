import type { Metadata } from "next";
import "../globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/Header";
import {SanityLive} from "@/sanity/lib/live";
export const metadata: Metadata = {
  title: "Stored Properties",
  description: "Stored Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic={true}>
      <html lang="en">
      <body
        className={``}
      >
        <main>
          <Header />
          {children}
        </main>
      <SanityLive />
      </body>
      </html>
    </ClerkProvider>
  );
}
