"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-50"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2rem] p-6 shadow-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-brand-deep mb-1">Sekretess & Cookies</h3>
                <p className="text-xs text-brand-neutral leading-relaxed">
                  Vi använder cookies för att optimera din upplevelse och analysera trafik. All data hanteras enligt GDPR.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-brand-deep transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={accept}
                className="flex-1 bg-brand-deep hover:bg-brand-primary text-white text-xs font-bold h-10 rounded-xl"
              >
                Acceptera alla
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsVisible(false)}
                className="flex-1 border-gray-200 text-brand-deep text-xs font-bold h-10 rounded-xl"
              >
                Inställningar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
