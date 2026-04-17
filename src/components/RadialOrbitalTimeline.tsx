"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  BarChart,
  PenTool,
  CheckCircle,
  Upload,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: "step-1",
    title: "Förstudie",
    subtitle: "Strategisk Kartläggning",
    description:
      "Vi genomför en djupgående analys av er organisation och identifierar de finansieringsmöjligheter som ger högst avkastning på investerad tid.",
    icon: Search,
  },
  {
    id: "step-2",
    title: "Offert",
    subtitle: "Transparent Åtagande",
    description:
      "Ett skräddarsytt förslag med tydlig omfattning, investering och förväntad avkastning. Inga dolda kostnader, inga överraskningar.",
    icon: FileText,
  },
  {
    id: "step-3",
    title: "Djupanalys",
    subtitle: "Navigera Komplexiteten",
    description:
      "Vi dissekerar ert projekt mot programmets utvärderingskriterier och bygger ett oantastligt business case.",
    icon: BarChart,
  },
  {
    id: "step-4",
    title: "Skrivfas",
    subtitle: "Beprövad Metodik",
    description:
      "Vårt team formulerar en ansökan med precision och auktoritet — varje mening optimerad för maximal impact hos granskaren.",
    icon: PenTool,
  },
  {
    id: "step-5",
    title: "Granskning",
    subtitle: "Kvalitetssäkring",
    description:
      "Rigorös intern granskning mot bedömningskriterierna. Vi lämnar inget åt slumpen innan ansökan når beslutfattaren.",
    icon: CheckCircle,
  },
  {
    id: "step-6",
    title: "Inlämning",
    subtitle: "Exekvering",
    description:
      "Vi hanterar all kommunikation med myndigheten och säkerställer att varje komplettering stärker ert ärende.",
    icon: Upload,
  },
  {
    id: "step-7",
    title: "Genomförande",
    subtitle: "Realiserad Avkastning",
    description:
      "Projektet startar. Vi stöttar er genom rapportering och administration för att säkerställa full utbetalning.",
    icon: Play,
  },
];

export default function RadialOrbitalTimeline() {
  const [hoveredStepId, setHoveredStepId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(210);

  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 768 ? 140 : 210);
    update();
    setMounted(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const activeStep = processSteps.find((s) => s.id === hoveredStepId);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[4/3] flex items-center justify-center py-12">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[280px] h-[280px] bg-brand-primary/10 blur-[100px] rounded-full" />
      </div>

      {/* Orbital ring */}
      <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] border border-white/[0.06] rounded-full pointer-events-none" />
      <div className="absolute w-[282px] h-[282px] md:w-[422px] md:h-[422px] border border-white/[0.03] rounded-full pointer-events-none" />

      {/* Center content */}
      <div className="absolute flex flex-col items-center text-center pointer-events-none z-20 px-8 max-w-[240px] md:max-w-[280px]">
        <AnimatePresence mode="wait">
          {activeStep ? (
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-2">
                {activeStep.subtitle}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
                {activeStep.title}
              </h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed font-medium">
                {activeStep.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-primary/60 mb-2">
                Vår Process
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white/80 mb-3 tracking-tight">
                7 steg till framgång
              </h3>
              <p className="text-xs md:text-sm text-white/30 leading-relaxed font-medium">
                Hovra över ett steg för att utforska vår beprövade metodik.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Orbital nodes */}
      <div className="relative w-full h-full flex items-center justify-center">
        {mounted && processSteps.map((step, index) => {
          const totalSteps = processSteps.length;
          const angle = (index / totalSteps) * Math.PI * 2 - Math.PI / 2;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const isActive = hoveredStepId === step.id;
          const hasHover = hoveredStepId !== null;
          const isInactive = hasHover && !isActive;

          return (
            <motion.div
              key={step.id}
              className="absolute z-10"
              style={{ x, y }}
              onMouseEnter={() => setHoveredStepId(step.id)}
              onMouseLeave={() => setHoveredStepId(null)}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  opacity: isInactive ? 0.3 : 1,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="cursor-pointer group"
              >
                {/* Glow ring on hover */}
                {isActive && (
                  <motion.div
                    layoutId="active-ring"
                    className="absolute -inset-2 rounded-full border border-brand-primary/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div
                  className={cn(
                    "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all duration-300",
                    isActive
                      ? "bg-white/10 border-brand-primary/50 text-white shadow-[0_0_24px_rgba(46,117,182,0.2)]"
                      : "bg-white/[0.04] border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
                  )}
                >
                  <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Label below node */}
                <motion.div
                  animate={{ opacity: isInactive ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap"
                >
                  <span
                    className={cn(
                      "text-[10px] md:text-xs font-black uppercase tracking-[0.15em] transition-colors duration-300",
                      isActive ? "text-brand-primary" : "text-white/30"
                    )}
                  >
                    {step.title}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
