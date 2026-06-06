import { useState, useRef, useEffect } from "react";
import {
  Send,
  Image as ImageIcon,
  Paperclip,
  MoreVertical,
  Sparkles,
  Smile,
  Bot,
} from "lucide-react";
import {
  mockMessages,
  mockInstructors,
  mockCurrentUser,
} from "../../data/mockData";
import { Message } from "../../types";
import { motion, AnimatePresence } from "motion/react";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const instructor = mockInstructors[0]; // Active chat with Elena

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: mockCurrentUser.id,
      receiverId: instructor.id,
      content: inputText,
      timestamp: new Date().toISOString(),
      read: true,
    };

    setMessages([...messages, newMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate auto-reply from instructor
    setTimeout(() => {
      const replyMsg: Message = {
        id: (Date.now() + 1).toString(),
        senderId: instructor.id,
        receiverId: mockCurrentUser.id,
        content:
          "Звучит отлично! Жду ваши новые наработки. У вас отлично получается, продолжайте в том же духе! ✨",
        timestamp: new Date().toISOString(),
        read: false,
      };
      setMessages((prev) => [...prev, replyMsg]);
      setIsTyping(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] max-h-screen bg-white/70 backdrop-blur-3xl max-w-4xl mx-auto rounded-[2.5rem] border-4 border-white relative overflow-hidden m-4 lg:m-8 selection:bg-indigo-500/20 selection:text-indigo-900 shadow-xl">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-rose-200 rounded-full blur-[80px] pointer-events-none opacity-[0.5]" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full blur-[100px] pointer-events-none opacity-[0.4]" />

      {/* Chat Header */}
      <header className="px-8 py-6 border-b-2 border-slate-100 bg-white/50 flex items-center justify-between sticky top-0 z-10 backdrop-blur-3xl shadow-sm">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm" />
          </div>
          <div>
            <h2 className="text-xl font-display font-black text-slate-800">
              {instructor.name}
            </h2>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">
              Мастер • На связи
            </p>
          </div>
        </div>
        <button className="p-3 text-slate-400 hover:text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors border-2 border-transparent hover:border-indigo-100">
          <MoreVertical className="w-5 h-5" />
        </button>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 z-10 relative">
        {messages.map((msg, i) => {
          const isMine = msg.senderId === mockCurrentUser.id;
          const showAvatar =
            !isMine && (i === 0 || messages[i - 1].senderId !== msg.senderId);

          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              key={msg.id}
              className={`flex gap-4 max-w-[80%] ${isMine ? "ml-auto flex-row-reverse" : ""}`}
            >
              {!isMine && (
                <div className="w-10 flex-shrink-0">
                  {showAvatar && (
                    <img
                      src={instructor.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  )}
                </div>
              )}
              <div
                className={`px-6 py-5 text-sm font-medium leading-relaxed shadow-sm ${
                  isMine
                    ? "bg-gradient-to-tr from-indigo-500 to-purple-500 text-white rounded-3xl rounded-tr-md shadow-indigo-500/20"
                    : "bg-white border-2 border-slate-100 text-slate-600 rounded-3xl rounded-tl-md"
                }`}
              >
                {msg.content}
                <div
                  className={`text-[9px] mt-3 font-bold uppercase tracking-widest flex items-center justify-end gap-1 opacity-70 ${isMine ? "text-indigo-100" : "text-slate-400"}`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4 max-w-[80%]"
          >
            <div className="w-10 flex-shrink-0">
              <img
                src={instructor.avatar}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
            </div>
            <div className="px-6 py-5 bg-white border-2 border-slate-100 rounded-3xl rounded-tl-md flex items-center gap-2 shadow-sm">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, delay: 0, duration: 1 }}
                className="w-2 h-2 bg-indigo-300 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, delay: 0.15, duration: 1 }}
                className="w-2 h-2 bg-purple-300 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, delay: 0.3, duration: 1 }}
                className="w-2 h-2 bg-rose-300 rounded-full"
              />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} className="h-4" />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white/60 border-t-2 border-slate-100 z-10 backdrop-blur-3xl shadow-lg">
        <div className="flex items-end gap-3 bg-white border-2 border-slate-200 rounded-3xl p-3 focus-within:border-indigo-400 focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
          <button className="p-3 text-slate-400 hover:text-indigo-500 rounded-xl hover:bg-slate-50 transition-colors shrink-0">
            <Paperclip className="w-6 h-6" />
          </button>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="ВВЕДИТЕ ТЕКСТ..."
            className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none resize-none max-h-32 min-h-[44px] py-4 text-sm font-bold tracking-widest px-2 text-slate-700 placeholder:text-slate-300"
            rows={1}
          />

          <button className="p-3 text-slate-400 hover:text-indigo-500 rounded-xl hover:bg-slate-50 transition-colors shrink-0 hidden sm:block">
            <Smile className="w-6 h-6" />
          </button>

          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-md shadow-indigo-500/20"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
