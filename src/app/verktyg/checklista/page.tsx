"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Circle, 
  Info,
  Zap,
  ChevronRight,
  ShieldCheck,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: "prep",
    title: "Förberedelser",
    tasks: [
      { id: "p1", text: "Verifiera organisationsform (SME-status etc.)", tip: "EU:s definition av SME beror på både anställda och omsättning/balansräkning." },
      { id: "p2", text: "Registrera organisationen i Funding & Tenders Portal (PIC-nummer)", tip: "Detta tar tid — gör det direkt." },
      { id: "p3", text: "Läs utlysningens text och 'Work Programme' i detalj", tip: "Missa inte 'Expected Impacts' — det är här de flesta faller." },
    ]
  },
  {
    id: "content",
    title: "Innehåll & Skrivande",
    tasks: [
      { id: "c1", text: "Formulera 'Excellence' (Innovationens höjd)", tip: "Beskriv varför er lösning är unik jämfört med state-of-the-art." },
      { id: "c2", text: "Definiera 'Impact' (Marknad & Samhällsnytta)", tip: "Var konkret med siffror — antal användare, sänkt CO2, sparade kronor." },
      { id: "c3", text: "Skapa 'Implementation' (Projektplan & Team)", tip: "Visa att ni har rätt kompetens och en realistisk tidsplan." },
    ]
  },
  {
    id: "admin",
    title: "Budget & Administration",
    tasks: [
      { id: "a1", text: "Detaljera budget per arbetspaket", tip: "Säkerställ att personalresurser matchar projektets omfattning." },
      { id: "a2", text: "Få godkännande från partners (vid konsortier)", tip: "Samla in Letter of Intent eller Mandates tidigt." },
      { id: "a3", text: "Slutlig teknisk granskning", tip: "Låt någon som inte skrivit texten läsa igenom den." },
    ]
  }
];

export default function ChecklistaPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const toggleTask = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const totalTasks = steps.reduce((acc, step) => acc + step.tasks.length, 0);
  const progress = Math.round((completed.length / totalTasks) * 100);

  return (
    <div className="bg-background-muted min-h-screen py-16 md:py-24">
      <div className="container-tight max-w-4xl">
        <Link href="/verktyg" className="inline-flex items-center gap-2 text-sm font-bold text-brand-neutral hover:text-brand-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Tillbaka till verktyg
        </Link>

        <div className="text-center mb-16">
          <h1 className="mb-4">Ansöknings-checklista</h1>
          <p className="text-brand-neutral text-lg">
            Följ stegen för en komplett och kvalitetssäkrad EU-ansökan. 
            Baserat på seniora experters beprövade metodik.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 mb-12 shadow-xl shadow-brand-deep/5 border border-gray-100">
           <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs font-bold text-brand-neutral uppercase tracking-widest mb-1">Status för din ansökan</p>
                <p className="text-3xl font-black text-brand-deep">{progress}% Färdig</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-brand-neutral uppercase tracking-widest mb-1">Slutförda uppgifter</p>
                <p className="text-xl font-bold text-brand-primary">{completed.length} av {totalTasks}</p>
              </div>
           </div>
           <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-success"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
           </div>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                activeStep === idx 
                ? "border-brand-primary bg-brand-primary/5 text-brand-primary" 
                : "border-transparent bg-white text-brand-neutral hover:bg-gray-50"
              }`}
            >
              {idx + 1}. {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {steps[activeStep].tasks.map((task) => {
              const isCompleted = completed.includes(task.id);
              return (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 group ${
                    isCompleted 
                    ? "border-brand-success/20 bg-brand-success/5" 
                    : "border-white bg-white hover:border-brand-primary/20 shadow-sm"
                  }`}
                >
                  <div className={`mt-1 flex-shrink-0 ${isCompleted ? "text-brand-success" : "text-gray-300 group-hover:text-brand-primary/40"}`}>
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-lg mb-2 transition-all ${isCompleted ? "text-brand-success/60 line-through" : "text-brand-deep"}`}>
                      {task.text}
                    </p>
                    <div className="flex gap-2 items-start text-xs text-brand-neutral leading-relaxed">
                       <ShieldCheck className="w-4 h-4 text-brand-primary flex-shrink-0" />
                       <p><span className="font-bold text-brand-primary uppercase tracking-widest mr-1">Senior-tips:</span> {task.tip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Final CTA */}
        <div className="mt-20 bg-brand-deep rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden text-center">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="relative z-10">
              <h2 className="text-white mb-6">Redo för en sista granskning?</h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                Innan ni skickar in — låt oss göra en Reality Check. Vi granskar 
                er ansökan med samma ögon som EU-kommissionens bedömare.
              </p>
              <Button asChild size="lg" className="bg-brand-success hover:bg-opacity-90 text-white px-10 h-16 rounded-xl font-bold shadow-2xl">
                <Link href="/kontakt" className="flex items-center gap-2">
                  Boka Reality Check
                  <Zap className="w-4 h-4" />
                </Link>
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
