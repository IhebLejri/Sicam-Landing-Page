import { Link } from "wouter";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white p-4 rounded-2xl w-fit mb-6">
              <img src={logoSicam} alt="SICAM" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Société Industrielle de Conserves Alimentaires de Medjez El Bab. Filiale du Groupe Bayahi, fondée en 1969.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <span>Medjez El Bab, Tunisie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <span>+216 71 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <span>contact@sicam.com.tn</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-white mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Notre Histoire", href: "/notre-histoire" },
                { label: "Nos Valeurs", href: "/nos-valeurs" },
                { label: "Nos Produits", href: "/nos-produits" },
                { label: "Certifications", href: "/certifications" },
                { label: "Programme ZRP", href: "/zrp" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold text-white mb-6">Notre engagement</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              SICAM, l'excellence tunisienne au service de la vie. Premier transformateur de tomate en Tunisie, présent dans plus de 30 pays.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Première entreprise arabe et africaine certifiée ZRP pour le double concentré de tomates.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SICAM - Société Industrielle de Conserves Alimentaires. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/SICAMTunisia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all" data-testid="link-facebook">
              <SiFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/sicam_tunisia_officiel?igsh=amlpZnk1cjhzbWF5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all" data-testid="link-instagram">
              <SiInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/sicam-tunisia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all" data-testid="link-linkedin">
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
