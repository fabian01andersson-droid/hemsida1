"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Heart, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Radikal Transparens",
    desc: "Vi publicerar våra beviljandegrader, arvodesstrukturer och urvalskriterier öppet.",
  },
  {
    icon: Target,
    title: "Resultat före Aktivitet",
    desc: "Vår framgång mäts i säkrat kapital och realiserade effekter — inte volym.",
  },
  {
    icon: Heart,
    title: "Vi Säger Nej",
    desc: "Vi tackar nej till 85% av alla förfrågningar. Kvalitet går före kvantitet.",
  },
  {
    icon: Users,
    title: "Seniora EU-experter",
    desc: "Vårt team har bakgrund från Vinnova och EU-kommissionen.",
  },
];

export default function AboutSection() {
  return (
    <section className="section-luxury bg-slate-50/50">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Metodik
            </span>
            <h2 className="text-slate-900 mb-8 leading-tight">
              Byggd för strategisk <br />
              <span className="text-brand-primary">kapitalisering.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              BridgeToGrants grundades på en enkel princip: tillgång till 
              europeisk finansiering ska avgöras av idéns kvalitet — inte av 
              organisationens storlek.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Vi levererar en beviljandegrad på 68% — vilket är 4× det europeiska genomsnittet.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-slate-200">
              {[
                { value: "842 MSEK", label: "Säkrad Finansiering" },
                { value: "68%", label: "Beviljandegrad" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary mb-6">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
