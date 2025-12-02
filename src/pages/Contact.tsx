import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nom || !formData.prenom || !formData.email || !formData.type || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // For now, we'll use mailto as a simple solution
    const subject = `Contact UDAM 04 - ${formData.type}`;
    const body = `Nom: ${formData.nom}\nPrénom: ${formData.prenom}\nEmail: ${formData.email}\nType: ${formData.type}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:contact@udam04.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Votre client de messagerie va s'ouvrir");
    
    // Reset form
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      type: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Contact
        </h1>
        <p className="text-lg text-muted-foreground">
          Une question ? Un projet ? N'hésitez pas à nous contacter
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:contact@udam04.org"
                    className="flex items-start hover:text-primary transition-colors group"
                  >
                    <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary">contact@udam04.org</p>
                    </div>
                  </a>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-sm text-muted-foreground">
                        Département 04<br />
                        Alpes-de-Haute-Provence
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/udam04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors border border-border"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/udam04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors border border-border"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/udam04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors border border-border"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent bg-accent/5">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-bold mb-3">Rejoindre l'UDAM 04</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Vous êtes une association et souhaitez rejoindre notre union ?
                </p>
                <p className="text-sm text-muted-foreground">
                  Utilisez le formulaire de contact en sélectionnant "Association" comme type de contact.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Envoyez-nous un message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        type="text"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        type="text"
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        placeholder="Votre prénom"
                        required
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@example.com"
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="type">Type de contact *</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="institution">Institution</SelectItem>
                        <SelectItem value="association">Association</SelectItem>
                        <SelectItem value="particulier">Particulier</SelectItem>
                        <SelectItem value="partenaire">Partenaire / Mécène</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      required
                      rows={6}
                      className="mt-1.5 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
