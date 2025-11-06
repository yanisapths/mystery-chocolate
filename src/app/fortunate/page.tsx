"use client";
import { FortuneCard } from "@/src/components/FortuneCard";
import { Button } from "@/src/components/ui/button";

import { Sparkle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
export default function FortunatePage() {
  return (
    <Suspense
      fallback={<p className="text-white text-lg">Loading fortunate...</p>}
    >
      <Content />
    </Suspense>
  );
}

const Content = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [blessing, setBlessing] = useState(() => null);

  useEffect(() => {
    const dataParam = params.get("data");

    if (!dataParam) return;

    Promise.resolve().then(() => {
      try {
        const decodedString = decodeURIComponent(dataParam);

        let parsed;
        try {
          parsed = JSON.parse(decodedString);
        } catch {
          const base64Decoded = atob(dataParam);
          parsed = JSON.parse(base64Decoded);
        }

        if (parsed?.blessing) {
          setBlessing(parsed.blessing);
        }
      } catch (err) {
        console.error("Error decoding shared data:", err);
      }
    });
  }, [params]);

  if (!blessing) return null;
  return (
    <Suspense
      fallback={<p className="text-white text-lg">Loading fortune...</p>}
    >
      <div className="relative h-screen bg-[#F10203] overflow-hidden font-fredoka flex flex-col items-center justify-center px-6 py-12">
        <div
          className="absolute z-10 -top-40 h-[400px] w-full bg-size-[auto_400px]"
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
};
