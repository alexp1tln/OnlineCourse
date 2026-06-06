import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { availableCourses, mockInstructors } from "../data/mockData";
import {
  ArrowLeft,
  Search,
  Filter,
  BookOpen,
  X,
  Gamepad2,
  Zap,
} from "lucide-react";

export default function CourseCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(
    null,
  );
  const navigate = useNavigate();

  const categories = Array.from(
    new Set(availableCourses.map((c) => c.category)),
  );
  const levels = Array.from(new Set(availableCourses.map((c) => c.level)));

  const filteredCourses = useMemo(() => {
    return availableCourses.filter((course) => {
      if (search && !course.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (selectedCategory && course.category !== selectedCategory)
        return false;
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedInstructor && course.instructor.id !== selectedInstructor)
        return false;
      return true;
    });
  }, [search, selectedCategory, selectedLevel, selectedInstructor]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSelectedLevel(null);
    setSelectedInstructor(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30 selection:text-indigo-900 relative overflow-x-hidden flex flex-col">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1400px] mx-auto w-full border-b border-white shadow-sm sticky top-0 z-20 bg-white/60 backdrop-blur-3xl transition-all duration-300">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors bg-white/80 px-6 py-3 border border-white shadow-sm rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-md hover:-translate-y-0.5 transform"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На главную</span>
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

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-200 rounded-full blur-[150px] opacity-[0.4] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[120px] opacity-[0.4] pointer-events-none" />

        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 space-y-8 relative z-10">
          <div className="bg-white/70 backdrop-blur-2xl p-8 lg:p-10 border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem]">
            <h2 className="text-xl font-display font-bold text-slate-800 mb-8 flex items-center gap-3 tracking-widest uppercase">
              <Filter className="w-5 h-5 text-indigo-500" /> Фильтры
            </h2>

            <div className="relative mb-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="ПОИСК..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-100/50 border-2 border-transparent focus:border-indigo-300 py-4 pl-12 pr-4 text-sm font-bold text-slate-700 rounded-xl focus:outline-none focus:bg-white transition-all placeholder:text-slate-400 uppercase tracking-[0.2em]"
              />
            </div>

            {(search ||
              selectedCategory ||
              selectedLevel ||
              selectedInstructor) && (
              <button
                onClick={clearFilters}
                className="flex items-center justify-center gap-2 w-full py-4 bg-white border-2 border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-widest hover:text-indigo-600 hover:border-indigo-200 hover:-translate-y-0.5 rounded-xl mb-10 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" /> Сбросить всё
              </button>
            )}

            <div className="space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-bold">
                  Категория
                </h3>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-5 h-5 rounded border-2 border-slate-300 bg-white checked:bg-indigo-500 checked:border-indigo-500 focus:ring-2 focus:ring-indigo-300 appearance-none transition-all cursor-pointer relative shadow-sm after:absolute after:inset-0 after:m-auto after:w-2 after:h-2 after:bg-white after:rounded-[2px] after:opacity-0 checked:after:opacity-100"
                      />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors uppercase tracking-wider">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-bold">
                  Уровень
                </h3>
                <div className="space-y-4">
                  {levels.map((lvl) => (
                    <label
                      key={lvl}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="level"
                        checked={selectedLevel === lvl}
                        onChange={() => setSelectedLevel(lvl)}
                        className="w-5 h-5 rounded border-2 border-slate-300 bg-white checked:bg-amber-500 checked:border-amber-500 focus:ring-2 focus:ring-amber-300 appearance-none transition-all cursor-pointer relative shadow-sm after:absolute after:inset-0 after:m-auto after:w-2 after:h-2 after:bg-white after:rounded-[2px] after:opacity-0 checked:after:opacity-100"
                      />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-amber-600 transition-colors uppercase tracking-wider">
                        {lvl}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-bold">
                  Мастера
                </h3>
                <div className="space-y-4">
                  {mockInstructors.map((inst) => (
                    <label
                      key={inst.id}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="instructor"
                        checked={selectedInstructor === inst.id}
                        onChange={() => setSelectedInstructor(inst.id)}
                        className="w-5 h-5 rounded border-2 border-slate-300 bg-white checked:bg-emerald-500 checked:border-emerald-500 focus:ring-2 focus:ring-emerald-300 appearance-none transition-all cursor-pointer relative shadow-sm after:absolute after:inset-0 after:m-auto after:w-2 after:h-2 after:bg-white after:rounded-[2px] after:opacity-0 checked:after:opacity-100"
                      />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-emerald-600 transition-colors flex items-center gap-3">
                        <img
                          src={inst.avatar}
                          className="w-8 h-8 rounded-full border-2 border-slate-200 shadow-sm transition-all object-cover group-hover:border-emerald-300"
                          alt=""
                        />
                        {inst.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Course Grid */}
        <div className="lg:col-span-3 relative z-10">
          <div className="mb-16 flex flex-col sm:flex-row items-end justify-between bg-white/40 backdrop-blur-md rounded-3xl p-8 border-2 border-white shadow-sm">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-800 mb-2">
                Коллекция <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                  программ.
                </span>
              </h2>
            </div>
            <span className="text-indigo-700 bg-indigo-50 text-xs font-black uppercase tracking-widest px-5 py-2.5 border-2 border-indigo-100 rounded-xl shadow-sm">
              {filteredCourses.length} НАЙДЕНО
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="py-32 text-center bg-white/70 backdrop-blur-2xl border-4 border-white border-dashed rounded-[3rem] shadow-sm">
              <p className="text-slate-500 text-xl font-bold mb-8">
                В данной категории ничего нет.
              </p>
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg shadow-slate-900/20 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-all"
              >
                Сбросить настройки
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={course.id}
                  >
                    <Link
                      to={`/catalog/${course.id}`}
                      className="group bg-white/80 backdrop-blur-xl border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] flex flex-col h-full hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 overflow-hidden relative p-4"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden bg-rose-50 rounded-[1.5rem]">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="p-6 pb-2 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-lg">
                            {course.level}
                          </span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-slate-800 mb-4 leading-tight group-hover:text-indigo-600 transition-colors mt-2">
                          {course.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 mb-8 flex-1 line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>

                        <div className="flex flex-col xl:flex-row xl:items-center justify-between pt-6 border-t border-slate-100 gap-6 mt-auto">
                          <div className="flex items-center gap-4">
                            <img
                              src={course.instructor.avatar}
                              className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                              alt="Instructor"
                            />
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-600">
                              {course.instructor.name}
                            </span>
                          </div>
                          <span className="text-xl font-display font-black text-slate-800">
                            {course.price} ₽
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
