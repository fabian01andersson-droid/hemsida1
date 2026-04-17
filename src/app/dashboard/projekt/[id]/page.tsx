"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Target, 
  CircleDollarSign, 
  ClipboardCheck,
  Zap,
  MoreHorizontal,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = {
  "1": { name: "Solcells-innovation 2026", type: "Horizon Europe", status: "Pågående", progress: 65, budget: "12.4 Mkr", deadline: "2024-09-15" },
  "2": { name: "Cirkulär Plaståtervinning", type: "LIFE-programmet", status: "Slutförd", progress: 100, budget: "8.2 Mkr", deadline: "2024-03-20" },
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;
  const project = projects[id as keyof typeof projects] || projects["1"];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      {/* Breadcrumbs & Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard/projekt" className="flex items-center gap-2 text-sm font-bold text-brand-neutral hover:text-brand-primary transition-all">
          <ArrowLeft className="w-4 h-4" /> Tillbaka till alla projekt
        </Link>
        <Button variant="ghost" size="sm" className="rounded-lg h-10 w-10 p-0 border border-gray-100 bg-white">
           <MoreHorizontal className="w-5 h-5 text-brand-neutral" />
        </Button>
      </div>

      {/* Project Header */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-brand-deep/5 mb-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
         
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                  {project.type}
               </div>
               <h1 className="text-3xl md:text-5xl font-black text-brand-deep mb-4">{project.name}</h1>
               <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-brand-neutral">
                     <Calendar className="w-4 h-4" />
                     <span>Deadline: <strong>{project.deadline}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-neutral">
                     <Target className="w-4 h-4" />
                     <span>Status: <strong className="text-brand-primary">{project.status}</strong></span>
                  </div>
               </div>
            </div>
            <div className="text-right">
               <p className="text-[10px] font-bold text-brand-neutral uppercase tracking-widest mb-2">Totalbudget</p>
               <p className="text-4xl font-black text-brand-deep">{project.budget}</p>
            </div>
         </div>

         {/* Overall Progress */}
         <div className="mt-12 pt-12 border-t border-gray-50">
            <div className="flex justify-between items-end mb-4">
               <p className="font-bold text-brand-deep">Total färdigställandegrad</p>
               <p className="text-3xl font-black text-brand-primary">{project.progress}%</p>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
               <div className="h-full bg-brand-primary" style={{ width: `${project.progress}%` }} />
            </div>
         </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8">
         {/* Tools Shortcuts */}
         <div className="lg:col-span-8 space-y-8">
            <h2 className="text-xl font-bold text-brand-deep">Arbetsyta</h2>
            
            <Link href="/verktyg/checklista" className="flex items-center justify-between p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                     <ClipboardCheck className="w-7 h-7" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-brand-deep">Ansökningschecklista</h3>
                     <p className="text-brand-neutral text-sm">Fortsätt där du slutade. 14 av 22 uppgifter klara.</p>
                  </div>
               </div>
               <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link href="/verktyg/kalkylator" className="flex items-center justify-between p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                     <CircleDollarSign className="w-7 h-7" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-brand-deep">Budget & Finansiering</h3>
                     <p className="text-brand-neutral text-sm">Granska och ändra din kostnadsuppställning.</p>
                  </div>
               </div>
               <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
            </Link>
         </div>

         {/* Sidebar Actions */}
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-brand-deep rounded-[2rem] p-8 text-white">
               <Zap className="w-10 h-10 text-brand-success mb-6" />
               <h3 className="text-xl font-bold mb-4">Behöver du expertgranskning?</h3>
               <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Våra seniora experter kan gå igenom ditt utkast och ge strategisk feedback innan inlämning.
               </p>
               <Button asChild className="w-full bg-brand-success hover:bg-opacity-90 text-white font-bold h-12 rounded-xl">
                  <Link href="/kontakt">Boka granskning</Link>
               </Button>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100">
               <h3 className="font-bold text-brand-deep mb-6">Projektfiler</h3>
               <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                     <span className="text-xs font-bold text-brand-neutral truncate">Budget_Draft_V2.pdf</span>
                     <ExternalLink className="w-4 h-4 text-brand-primary cursor-pointer" />
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                     <span className="text-xs font-bold text-brand-neutral truncate">Projekt_Summary.docx</span>
                     <ExternalLink className="w-4 h-4 text-brand-primary cursor-pointer" />
                  </div>
               </div>
               <Button variant="outline" className="w-full mt-6 h-12 rounded-xl border-gray-200 text-brand-deep font-bold">Ladda upp fil</Button>
            </div>
         </div>
      </div>
    </div>
  );
}
