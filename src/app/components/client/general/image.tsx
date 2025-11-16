"use client";
import { useState } from "react";
import Image from "next/image";

interface SmoothImageProps {
  blurSrc: string;
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

export default function LazyImage({
  blurSrc,
  src,
  alt,
  className = "",
  width,
  height,
}: SmoothImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Blurry Image Placeholder */}
      <Image
        placeholder="blur"
        blurDataURL={blurSrc}
        src={blurSrc}
        alt={alt}
        width={width}
        height={height}
        className={`
          w-full h-auto rounded-lg 
          transition-opacity duration-700 ease-out
          ${loaded ? "opacity-0" : "opacity-100"}
          blur-md scale-[1.02]
        `}
      />

      {/* Final High-Quality Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={`
          absolute inset-0 w-full h-auto rounded-lg 
          transition-all duration-[900ms] ease-out
          ${
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-sm scale-[1.03]"
          }
        `}
      />
    </div>
  );
}
