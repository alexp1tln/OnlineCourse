import { Briefcase, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeworkPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto selection:bg-indigo-500/20 selection:text-indigo-900 relative">
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-indigo-200 rounded-full blur-[150px] opacity-[0.5] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-emerald-200 rounded-full blur-[100px] opacity-[0.4] pointer-events-none" />

      <header className="mb-10 bg-white/70 backdrop-blur-3xl border-4 border-white p-10 lg:p-14 rounded-[2.5rem] flex items-center justify-between relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 blur-[80px] rounded-full pointer-events-none opacity-[0.6]" />
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-display font-black text-slate-800 mb-4">
              Домашки
            </h1>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
              Ваши текущие задания и проекты.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-amber-400 to-rose-400 rounded-2xl border-4 border-white shrink-0 shadow-lg shadow-amber-500/30 transform rotate-3">
            <Briefcase className="w-8 h-8 text-white fill-white/20" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-2xl border-4 border-white p-8 rounded-[2.5rem] flex flex-col group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-2 shadow-sm">
          <div className="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-6">
            <span className="px-5 py-2 border-2 border-amber-200 bg-amber-50 text-amber-600 rounded-xl text-xs font-bold uppercase tracking-widest shadow-sm">
              В процессе
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              До 15 июня
            </span>
          </div>
          <h3 className="text-2xl font-display font-black text-slate-800 mb-3 leading-tight group-hover:text-amber-500 transition-colors">
            Создание логотипа для бренда
          </h3>
          <p className="text-slate-500 font-medium text-sm mb-12">
            Графический дизайн: с нуля до PRO
          </p>
          <Link
            to="/dashboard/course/1"
            className="mt-auto block text-center w-full py-5 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-amber-500/30"
          >
            Сдать работу
          </Link>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border-4 border-white p-8 rounded-[2.5rem] flex flex-col group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-2 shadow-sm opacity-90 hover:opacity-100 hover:bg-white/90">
          <div className="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-6">
            <span className="px-5 py-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-600 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> Проверено
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              10 июня
            </span>
          </div>
          <h3 className="text-2xl font-display font-black text-slate-800 mb-3 leading-tight group-hover:text-emerald-500 transition-colors">
            Композиция в кадре
          </h3>
          <p className="text-slate-500 font-medium text-sm mb-12">
            Основы UI/UX дизайна
          </p>
          <Link
            to="/dashboard/course/1"
            className="mt-auto block text-center w-full py-5 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-[1.02] shadow-sm"
          >
            Смотреть оценку
          </Link>
        </div>
      </div>
    </div>
  );
}
