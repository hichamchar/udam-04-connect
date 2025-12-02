import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Shield, Phone } from "lucide-react";

const Sondage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Sondage – Signalement des discriminations
        </h1>
        <p className="text-lg text-muted-foreground">
          Votre témoignage est important pour agir contre les discriminations et les actes antimusulmans
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-8 pb-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                L'UDAM 04 met en place ce sondage afin de recueillir de manière anonyme les situations de discriminations et d'actes antimusulmans vécues par les habitants du département.
                Ces informations nous permettent d'orienter au mieux les personnes concernées (main courante, plainte, médiation) et de disposer de données fiables pour sensibiliser et alerter les acteurs compétents.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alerts */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Confidentialité */}
          <Card className="border-2 border-secondary bg-secondary/5">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-3 text-secondary">Confidentialité</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Le formulaire est <strong>anonyme par défaut</strong>.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Un moyen de contact n'est demandé que si vous souhaitez être accompagné(e).
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Les données seront conservées de manière sécurisée et partagées uniquement avec les responsables désignés des mosquées pour l'accompagnement.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Les résultats globaux pourront être utilisés de manière statistique, sans mention de noms ni d'éléments permettant de vous identifier.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Urgence */}
          <Card className="border-2 border-destructive bg-destructive/5">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-destructive mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">En cas d'urgence</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <p className="text-sm">
                      En cas de <strong>danger immédiat</strong>, appelez le <strong className="text-destructive">17 (police)</strong> ou le <strong className="text-destructive">112</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formulaire Google Forms */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">
                Formulaire de signalement
              </h2>
              
              {/* Google Forms iframe */}
              <div className="w-full flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSesSh9QC9B8Z7VqFcfSap7JtNAi0b1zLJET3hs20PG2g29qjg/viewform?embedded=true" 
                  width="100%" 
                  height="2923" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="max-w-full"
                >
                  Chargement…
                </iframe>
              </div>

              {/* Instructions pour l'intégration 
              <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                <p className="text-xs text-muted-foreground text-center">
                  <strong>Note technique :</strong> Remplacez le contenu du div ci-dessus par le code iframe du Google Forms.
                  Exemple : <code>&lt;iframe src="URL_DU_GOOGLE_FORM" width="100%" height="800"&gt;&lt;/iframe&gt;</code>
                </p>
              </div>
              */}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Message de fin */}
      <section>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-xl font-bold mb-3">Merci de votre participation</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Votre témoignage contribue à une meilleure compréhension des discriminations dans notre département et nous permet d'agir plus efficacement. Si vous avez demandé un accompagnement, un responsable vous contactera dans les plus brefs délais.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sondage;
