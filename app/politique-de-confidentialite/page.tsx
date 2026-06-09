export default function PolitiqueDeConfidentialite() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--color-text-base)" }}>
        Politique de Confidentialité
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-text-faint)" }}>
        Comment nous traitons vos données personnelles
      </p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Responsable de traitement
          </h2>
          <p>
            Borderline, 44 RUE DE SAUSSURE, 75017 PARIS — RCS B Paris 987 651 322. Contact : contact@jet-lead.com
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Données collectées
          </h2>
          <p className="mb-2">
            Nous collectons les données suivantes lors de votre navigation et de votre inscription :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Adresse email</li>
            <li>Préférences relationnelles (type de rencontres recherché)</li>
            <li>Données techniques (adresse IP, type de navigateur)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Finalités
          </h2>
          <p className="font-semibold mb-1" style={{ color: "var(--color-text-base)" }}>
            Suivi affilié
          </p>
          <p className="mb-3">
            Mesure de la performance des campagnes via les paramètres d'URL (source, s1, s2).
          </p>
          <p className="font-semibold mb-1" style={{ color: "var(--color-text-base)" }}>
            Transfert vers la plateforme partenaire
          </p>
          <p>Vos données sont transmises à la plateforme de rencontres finale pour créer votre compte.</p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Partage des données
          </h2>
          <p className="mb-2">Vos données peuvent être partagées avec :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>La plateforme de rencontres partenaire (création de compte)</li>
            <li>Notre hébergeur technique (Alex Host)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Durées de conservation
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Cookies : 12 mois maximum</li>
            <li>Email et préférences : 3 ans à compter de la collecte</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Base légale
          </h2>
          <p>
            Le traitement est fondé sur votre consentement (RGPD Art. 6.1.a) pour la collecte des préférences
            relationnelles et le transfert vers la plateforme partenaire, et sur notre intérêt légitime (Art.
            6.1.f) pour la mesure de performance affiliée.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Vos droits
          </h2>
          <p className="mb-2">Conformément au RGPD, vous pouvez à tout moment :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Accéder à vos données</li>
            <li>Corriger des données inexactes</li>
            <li>Demander la suppression de vos données</li>
            <li>Vous opposer à certains traitements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-text-base)" }}>
            Contact
          </h2>
          <p>Email : contact@jet-lead.com</p>
          <p>Courrier : 44 RUE DE SAUSSURE, 75017 PARIS</p>
          <p className="mt-2">
            Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
          </p>
        </section>

        <p style={{ color: "var(--color-text-faint)" }}>
          Politique de confidentialité mise à jour le 11 mai 2026.
        </p>
      </div>
    </main>
  );
}
