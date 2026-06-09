import Link from "next/link";

const ROW1 = [
  { label: "Programmes Affiliés", href: "https://jet-lead.com", external: true },
  { label: "Signaler", href: "https://www.jet-lead.com/fr/contact", external: true },
];

const ROW2 = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Cookies", href: "/cookies" },
];

function FooterLink({ label, href, external }: { label: string; href: string | null; external?: boolean }) {
  if (!href) {
    return (
      <span className="text-xs cursor-not-allowed select-none" style={{ color: "var(--color-text-faint)" }}>
        {label}
      </span>
    );
  }
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-xs transition-colors hover:text-white"
      style={{ color: "var(--color-text-muted)" }}
    >
      {label}
    </Link>
  );
}

function Dot() {
  return <span style={{ color: "var(--color-text-faint)" }}>•</span>;
}

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t pt-8 pb-28 md:pb-8 px-4"
      style={{ backgroundColor: "var(--color-bg-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-xs font-medium" style={{ color: "var(--color-text-faint)" }}>
          Plateforme sécurisée • Paiement protégé • Support 24/7
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {ROW1.map((item, i) => (
            <>
              <FooterLink key={item.label} {...item} />
              {i < ROW1.length - 1 && <Dot key={`d1-${i}`} />}
            </>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {ROW2.map((item, i) => (
            <>
              <FooterLink key={item.label} {...item} />
              {i < ROW2.length - 1 && <Dot key={`d2-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </footer>
  );
}
