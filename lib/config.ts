export const VERSION = "2.4.1";
export const RELEASE_DATE = "2026-07-28";
export const RELEASE_BASE =
  "https://github.com/YOUR_ORG/correspondence-organizer/releases/latest/download";
export const REPO_URL = "https://github.com/YOUR_ORG/correspondence-organizer";
export const BUY_URL = "https://YOUR_STORE.lemonsqueezy.com/checkout";

export type OsKey = "windows" | "macos" | "linux";

export const FILES: Record<OsKey, string> = {
  windows: `Correspondence-${VERSION}-setup.exe`,
  macos: `Correspondence-${VERSION}.dmg`,
  linux: `Correspondence-${VERSION}.AppImage`,
};

export const NAMES: Record<OsKey, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};
