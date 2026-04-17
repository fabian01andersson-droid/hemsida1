"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Target,
  Euro,
  CheckCircle2,
} from "lucide-react";

const programStats = [
  { program: "Horizon Europe", rate: "15%", secured: "€12.4M" },
  { program: "EIC Accelerator", rate: "22%", secured: "€8.7M" },
  { program: "Eurostars", rate: "45%", secured: "€4.2M" },
  { program: "LIFE", rate: "38%", secured: "€6.1M" },
  { program: "Vinnova", rate: "52%", secured: "€3.8M" },
];

export function SuccessDashboardPreview() {
  return (
    <section
      className="section-spacing relative overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="overline mb-4 block">Prestanda</span>
          <h2 className="font-heading mb-6 leading-tight">
            Transparens som{" "}
            <span style={{ color: "var(--brand-primary)" }}>
              fortroendebyggare.
            </span>
          </h2>
          <p className="text-lg" style={{ color: "var(--text-body)" }}>
            Ingen annan svensk konsult publicerar sina siffror. Vi gor det for
            att vi tror pa resultat fore loften.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { value: "842 MSEK", label: "Totalt sakrat", icon: Euro },
            { value: "68%", label: "Beviljandegrad", icon: Target },
            { value: "127", label: "Projekt 2025", icon: BarChart3 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "var(--brand-primary-light)",
                  color: "var(--brand-primary)",
                }}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="stat-number mb-2">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "var(--bg-white)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div
            className="p-8 flex justify-between items-center"
            style={{
              background: "var(--bg-section)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <h3 className="font-heading text-xl">
              Beviljandegrad per program
            </h3>
            <span className="stat-label">Q1 2026</span>
          </div>
          <div>
            {programStats.map((p, i) => (
              <div
                key={i}
                className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
                style={{
                  borderBottom:
                    i < programStats.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "var(--brand-primary-light)",
                      color: "var(--brand-primary)",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{p.program}</span>
                </div>
                <div className="flex gap-12 text-right">
                  <div>
                    <p className="stat-label mb-1">Var grad</p>
                    <p
                      className="text-xl font-extrabold"
                      style={{ color: "var(--brand-success)" }}
                    >
                      {p.rate}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="stat-label mb-1">Totalt sakrat</p>
                    <p className="text-xl font-extrabold">{p.secured}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
