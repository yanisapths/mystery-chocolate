"use client";

import { useState } from "react";

interface FortuneCardProps {
  blessing: string;
}

export function FortuneCard({ blessing }: FortuneCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-8">
      <div
        id="fortune-card"
        className="relative w-full aspect-[3/4] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front - Triangle */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full bg-background flex items-center justify-center p-8">
              <div
                className="relative bg-accent w-64 h-80 flex flex-col items-center justify-center"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              >
                <h2
                  className="text-4xl font-bold text-white text-center px-8"
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

          {/* Back - Diamond */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full bg-background flex items-center justify-center p-8">
              <div
                className="relative bg-muted w-64 h-80 flex items-center justify-center p-12"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              >
                <p
                  className="text-2xl text-white text-center leading-relaxed"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {blessing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
