"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Plus,
  Clock,
  LayoutGrid,
  TrendingUp,
  FileText,
  Star,
  MessageSquare,
  Globe,
  ArrowUpRight,
  Calculator,
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Aktiva projekt",
    value: "03",
    icon: FileText,
    trend: "+12%",
    color: "blue",
  },
  {
    label: "Beviljandegrad",
    value: "84%",
    icon: Star,
    trend: "Excellence",
    color: "purple",
  },
  {
    label: "Identifierat kapital",
    value: "€1.2M",
    icon: Zap,
    trend: "Live",
    color: "green",
  },
];

const toolCards = [
  {
    name: "Grant Scanner",
    href: "/matcha",
    icon: Zap,
    desc: "Vår AI-motor matchar er profil mot 400+ aktuella EU-utlysningar i realtid.",
    badge: "AI Native",
  },
  {
    name: "Budgetmotor",
    href: "/verktyg/kalkylator",
    icon: Calculator,
    desc: "Avancerad kalkylator för personal, overhead och bidragssatser enligt EU:s regelverk.",
  },
];

export default function DashboardPage() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  const firstName = user?.name.split(" ")[0] || "Client";

  return (
    <div className="max-w-6xl mx-auto space-y-32">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-16 border-b border-white/[0.05] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">AI Node Active</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-10 leading-[0.9]">
            Hello, <br />
            <span className="text-white/20">{firstName}.</span>
          </h1>
          <p className="text-2xl text-white/40 font-medium leading-relaxed">
            Vi har identifierat <span className="text-white">2 nya utlysningar</span> som matchar din profil. 
            Portföljen presterar 12% över genomsnittet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6"
        >
          <PremiumButton variant="outline" className="h-16 px-10 rounded-[2rem] border-white/10 text-white hover:bg-white/5">
            Visa portfölj
          </PremiumButton>
          <PremiumButton variant="secondary" className="h-16 px-10 rounded-[2rem]">
            <Plus className="w-4 h-4" /> Ny ansökan
          </PremiumButton>
        </motion.div>
      </header>

      {/* Luxury Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            className="group relative bg-[#0a0a0c]/60 backdrop-blur-3xl border border-white/[0.05] rounded-[3.5rem] p-12 transition-all duration-1000 hover:border-white/10"
          >
            <div className="flex items-center justify-between mb-12">
              <div className={cn(
                "w-16 h-16 rounded-[1.5rem] flex items-center justify-center border",
                stat.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                stat.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                'bg-green-500/10 border-green-500/20 text-green-400'
              )}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                {stat.trend}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-6xl font-black text-white tracking-tighter">{stat.value}</p>
              <p className="text-xs font-bold text-white/20 uppercase tracking-[0.3em]">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-3 gap-20">
        {/* Tools Section */}
        <div className="lg:col-span-2 space-y-16">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-6">
              <LayoutGrid className="w-8 h-8 text-white/10" />
              Verktygslådan
            </h2>
            <Link href="/dashboard/verktyg" className="text-xs font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">
              Utforska alla
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {toolCards.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
              >
                <Link href={tool.href} className="group block relative h-full">
                  <div className="h-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] rounded-[3rem] p-12 transition-all duration-700 flex flex-col">
                    {tool.badge && (
                      <div className="absolute top-10 right-10 px-4 py-1.5 bg-white text-[9px] font-black text-black uppercase tracking-widest rounded-full">
                        {tool.badge}
                      </div>
                    )}
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-10 text-white/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <tool.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{tool.name}</h3>
                    <p className="text-white/30 leading-relaxed text-sm flex-1">{tool.desc}</p>
                    <div className="mt-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                      Öppna verktyg <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-16"
        >
          {/* Deadlines Card */}
          <div className="bg-[#0a0a0c]/40 backdrop-blur-2xl border border-white/[0.05] rounded-[3.5rem] p-12">
            <h3 className="text-xl font-bold text-white mb-12 flex items-center gap-5">
              <Clock className="w-6 h-6 text-white/10" />
              Deadlines
            </h3>
            <div className="space-y-12">
              <div className="relative pl-10 border-l border-white/[0.05]">
                <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">12 Okt</p>
                <h4 className="font-bold text-lg text-white mb-2 leading-tight">Horizon Europe</h4>
                <p className="text-xs text-white/20">Energy Innovation Call</p>
              </div>
              <div className="relative pl-10 border-l border-white/[0.05]">
                <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-white/10" />
                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-3">24 Okt</p>
                <h4 className="font-bold text-lg text-white mb-2 leading-tight">Intern granskning</h4>
                <p className="text-xs text-white/20">Möte med senior rådgivare</p>
              </div>
            </div>
          </div>

          {/* Expert Support Card */}
          <div className="relative group overflow-hidden rounded-[3.5rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90 transition-transform duration-1000 group-hover:scale-110" />
            <div className="relative p-12 flex flex-col h-full">
              <MessageSquare className="w-12 h-12 text-white mb-10" />
              <h3 className="text-3xl font-black text-white mb-6 leading-[1.1]">Expertgranskning tillgänglig.</h3>
              <p className="text-white/70 text-sm mb-12 leading-relaxed font-medium">
                Våra rådgivare kan granska ert utkast innan deadline för att säkra högsta poäng.
              </p>
              <PremiumButton variant="primary" className="w-full bg-white text-black hover:bg-blue-50">
                Boka nu
              </PremiumButton>
            </div>
          </div>

          <div className="p-12 bg-white/[0.01] border border-white/[0.03] rounded-[3rem]">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-4 h-4 text-white/10" />
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">European Central Hub</p>
            </div>
            <p className="text-xs text-white/10 leading-relaxed font-medium">
              Data lagras krypterat inom EU enligt GDPR.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
