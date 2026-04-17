import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, Leaf, MapPin, Users, Zap, Palette, Lightbulb, Train } from "lucide-react";

export const metadata: Metadata = {
  title: "EU-Program — BridgeToGrants",
  description: "Utforska alla stora EU-finansieringsprogram. Horizon Europe, Digital Europe, LIFE och fler.",
};

const programmes = [
  { slug: "horizon-europe", name: "Horizon Europe", icon: Globe, category: "Forskning & Innovation", budget: "95.5 mdr EUR", desc: "EU:s flaggskeppsprogram för forskning och innovation. Världens största.", color: "blue" },
  { slug: "digital-europe", name: "Digital Europe", icon: Cpu, category: "Digital Transformation", budget: "7.5 mdr EUR", desc: "AI, cybersäkerhet, avancerad databehandling och digitala kompetenser.", color: "purple" },
  { slug: "life", name: "LIFE", icon: Leaf, category: "Miljö & Klimat", budget: "5.4 mdr EUR", desc: "Miljö- och klimatåtgärder. Cirkulär ekonomi, natur och biologisk mångfald.", color: "green" },
  { slug: "eruf", name: "ERUF / ERDF", icon: MapPin, category: "Regional Utveckling", budget: "226 mdr EUR", desc: "Europeiska regionala utvecklingsfonden stärker ekonomisk sammanhållning.", color: "orange" },
  { slug: "esf-plus", name: "ESF+", icon: Users, category: "Social Inkludering", budget: "99 mdr EUR", desc: "Sysselsättning, utbildning, social inkludering och kompetensförsörjning.", color: "pink" },
  { slug: "cef", name: "Connecting Europe Facility", icon: Train, category: "Infrastruktur", budget: "33.7 mdr EUR", desc: "Transport, energi och digital konnektivitet i Europa.", color: "teal" },
  { slug: "interreg", name: "Interreg", icon: Globe, category: "Gränsöverskridande", budget: "8 mdr EUR", desc: "Gränsöverskridande samarbetsprogram. Öresund, Nordsjön m.fl.", color: "cyan" },
  { slug: "innovationsfonden", name: "Innovation Fund", icon: Lightbulb, category: "Klimatinnovation", budget: "40 mdr EUR", desc: "En av världens största fonder för demonstration av ren teknik.", color: "amber" },
  { slug: "creative-europe", name: "Creative Europe", icon: Palette, category: "Kultur & Media", budget: "2.4 mdr EUR", desc: "Stöd till kultursektorn, audiovisuell industri och kreativa näringar.", color: "rose" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600", purple: "bg-purple-50 text-purple-600", green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600", pink: "bg-pink-50 text-pink-600", teal: "bg-teal-50 text-teal-600",
  cyan: "bg-cyan-50 text-cyan-600", amber: "bg-amber-50 text-amber-600", rose: "bg-rose-50 text-rose-600",
};

export default function ProgramPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">EU-PROGRAM</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Alla EU-program.<br /><span className="text-blue-600">En plats.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Vi har djup expertis inom alla stora EU-finansieringsprogram. Hitta rätt program för ert projekt.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <Link key={p.slug} href={`/program/${p.slug}`} className="group">
                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[p.color]}`}>
                      <p.icon size={24} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 bg-slate-50 px-3 py-1.5 rounded-full">{p.category}</span>
                  </div>
                  <h3 className="text-xl font-black mb-3">{p.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{p.budget}</span>
                    <span className="flex items-center gap-1 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Läs mer <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Osäker på rätt program?</h2>
          <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto">
            Vår AI-scanner matchar er idé mot alla program på sekunder.
          </p>
          <Link href="/matcha" className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 inline-flex items-center gap-3">
            Starta AI-scanner <Zap size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
