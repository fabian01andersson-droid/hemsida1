import Link from "next/link";
import { 
  ClipboardCheck, 
  Calculator, 
  Zap, 
  Activity, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  { 
    name: "Ansökningschecklista", 
    icon: ClipboardCheck, 
    desc: "Vår mest populära guide. En steg-för-steg metodik för att bygga en komplett och konkurrenskraftig EU-ansökan.",
    color: "blue"
  },
  { 
    name: "Budgetkalkylator", 
    icon: Calculator, 
    desc: "Eliminera räknefel. Beräkna personalkostnader, overhead och bidragsbelopp enligt specifika programregler.",
    color: "green"
  },
  { 
    name: "EU-Stöd Scanner", 
    icon: Zap, 
    desc: "AI-driven matchning. Hitta de mest relevanta utlysningarna för din verksamhet på under 60 sekunder.",
    color: "amber"
  },
  { 
    name: "7-stegs process", 
    icon: Activity, 
    desc: "Din strategiska roadmap. Följ Bridge-metodiken från tidig projektidé till slututbetalning.",
    color: "purple"
  },
];

export default function VerktygTeaserPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ━━━ HERO ━━━ */}
      <section className="bg-brand-bg-muted pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-tight relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fade-in">
            <Sparkles className="w-3 h-3 fill-brand-primary/20" />
            Premium Access
          </div>
          <h1 className="mb-8 text-brand-deep tracking-tight text-balance">
            Professionella verktyg för <span className="text-brand-primary">vinnande finansiering</span>
          </h1>
          <p className="text-xl text-brand-neutral/70 leading-relaxed max-w-2xl mx-auto font-medium mb-12">
            Få tillgång till marknadens kraftfullaste verktygslåda för EU-stöd. 
            Vi har digitaliserat vår expertis för att ge dig bästa möjliga förutsättningar.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-deep text-white px-10 h-16 rounded-2xl font-black uppercase tracking-widest text-xs shadow-premium-lg hover:shadow-glow-brand transition-all">
                <Link href="/login">Logga in för åtkomst</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="border-gray-200 text-brand-deep px-10 h-16 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all bg-white">
                <Link href="/register">Skapa konto</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* ━━━ TOOLS GRID ━━━ */}
      <section className="pb-32 -mt-16 relative z-20">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-premium-lg group hover:border-brand-primary/20 transition-all relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-700">
                    <tool.icon className="w-40 h-40" />
                 </div>
                 
                 <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-primary/40 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all mb-10">
                    <tool.icon className="w-8 h-8" />
                 </div>
                 
                 <h3 className="text-3xl text-brand-deep font-black mb-4 tracking-tight">{tool.name}</h3>
                 <p className="text-brand-neutral/60 text-lg leading-relaxed mb-10 font-medium">
                   {tool.desc}
                 </p>
                 
                 <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 text-brand-neutral/40 font-black text-[10px] uppercase tracking-widest w-fit border border-gray-100 group-hover:bg-brand-primary/5 group-hover:text-brand-primary group-hover:border-brand-primary/10 transition-all">
                    <Lock className="w-3.5 h-3.5" />
                    Kräver Premium-medlemskap
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHY BRIDGE? ━━━ */}
      <section className="py-32 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="container-tight relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <h2 className="text-white mb-10 tracking-tight">Varför välja Bridge?</h2>
                <div className="space-y-8">
                   {[
                     { title: "Digitaliserad expertis", desc: "Vi har kokat ner 15 års erfarenhet av EU-finansiering till smarta, lättanvända verktyg." },
                     { title: "Högre beviljandegrad", desc: "Våra kunder har i genomsnitt 40% högre chans att få sina ansökningar beviljade." },
                     { title: "Tidsbesparande processer", desc: "Minska administrationen och fokusera på din kärnverksamhet medan vi guidar dig rätt." },
                     { title: "Säkerhet i fokus", desc: "Din data är krypterad och lagras säkert inom EU. Vi skyddar dina affärshemligheter." }
                   ].map(item => (
                     <div key={item.title} className="flex gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-success/20 group-hover:border-brand-success/30 transition-all">
                           <CheckCircle2 className="w-6 h-6 text-brand-success" />
                        </div>
                        <div>
                           <h4 className="font-black text-xl mb-2 text-white group-hover:text-brand-success transition-colors">{item.title}</h4>
                           <p className="text-white/50 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="bg-white/5 backdrop-blur-2xl rounded-[4rem] p-12 md:p-16 border border-white/10 text-center shadow-2xl relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-success/20 blur-[60px] rounded-full" />
                <ShieldCheck className="w-20 h-20 text-brand-success mx-auto mb-10" />
                <h3 className="text-3xl font-black mb-8 text-white tracking-tight">Redo att säkra er finansiering?</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-12 font-medium">
                  Anslut er till hundratals framgångsrika företag och kommuner som använder Bridge för att navigera i EU:s stödsystem.
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-brand-success hover:bg-white hover:text-brand-success text-white px-10 h-16 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-black/20">
                    <Link href="/register">Skapa ett gratis konto</Link>
                  </Button>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                    Ingen bindningstid · Inga dolda avgifter
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER CTA ━━━ */}
      <section className="py-24 text-center">
        <div className="container-tight">
          <p className="text-brand-neutral/40 font-bold uppercase tracking-[0.3em] mb-6 text-xs">Bridge To Grants</p>
          <h2 className="text-brand-deep mb-10">Har du frågor?</h2>
          <Button asChild variant="ghost" className="text-brand-primary font-black uppercase tracking-widest text-xs hover:bg-brand-primary/5">
             <Link href="/kontakt" className="flex items-center gap-2">
                Kontakta en rådgivare <ArrowRight className="w-4 h-4" />
             </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
