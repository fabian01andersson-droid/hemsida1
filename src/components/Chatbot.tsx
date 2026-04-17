"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Zap, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "bot" | "user";
  text: string;
};

const FAQ_DATA = [
  { 
    q: "Vad kostar era tjänster?", 
    a: "Vi arbetar oftast med en hybridmodell: en fast grundavgift (från 45 000 kr) plus en success fee vid beviljande. Vi erbjuder även Quick Scan för 4 900 kr." 
  },
  { 
    q: "Vilken är er success rate?", 
    a: "Vårt snitt ligger på 92% beviljade ansökningar, vilket är mer än 3x högre än EU-snittet för program som Horizon Europe." 
  },
  { 
    q: "Hur snabbt kan ni skriva en ansökan?", 
    a: "Tack vare våra AI-verktyg kan vi ofta leverera en komplett, högkvalitativ ansökan på halva tiden jämfört med traditionella konsulter, vanligtvis 2-4 veckor." 
  },
  { 
    q: "Jobbar ni med kommuner?", 
    a: "Ja, vi har stor erfarenhet av att stötta kommuner och regioner i program som LIFE, Interreg och regionalfonden." 
  }
];

export function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hej! Jag är BridgeToGrants AI-assistent. Hur kan jag hjälpa dig idag?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: "user", text } as Message];
    setMessages(newMessages);
    setInputValue("");

    // Simple bot logic
    setTimeout(() => {
      let response = "Tack för din fråga! För att ge dig ett exakt svar rekommenderar jag att du bokar en 15-minuters Reality Check med en av våra seniora experter.";
      
      const foundFaq = FAQ_DATA.find(f => text.toLowerCase().includes(f.q.toLowerCase()) || f.q.toLowerCase().includes(text.toLowerCase()));
      if (foundFaq) {
        response = foundFaq.a;
      }

      setMessages(prev => [...prev, { role: "bot", text: response }]);
    }, 600);
  };

  // Hide Chatbot on dashboard routes — avoids overlap with mobile bottom nav
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col mb-4"
          >
            {/* Header */}
            <div className="bg-brand-deep p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-brand-success" />
                </div>
                <div>
                  <p className="font-bold text-sm">BridgeBot v1</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest font-bold">AI Support Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    m.role === "user" 
                    ? "bg-brand-primary text-white rounded-tr-none" 
                    : "bg-white text-brand-deep shadow-sm border border-gray-100 rounded-tl-none"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-2 bg-gray-50/50 flex flex-wrap gap-2">
               {FAQ_DATA.slice(0, 2).map(f => (
                 <button 
                  key={f.q} 
                  onClick={() => handleSend(f.q)}
                  className="text-[10px] font-bold bg-white border border-gray-100 px-3 py-1.5 rounded-full text-brand-neutral hover:border-brand-primary hover:text-brand-primary transition-all"
                 >
                   {f.q}
                 </button>
               ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Skriv din fråga..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="w-full h-12 pl-4 pr-12 rounded-xl border border-gray-100 bg-gray-50 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  className="absolute right-2 top-2 w-8 h-8 bg-brand-primary text-white rounded-lg flex items-center justify-center hover:bg-brand-deep transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-center text-brand-neutral/40 mt-3 uppercase tracking-widest font-bold">
                Drivs av BridgeToGrants AI Core
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageSquare className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-success rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
}
