import React from 'react';
import { BookOpen, Sparkles, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { TOPICS } from '../data/topics';

interface NavbarProps {
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
  wordCount: number;
  minWords: number;
  activeTab: 'guided' | 'editor' | 'grammar_vocab' | 'sample' | 'quiz';
  onSelectTab: (tab: 'guided' | 'editor' | 'grammar_vocab' | 'sample' | 'quiz') => void;
  onOpenMentorChat: () => void;
  onEvaluate: () => void;
  isEvaluating: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedTopicId,
  onSelectTopic,
  wordCount,
  minWords,
  activeTab,
  onSelectTab,
  onOpenMentorChat,
  onEvaluate,
  isEvaluating,
}) => {
  const currentTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];
  const isWordCountPassed = wordCount >= minWords;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md text-slate-800 border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-xs font-bold text-white text-xl">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-slate-800 tracking-tight">
                  A1-A2 Writing Assistant
                </h1>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full">
                  Student Edition
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Hỗ trợ viết bài luận chuẩn curriculum tiếng Anh Cao đẳng
              </p>
            </div>
          </div>

          {/* Topic Selector Dropdown & Word Count Indicator */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200 text-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Topic:</span>
              <select
                id="topic-selector-nav"
                value={selectedTopicId}
                onChange={(e) => onSelectTopic(e.target.value)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer max-w-[200px] sm:max-w-[280px] truncate"
              >
                {TOPICS.map((topic) => (
                  <option key={topic.id} value={topic.id} className="bg-white text-slate-800">
                    Topic {topic.number}: {topic.titleEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Live Word Count Indicator */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                isWordCountPassed
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {isWordCountPassed ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              )}
              <span>
                {wordCount} / {minWords} từ
              </span>
            </div>

            {/* AI Evaluate Button */}
            <button
              id="nav-evaluate-btn"
              onClick={onEvaluate}
              disabled={isEvaluating}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs disabled:opacity-50 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>{isEvaluating ? 'Đang chấm...' : 'Chấm bài với AI'}</span>
            </button>

            {/* AI Mentor Chat Trigger */}
            <button
              id="nav-mentor-chat-btn"
              onClick={onOpenMentorChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
              title="Hỏi trợ lý Cô Giáo AI"
            >
              <MessageCircle className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Trợ lý AI</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 border-t border-slate-100 text-xs sm:text-sm font-medium no-scrollbar">
          <button
            id="tab-guided-btn"
            onClick={() => onSelectTab('guided')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'guided'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            1. Trả lời từng câu (Guided)
          </button>

          <button
            id="tab-editor-btn"
            onClick={() => onSelectTab('editor')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'editor'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            2. Bài hoàn chỉnh ({wordCount} từ)
          </button>

          <button
            id="tab-grammar-vocab-btn"
            onClick={() => onSelectTab('grammar_vocab')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'grammar_vocab'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Ngữ pháp & Từ vựng
          </button>

          <button
            id="tab-sample-btn"
            onClick={() => onSelectTab('sample')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'sample'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            Bài văn mẫu (150+ từ)
          </button>

          <button
            id="tab-quiz-btn"
            onClick={() => onSelectTab('quiz')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Luyện tập nhanh (Quiz)
          </button>
        </div>
      </div>
    </header>
  );
};
