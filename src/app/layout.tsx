import type { Metadata } from "next";
import "./globals.css";
import { fredoka, imbue, justMe } from "../components/fonts";
import { Providers } from "./providers";
import { Toaster } from "../components/ui/sonner";

export const metadata: Metadata = {
  title: "Mystery Chocolate",
  description: "Get your chocolate personalities with lots of fortune.",
  openGraph: {
    type: "website",
    url: "https://mystery-chocolate.vercel.app/",
    title: "Mystery Chocolate",
    description:
      "Mystery chocolate comes with personalities and get lots of blessings everyday!",
    siteName: "Mystery Chocolate",
    images: [{ url: "https://mystery-chocolate.vercel.app/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${imbue.variable} ${justMe.variable} antialiased`}
      >
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
