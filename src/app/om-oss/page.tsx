import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, Users, TrendingUp, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "BridgeToGrants grundades med en övertygelse: tillgången till EU-finansiering ska avgöras av idéns kvalitet, inte organisationens storlek.",
};

const milestones = [
  { year: "2019", event: "BridgeToGrants grundas i Stockholm" },
  { year: "2020", event: "Första Horizon Europe-ansökan beviljad" },
  { year: "2021", event: "Utökar till nationella program (Vinnova, Energimyndigheten)" },
  { year: "2022", event: "100:e beviljade ansökan passeras" },
  { year: "2023", event: "Lanserar efterlevande- och revisionstjänster" },
  { year: "2024", event: "Passerar 1 miljard SEK i totalt beviljat stöd" },
  { year: "2025", event: "AI-verktyg integreras i arbetsprocessen" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Radikal transparens",
    desc: "Vi publicerar våra priser, vår beviljandegrad och vilka projekt vi tackar nej till. Ingen annan svensk byrå gör detta. Vi tror att förtroende byggs genom öppenhet, inte genom att dölja.",
  },
  {
    icon: Target,
    title: "Resultat före aktivitet",
    desc: "Vi mäter inte framgång i antal skickade ansökningar. Vi mäter i beviljade kronor, levererade rapporter och nöjda klienter. Varje projekt vi tar oss an ska ha en reell chans att lyckas.",
  },
  {
    icon: Heart,
    title: "Vi säger nej",
    desc: "Om vi inte tror att ert projekt har realistiska chanser att beviljas säger vi det rakt ut — även om det betyder att vi inte tjänar pengar. Det är vår viktigaste differentiering.",
  },
  {
    icon: Users,
    title: "Partnerskap, inte transaktioner",
    desc: "Vi bygger långsiktiga relationer. Många av våra klienter har arbetat med oss i flera år och flera ansökningar. Er nästa ansökan börjar redan vid den första.",
  },
];

const whyUs = [
  {
    title: "Seniora experter, inte juniora skribenter",
    desc: "Varje ansökan hanteras av konsulter med direkt erfarenhet från EU-kommissionen, Vinnova eller som utvärderare. Vi vet hur granskare tänker — för vi har varit granskare.",
  },
  {
    title: "AI-verktyg för effektivitet",
    desc: "Vi använder AI för att snabbt matcha er mot rätt program, analysera ansökningsstyrka och automatisera rapportering. Det gör oss snabbare utan att kompromissa med kvalitet.",
  },
  {
    title: "Full livscykel — inte bara ansökan",
    desc: "De flesta byråer slutar vid inlämning. Vi följer med hela vägen: rapportering, revision, kompletteringar och slutredovisning. Det är där de riktiga pengarna säkras.",
  },
  {
    title: "Kommun-expertis",
    desc: "Vi är ett av få svenska team med specialkompetens inom kommunal EU-finansiering — LIFE, Interreg, strukturfonder. Kommuner har andra behov och vi förstår dem.",
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-wide mb-3">
                Om BridgeToGrants
              </p>
              <h1 className="mb-6">
                Vi existerar för att bra idéer ska få finansiering
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                BridgeToGrants grundades med en enkel övertygelse: tillgången till
                EU-finansiering ska inte avgöras av organisationens storlek eller
                antal anställda konsulter — den ska avgöras av idéns kvalitet.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Vi är ett team av seniora EU-experter, flera med bakgrund från
                Vinnova och EU-kommissionen, som kombinerar djup programkunskap
                med moderna AI-verktyg. Vi arbetar med företag, kommuner och
                forskningsinstitutioner i hela Sverige — och vi säger alltid rakt
                ut om vi tror att ett projekt har en reell chans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="rounded-lg bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white px-6 h-11"
                >
                  <Link href="/team">
                    Träffa teamet <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-lg border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] px-6 h-11"
                >
                  <Link href="/kontakt">Boka 15-min Reality Check</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Beviljade ansökningar", icon: TrendingUp },
                { value: "2.4 Mdr", label: "Totalt beviljat (SEK)", icon: Target },
                { value: "92%", label: "Beviljandegrad", icon: CheckCircle },
                { value: "15+", label: "Års samlad erfarenhet", icon: Users },
              ].map((stat) => (
                <div key={stat.label} className="card-elevated p-6 text-center">
                  <stat.icon className="w-6 h-6 text-brand mx-auto mb-3" />
                  <p className="text-2xl font-bold text-brand-deep">{stat.value}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="mb-3">Våra principer</h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Det här är inte marknadsföringsfloskler. Det är regler vi faktiskt
              följer — och som vi ber er hålla oss ansvariga för.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-8">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--brand-primary)]/[0.08] mb-4">
                  <value.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white section-padding">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-3">Varför BridgeToGrants?</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Vad som gör oss annorlunda jämfört med traditionella byråer och
              AI-plattformar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg mb-1">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface section-padding">
        <div className="container-tight max-w-2xl">
          <h2 className="text-center mb-12">Vår resa</h2>
          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="flex flex-col gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start relative">
                  <div className="w-9 h-9 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-0.5">
                      {m.year}
                    </p>
                    <p className="text-[var(--text-secondary)] text-[15px]">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-padding">
        <div className="container-tight text-center max-w-2xl">
          <h2 className="mb-4">Nyfiken på om vi kan hjälpa just er?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Boka en kostnadsfri 15-minuters Reality Check. Vi säger rakt ut om
            ni har en reell chans — och om inte, berättar vi varför.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white px-8 h-12 text-base"
          >
            <Link href="/kontakt">
              Boka 15-min Reality Check <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
