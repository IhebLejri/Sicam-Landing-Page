import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { cn } from "@/lib/utils";

const COOKIE_KEY = "sicam_cookie_consent";

type ConsentChoice = "all" | "essential" | "custom" | null;

function getStoredConsent(): ConsentChoice {
  try {
    const val = localStorage.getItem(COOKIE_KEY);
    if (val === "all" || val === "essential" || val === "custom") return val;
  } catch {}
  return null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(choice: ConsentChoice) {
    try {
      localStorage.setItem(COOKIE_KEY, choice || "essential");
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4" data-testid="cookie-overlay">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => accept("essential")}
      />

      <div className={cn(
        "relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden animate-fade-in-up"
      )} data-testid="cookie-banner">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Cookie size={20} className="text-primary" />
              </div>
              <h2 className="font-serif font-bold text-lg text-foreground">Ce site web utilise des cookies.</h2>
            </div>
            <button
              onClick={() => accept("essential")}
              className="p-1.5 text-foreground/30 hover:text-foreground/60 transition-colors rounded-lg"
              aria-label="Fermer"
              data-testid="cookie-close"
            >
              <X size={18} />
            </button>
          </div>

          <div className={cn("text-sm text-foreground/60 leading-relaxed mb-6", showDetails ? "max-h-[300px] overflow-y-auto" : "")}>
            <p className="mb-3">
              Ce site Web utilise des cookies techniques pour rendre la navigation possible. Avec votre consentement, le site Web utilise d'autres types de cookies, y compris des cookies analytiques, pour contrôler et évaluer la performance du site.
            </p>
            {showDetails && (
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div>
                  <p className="font-semibold text-foreground/80 text-xs uppercase tracking-wider mb-1">Cookies essentiels</p>
                  <p className="text-xs text-foreground/50">Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground/80 text-xs uppercase tracking-wider mb-1">Cookies analytiques</p>
                  <p className="text-xs text-foreground/50">Nous aident à comprendre comment les visiteurs interagissent avec le site en collectant des informations de manière anonyme.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground/80 text-xs uppercase tracking-wider mb-1">Cookies de performance</p>
                  <p className="text-xs text-foreground/50">Utilisés pour améliorer les performances et l'expérience utilisateur du site.</p>
                </div>
              </div>
            )}
            <p className="mt-3 text-xs text-foreground/40">
              En cliquant sur « X », vous fermez la bannière et consentez au dépôt uniquement des cookies techniques nécessaires à la navigation sur le site Web.
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => accept("all")}
              className="w-full py-3.5 bg-primary text-white font-display font-semibold text-sm uppercase tracking-wider rounded-xl hover:bg-primary/90 transition-colors"
              data-testid="cookie-accept-all"
            >
              Tout autoriser
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full py-3.5 bg-white text-primary font-display font-semibold text-sm uppercase tracking-wider rounded-xl border-2 border-primary hover:bg-primary/5 transition-colors"
              data-testid="cookie-customize"
            >
              Personnaliser
            </button>
            <button
              onClick={() => accept("essential")}
              className="w-full py-3.5 bg-white text-primary font-display font-semibold text-sm uppercase tracking-wider rounded-xl border-2 border-primary hover:bg-primary/5 transition-colors"
              data-testid="cookie-refuse"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
