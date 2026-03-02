import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

const navLinks = [
  { href: "/", label: "Accueil" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/90 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 z-50">
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
          className="lg:hidden z-50 p-2 text-foreground rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-6 text-xl font-semibold mt-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block w-full text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <Link href="/zrp" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full h-14 text-lg">
                Découvrir le programme ZRP
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
