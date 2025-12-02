import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake, Heart, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partenaires = () => {
  const typesPartenaires = [
    {
      icon: Building2,
      title: "Institutions publiques",
      description: "Collectivités territoriales, administrations, services de l'État",
      exemples: ["Conseil départemental", "Mairies", "Préfecture", "Services culture et jeunesse"],
    },
    {
      icon: Handshake,
      title: "Entreprises",
      description: "Partenariats d'entreprise et mécénat de compétences",
      exemples: ["PME locales", "Grandes entreprises", "Artisans", "Commerces de proximité"],
    },
    {
      icon: Heart,
      title: "Fondations",
      description: "Soutien financier et accompagnement de projets",
      exemples: ["Fondations culturelles", "Fondations solidaires", "Fondations éducatives"],
    },
    {
      icon: Target,
      title: "Associations",
      description: "Collaborations inter-associatives",
      exemples: ["Associations culturelles", "Associations caritatives", "Réseaux associatifs"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Partenaires & mécènes
        </h1>
        <p className="text-lg text-muted-foreground">
          Ensemble, construisons un département plus solidaire et uni dans sa diversité
        </p>
      </div>

      {/* Pourquoi soutenir */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="pt-10 pb-10">
              <h2 className="text-3xl font-serif font-bold text-center mb-8">
                Pourquoi soutenir l'UDAM 04 ?
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Impact sur la cohésion sociale</h3>
                    <p>
                      En soutenant l'UDAM 04, vous contribuez directement à renforcer le lien social et le vivre-ensemble dans les Alpes-de-Haute-Provence. Nos actions touchent des milliers de personnes chaque année.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Valorisation de la diversité culturelle</h3>
                    <p>
                      Votre soutien permet de mettre en lumière la richesse culturelle du département et de créer des ponts entre les communautés à travers des événements ouverts à tous.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Projets concrets et mesurables</h3>
                    <p>
                      Aide alimentaire, soutien scolaire, actions environnementales : chaque euro investi se traduit par des actions concrètes et un impact mesurable sur le territoire.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types de partenaires */}
      <section className="mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Qui peut devenir partenaire ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {typesPartenaires.map((type, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <p className="text-sm font-medium text-foreground mb-2">Exemples :</p>
                    <ul className="space-y-1">
                      {type.exemples.map((exemple, exIndex) => (
                        <li key={exIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {exemple}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formes de soutien */}
      <section className="mb-20 bg-muted/30 -mx-4 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Comment nous soutenir ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Mécénat financier</h3>
                <p className="text-sm text-muted-foreground">
                  Soutien financier ponctuel ou récurrent pour nos projets
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Mécénat de compétences</h3>
                <p className="text-sm text-muted-foreground">
                  Mise à disposition de compétences et d'expertises
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Mécénat en nature</h3>
                <p className="text-sm text-muted-foreground">
                  Don de matériel, mise à disposition de locaux, etc.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-primary to-accent text-white border-0">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Devenez partenaire de l'UDAM 04
              </h3>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Vous souhaitez soutenir nos actions ou mettre en place un partenariat ? Rencontrons-nous pour échanger sur vos attentes et nos besoins.
              </p>
              <Button asChild size="lg" variant="secondary" className="shadow-lg">
                <Link to="/contact">
                  Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Partenaires;
