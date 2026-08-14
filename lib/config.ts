export const VERSION = "2.4.1";
export const RELEASE_DATE = "2026-07-28";
export const RELEASE_BASE =
  "https://github.com/YOUR_ORG/recovia/releases/latest/download";
export const REPO_URL = "https://github.com/YOUR_ORG/recovia";
export const BUY_URL = "https://YOUR_STORE.lemonsqueezy.com/checkout";

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
