"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Zap, Building2, Factory, Layers, Target, Wallet, Sparkles } from "lucide-react";

type Question = {
  id: string; title: string; icon: React.ElementType;
  options: { label: string; value: string }[];
};

const questions: Question[] = [
  { id: "orgType", title: "Organisationstyp", icon: Building2, options: [
    { label: "Företag (SME)", value: "sme" }, { label: "Storföretag", value: "large" },
    { label: "Kommun / Region", value: "public" }, { label: "Forskningsinstitut", value: "research" },
    { label: "Ideell organisation", value: "ngo" },
  ]},
  { id: "industry", title: "Bransch", icon: Factory, options: [
    { label: "Teknik / IT", value: "tech" }, { label: "Hälsa / Medtech", value: "health" },
    { label: "Miljö / Klimat", value: "environment" }, { label: "Energi", value: "energy" },
    { label: "Transport", value: "transport" }, { label: "Tillverkning", value: "manufacturing" },
    { label: "Sociala frågor", value: "social" }, { label: "Kultur / Media", value: "culture" },
  ]},
  { id: "stage", title: "Projektstadium", icon: Layers, options: [
    { label: "Idé / Koncept", value: "idea" }, { label: "Tidig fas / Prototyp", value: "early" },
    { label: "Pågående / Pilot", value: "ongoing" }, { label: "Skalning / Kommersialisering", value: "scale" },
  ]},
  { id: "purpose", title: "Huvudsyfte", icon: Target, options: [
    { label: "Forskning & innovation", value: "research" }, { label: "Digital transformation", value: "digital" },
    { label: "Grön omställning", value: "green" }, { label: "Social inkludering", value: "social" },
    { label: "Regional utveckling", value: "regional" }, { label: "Internationellt samarbete", value: "international" },
  ]},
  { id: "budget", title: "Projektbudget", icon: Wallet, options: [
    { label: "Under 500 000 EUR", value: "small" }, { label: "500 000 – 2M EUR", value: "medium" },
    { label: "2M – 10M EUR", value: "large" }, { label: "Över 10M EUR", value: "xlarge" },
  ]},
];

type Programme = { name: string; slug: string; budget: string; desc: string; scores: Record<string, Record<string, number>> };

const programmes: Programme[] = [
  { name: "Horizon Europe", slug: "horizon-europe", budget: "95.5 mdr EUR", desc: "EU:s flaggskepp för forskning och innovation.",
    scores: { orgType: { sme: 9, large: 8, research: 10, public: 6, ngo: 4 }, industry: { tech: 9, health: 9, environment: 8, energy: 9, transport: 7, manufacturing: 8, social: 5, culture: 3 }, stage: { idea: 7, early: 9, ongoing: 8, scale: 6 }, purpose: { research: 10, digital: 7, green: 8, social: 5, regional: 4, international: 9 }, budget: { small: 4, medium: 7, large: 10, xlarge: 9 }}},
  { name: "Digital Europe", slug: "digital-europe", budget: "7.5 mdr EUR", desc: "AI, cybersäkerhet och digital kompetens.",
    scores: { orgType: { sme: 9, large: 7, research: 8, public: 8, ngo: 3 }, industry: { tech: 10, health: 7, environment: 5, energy: 6, transport: 5, manufacturing: 7, social: 4, culture: 4 }, stage: { idea: 4, early: 7, ongoing: 9, scale: 8 }, purpose: { research: 6, digital: 10, green: 5, social: 4, regional: 5, international: 7 }, budget: { small: 7, medium: 9, large: 8, xlarge: 5 }}},
  { name: "LIFE", slug: "life", budget: "5.4 mdr EUR", desc: "Miljö- och klimatåtgärder.",
    scores: { orgType: { sme: 7, large: 6, research: 7, public: 9, ngo: 9 }, industry: { tech: 4, health: 3, environment: 10, energy: 8, transport: 5, manufacturing: 5, social: 4, culture: 2 }, stage: { idea: 5, early: 7, ongoing: 9, scale: 8 }, purpose: { research: 5, digital: 3, green: 10, social: 5, regional: 7, international: 6 }, budget: { small: 6, medium: 9, large: 8, xlarge: 4 }}},
  { name: "ESF+", slug: "esf-plus", budget: "99 mdr EUR", desc: "Sysselsättning och social inkludering.",
    scores: { orgType: { sme: 5, large: 4, research: 5, public: 10, ngo: 9 }, industry: { tech: 4, health: 5, environment: 4, energy: 3, transport: 3, manufacturing: 4, social: 10, culture: 5 }, stage: { idea: 6, early: 7, ongoing: 9, scale: 7 }, purpose: { research: 4, digital: 5, green: 4, social: 10, regional: 8, international: 5 }, budget: { small: 8, medium: 9, large: 7, xlarge: 3 }}},
  { name: "Innovation Fund", slug: "innovationsfonden", budget: "40 mdr EUR", desc: "Storskalig demonstration av ren teknik.",
    scores: { orgType: { sme: 7, large: 10, research: 6, public: 4, ngo: 2 }, industry: { tech: 7, health: 3, environment: 9, energy: 10, transport: 7, manufacturing: 9, social: 2, culture: 1 }, stage: { idea: 3, early: 6, ongoing: 8, scale: 10 }, purpose: { research: 6, digital: 5, green: 10, social: 2, regional: 4, international: 7 }, budget: { small: 2, medium: 5, large: 8, xlarge: 10 }}},
  { name: "Interreg", slug: "interreg", budget: "8 mdr EUR", desc: "Gränsöverskridande samarbete.",
    scores: { orgType: { sme: 6, large: 5, research: 8, public: 10, ngo: 7 }, industry: { tech: 6, health: 6, environment: 7, energy: 6, transport: 6, manufacturing: 5, social: 7, culture: 6 }, stage: { idea: 5, early: 7, ongoing: 8, scale: 6 }, purpose: { research: 6, digital: 6, green: 7, social: 7, regional: 10, international: 10 }, budget: { small: 8, medium: 9, large: 6, xlarge: 3 }}},
  { name: "Creative Europe", slug: "creative-europe", budget: "2.4 mdr EUR", desc: "Kultur, media och kreativa näringar.",
    scores: { orgType: { sme: 7, large: 4, research: 4, public: 7, ngo: 8 }, industry: { tech: 3, health: 2, environment: 2, energy: 1, transport: 1, manufacturing: 2, social: 5, culture: 10 }, stage: { idea: 6, early: 7, ongoing: 8, scale: 6 }, purpose: { research: 3, digital: 5, green: 3, social: 6, regional: 5, international: 8 }, budget: { small: 9, medium: 7, large: 4, xlarge: 2 }}},
  { name: "ERUF / ERDF", slug: "eruf", budget: "226 mdr EUR", desc: "Regional ekonomisk utveckling.",
    scores: { orgType: { sme: 8, large: 6, research: 6, public: 9, ngo: 5 }, industry: { tech: 7, health: 5, environment: 7, energy: 6, transport: 6, manufacturing: 7, social: 5, culture: 4 }, stage: { idea: 5, early: 7, ongoing: 8, scale: 8 }, purpose: { research: 6, digital: 7, green: 7, social: 5, regional: 10, international: 4 }, budget: { small: 7, medium: 8, large: 8, xlarge: 6 }}},
];

