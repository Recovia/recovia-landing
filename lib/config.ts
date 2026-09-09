export const VERSION = "2.4.1";
export const RELEASE_DATE = "2026-07-28";
export const RELEASE_BASE =
  "https://github.com/YOUR_ORG/recovia/releases/latest/download";
export const REPO_URL = "https://github.com/YOUR_ORG/recovia";

// Paddle.js overlay checkout. These values are public (client-side) by design.
// Override per-environment with NEXT_PUBLIC_* env vars; placeholders let the
// site build without a live Paddle account.
export const PADDLE_ENV =
  (process.env.NEXT_PUBLIC_PADDLE_ENV as "sandbox" | "production") ?? "sandbox";
export const PADDLE_CLIENT_TOKEN =
  process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? "test_REPLACE_WITH_CLIENT_TOKEN";
export const PADDLE_PRICE_ID =
  process.env.NEXT_PUBLIC_PADDLE_PRICE_ID ?? "pri_REPLACE_WITH_PRICE_ID";

export type OsKey = "windows" | "macos" | "linux";

export const FILES: Record<OsKey, string> = {
  windows: `Recovia-${VERSION}-setup.exe`,
  macos: `Recovia-${VERSION}.dmg`,
  linux: `Recovia-${VERSION}.AppImage`,
};

export const NAMES: Record<OsKey, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};
