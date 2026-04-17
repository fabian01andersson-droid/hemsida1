import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Resultat — Live Success Dashboard — BridgeToGrants",
  description: "Se vår faktiska beviljandegrad per program, totalt säkrad finansiering och jämförelse mot EU-snittet.",
};

const topMetrics = [
  { value: "842", unit: "MSEK", label: "Total Säkrad Finansiering" },
  { value: "68%", unit: "", label: "Genomsnittlig Beviljandegrad" },
  { value: "127", unit: "+", label: "Genomförda Projekt" },
  { value: "340", unit: "+", label: "Partners i Nätverket" },
];

const programmeBreakdown = [
  { name: "Horizon Europe", apps: 45, approved: 35, bridgeRate: "78%", euAvg: "17%", secured: "245 MSEK" },
  { name: "EIC Accelerator", apps: 18, approved: 11, bridgeRate: "61%", euAvg: "5%", secured: "198 MSEK" },
  { name: "Eurostars", apps: 22, approved: 17, bridgeRate: "77%", euAvg: "35%", secured: "89 MSEK" },
  { name: "LIFE", apps: 15, approved: 10, bridgeRate: "67%", euAvg: "25%", secured: "112 MSEK" },
  { name: "Vinnova", apps: 34, approved: 28, bridgeRate: "82%", euAvg: "30%", secured: "156 MSEK" },
  { name: "Digital Europe", apps: 12, approved: 8, bridgeRate: "67%", euAvg: "20%", secured: "42 MSEK" },
];

const recentWins = [
  { date: "Mars 2026", company: "GreenSteel Nordic", programme: "Innovation Fund", amount: "95 MSEK" },
  { date: "Feb 2026", company: "AI Diagnostics AB", programme: "Horizon Europe", amount: "35.8 MSEK" },
  { date: "Jan 2026", company: "Nordic EdTech Group", programme: "Digital Europe", amount: "15.7 MSEK" },
];

export default function ResultatPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">RESULTAT</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Transparenta<br /><span className="text-blue-600">siffror.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Vi publicerar våra faktiska resultat. Ingen annan svensk EU-konsult gör det.
          </p>
        </div>
      </section>

      {/* Top Metrics */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {topMetrics.map((m) => (
              <div key={m.label} className="bg-[#f5f5f7] rounded-[2.5rem] p-10 text-center">
                <p className="text-4xl md:text-5xl font-black text-slate-900">
                  {m.value}<span className="text-blue-600">{m.unit}</span>
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-3">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Breakdown */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Per program.</h2>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Program</th>
                    <th className="text-center p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ansökningar</th>
                    <th className="text-center p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Beviljade</th>
                    <th className="text-center p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Vår Rate</th>
                    <th className="text-center p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">EU-snitt</th>
                    <th className="text-right p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Säkrat</th>
                  </tr>
                </thead>
                <tbody>
                  {programmeBreakdown.map((p) => (
                    <tr key={p.name} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="p-6 font-bold text-slate-900">{p.name}</td>
                      <td className="p-6 text-center text-slate-500">{p.apps}</td>
                      <td className="p-6 text-center text-slate-500">{p.approved}</td>
                      <td className="p-6 text-center">
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-black">{p.bridgeRate}</span>
                      </td>
                      <td className="p-6 text-center text-slate-400">{p.euAvg}</td>
                      <td className="p-6 text-right font-bold text-slate-900">{p.secured}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Wins */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Senaste beviljanden.</h2>
          <div className="space-y-4">
            {recentWins.map((w) => (
              <div key={w.company} className="bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg">{w.company}</h4>
                    <p className="text-sm text-slate-400">{w.programme} · {w.date}</p>
                  </div>
                </div>
                <p className="text-2xl font-black text-slate-900">{w.amount}</p>
              </div>
            ))}
          </div>
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
