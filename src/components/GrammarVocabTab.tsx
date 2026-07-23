import React, { useState } from 'react';
import { Topic } from '../types';
import { BookOpen, Tag, Volume2, Copy, Check, ChevronRight } from 'lucide-react';

interface GrammarVocabTabProps {
  topic: Topic;
}

export const GrammarVocabTab: React.FC<GrammarVocabTabProps> = ({ topic }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Grammar Rules Deck */}
      <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-100 pb-4 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest">Grammar Deck</h2>
            <h3 className="text-xl font-bold text-slate-800">Cấu trúc Ngữ pháp Trọng tâm (Grammar Rules)</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Quy tắc ngữ pháp bắt buộc dùng trong bài luận Topic {topic.number} (Level 2.1)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topic.grammarRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-[20px] p-5 flex flex-col justify-between space-y-4 hover:border-indigo-300 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">
                  Quy tắc {idx + 1}
                </span>
                <h4 className="font-bold text-slate-800 text-base mt-2.5">{rule.title}</h4>
                <div className="mt-2 p-2.5 bg-white rounded-xl font-mono text-xs text-indigo-700 font-semibold border border-indigo-100">
                  {rule.formula}
                </div>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{rule.explanationVi}</p>
              </div>

              <div className="border-t border-slate-200 pt-3 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Ví dụ ứng dụng:</p>
                {rule.examples.map((ex, eIdx) => (
                  <div
                    key={eIdx}
                    className="flex items-center justify-between gap-2 p-2 bg-white rounded-xl text-xs font-sans text-slate-800 border border-slate-200/80 shadow-2xs"
                  >
                    <span>"{ex}"</span>
                    <button
                      onClick={() => handleSpeak(ex)}
                      className="p-1 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary Categories Deck */}
      <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-100 pb-4 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest">Vocabulary Bank</h2>
            <h3 className="text-xl font-bold text-slate-800">Kho Từ vựng & Collocation Chuẩn</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Các cụm từ ăn điểm A1-A2 dành riêng cho Topic {topic.number}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {topic.vocabularyCategories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-sm font-bold text-emerald-800 border-l-3 border-emerald-500 pl-3 uppercase tracking-wider">
                {cat.categoryName}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="bg-slate-50 p-4 rounded-[18px] border border-slate-200 hover:border-emerald-300 transition-all space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-bold text-sm text-slate-800">{item.word}</span>
                        <p className="text-xs text-emerald-700 font-semibold">{item.meaning}</p>
                      </div>

                      <button
                        onClick={() => handleSpeak(item.word)}
                        className="p-1.5 text-slate-500 hover:text-emerald-700 bg-white rounded-lg border border-slate-200 cursor-pointer shadow-2xs"
                        title="Nghe phát âm từ vựng"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl text-xs text-slate-600 italic border border-slate-200/80 flex items-center justify-between gap-1">
                      <span>"{item.example}"</span>
                      <button
                        onClick={() => handleCopy(item.example)}
                        className="p-1 text-slate-400 hover:text-slate-800 cursor-pointer"
                        title="Chép câu ví dụ"
                      >
                        {copiedText === item.example ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
