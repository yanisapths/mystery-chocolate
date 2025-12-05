import {
  Imbue,
  Fredoka,
  Just_Me_Again_Down_Here,
  Jacquarda_Bastarda_9,
} from "next/font/google";

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

const jacquardaBastarda9 = Jacquarda_Bastarda_9({
  variable: "--font-jacquarda-bastarda-9",
  subsets: ["latin"],
  weight: ["400"],
});

export { imbue, fredoka, justMe, jacquardaBastarda9 };
