"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Program", href: "/program" },
  { name: "Tjänster", href: "/tjanster" },
  { name: "Case", href: "/case" },
  { name: "Verktyg", href: "/verktyg" },
];

export function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) return null; // Vi vill ha en separat navigation för dashboarden

  return (
    <nav className="glass-nav h-[52px] flex items-center">
      <div className="container-apple flex justify-between items-center w-full">
        <Link href="/" className="font-black text-lg tracking-tighter hover:opacity-70 transition-opacity">
          BridgeToGrants
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-xs font-medium text-[#1d1d1f]/80 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-xs font-medium hover:opacity-70">
            Logga in
          </Link>
          <Link 
            href="/matcha" 
            className="bg-black text-white px-4 py-1.5 rounded-full text-[11px] font-bold hover:bg-[#333] transition-colors"
          >
            Starta Scanner
          </Link>
        </div>
      </div>
    </nav>
  );
}
