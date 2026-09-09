import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Shared chrome for the /terms, /privacy and /refund pages: the site Nav, a
// centered prose column (.legal), and the Footer. `updated` is a plain date
// string shown under the title.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="legal wrap">
        <h1>{title}</h1>
        <p className="legal-updated jb">Last updated: {updated}</p>
        {children}
      </main>
      <Footer />
    </>
  );
}
