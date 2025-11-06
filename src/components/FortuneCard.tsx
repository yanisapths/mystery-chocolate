"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface FortuneCardProps {
  blessing: string;
}

export function FortuneCard({ blessing }: FortuneCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      const shouldFlip = Math.random() > 0.3;
      if (shouldFlip) {
        setIsFlipped((prev) => !prev);
      }
    }, Math.random() * 1000 + 2000);

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className="z-50 min-h-[80vh] m-auto flex flex-col items-center justify-center w-full max-w-sm">
      <div
        className="relative w-full cursor-pointer perspective-1000 animate-sway md:mt-10"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full flex items-center justify-center py-8">
              <div className="flex items-center justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/front-card.png"
                  alt="front-card"
                  className="z-20 object-cover"
                />
                <h2
                  className="absolute z-50 text-6xl sm:text-7xl font-bold text-[#FFB2F2] text-center"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Merry
                  <br />
                  Christmas
                  <br />&<br />
                  Happy
                  <br />
                  New year
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full flex items-center justify-center py-8">
              <div className="flex items-center justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/back-card.png"
                  alt="back-card"
                  className="z-20 object-cover"
                />

                <div className="absolute z-50">
                  <div className="sm:mx-16 mx-8">
                    <p className="text-4xl sm:text-5xl text-white text-center font-just-me">
                      {blessing}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
