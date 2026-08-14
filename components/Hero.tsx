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

          gsap.set(".mock-bar", { scaleX: 0, transformOrigin: "left center" });
          gsap.set(".mock-ref, .mock-row .mock-tag", { scale: 0.4, autoAlpha: 0 });
          gsap.set(".mock-float", { autoAlpha: 0, y: 10 });
          gsap.set(".mock-float .drawn", { drawSVG: reduceMotion ? "0% 100%" : "0% 0%" });

          tl.from(".hero-eyebrow", { autoAlpha: 0, y: -12 })
            .from(
              split.words,
              { autoAlpha: 0, y: 24, stagger: reduceMotion ? 0 : 0.025 },
              "-=0.4",
            )
            .from(".hero-lead", { autoAlpha: 0, y: 16 }, "-=0.3")
            .from(
              ".hero-cta > *",
              { autoAlpha: 0, y: 12, stagger: reduceMotion ? 0 : 0.1 },
              "-=0.3",
            )
            .from(".mock", { autoAlpha: 0, y: 24, scale: 0.98 }, "-=0.4")
            .to(
              { val: 0 },
              {
                val: 126,
                duration: reduceMotion ? 0 : 1,
                ease: "power1.out",
                onUpdate: function () {
                  const el = document.querySelector(".count-exhibits");
                  if (el) el.textContent = Math.round(this.targets()[0].val).toString();
                },
              },
              "-=0.3",
            )
            .to(
              { val: 0 },
              {
                val: 1284,
                duration: reduceMotion ? 0 : 1,
                ease: "power1.out",
                onUpdate: function () {
                  const el = document.querySelector(".count-messages");
                  if (el) el.textContent = Math.round(this.targets()[0].val).toLocaleString();
                },
              },
              "<",
            )
            .to(
              ".mock-ref, .mock-row .mock-tag",
              {
                scale: 1,
                autoAlpha: 1,
                ease: "back.out(2.5)",
                stagger: reduceMotion ? 0 : 0.08,
              },
              "-=0.5",
            )
            .to(
              ".mock-bar",
              { scaleX: 1, duration: reduceMotion ? 0 : 0.6, stagger: reduceMotion ? 0 : 0.08 },
              "<",
            )
            .to(
              ".mock-float",
              { autoAlpha: 1, y: 0, stagger: reduceMotion ? 0 : 0.15 },
              "-=0.2",
            )
            .to(
              ".mock-float .drawn",
              { drawSVG: "0% 100%", duration: reduceMotion ? 0 : 0.5, stagger: reduceMotion ? 0 : 0.15 },
              "<+=0.1",
            );

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
      <section className="hero glow" ref={heroRef}>
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="stars">★★★★★</span>
              Local-first · your email never leaves your machine
            </div>
            <h1>
              Turn email exports into <span className="accent">court-ready exhibits.</span>
            </h1>
            <p className="hero-lead">
              Import <code>.eml</code> and <code>.mbox</code> files and the app reconstructs
              threads, removes duplicates, and sorts everything chronologically, then you tag
              messages and export a labeled index plus a bookmarked PDF bundle.
            </p>
            <div className="hero-cta">
              <a className="btn-solid" href={downloadHref}>
                {downloadLabel}
              </a>
              <a className="btn-outline" href="#pricing">
                Buy a license ($49)
              </a>
            </div>
            <p className="hero-note">Free trial · one-time license · works offline</p>
          </div>

          <div className="mock">
            <div className="mock-panel">
              <div className="mock-summary">
                <div className="row1">
                  <span>Exhibit bundle</span>
                  <span>PDF</span>
                </div>
                <div className="num">EX-0001 — EX-0126</div>
                <div className="row2">
                  <span>
                    <span className="count-exhibits">0</span> exhibits ·{" "}
                    <span className="count-messages">0</span> messages
                  </span>
                  <span>indexed ✓</span>
                </div>
              </div>
              <div className="mock-head">
                <span className="t">Chronological index</span>
                <span className="mock-tag">Legal</span>
              </div>
              <div className="mock-row active">
                <span className="mock-ref">EX-0001</span>
                <span className="mock-tag">Evidence</span>
                <div className="mock-bar" style={{ width: "80%" }} />
              </div>
              <div className="mock-row">
                <span className="mock-ref">EX-0002</span>
                <div className="mock-bar" style={{ width: "60%" }} />
              </div>
              <div className="mock-row">
                <span className="mock-ref">EX-0003</span>
                <div className="mock-bar" style={{ width: "72%" }} />
              </div>
            </div>
            <div className="mock-float" style={{ left: -18, top: 26 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline className="drawn" points="4 12 9 17 20 6" />
              </svg>
              duplicates merged
            </div>
            <div className="mock-float" style={{ right: -14, bottom: -16 }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--green)"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path className="drawn" d="M12 7v5l3 2" />
              </svg>
              timezone-correct order
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
