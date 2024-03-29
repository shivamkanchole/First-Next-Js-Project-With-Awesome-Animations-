"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

function PlaySection() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "mt-2 text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
        )}
      >
        Play With Yourself
      </h1>
    </div>
  );
}

export default PlaySection;
