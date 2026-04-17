"use client";

import { useActionState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { registerAction } from "@/lib/actions";

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(registerAction, undefined);

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col justify-center items-center p-6">
      <Link href="/" className="mb-10 font-black text-2xl tracking-tighter">
        BridgeToGrants
      </Link>

      <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black mb-3">Skapa konto</h1>
          <p className="text-sm text-slate-400">Få tillgång till EU-Stöd Scanner, budgetkalkylator och mer.</p>
        </div>

        {state?.error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Förnamn</label>
              <input name="firstName" type="text" required placeholder="Anna"
                className="w-full h-14 px-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Efternamn</label>
              <input name="lastName" type="text" required placeholder="Johansson"
                className="w-full h-14 px-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Organisation</label>
            <input name="organization" type="text" placeholder="Valfritt"
              className="w-full h-14 px-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">E-post</label>
            <input name="email" type="email" required placeholder="namn@foretag.se"
              className="w-full h-14 px-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Lösenord</label>
            <input name="password" type="password" required placeholder="Minst 6 tecken"
              className="w-full h-14 px-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
          </div>
          <button disabled={pending}
            className="w-full h-14 bg-black text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            {pending ? "Skapar konto..." : <>Skapa konto <ArrowRight size={16} /></>}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-400">
            Har redan konto?{" "}
            <Link href="/login" className="text-blue-600 font-bold hover:underline">Logga in</Link>
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-2 text-slate-300">
        <ShieldCheck size={16} />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">GDPR-säkrad registrering</span>
      </div>
    </div>
  );
}
