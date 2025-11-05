"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { type GameState } from "./use-game-state";

interface LandingProps {
  to: (state: GameState) => void;
}
const Landing = ({ to }: LandingProps) => {
  return (
    <div className="relative min-h-screen font-imbue bg-background flex flex-col items-center justify-center px-6">
      <Image
        fill
        src="/images/snow-bg.png"
        alt="bg"
        className="z-5 object-cover"
      />
      {ornaments()}

      <div className="z-20 text-center space-y-12 max-w-md">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-wider uppercase">
          Mystery
          <br />
          Chocolate
        </h1>

        <Button
          onClick={() => {
            sessionStorage.removeItem("selectedChocolate");
            to("picking");
          }}
          className="bg-[#448E51] text-[#C7FDA8] text-xl px-8 py-6 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Get your chocolate
        </Button>
      </div>
    </div>
  );

  function ornaments() {
    return (
      <div>
        <Image
          src="/images/ornaments/tree.png"
          alt="tree"
          width={100}
          height={100}
          className="w-16 h-20 md:w-20 md:h-24 absolute top-8 left-8 animate-float opacity-60"
          style={{ animationDelay: "0s" }}
        />
        <Image
          src="/images/ornaments/gift.png"
          alt="gift"
          width={100}
          height={100}
          className="w-16 h-16 md:w-20 md:h-20 absolute top-12 right-12 animate-float opacity-60"
          style={{ animationDelay: "0.5s" }}
        />
        <Image
          src="/images/ornaments/ornament.png"
          alt="ornament"
          width={100}
          height={100}
          className="w-16 h-16 md:w-20 md:h-20 absolute bottom-20 left-12 animate-float opacity-60"
          style={{ animationDelay: "1s" }}
        />
        <Image
          src="/images/ornaments/snowman.png"
          alt="snowman"
          width={100}
          height={100}
          className="w-16 h-16 md:w-20 md:h-20 absolute bottom-12 right-8 animate-float opacity-60"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    );
  }
};

export default Landing;
