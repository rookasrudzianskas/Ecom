import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import DisabledDraftMode from "@/components/disable-draft-mode";

export const metadata: Metadata = {
  title: "Stored Properties",
  description: "Stored Properties",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {isEnabled && (
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
