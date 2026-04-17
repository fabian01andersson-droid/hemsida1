"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2, Check } from "lucide-react";

interface PremiumButtonProps {
  variant?: "primary" | "secondary" | "black" | "outline" | "ghost";
  successText?: string;
  onAction?: () => Promise<void> | void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const PremiumButton = ({
  className,
  variant = "primary",
  successText = "Verifierad",
  onAction,
  children,
  disabled,
  type,
}: PremiumButtonProps) => {
  const [buttonState, setButtonState] = useState<"idle" | "loading" | "success">("idle");

  const handleInteraction = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonState !== "idle") return;
    
    setButtonState("loading");
    
    // Apple-inspirerad fördröjning för "kvalitetskänsla" (800-1200ms)
    const startTime = Date.now();
    if (onAction) await onAction();
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(1000 - elapsed, 0);
    
    setTimeout(() => {
      setButtonState("success");
      setTimeout(() => setButtonState("idle"), 3000);
    }, remaining);
  }, [buttonState, onAction]);

  const variants = {
    primary: "bg-[#38A169] text-white hover:bg-[#2D8A56] shadow-2xl shadow-green-900/20",
    secondary: "bg-blue-600 text-white hover:bg-blue-500 shadow-2xl shadow-blue-500/20",
    black: "bg-[#0a0a0c] text-white hover:bg-black shadow-2xl shadow-black/40",
    outline: "bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50",
  };

  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.01, transition: { type: "spring", stiffness: 400, damping: 17 } }}
      whileTap={{ scale: 0.96 }}
      onClick={handleInteraction}
      className={cn(
        "relative h-16 px-10 rounded-[2rem] font-bold text-lg transition-all duration-500 flex items-center justify-center overflow-hidden group",
        variants[variant],
        className
      )}
      disabled={buttonState !== "idle" || disabled}
      type={type}
    >
      <AnimatePresence mode="wait">
        {buttonState === "loading" ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-3"
          >
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm uppercase tracking-[0.2em] font-black">Analyserar</span>
          </motion.div>
        ) : buttonState === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] font-black">{successText}</span>
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Shine Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full" />
    </motion.button>
  );
};
