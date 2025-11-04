"use client";
import { FortuneCard } from "@/src/components/FortuneCard";
import { getRandomBlessing } from "@/src/data/blessings";
import { Suspense } from "react";

export default function FortunatePage({
  searchParams,
}: {
  searchParams: { data?: string };
}) {
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
    <div className="min-h-screen bg-[#F10203] flex flex-col items-center justify-center px-6 py-12">
      <Suspense
        fallback={<p className="text-white text-lg">Loading fortune...</p>}
      >
        <FortuneCard blessing={blessing} />
      </Suspense>
    </div>
  );
}
