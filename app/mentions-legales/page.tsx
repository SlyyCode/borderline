export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-3xl font-extrabold mb-10" style={{ color: "var(--color-text-base)" }}>
        Mentions légales
      </h1>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie
          numérique, il est précisé aux utilisateurs du site Freaklus l'identité des différents intervenants dans
          le cadre de sa réalisation et de son suivi.
        </p>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Edition du site
          </h2>
          <p>
            Le présent site, accessible à l'URL www.freaklus.com (le « Site »), est édité par :
          </p>
          <p className="mt-2">
            Freaklus, société au capital de 50 000 euros, inscrite au R.C.S. de PARIS sous le numéro RCS B Paris
            987 651 322, dont le siège social est situé au 44 RUE DE SAUSSURE, 75017 PARIS, représenté(e) par
            PASCAL TAREL dûment habilité(e).
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Hébergement
          </h2>
          <p>
            Le Site est hébergé par la société Alex Host, situé mun. Chisinau, str. C. Brancusi nr. 3 (contact
            téléphonique ou email : +37379600002).
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Directeur de publication
          </h2>
          <p>Le Directeur de la publication du Site est PASCAL TAREL.</p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Nous contacter
          </h2>
          <p>Par téléphone : +33645147488</p>
          <p>Par email : contact@jet-lead.com</p>
          <p>Par courrier : 44 RUE DE SAUSSURE, 75017 PARIS</p>
        </section>
      </div>
    </main>
  );
}
