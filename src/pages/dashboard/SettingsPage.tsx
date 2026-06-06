import { useState } from "react";
import { Settings, User, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] selection:bg-indigo-500/20 selection:text-indigo-900 relative">
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[150px] opacity-[0.4] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-sky-200 rounded-full blur-[100px] opacity-[0.5] pointer-events-none" />

      <header className="mb-10 bg-white/70 backdrop-blur-3xl border-4 border-white p-10 lg:p-14 rounded-[2.5rem] flex items-center justify-between relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 blur-[80px] rounded-full pointer-events-none opacity-[0.6]" />
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-display font-black text-slate-800 mb-4">
              Настройки
            </h1>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
              Управление вашим профилем и предпочтениями.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-slate-200 to-slate-300 rounded-2xl border-4 border-white shrink-0 shadow-lg transform rotate-3">
            <Settings className="w-8 h-8 text-slate-500 fill-slate-300" />
          </div>
        </div>
      </header>

      <div className="bg-white/80 backdrop-blur-2xl border-4 border-white p-8 lg:p-12 flex-1 rounded-[2.5rem] relative overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 h-full relative z-10">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-3 border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-10">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all border-2 rounded-xl shadow-sm ${activeTab === "profile" ? "bg-white text-indigo-600 border-indigo-200 shadow-indigo-100" : "bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700 border-transparent hover:border-slate-200"}`}
            >
              <User className="w-4 h-4" /> Профиль
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all border-2 rounded-xl shadow-sm ${activeTab === "notifications" ? "bg-white text-indigo-600 border-indigo-200 shadow-indigo-100" : "bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700 border-transparent hover:border-slate-200"}`}
            >
              <Bell className="w-4 h-4" /> Уведомления
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all border-2 rounded-xl shadow-sm ${activeTab === "security" ? "bg-white text-indigo-600 border-indigo-200 shadow-indigo-100" : "bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700 border-transparent hover:border-slate-200"}`}
            >
              <Shield className="w-4 h-4" /> Безопасность
            </button>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-10">
            {activeTab === "profile" && (
              <div>
                <h3 className="text-2xl font-display font-black text-slate-800 mb-8 border-b-2 border-slate-100 pb-4">
                  Личные данные
                </h3>
                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 pl-2">
                      Имя пользователя
                    </label>
                    <input
                      type="text"
                      defaultValue="Леонид"
                      className="w-full bg-white border-2 border-slate-200 px-5 py-4 text-sm font-bold text-slate-700 rounded-xl focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-slate-400 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 pl-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="leonid@example.com"
                      className="w-full bg-white border-2 border-slate-200 px-5 py-4 text-sm font-bold text-slate-700 rounded-xl focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-slate-400 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h3 className="text-2xl font-display font-black text-slate-800 mb-8 border-b-2 border-slate-100 pb-4">
                  Уведомления
                </h3>
                <div className="space-y-4 max-w-md">
                  <p className="text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    Здесь будут настройки ваших уведомлений.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h3 className="text-2xl font-display font-black text-slate-800 mb-8 border-b-2 border-slate-100 pb-4">
                  Безопасность
                </h3>
                <div className="space-y-4 max-w-md">
                  <p className="text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    Здесь будут настройки безопасности.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-10 mt-10 border-t-2 border-slate-100">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-indigo-500/30">
                Сохранить изменения
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
