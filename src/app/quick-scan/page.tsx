import type { Metadata } from "next";
import Link from "next/link";
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Target,
  FileSearch,
  BarChart3,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quick Scan — Få din EU-ansökan validerad för 4 900 kr",
  description: "Är ditt projekt värt att söka stöd för? Få en ärlig bedömning av seniora EU-experter innan du investerar tid och pengar.",
};

export default function QuickScanPage() {
  return (
    <div className="bg-white">
      {/* ━━━ HERO ━━━ */}
      <section className="bg-brand-deep pt-20 pb-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
        <div className="container-tight relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8">
              <Zap className="w-3 h-3 text-brand-success" />
              Låg Risk, Hög Utväxling
            </div>
            <h1 className="text-white mb-6">Quick Scan: <br /><span className="text-brand-success">Spara 100-tals timmar</span> på fel ansökan</h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Många företag bränner miljoner på konsulter för ansökningar som aldrig 
              hade en chans. Vår Quick Scan ger dig svaret svart på vitt för 4 900 kr.
            </p>
            <Button asChild size="lg" className="bg-brand-success hover:bg-opacity-90 text-white px-10 h-16 rounded-xl font-bold shadow-2xl shadow-black/20">
              <Link href="/kontakt?product=quick-scan">Beställ en Quick Scan nu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ WHAT YOU GET ━━━ */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="mb-4">Vad ingår i en Quick Scan?</h2>
            <p className="text-brand-neutral text-lg">
              Du får inte bara ett ja eller nej. Du får en fullständig analys 
              utförd av en senior expert som tidigare arbetat på Vinnova eller EU-kommissionen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
               <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  <FileSearch className="w-6 h-6" />
               </div>
               <h3 className="text-xl mb-4 text-brand-deep">Skriftlig Analys</h3>
               <p className="text-brand-neutral text-sm leading-relaxed">
                 En genomgång av ert projekt mot kriterierna för Excellence, Impact och Implementation.
               </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
               <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  <Target className="w-6 h-6" />
               </div>
               <h3 className="text-xl mb-4 text-brand-deep">Top 3 Matchningar</h3>
               <p className="text-brand-neutral text-sm leading-relaxed">
                 Vi identifierar de tre programmen (EU + Nationella) där ni har absolut högst chans.
               </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
               <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  <BarChart3 className="w-6 h-6" />
               </div>
               <h3 className="text-xl mb-4 text-brand-deep">Sannolikhetskalkyl</h3>
               <p className="text-brand-neutral text-sm leading-relaxed">
                 En ärlig procentuell bedömning av era chanser till beviljande i nästa utlysning.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS ━━━ */}
      <section className="section-padding bg-brand-bg-muted">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="mb-8 text-brand-deep">Hur det fungerar</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-deep">Skicka in ert projekt-summary</h4>
                    <p className="text-brand-neutral text-sm">Fyll i vårt korta formulär och bifoga en presentation eller idébeskrivning.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-deep">Senior expertgranskning</h4>
                    <p className="text-brand-neutral text-sm">Våra seniora experter (f d handläggare) analyserar ert case mot aktuella utlysningar.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-brand-deep">Leverans av rapport</h4>
                    <p className="text-brand-neutral text-sm">Inom 48 timmar får ni en skriftlig rapport och en rekommendation om nästa steg.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-brand-deep/5 border border-gray-100">
               <ShieldCheck className="w-16 h-16 text-brand-success mb-8" />
               <h3 className="text-2xl mb-6 text-brand-deep">Vår "No-Fluff" Garanti</h3>
               <p className="text-brand-neutral text-lg mb-8 italic">
                 "Vi säger aldrig 'kanske' om vi menar 'nej'. Ni betalar för sanningen, 
                 inte för att vi ska sälja på er en dyrare tjänst."
               </p>
               <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                  <div className="w-12 h-12 bg-gray-100 rounded-full" />
                  <div>
                    <p className="font-bold text-sm text-brand-deep">Erik Andersson</p>
                    <p className="text-xs text-brand-neutral">Grundare, f d Vinnova-handläggare</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="section-padding text-center">
        <div className="container-tight max-w-2xl">
           <h2 className="mb-6">4 900 kr för fullständig klarhet</h2>
           <p className="text-brand-neutral text-lg mb-12">
             Investera en bråkdel av projektets värde för att veta om det är värt att 
             lägga hundratals timmar på en ansökan.
           </p>
           <Button asChild size="lg" className="bg-brand-success hover:bg-opacity-90 text-white px-10 h-16 rounded-xl font-bold shadow-2xl">
              <Link href="/kontakt?product=quick-scan" className="flex items-center gap-2">
                 Beställ Quick Scan
                 <ArrowRight className="w-4 h-4" />
              </Link>
           </Button>
           <p className="mt-6 text-xs text-brand-neutral italic">Leverans inom 48 timmar. Faktura efter leverans.</p>
        </div>
      </section>
    </div>
  );
}
