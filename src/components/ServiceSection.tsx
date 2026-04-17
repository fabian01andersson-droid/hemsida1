"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Zap,
    title: "Strategisk Kapitalisering",
    desc: "Vi analyserar det europeiska finansieringslandskapet for att matcha er tekniska roadmap med de mest lukrativa programmen.",
    href: "/tjanster",
  },
  {
    icon: BarChart3,
    title: "AI + Senior Expertis",
    desc: "Var metod kombinerar seniora utvarderares expertis med AI-driven precision for att leverera hogpoangs-ansokningar.",
    href: "/tjanster",
  },
  {
    icon: ShieldCheck,
    title: "Post-Award Management",
    desc: "End-to-end-stod genom hela projektlivscykeln: ekonomisk rapportering, timredovisning, revision och slutrapportering.",
    href: "/tjanster#post-award",
  },
  {
    icon: Globe2,
    title: "Konsortie-Engineering",
    desc: "Vi bygger elit-konsortier genom vart europeiska natverk -- kopplar samman er med ratt partners for att vinna.",
    href: "/tjanster",
  },
];

export default function ServiceSection() {
  return (
    <section
      className="section-spacing"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="overline mb-4 block">Expertis</span>
          <h2 className="font-heading mb-6 leading-tight">
            Exklusiva losningar for{" "}
            <span style={{ color: "var(--brand-primary)" }}>
              komplex finansiering.
            </span>
          </h2>
          <p className="text-lg" style={{ color: "var(--text-body)" }}>
            Vi overbryggar klyftan mellan innovation och kapital genom ett
            rigorost, metodikstyrt tillagangssatt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col h-full"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all"
                style={{
                  background: "var(--brand-primary-light)",
                  color: "var(--brand-primary)",
                }}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl mb-4 tracking-tight">
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-8 flex-1"
                style={{ color: "var(--text-body)" }}
              >
                {service.desc}
              </p>
              <Link
                href={service.href}
                className="flex items-center text-xs font-bold uppercase tracking-widest gap-3 hover:gap-5 transition-all"
                style={{ color: "var(--brand-primary)" }}
              >
                Las Mer <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
