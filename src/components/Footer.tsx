"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const links = {
  Tjänster: [
    { label: "Quick Scan", href: "/tjanster" },
    { label: "Ansökningsskrivning", href: "/tjanster" },
    { label: "Post-Award", href: "/tjanster" },
    { label: "EU-Stöd Scanner", href: "/matcha" },
  ],
  Program: [
    { label: "Horizon Europe", href: "/program/horizon-europe" },
    { label: "Digital Europe", href: "/program/digital-europe" },
    { label: "LIFE", href: "/program/life" },
    { label: "Alla program", href: "/program" },
  ],
  Resurser: [
    { label: "Kunskap", href: "/kunskap" },
    { label: "Case Studies", href: "/case" },
    { label: "Resultat", href: "/resultat" },
    { label: "Team", href: "/team" },
  ],
};

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <footer className="bg-[#0a0a0c] text-white">
      {/* CTA strip */}
      <div className="container-apple px-6 py-20 md:py-32">
        <div className="bg-white/[0.03] border border-white/[0.05] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
              EU-intelligence varje vecka.
            </h3>
            <p className="text-white/30 text-sm font-medium">
              Deadlines, nya utlysningar och tips. Ingen spam.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="din@email.se"
              className="h-14 px-6 bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/20 rounded-2xl text-sm flex-1 md:w-64 outline-none focus:border-white/20"
            />
            <button className="h-14 px-8 bg-white text-black font-bold text-sm rounded-2xl hover:bg-white/90 flex items-center gap-2 shrink-0">
              Prenumerera <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-apple px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="font-black text-xl tracking-tighter mb-6 block">
              BridgeToGrants
            </Link>
            <p className="text-xs text-white/20 leading-relaxed max-w-[200px]">
              Sveriges ledande EU-finansieringsbyrå. Seniora experter + AI.
            </p>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">{cat}</h4>
              <ul className="space-y-3">
                {items.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.05]">
        <div className="container-apple px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20 font-medium">
            &copy; {new Date().getFullYear()} BridgeToGrants. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6 text-[11px] text-white/20">
            <Link href="#" className="hover:text-white/50">Integritetspolicy</Link>
            <Link href="#" className="hover:text-white/50">Villkor</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
