import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/notre-histoire", label: "Notre Histoire" },
  { href: "/nos-valeurs", label: "Nos Valeurs" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)] py-3"
            : "bg-white/95 backdrop-blur-sm py-5"
        )}
      >
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img
              src={logoSicam}
              alt="SICAM Logo"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                isScrolled ? "h-9 md:h-11" : "h-10 md:h-14"
              )}
            />
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-[13px] font-display font-semibold uppercase tracking-[0.08em] transition-all duration-300 relative",
                      location === link.href
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute bottom-0 left-4 right-4 h-[2px] bg-primary transition-all duration-300",
                      location === link.href ? "opacity-100" : "opacity-0"
                    )} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            data-testid="mobile-menu-toggle"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[55] lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        data-testid="mobile-menu-overlay"
      />

      <aside
        id="mobile-nav-drawer"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-[60] lg:hidden bg-white flex flex-col transition-transform duration-300 ease-in-out shadow-[-8px_0_30px_rgba(0,0,0,0.08)]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileMenuOpen}
        data-testid="mobile-menu"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-slate-100/80">
          <img src={logoSicam} alt="SICAM" className="h-9 w-auto" />
          <button
            className="p-2 text-foreground/50 hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            data-testid="mobile-menu-close"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <ul className="flex flex-col px-4 py-8 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "block w-full px-4 py-3.5 text-[15px] font-display font-semibold tracking-wide transition-colors rounded-lg",
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-slate-50/50"
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
