"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Cta() {
  const ref = useScrollReveal<HTMLDivElement>(".cta-band .inner > *");

  return (
    <div className="cta-band" ref={ref}>
      <div className="wrap inner">
        <div>
          <h3>The best way to build your exhibit bundle.</h3>
          <p>
            Import, thread, tag, and export, entirely on your machine. Start free, then unlock
            everything with a one-time license.
          </p>
        </div>
        <a href="#downloads" className="bs btn-flip">
          Download the free trial
        </a>
      </div>
    </div>
  );
}
