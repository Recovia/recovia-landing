const FEATURES = [
  {
    kicker: "01 · THREADING",
    title: "Accurate threading",
    desc: "Reconstructs conversations from In-Reply-To / References headers, with a conservative subject fallback. No silent mis-threading.",
  },
  {
    kicker: "02 · DE-DUPLICATION",
    title: "Smart de-duplication",
    desc: "Collapses duplicates by Message-ID or content hash and keeps every source path, with an audit report of each merge.",
  },
  {
    kicker: "03 · CHRONOLOGY",
    title: "Timezone-correct order",
    desc: "Normalizes every timestamp to UTC while keeping the original zone, so cross-timezone chains sort correctly. Undated messages are flagged, never dropped.",
  },
  {
    kicker: "04 · TAGGING",
    title: "Tagging & Reference IDs",
    desc: "Tag from a template taxonomy and auto-number exhibits (EX-0001), sequential, but overridable when you need it.",
  },
  {
    kicker: "05 · OUTPUT",
    title: "Index + bookmarked PDF",
    desc: "Export a spreadsheet index and a single PDF bundle bookmarked per Reference ID with optional page numbers.",
  },
  {
    kicker: "06 · CUSTODY",
    title: "Private by design",
    desc: "All parsing runs on-device. No message content is ever sent to a server: no cloud, no third-party APIs, no telemetry on your data.",
    invert: true,
  },
];

export default function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <div className="section-head" style={{ flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
          <span className="jb hero-eyebrow" style={{ marginBottom: 0 }}>
            FEATURES
          </span>
          <h2>Everything you need to build a clean record</h2>
          <p style={{ margin: 0, fontSize: 15, color: "var(--muted)", maxWidth: "60ch" }}>
            A domain-agnostic engine with vertical templates for Legal, Business, and Personal
            archives.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className={`feature-card${f.invert ? " invert" : ""}`} key={f.title}>
              <div className="kicker">{f.kicker}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
