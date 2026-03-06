"use client";
import { useEffect, useState } from "react";
import { Welcome, Card, AverageMood } from "@/components";
import { twMerge } from "tailwind-merge";
import fadeInAnimation from "./styles/fadeInAnimation";

export default function Home() {
  const [isRevealed, setisRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisRevealed(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden h-screen w-screen max-w-[1170px] lg:mx-auto">
      <Welcome />
      <div
        className={twMerge(
          "flex flex-wrap flex-col lg:flex-row gap-8 mx-8",
          fadeInAnimation({ isRevealed, delay: 2 })
        )}
      >
        <Card className="lg:w-[calc(33.333%-32px)]">
          <h2 className="text-t5 text-neutral-900">
            Average Mood{" "}
            <span className="text-t7 text-neutral-600">(Last 5 Check-ins)</span>
          </h2>
          <AverageMood />
          <h2 className="text-t5 text-neutral-900">
            Average Sleep{" "}
            <span className="text-t7 text-neutral-600">(Last 5 Check-ins)</span>
          </h2>
        </Card>
        <Card className="lg:w-[calc(66.667%-32px)] p-8">
          <h2 className="text-t3">Mood and sleep trends</h2>
        </Card>
      </div>
    </div>
  );
}
