"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { ArrowRight, Zap, Star, LayoutGrid, TrendingUp, ShieldCheck, CheckCircle2, Users, FileText } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "842M", label: "SEK Säkrad Finansiering", suffix: "SEK" },
  { value: "68%", label: "Beviljandegrad", suffix: "" },
  { value: "127", label: "Genomförda Projekt", suffix: "+" },
  { value: "4.9", label: "Kundbetyg", suffix: "/5" },
];

const tools = [
  {
    icon: Zap,
    title: "EU-Stöd Scanner",
    desc: "Matcha er idé mot 400+ program med vår AI-motor. Resultat på sekunder.",
    href: "/matcha",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Budgetkalkylator",
    desc: "Beräkna hur mycket stöd ni kan få baserat på projekttyp och kostnader.",
    href: "/verktyg/kalkylator",
    color: "green",
  },
  {
    icon: CheckCircle2,
    title: "Ansökningschecklista",
    desc: "Säkerställ att ni har allt på plats innan er ansökan skickas in.",
    href: "/verktyg/checklista",
    color: "purple",
  },
];

const process = [
  { step: "01", title: "Reality Check", desc: "Kostnadsfri 15-minuters bedömning av ert projekts potential." },
  { step: "02", title: "Quick Scan", desc: "2-sidors analys av er idé mot aktuella EU-utlysningar." },
  { step: "03", title: "Ansökan", desc: "Full ansökningsskrivning av seniora EU-experter med AI-stöd." },
  { step: "04", title: "Beviljat", desc: "Post-award management, rapportering och efterlevnad." },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ━━━ HERO ━━━ */}
      <section className="section-padding flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-apple text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-10">
            Sveriges ledande EU-rådgivare
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] mb-12">
            Finansiering. <br />
            <span className="text-blue-600">Förenklat.</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-slate-400 max-w-2xl mx-auto mb-20 leading-relaxed">
            Vi kombinerar senior expertis med AI för att säkra icke-utspädande kapital till innovativa företag.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/kontakt">
              <PremiumButton variant="black" className="rounded-full px-12 h-16">
                Boka Reality Check <ArrowRight size={18} />
              </PremiumButton>
            </Link>
            <Link href="/matcha">
              <PremiumButton variant="outline" className="rounded-full px-12 h-16">
                Starta AI-scanner <Zap size={18} />
              </PremiumButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ━━━ LIVE METRICS ━━━ */}
      <section className="py-8 border-y border-slate-100">
        <div className="container-apple px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Live Data — Q2 2026
              </span>
            </div>
            <div className="flex items-center gap-12 md:gap-16">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">{s.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ BENTO GRID — TOOLS ━━━ */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">Verktyg för framgång.</h2>
            <p className="text-xl text-slate-400 font-medium">Allt ni behöver för att maximera era chanser.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={tool.href} className="group block h-full">
                  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                      tool.color === "blue" ? "bg-blue-50 text-blue-600" :
                      tool.color === "green" ? "bg-green-50 text-green-600" :
                      "bg-purple-50 text-purple-600"
                    }`}>
                      <tool.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{tool.title}</h3>
                    <p className="text-slate-400 flex-1 leading-relaxed">{tool.desc}</p>
                    <span className="flex items-center gap-2 text-blue-600 font-bold text-sm mt-8 group-hover:translate-x-2 transition-transform">
                      Öppna <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS ━━━ */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-8">Vår Metodik</p>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95]">
                Från idé till<br />beviljat bidrag.
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16">
                En beprövad process i fyra steg som maximerar era poäng och minimerar er administration.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-5xl font-black text-slate-900">68%</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Beviljandegrad</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-slate-900">842M</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Säkrat kapital (SEK)</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#f5f5f7] rounded-[2rem] p-8 flex gap-6 items-start hover:bg-slate-100 transition-colors"
                >
                  <span className="text-4xl font-black text-slate-200 shrink-0">{p.step}</span>
                  <div>
                    <h4 className="text-lg font-black mb-2">{p.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SERVICES OVERVIEW ━━━ */}
      <section className="section-padding bg-[#0a0a0c]">
        <div className="container-apple px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Premium rådgivning.</h2>
            <p className="text-xl text-white/40 font-medium">Transparent prissättning. Inga dolda kostnader.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quick Scan", price: "4 900 kr", desc: "2-sidors analys av er projektidé mot aktuella utlysningar.", badge: "Startpunkt" },
              { title: "Ansökningsskrivning", price: "Från 49 000 kr", desc: "Full ansökan till valfritt EU-program av seniora experter.", badge: "Mest populär" },
              { title: "Post-Award", price: "15 000 kr/mån", desc: "Löpande stöd med rapportering, efterlevnad och revision.", badge: "Trygghet" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-dark p-10 flex flex-col"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">{s.badge}</span>
                <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed flex-1 mb-8">{s.desc}</p>
                <p className="text-3xl font-black text-white mb-6">{s.price}</p>
                <Link href="/tjanster" className="text-sm font-bold text-blue-400 flex items-center gap-2 hover:text-blue-300">
                  Läs mer <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF ━━━ */}
      <section className="section-padding">
        <div className="container-apple px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">Bevisade resultat.</h2>
            <p className="text-xl text-slate-400 font-medium mb-20">Vi publicerar våra siffror. Ingen annan svensk konsult gör det.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f5f5f7] rounded-[2.5rem] p-10"
              >
                <p className="text-5xl font-black text-slate-900 mb-3">{s.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <Link href="/resultat" className="inline-flex items-center gap-2 text-blue-600 font-bold mt-12 hover:gap-4 transition-all">
            Se fullständig dashboard <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="section-padding border-t border-slate-100">
        <div className="container-apple px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95]">
              Redo att ta<br />nästa steg?
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-16 max-w-xl mx-auto">
              Boka en kostnadsfri genomgång med en av våra seniora rådgivare.
            </p>
            <Link href="/kontakt">
              <PremiumButton variant="black" className="rounded-full px-16 h-20 text-xl">
                Boka Reality Check <ArrowRight size={20} />
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
