import type { Metadata } from "next";
import "../globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/Header";
import {SanityLive} from "@/sanity/lib/live";
import {draftMode} from "next/headers";
import {VisualEditing} from "next-sanity";
import DisabledDraftMode from "@/components/disable-draft-mode";
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
      {(await draftMode()).isEnabled && (
        <>
          <DisabledDraftMode />
          <VisualEditing />
        </>
      )}
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
