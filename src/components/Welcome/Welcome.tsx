"use client";

import { useEffect, useState } from "react";
import addOrdinalSuffix from "@/components/Welcome/addOrdinalSuffix";
import fadeInAnimation from "@/app/styles/fadeInAnimation";

import Button from "../Button/Button";

interface WelcomeProps {
  firstName?: string;
}

export default function Welcome({ firstName = "World" }: WelcomeProps) {
  const [isRevealed, setisRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisRevealed(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  const date = new Date();
  const dayWithSuffix = addOrdinalSuffix(date.getDate());

  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  const currentDate = `${weekday}, ${month} ${dayWithSuffix}, ${year}`;

  return (
    <div className="flex flex-col text-center py-12 md:gap-2.5 gap-4 lg:py-16">
      <p
        className={
          fadeInAnimation({ isRevealed, delay: 0 }) + " text-t3 text-blue-600"
        }
      >
        Hello, {firstName}!
      </p>

      <h1
        className={
          fadeInAnimation({ isRevealed, delay: 1 }) +
          " text-t1 text-neutral-900"
        }
      >
        How are you feeling today?
      </h1>

      <p
        className={
          fadeInAnimation({ isRevealed, delay: 2 }) +
          " text-t6 text-neutral-600"
        }
      >
        {currentDate}
      </p>
      <Button
        className={"mx-auto block" + fadeInAnimation({ isRevealed, delay: 0 })}
        onClick={() => console.log("clicked")}
      >
        Log today&#39;s mood
      </Button>
    </div>
  );
}
