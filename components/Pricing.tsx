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
  const ref = useScrollReveal(".pricing-copy, .price-card");
  return (
    <section id="pricing" ref={ref}>
      <div className="wrap pricing-grid">
        <div className="pricing-copy">
          <span className="jb hero-eyebrow" style={{ marginBottom: 14 }}>
            PRICING
          </span>
          <h2 style={{ marginBottom: 8 }}>Simple, one-time pricing</h2>
          <p>Buy once, own it. Free trial with no account required.</p>
          <div className="jb pricing-facts">
            SENT ON CHECK &nbsp;license key, version, platform
            <br />
            NEVER SENT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message content, headers, file names, counts
          </div>
        </div>
        <div className="price-card">
          <div className="price-badge">
            <div>
              <div className="bs amt">$49</div>
              <div className="jb unit">ONCE</div>
            </div>
          </div>
          <div className="jb kicker">PERPETUAL LICENSE</div>
          <p className="sub">One license, unlimited projects, on all your computers.</p>
          <ul>
            {PERKS.map((perk) => (
              <li key={perk}>
                <span className="jb check">✓</span>
                {perk}
              </li>
            ))}
          </ul>
          <a className="btn-ink" href={BUY_URL}>
            Buy a license
          </a>
          <p style={{ fontSize: 12.5, color: "var(--muted)", margin: "12px 0 0" }}>
            or <a href="#downloads">download the free trial</a> first
          </p>
        </div>
      </div>
    </section>
  );
}
