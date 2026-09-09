"use client";

import Script from "next/script";
import { initPaddle } from "@/lib/paddle";

// Loads Paddle.js and initializes it once ready. Mounted once from the root
// layout so the overlay checkout is available anywhere (e.g. the Pricing CTA).
export default function PaddleScript() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/v2/paddle.js"
      strategy="afterInteractive"
      onLoad={initPaddle}
    />
  );
}
