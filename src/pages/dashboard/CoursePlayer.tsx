import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  PlayCircle,
  FileText,
  CheckCircle,
  Upload,
  MessageSquare,
  Star,
} from "lucide-react";
import { mockLessons, availableCourses } from "../../data/mockData";
import { motion, AnimatePresence } from "motion/react";

export default function CoursePlayer() {
  const { courseId } = useParams();
  const course =
    availableCourses.find((c) => c.id === courseId) || availableCourses[0];

  const [activeLesson, setActiveLesson] = useState(mockLessons[0]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success"
  >("idle");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setUploadStatus("uploading");

      // Simulate upload delay
      setTimeout(() => {
        setUploadStatus("success");
      }, 2000);
    }
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] max-h-screen flex-col lg:flex-row bg-slate-50 mx-4 lg:mx-8 my-4 lg:my-8 rounded-[2rem] border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden selection:bg-indigo-500/20 selection:text-indigo-900 relative">
      <div className="absolute top-40 left-1/3 w-[500px] h-[500px] bg-rose-200 rounded-full blur-[150px] opacity-[0.5] pointer-events-none" />
      {/* Video / Content Area */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto relative z-10 bg-transparent">
        <div className="px-6 lg:px-10 py-6 border-b border-white shadow-sm flex items-center gap-6 bg-white/70 backdrop-blur-2xl sticky top-0 z-10">
          <Link
            to="/dashboard"
            className="w-12 h-12 flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-indigo-600 transition-all shrink-0 hover:-translate-y-0.5 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 line-clamp-1">
              Модуль / {course.title}
            </h2>
            <h3 className="text-xl font-display font-bold text-slate-800 line-clamp-1">
              {activeLesson.title}
            </h3>
          </div>
        </div>

        <div className="flex-1 p-6 lg:p-10 max-w-5xl mx-auto w-full">
          {activeLesson.type === "video" ? (
            <div
              className="w-full aspect-[16/9] bg-slate-100 rounded-[2rem] border-4 border-white overflow-hidden relative group shadow-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${course.thumbnail})` }}
            >
              {/* Simulated Video Player */}
              <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/90 shadow-2xl rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <PlayCircle className="w-10 h-10 text-indigo-500 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-2 bg-slate-200/50 backdrop-blur-sm">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md w-1/3 rounded-r-full" />
              </div>
            </div>
          ) : (
            <div className="w-full bg-white/80 backdrop-blur-2xl border-4 border-white shadow-xl rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 blur-[80px] rounded-full pointer-events-none opacity-60" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 relative z-10 border-b border-slate-200 pb-8">
                <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-rose-400 shadow-lg shadow-amber-500/30 rounded-2xl flex items-center justify-center transform rotate-6 shrink-0">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-800">
                  Практика: {activeLesson.title}
                </h3>
              </div>

              <p className="text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-12 relative z-10">
                Настало время практики! На основе того, что мы изучили, нарисуй
                свой первый макет карточки товара в Figma. Загрузи файл или
                картинку ниже, и наставник проверит твою работу!
              </p>

              <div className="mt-8 border-4 border-dashed border-slate-300 rounded-[2rem] p-10 lg:p-16 flex flex-col items-center justify-center text-center relative hover:bg-slate-50 transition-colors bg-white/50 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  {uploadStatus === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <Upload className="w-12 h-12 text-slate-400 mb-6" />
                      <p className="text-xl font-display font-bold text-slate-800 mb-3">
                        Загрузить проект
                      </p>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-10">
                        Figma (.fig) | Изображение (до 50MB)
                      </p>
                      <label className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md shadow-indigo-500/30">
                        Выбрать файл
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileUpload}
                          accept=".pdf,.fig,.png,.jpg"
                        />
                      </label>
                    </motion.div>
                  )}

                  {uploadStatus === "uploading" && (
                    <motion.div
                      key="upload"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-6 shadow-sm" />
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
                        Анализ данных... {uploadedFile?.name}
                      </p>
                    </motion.div>
                  )}

                  {uploadStatus === "success" && (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/30 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-2xl font-display font-bold text-slate-800 mb-3">
                        Загрузка успешна!
                      </p>
                      <p className="text-sm font-medium text-slate-500">
                        Мастер скоро рассмотрит вашу работу.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Description & Discussion under video */}
          <div className="mt-12 bg-white/70 backdrop-blur-xl border border-white shadow-sm rounded-3xl p-8 pt-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 font-display">
              Транскрипт
            </h4>
            <p className="text-slate-600 font-medium leading-relaxed text-base">
              В этом видео мы разбираем, как цвета передают эмоции. Почему
              красные кнопки хочется нажимать быстрее, а синие вызывают доверие?
              Смотри внимательно, это пригодится в твоих проектах!
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Curriculum */}
      <div className="w-full lg:w-[400px] bg-white/70 backdrop-blur-2xl flex flex-col shrink-0 relative z-20 border-l border-white/50">
        <div className="p-8 border-b border-white">
          <h3 className="font-display font-bold text-xl text-slate-800 mb-6">
            Программа модуля
          </h3>
          <div className="flex items-center justify-between border-2 border-slate-200 bg-white p-4 rounded-2xl shadow-sm">
            <div className="h-2.5 flex-1 bg-slate-100 rounded-full overflow-hidden mr-6 shadow-inner border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md rounded-full"
                style={{
                  width: `${(mockLessons.filter((l) => l.isCompleted).length / mockLessons.length) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase shrink-0">
              {mockLessons.filter((l) => l.isCompleted).length} /{" "}
              {mockLessons.length}
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {mockLessons.map((lesson, idx) => {
            const isActive = lesson.id === activeLesson.id;
            return (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson)}
                className={`w-full text-left p-5 flex gap-5 transition-all border-2 rounded-2xl ${isActive ? "bg-white border-indigo-200 shadow-md shadow-indigo-100" : "bg-transparent border-transparent hover:bg-white/50 hover:border-white"}`}
              >
                <div className="mt-1 flex-shrink-0">
                  {lesson.isCompleted ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                  ) : lesson.type === "video" ? (
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shadow-sm border border-indigo-100">
                      <PlayCircle className="w-5 h-5 text-indigo-400 ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shadow-sm border border-amber-100">
                      <FileText className="w-5 h-5 text-amber-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold leading-relaxed mb-3 ${isActive ? "text-slate-800" : "text-slate-600"}`}
                  >
                    {idx + 1}. {lesson.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{lesson.duration}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>
                      {lesson.type === "video" ? "Видео" : "Практика"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
