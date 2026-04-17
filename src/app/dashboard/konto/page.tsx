"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Shield,
  Bell,
  Building2,
  Lock,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function AccountPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [notificationsOn, setNotificationsOn] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          const parts = data.user.name.split(" ");
          setFirstName(parts[0] || "");
          setLastName(parts.slice(1).join(" ") || "");
          setEmail(data.user.email || "");
          setOrganization(data.user.organization || "");
        }
      })
      .catch(() => {});
  }, []);

  const handleSave = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-24 pb-32">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/[0.05] pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Profilhantering</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Kontoinställningar
          </h1>
          <p className="text-white/40 text-lg font-medium">
            Hantera din digitala närvaro och säkerhetsinställningar.
          </p>
        </motion.div>
        
        <div className="flex items-center gap-6 px-8 py-4 bg-white/[0.02] border border-white/[0.05] rounded-[2rem]">
          <div className="text-right">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Status</p>
            <p className="text-sm font-bold text-white">Premium Tier</p>
          </div>
          <div className="w-px h-8 bg-white/[0.05]" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 border border-white/20" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          {/* Profile Section */}
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Personuppgifter</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] ml-1">Förnamn</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-14 bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 text-white focus:bg-white/[0.04] focus:border-white/20 transition-all outline-none"
                  placeholder="Förnamn"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] ml-1">Efternamn</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-14 bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 text-white focus:bg-white/[0.04] focus:border-white/20 transition-all outline-none"
                  placeholder="Efternamn"
                />
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] ml-1">E-post</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 bg-white/[0.02] border border-white/[0.05] rounded-2xl pl-14 pr-6 text-white focus:bg-white/[0.04] focus:border-white/20 transition-all outline-none"
                    placeholder="namn@organisation.se"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Säkerhet & Preferenser</h2>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center justify-between p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white/40">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Lösenord</p>
                    <p className="text-xs text-white/20 font-medium">Uppdaterades för 3 månader sedan</p>
                  </div>
                </div>
                <PremiumButton variant="outline" className="h-10 px-6 rounded-xl text-xs">Ändra</PremiumButton>
              </div>

              <div className="group flex items-center justify-between p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white/40">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Aviseringar</p>
                    <p className="text-xs text-white/20 font-medium">Få realtidsinfo om nya matchningar</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setNotificationsOn(!notificationsOn)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-500 ${
                    notificationsOn ? "bg-blue-600" : "bg-white/[0.1]"
                  }`}
                >
                  <motion.span
                    animate={{ x: notificationsOn ? 24 : 4 }}
                    className="inline-block h-4 w-4 rounded-full bg-white shadow-xl"
                  />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Activity */}
        <div className="space-y-12">
          <div className="bg-[#0a0a0c]/40 backdrop-blur-2xl border border-white/[0.05] rounded-[2.5rem] p-10">
            <h3 className="text-lg font-bold text-white mb-10 flex items-center gap-4">
              <Activity className="w-5 h-5 text-blue-400" />
              Live Activity
            </h3>
            <div className="space-y-10">
              <div className="relative pl-8 border-l border-blue-500/20">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Just nu</p>
                <p className="text-sm font-bold text-white mb-1">EU-Innovation Grant</p>
                <p className="text-xs text-white/30">Matchning bekräftad</p>
              </div>
              <div className="relative pl-8 border-l border-white/[0.05]">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">1h sedan</p>
                <p className="text-sm font-bold text-white mb-1">GreenTech Pro</p>
                <p className="text-xs text-white/30">94% Fit Score</p>
              </div>
            </div>
            <button className="w-full mt-10 py-4 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white border border-white/[0.05] hover:border-white/10 rounded-2xl transition-all flex items-center justify-center gap-2">
              Full logg <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          <div className="p-10 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem]">
            <p className="text-xs text-white/30 leading-relaxed font-medium">
              Dina data lagras enligt de högsta europeiska säkerhetsstandarderna. All kommunikation är krypterad end-to-end.
            </p>
          </div>
        </div>
      </div>

      {/* Save Button Floating / Footer */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-12 right-12 z-50"
      >
        <PremiumButton
          onAction={handleSave}
          variant="secondary"
          successText="Sparat!"
          className="h-16 px-10 rounded-[2rem] shadow-2xl shadow-blue-600/20"
        >
          Spara ändringar
        </PremiumButton>
      </motion.div>
    </div>
  );
}