function calcScores(answers: Record<string, string>) {
  return programmes
    .map((p) => {
      let total = 0, count = 0;
      for (const [qId, answer] of Object.entries(answers)) {
        if (p.scores[qId]?.[answer] !== undefined) {
          total += p.scores[qId][answer];
          count++;
        }
      }
      return { ...p, score: count > 0 ? Math.round((total / (count * 10)) * 100) : 0 };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export default function MatchaPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = questions[step];
  const results = calcScores(answers);

  const selectOption = (value: string) => {
    const updated = { ...answers, [currentQ.id]: value };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  if (showResults) {
    return (
      <div className="bg-white min-h-screen">
        <section className="section-padding">
          <div className="container-apple px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-center mb-16">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                  <Sparkles size={32} className="text-green-600" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6">Era resultat.</h1>
                <p className="text-xl text-slate-400 font-medium">Baserat på era svar har vi identifierat de bästa programmen.</p>
              </div>

              <div className="space-y-6">
                {results.map((r, i) => (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/program/${r.slug}`} className="group block">
                      <div className="bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl ${
                          i === 0 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                        }`}>
                          {r.score}%
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black mb-1">{r.name}</h3>
                          <p className="text-sm text-slate-400">{r.desc}</p>
                        </div>
                        <div className="hidden md:block text-right">
                          <p className="text-sm font-bold text-slate-900">{r.budget}</p>
                          <span className="text-blue-600 text-sm font-bold flex items-center gap-1 justify-end mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Läs mer <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center space-y-4">
                <Link href="/kontakt" className="bg-black text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-800">
                  Boka Reality Check <ArrowRight size={18} />
                </Link>
                <br />
                <button onClick={() => { setShowResults(false); setStep(0); setAnswers({}); }} className="text-sm font-bold text-slate-400 hover:text-slate-900 mt-4 inline-block">
                  Gör om testet
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="section-padding">
        <div className="container-apple px-6 max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                EU-STÖD SCANNER
              </p>
              <p className="text-sm font-bold text-slate-400">{step + 1} / {questions.length}</p>
            </div>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <currentQ.icon size={22} className="text-slate-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black">{currentQ.title}</h2>
              </div>

              <div className="grid gap-3">
                {currentQ.options.map((opt) => {
                  const selected = answers[currentQ.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => selectOption(opt.value)}
                      className={`text-left rounded-2xl p-6 border-2 transition-all duration-300 ${
                        selected
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">{opt.label}</span>
                        {selected && <CheckCircle2 size={20} className="text-blue-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-8 text-sm font-bold text-slate-400 hover:text-slate-900 flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Tillbaka
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
