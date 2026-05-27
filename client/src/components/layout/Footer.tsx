import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiTiktok, SiYoutube } from "react-icons/si";

import logoSicam from '@assets/Asset_2@2x_1779867553760.png';

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Notre Histoire", href: "/notre-histoire" },
  { label: "Nos Valeurs", href: "/nos-valeurs" },
  { label: "Nos Produits", href: "/nos-produits" },
  { label: "Nos Engagements RSE", href: "/nos-engagements-rse" },
  { label: "Programme ZRP", href: "/zrp" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1714] text-white/60">
      <div className="bg-primary">
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xs font-display font-semibold tracking-[0.2em] text-white/40 uppercase mb-4">Nous contacter</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="contact-title">
              SICAM — Siège social
            </h2>
            <p className="text-white/70 font-light">
              Disponible du lundi au vendredi de 08:00 à 17:00
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone size={16} className="text-accent" />
                <span className="text-xs font-display font-semibold tracking-wider text-white/50 uppercase">Téléphone</span>
              </div>
              <a href="tel:+21678562068" className="text-white font-serif font-bold text-lg hover:text-accent transition-colors" data-testid="contact-phone">
                +216 78 56 20 68
              </a>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail size={16} className="text-accent" />
                <span className="text-xs font-display font-semibold tracking-wider text-white/50 uppercase">E-mail</span>
              </div>
              <a href="mailto:contact@sicam.com.tn" className="text-white font-serif font-bold text-lg hover:text-accent transition-colors" data-testid="contact-email">
                contact@sicam.com.tn
              </a>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-xs font-display font-semibold tracking-wider text-white/50 uppercase">Adresse</span>
              </div>
              <p className="text-white font-semibold text-sm leading-relaxed">
                Route du Kef<br />
                Medjez El Bab, Tunisie
              </p>
            </div>
          </div>

          <div className="border-t border-white/15 pt-10">
            <p className="text-xs font-display font-semibold tracking-[0.15em] text-white/40 uppercase text-center mb-6">
              SICAM S.A. (Siège social en Tunisie)
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.5!2d9.6124!3d36.6486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e4b9f4c7e1d8a1%3A0x2e3f4a5b6c7d8e9f!2sMedjez-el-Bab%2C%20Tunisia!5e0!3m2!1sfr!2stn!4v1700000000000!5m2!1sfr!2stn"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SICAM - Medjez El Bab, Tunisie"
                className="w-full"
                data-testid="map-iframe"
              />
            </div>
          </div>
        </div>
      </div>

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
                { icon: Phone, text: "+216 78 56 20 68" },
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
              { href: "https://www.tiktok.com/@sicam.tunisie", icon: SiTiktok, id: "link-tiktok" },
              { href: "https://youtube.com/@sicamtunisia1969", icon: SiYoutube, id: "link-youtube" },
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
