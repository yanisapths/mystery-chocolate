"use client";
import { useState } from "react";

import Image from "next/image";
import { FortuneCard } from "@/src/components/FortuneCard";

import { getRandomBlessing } from "@/src/data/blessings";

import { Header } from "@/src/components/Header";

const Fortune = () => {
  const [blessing] = useState(() => getRandomBlessing());

  return (
    <div className="relative">
      <Header />
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
      </div>
    </div>
  );
};

export default Fortune;
