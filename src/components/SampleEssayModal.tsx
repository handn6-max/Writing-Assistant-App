import React, { useState } from 'react';
import { Topic } from '../types';
import { BookOpen, Copy, Check, Volume2, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface SampleEssayModalProps {
  topic: Topic;
  onApplySample: (content: string) => void;
}

export const SampleEssayModal: React.FC<SampleEssayModalProps> = ({ topic, onApplySample }) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const sample = topic.sampleEssay;

  const handleCopy = () => {
    navigator.clipboard.writeText(sample.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(sample.content);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-1 text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
              BÀI MẪU THAM KHẢO
            </span>
            <span className="text-xs font-bold text-slate-500">
              Độ dài: <span className="text-emerald-700">{sample.wordCount} từ</span> (&gt;= {topic.minWords} từ)
            </span>
          </div>
          <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-2">Model Essay</h2>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{sample.title}</h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSpeak}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isPlaying
                ? 'bg-amber-500 text-white animate-pulse'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Volume2 className="w-4 h-4 text-amber-600" />
            <span>{isPlaying ? 'Đang đọc...' : 'Nghe đọc bài'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép!' : 'Sao chép bài'}</span>
          </button>
        </div>
      </div>

      {/* Essay Content Box */}
      <div className="bg-slate-50 p-6 rounded-[20px] border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed font-sans whitespace-pre-wrap italic shadow-2xs">
        {sample.content}
      </div>

      {/* Grammar Highlights Grid */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Điểm ngữ pháp & Từ vựng đáng chú ý trong bài mẫu:</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sample.highlightedGrammar.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50 border border-slate-200 rounded-[18px] text-xs space-y-1 hover:border-indigo-200 transition-colors"
            >
              <span className="font-mono text-indigo-700 font-bold">"{item.text}"</span>
              <p className="text-slate-500">➔ Quy tắc: <strong className="text-slate-800">{item.rule}</strong></p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button
          onClick={() => onApplySample(sample.content)}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span>Dùng bài mẫu này làm dàn ý cho bài viết của tôi</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
