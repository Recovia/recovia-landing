const FAQS = [
  {
    num: "01",
    q: "Does my email ever get uploaded anywhere?",
    a: "No. All parsing, threading, tagging, and export happen locally on your computer. The app makes no cloud calls and sends no telemetry about your content. The only network request is a license check to the payment provider, which sends your license key, never your email.",
    open: true,
  },
  {
    num: "02",
    q: "What files can I import?",
    a: (
      <>
        Standard <code>.eml</code> files and <code>.mbox</code> archives, the formats produced
        by Gmail Takeout, Outlook, Apple Mail, and Thunderbird. Drop a whole folder at once.
      </>
    ),
  },
  {
    num: "03",
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
    num: "04",
    q: "Which platforms are supported?",
    a: "Windows 10/11, macOS (Apple Silicon and Intel), and Linux (AppImage and Debian/Ubuntu package).",
  },
  {
    num: "05",
    q: "Can I use it offline?",
    a: "Yes. Once activated, the app works fully offline; the license stays valid offline for a grace period between checks.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="band">
      <div className="wrap">
        <h2 style={{ marginBottom: 20 }}>Frequently asked</h2>
        <div className="faq" style={{ maxWidth: 840 }}>
          {FAQS.map((item) => (
            <details key={item.num} open={item.open}>
              <summary>
                <span className="jb num">{item.num}</span>
                <span className="bs qt">{item.q}</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
