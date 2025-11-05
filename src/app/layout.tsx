import type { Metadata } from "next";
import "./globals.css";
import { fredoka, imbue, justMe } from "../components/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mystery Chocolate",
  description: "Get your chocolate personalities with lots of fortune.",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
