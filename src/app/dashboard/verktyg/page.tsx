"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardCheck, Calculator, Zap, Activity, ArrowUpRight, Wrench } from "lucide-react";

const tools = [
  { name: "Ansökningschecklista", href: "/verktyg/checklista", icon: ClipboardCheck, desc: "En steg-för-steg guide för att bygga en komplett EU-ansökan.", color: "blue" },
  { name: "Budgetkalkylator", href: "/verktyg/kalkylator", icon: Calculator, desc: "Beräkna personalkostnader, overhead och bidragsbelopp.", color: "green" },
  { name: "EU-Stöd Scanner", href: "/matcha", icon: Zap, desc: "Hitta de mest relevanta utlysningarna för ditt projekt.", color: "amber", badge: "AI Native" },
  { name: "7-stegsprocessen", href: "#", icon: Activity, desc: "Följ vår beprövade metodik från idé till beviljad finansiering.", color: "purple" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
};

export default function DashboardVerktygPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <header className="border-b border-white/[0.05] pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-5 h-5 text-white/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Verktyg</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Mina verktyg</h1>
          <p className="text-white/40 text-lg font-medium">Alla interaktiva verktyg samlade på ett ställe.</p>
        </motion.div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={tool.href} className="group block h-full">
              <div className="h-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] rounded-[3rem] p-10 transition-all duration-700 flex flex-col relative">
                {tool.badge && (
                  <div className="absolute top-8 right-8 px-3 py-1 bg-white text-[9px] font-black text-black uppercase tracking-widest rounded-full">
                    {tool.badge}
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-8 ${colorMap[tool.color]}`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">{tool.name}</h3>
                <p className="text-white/30 text-sm leading-relaxed flex-1">{tool.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Öppna verktyg <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
