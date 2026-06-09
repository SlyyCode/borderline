export default function Cookies() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--color-text-base)" }}>
        Politique de Cookies
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-text-faint)" }}>
        Transparence sur les cookies utilisés sur ce site
      </p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Qu'est-ce qu'un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier déposé sur votre appareil lors de votre navigation. Il permet de
            mémoriser des informations entre vos visites. Ce site utilise uniquement des cookies nécessaires à
            son bon fonctionnement.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--color-text-base)" }}>
            Cookies utilisés
          </h2>
          <p className="mb-4">
            Voici les cookies déposés lors de votre navigation sur borderline.com :
          </p>
          <p style={{ color: "var(--color-text-faint)" }}>
            Ce site ne dépose actuellement aucun cookie applicatif. Le tableau sera mis à jour dès que des cookies
            seront implémentés.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Tracking affilié
          </h2>
          <p>
            Lorsque vous arrivez via un lien affilié, les paramètres source, s1 et s2 peuvent être transmis dans
            l'URL. Ces paramètres ne génèrent aucun cookie et servent uniquement à mesurer la performance des
            campagnes d'affiliation.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Gérer vos préférences
          </h2>
          <p>
            Vous pouvez supprimer les cookies à tout moment via les paramètres de votre navigateur ou en nous
            contactant à contact@jet-lead.com.
          </p>
          <p className="mt-2">
            La désactivation du cookie NEXT_LOCALE peut affecter l'affichage de la langue du site.
          </p>
        </section>

        <p style={{ color: "var(--color-text-faint)" }}>
          Politique de cookies mise à jour le 11 mai 2026. Contact : contact@jet-lead.com
        </p>
      </div>
    </main>
  );
}
