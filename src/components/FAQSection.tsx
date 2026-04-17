"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Hur uppratthaller ni en beviljandegrad pa 68%?",
    a: "Var metodik innefattar en granskningsprocess i flera steg utford av tidigare EU-utvarderare. Vi driver bara vidare projekt som overstiger vara troskelvarder for excellens och impact.",
  },
  {
    q: "Vad kostar era tjanster?",
    a: "Vi erbjuder en kostnadsfri 15-minuters Reality Check. Var Quick Scan kostar 4 900 kr och ger en analys av ert projekt mot relevanta program.",
  },
  {
    q: "Erbjuder ni stod efter beviljad finansiering?",
    a: "Ja. Vi erbjuder full livscykel-support: ekonomisk rapportering, timredovisning, revisioner och slutrapportering.",
  },
];

export default function FAQSection() {
  return (
    <section
      className="section-spacing"
      style={{ background: "var(--bg-white)" }}
    >
      <div className="container-site max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="overline mb-4 block">FAQ</span>
          <h2 className="font-heading leading-tight">
            Vanliga{" "}
            <span style={{ color: "var(--brand-primary)" }}>fragor.</span>
          </h2>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="card p-0 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${i}`} className="border-none px-8">
                <AccordionTrigger className="hover:no-underline py-6 font-bold text-left tracking-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-6 leading-relaxed"
                  style={{ color: "var(--text-body)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
