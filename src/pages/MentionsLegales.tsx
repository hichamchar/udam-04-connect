import { Card, CardContent } from "@/components/ui/card";

const MentionsLegales = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
          Mentions légales
        </h1>

        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Nom :</strong> UDAM 04 - Union des Associations Culturelles du Département 04
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Statut :</strong> Association loi 1901
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Siège social :</strong> [Adresse à compléter]
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Email :</strong> contact@udam04.org
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Directeur de la publication :</strong> [Nom du président à compléter]
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
              <p className="text-muted-foreground mb-2">
                Le site udam04.org est hébergé par :
              </p>
              <p className="text-muted-foreground">
                [Nom de l'hébergeur à compléter]<br />
                [Adresse de l'hébergeur à compléter]
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground mb-3">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de l'UDAM 04 ou de ses partenaires, sauf mention contraire.
              </p>
              <p className="text-muted-foreground">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit de l'UDAM 04.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Données personnelles</h2>
              <p className="text-muted-foreground mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-muted-foreground mb-3">
                Les informations collectées via les formulaires de contact sont destinées uniquement à l'UDAM 04 et ne seront en aucun cas communiquées à des tiers sans votre consentement.
              </p>
              <p className="text-muted-foreground">
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse : contact@udam04.org
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Sondage sur les discriminations</h2>
              <p className="text-muted-foreground mb-3">
                Le formulaire de sondage sur les discriminations et actes antimusulmans est hébergé par Google Forms. Les réponses sont stockées dans un Google Sheets accessible uniquement aux responsables désignés de l'UDAM 04.
              </p>
              <p className="text-muted-foreground mb-3">
                Les données collectées via ce sondage sont anonymes par défaut. Un moyen de contact n'est demandé que si vous souhaitez être accompagné(e).
              </p>
              <p className="text-muted-foreground">
                Ces données seront utilisées de manière confidentielle et ne seront partagées qu'avec les responsables désignés des mosquées pour l'accompagnement, ou utilisées de manière statistique et anonyme pour sensibiliser les acteurs compétents.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6">
              <h2 className="text-2xl font-bold mb-4">Droit applicable</h2>
              <p className="text-muted-foreground">
                Le présent site et les présentes mentions légales sont régis par le droit français. En cas de litige, et après échec de toute tentative de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
