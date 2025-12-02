import { Link } from "react-router-dom";
import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <div className="text-lg font-serif font-bold">UDAM 04</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Union des Associations Culturelles du Département 04 - Alpes-de-Haute-Provence
            </p>
            <p className="text-sm font-medium text-foreground italic">
              Culture, partage et solidarité
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/qui-sommes-nous" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link to="/associations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Associations membres
                </Link>
              </li>
              <li>
                <Link to="/projets-actions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projets & actions
                </Link>
              </li>
              <li>
                <Link to="/sondage" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sondage discriminations
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@udam04.org"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@udam04.org</span>
              </a>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Suivez-nous :</p>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com/udam04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com/udam04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com/udam04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UDAM 04. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
