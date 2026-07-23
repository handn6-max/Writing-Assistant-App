import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

interface AiMentorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  currentEssay: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export const AiMentorDrawer: React.FC<AiMentorDrawerProps> = ({
  isOpen,
  onClose,
  topicTitle,
  currentEssay,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Xin chào em! Cô là Trợ lý Tiếng Anh AI. Em đang thực hành viết bài thuộc chủ đề "${topicTitle}". Nếu cần hỏi về từ vựng, ngữ pháp hay cách diễn đạt câu tiếng Anh A1-A2, em cứ nhắn cô nhé!`,
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMsg.trim() || isLoading) return;

    const userText = inputMsg.trim();
    const userMsgObj: ChatMessage = { id: Date.now().toString(), sender: 'user', text: userText };

    setMessages((prev) => [...prev, userMsgObj]);
    setInputMsg('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          topicTitle,
          currentEssay,
        }),
      });

      if (!res.ok) throw new Error('Lỗi phản hồi từ server');
      const data = await res.json();

      const aiMsgObj: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || 'Cô chưa nghe rõ câu hỏi, em hỏi lại giúp cô nhé!',
      };

      setMessages((prev) => [...prev, aiMsgObj]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: 'Rất tiếc, cô đang gặp trục trặc kết nối mạng. Em thử hỏi lại lần nữa nhé!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                <span>Cô Giáo AI (Writing Assistant)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-500">Giải đáp thắc mắc từ vựng & ngữ pháp Level A1-A2</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-2 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-emerald-600 text-white font-bold'
                }`}
              >
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none font-medium'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-indigo-600 p-2 italic font-medium">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Cô Giáo AI đang soạn câu trả lời...</span>
            </div>
          )}
        </div>

        {/* Preset Question Chips */}
        <div className="p-2.5 bg-white border-t border-slate-100 overflow-x-auto flex gap-1.5 no-scrollbar text-[11px]">
          <button
            onClick={() => setInputMsg('Cô ơi, cấu trúc Present Simple chia như thế nào ạ?')}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full border border-slate-200 whitespace-nowrap cursor-pointer font-semibold"
          >
            💡 Cách chia Thì hiện tại đơn?
          </button>
          <button
            onClick={() => setInputMsg('Giúp em đặt câu với trạng từ chỉ tần suất (always, usually)?')}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full border border-slate-200 whitespace-nowrap cursor-pointer font-semibold"
          >
            💡 Dùng trạng từ tần suất?
          </button>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Nhập câu hỏi..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-sans"
          />
          <button
            type="submit"
            disabled={!inputMsg.trim() || isLoading}
            className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full disabled:opacity-50 transition-colors cursor-pointer shadow-2xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
