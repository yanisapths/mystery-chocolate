"use client";
import { FortuneCard } from "@/src/components/FortuneCard";
import { Button } from "@/src/components/ui/button";
import { getRandomBlessing } from "@/src/data/blessings";
import { Sparkle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

export default function FortunatePage({
  searchParams,
}: {
  searchParams: { data?: string };
}) {
  const router = useRouter();

  let blessing: string;

  if (searchParams?.data) {
    try {
      const decoded = JSON.parse(atob(decodeURIComponent(searchParams.data)));
      blessing = decoded.blessing || getRandomBlessing();
    } catch {
      blessing = getRandomBlessing();
    }
  } else {
    blessing = getRandomBlessing();
  }

  return (
    <Suspense
      fallback={<p className="text-white text-lg">Loading fortune...</p>}
    >
      <div className="relative h-screen bg-[#F10203] overflow-hidden font-fredoka flex flex-col items-center justify-center px-6 py-12">
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
        <div className="z-50 flex flex-col items-center">
          <Button
            onClick={() => router.push("/")}
            className="text-[#C7FDA8] text-base hover:opacity-70 underline"
          >
            <Sparkle />
            Get your own fortune
          </Button>
        </div>
      </div>
    </Suspense>
  );
}
