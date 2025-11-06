"use client";
import { useEffect, useState } from "react";

import { getRandomBlessing } from "../data/blessings";
import { Share2, Download } from "lucide-react";
import Image from "next/image";
import html2canvas from "html2canvas";
import { type GameState } from "./use-game-state";
import { Button } from "./ui/button";
import { toast } from "sonner";

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
      toast.success("Copied to clipboard!");
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
      toast.error("Failed to download image.");
    }
  };

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

      <div className="z-50 min-h-[80vh] m-auto flex flex-col items-center justify-center w-full max-w-sm">
        <div
          className="relative w-full cursor-pointer perspective-1000 animate-sway"
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
                    src="/images/back-card-1.png"
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
