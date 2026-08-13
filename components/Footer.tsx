export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <div className="row">
            <span className="sticker-dot sm" aria-hidden="true" />
            <span className="bs brand-name">Correspondence &amp; Exhibit Organizer</span>
          </div>
          <div className="jb foot-copy">© {year} · Local-first software</div>
        </div>
        <div className="foot-links">
          <a href="#downloads">Downloads</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="foot-links">
          <a href="#features">Release notes</a>
          <a href="#features">Privacy</a>
          <a href="#features">Contact</a>
        </div>
      </div>
    </footer>
  );
}
