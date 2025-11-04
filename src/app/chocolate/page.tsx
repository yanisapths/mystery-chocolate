"use client";
import { getRandomChocolate } from "@/src/data/chocolates";
import { Suspense } from "react";

export default function ChocolatePage({
  searchParams,
}: {
  searchParams?: { data?: string };
}) {
  let chocolate;

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
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <Suspense
        fallback={<p className="text-white text-lg">Loading chocolate...</p>}
      >
        <div className="text-center space-y-8 max-w-md w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            {chocolate.name}
          </h1>

          <div className="space-y-4 text-foreground">
            <p className="text-sm uppercase tracking-widest font-light">
              Tastenote: {chocolate.tasteNote}
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-light px-4">
              {chocolate.personality}
            </p>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
