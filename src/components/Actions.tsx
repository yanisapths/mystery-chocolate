import { Download, RotateCcw, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { GameState } from "./use-game-state";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";

interface ActionsProps {
  to?: (state: GameState) => void;
  shareUrl: string;
  elName?: string;
}

export const Actions = ({ to, shareUrl, elName }: ActionsProps) => {
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

  const capture = async () => {
    if (elName) {
      const element = document.getElementById(elName);
      if (!element) return;

      const canvas = await html2canvas(element, {
        useCORS: true,
      });

      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${elName}.png`;
      link.click();
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Button
        onClick={handleRetake}
        className="text-[rgba(255,255,255,0.6)] text-sm underline hover:opacity-70 inline-flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Retake
      </Button>
      <Button
        onClick={handleShare}
        className="text-[rgba(255,255,255,0.6)] text-sm underline hover:opacity-70 inline-flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>
      {elName && (
        <Button
          onClick={capture}
          className="text-[rgba(255,255,255,0.6)] text-sm underline hover:opacity-70 inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Save
        </Button>
      )}
    </div>
  );
};
