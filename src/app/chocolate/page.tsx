"use client";
import { ChocolateCard, ChocolateReveal } from "@/src/components/ChocolateCard";
import { Button } from "@/src/components/ui/button";
import { getRandomChocolate } from "@/src/data/chocolates";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
export default function ChocolatePage({
  searchParams,
}: {
  searchParams?: { data?: string };
}) {
  const router = useRouter();
  let chocolate: ChocolateReveal;

  if (searchParams?.data) {
    try {
      chocolate = JSON.parse(decodeURIComponent(searchParams.data)).chocolate;
    } catch {
      chocolate = getRandomChocolate();
    }
  } else {
    chocolate = getRandomChocolate();
  }

  return (
    <Suspense
      fallback={<p className="text-white text-lg">Loading chocolate...</p>}
    >
      <div
        id="mystery-chocolate"
        className="relative overflow-hidden h-screen bg-[#F10203] font-fredoka flex flex-col items-center justify-center py-12"
      >
        <div className="absolute top-16 md:-left-[20%] md:top-[6%] min-w-[800px] md:min-w-screen mx-16 rotate-[-21deg] md:-rotate-10 h-6 bg-white" />
        <div className="absolute top-20 md:top-[8%] min-w-[800px] mx-16 md:min-w-screen rotate-[8deg] md:rotate-1 h-6 bg-[#BC0D0D]" />{" "}
        <Image
          src="/images/lace-bow.png"
          width={250}
          height={200}
          alt="/images/lace-bow.png"
          className="absolute z-30 top-4 left-2 md:left-[20%] md:top-[-1%]"
        />
        <ChocolateCard chocolate={chocolate} />
        <div className="z-50 flex flex-col items-center">
          <Button
            onClick={() => router.push("/")}
            className="text-[#C7FDA8] text-base hover:opacity-70 underline"
          >
            <Sparkle />
            Get your own choco
          </Button>
        </div>
        <div className="absolute -right-[40%] bottom-8 min-w-screen -rotate-45 h-6 bg-white" />
        <div className="absolute -left-[40%] bottom-16 min-w-screen  rotate-55 h-6 bg-[#BC0D0D]" />
      </div>
    </Suspense>
  );
}
