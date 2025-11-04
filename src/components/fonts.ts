import { Imbue, Fredoka } from "next/font/google";

const imbue = Imbue({
  variable: "--font-imbue",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export { imbue, fredoka };
