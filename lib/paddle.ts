// Client-side Paddle.js (v2) helpers for the overlay checkout.
// The <Script> tag that loads paddle.js and calls initPaddle() lives in a
// client component (see components/PaddleScript.tsx), mounted from the root
// layout. openCheckout() is called from the Pricing "Buy a license" button.

import { PADDLE_CLIENT_TOKEN, PADDLE_ENV, PADDLE_PRICE_ID } from "@/lib/config";

interface PaddleCheckoutItem {
  priceId: string;
  quantity: number;
}

interface Paddle {
  Environment: { set: (env: "sandbox" | "production") => void };
  Initialize: (opts: { token: string }) => void;
  Checkout: { open: (opts: { items: PaddleCheckoutItem[] }) => void };
}

declare global {
  interface Window {
    Paddle?: Paddle;
  }
}

/** Configure Paddle once paddle.js has loaded. Safe to call more than once. */
export function initPaddle(): void {
  if (typeof window === "undefined" || !window.Paddle) return;
  // Default environment is production; only flip for sandbox.
  if (PADDLE_ENV === "sandbox") window.Paddle.Environment.set("sandbox");
  window.Paddle.Initialize({ token: PADDLE_CLIENT_TOKEN });
}

/** Open the overlay checkout for the one-time license price. */
export function openCheckout(): void {
  if (typeof window === "undefined" || !window.Paddle) {
    console.warn("Paddle.js is not ready yet");
    return;
  }
  window.Paddle.Checkout.open({
    items: [{ priceId: PADDLE_PRICE_ID, quantity: 1 }],
  });
}
