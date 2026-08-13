"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const STEPS = [
  {
    num: "1",
    title: "Import",
    desc: "Drag a folder of .eml/.mbox files onto the app. It threads, de-dupes, and sorts in seconds.",
  },
  {
    num: "2",
    title: "Tag",
    desc: "Pick a template (Legal, Business, or Personal), then tag messages and add descriptions and Reference IDs.",
  },
  {
    num: "3",
    title: "Export",
    desc: "Produce a labeled .xlsx index and a bookmarked PDF bundle, ready to file or share.",
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal(".step");
  return (
    <section id="how" className="band" ref={ref}>
      <div className="wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="jb hero-eyebrow">WORKFLOW</span>
          <h2>Three steps, zero terminal</h2>
          <p style={{ margin: "8px 0 0", fontSize: 15, color: "var(--muted)" }}>
            Drag in your exports, tag what matters, export the bundle.
          </p>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-head">
                <span className="bs step-num">{s.num}</span>
                <h4>{s.title}</h4>
              </div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
