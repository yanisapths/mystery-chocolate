"use client";
import { useState } from "react";
import { getRandomChocolate, type Chocolate } from "../data/chocolates";
import { type GameState } from "./use-game-state";
import { Button } from "./ui/button";
import Image from "next/image";
import { Actions } from "./Actions";
import { ChocolateCard } from "./ChocolateCard";

interface RevealProps {
  to: (state: GameState) => void;
}
const Reveal = ({ to }: RevealProps) => {
  const [chocolate] = useState<Chocolate>(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("selectedChocolate");
      if (stored) {
        return JSON.parse(stored);
      }
      const newChocolate = getRandomChocolate();
      sessionStorage.setItem("selectedChocolate", JSON.stringify(newChocolate));
      return newChocolate;
    }

    return getRandomChocolate();
  });

  const encoded = encodeURIComponent(JSON.stringify({ chocolate }));
  const shareUrl = `${window.location.origin}/chocolate?data=${encoded}`;

  return (
    <div
      id="mystery-chocolate"
      className="relative overflow-hidden h-screen bg-[#F10203] font-fredoka flex flex-col items-center justify-center py-12"
    >
      <div className="absolute top-16 md:-left-[20%] md:top-[6%] min-w-[800px] md:min-w-screen mx-16 rotate-[-21deg] md:-rotate-10 h-6 bg-white" />
      <div className="absolute top-20 md:top-[8%] min-w-[800px] mx-16 md:min-w-screen rotate-[8deg] md:rotate-1 h-6 bg-[#BC0D0D]" />{" "}
      <Image
        src="/images/lace-bow.png"
        width={250}
        height={200}
        alt="/images/lace-bow.png"
        className="absolute z-30 top-4 left-2 md:left-[20%] md:top-[-1%]"
      />
      <ChocolateCard chocolate={chocolate} />
      <div className="z-50 flex flex-col items-center">
        <Button
          onClick={() => to("fortune")}
          className="text-[#C7FDA8] text-base hover:opacity-70"
        >
          Get fortune blessings →
        </Button>

        <Actions to={to} shareUrl={shareUrl} />
      </div>
      <div className="absolute -right-[40%] bottom-8 min-w-screen -rotate-45 h-6 bg-white" />
      <div className="absolute -left-[40%] bottom-16 min-w-screen  rotate-55 h-6 bg-[#BC0D0D]" />
    </div>
  );
};

export default Reveal;
