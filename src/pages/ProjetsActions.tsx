import { Card, CardContent } from "@/components/ui/card";
import { Heart, GraduationCap, MessageCircle, Music, Leaf, Users } from "lucide-react";

const ProjetsActions = () => {
  const projets = [
    {
      icon: Heart,
      title: "Aide alimentaire et solidarité",
      color: "from-primary to-primary/70",
      description: "Des actions concrètes pour soutenir les personnes en situation de précarité dans notre département.",
      actions: [
        "Distributions de colis alimentaires mensuelles",
        "Maraudes dans les quartiers sensibles",
        "Soutien aux familles en difficulté",
        "Collectes de vêtements et de produits de première nécessité",
      ],
    },
    {
      icon: GraduationCap,
      title: "Cours de soutien scolaire",
      color: "from-secondary to-secondary/70",
      description: "Accompagnement éducatif des jeunes pour favoriser leur réussite scolaire.",
      actions: [
        "Aide aux devoirs pour primaire et collège",
        "Cours de soutien dans diverses matières",
        "Ateliers de méthodologie",
        "Partenariats avec les établissements scolaires",
      ],
    },
    {
      icon: MessageCircle,
      title: "Conférences interreligieuses",
      color: "from-accent to-accent/70",
      description: "Favoriser le dialogue et la compréhension mutuelle entre les différentes traditions spirituelles.",
      actions: [
        "Tables rondes thématiques",
        "Rencontres et débats ouverts au public",
        "Visites de lieux de culte",
        "Interventions dans les établissements scolaires",
      ],
    },
    {
      icon: Music,
      title: "Soirées culturelles",
      color: "from-primary to-accent",
      description: "Célébrer la diversité culturelle à travers des événements festifs et conviviaux.",
      actions: [
        "Contes traditionnels de différentes cultures",
        "Concerts de musiques du monde",
        "Découverte de la gastronomie traditionnelle",
        "Expositions d'art et d'artisanat",
      ],
    },
    {
      icon: Leaf,
      title: "Actions environnementales",
      color: "from-secondary to-primary",
      description: "S'engager pour la protection de notre environnement et de notre cadre de vie.",
      actions: [
        "Nettoyages de quartiers et espaces publics",
        "Plantations d'arbres et végétalisation",
        "Sensibilisation au développement durable",
        "Ateliers de recyclage et compostage",
      ],
    },
    {
      icon: Users,
      title: "Actions caritatives diverses",
      color: "from-accent to-secondary",
      description: "Un large éventail d'initiatives solidaires au service de la communauté.",
      actions: [
        "Visites aux personnes isolées",
        "Organisation d'événements caritatifs",
        "Collectes de fonds pour des causes locales",
        "Partenariats avec d'autres associations",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Projets & actions
        </h1>
        <p className="text-lg text-muted-foreground">
          Des initiatives concrètes qui témoignent de notre engagement pour la culture, l'éducation, la solidarité et l'environnement
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-card to-muted/30">
            <CardContent className="pt-8 pb-6">
              <p className="text-muted-foreground text-center text-lg">
                Les projets communs menés par les associations membres de l'UDAM 04 sont au cœur de notre mission de vivre-ensemble et de solidarité. Chaque action est pensée pour rassembler, soutenir et enrichir notre communauté départementale.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projets */}
      <section className="space-y-12 mb-12">
        {projets.map((projet, index) => (
          <div key={index} className="max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Title */}
                  <div className="md:w-1/3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${projet.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <projet.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
                      {projet.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {projet.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="md:w-2/3 md:border-l md:border-border md:pl-6">
                    <h3 className="text-lg font-bold mb-4 text-foreground">Actions menées :</h3>
                    <ul className="space-y-3">
                      {projet.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-accent text-white border-0">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="text-3xl font-serif font-bold mb-4">Participez à nos actions</h3>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Vous souhaitez vous impliquer dans l'une de nos actions ou proposer un nouveau projet ? Rejoignez-nous !
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-bold text-lg shadow-lg"
              >
                Nous contacter
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjetsActions;
