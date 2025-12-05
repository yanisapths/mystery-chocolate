import Link from "next/link";
import { Button } from "./ui/button";
import { GameState } from "./use-game-state";

export const Credit = () => {
  return (
    <div className="absolute z-50 bottom-4 w-full m-auto flex flex-col justify-center items-center">
      <p className="text-[#D9BCFF] font-jacquarda-bastarda-9">
        made with ♡ by{" "}
        <a href="https://yanisapoongthaisong.vercel.app" target="_blank">
          <span className="hover:text-[#ceabfd]">yanisa p.</span>
        </a>
      </p>
    </div>
  );
};

export const MiniCredit = ({ to }: { to: (state: GameState) => void }) => {
  return (
    <div className="absolute z-50 w-full m-auto p-2">
      <div className="flex justify-between">
        {" "}
        <div>
          <p className="text-[#D9BCFF] font-jacquarda-bastarda-9">
            <Button
              onClick={() => {
                to("landing");
              }}
            >
              <span className="hover:text-[#ceabfd]">Home</span>
            </Button>
          </p>
        </div>
        <div>
          {" "}
          <p className="text-[#D9BCFF] font-jacquarda-bastarda-9">
            <Link
              href="https://silk-account-99d.notion.site/2b61cd76c76e8101b02bd8de4197869d?pvs=105"
              target="_blank"
            >
              <span className="hover:text-[#ceabfd]">Feedback</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
