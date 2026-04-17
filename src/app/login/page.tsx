"use client";

import { useActionState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Lock } from "lucide-react";
import { loginAction } from "@/lib/actions";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [state, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 w-full max-w-md">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black mb-3">Logga in</h1>
        <p className="text-sm text-slate-400">Få tillgång till alla verktyg och spara era projekt.</p>
      </div>

      {state?.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <div>
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">E-post</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            <input name="email" type="email" required placeholder="namn@foretag.se"
              className="w-full h-14 pl-12 pr-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-end mb-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Lösenord</label>
            <button type="button" className="text-[10px] font-black text-blue-600 hover:underline">Glömt lösenord?</button>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            <input name="password" type="password" required placeholder="••••••••"
              className="w-full h-14 pl-12 pr-4 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors" />
          </div>
        </div>
        <button disabled={pending}
          className="w-full h-14 bg-black text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
          {pending ? "Loggar in..." : <>Logga in <ArrowRight size={16} /></>}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-400">
          Inget konto?{" "}
          <Link href="/register" className="text-blue-600 font-bold hover:underline">Skapa konto</Link>
        </p>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-2xl text-center">
        <p className="text-xs text-slate-500">
          <strong>Demo:</strong> demo@bridgetogrants.se / demo1234
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col justify-center items-center p-6">
      <Link href="/" className="mb-10 font-black text-2xl tracking-tighter">
        BridgeToGrants
      </Link>
      <Suspense fallback={<div className="text-slate-400">Laddar...</div>}>
        <LoginForm />
      </Suspense>
      <div className="mt-10 flex items-center gap-2 text-slate-300">
        <ShieldCheck size={16} />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Säker inloggning</span>
      </div>
    </div>
  );
}
