"use client";
import { Welcome, Button } from "@/components";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Welcome />
      <Button className="mx-auto block" onClick={() => console.log("clicked")}>
        Log today&#39;s mood
      </Button>
    </div>
  );
}
