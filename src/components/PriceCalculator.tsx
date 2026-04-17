"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";

type ProjectType = "sme-innovation" | "large-eu-consortium" | "public-sector" | "compliance-only";

export function PriceCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>("sme-innovation");
  const [budget, setBudget] = useState(5000000);

  const calculatePrice = () => {
    let base = 0;
    let successFee = "0%";
    let description = "";

    switch (projectType) {
      case "sme-innovation":
        base = 45000;
        successFee = "5-8%";
        description = "Passar Horizon Europe (EIC), Eurostars & Vinnova.";
        break;
      case "large-eu-consortium":
        base = 95000;
        successFee = "3-5%";
        description = "Storskaliga samarbetsprojekt med flera partners.";
        break;
      case "public-sector":
        base = 65000;
        successFee = "0% (Fast pris)";
        description = "LIFE, Interreg & regionala fonder för kommuner.";
        break;
      case "compliance-only":
        base = 5000;
        successFee = "0%";
        description = "Löpande rapportering och revision efter beviljande.";
        break;
    }

    return { base, successFee, description };
  };

  const { base, successFee, description } = calculatePrice();

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--bg-white)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="grid lg:grid-cols-2">
        {/* Input Side */}
        <div className="p-8 md:p-10" style={{ background: "var(--bg-section)" }}>
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}
            >
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-xl" style={{ color: "var(--text-primary)" }}>
              Pris-kalkylator
            </h3>
          </div>

          <div className="space-y-8">
            <div>
              <label className="stat-label block mb-4">Typ av projekt</label>
              <div className="grid gap-3">
                {[
                  { id: "sme-innovation", label: "Innovation (SME)" },
                  { id: "large-eu-consortium", label: "EU-Konsortium (Large)" },
                  { id: "public-sector", label: "Offentlig sektor / Kommun" },
                  { id: "compliance-only", label: "Rapportering & Revision" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as ProjectType)}
                    className="flex items-center justify-between p-4 rounded-xl transition-all text-left"
                    style={{
                      border: projectType === type.id
                        ? "2px solid var(--brand-primary)"
                        : "2px solid var(--border)",
                      background: projectType === type.id
                        ? "var(--brand-primary-light)"
                        : "var(--bg-white)",
                      color: projectType === type.id
                        ? "var(--brand-primary)"
                        : "var(--text-body)",
                    }}
                  >
                    <span className="font-bold text-sm">{type.label}</span>
                    {projectType === type.id && (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {projectType !== "compliance-only" && (
              <div>
                <label className="stat-label block mb-4">
                  Sökt belopp (MSEK): {budget / 1000000} Mkr
                </label>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: "var(--brand-primary)" }}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    0.5 Mkr
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    50 Mkr
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Result Side */}
        <div
          className="p-8 md:p-10 flex flex-col justify-center"
          style={{ background: "var(--bg-white)", borderLeft: "1px solid var(--border)" }}
        >
          <div className="mb-8">
            <span className="badge badge-success mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Transparent modell
            </span>
            <p className="text-sm" style={{ color: "var(--text-body)" }}>{description}</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <p className="stat-label mb-1">Fast arvode (Grundavgift)</p>
              <p className="text-4xl font-extrabold" style={{ color: "var(--text-primary)" }}>
                {projectType === "compliance-only"
                  ? "Från 5 000 kr"
                  : `Ca ${base.toLocaleString("sv-SE")} kr`}
                {projectType === "compliance-only" && (
                  <span className="text-sm font-medium ml-2" style={{ color: "var(--text-muted)" }}>
                    / mån
                  </span>
                )}
              </p>
            </div>

            {projectType !== "compliance-only" && (
              <div>
                <p className="stat-label mb-1">Success Fee (Beviljat stöd)</p>
                <p className="text-3xl font-bold" style={{ color: "var(--brand-success)" }}>
                  {successFee}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Betalas endast ut vid faktiskt beviljat stöd.
                </p>
              </div>
            )}
          </div>

          <div className="pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <div
              className="p-5 rounded-xl mb-6"
              style={{
                background: "var(--brand-primary-light)",
                border: "1px solid var(--brand-primary)",
                borderColor: "color-mix(in srgb, var(--brand-primary) 20%, transparent)",
              }}
            >
              <div className="flex gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "var(--brand-primary)", color: "#fff" }}
                >
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                    Quick Scan: 4 900 kr
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-body)" }}>
                    Vill du testa idén först? En fullständig analys av er chans till beviljande utförd av seniora experter.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/kontakt" className="btn-primary w-full justify-center text-base font-bold">
              Boka 15-min Reality Check
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
