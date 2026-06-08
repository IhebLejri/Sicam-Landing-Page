import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import contestImg from "@assets/1920X1080_1780948446649.jpg";

const FB_URL = "https://www.facebook.com/SICAMTunisia";
const IG_URL = "https://www.instagram.com/sicam_tunisia_officiel";

export function ContestPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="contest-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            key="contest-card"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-3xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 z-30 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:text-primary hover:shadow-xl transition-all"
              aria-label="Fermer"
              data-testid="btn-close-contest"
            >
              <X size={18} />
            </button>

            {/* Image + icônes superposées */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={contestImg}
                alt="Jeu concours SICAM"
                className="w-full h-auto block"
                draggable={false}
              />

              {/* Zone cliquable Facebook — transparente, large pour faciliter le clic */}
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="absolute z-20 w-[6%] aspect-square cursor-pointer"
                style={{ left: "36.3%", top: "67%", transform: "translate(-50%, -50%)" }}
                aria-label="Facebook SICAM"
                data-testid="link-contest-fb"
              />

              {/* Zone cliquable Instagram — transparente, large pour faciliter le clic */}
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="absolute z-20 w-[6%] aspect-square cursor-pointer"
                style={{ left: "36%", top: "72.5%", transform: "translate(-50%, -50%)" }}
                aria-label="Instagram SICAM"
                data-testid="link-contest-ig"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
