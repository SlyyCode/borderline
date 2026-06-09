import Link from "next/link";
import LeaksGrid from "./_components/LeaksGrid";


export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(139,43,226,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(217,70,239,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(139,43,226,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(139,43,226,0.3) 40px)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg-base))" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-14 py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(139,43,226,0.15)", border: "1px solid rgba(139,43,226,0.4)", color: "var(--color-primary-light)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Nouveau contenu tous les jours
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              <span style={{ color: "var(--color-text-base)" }}>La plus grande communauté de</span>{" "}
              <span className="gradient-text">France</span>
            </h1>

            <p className="text-base md:text-lg mb-8" style={{ color: "var(--color-text-muted)" }}>
              Rejoignez le n°1 de l'échange en France. Des milliers de membres partagent et échangent chaque jour. Nudes, sextapes et plans cul : la plus grande communauté du pays vous attend.
            </p>

            <div className="flex gap-3 mb-12">
              <Link
                href="/register"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm glow-purple"
                style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)", color: "#fff" }}
              >
                Voir les profils →
              </Link>
            </div>
          </div>
        </div>
      </section>


      <div className="flex flex-col items-center gap-3 py-8">
        <div className="flex items-center gap-4 w-64">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, var(--color-border))" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-text-faint)" }}>Explorer</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, var(--color-border))" }} />
        </div>
        <svg className="w-4 h-4 animate-bounce" style={{ color: "var(--color-text-faint)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <section id="videos" className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-14">
        <LeaksGrid preview />
      </section>

      <section className="relative overflow-hidden mt-16 py-14 px-4">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(139,43,226,0.15) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-md mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-8" style={{ color: "var(--color-text-base)" }}>
            Rejoins la <span className="gradient-text">communauté</span>
          </h2>

          <div
            className="rounded-2xl text-left overflow-hidden"
            style={{ backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
          >
            <div className="px-6 pt-6 pb-5">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-faint)" }}>Offre d'essai</p>

              <div className="flex items-end gap-3 mb-1">
                <span className="text-5xl font-extrabold gradient-text leading-none">1,04€</span>
                <span className="text-sm pb-1" style={{ color: "var(--color-text-muted)" }}>/ semaine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm line-through" style={{ color: "var(--color-text-faint)" }}>28,93€</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "rgba(139,43,226,0.2)", color: "var(--color-primary-light)", border: "1px solid rgba(139,43,226,0.35)" }}
                >
                  -96%
                </span>
                <span className="text-xs" style={{ color: "var(--color-text-faint)" }}>soit 0,15€ / jour</span>
              </div>
            </div>

            <div className="h-px mx-6" style={{ backgroundColor: "var(--color-border)" }} />

            <div className="px-6 py-5 space-y-3">
              {[
                "Accès à tous les profils premium du site de rencontre",
                "Photos & vidéos exclusives illimitées",
                "Messagerie privée directe",
                "Appels vidéo cam en direct",
                "Like & favoris illimités",
                "Paiement sécurisé & discret",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary-light)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>{feat}</span>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <Link
                href="/register"
                className="block w-full py-3 rounded-xl text-sm font-extrabold tracking-wide text-center transition-all glow-purple mb-4"
                style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)", color: "#fff" }}
              >
                Débloquer l'accès maintenant →
              </Link>

              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" style={{ color: "#4ade80" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: "#4ade80" }}>Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {/* Visa */}
                  <svg width="44" height="28" viewBox="0 0 44 28" fill="none"><rect width="44" height="28" rx="4" fill="#1A1F71"/><text x="22" y="20" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontStyle="italic" fontFamily="Arial, sans-serif">VISA</text></svg>
                  {/* Mastercard */}
                  <svg width="44" height="28" viewBox="0 0 44 28" fill="none"><rect width="44" height="28" rx="4" fill="#252525"/><circle cx="17" cy="14" r="8" fill="#EB001B"/><circle cx="27" cy="14" r="8" fill="#F79E1B" fillOpacity="0.95"/><path d="M22 6.8a8 8 0 0 1 0 14.4 8 8 0 0 1 0-14.4z" fill="#FF5F00"/></svg>
                  {/* Apple Pay */}
                  <svg width="52" height="28" viewBox="0 0 52 28" fill="none"><rect width="52" height="28" rx="4" fill="#000"/><path d="M13.8 8.2c.6-.8 1-1.8.9-2.9-.9.1-2 .6-2.6 1.4-.6.7-1 1.7-.9 2.8 1 .1 2-.5 2.6-1.3z" fill="white"/><path d="M14.7 9.8c-1.4-.1-2.6.8-3.2.8-.7 0-1.7-.8-2.9-.7-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1.1 1.6 2.2 2.7 2.2 1.1-.1 1.5-.7 2.7-.7 1.3 0 1.6.7 2.8.7 1.1 0 1.9-1.1 2.6-2.1.5-.7.7-1 .7-1s-2.2-.9-2.2-3.4c0-2.1 1.7-3.2 1.7-3.2-.9-1.4-2.4-2.4-2.4-2.4z" fill="white"/><text x="36" y="19" textAnchor="middle" fill="white" fontSize="10" fontWeight="500" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">Pay</text></svg>
                  {/* Google Pay */}
                  <svg width="52" height="28" viewBox="0 0 52 28" fill="none"><rect width="52" height="28" rx="4" fill="white"/><text x="14" y="20" textAnchor="middle" fill="#4285F4" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">G</text><text x="34" y="19" textAnchor="middle" fill="#3C4043" fontSize="10" fontWeight="500" fontFamily="Arial, sans-serif">Pay</text></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
