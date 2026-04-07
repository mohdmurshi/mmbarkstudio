"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function VideoLightbox({
  open,
  onClose,
  youtubeEmbed,
}: {
  open: boolean;
  onClose: () => void;
  youtubeEmbed: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 px-4 py-10">
      <div className="mx-auto flex h-full max-w-6xl flex-col">
        <div className="mb-4 flex justify-end">
          <button
            onClick={onClose}
            className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-white"
          >
            <X size={22} />
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black">
          <iframe
            src={youtubeEmbed}
            title="Featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}