import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Zap, Search, FileText, Rocket, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Tjänster & Pris — BridgeToGrants",
  description: "Transparent prissättning för EU-stöd. Från Quick Scan till fullständig ansökan och efterlevnad.",
};

const tiers = [
  {
    name: "Quick Scan", price: "4 900 kr", priceNote: "engångskostnad", popular: false,
    description: "2-sidors analys av er projektidé mot aktuella EU-utlysningar. Leverans inom 5 arbetsdagar.",
    features: ["Skriftlig bedömning av ert projektconcept", "Matchning mot 3–5 relevanta program", "Rekommenderad strategi och nästa steg", "30-minuters genomgång per video"],
    cta: "Beställ Quick Scan", ctaStyle: "outline",
  },
  {
    name: "Ansökningsskrivning", price: "Från 49 000 kr", priceNote: "per ansökan", popular: true,
    description: "Full ansökan till valfritt EU-program av våra seniora EU-experter med AI-stöd.",
    features: ["Komplett ansökan enligt EU:s mall", "Budgetuppställning och arbetspaket", "Intern granskning av fd. EU-utvärderare", "Konsortiekoordinering (vid behov)", "Obegränsade revideringar till deadline", "Post-submission support"],
    cta: "Boka rådgivning", ctaStyle: "black",
  },
  {
    name: "Post-Award", price: "15 000 kr", priceNote: "per månad", popular: false,
    description: "Löpande stöd med rapportering, revision och efterlevnad för beviljade EU-projekt.",
    features: ["Ekonomisk rapportering", "Timredovisning och kostnadsuppföljning", "Revisionsförberedelse", "Slutrapportering", "Direkt kontakt med senior rådgivare"],
    cta: "Kontakta oss", ctaStyle: "outline",
  },
];

const processSteps = [
  { icon: Search, step: "01", title: "Reality Check", desc: "Kostnadsfri 15 min bedömning av ert projekts potential." },
  { icon: FileText, step: "02", title: "Quick Scan", desc: "Djupdykning i er idé mot aktuella utlysningar." },
  { icon: Rocket, step: "03", title: "Ansökan", desc: "Full ansökningsskrivning med expertgranskning." },
  { icon: Award, step: "04", title: "Beviljat", desc: "Post-award management och rapportering." },
];

const trustStats = [
  { value: "68%", label: "Beviljandegrad" },
  { value: "842M", label: "SEK Säkrat" },
  { value: "127+", label: "Projekt" },
  { value: "4.9", label: "Kundbetyg" },
];

export default function TjansterPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">TJÄNSTER & PRIS</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Transparent<br /><span className="text-blue-600">prissättning.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Inga dolda kostnader. Inga överraskningar. Ni vet exakt vad ni betalar för.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className={`relative rounded-[2.5rem] p-10 flex flex-col ${
                t.popular
                  ? "bg-[#0a0a0c] text-white border-2 border-blue-600 scale-[1.02]"
                  : "bg-white border border-slate-100"
              }`}>
                {t.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full">
                    Mest populär
                  </span>
                )}
                <h3 className="text-2xl font-black mb-2">{t.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">{t.price}</span>
                  <span className={`text-sm ml-2 ${t.popular ? "text-white/40" : "text-slate-400"}`}>{t.priceNote}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-8 ${t.popular ? "text-white/50" : "text-slate-400"}`}>{t.description}</p>
                <ul className="space-y-3 flex-1 mb-10">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${t.popular ? "text-blue-400" : "text-green-500"}`} />
                      <span className={`text-sm ${t.popular ? "text-white/70" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`w-full py-4 rounded-2xl font-bold text-center block ${
                    t.ctaStyle === "black"
                      ? "bg-white text-black hover:bg-slate-100"
                      : t.popular
                        ? "border border-white/20 text-white hover:bg-white/10"
                        : "border border-slate-200 text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {t.cta} <ArrowRight size={16} className="inline ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">Så fungerar det.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-[2.5rem] p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <s.icon size={24} />
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{s.step}</span>
                <h4 className="text-lg font-black mt-2 mb-3">{s.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((s) => (
              <div key={s.label} className="bg-[#f5f5f7] rounded-[2.5rem] p-10 text-center">
                <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{s.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0a0a0c]">
        <div className="container-apple px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10">Redo att börja?</h2>
          <p className="text-xl text-white/40 font-medium mb-16 max-w-xl mx-auto">
            Boka en kostnadsfri Reality Check med en av våra seniora rådgivare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 inline-flex items-center gap-3">
              Boka Reality Check <ArrowRight size={18} />
            </Link>
            <Link href="/matcha" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 inline-flex items-center gap-3">
              Starta AI-scanner <Zap size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
