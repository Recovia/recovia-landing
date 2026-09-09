import Image from "next/image";
import Link from "next/link";

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
        <Link href="/#downloads">Download</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/refund">Refunds</Link>
      </div>
    </footer>
  );
}
