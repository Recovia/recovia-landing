"use client";

import { BUY_URL } from "@/lib/config";
import { useScrollReveal } from "@/lib/useScrollReveal";

const PERKS = [
  "All import, threading & export features",
  "Legal, Business & Personal templates",
  "Works offline · free updates for 1 year",
  "Your data never leaves your machine",
];

export default function Pricing() {
  const ref = useScrollReveal(".price");
  return (
    <section id="pricing" ref={ref}>
      <div className="wrap">
        <div className="section-head center">
          <span className="section-eyebrow">Pricing</span>
          <h2>
            Simple, <span style={{ color: "var(--green)" }}>one-time</span> pricing
          </h2>
          <p>Buy once, own it. Free trial with no account required.</p>
        </div>
        <div className="price">
          <div className="amt">
            $49 <small>/ one-time license</small>
          </div>
          <p style={{ color: "var(--muted)", margin: "8px 0 0" }}>
            One license, unlimited projects, on all your computers.
          </p>
          <ul>
            {PERKS.map((perk) => (
              <li key={perk}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z" />
                </svg>
                {perk}
              </li>
            ))}
          </ul>
          <a className="btn-solid" href={BUY_URL} style={{ width: "100%" }}>
            Buy a license
          </a>
          <p style={{ fontSize: 13, color: "var(--muted)", margin: "14px 0 0" }}>
            or <a href="#downloads">download the free trial</a> first
          </p>
        </div>
      </div>
    </section>
  );
}
