import { Imbue, Fredoka, Just_Me_Again_Down_Here } from "next/font/google";

const imbue = Imbue({
  variable: "--font-imbue",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const justMe = Just_Me_Again_Down_Here({
  variable: "--font-just-me",
  subsets: ["latin"],
  weight: ["400"],
});

export { imbue, fredoka, justMe };
