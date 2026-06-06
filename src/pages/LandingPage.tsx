import { motion, useScroll, useTransform } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowRight,
  Play,
  BookOpen,
  Star,
  Zap,
  Rocket,
  GraduationCap,
  Users,
  HeartHandshake,
  MonitorPlay,
  Phone,
  Check,
  Quote,
} from "lucide-react";
import { availableCourses, mockReviews } from "../data/mockData";

export default function LandingPage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // animations var
  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30 selection:text-indigo-900 overflow-x-hidden relative flex flex-col">
      {/* Background ambient glowing orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-300/30 mix-blend-overlay filter blur-[100px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-300/30 mix-blend-overlay filter blur-[100px]"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 bg-white/60 backdrop-blur-3xl z-50 border-b border-white shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transform rotate-3">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-800">
              Aura
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-sm font-bold text-slate-600">
            <Link
              to="/catalog"
              className="hover:text-indigo-600 transition-colors relative group"
            >
              Программы
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <a
              href="#advantages"
              className="hover:text-amber-500 transition-colors relative group"
            >
              Философия
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full rounded-full"></span>
            </a>
            <a
              href="#mentors"
              className="hover:text-emerald-500 transition-colors relative group"
            >
              Мастера
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full rounded-full"></span>
            </a>
            <Link
              to="/blog"
              className="hover:text-rose-500 transition-colors relative group"
            >
              Журнал
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rose-400 transition-all group-hover:w-full rounded-full"></span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 text-slate-700">
              <div className="flex flex-col text-right">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Консьерж
                </span>
                <span className="text-sm font-extrabold leading-none mt-1 text-slate-700">
                  8 800 123-45-67
                </span>
              </div>
            </div>

            <Link
              to="/catalog"
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md shadow-indigo-500/20 text-white text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all"
            >
              Начать
            </Link>
            <Link
              to="/dashboard"
              className="hidden lg:flex items-center justify-center px-8 py-3.5 bg-white/80 text-slate-700 text-sm font-bold rounded-full hover:bg-white transition-all border-2 border-white shadow-sm hover:shadow-md hover:text-indigo-600"
            >
              Войти
            </Link>
          </div>
        </div>
      </nav>

      <main className="w-full relative z-10 pt-32 lg:pt-48">
        {/* Hero Section */}
        <section
          className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32"
          ref={heroRef}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{ y: yText, opacity: opacityText }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-sm text-xs font-bold uppercase tracking-widest text-indigo-600 mb-10"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                Открыт набор на новый сезон
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-6xl lg:text-8xl font-display font-bold tracking-tight text-slate-800 leading-[1.05] mb-8"
              >
                Освой <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">
                  Искусство.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg lg:text-xl text-slate-600 font-medium mb-12 leading-relaxed max-w-lg"
              >
                Яркая и современная школа дизайна и технологий.
                Мы превращаем идеи в удивительную реальность.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Link
                  to="/catalog"
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl shadow-indigo-600/30 text-white font-bold rounded-full hover:scale-105 active:scale-95 flex items-center justify-center gap-4 text-base transition-all"
                >
                  Погрузиться
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </Link>
                <Link
                  to="/blog"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 font-bold rounded-full border-2 border-white shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-4 text-base transition-all"
                >
                  Читать блог
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform rotate-3 scale-105 blur-2xl" />
              <div className="relative rounded-[3rem] p-3 bg-white/60 backdrop-blur-2xl border-4 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618335824967-df50bfbf0764?q=80&w=2000&auto=format&fit=crop"
                  alt="Premium setup"
                  className="rounded-[2.5rem] object-cover aspect-[4/5] w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section id="advantages" className="py-32 relative">
          <div className="absolute inset-0 bg-white/40 border-y border-white backdrop-blur-sm" />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10"
            >
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-800 max-w-2xl">
                Интерес <br />
                <span className="text-indigo-500">
                  в каждой детали.
                </span>
              </h2>
              <p className="text-slate-600 max-w-sm text-lg font-medium">
                Философия нашего подхода проста — мы делаем обучение ярким, 
                вдохновляющим и невероятно объемным.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Мастерство",
                  desc: "Учим видеть тонкости, которые отличают хороший дизайн от великого.",
                  color: "from-blue-100 to-indigo-100/50",
                  textColor: "text-blue-600"
                },
                {
                  title: "Избранное",
                  desc: "Строгий отбор. Малые группы. Максимум персонального внимания наставника.",
                  color: "from-amber-100 to-orange-100/50",
                  textColor: "text-amber-600"
                },
                {
                  title: "Эстетика",
                  desc: "Формируем вкус и насмотренность с первых дней обучения.",
                  color: "from-rose-100 to-pink-100/50",
                  textColor: "text-rose-500"
                },
                {
                  title: "Наследие",
                  desc: "Наши выпускники создают продукты, которыми пользуются миллионы.",
                  color: "from-emerald-100 to-teal-100/50",
                  textColor: "text-emerald-600"
                },
              ].map((feat, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={i}
                  className={`bg-white/80 backdrop-blur-xl p-10 border-2 border-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-gradient-to-br ${feat.color} group hover:-translate-y-2 transition-all`}
                >
                  <h3 className={`text-xl font-display font-bold ${feat.textColor} mb-4`}>
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="py-32 px-6 lg:px-12 relative">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="mb-24 text-center mx-auto"
            >
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-800 mb-6">
                Визионеры.
              </h2>
              <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                Люди, которые задают стандарты индустрии.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Александр",
                  role: "Арт-директор",
                  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
                  border: "border-indigo-100"
                },
                {
                  name: "Елена",
                  role: "Ведущий дизайнер",
                  img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
                  border: "border-rose-100"
                },
                {
                  name: "Михаил",
                  role: "Архитектор систем",
                  img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop",
                  border: "border-emerald-100"
                },
              ].map((mentor, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i}
                  className="group cursor-pointer bg-white/60 backdrop-blur-xl border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem] p-4 text-center hover:-translate-y-2 transition-transform"
                >
                  <div className={`w-full aspect-[4/5] object-cover mb-6 overflow-hidden bg-slate-100 rounded-[2rem] border-4 ${mentor.border}`}>
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                    {mentor.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-white/40 border-y border-white backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8"
            >
              <div>
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-800 mb-4">
                  Коллекция <br />
                  <span className="text-amber-500">
                    программ.
                  </span>
                </h2>
              </div>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-4 px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-full text-slate-800 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em] text-xs font-bold"
              >
                Показать всё
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableCourses.slice(0, 3).map((course, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={course.id}
                  onClick={() => navigate(`/catalog/${course.id}`)}
                  className="bg-white/90 backdrop-blur-xl border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col group p-3 relative"
                >
                  <div className="aspect-[4/3] relative overflow-hidden mb-6 rounded-[1.5rem] bg-indigo-50">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="px-6 pb-6 flex-1 flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-4 bg-indigo-50 self-start px-3 py-1.5 rounded-lg border border-indigo-100">
                      {course.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                      {course.title}
                    </h3>

                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                      <span className="text-sm font-bold text-slate-500">
                        {course.totalLessons} уроков
                      </span>
                      <span className="text-xl font-display font-bold text-slate-800">
                        {course.price} ₽
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Call / Trial Form */}
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center bg-white/70 backdrop-blur-2xl border border-white shadow-2xl rounded-[3rem] p-12 md:p-24 overflow-hidden">
             
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-100 blur-[80px] rounded-full pointer-events-none" />

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-7xl leading-tight font-display font-bold text-slate-800 mb-6 text-center relative z-10"
            >
              Откройте <span className="text-indigo-600">новую главу.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 font-medium mb-12 text-center max-w-xl relative z-10"
            >
              Оставьте контактные данные, и мы подберем идеальную программу.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-md relative z-10"
            >
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate("/dashboard");
                }}
              >
                <div className="bg-white/80 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-transparent px-5 py-4 text-base font-medium text-slate-800 focus:outline-none transition-colors placeholder:text-slate-400"
                  />
                </div>
                <div className="bg-white/80 rounded-2xl border border-slate-200">
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full bg-transparent px-5 py-4 text-base font-medium text-slate-800 focus:outline-none transition-colors placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4.5 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 text-white text-sm uppercase tracking-widest font-bold rounded-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all mt-6"
                >
                  Отправить запрос
                </button>
                <p className="text-[10px] text-center text-slate-400 font-semibold mt-4">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#" className="underline hover:text-indigo-600">
                    политикой конфиденциальности
                  </a>
                  .
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 lg:px-12 text-slate-500 font-medium border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-display font-bold text-2xl text-slate-800 tracking-widest uppercase">
                Aura
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500 font-medium">
              Студия эстетического образования. Проектируем будущее, опираясь на фундаментальные знания.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-400 text-xs tracking-widest uppercase">
              Карта
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Программы
                </Link>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Философия
                </a>
              </li>
              <li>
                <a
                  href="#mentors"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Мастера
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-indigo-600 transition-colors">
                  Журнал
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-400 text-xs tracking-widest uppercase">
              Связь
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li className="text-slate-800 font-bold">8 800 123-45-67</li>
              <li>
                <a
                  href="mailto:concierge@aura.space"
                  className="hover:text-indigo-600 transition-colors"
                >
                  concierge@aura.space
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-widest font-bold text-slate-400 relative z-10 pt-8 border-t border-slate-100 mt-8">
          <div className="flex flex-col gap-2">
            <span>© {new Date().getFullYear()} AURA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
            <span className="text-indigo-500">ЭТО ЛИШЬ ДЕМОНСТРАЦИОННЫЙ ОБРАЗЕЦ, ВСЕ ЛИЧНОСТИ ВЫМЫШЛЕНЫ</span>
          </div>
          <span>ДЕТСКИЙ И ВЗРОСЛЫЙ ФОРМАТ.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">
              ПРАВИЛА
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              ПОМОЩЬ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
