import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Euro, Target } from "lucide-react";
import { notFound } from "next/navigation";

const programData: Record<string, {
  name: string; category: string; budget: string; description: string;
  eligibility: string[]; deadlines: string; successFactors: string[];
  bridgeAdvantage: string; keyFacts: { label: string; value: string }[];
}> = {
  "horizon-europe": {
    name: "Horizon Europe", category: "Forskning & Innovation", budget: "95.5 miljarder EUR (2021–2027)",
    description: "Horizon Europe är EU:s flaggskeppsprogram för forskning och innovation med den största budgeten någonsin. Programmet stödjer allt från grundforskning till marknadsnära innovation genom tre pelare: Excellent Science, Global Challenges, och Innovative Europe.",
    eligibility: ["Företag av alla storlekar (SME prioriteras)", "Universitet och forskningsinstitut", "Offentliga organisationer", "Minst 3 partners från 3 EU-länder (för konsortieansökningar)"],
    deadlines: "Löpande utlysningar, huvudsakliga deadlines i mars och september varje år",
    successFactors: ["Excellence — vetenskaplig/teknisk kvalitet", "Impact — samhällelig och ekonomisk påverkan", "Implementation — teamets kapacitet och projektplan"],
    bridgeAdvantage: "Vårt team inkluderar tidigare Horizon Europe-utvärderare som vet exakt vad som krävs för högsta poäng. Vi har 78% beviljandegrad inom Horizon Europe — jämfört med EU-snittet på 17%.",
    keyFacts: [{ label: "Total budget", value: "95.5 mdr EUR" }, { label: "Vår success rate", value: "78%" }, { label: "EU-snitt", value: "17%" }, { label: "Bidragsnivå", value: "70-100%" }],
  },
  "digital-europe": {
    name: "Digital Europe Programme", category: "Digital Transformation", budget: "7.5 miljarder EUR (2021–2027)",
    description: "Digital Europe Programme stödjer Europas digitala transformation genom att bygga kapacitet inom AI, cybersäkerhet, avancerad databehandling, digitala kompetenser och interoperabilitet.",
    eligibility: ["Företag, särskilt SME", "Offentlig sektor", "Forskningsorganisationer", "Etablerade i EU/EES-länder"],
    deadlines: "Utlysningar publiceras kvartalsvis via EC Funding Portal",
    successFactors: ["Tydlig digital transformationsplan", "Skalbarhet och europeiskt mervärde", "Stark implementeringskapacitet"],
    bridgeAdvantage: "Vi har specialistkompetens inom digitalisering och AI-relaterade EU-program. Vårt nätverk av teknologipartners underlättar konsortiebildning.",
    keyFacts: [{ label: "Total budget", value: "7.5 mdr EUR" }, { label: "Fokus", value: "AI, Cyber, HPC" }, { label: "Bidragsnivå", value: "50-75%" }, { label: "Typ", value: "Grants & Procurement" }],
  },
  "life": {
    name: "LIFE Programme", category: "Miljö & Klimat", budget: "5.4 miljarder EUR (2021–2027)",
    description: "LIFE är EU:s enda program som helt ägnas åt miljö och klimat. Det stödjer projekt inom naturskydd, cirkulär ekonomi, klimatanpassning och ren energi.",
    eligibility: ["Alla typer av organisationer", "Offentliga och privata aktörer", "NGO:er och civilsamhälle", "Enskilda sökande möjligt"],
    deadlines: "Årliga utlysningar, vanligtvis med deadline i september–oktober",
    successFactors: ["Tydlig miljö-/klimatnytta", "Innovativt angreppssätt", "Replikerbarhet och överförbarhet", "Kostnadseffektivitet"],
    bridgeAdvantage: "Vi har framgångsrikt säkrat LIFE-finansiering för 12 projekt med fokus på cirkulär ekonomi och klimatanpassning. Genomsnittligt bidrag: 2.1 MEUR.",
    keyFacts: [{ label: "Total budget", value: "5.4 mdr EUR" }, { label: "Vår success rate", value: "65%" }, { label: "Bidragsnivå", value: "60-95%" }, { label: "Snitt bidrag", value: "2.1M EUR" }],
  },
  "eruf": {
    name: "ERUF / ERDF", category: "Regional Utveckling", budget: "226 miljarder EUR (2021–2027)",
    description: "Europeiska regionala utvecklingsfonden är EU:s största strukturfond. Den finansierar investeringar i innovation, digitalisering, SME-stöd och grön omställning på regional nivå.",
    eligibility: ["Alla typer av organisationer", "Regionala och lokala myndigheter", "Företag, särskilt SME", "Programmen administreras nationellt/regionalt"],
    deadlines: "Varierar per region och nationellt program. Kontakta Tillväxtverket för svenska utlysningar.",
    successFactors: ["Regional förankring", "Koppling till smart specialisering", "Tydliga resultatindikatorer"],
    bridgeAdvantage: "Vi har lång erfarenhet av att navigera svenska strukturfondspartnerskap och regionala prioriteringar.",
    keyFacts: [{ label: "Total budget", value: "226 mdr EUR" }, { label: "Sverige", value: "~2 mdr EUR" }, { label: "Fokus", value: "Innovation & SME" }, { label: "Typ", value: "Strukturfond" }],
  },
  "esf-plus": {
    name: "ESF+", category: "Social Inkludering", budget: "99 miljarder EUR (2021–2027)",
    description: "Europeiska socialfonden Plus investerar i människor — sysselsättning, kompetensutveckling, social inkludering och likabehandling. Stark koppling till arbetsmarknads- och socialpolitik.",
    eligibility: ["Kommuner och regioner", "Arbetsmarknadens parter", "Civilsamhällesorganisationer", "Utbildningsinstitutioner"],
    deadlines: "Löpande utlysningar via Svenska ESF-rådet",
    successFactors: ["Tydlig målgrupp och behov", "Innovativa metoder", "Hållbara resultat efter projektslut"],
    bridgeAdvantage: "Stark erfarenhet av kommunala och regionala ESF-projekt, särskilt inom kompetensförsörjning och social innovation.",
    keyFacts: [{ label: "Total budget", value: "99 mdr EUR" }, { label: "Sverige", value: "~1.5 mdr EUR" }, { label: "Fokus", value: "Sysselsättning" }, { label: "Bidragsnivå", value: "40-95%" }],
  },
  "cef": {
    name: "Connecting Europe Facility", category: "Infrastruktur", budget: "33.7 miljarder EUR (2021–2027)",
    description: "CEF finansierar gränsöverskridande infrastrukturprojekt inom transport, energi och digital konnektivitet. Stödjer Europas gröna och digitala omställning.",
    eligibility: ["Infrastrukturaktörer", "Energibolag och nätoperatörer", "Transportmyndigheter", "Telekom- och digitalföretag"],
    deadlines: "Sektorspecifika utlysningar via CINEA",
    successFactors: ["Gränsöverskridande relevans", "TEN-T/TEN-E koppling", "Klimatbidrag"],
    bridgeAdvantage: "Erfarenhet av storskaliga infrastrukturprojekt med komplex multi-stakeholder-hantering.",
    keyFacts: [{ label: "Total budget", value: "33.7 mdr EUR" }, { label: "Transport", value: "25.8 mdr" }, { label: "Energi", value: "5.8 mdr" }, { label: "Digital", value: "2.1 mdr" }],
  },
  "interreg": {
    name: "Interreg", category: "Gränsöverskridande samarbete", budget: "8 miljarder EUR (2021–2027)",
    description: "Interreg finansierar samarbetsprojekt som överbryggar gränser. Sverige deltar i flera program: Öresund-Kattegat-Skagerrak, Nordsjöprogrammet, Aurora och Interreg Europe.",
    eligibility: ["Offentliga organisationer", "Universitet och forskningsinstitut", "Näringslivsfrämjare", "Kräver partners från minst 2 länder"],
    deadlines: "Varierar per program. Vanligtvis 2 utlysningar per år.",
    successFactors: ["Genuint gränsöverskridande mervärde", "Stark partnerkonstellation", "Tydliga och mätbara resultat"],
    bridgeAdvantage: "Vi har ett nordiskt nätverk som underlättar partnerrekrytering för svenska organisationer.",
    keyFacts: [{ label: "Total budget", value: "8 mdr EUR" }, { label: "Program", value: "60+ i Europa" }, { label: "Bidragsnivå", value: "65-80%" }, { label: "Krav", value: "2+ länder" }],
  },
  "innovationsfonden": {
    name: "Innovation Fund", category: "Klimatinnovation", budget: "40 miljarder EUR (2020–2030)",
    description: "Innovation Fund är en av världens största fonder för demonstration av innovativ koldioxidsnål teknik. Finansieras av intäkter från EU:s utsläppshandelssystem (ETS).",
    eligibility: ["Företag med innovativ klimatteknik", "Storskaliga demonstrationsprojekt (>7.5M EUR)", "Småskaliga projekt (>2.5M EUR)", "Etablerade i EU/EES"],
    deadlines: "Årliga utlysningar, vanligtvis med deadline i mars",
    successFactors: ["GHG-reduktionspotential", "Innovationsgrad", "Skalbarhet", "Projektmognad"],
    bridgeAdvantage: "Vi har framgångsrikt stött 3 Innovation Fund-ansökningar med fokus på grön stålproduktion och CCS-teknik.",
    keyFacts: [{ label: "Total budget", value: "40 mdr EUR" }, { label: "Snitt bidrag", value: "7-15M EUR" }, { label: "Bidragsnivå", value: "Upp till 60%" }, { label: "Fokus", value: "CleanTech" }],
  },
  "creative-europe": {
    name: "Creative Europe", category: "Kultur & Media", budget: "2.4 miljarder EUR (2021–2027)",
    description: "Creative Europe stödjer den europeiska kultur- och kreativsektorn. Programmet har tre delar: Culture, MEDIA och Cross-sectoral.",
    eligibility: ["Kulturorganisationer", "Film- och medieproducenter", "Kreativa företag", "Offentliga kulturinstitutioner"],
    deadlines: "Flera utlysningar per år inom respektive delprogram",
    successFactors: ["Europeisk dimension och samarbete", "Konstnärlig kvalitet", "Publikräckvidd och tillgänglighet"],
    bridgeAdvantage: "Erfarenhet av att stödja svenska kulturorganisationer med europeiska samarbetsprojekt.",
    keyFacts: [{ label: "Total budget", value: "2.4 mdr EUR" }, { label: "Culture", value: "0.6 mdr" }, { label: "MEDIA", value: "1.4 mdr" }, { label: "Bidragsnivå", value: "60-80%" }],
  },
};

