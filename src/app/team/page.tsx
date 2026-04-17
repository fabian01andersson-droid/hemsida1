import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Vårt Team — BridgeToGrants",
  description: "Möt teamet bakom Sveriges mest framgångsrika EU-ansökningar. Tidigare handläggare från Vinnova och EU-kommissionen.",
};

const team = [
  {
    name: "Erik Lindberg",
    role: "VD & Grundare",
    bio: "15 års erfarenhet inom EU-finansiering. Tidigare senior handläggare på Vinnova där han ansvarade för Horizon 2020-portföljen. Har personligen bidragit till att säkra över 500 MSEK i EU-finansiering.",
    achievement: "500+ MSEK säkrad finansiering",
    initials: "EL",
    color: "from-blue-600 to-blue-800",
    email: "erik@bridgetogrants.se",
  },
  {
    name: "Maria Andersson",
    role: "Senior EU-rådgivare",
    bio: "Tidigare handläggare vid EU-kommissionens DG Research & Innovation. 12 års erfarenhet av att utvärdera och granska Horizon Europe-ansökningar. Expert på konsortiebygge.",
    achievement: "Ex EU-kommissionen, 200+ granskade ansökningar",
    initials: "MA",
    color: "from-purple-600 to-purple-800",
    email: "maria@bridgetogrants.se",
  },
  {
    name: "Jonas Bergström",
    role: "AI & Analysansvarig",
    bio: "PhD i datavetenskap från KTH. Utvecklat BridgeToGrants AI-matchningsmotor som analyserar 400+ aktiva utlysningar i realtid. Kombinerar teknisk expertis med djup förståelse för EU:s prioriteringar.",
    achievement: "PhD KTH, byggt AI-scannern",
    initials: "JB",
    color: "from-green-600 to-green-800",
    email: "jonas@bridgetogrants.se",
  },
  {
    name: "Sofia Ekström",
    role: "Projektledare & Post-Award",
    bio: "Certified EU Project Manager med 10 års erfarenhet av att leda och rapportera EU-finansierade projekt. Specialist på finansiell rapportering, revision och efterlevnad.",
    achievement: "Certified EU PM, 0% audit findings",
    initials: "SE",
    color: "from-amber-600 to-amber-800",
    email: "sofia@bridgetogrants.se",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">VÅRT TEAM</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Expertis som<br /><span className="text-blue-600">levererar.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Tidigare handläggare från Vinnova och EU-kommissionen. Vi vet vad utvärderarna letar efter.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-black text-lg shrink-0`}>
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{m.name}</h3>
                    <p className="text-sm text-blue-600 font-bold">{m.role}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{m.bio}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">{m.achievement}</span>
                  <a href={`mailto:${m.email}`} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-[#0a0a0c]">
        <div className="container-apple px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-8">VARFÖR VI</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] mb-8">
                Insidan möter<br />utsidan.
              </h2>
              <p className="text-xl text-white/40 font-medium leading-relaxed">
                Vi är den enda svenska byrån med team-medlemmar från både Vinnova och EU-kommissionen.
                Vi vet exakt hur ansökningar bedöms — för vi har själva bedömt dem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "År erfarenhet" },
                { value: "200+", label: "Granskade ansökningar" },
                { value: "68%", label: "Success rate" },
                { value: "4.9/5", label: "Kundbetyg" },
              ].map((s) => (
                <div key={s.label} className="glass-card-dark p-8 text-center">
                  <p className="text-3xl font-black text-white mb-2">{s.value}</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-apple px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10">Låt oss prata.</h2>
          <Link href="/kontakt" className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 inline-flex items-center gap-3">
            Boka ett möte <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
