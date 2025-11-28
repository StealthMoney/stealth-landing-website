"use client";
import { useState } from "react";

export default function VideoPlayer({ videoSrc }: { videoSrc: string }) {
  const [open, setOpen] = useState(false);

  const getVideoId = (ytUrl: string) => {
    const match = ytUrl.match(/(?:v=|youtu\.be\/|embed\/)([^&?\s]+)/);
    return match ? match[1] : "";
  };

  const videoId = getVideoId(videoSrc);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="w-full h-[300px] md:h-[400px] bg-black/40 rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden group"
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none group-hover:opacity-70 transition object-cover"
          title="product-preview"
        ></iframe>

        <button className="bg-white/20 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center border border-white/40 text-3xl group-hover:scale-110 transition">
          ▶
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay"
              className="w-full h-full rounded-lg shadow-xl"
              title="preview-video"
            ></iframe>

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
