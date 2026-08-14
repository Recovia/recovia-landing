"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Cta() {
  const ref = useScrollReveal<HTMLDivElement>(".cta-inner > *");

  return (
    <section>
      <div className="wrap">
        <div className="cta-band" ref={ref}>
          <span className="cta-seal" aria-hidden="true" />
          <div className="cta-inner">
            <h2>The best way to build your exhibit bundle.</h2>
            <p>
              Import, thread, tag, and export, entirely on your machine. Start free, then unlock
              everything with a one-time license.
            </p>
            <a href="#downloads" className="btn-solid">
              Download the free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
