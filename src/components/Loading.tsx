"use client";
import { useEffect } from "react";
import Image from "next/image";
import { getRandomChocolate } from "../data/chocolates";
import { type GameState } from "./use-game-state";

interface LoadingProps {
  to: (state: GameState) => void;
}

const Loading = ({ to }: LoadingProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomChocolate = getRandomChocolate();
      sessionStorage.setItem(
        "selectedChocolate",
        JSON.stringify(randomChocolate)
      );
      to("reveal");
    }, 3000);

    return () => clearTimeout(timer);
  }, [to]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8 relative overflow-hidden">
      <Image
        src="/images/ornaments/tree.png"
        alt="tree"
        width={100}
        height={100}
        className="w-16 h-16 md:w-20 md:h-20 absolute top-8 left-8 animate-float opacity-60"
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

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-shimmer-sparkle z-20">
        {" "}
        <Image
          src="/images/silver-stars.png"
          alt="gift sparkle"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 animate-shimmer-sparkle"
        />
      </div>
      <div className="text-center space-y-8 max-w-md z-10">
        <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed animate-fade-in">
          Life is like a box
          <br />
          of chocolate
          <br />
          .....
          <br />
          you never know
          <br />
          what you&#39;re gonna get
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer-sparkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-shimmer-sparkle { animation: shimmer-sparkle 1.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Loading;
