import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail } from "lucide-react";

const Associations = () => {
  const associations = [
    {
      ville: "Manosque",
      associations: [
        { nom: "Mosquée Nasr", type: "Cultuelle", description: "lieux de culte emblématique Avec son centre culturel et ses différentes actions.", contact: "www.mosquee-nasr.com/contact/" },
        { nom: "Mosquée Omar Ibn Khattab", type: "Cultuelle", description: " lieux de culte emblématique du centre ville de Manosque depuis 20 ans.", contact: "acmm04100@gmail.com" },
      ],
    },
    {
      ville: "Digne-les-Bains",
      associations: [
        { nom: "Mosquée Turque", type: "Cultuelle", description: "Centre culturel turc proposant cours de langue et événements interculturels.", contact: "turque@example.com" },
        { nom: "Association Rahma", type: "Caritative", description: "Actions d'aide alimentaire et soutien aux familles en difficulté.", contact: "rahma@example.com" },
        { nom: "Association Badr", type: "Culturelle", description: "Organisation d'événements culturels et actions de solidarité.", contact: "badr@example.com" },
      ],
    },
    {
      ville: "Sisteron",
      associations: [
        { nom: "Association Culturelle de Sisteron", type: "Culturelle", description: "Promotion de la culture et organisation d'événements locaux.", contact: "sisteron@example.com" },
      ],
    },
    {
      ville: "Château-Arnoux",
      associations: [
        { nom: "Association Culturelle de Château-Arnoux", type: "Culturelle", description: "Activités culturelles et éducatives pour jeunes et adultes.", contact: "chateau-arnoux@example.com" },
      ],
    },
    {
      ville: "Forcalquier",
      associations: [
        { nom: "Association Culturelle de Forcalquier", type: "Culturelle", description: "Cours de langue arabe et activités culturelles variées.", contact: "forcalquier@example.com" },
      ],
    },
    {
      ville: "Peyruis",
      associations: [
        { nom: "Association Culturelle de Peyruis", type: "Culturelle", description: "Actions culturelles et sociales au service de la communauté locale.", contact: "peyruis@example.com" },
      ],
    },
    {
      ville: "Vinon",
      associations: [
        { nom: "Association Culturelle de Vinon", type: "Culturelle", description: "Événements culturels et soutien scolaire pour les enfants.", contact: "vinon@example.com" },
      ],
    },
  ];

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Cultuelle":
        return "bg-primary/10 text-primary border-primary/20";
      case "Culturelle":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Caritative":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Associations membres
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Quinze associations culturelles et cultuelles réparties sur l'ensemble du département des Alpes-de-Haute-Provence
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Présents dans 7 villes du département</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-8 pb-6">
              <p className="text-muted-foreground mb-4">
                L'UDAM 04 fédère des associations variées qui partagent des valeurs communes de solidarité, de culture et de vivre-ensemble. Chaque association conserve son autonomie et son identité tout en bénéficiant de la force d'un réseau départemental.
              </p>
              <p className="text-muted-foreground">
                Cette mise en réseau permet de mutualiser les moyens, de coordonner les actions et de porter une voix collective auprès des institutions et partenaires.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Associations par ville */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {associations.map((groupe, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {groupe.ville}
                </h2>
                <span className="ml-3 text-sm text-muted-foreground">
                  ({groupe.associations.length} {groupe.associations.length > 1 ? 'associations' : 'association'})
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {groupe.associations.map((assoc, assocIndex) => (
                  <Card key={assocIndex} className="hover:shadow-lg transition-all duration-300 border-2">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground">{assoc.nom}</h3>
                        <Badge variant="outline" className={getTypeBadgeColor(assoc.type)}>
                          {assoc.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {assoc.description}
                      </p>
                      
                      <a
                        href={`mailto:${assoc.contact}`}
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {assoc.contact}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Vous souhaitez rejoindre l'UDAM 04 ?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Si votre association partage nos valeurs et souhaite participer à nos actions communes, n'hésitez pas à nous contacter.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
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

export default Associations;
