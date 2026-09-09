"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useScrollReveal } from "@/lib/useScrollReveal";

const FAQS = [
  {
    q: "Does my email ever get uploaded anywhere?",
    a: "No. All parsing, threading, tagging, and export happen locally on your computer. The app makes no cloud calls and sends no telemetry about your content. The only network request is a license check to our license server, which sends your license key, never your email.",
  },
  {
    q: "What files can I import?",
    a: (
      <>
        Standard <code>.eml</code> files and <code>.mbox</code> archives, the formats produced
        by Gmail Takeout, Outlook, Apple Mail, and Thunderbird. Drop a whole folder at once.
      </>
    ),
  },
  {
    q: "What do I get when I export?",
    a: (
      <>
        A spreadsheet index (<code>.xlsx</code>) with Reference ID, date, from/to, subject, tag,
        description, and file location; and a single PDF bundle bookmarked per Reference ID with
        optional page numbers.
      </>
    ),
  },
  {
    q: "Which platforms are supported?",
    a: "Windows 10/11, macOS (Apple Silicon and Intel), and Linux (AppImage and Debian/Ubuntu package).",
  },
  {
    q: "Can I use it offline?",
    a: "Yes. Once activated, the app works fully offline; the license stays valid offline for a grace period between checks.",
  },
];

export default function Faq() {
  const containerRef = useScrollReveal<HTMLDivElement>(".faq-item");
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const prevOpenRef = useRef<number | null>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      const prev = prevOpenRef.current;
      if (prev === openIndex) return;

      if (prev !== null) {
        const el = panelRefs.current[prev];
        if (el) gsap.to(el, { height: 0, duration: 0.35, ease: "power2.inOut" });
      }

      if (openIndex !== null) {
        const el = panelRefs.current[openIndex];
        if (el) {
          gsap.set(el, { height: "auto" });
          const target = el.offsetHeight;
          gsap.fromTo(
            el,
            { height: 0 },
            {
              height: target,
              duration: 0.35,
              ease: "power2.inOut",
              onComplete: () => gsap.set(el, { height: "auto" }),
            },
          );
        }
      }

      prevOpenRef.current = openIndex;
    },
    { dependencies: [openIndex], scope: containerRef },
  );

  return (
    <section id="faq" className="band" ref={containerRef}>
      <div className="wrap">
        <div className="section-head center">
          <h2>Frequently asked</h2>
        </div>
        <div className="faq" style={{ maxWidth: 840, margin: "0 auto" }}>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");
            const panelId = `faq-panel-${i}`;
            const triggerId = `faq-trigger-${i}`;

            return (
              <div className="faq-item" key={item.q}>
                <button
                  type="button"
                  id={triggerId}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="jb" style={{ fontSize: 13, color: "var(--muted-2)" }}>
                    {num}
                  </span>
                  <span className="qt">{item.q}</span>
                  <span className="faq-icon">{isOpen ? "–" : "+"}</span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="faq-panel"
                  style={{ height: i === 0 ? "auto" : 0 }}
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                >
                  <div className="faq-panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
