"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Info, 
  ArrowLeft, 
  Save, 
  Download, 
  CircleDollarSign, 
  ShieldCheck,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BudgetKalkylator() {
  const [personalCosts, setPersonalCosts] = useState(1000000);
  const [equipmentCosts, setEquipmentCosts] = useState(200000);
  const [travelCosts, setTravelCosts] = useState(50000);
  const [otherCosts, setOtherCosts] = useState(100000);
  const [fundingRate, setFundingRate] = useState(70); // 70% standard

  const totalDirectCosts = personalCosts + equipmentCosts + travelCosts + otherCosts;
  const indirectCosts = totalDirectCosts * 0.25; // 25% overhead standard
  const totalBudget = totalDirectCosts + indirectCosts;
  const grantAmount = (totalBudget * fundingRate) / 100;
  const ownContribution = totalBudget - grantAmount;

  return (
    <div className="bg-background-muted min-h-screen py-16 md:py-24">
      <div className="container-tight max-w-5xl">
        <Link href="/verktyg" className="inline-flex items-center gap-2 text-sm font-bold text-brand-neutral hover:text-brand-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Tillbaka till verktyg
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Input Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-brand-deep/5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl text-brand-deep">Budget-kalkylator</h1>
                  <p className="text-brand-neutral text-sm">Uppskatta projektbudget och stödbelopp enligt EU-standard.</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-neutral mb-4">
                    <span>Personalkostnader (Brutto + OH)</span>
                    <span className="text-brand-deep">{personalCosts.toLocaleString("sv-SE")} kr</span>
                  </label>
                  <input
                    type="range" min="0" max="10000000" step="50000"
                    value={personalCosts} onChange={(e) => setPersonalCosts(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-neutral mb-4">
                    <span>Utrustning & Material</span>
                    <span className="text-brand-deep">{equipmentCosts.toLocaleString("sv-SE")} kr</span>
                  </label>
                  <input
                    type="range" min="0" max="5000000" step="10000"
                    value={equipmentCosts} onChange={(e) => setEquipmentCosts(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                   <div>
                    <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-neutral mb-4">
                      <span>Resor & Traktamente</span>
                    </label>
                    <input
                      type="number" value={travelCosts} onChange={(e) => setTravelCosts(Number(e.target.value))}
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-neutral mb-4">
                      <span>Övriga direkta kostnader</span>
                    </label>
                    <input
                      type="number" value={otherCosts} onChange={(e) => setOtherCosts(Number(e.target.value))}
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-brand-neutral mb-4">
                    Finansieringsgrad (%)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 70, 85, 100].map(rate => (
                      <button
                        key={rate} onClick={() => setFundingRate(rate)}
                        className={`h-12 rounded-xl border-2 font-bold text-sm transition-all ${
                          fundingRate === rate ? "border-brand-primary bg-brand-primary text-white" : "border-gray-100 bg-white text-brand-neutral hover:border-gray-200"
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 flex gap-4">
                <Info className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-xs text-brand-neutral leading-relaxed">
                  <strong>Notera:</strong> Kalkylatorn använder 25% schablon för indirekta kostnader (overheads), vilket är standard i Horizon Europe och LIFE. Faktiska regler kan variera per utlysning.
                </p>
              </div>
            </div>
          </div>

          {/* Result Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-deep rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl shadow-brand-deep/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
               
               <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                 <CircleDollarSign className="w-5 h-5 text-brand-success" />
                 Sammanställning
               </h3>

               <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-end">
                    <span className="text-sm opacity-60">Total projektbudget</span>
                    <span className="text-2xl font-bold">{totalBudget.toLocaleString("sv-SE")} kr</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-sm opacity-60">Varav overhead (25%)</span>
                    <span className="text-sm font-bold text-white/80">{indirectCosts.toLocaleString("sv-SE")} kr</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-sm font-bold text-brand-success">Sökt bidrag ({fundingRate}%)</span>
                    <span className="text-3xl font-black text-brand-success">{grantAmount.toLocaleString("sv-SE")} kr</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm opacity-60">Egeninsats</span>
                    <span className="text-sm font-bold text-white/80">{ownContribution.toLocaleString("sv-SE")} kr</span>
                  </div>
               </div>

               <div className="space-y-4">
                  <Button asChild className="w-full h-14 bg-brand-success hover:bg-opacity-90 text-white font-bold rounded-xl shadow-lg">
                    <Link href="/kontakt" className="flex items-center justify-center gap-2">
                      Boka Reality Check
                      <Zap className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/20 text-white hover:bg-white/10 font-bold rounded-xl">
                    Spara som PDF (Coming soon)
                  </Button>
               </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-brand-deep/5">
               <h4 className="font-bold text-brand-deep mb-6 flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-brand-primary" />
                 Senior granskning
               </h4>
               <p className="text-sm text-brand-neutral leading-relaxed mb-6">
                 Budgeten är ofta den del där flest ansökningar fallerar. Vi hjälper er att optimera 
                 kostnaderna så att de håller för en granskning från EU:s revisorer.
               </p>
               <ul className="space-y-3">
                  {["Korrekt OH-beräkning", "Stödmottagarberättigade kostnader", "Balanserad resursfördelning"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs font-bold text-brand-deep">
                       <CheckCircle2 className="w-4 h-4 text-brand-success" />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
