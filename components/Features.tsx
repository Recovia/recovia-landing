"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const FEATURES = [
  {
    title: "Accurate threading",
    desc: "Reconstructs conversations from In-Reply-To / References headers, with a conservative subject fallback. No silent mis-threading.",
    icon: <path d="M4 7h16M7 12h13M10 17h10M4 12h.01M4 17h.01" />,
  },
  {
    title: "Smart de-duplication",
    desc: "Collapses duplicates by Message-ID or content hash and keeps every source path, with an audit report of each merge.",
    icon: (
      <>
        <path d="M8 8h11v11H8z" />
        <path d="M5 16V5h11" />
      </>
    ),
  },
  {
    title: "Timezone-correct order",
    desc: "Normalizes every timestamp to UTC while keeping the original zone, so cross-timezone chains sort correctly. Undated messages are flagged, never dropped.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Tagging & Reference IDs",
    desc: "Tag from a template taxonomy and auto-number exhibits (EX-0001), sequential, but overridable when you need it.",
    icon: (
      <>
        <path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h7" />
        <path d="M15 3l6 6-8 2 2-8z" />
      </>
    ),
  },
  {
    title: "Index + bookmarked PDF",
    desc: "Export a spreadsheet index and a single PDF bundle bookmarked per Reference ID with optional page numbers.",
    icon: (
      <>
        <path d="M6 2h9l5 5v15H6z" />
        <path d="M14 2v6h6" />
        <path d="M9 14h6M9 17h6" />
      </>
    ),
  },
  {
    title: "Private by design",
    desc: "All parsing runs on-device. No message content is ever sent to a server: no cloud, no third-party APIs, no telemetry on your data.",
    icon: <path d="M12 2l9 4v6c0 5-3.8 9.4-9 11-5.2-1.6-9-6-9-11V6l9-4z" />,
  },
];

export default function Features() {
  const ref = useScrollReveal(".feature-card");
  return (
    <section id="features" ref={ref}>
      <div className="wrap">
        <div className="section-head center">
          <span className="section-eyebrow">Features</span>
          <h2>Everything you need to build a clean record</h2>
          <p>
            A domain-agnostic engine with vertical templates for Legal, Business, and Personal
            archives.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="ic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
