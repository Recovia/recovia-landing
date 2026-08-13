"use client";

import { FILES, NAMES, OsKey, RELEASE_BASE, RELEASE_DATE, REPO_URL, VERSION } from "@/lib/config";
import { useDetectedOs } from "@/lib/useDetectedOs";
import { useScrollReveal } from "@/lib/useScrollReveal";

const PLATFORMS: {
  os: OsKey;
  title: string;
  meta: string;
  buttonLabel: string;
}[] = [
  { os: "windows", title: "Windows", meta: "WINDOWS 10 / 11 · X64", buttonLabel: "Download .exe" },
  {
    os: "macos",
    title: "macOS",
    meta: "APPLE SILICON + INTEL · 12+",
    buttonLabel: "Download .dmg",
  },
  { os: "linux", title: "Linux", meta: "APPIMAGE OR .DEB · X64", buttonLabel: "Download AppImage" },
];

export default function Downloads() {
  const detected = useDetectedOs();
  const ref = useScrollReveal(".dl-card");

  return (
    <section id="downloads" ref={ref}>
      <div className="wrap">
        <div style={{ marginBottom: 8 }}>
          <span className="jb hero-eyebrow">DOWNLOAD</span>
          <h2>Get the app for your platform</h2>
        </div>
        <p className="jb downloads-note">
          VERSION {VERSION} · RELEASED {RELEASE_DATE} ·{" "}
          {detected ? `WE THINK YOU'RE ON ${NAMES[detected].toUpperCase()}` : "SELECT YOUR PLATFORM"}
        </p>
        <div className="dl-grid">
          {PLATFORMS.map((p) => {
            const isDetected = detected === p.os;
            return (
              <div className={`dl-card${isDetected ? " detected" : ""}`} key={p.os}>
                {isDetected && <span className="jb detected-chip">DETECTED</span>}
                <h4>{p.title}</h4>
                <div className="jb meta">
                  {p.meta}
                  <br />
                  {FILES[p.os]}
                </div>
                <a
                  className={isDetected ? "btn-stamp" : "btn-out"}
                  href={`${RELEASE_BASE}/${FILES[p.os]}`}
                >
                  {p.buttonLabel}
                </a>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13.5, marginTop: 22 }}>
          Every build is code-signed and checksummed. Verify against{" "}
          <a href={`${REPO_URL}/releases/latest`}>SHA-256 checksums</a>. Source &amp; changelog on{" "}
          <a href={REPO_URL}>GitHub</a>.
        </p>
      </div>
    </section>
  );
}
