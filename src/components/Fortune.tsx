"use client";
import { useState } from "react";

import { getRandomBlessing } from "../data/blessings";
import { Share2, Download } from "lucide-react";
import Image from "next/image";
import html2canvas from "html2canvas";
import { type GameState } from "./use-game-state";
import { Button } from "./ui/button";

interface FortuneProps {
  to: (state: GameState) => void;
}

const Fortune = ({ to }: FortuneProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [blessing] = useState(() => getRandomBlessing());

  const handleShare = async () => {
    const encoded = encodeURIComponent(btoa(JSON.stringify({ blessing })));
    const shareUrl = `${window.location.origin}/fortunate?data=${encoded}`;

    const shareData = {
      title: "Fortune Blessing",
      text: blessing,
      url: shareUrl,
    };

    try {
      await navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("fortune-card");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#E94836",
        scale: 2,
      });

      const link = document.createElement("a");
      link.download = "fortune-blessing.png";
      link.href = canvas.toDataURL();
      link.click();
    } catch (err) {
      console.log("Error downloading:", err);
    }
  };

  return (
    <div className="relative h-screen bg-background overflow-hidden font-fredoka flex flex-col items-center justify-center px-6 py-12">
      <Image
        src="/images/lace-tag.png"
        width={200}
        height={200}
        alt="lace"
        className="absolute -top-24 sm:-top-[95%] w-full object-contain"
      />
      <Image
        fill
        src="/images/snow-bg.png"
        alt="bg"
        className="z-5 object-cover"
      />

      <div className="z-50 min-h-[80vh] m-auto flex flex-col items-center justify-center w-full max-w-sm">
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
      <div className="z-50 flex flex-col items-center">
        <div className="pt-8">
          <Button
            onClick={() => to("reveal")}
            className="text-[#C7FDA8] text-base hover:opacity-70"
          >
            ← Back to your chocolate
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={handleShare}
            className="text-white/60 text-sm underline hover:opacity-70 transition-opacity inline-flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            share this fortune
          </Button>
          <Button
            onClick={handleDownload}
            className="text-white/60 text-sm underline hover:opacity-70 transition-opacity inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fortune;
