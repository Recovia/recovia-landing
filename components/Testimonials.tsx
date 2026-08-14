"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const QUOTES = [
  {
    title: "Cut a day of exhibit prep to an hour",
    quote:
      "Threading and the auto-numbered PDF bundle are exactly what discovery prep needed. The dedupe audit gave me confidence nothing was dropped.",
    name: "Jordan M.",
    role: "Litigation paralegal",
  },
  {
    title: "Finally, everything stays on my machine",
    quote:
      "No cloud upload, no accounts. I can hand a client the index and PDF without any data ever leaving my laptop.",
    name: "Priya S.",
    role: "Solo attorney",
  },
  {
    title: "The chronology just works",
    quote:
      "Cross-timezone reply chains used to be a nightmare. Everything lands in the right order with the original zone preserved.",
    name: "Marcus T.",
    role: "Compliance analyst",
  },
  {
    title: "Clean index, every time",
    quote:
      "Reference IDs, tags, descriptions and file locations in one spreadsheet. It saved our whole team hours per matter.",
    name: "Dana K.",
    role: "Records manager",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal(".quote");
  return (
    <section id="testimonials" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2>
            Here&apos;s what our <span style={{ color: "var(--green)" }}>users</span> say
          </h2>
          <p style={{ marginTop: 10 }}>
            Illustrative testimonials, replace with your own once you collect them.
          </p>
          <div style={{ marginTop: 16 }}>
            <a className="btn-outline" href="#downloads">
              Read user stories
            </a>
          </div>
        </div>
        <div className="quotes-grid">
          {QUOTES.map((q) => (
            <div className="quote" key={q.name}>
              <h4>{q.title}</h4>
              <p>{q.quote}</p>
              <div className="who">
                <span className="av" />
                <div>
                  <div className="n">{q.name}</div>
                  <div className="r">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
