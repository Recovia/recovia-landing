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
  return (
    <section id="testimonials">
      <div className="wrap">
        <div style={{ marginBottom: 26 }}>
          <h2>Here&apos;s what our users say</h2>
          <p style={{ margin: "10px 0 0", fontSize: 15, color: "var(--muted)" }}>
            Illustrative testimonials, replace with your own once you collect them.
          </p>
          <div style={{ marginTop: 16 }}>
            <a className="btn-out" href="#downloads">
              Read user stories
            </a>
          </div>
        </div>
        <div className="quotes-grid">
          {QUOTES.map((q) => (
            <div className="quote" key={q.name}>
              <h4 style={{ fontSize: 21, marginBottom: 10 }}>{q.title}</h4>
              <p>{q.quote}</p>
              <div className="jb who">
                {q.name.toUpperCase()} · {q.role.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