export async function generateStaticParams() {
  return Object.keys(programData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programData[slug];
  if (!p) return { title: "Program — BridgeToGrants" };
  return { title: `${p.name} — BridgeToGrants`, description: p.description.slice(0, 160) };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programData[slug];
  if (!p) notFound();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6">
          <Link href="/program" className="inline-flex items-center gap-2 text-sm font-bold text-[#86868b] hover:text-slate-900 mb-10">
            <ArrowLeft size={16} /> Alla program
          </Link>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">{p.category}</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">{p.name}</h1>
          <p className="text-xl text-slate-400 font-medium max-w-3xl">{p.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-black mb-8">Vem kan söka?</h2>
                <div className="space-y-4">
                  {p.eligibility.map((e) => (
                    <div key={e} className="flex items-start gap-4 bg-[#f5f5f7] rounded-2xl p-6">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      <p className="text-slate-600">{e}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-8">Utvärderingskriterier</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.successFactors.map((f, i) => (
                    <div key={f} className="bg-white border border-slate-100 rounded-2xl p-6">
                      <span className="text-3xl font-black text-slate-200 mb-3 block">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-slate-600 font-medium">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-[2.5rem] p-10 md:p-14">
                <h2 className="text-3xl font-black mb-6">Vår fördel</h2>
                <p className="text-white/80 text-lg leading-relaxed">{p.bridgeAdvantage}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#f5f5f7] rounded-[2.5rem] p-10 sticky top-20">
                <h3 className="text-lg font-black mb-8">Nyckeltal</h3>
                <div className="space-y-6">
                  {p.keyFacts.map((f) => (
                    <div key={f.label} className="flex justify-between items-center pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <span className="text-sm text-slate-400">{f.label}</span>
                      <span className="text-sm font-black text-slate-900">{f.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Deadlines</p>
                  <p className="text-sm text-slate-600">{p.deadlines}</p>
                </div>
              </div>

              <Link href="/kontakt" className="block bg-black text-white rounded-[2rem] p-8 text-center font-bold hover:bg-slate-800 transition-colors">
                Boka rådgivning <ArrowRight size={16} className="inline ml-2" />
              </Link>
              <Link href="/matcha" className="block border border-slate-200 rounded-[2rem] p-8 text-center font-bold text-slate-900 hover:bg-[#f5f5f7] transition-colors">
                Testa AI-scanner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
