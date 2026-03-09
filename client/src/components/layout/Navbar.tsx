import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/notre-histoire", label: "Notre Histoire" },
  { href: "/nos-produits", label: "Nos Produits" },
  { href: "/certifications", label: "Certifications" },
  { href: "/zrp", label: "Programme ZRP" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/90 backdrop-blur-sm py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img
              src={logoSicam}
              alt="SICAM Logo"
              className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative group",
                      location === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden p-2 text-foreground rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            data-testid="mobile-menu-toggle"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[55] lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        data-testid="mobile-menu-overlay"
      />

      <aside
        id="mobile-nav-drawer"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[75%] max-w-[300px] z-[60] lg:hidden bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileMenuOpen}
        data-testid="mobile-menu"
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-100">
          <img src={logoSicam} alt="SICAM" className="h-8 w-auto" />
          <button
            className="p-2 text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            data-testid="mobile-menu-close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col px-4 py-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "block w-full px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-slate-700 hover:text-primary hover:bg-slate-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

      </aside>
    </>
  );
}
