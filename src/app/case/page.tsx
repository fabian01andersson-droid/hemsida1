import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — BridgeToGrants",
  description: "Verkliga resultat för verkliga företag. Se hur vi hjälpt hundratals organisationer säkra EU-finansiering.",
};

const cases = [
  {
    company: "AI Diagnostics AB",
    programme: "Horizon Europe",
    amount: "3.2M EUR",
    amountSEK: "35.8 MSEK",
    headline: "AI-driven diagnostik som revolutionerar tidig cancerdetektering",
    challenge: "Behövde finansiering för kliniska studier i tre EU-länder och skalning av sin AI-plattform.",
    solution: "Vi byggde ett konsortium med 7 partners från 5 länder och skrev en ansökan som fick högsta poäng på Impact.",
    result: "Beviljad i första omgången. Produkten används nu på 12 sjukhus i Europa.",
    quote: "BridgeToGrants förstod vår teknik och visste exakt hur man paketerar den för EU-utvärderare.",
    quotePerson: "CTO, AI Diagnostics AB",
    color: "blue",
  },
  {
    company: "GreenSteel Nordic",
    programme: "Innovation Fund",
    amount: "8.5M EUR",
    amountSEK: "95 MSEK",
    headline: "Världens första fossilfria stålproduktion i industriell skala",
    challenge: "Storskalig demonstration av vätgasbaserad stålproduktion krävde massiv finansiering.",
    solution: "Innovation Fund-ansökan med fokus på GHG-reduktionspotential och skalbarhet. Rigorös budgetmodellering.",
    result: "Högsta betyg i programmets historia för GHG-avoidance. Produktionsstart 2027.",
    quote: "Ingen annan konsult hade kunskapen att hantera en ansökan av den här komplexiteten.",
    quotePerson: "VD, GreenSteel Nordic",
    color: "green",
  },
  {
    company: "Malmö Kommun",
    programme: "ESF+",
    amount: "1.8M EUR",
    amountSEK: "20.1 MSEK",
    headline: "Integrationsprogram som fick 2 000 nyanlända i arbete",
    challenge: "Kommunen ville skala ett framgångsrikt pilotprojekt för arbetsmarknadsintegration.",
    solution: "ESF+ ansökan med tydlig koppling till regionala behov och innovativa utbildningsmetoder.",
    result: "2 000 deltagare, 73% i arbete inom 12 månader. Modellen replikeras nu i 5 kommuner.",
    quote: "BridgeToGrants hjälpte oss att tänka europeiskt och strukturera projektet för maximal impact.",
    quotePerson: "Projektchef, Malmö Kommun",
    color: "purple",
  },
  {
    company: "OceanClean Technologies",
    programme: "LIFE",
    amount: "2.1M EUR",
    amountSEK: "23.5 MSEK",
    headline: "Autonoma system för mikroplastinsamling i Östersjön",
    challenge: "Innovativ cleantech-startup utan erfarenhet av EU-ansökningar behövde finansiering för pilotstudier.",
    solution: "LIFE-ansökan med stark miljöimpact-argumentation och partnerskap med forskningsinstitut.",
    result: "Pilotstudier i 3 Östersjöhamnar. 40 ton mikroplast insamlat under första året.",
    quote: "Från noll kunskap om EU-bidrag till beviljad ansökan på 4 månader. Otroligt.",
    quotePerson: "Grundare, OceanClean Technologies",
    color: "teal",
  },
  {
    company: "Nordic EdTech Group",
    programme: "Digital Europe",
    amount: "1.4M EUR",
    amountSEK: "15.7 MSEK",
    headline: "AI-driven personaliserad utbildningsplattform för 500 000 elever",
    challenge: "Expansion från nordisk till europeisk marknad krävde kapital och partners.",
    solution: "Digital Europe-ansökan fokuserad på AI-i-utbildning och digital kompetens. Konsortie med 4 EdTech-aktörer.",
    result: "Plattformen rullas nu ut i 8 EU-länder med 500 000 aktiva användare.",
    quote: "De hittade partners vi aldrig hade nått på egen hand. Konsortiet blev en av projektets största styrkor.",
    quotePerson: "CEO, Nordic EdTech Group",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-600", green: "bg-green-600", purple: "bg-purple-600", teal: "bg-teal-600", amber: "bg-amber-600",
};

export default function CasePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">CASE STUDIES</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Verkliga resultat.<br /><span className="text-blue-600">Verkliga företag.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Vi mäter framgång i beviljade ansökningar, inte i sålda timmar.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding">
        <div className="container-apple px-6 space-y-8">
          {cases.map((c, i) => (
            <div
              key={c.company}
              className={`rounded-[2.5rem] p-10 md:p-14 ${i % 2 === 0 ? "bg-white border border-slate-100" : "bg-[#f5f5f7]"}`}
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-white px-4 py-1.5 rounded-full ${colorMap[c.color]}`}>
                  {c.programme}
                </span>
                <span className="text-sm font-bold text-slate-400">{c.company}</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black mb-8 leading-tight max-w-3xl">{c.headline}</h3>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Utmaning</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Lösning</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Resultat</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.result}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-slate-200/50">
                <div className="flex items-start gap-4 max-w-xl">
                  <Quote size={24} className="text-slate-300 shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-600 italic leading-relaxed">{c.quote}</p>
                    <p className="text-sm font-bold text-slate-400 mt-2">— {c.quotePerson}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-3xl md:text-4xl font-black text-slate-900">{c.amount}</p>
                  <p className="text-sm text-slate-400">{c.amountSEK} beviljat</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0a0a0c]">
        <div className="container-apple px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[0.95]">
            Vill ni bli nästa<br />framgångssaga?
          </h2>
          <Link href="/kontakt" className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 inline-flex items-center gap-3">
            Boka Reality Check <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
