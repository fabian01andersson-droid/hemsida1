import type { Metadata } from "next";
import {
  XCircle,
  ShieldAlert,
  Target,
  Scale,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vi Tackar Nej — Vårt Kvalitetsmandat",
  description:
    "Vi tackar nej till 85% av alla förfrågningar. Läs varför — och varför det gör oss till en bättre partner för er.",
};

export default function WeSayNoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-brand-deep pt-24 pb-40 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="container-tight relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-success text-[10px] font-black uppercase tracking-[0.25em] mb-8 animate-fade-in">
            <ShieldAlert className="w-3.5 h-3.5" />
            Vårt Kvalitetsmandat
          </div>
          <h1 className="text-white tracking-tighter mb-8 leading-none">
            Därför säger vi{" "}
            <span className="text-brand-success">&quot;Nej&quot;</span> oftare
            än &quot;Ja&quot;.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            BridgeToGrants är inte en volymbyrå. Vi är en strategisk partner.
            För att bibehålla vår branschledande beviljandegrad tar vi bara på
            oss 15% av alla förfrågningar.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="-mt-20 pb-32">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inga falska förhoppningar",
                desc: "Om ert projekt inte uppfyller EU:s excellens-kriterier säger vi det direkt. Vi säljer inte 'drömmar' — vi levererar resultat.",
                icon: XCircle,
              },
              {
                title: "Resursintegritet",
                desc: "Våra seniora rådgivare arbetar med max 3 projekt samtidigt. Det säkerställer det djup som krävs för en vinnande ansökan.",
                icon: Scale,
              },
              {
                title: "Allierade incitament",
                desc: "Vår affärsmodell bygger på er framgång. Att ta på sig svaga projekt är en förlust för både er och oss.",
                icon: Target,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-premium-lg group hover:border-brand-primary/20 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-primary/40 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all mb-8">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-brand-deep mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-neutral/50 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN WE SAY NO */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-brand-deep mb-6 tracking-tighter">
              Våra <span className="text-brand-primary">urvalskriterier</span>
            </h2>
            <p className="text-lg text-brand-neutral/60 font-medium">
              Vi genomför en rigorös intern granskning i 4 steg innan vi
              erbjuder avtal. Projekt avböjs typiskt om de faller inom dessa
              kategorier:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                label: "Teknisk Mognad (TRL)",
                title: "För tidigt eller för sent",
                desc: "Om er innovation fortfarande är på idé-stadiet utan proof-of-concept, eller redan är fullt kommersialiserad, passar den inte Horizon Europe Cluster-utlysningar.",
              },
              {
                label: "Strategisk Passform",
                title: "Saknar 'EU-dimension'",
                desc: "En fantastisk affärsidé som bara gynnar en lokal marknad kommer att avvisas av EU-utvärderare. Vi letar efter gränsöverskridande impact.",
              },
              {
                label: "Finansiell Stabilitet",
                title: "Svag finansiell kapacitet",
                desc: "EU kräver att partners visar att de kan medfinansiera och driva projektet. Vi verifierar er balansräkning tidigt.",
              },
              {
                label: "Konsortiekvalitet",
                title: "Saknar nyckelpartners",
                desc: "Att vinna kräver ofta ett 'dream team'. Om ni saknar nödvändiga industriella eller akademiska partners föreslår vi att ni väntar.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex gap-8 p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm group hover:shadow-premium transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-2">
                    {c.label}
                  </p>
                  <h4 className="text-xl font-black text-brand-deep mb-3 tracking-tight">
                    {c.title}
                  </h4>
                  <p className="text-brand-neutral/50 font-medium text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T TAKE */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-brand-deep mb-6 tracking-tighter">
              Vi tar <span className="text-brand-primary">inte</span> på oss:
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Projekt under 500 000 kr i beviljad summa — ni sparar på att söka själv",
              "Program där vi saknar expertis — bättre att vara ärlig",
              "Organisationer utan dedikerad projektledare internt",
              "Idéer utan teknisk validering (TRL 1–2) för Horizon",
              "Rent nationella projekt utan EU-koppling",
              "Ansökningar med mindre än 3 veckors deadline",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 p-6 rounded-2xl bg-red-50/50 border border-red-100/50"
              >
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-brand-neutral/70 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GUARANTEE */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <div className="bg-brand-primary rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-premium-xl">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-white mb-8 tracking-tighter">
                  &quot;Beviljat eller Inga Avgifter&quot;-filosofin
                </h2>
                <p className="text-lg text-white/70 mb-10 leading-relaxed font-medium">
                  Tack vare att vi är så selektiva kan vi erbjuda
                  resultatbaserade prismodeller för våra mest kvalificerade
                  partners. När vi säger &quot;Ja&quot; till er satsar vi våra
                  egna resurser.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                    <span className="font-bold">
                      Transparent publika framgångssiffror
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                    <span className="font-bold">
                      Senior involvering (aldrig junior ghostwriting)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                    <span className="font-bold">
                      Revisionssäker dokumentation
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 text-center">
                <ShieldCheck className="w-16 h-16 text-brand-success mx-auto mb-8" />
                <h3 className="text-2xl font-black mb-6">
                  Se om ni kvalificerar er
                </h3>
                <p className="text-white/60 mb-10 text-sm font-medium">
                  Använd vår Quick Scan för att få en omedelbar
                  beredskapspoäng. Våra rådgivare granskar resultatet inom 24
                  timmar.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full h-16 rounded-2xl bg-white text-brand-primary hover:bg-brand-success hover:text-white font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  <Link href="/quick-scan">Starta Quick Scan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="py-24 text-center">
        <div className="container-tight">
          <p className="text-brand-neutral/30 font-black uppercase tracking-[0.3em] mb-6 text-xs">
            Kvalitet framför kvantitet
          </p>
          <h2 className="text-brand-deep mb-10 tracking-tighter">
            Vill ni ha en{" "}
            <span className="text-brand-primary">ärlig bedömning?</span>
          </h2>
          <Button
            asChild
            size="lg"
            className="h-16 px-12 rounded-2xl bg-brand-success hover:bg-brand-deep text-white font-black uppercase tracking-widest text-[11px] shadow-premium-xl"
          >
            <Link
              href="/kontakt"
              className="flex items-center gap-2"
            >
              Boka 15-min Reality Check <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
