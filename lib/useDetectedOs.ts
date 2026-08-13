"use client";

import { useEffect, useState } from "react";

export type DetectedOs = "windows" | "macos" | "linux" | null;

function detectOs(): DetectedOs {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const raw = (nav.userAgentData?.platform || navigator.platform || "") + " " + (navigator.userAgent || "");
  const p = raw.toLowerCase();
  if (p.indexOf("win") > -1) return "windows";
  if (p.indexOf("mac") > -1 || p.indexOf("iphone") > -1 || p.indexOf("ipad") > -1) return "macos";
  if (p.indexOf("linux") > -1 || p.indexOf("android") > -1) return "linux";
  return null;
}

export function useDetectedOs(): DetectedOs {
  const [os, setOs] = useState<DetectedOs>(null);

  useEffect(() => {
    setOs(detectOs());
  }, []);

  return os;
}
