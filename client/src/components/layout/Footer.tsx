import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Notre Histoire", href: "/notre-histoire" },
  { label: "Nos Valeurs", href: "/nos-valeurs" },
  { label: "Nos Produits", href: "/nos-produits" },
  { label: "Certifications", href: "/certifications" },
  { label: "Programme ZRP", href: "/zrp" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1714] text-white/60">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 py-20 md:py-24">
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl w-fit mb-8">
              <img src={logoSicam} alt="SICAM" className="h-10 w-auto" />
            </div>
            <p className="text-white/40 mb-8 max-w-sm leading-relaxed text-[15px]">
              Société Industrielle de Conserves Alimentaires de Medjez El Bab. Filiale du Groupe Bayahi, fondée en 1969. Premier transformateur de tomates en Tunisie.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Route du Kef, Medjez El Bab, Tunisie" },
                { icon: Phone, text: "+216 78 560 300" },
                { icon: Mail, text: "contact@sicam.com.tn" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50">
                  <item.icon size={16} strokeWidth={1.5} className="text-primary/60 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-white mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-serif text-lg text-white mb-6">Notre engagement</h3>
            <p className="text-white/40 leading-relaxed text-sm mb-6">
              SICAM, l'excellence tunisienne au service de la vie. Première entreprise arabe et africaine certifiée Zéro Résidu de Pesticides pour le double concentré de tomates.
            </p>
            <p className="text-white/40 leading-relaxed text-sm">
              Présent dans plus de 30 pays. 10 certifications internationales actives en 2025.
            </p>
          </div>
        </div>

        <div className="border-t border-white/8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SICAM — Société Industrielle de Conserves Alimentaires. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/SICAMTunisia", icon: SiFacebook, id: "link-facebook" },
              { href: "https://www.instagram.com/sicam_tunisia_officiel?igsh=amlpZnk1cjhzbWF5", icon: SiInstagram, id: "link-instagram" },
              { href: "https://www.linkedin.com/company/sicam-tunisia/", icon: SiLinkedin, id: "link-linkedin" },
            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all duration-300"
                data-testid={social.id}
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
