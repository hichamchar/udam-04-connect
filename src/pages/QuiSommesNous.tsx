import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Building, Coins } from "lucide-react";

const QuiSommesNous = () => {
  const valeurs = [
    { icon: Users, title: "Vivre-ensemble", description: "Créer des ponts entre les communautés" },
    { icon: Heart, title: "Solidarité", description: "Soutenir les plus fragiles" },
    { icon: Target, title: "Diversité culturelle", description: "Célébrer la richesse de nos différences" },
    { icon: Building, title: "Engagement citoyen", description: "Agir pour le bien commun" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Qui sommes-nous ?
        </h1>
        <p className="text-lg text-muted-foreground">
          Découvrez l'histoire, les missions et les valeurs qui animent l'UDAM 04
        </p>
      </div>

      {/* Historique */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-8 pb-6">
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Notre histoire</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  L'UDAM 04 (Union des Associations Culturelles du Département 04 – Alpes-de-Haute-Provence) a été créée en 2025 dans un contexte de besoin grandissant de fédération et de coordination entre les acteurs culturels et cultuels du département.
                </p>
                <p className="mb-4">
                  Face aux défis de la cohésion sociale et à la nécessité de mieux représenter la diversité culturelle locale auprès des institutions, quinze associations se sont réunies pour former cette union dynamique et engagée.
                </p>
                <p>
                  Aujourd'hui, l'UDAM 04 est reconnue comme un acteur majeur du vivre-ensemble dans les Alpes-de-Haute-Provence, portant des projets concrets et rassembleurs sur l'ensemble du territoire départemental.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Missions */}
      <section className="mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Nos trois missions principales</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold mb-3">1. Fédérer les acteurs culturels</h3>
                <p className="text-muted-foreground mb-4">
                  Nous créons un réseau solide permettant de mutualiser les ressources, les compétences et les bonnes pratiques entre associations. Chaque structure conserve son autonomie tout en bénéficiant d'un soutien collectif.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Exemple : Organisation de réunions régulières, partage d'outils de gestion, formations communes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold mb-3">2. Représenter la diversité culturelle</h3>
                <p className="text-muted-foreground mb-4">
                  L'UDAM 04 porte la voix des associations membres auprès des institutions publiques : mairies, conseil départemental, préfecture et partenaires associatifs. Nous veillons à ce que la richesse culturelle du département soit reconnue et valorisée.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Exemple : Participation aux consultations publiques, demandes de subventions collectives, dialogues institutionnels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold mb-3">3. Promouvoir le vivre-ensemble</h3>
                <p className="text-muted-foreground mb-4">
                  Nous organisons et soutenons des événements ouverts à tous, favorisant les rencontres et les échanges : journées culturelles, expositions, conférences, concerts, actions caritatives et animations scolaires.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Exemple : Soirées culturelles, conférences interreligieuses, nettoyages de quartiers, aide alimentaire.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="mb-20 bg-muted/30 -mx-4 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Nos valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((valeur, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <valeur.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{valeur.title}</h3>
                  <p className="text-sm text-muted-foreground">{valeur.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Gouvernance</h2>
          
          <Card className="border-2">
            <CardContent className="pt-8 pb-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Assemblée générale
                  </h3>
                  <p className="text-muted-foreground">
                    Réunion annuelle de l'ensemble des associations membres pour voter les orientations, le budget et élire le bureau.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Building className="h-5 w-5 mr-2 text-primary" />
                    Bureau exécutif
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Composé de membres élus pour un mandat de 3 ans :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Président(e)</li>
                    <li>Vice-président(e)</li>
                    <li>Secrétaire</li>
                    <li>Trésorier(ère)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Commissions
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Des groupes de travail thématiques pour une meilleure efficacité :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li><strong>Commission « jeunes »</strong> : Actions dédiées aux jeunes du département</li>
                    <li><strong>Commission « communication »</strong> : Stratégie de communication et visibilité de l'union</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financement */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Financement</h2>
          
          <Card className="border-2 bg-gradient-to-br from-card to-muted/30">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start mb-4">
                <Coins className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    L'UDAM 04 fonctionne grâce à plusieurs sources de financement qui garantissent son indépendance et sa pérennité :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground"><strong>Cotisations des associations membres</strong> : contribution annuelle de chaque association</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground"><strong>Dons</strong> : soutien de particuliers et bienfaiteurs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground"><strong>Subventions publiques</strong> : soutien des collectivités territoriales et de l'État</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground"><strong>Mécénat</strong> : partenariats avec des entreprises et fondations locales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous;
