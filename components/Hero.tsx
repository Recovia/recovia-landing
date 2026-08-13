"use client";

import { useRef } from "react";
import { FILES, NAMES, RELEASE_BASE } from "@/lib/config";
import { useDetectedOs } from "@/lib/useDetectedOs";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

export default function Hero() {
  const os = useDetectedOs();
  const downloadHref = os ? `${RELEASE_BASE}/${FILES[os]}` : "#downloads";
  const downloadLabel = os ? `Download for ${NAMES[os]}` : "Download for your OS";
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          motionOk: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          const split = SplitText.create("h1", { type: "words" });

          const tl = gsap.timeline({
            defaults: { duration: reduceMotion ? 0 : 0.7, ease: "power2.out" },
          });

          tl.from(".hero-eyebrow", { autoAlpha: 0, y: -12 })
            .from(
              split.words,
              { autoAlpha: 0, y: 30, stagger: reduceMotion ? 0 : 0.03 },
              "-=0.4",
            )
            .from(
              ".exhibit-badge",
              {
                autoAlpha: 0,
                scale: 1.6,
                rotation: -45,
                duration: reduceMotion ? 0 : 0.9,
                ease: "back.out(2)",
              },
              "-=0.5",
            )
            .from(".hero-lead", { autoAlpha: 0, y: 16 }, "-=0.3")
            .from(
              ".hero-cta a",
              { autoAlpha: 0, y: 12, stagger: reduceMotion ? 0 : 0.1 },
              "-=0.3",
            )
            .from(
              ".fact-strip .fact",
              { autoAlpha: 0, y: 10, stagger: reduceMotion ? 0 : 0.08 },
              "-=0.2",
            )
            .from(".case-panel", { autoAlpha: 0, y: 24 }, "-=0.2");

          return () => split.revert();
        },
      );

      return () => mm.revert();
    },
    { scope: heroRef },
  );

  return (
    <>
      <a id="top" />
      <div className="hero-wrap" ref={heroRef}>
        <div className="wrap hero-top">
          <span className="hero-eyebrow">★★★★★ LOCAL-FIRST · YOUR EMAIL NEVER LEAVES YOUR MACHINE</span>
          <h1>Turn email exports into</h1>
          <h1 className="accent">court-ready exhibits.</h1>

          <div className="exhibit-badge">
            <div>
              <div className="label">Exhibit</div>
              <div className="id">EX-0001</div>
              <div className="case">SMITH v. ALDERCREST</div>
            </div>
          </div>

          <p className="hero-lead">
            Import <code>.eml</code> and <code>.mbox</code> files and the app reconstructs
            threads, removes duplicates, and sorts everything chronologically, then you tag
            messages and export a labeled index plus a bookmarked PDF bundle.
          </p>
          <div className="hero-cta">
            <a className="btn-ink" href={downloadHref}>
              {downloadLabel}
            </a>
            <a className="btn-out" href="#pricing">
              Buy a license ($49)
            </a>
          </div>
        </div>

        <div className="fact-strip">
          <div className="fact">
            <span className="jb k">TRIAL</span>
            <div className="v">Free, no account</div>
          </div>
          <div className="fact">
            <span className="jb k">LICENSE</span>
            <div className="v">$49 once, offline with grace period</div>
          </div>
          <div className="fact">
            <span className="jb k">NETWORK</span>
            <div className="v">License key only, never message content</div>
          </div>
        </div>

        <div className="wrap case-panel-wrap">
          <div className="case-panel">
            <div className="case-panel-head">
              <span className="jb count">1,284 MESSAGES · 3 MAILBOXES · 126 EXHIBITS</span>
              <span className="jb device">ON DEVICE</span>
            </div>
            <div className="case-row">
              <span className="ref">EX-0001</span>
              <span className="subject">Re: Lease amendment (signed copy)</span>
              <span className="tag tag-legal">LEGAL</span>
              <span className="tag tag-outline">CONTRACT</span>
              <span className="case-meta">4 msgs · 2 att · threaded by References</span>
              <span className="date">2024-03-11 09:42 PT</span>
            </div>
            <div className="case-row">
              <span className="ref">EX-0002</span>
              <span className="subject">Invoice dispute, March–June</span>
              <span className="tag tag-business">BUSINESS</span>
              <span className="tag tag-outline">BILLING</span>
              <span className="case-meta">11 msgs · 3 duplicates removed</span>
              <span className="date">2024-06-02 17:08 PT</span>
            </div>
            <div className="case-row dim">
              <span className="ref">EX-0003</span>
              <span className="subject">Site visit photographs</span>
              <span className="tag tag-untagged">UNTAGGED</span>
              <span className="case-meta">1 msg · 6 att</span>
              <span className="date">2024-06-14 08:20 PT</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
