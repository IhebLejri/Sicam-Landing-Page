import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import contestImg from "@assets/1920X1080_1780948446649.jpg";

const FB_URL = "https://www.facebook.com/SICAMTunisia";
const IG_URL = "https://www.instagram.com/sicam_tunisia_officiel";

export function ContestPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("sicam_contest_seen");
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function handleClose() {
    sessionStorage.setItem("sicam_contest_seen", "1");
    setOpen(false);
  }

  function handleClick() {
    window.open(FB_URL, "_blank", "noopener,noreferrer");
    window.open(IG_URL, "_blank", "noopener,noreferrer");
  }

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
          onClick={handleClose}
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
            <button
              onClick={handleClose}
              className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:text-primary hover:shadow-xl transition-all"
              aria-label="Fermer"
              data-testid="btn-close-contest"
            >
              <X size={18} />
            </button>

            <button
              onClick={handleClick}
              className="block w-full rounded-2xl overflow-hidden cursor-pointer focus:outline-none group"
              aria-label="Voir le jeu concours sur les réseaux sociaux"
              data-testid="btn-contest-social"
            >
              <img
                src={contestImg}
                alt="Jeu concours SICAM — Chajja3, Sannaf w Irbah"
                className="w-full h-auto block group-hover:scale-[1.015] transition-transform duration-300"
              />
            </button>

            <div className="flex gap-3 mt-3 justify-center">
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] hover:bg-[#1565d8] text-white text-sm font-semibold rounded-full shadow transition-colors"
                data-testid="link-contest-fb"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                Facebook
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:opacity-90 text-white text-sm font-semibold rounded-full shadow transition-opacity"
                data-testid="link-contest-ig"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
