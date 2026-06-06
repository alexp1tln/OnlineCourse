import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Star,
  Sparkles,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";
import { mockArticles } from "../data/mockData";

export default function BlogCatalog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-x-hidden flex flex-col">
      <nav className="flex items-center px-6 lg:px-12 py-4 max-w-[1400px] mx-auto border-b border-white shadow-sm bg-white/60 backdrop-blur-3xl sticky top-0 z-50">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 transition-colors bg-white/80 px-6 py-3 border border-slate-200 shadow-sm rounded-full text-xs uppercase font-bold tracking-widest hover:border-indigo-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На главную</span>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="mb-24 max-w-3xl relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 blur-[120px] rounded-full pointer-events-none opacity-[0.5]" />

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-amber-50 border-2 border-amber-200 shadow-sm text-xs font-bold uppercase tracking-widest text-amber-600 mb-10 relative z-10">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            Архивы Знаний
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 text-slate-800 leading-[1.1] relative z-10">
            Журнал <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Академии</span>
          </h1>
          <p className="text-base font-medium leading-relaxed bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-sm border-2 justify-self-start border-white text-slate-600 relative z-10">
            Идеи, секреты программ и рассказы о дизайне. Читайте, вдохновляйтесь
            и создавайте свои шедевры.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20">
          <div className="lg:col-span-3 space-y-16">
            {mockArticles.map((article, i) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                key={article.id}
                className="group border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all flex flex-col relative p-4"
              >
                <div className="aspect-[21/9] overflow-hidden relative border-2 border-white rounded-[1.5rem] bg-indigo-50 shadow-inner">
                  <img
                    src={article.coverImage}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    alt=""
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-xl border border-white text-xs font-bold uppercase tracking-widest text-indigo-600 rounded-xl shadow-sm inline-block">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 font-bold uppercase tracking-widest">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString(
                        "ru-RU",
                        { month: "long", day: "numeric", year: "numeric" },
                      )}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-2 bg-white border-2 border-slate-100 px-4 py-2 rounded-xl text-slate-500 shadow-sm">
                      <Clock className="w-4 h-4 text-indigo-400" />{" "}
                      {article.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${article.id}`}>
                    <h2 className="text-3xl lg:text-4xl font-display font-black mb-6 text-slate-800 group-hover:text-indigo-600 transition-colors leading-tight">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 font-medium leading-relaxed mb-12 line-clamp-2 text-base max-w-2xl">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-200 mt-auto">
                    <div className="flex items-center gap-5">
                      <img
                        src={article.author.avatar}
                        alt=""
                        className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                      />
                      <div>
                        <p className="text-sm font-bold text-slate-700">
                          {article.author.name}
                        </p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                          Мастер
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${article.id}`}
                      className="w-12 h-12 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center bg-white group-hover:bg-indigo-500 group-hover:border-indigo-500 text-slate-400 group-hover:text-white transition-all transform group-hover:-translate-x-1"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="lg:col-span-1 pt-12 lg:pt-0">
            <div className="sticky top-32 bg-white/70 backdrop-blur-2xl p-8 rounded-[2rem] border-4 border-white shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-400 to-rose-400 shadow-lg shadow-purple-500/30 rounded-2xl mb-8 flex items-center justify-center transform rotate-3">
                <Rocket className="w-8 h-8 text-white fill-white/20" />
              </div>
              <h3 className="text-2xl font-display font-black mb-6 text-slate-800">
                Новые знания
              </h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed mb-10">
                Оставьте email для получения новых статей, материалов и
                вдохновения в мир дизайна.
              </p>

              {subscribed ? (
                <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-emerald-600 text-xs uppercase tracking-widest font-bold text-center shadow-sm">
                  Успешная подписка. ✨
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ВАШ EMAIL..."
                    className="w-full bg-white border-2 border-slate-200 rounded-xl px-5 py-4 text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-slate-400 uppercase tracking-widest shadow-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-md shadow-slate-900/20"
                  >
                    Подписаться
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
