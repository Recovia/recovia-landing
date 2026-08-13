"use client";

import Link from "next/link";
import { VERSION } from "@/lib/config";
import { useTheme } from "@/lib/theme";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="#top">
          <span className="sticker-dot" aria-hidden="true" />
          <span className="bs brand-name">Correspondence</span>
        </Link>
        <nav className="nav-links">
          <Link className="navlink" href="#features">
            Features
          </Link>
          <Link className="navlink" href="#how">
            How it works
          </Link>
          <Link className="navlink" href="#downloads">
            Downloads
          </Link>
          <Link className="navlink" href="#pricing">
            Pricing
          </Link>
          <Link className="navlink" href="#faq">
            FAQ
          </Link>
        </nav>
        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </button>
        <Link className="bs nav-download" href="#downloads">
          Download {VERSION}
        </Link>
      </div>
    </header>
  );
}
