import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap foot">
        <div className="brand" style={{ marginRight: "auto" }}>
          <Image src="/logo.png" alt="Recovia" width={22} height={22} className="brand-mark" />
          <span>Recovia &amp; Exhibit Organizer</span>
        </div>
        <span>
          © {year} · Local-first software
        </span>
        <a href="#downloads">Download</a>
        <a href="#pricing">Pricing</a>
      </div>
    </footer>
  );
}
