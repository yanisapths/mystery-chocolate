import React from "react";
export interface ChocolateReveal {
  name: string;
  tasteNote: string;
  personality: string;
}

interface ChocolateRevealProps {
  chocolate: ChocolateReveal;
}

export const ChocolateCard = ({ chocolate }: ChocolateRevealProps) => {
  return (
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
  );
};
