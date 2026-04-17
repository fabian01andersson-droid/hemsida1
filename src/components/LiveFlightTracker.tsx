"use client";

import { motion } from "framer-motion";
import { Activity, Clock, TrendingUp, FileText } from "lucide-react";

const liveStats = [
  {
    icon: FileText,
    value: "14",
    label: "Pagaende ansokningar",
    iconBg: "var(--brand-primary-light)",
    iconColor: "var(--brand-primary)",
  },
  {
    icon: Clock,
    value: "23 dagar",
    label: "Till nasta deadline",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
  },
  {
    icon: TrendingUp,
    value: "7,3 MEUR",
    label: "Senast beviljat",
    iconBg: "var(--brand-success-light)",
    iconColor: "var(--brand-success)",
  },
  {
    icon: Activity,
    value: "68%",
    label: "Beviljandegrad 2025",
    iconBg: "var(--brand-primary-light)",
    iconColor: "var(--brand-primary-dark)",
  },
];

export function LiveFlightTracker() {
  return (
    <section
      style={{
        background: "var(--bg-white)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-site py-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between">
          <div className="flex items-center gap-4">
            <span
              className="flex h-3 w-3 rounded-full animate-pulse"
              style={{
                background: "var(--brand-success)",
                boxShadow: "0 0 12px rgba(56,161,105,0.5)",
              }}
            />
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                Live Performance Tracker
              </p>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.15em] mt-0.5"
                style={{ color: "var(--text-muted)", opacity: 0.6 }}
              >
                Senast uppdaterad: Q1 2026
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {liveStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 hover:scale-105 active:scale-95 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all"
                  style={{
                    background: stat.iconBg,
                    color: stat.iconColor,
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="text-base font-extrabold tracking-tight leading-none"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
