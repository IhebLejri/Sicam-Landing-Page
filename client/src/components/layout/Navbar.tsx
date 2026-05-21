import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

const productSubMenu = [
  { label: "Tomates", anchor: "cat-tomates", desc: "10 références" },
  { label: "Harissa", anchor: "cat-harissa", desc: "4 formats" },
  { label: "Confitures", anchor: "cat-confitures", desc: "4 saveurs" },
  { label: "Certifié Zéro Résidu de Pesticides — ZRP", anchor: "cat-zrp", desc: "5 références certifiées" },
];

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/notre-histoire", label: "Notre Histoire" },
  { href: "/nos-valeurs", label: "Nos Valeurs" },
  { href: "/nos-produits", label: "Nos Produits", hasMenu: true },
  { href: "/certifications", label: "Certifications" },
  { href: "/zrp", label: "Programme ZRP" },
];

function scrollToAnchor(anchor: string) {
  setTimeout(() => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 250);
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuLiRef = useRef<HTMLLIElement>(null);
  const [menuOffsetLeft, setMenuOffsetLeft] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (menuLiRef.current) {
        setMenuOffsetLeft(menuLiRef.current.getBoundingClientRect().left);
      }
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setShowProductsMenu(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => { document.body.style.overflowY = ""; };
  }, [mobileMenuOpen]);

  const handleMenuEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setShowProductsMenu(true);
  };

  const handleMenuLeave = () => {
    closeTimeout.current = setTimeout(() => setShowProductsMenu(false), 150);
  };

  const isProductsActive = location === "/nos-produits" || location.startsWith("/nos-produits/");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3"
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.hasMenu) {
                  return (
                    <li
                      key={link.label}
                      className="relative"
                      ref={menuLiRef}
                      onMouseEnter={handleMenuEnter}
                      onMouseLeave={handleMenuLeave}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 text-[13px] font-display font-semibold uppercase tracking-[0.08em] transition-all duration-300 relative",
                          isProductsActive
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        )}
                        data-testid="nav-nos-produits"
                      >
                        {link.label}
                        <ChevronDown
                          size={12}
                          className={cn("transition-transform duration-200", showProductsMenu && "rotate-180")}
                        />
                        <span className={cn(
                          "absolute bottom-0 left-4 right-4 h-[2px] bg-primary transition-all duration-300",
                          isProductsActive ? "opacity-100" : "opacity-0"
                        )} />
                      </Link>
                    </li>
                  );
                }

                return (
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
                );
              })}
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

        {/* ── Full-width mega-menu (desktop only) ── */}
        <div
          className={cn(
            "absolute left-0 right-0 top-full hidden lg:block shadow-2xl transition-all duration-200 origin-top",
            showProductsMenu
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          )}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
          data-testid="mega-menu"
        >
          {/* Categories grid — starts exactly under "Nos Produits" nav link */}
          <div className="bg-primary">
            <div className="py-8" style={{ paddingLeft: menuOffsetLeft }}>
              <div className="grid grid-cols-2 gap-x-16 gap-y-2 w-72">
                {productSubMenu.map(item => (
                  <Link
                    key={item.anchor}
                    href={`/nos-produits#${item.anchor}`}
                    onClick={() => {
                      setShowProductsMenu(false);
                      scrollToAnchor(item.anchor);
                    }}
                    className="group flex flex-col px-2 py-3 rounded-xl hover:bg-white/10 transition-colors"
                    data-testid={`mega-${item.anchor}`}
                  >
                    <span className="text-white font-bold uppercase tracking-[0.12em] text-[12px] mb-1 leading-snug">
                      {item.label}
                    </span>
                    <span className="text-white/40 text-[11px] font-medium group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="bg-[#b80410] px-8 py-3 flex justify-center items-center gap-8">
            <span className="text-white/50 text-[11px] font-medium">18 références — 100 % tunisien</span>
            <Link
              href="/nos-produits"
              onClick={() => setShowProductsMenu(false)}
              className="text-white text-[11px] font-bold hover:text-white/80 transition-colors flex items-center gap-1.5"
              data-testid="mega-voir-tout"
            >
              Voir toute la gamme <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[55] lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        data-testid="mobile-menu-overlay"
      />

      {/* Mobile drawer — right:0 toujours (bord droit = bord viewport, jamais au-delà).
           Masquage via clip-path pour ne jamais dépasser la largeur du viewport. */}
      <aside
        id="mobile-nav-drawer"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-[60] lg:hidden bg-white flex flex-col",
          "shadow-[-8px_0_30px_rgba(0,0,0,0.08)]",
          "transition-[clip-path,opacity] duration-300 ease-in-out",
          mobileMenuOpen
            ? "[clip-path:inset(0_0_0_0%)] opacity-100 pointer-events-auto"
            : "[clip-path:inset(0_0_0_100%)] opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileMenuOpen}
        data-testid="mobile-menu"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-slate-100/80 shrink-0">
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

          <ul className="flex flex-col px-4 py-6 gap-1 overflow-y-auto flex-1">
            {navLinks.map((link) => {
              if (link.hasMenu) {
                return (
                  <li key={link.label}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={cn(
                          "flex-1 px-4 py-3.5 text-[15px] font-display font-semibold tracking-wide transition-colors rounded-lg rounded-r-none",
                          isProductsActive
                            ? "text-primary bg-primary/5"
                            : "text-foreground/70 hover:text-foreground hover:bg-slate-50"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-link-nos-produits"
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setMobileProductsOpen(o => !o)}
                        className={cn(
                          "px-3 py-3.5 rounded-lg rounded-l-none border-l border-slate-100 transition-colors",
                          isProductsActive ? "text-primary bg-primary/5" : "text-foreground/50 hover:bg-slate-50"
                        )}
                        aria-label="Voir les catégories"
                        data-testid="mobile-products-toggle"
                      >
                        <ChevronDown
                          size={16}
                          className={cn("transition-transform duration-200", mobileProductsOpen && "rotate-180")}
                        />
                      </button>
                    </div>

                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      mobileProductsOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <ul className="pl-4 pt-1 pb-2 flex flex-col gap-0.5">
                        {productSubMenu.map(item => (
                          <li key={item.anchor}>
                            <Link
                              href={`/nos-produits#${item.anchor}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                scrollToAnchor(item.anchor);
                              }}
                              className="block px-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                              data-testid={`mobile-submenu-${item.anchor}`}
                            >
                              <span className="block text-[13px]">{item.label}</span>
                              <span className="text-[11px] text-slate-400 font-normal">{item.desc}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
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
              );
            })}
          </ul>
      </aside>
    </>
  );
}
