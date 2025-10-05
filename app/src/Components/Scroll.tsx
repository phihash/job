"use client";
import { useState } from "react";

export default function Scroll() {
  const [isNow, setIsNow] = useState<string>("information");
  return (
    <div className="w-5/6 max-w-screen-sm  mx-auto  h-40 flex overflow-x-scroll gap-4">
      <div
        className={`flex flex-col justify-center items-center gap-1 ${
          isNow === "information" ? "" : ""
        }`}
      >
        <p
          className={`
        text-base font-bold text-white  rounded-full w-6 h-6 flex items-center justify-center
        ${isNow === "information" ? "bg-gray-900" : "bg-gray-500"}
        `}
        >
          1
        </p>
        <p
          className={`" ${
            isNow === "information"
              ? "text-xs font-extrabold"
              : "text-gray-400 text-xs font-bold"
          }
        `}
        >
          基本情報
        </p>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-1 ${
          isNow === "todo" ? "" : ""
        }`}
      >
        <p
          className={`
        text-base font-bold text-white  rounded-full w-6 h-6 flex items-center justify-center
        ${isNow === "todo" ? "bg-gray-900" : "bg-gray-500"}
        `}
        >
          2
        </p>
        <p
          className={`" ${
            isNow === "todo"
              ? "text-xs font-extrabold"
              : "text-gray-400 text-xs font-bold"
          }
        `}
        >
          やること
        </p>
      </div>
    </div>
  );
}
