import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { mockEnrolledCourses, mockCurrentUser } from "../../data/mockData";
import {
  PlayCircle,
  Clock,
  CheckCircle2,
  TrendingUp,
  Trophy,
} from "lucide-react";

export default function DashboardHome() {
  const latestCourse = mockEnrolledCourses[0];

  return (
    <div className="p-8 max-w-6xl mx-auto selection:bg-indigo-500/20 selection:text-indigo-900 relative">
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-purple-200 rounded-full blur-[120px] opacity-[0.5] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-indigo-200 rounded-full blur-[100px] opacity-[0.5] pointer-events-none" />
      <header className="mb-10 bg-white/60 backdrop-blur-2xl border border-white p-10 lg:p-14 rounded-[2rem] flex items-center justify-between relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-200/50 to-transparent blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-800 mb-4">
              С возвращением, {mockCurrentUser.name}
            </h1>
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold">
              Продолжайте погружение в мир дизайна.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-amber-400 to-amber-500 shadow-lg shadow-amber-500/30 rounded-2xl transform rotate-6 shrink-0">
            <Trophy className="w-10 h-10 text-white" />
          </div>
        </div>
      </header>

      {/* Hero / Active Course */}
      <section className="mb-16 relative z-10">
        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-slate-500">
          В процессе обучения
        </h2>
        <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-[2rem] flex flex-col md:flex-row gap-8 relative overflow-hidden group transition-all">
          
          <Link
            to={`/dashboard/course/${latestCourse.id}`}
            className="w-full md:w-[45%] aspect-[4/3] relative overflow-hidden shrink-0 bg-indigo-50 block rounded-3xl"
          >
            <img
              src={latestCourse.thumbnail}
              alt={latestCourse.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-indigo-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
              <div className="w-16 h-16 bg-white/90 shadow-xl rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
          </Link>

          <div className="flex flex-col justify-center flex-1 py-8 px-6 md:pr-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold px-4 py-2 border border-slate-200 bg-white shadow-sm rounded-full text-indigo-600 uppercase tracking-widest">
                {latestCourse.level}
              </span>
            </div>
            <h3 className="text-3xl font-display font-bold mb-6 text-slate-800 leading-tight">
              {latestCourse.title}
            </h3>

            <div className="flex items-center gap-5 border-y border-slate-200/60 py-6 mb-12">
              <img
                src={latestCourse.instructor.avatar}
                alt=""
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1.5">
                  Мастер
                </p>
                <p className="text-sm font-bold text-slate-700">
                  {latestCourse.instructor.name}
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-center text-xs uppercase tracking-widest font-semibold mb-4">
                <span className="text-slate-500">Прогресс</span>
                <span className="text-indigo-600">{latestCourse.progress}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-200/50 rounded-full overflow-hidden shadow-inner border border-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${latestCourse.progress}%` }}
                  transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-md shadow-indigo-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
        <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 rounded-2xl border border-blue-200 shadow-inner flex items-center justify-center bg-gradient-to-tr from-blue-50 to-blue-100 transform rotate-3">
            <Clock className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
              Часов
            </p>
            <p className="text-4xl font-display font-bold text-slate-800">24.5</p>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 rounded-2xl border border-emerald-200 shadow-inner flex items-center justify-center bg-gradient-to-tr from-emerald-50 to-emerald-100 transform -rotate-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
              Уроков
            </p>
            <p className="text-4xl font-display font-bold text-slate-800">18</p>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 rounded-2xl border border-amber-200 shadow-inner flex items-center justify-center bg-gradient-to-tr from-amber-50 to-amber-100 transform rotate-3">
            <TrendingUp className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
              Серия
            </p>
            <p className="text-4xl font-display font-bold text-slate-800">
              4 <span className="text-xl font-sans text-slate-500">дня</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
