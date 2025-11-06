import { RotateCcw, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { GameState } from "./use-game-state";
import { useRouter } from "next/navigation";

interface ActionsProps {
  to?: (state: GameState) => void;
  shareUrl: string;
}

export const Actions = ({ to, shareUrl }: ActionsProps) => {
  const router = useRouter();

  const handleRetake = () => {
    sessionStorage.removeItem("selectedChocolate");
    if (to) {
      to("landing");
    } else {
      router.push("/");
    }
  };

  const handleShare = async () => {
    try {
      if (typeof window === "undefined") return;

      await navigator.clipboard.writeText(shareUrl);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Error sharing:", err);
      toast.error("Failed to copy link.");
    }
  };

  // const handleDownload = () => {
  //   const element = document.getElementById(imageKey);
  //   if (!element) {
  //     return;
  //   }

  //   domtoimage
  //     .toPng(element)
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.href = dataUrl;
  //       link.download = `${imageKey}.png`;
  //       link.click();
  //     })
  //     .catch((error) => {
  //       console.log("Error downloading:", error);
  //       toast.error("Failed to download image.");
  //     });
  // };

  return (
    <div className="flex items-center justify-between">
      <Button
        onClick={handleRetake}
        className="text-white/60 text-sm underline hover:opacity-70 transition-opacity inline-flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Retake
      </Button>
      <Button
        onClick={handleShare}
        className="text-white/60 text-sm underline hover:opacity-70 transition-opacity inline-flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>
      {/* {isDownloadable ? (
        <Button
          onClick={handleDownload}
          className="text-white/60 text-sm underline hover:opacity-70 transition-opacity inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Save
        </Button>
      ) : null} */}
    </div>
  );
};
