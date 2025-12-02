import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Heart, GraduationCap, MessageCircle, Leaf, ArrowRight } from "lucide-react";

const Home = () => {
  const missions = [
    {
      icon: Users,
      title: "Fédérer",
      description: "Mutualiser les ressources, les compétences et les bonnes pratiques entre les associations culturelles du département.",
    },
    {
      icon: Building2,
      title: "Représenter",
      description: "Porter la voix de la diversité culturelle locale auprès des institutions et partenaires associatifs.",
    },
    {
      icon: Heart,
      title: "Promouvoir le vivre-ensemble",
      description: "Créer des événements ouverts à tous : journées culturelles, expositions, conférences, concerts et actions caritatives.",
    },
  ];

  const actions = [
    { icon: Heart, title: "Aide alimentaire et solidarité", color: "text-primary" },
    { icon: GraduationCap, title: "Cours de soutien scolaire", color: "text-secondary" },
    { icon: MessageCircle, title: "Conférences interreligieuses", color: "text-accent" },
    { icon: Users, title: "Soirées culturelles", color: "text-primary" },
    { icon: Leaf, title: "Actions environnementales", color: "text-secondary" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
              Culture, partage et solidarité
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in animate-delay-100">
              Trois mots qui définissent l'esprit de l'UDAM 04
            </p>
            <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              L'UDAM 04 (Union des Associations Culturelles du Département 04 – Alpes-de-Haute-Provence) regroupe quinze associations culturelles et cultuelles engagées pour le vivre-ensemble et la solidarité dans notre département.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/qui-sommes-nous">
                  Découvrir l'UDAM 04 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/sondage">Signaler une discrimination</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nos missions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              L'UDAM 04 agit au quotidien pour renforcer les liens entre les associations et promouvoir la diversité culturelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <mission.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nos actions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des initiatives concrètes pour la culture, l'éducation, la solidarité et l'environnement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {actions.map((action, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <action.icon className={`h-10 w-10 ${action.color} mx-auto mb-3`} />
                  <p className="text-sm font-medium">{action.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/projets-actions">
                Découvrir tous nos projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Associations membres
              </h2>
              <p className="text-muted-foreground">
                Quinze associations réparties sur l'ensemble du département 04
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Manosque", "Digne-les-Bains", "Sisteron", "Château-Arnoux", "Forcalquier", "Peyruis", "Vinon", "Et plus..."].map((city, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors">
                  <p className="font-medium text-sm">{city}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/associations">
                  Voir toutes les associations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Rejoignez-nous
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Associations, partenaires, mécènes ou bénévoles : ensemble, construisons un département solidaire et uni dans sa diversité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/partenaires">Devenir partenaire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
