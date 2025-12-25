import Link from "next/link";
import { Button } from "./ui/button";
import { GameState } from "./use-game-state";
import { useRouter } from "next/navigation";
import Image from "next/image";
export const Credit = () => {
  return (
    <div className="mt-2 h-full w-full m-auto flex flex-col justify-center items-center">
      <p className="font-[8px] text-[#D9BCFF] font-jacquarda-bastarda-9">
        made with ♡ by{" "}
        <a href="https://yanisapoongthaisong.vercel.app" target="_blank">
          <span className="hover:text-[#ceabfd]">yanisa p.</span>
        </a>
      </p>
    </div>
  );
};

export const MiniCredit = ({ to }: { to: (state: GameState) => void }) => {
  const router = useRouter();
  return (
    <div className="absolute z-50 w-full m-auto p-2">
      <div className="flex justify-between">
        {" "}
        <div>
          <Button
            onClick={() => {
              to("landing");
            }}
          >
            <span className="font-jacquarda-bastarda-9 text-[#D9BCFF] hover:text-[#ceabfd]">
              Home
            </span>
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href="https://silk-account-99d.notion.site/2b61cd76c76e8101b02bd8de4197869d?pvs=105"
            target="_blank"
          >
            <span className="text-[#D9BCFF] font-jacquarda-bastarda-9 hover:text-[#ceabfd]">
              Feedback
            </span>
          </Link>
          <Link
            href="https://www.nightwingdigital.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button asChild>
              <Image
                src="/images/nightwinglogo.png"
                width={50}
                height={100}
                alt="nightwing"
                className="w-full h-auto object-cover"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
