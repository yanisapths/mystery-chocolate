"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="absolute z-50 w-full m-auto p-2">
      <div className="flex justify-between">
        {" "}
        <div>
          <p className="text-[#D9BCFF] font-jacquarda-bastarda-9">
            <Button
              onClick={() => {
                router.push("/");
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
