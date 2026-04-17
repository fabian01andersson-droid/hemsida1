"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-apple px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86868b] mb-8">KONTAKT</p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
            Låt oss<br /><span className="text-blue-600">prata.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Boka en kostnadsfri Reality Check eller ställ er fråga direkt.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-apple px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 rounded-[2.5rem] p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black mb-4">Tack för ert meddelande!</h3>
                  <p className="text-slate-500">Vi återkommer inom 24 timmar.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Namn</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ert namn"
                        className="w-full h-14 px-6 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">E-post</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="namn@foretag.se"
                        className="w-full h-14 px-6 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Organisation</label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Ert företag / kommun"
                      className="w-full h-14 px-6 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Meddelande</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Berätta kort om ert projekt och vad ni behöver hjälp med..."
                      className="w-full p-6 bg-[#f5f5f7] border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-600 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 flex items-center gap-3 transition-colors"
                  >
                    Skicka meddelande <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#f5f5f7] rounded-[2.5rem] p-10">
                <h3 className="text-lg font-black mb-8">Kontaktuppgifter</h3>
                <div className="space-y-6">
                  <a href="mailto:info@bridgetogrants.se" className="flex items-center gap-4 text-slate-500 hover:text-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"><Mail size={16} /></div>
                    <span className="text-sm">info@bridgetogrants.se</span>
                  </a>
                  <a href="tel:+46700000000" className="flex items-center gap-4 text-slate-500 hover:text-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"><Phone size={16} /></div>
                    <span className="text-sm">+46 70 000 00 00</span>
                  </a>
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"><MapPin size={16} /></div>
                    <span className="text-sm">Stockholm, Sverige</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white">
                <h3 className="text-lg font-black mb-4">Kostnadsfri Reality Check</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  15 minuter med en senior EU-rådgivare som bedömer ert projekts potential.
                </p>
                <a
                  href="https://cal.com/bridgetogrants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold text-sm inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  Boka tid <ArrowRight size={14} />
                </a>
              </div>

              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-4">
                <Clock size={20} className="text-slate-300" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Svarstid</p>
                  <p className="text-xs text-slate-400">Vi svarar inom 24 timmar på vardagar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
