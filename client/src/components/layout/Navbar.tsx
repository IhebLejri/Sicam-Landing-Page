import { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/zrp", label: "Programme ZRP" },
];

const DRAWER_WIDTH = "70vw";

const MobileMenuContext = createContext({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggle: () => setIsOpen(v => !v), close: () => setIsOpen(false) }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggle } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/90 backdrop-blur-sm py-5"
        )}
        style={{
          transform: isOpen ? `translateX(-${DRAWER_WIDTH})` : "translateX(0)",
          transition: "transform 0.3s ease-in-out",
        }}
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

            <Link href="/zrp">
              <Button className="font-bold">
                Découvrir le programme ZRP
              </Button>
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-foreground rounded-full"
            onClick={toggle}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55] lg:hidden"
          onClick={toggle}
          data-testid="mobile-menu-overlay"
        />
      )}

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[60] lg:hidden bg-white shadow-2xl flex flex-col"
        )}
        style={{
          width: DRAWER_WIDTH,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
        data-testid="mobile-menu"
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-slate-100">
          <img src={logoSicam} alt="SICAM" className="h-8 w-auto" />
          <button
            className="p-2 text-foreground rounded-full hover:bg-slate-100 transition-colors"
            onClick={toggle}
            aria-label="Close menu"
            data-testid="mobile-menu-close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col px-5 py-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "block w-full px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                  location === link.href
                    ? "text-primary bg-red-50"
                    : "text-slate-700 hover:text-primary hover:bg-slate-50"
                )}
                onClick={toggle}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-5 pb-6">
          <Link href="/zrp" onClick={toggle}>
            <Button className="w-full h-12 text-base font-bold" data-testid="mobile-cta-zrp">
              Découvrir le programme ZRP
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
