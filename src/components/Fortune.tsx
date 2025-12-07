"use client";
import { useState } from "react";

import { getRandomBlessing } from "../data/blessings";

import Image from "next/image";
import { type GameState } from "./use-game-state";
import { Button } from "./ui/button";
import { Actions } from "./Actions";
import { FortuneCard } from "./FortuneCard";
import { Credit } from "./Credit";

interface FortuneProps {
  to: (state: GameState) => void;
}

const Fortune = ({ to }: FortuneProps) => {
  const [blessing, setBlessing] = useState(() => getRandomBlessing());

  const encoded = encodeURIComponent(JSON.stringify({ blessing }));
  const shareUrl = `${window.location.origin}/fortunate?data=${encoded}`;
  const getNewFortune = () => {
    setBlessing(getRandomBlessing());
  };

  return (
    <div
      id="fortune-card"
      className="relative h-screen bg-[#F10203] overflow-hidden font-fredoka flex flex-col items-center justify-center px-6 py-12"
    >
      <div
        className="absolute z-10 -top-32 h-[400px] w-full bg-size-[auto_400px]"
        style={{
          backgroundImage: "url('/images/lace-tag.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top",
        }}
      />

      <Image
        fill
        src="/images/snow-bg.png"
        alt="bg"
        className="z-5 object-cover"
      />

      <FortuneCard blessing={blessing} />

      <div className="z-50 flex flex-col items-center -mt-12">
        <Button
          onClick={() => {
            if (typeof window !== "undefined") {
              const stored = sessionStorage.getItem("selectedChocolate");
              if (stored) {
                to("reveal");
              } else {
                to("picking");
              }
            }
          }}
          className="text-[#C7FDA8] text-base hover:opacity-70"
        >
          ← Back to your chocolate
        </Button>

        <Actions
          to={to}
          shareUrl={shareUrl}
          newFortune
          onNewFortune={getNewFortune}
        />
        <Credit />
      </div>
    </div>
  );
};

export default Fortune;
