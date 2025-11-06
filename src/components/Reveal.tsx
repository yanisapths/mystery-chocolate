"use client";
import { useState } from "react";
import { getRandomChocolate, type Chocolate } from "../data/chocolates";
import { Download, Share2 } from "lucide-react";
import { type GameState } from "./use-game-state";
import { Button } from "./ui/button";
import Image from "next/image";
import html2canvas from "html2canvas";
import { toast } from "sonner";

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

  const handleShare = async () => {
    if (!chocolate) {
      alert("No chocolate to share yet!");
      return;
    }

    try {
      if (typeof window === "undefined") return;

      const encoded = encodeURIComponent(JSON.stringify({ chocolate }));
      const shareUrl = `${window.location.origin}/chocolate?data=${encoded}`;

      await navigator.clipboard.writeText(shareUrl);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Error sharing chocolate:", err);
      toast.error("Failed to copy chocolate link.");
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("mystery-chocolate");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#F10203",
        scale: 2,
      });

      const link = document.createElement("a");
      link.download = "mystery-chocolate.png";
      link.href = canvas.toDataURL();
      link.click();
    } catch (err) {
      console.log("Error downloading:", err);
      toast.error("Failed to download image.");
    }
  };

  return (
    <div
      id="mystery-chocolate"
      className="relative overflow-hidden h-screen bg-[#F10203] font-fredoka flex flex-col items-center justify-center py-12"
    >
      <div className="absolute top-16 md:-left-[20%] md:top-[6%] min-w-[800px] md:min-w-screen mx-16 rotate-[-21deg] md:-rotate-10 h-6 bg-white" />
      <div className="absolute top-20 md:top-[8%] min-w-[800px] mx-16 md:min-w-screen rotate-[8deg] md:rotate-1 h-6 bg-[#BC0D0D]" />
      <Image
        src="/images/lace-bow.png"
        width={200}
        height={200}
        alt="bow"
        className="absolute z-30 top-4 left-2 md:left-[20%] md:top-[-1%]"
      />
      <div className="m-auto flex flex-col justify-center items-center z-50 px-6 text-center max-w-md w-full">
        <div className="text-center space-y-8 max-w-md w-full">
          <h1 className="text-6xl font-imbue md:text-7xl font-bold text-[#740000]">
            {chocolate.name}
          </h1>

          <div className="space-y-3 text-white">
            <p className="text-sm">Tastenote: {chocolate.tasteNote}</p>

            <p className="text-xl md:text-2xl px-4">{chocolate.personality}</p>
          </div>
        </div>
      </div>
      <div className="z-50 flex flex-col items-center">
        <Button
          onClick={() => to("fortune")}
          className="text-[#C7FDA8] text-base hover:opacity-70"
        >
          Get fortune blessings →
        </Button>

        <div className="flex items-center justify-between">
          <Button
            onClick={handleShare}
            className="text-white/60 text-sm underline hover:opacity-70 transition-opacity inline-flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            share your chocolate
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
      <div className="absolute -right-[40%] bottom-8 min-w-screen -rotate-45 h-6 bg-white" />
      <div className="absolute -left-[40%] bottom-16 min-w-screen  rotate-55 h-6 bg-[#BC0D0D]" />
    </div>
  );
};

export default Reveal;
