"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Wrench,
  FolderOpen,
  User,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/lib/actions";
import { PremiumButton } from "./ui/PremiumButton";

const navItems = [
  { name: "Översikt", href: "/dashboard", icon: LayoutDashboard },
  { name: "Mina verktyg", href: "/dashboard/verktyg", icon: Wrench },
  { name: "Mina projekt", href: "/dashboard/projekt", icon: FolderOpen },
  { name: "Konto", href: "/dashboard/konto", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState<{
    name: string;
    organization?: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#020408]/60 backdrop-blur-3xl border-r border-white/[0.04]">
      {/* Brand Header */}
      <div className="px-12 py-16">
        <Link href="/" className="group block">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">
              BridgeToGrants
            </h1>
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mt-4">
              Premium Portal
            </span>
          </motion.div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-8 space-y-4">
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="relative block">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "flex items-center gap-5 px-8 py-5 rounded-[2rem] transition-all duration-500 group",
                  isActive 
                    ? "bg-white/[0.04] text-white" 
                    : "text-white/30 hover:text-white/60 hover:bg-white/[0.01]"
                )}
              >
                <item.icon className={cn(
                  "w-6 h-6 transition-all duration-500",
                  isActive ? "text-white" : "text-white/20 group-hover:text-white/40"
                )} />
                <span className="text-sm font-bold tracking-tight">{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute left-0 w-1 h-6 bg-blue-500 rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="p-10">
        {user ? (
          <div className="bg-white/[0.02] rounded-[2.5rem] p-8 border border-white/[0.03]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-xl shadow-blue-500/10 border border-white/10">
                {user.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate tracking-tight">{user.name}</p>
                <p className="text-[10px] text-white/30 uppercase font-black tracking-widest truncate mt-1">Premium</p>
              </div>
            </div>
            
            <form action={logoutAction}>
              <PremiumButton
                variant="outline"
                className="w-full h-12 text-xs rounded-2xl border-white/[0.05] text-white/60 hover:text-white hover:border-white/10"
              >
                <LogOut className="w-3 h-3" /> Logga ut
              </PremiumButton>
            </form>
          </div>
        ) : (
          <div className="h-20 animate-pulse bg-white/5 rounded-3xl" />
        )}
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block h-screen sticky top-0 z-40" style={{ width: 340 }}>
        {sidebarContent}
      </aside>
    </>
  );
}
