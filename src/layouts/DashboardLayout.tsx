import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Compass, MessageSquare, Briefcase, Settings, LogOut, Zap } from 'lucide-react';
import { mockCurrentUser } from '../data/mockData';

export default function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { label: 'Мое обучение', path: '/dashboard', icon: Home },
    { label: 'Искать курсы', path: '/catalog', icon: Compass },
    { label: 'Сообщения', path: '/dashboard/chat', icon: MessageSquare },
    { label: 'Домашки', path: '/dashboard/homework', icon: Briefcase },
    { label: 'Настройки', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Sidebar */}
      <aside className="w-[300px] m-4 mr-0 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col pt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-200/50 to-transparent blur-2xl rounded-full pointer-events-none" />
        
        <div className="px-8 mb-10 flex flex-col items-center gap-4 relative z-10 mt-4">
           <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transform rotate-3 inline-block">
             <Zap className="w-8 h-8 text-white fill-white" />
          </div>
          <span className="font-display font-semibold text-2xl tracking-widest uppercase text-slate-800">Aura</span>
        </div>
        
        <div className="px-5 py-4 flex-1 overflow-y-auto relative z-10">
          <nav className="space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-5 px-5 py-4 text-sm font-semibold rounded-2xl transition-all group ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20 transform hover:-translate-y-0.5' 
                      : 'text-slate-500 hover:bg-white/80 hover:text-indigo-600 hover:shadow-sm hover:-translate-y-0.5'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500 transition-colors'}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-slate-200/50 bg-white/40 m-5 rounded-2xl relative z-10 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6 relative">
            <img src={mockCurrentUser.avatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm bg-indigo-50" />
            <div className="absolute -bottom-1 left-8 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
            
            <div className="flex flex-col">
               <span className="text-sm font-bold text-slate-800 mb-0.5 line-clamp-1">{mockCurrentUser.name}</span>
               <Link to="/dashboard/settings" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Мой профиль</Link>
            </div>
          </div>
          <Link to="/" className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold text-slate-600 bg-white/60 hover:bg-white border border-slate-200 shadow-sm transition-all hover:text-indigo-600 hover:-translate-y-0.5">
            <LogOut className="w-4 h-4" />
            Выйти
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-transparent relative">
        <Outlet />
      </main>
    </div>
  );
}
