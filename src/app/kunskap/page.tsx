import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kunskapsbank — BridgeToGrants",
  description: "Guider, mallar och artiklar om EU-stöd. Lär dig hur du söker Horizon Europe, LIFE, Eurostars och fler program.",
};

const articles = [
  { slug: "horizon-europe-guide", title: "Komplett guide: Horizon Europe 2026", excerpt: "Allt du behöver veta om EU:s största forskningsprogram. Vem kan söka, processen och vad utvärderarna letar efter.", category: "Guide", readTime: "12 min" },
  { slug: "vanliga-misstag", title: "7 anledningar att EU-ansökningar avslås", excerpt: "Vi har analyserat 500+ avslagna ansökningar och identifierat de vanligaste misstagen.", category: "Analys", readTime: "8 min" },
  { slug: "kommuner-eu-stod", title: "EU-stöd för kommuner: En komplett guide", excerpt: "Hur kommuner och regioner kan maximera sitt EU-stöd genom ESF+, ERUF och Interreg.", category: "Guide", readTime: "15 min" },
  { slug: "prissattning-eu-projekt", title: "Prissättning av EU-projekt: Så räknar du", excerpt: "Bidragssatser, overhead, personalkostnader — allt om budgetmodeller för EU-finansierade projekt.", category: "Tips", readTime: "10 min" },
  { slug: "konsortiebygge", title: "Konsortiebygge: Hitta rätt partners", excerpt: "Hur du bygger ett vinnande konsortium för Horizon Europe. Geografisk balans, roller och avtal.", category: "Guide", readTime: "11 min" },
  { slug: "post-award-guide", title: "Post-Award: Så hanterar ni ert beviljade projekt", excerpt: "Rapportering, revision, tidrapportering och efterlevnad — allt ni behöver veta efter beviljat.", category: "Guide", readTime: "9 min" },
];

const templates = [
  { title: "Ansökningschecklista", desc: "Komplett checklista för alla EU-program", format: "PDF" },
  { title: "Budgetmall Horizon Europe", desc: "Excel-mall med alla kostnadskategorier", format: "XLSX" },
  { title: "Projektbeskrivningsmall", desc: "Strukturmall för Part B (Horizon Europe)", format: "DOCX" },
  { title: "Consortium Agreement Mall", desc: "Basavtal för konsortiesamarbete", format: "DOCX" },
];

const categoryColors: Record<string, string> = {
  Guide: "bg-blue-50 text-blue-600",
  Analys: "bg-purple-50 text-purple-600",
  Tips: "bg-green-50 text-green-600",
};

export default function KunskapPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">KUNSKAP</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Lär er<br /><span className="text-blue-600">EU-stöd.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Guider, mallar och insikter som hjälper er navigera EU-finansiering.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Artiklar & guider.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <div key={a.slug} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${categoryColors[a.category]}`}>
                    {a.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> {a.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-black mb-3 leading-tight">{a.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">{a.excerpt}</p>
                <span className="text-sm font-bold text-blue-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Läs mer <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Mallar & verktyg.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((t) => (
              <div key={t.title} className="bg-white rounded-[2rem] p-8 flex items-center gap-6 border border-slate-100 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Download size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black mb-1">{t.title}</h4>
                  <p className="text-sm text-slate-400">{t.desc}</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 shrink-0">{t.format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-apple px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Missa inga deadlines.</h2>
          <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto">
            Veckovis EU-intelligence direkt i din inbox. Inga spam, bara värde.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="din@email.se"
              className="h-14 px-6 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm flex-1 outline-none focus:border-blue-600"
            />
            <button className="h-14 px-8 bg-black text-white font-bold rounded-2xl hover:bg-slate-800 flex items-center gap-2 justify-center">
              Prenumerera <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
