"use client";

import Image from "next/image";

import { GameState } from "./use-game-state";
import { Button } from "./ui/button";

interface ChocolatePickerProps {
  to: (state: GameState) => void;
}

const ChocolatePicker = ({ to }: ChocolatePickerProps) => {
  const handleChocolateClick = () => {
    to("loading");
  };
  const chocolateImages = [
    "/images/bonbon/1.png",
    "/images/bonbon/2.png",
    "/images/bonbon/3.png",
    "/images/bonbon/4.png",
    "/images/bonbon/5.png",
    "/images/bonbon/6.png",
    "/images/bonbon/7.png",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 overflow-hidden">
      <h2 className="text-2xl font-imbue font-light text-foreground mb-12 tracking-widest">
        [ Tab to select ]
      </h2>

      <div className="space-y-8 w-full max-w-4xl">
        <div className="overflow-hidden">
          <div className="flex gap-2 animate-slide-right">
            {[...chocolateImages, ...chocolateImages, ...chocolateImages].map(
              (img, idx) => (
                <Button
                  key={`row1-${idx}`}
                  onClick={handleChocolateClick}
                  className="flex-shrink-0 w-32 h-32 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt="chocolate"
                    className="w-full h-full object-contain"
                  />
                </Button>
              )
            )}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-2 animate-slide-left">
            {[...chocolateImages, ...chocolateImages, ...chocolateImages].map(
              (img, idx) => (
                <Button
                  key={`row2-${idx}`}
                  onClick={handleChocolateClick}
                  className="flex-shrink-0 w-32 h-32 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="chocolate"
                    className="w-full h-full object-contain"
                  />
                </Button>
              )
            )}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-2 animate-slide-right-slow">
            {[...chocolateImages, ...chocolateImages, ...chocolateImages].map(
              (img, idx) => (
                <Button
                  key={`row3-${idx}`}
                  onClick={handleChocolateClick}
                  className="flex-shrink-0 w-32 h-32 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt="chocolate"
                    className="w-full h-full object-contain"
                  />
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChocolatePicker;
