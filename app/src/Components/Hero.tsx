"use client";
import Image from "next/image";
import heroImage from "@/public/hero.png";

export default function Hero() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-sm mx-auto mx-auto md:flex items-center justify-center gap-6 ">
        <Image
          className="block mx-auto py-4"
          src={heroImage}
          alt="Hero"
          priority
        />
      </div>
    </div>
  );
}
