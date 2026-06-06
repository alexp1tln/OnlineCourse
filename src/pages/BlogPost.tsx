import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, MessageSquare, Send, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { mockArticles, mockComments, mockCurrentUser } from "../data/mockData";

export default function BlogPost() {
  const { id } = useParams();
  const article = mockArticles.find((a) => a.id === id);
  const [comments, setComments] = useState(
    mockComments.filter((c) => c.articleId === id),
  );
  const [newComment, setNewComment] = useState("");

  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center text-[#292524] bg-[#FAFAF9] text-3xl font-display font-medium">
        Статья не найдена 😢
      </div>
    );

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now().toString(),
        articleId: article.id,
        user: mockCurrentUser,
        content: newComment,
        timestamp: new Date().toISOString(),
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-x-hidden flex flex-col">
      <nav className="flex items-center px-6 lg:px-12 py-4 max-w-[1400px] mx-auto border-b border-white shadow-sm bg-white/60 backdrop-blur-3xl sticky top-0 z-50">
        <Link
          to="/blog"
          className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 transition-colors bg-white/80 px-6 py-3 border border-slate-200 shadow-sm rounded-full text-xs uppercase font-bold tracking-widest hover:border-indigo-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>К статьям</span>
        </Link>
      </nav>

      <article className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16 relative z-10">
        <header className="mb-16 text-center bg-white/80 backdrop-blur-2xl p-12 lg:p-20 border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 blur-[120px] rounded-full pointer-events-none opacity-[0.4]" />

          <span className="px-5 py-2 mt-4 bg-indigo-50 border-2 border-indigo-100 text-indigo-600 rounded-xl text-xs font-bold uppercase tracking-widest mb-10 inline-block shadow-sm">
            {article.category}
          </span>
          <h1 className="text-4xl lg:text-7xl font-display font-black leading-[1.1] mb-10 text-slate-800">
            {article.title}
          </h1>
          <p className="text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed text-lg">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500 font-bold uppercase tracking-widest bg-white inline-flex px-8 py-5 border-2 border-slate-100 shadow-sm rounded-2xl">
            <div className="flex items-center gap-4">
              <img
                src={article.author.avatar}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
              />
              <span className="text-slate-700">{article.author.name}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString("ru-RU", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2 text-indigo-500 bg-indigo-50 px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-indigo-400" /> {article.readTime}
            </span>
          </div>
        </header>

        <div className="aspect-[21/9] w-full overflow-hidden border-4 border-white shadow-xl rounded-[2.5rem] mb-20 bg-indigo-50 relative">
          <img
            src={article.coverImage}
            className="w-full h-full object-cover"
            alt="Cover"
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-slate-800 prose-h2:text-4xl prose-h2:mb-8 prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:border-4 prose-img:border-white prose-img:rounded-[2rem] prose-img:shadow-lg prose-hr:border-slate-200/60 mb-32 bg-transparent p-0">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* Comments Section */}
        <section className="pt-16 border-t-2 border-slate-200/50 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12 border-b-2 border-slate-100 pb-8">
            <h3 className="text-3xl font-display font-black text-slate-800">
              Обсуждение{" "}
              <span className="text-slate-400">({comments.length})</span>
            </h3>
          </div>

          <form
            onSubmit={handlePostComment}
            className="mb-20 flex flex-col md:flex-row gap-8 bg-white/70 backdrop-blur-3xl p-10 rounded-[2.5rem] border-4 border-white shadow-xl relative"
          >
            <img
              src={mockCurrentUser.avatar}
              className="w-16 h-16 rounded-full border-2 border-white shadow-sm shrink-0 object-cover"
              alt=""
            />
            <div className="flex-1 relative">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="ВАШ КОММЕНТАРИЙ..."
                className="w-full bg-white border-2 border-slate-200 rounded-2xl p-6 mb-8 min-h-[120px] text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-400 transition-colors resize-none placeholder:text-slate-400 focus:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all shadow-md shadow-indigo-500/30 flex items-center gap-3"
                >
                  Опубликовать <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </form>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex gap-8 bg-white p-8 rounded-[2rem] border-2 border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative"
              >
                <img
                  src={comment.user.avatar}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm shrink-0 object-cover"
                  alt=""
                />
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <span className="font-display font-black text-xl text-slate-800">
                      {comment.user.name}
                    </span>
                    <span className="hidden md:block text-slate-300">•</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg">
                      {new Date(comment.timestamp).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-base max-w-2xl">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
