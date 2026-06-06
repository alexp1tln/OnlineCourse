import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { availableCourses, mockReviews } from "../data/mockData";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Star,
  PlayCircle,
  Check,
  Loader2,
  Sparkles,
  Smile,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = availableCourses.find((c) => c.id === id);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#292524] bg-[#FAFAF9] text-2xl font-display font-medium">
        Курс не найден 😢
      </div>
    );
  }

  const handleEnroll = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500/30 selection:text-indigo-900 relative overflow-x-hidden flex flex-col">
      {/* Navbar Minimal */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1400px] mx-auto w-full border-b border-white shadow-sm sticky top-0 bg-white/70 backdrop-blur-2xl z-50">
        <Link
          to="/catalog"
          className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 transition-colors bg-white/80 px-6 py-3 border border-slate-200 shadow-sm rounded-full font-bold text-xs uppercase tracking-widest hover:border-indigo-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>К каталогу</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-amber-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 transform -rotate-3">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="font-display font-black text-2xl tracking-widest uppercase text-slate-800">
            Aura
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pt-20 pb-32 overflow-hidden bg-white/30 backdrop-blur-xl border-b border-white shadow-sm">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-200 blur-[150px] pointer-events-none opacity-[0.5]" />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" }}
          >
            <div className="flex gap-4 mb-10">
              <span className="px-5 py-2 border border-indigo-200 bg-indigo-50 shadow-sm rounded-full text-xs font-bold text-indigo-600 uppercase tracking-widest">
                {course.category}
              </span>
              <span className="px-5 py-2 bg-amber-50 border border-amber-200 shadow-sm rounded-full text-xs font-bold text-amber-600 uppercase tracking-widest">
                Уровень: {course.level}
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1.1] mb-10 text-slate-800">
              {course.title}
            </h1>
            <p className="text-lg text-slate-600 mb-12 font-medium leading-relaxed max-w-lg">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-16 border-y border-slate-200/50 py-8">
              <span className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-400" /> {course.duration}
              </span>
              <span className="flex items-center gap-3 border-l border-slate-200/50 pl-6">
                <BookOpen className="w-4 h-4 text-slate-400" />{" "}
                {course.totalLessons} Уроков
              </span>
              <span className="flex items-center gap-3 border-l border-slate-200/50 pl-6">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 Рейтинг
              </span>
            </div>

            <div className="flex items-center gap-6">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
              <div>
                <p className="text-xs text-slate-400 font-bold mb-2 uppercase tracking-widest">
                  Мастер курса
                </p>
                <p className="font-display font-black text-2xl text-slate-800">
                  {course.instructor.name}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" }}
            className="relative z-10"
          >
            {/* Enrollment Card */}
            <div className="bg-white/80 backdrop-blur-2xl border-4 border-white p-4 max-w-md mx-auto shadow-2xl shadow-indigo-500/10 rounded-[2.5rem] relative overflow-hidden">
              <div className="aspect-[4/3] w-full relative mb-10 group cursor-pointer bg-slate-100 rounded-[1.5rem] overflow-hidden border-2 border-white shadow-inner">
                <img
                  src={course.thumbnail}
                  alt="Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 bg-white/90 shadow-xl rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-10 h-10 text-indigo-500 ml-1" />
                  </div>
                </div>
              </div>

              <div className="px-8 pb-10">
                <div className="flex items-end justify-between mb-10 border-b border-slate-200/50 pb-8">
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
                      Стоимость
                    </p>
                    <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {course.price}{" "}
                      <span className="text-2xl text-indigo-400 font-sans font-bold">₽</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleEnroll}
                  disabled={isProcessing}
                  className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 rounded-xl text-xs uppercase tracking-widest font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center min-h-[60px] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isProcessing ? (
                    <Loader2 className="w-6 h-6 animate-spin text-white" />
                  ) : (
                    "Начать обучение"
                  )}
                </button>

                <ul className="mt-10 space-y-6">
                  <li className="flex items-center gap-5 text-sm text-slate-600 font-medium">
                    <div className="bg-emerald-50 p-2.5 rounded-full border border-emerald-200 text-emerald-500 shadow-sm">
                      <Check className="w-4 h-4" />
                    </div>{" "}
                    Безлимитный доступ
                  </li>
                  <li className="flex items-center gap-5 text-sm text-slate-600 font-medium">
                    <div className="bg-amber-50 p-2.5 rounded-full border border-amber-200 text-amber-500 shadow-sm">
                      <Sparkles className="w-4 h-4" />
                    </div>{" "}
                    Персональный фидбек
                  </li>
                  <li className="flex items-center gap-5 text-sm text-slate-600 font-medium">
                    <div className="bg-purple-50 p-2.5 rounded-full border border-purple-200 text-purple-500 shadow-sm">
                      <Smile className="w-4 h-4" />
                    </div>{" "}
                    Диплом об окончании
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details content */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-32">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-800 mb-16 border-b border-white pb-8 relative">
              Что внутри
              <div className="absolute -bottom-1 left-0 w-32 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Владение профессиональным инструментарием",
                "Психология цвета и композиции",
                "Генерация идей и концепций",
                "Проектирование премиальных интерфейсов",
                "Сборка эстетичного портфолио",
                "Командная работа и дизайн-культура",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start p-8 bg-white/70 backdrop-blur-md rounded-3xl border-2 border-white shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
                >
                  <div className="bg-emerald-50 border border-emerald-100 p-2 rounded-xl shrink-0 shadow-sm text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-slate-600 font-bold leading-relaxed text-sm pt-1 group-hover:text-slate-800 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-800 mb-16 border-b border-white pb-8 relative">
              Программа
              <div className="absolute -bottom-1 left-0 w-32 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Основы профессии и философия дизайна",
                  duration: "2ч 15м",
                },
                {
                  title: "Практика: эстетика первого проекта",
                  duration: "3ч 40м",
                },
                {
                  title: "Анимация и взаимодействие (motion)",
                  duration: "4ч 20м",
                },
                { title: "Финальный смотр и портфолио", duration: "1ч 10м" },
              ].map((mod, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-white/70 backdrop-blur-md rounded-3xl border-2 border-white hover:border-indigo-200 transition-all shadow-sm hover:shadow-md group gap-6 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-6">
                    <span className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-lg font-display font-black text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors shadow-sm">
                      {i + 1}
                    </span>
                    <span className="font-bold text-lg text-slate-700 group-hover:text-slate-900 transition-colors">
                      {mod.title}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3 shrink-0 bg-white border-2 border-slate-200 px-5 py-2.5 rounded-xl shadow-sm">
                    <Clock className="w-4 h-4 text-indigo-400" /> {mod.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-12">
          {/* Reviews snippet */}
          <div className="bg-white/60 backdrop-blur-3xl rounded-[2.5rem] border-4 border-white shadow-xl p-10 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 blur-[60px] rounded-full pointer-events-none opacity-40 -z-10" />
            <h3 className="text-xl font-display font-black text-slate-800 mb-10 flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" /> Отзывы
            </h3>
            <div className="space-y-10">
              {mockReviews.map((review) => (
                <div key={review.id} className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative z-10">
                  <div className="flex gap-1.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed italic border-l-4 border-amber-200 pl-4 bg-slate-50 py-2 rounded-r-lg">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={review.user.avatar}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                      alt=""
                    />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                      {review.user.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
