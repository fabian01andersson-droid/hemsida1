"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FolderOpen, Plus, Search, ExternalLink, Trash2, Clock } from "lucide-react";

const mockProjects = [
  { id: "1", name: "Solcells-innovation 2026", programme: "Horizon Europe", status: "Pågående" as const, progress: 65, amount: "€420 000", lastEdited: "2026-04-12" },
  { id: "2", name: "Cirkulär Plaståtervinning", programme: "LIFE-programmet", status: "Slutförd" as const, progress: 100, amount: "€280 000", lastEdited: "2026-03-28" },
  { id: "3", name: "AI-baserad Diagnostik", programme: "EIC Accelerator", status: "Utkast" as const, progress: 12, amount: "€750 000", lastEdited: "2026-04-14" },
  { id: "4", name: "Energieffektivisering Skola", programme: "Vinnova", status: "Pågående" as const, progress: 45, amount: "€150 000", lastEdited: "2026-04-10" },
];

const statusColors: Record<string, string> = {
  Pågående: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Slutförd: "bg-green-500/10 text-green-400 border-green-500/20",
  Utkast: "bg-white/[0.05] text-white/40 border-white/[0.05]",
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Alla");

  const filtered = mockProjects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.programme.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "Alla" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.05] pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <FolderOpen className="w-5 h-5 text-white/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Projekt</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Mina projekt</h1>
          <p className="text-white/40 text-lg font-medium">Hantera och följ upp dina pågående EU-ansökningar.</p>
        </motion.div>
        <Link href="/matcha" className="h-14 px-8 bg-blue-600 text-white rounded-[2rem] font-bold flex items-center gap-2 hover:bg-blue-500 transition-colors shrink-0">
          <Plus className="w-4 h-4" /> Nytt projekt
        </Link>
      </header>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input type="text" placeholder="Sök projekt eller program..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-14 pl-12 pr-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white text-sm outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="h-14 px-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white text-sm outline-none md:w-48 appearance-none cursor-pointer">
          <option value="Alla" className="bg-[#0a0a0c]">Alla</option>
          <option value="Pågående" className="bg-[#0a0a0c]">Pågående</option>
          <option value="Slutförd" className="bg-[#0a0a0c]">Slutförd</option>
          <option value="Utkast" className="bg-[#0a0a0c]">Utkast</option>
        </select>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-500"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white text-lg mb-1 tracking-tight">{p.name}</h3>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full border ${statusColors[p.status]}`}>
                  {p.status}
                </span>
                <span className="text-xs text-white/20">{p.programme}</span>
                <span className="text-xs text-white/10 flex items-center gap-1"><Clock className="w-3 h-3" /> {p.lastEdited}</span>
              </div>
            </div>

            <div className="w-32 shrink-0">
              <div className="flex justify-between mb-1.5">
                <span className="text-[10px] font-black text-white/40">{p.progress}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{
                  width: `${p.progress}%`,
                  background: p.progress === 100 ? "#38A169" : "#3B82F6",
                }} />
              </div>
            </div>

            <p className="text-xl font-black text-white shrink-0 w-28 text-right">{p.amount}</p>

            <div className="flex gap-2 shrink-0">
              <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/20 hover:text-white hover:border-white/20 transition-all" aria-label="Öppna">
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-red-400/40 hover:text-red-400 hover:border-red-500/20 transition-all" aria-label="Ta bort">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <FolderOpen className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/30">Inga projekt matchade din sökning.</p>
          </div>
        )}
      </div>
    </div>
  );
}
