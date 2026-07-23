import React, { useState } from 'react';
import { Topic, Question } from '../types';
import { Sparkles, HelpCircle, ArrowRight, Check, RefreshCw, ChevronDown, ChevronUp, Copy } from 'lucide-react';

interface GuidedQuestionBuilderProps {
  topic: Topic;
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onCombineToFullEssay: () => void;
}

export const GuidedQuestionBuilder: React.FC<GuidedQuestionBuilderProps> = ({
  topic,
  answers,
  onAnswerChange,
  onCombineToFullEssay,
}) => {
  const [loadingQuestionId, setLoadingQuestionId] = useState<string | null>(null);
  const [suggestionsMap, setSuggestionsMap] = useState<
    Record<string, { optionEn: string; optionVi: string }[]>
  >({});
  const [openExampleId, setOpenExampleId] = useState<string | null>(null);

  // Count total words in all answers
  const totalCombinedWords = Object.values(answers)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const handleFetchAiSuggestions = async (question: Question) => {
    setLoadingQuestionId(question.id);
    try {
      const res = await fetch('/api/gemini/suggest-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionEn: question.questionEn,
          questionVi: question.questionVi,
          sentenceStarter: question.sentenceStarter,
          userDraft: answers[question.id] || '',
          topicTitle: topic.titleEn,
        }),
      });

      if (!res.ok) throw new Error('Không thể lấy gợi ý AI');
      const data = await res.json();
      if (data.suggestions) {
        setSuggestionsMap((prev) => ({
          ...prev,
          [question.id]: data.suggestions,
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingQuestionId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Progress */}
      <div className="bg-white border border-slate-200 rounded-[24px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div>
          <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-1">Guided Builder</h2>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>✍️ Hướng dẫn trả lời theo từng câu hỏi</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Trả lời từng câu hỏi bên dưới. Hệ thống sẽ tự động tổng hợp thành bài luận hoàn chỉnh (&gt;= {topic.minWords} từ).
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Tích lũy:</span>
            <div className="text-lg font-bold text-indigo-600">
              {totalCombinedWords} / {topic.minWords} từ
            </div>
          </div>
          <button
            id="combine-essay-top-btn"
            onClick={onCombineToFullEssay}
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Ghép thành bài hoàn chỉnh</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sections & Questions */}
      {topic.sections.map((section) => (
        <div key={section.id} className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-xs">
          <div className="border-b border-slate-100 pb-3 mb-5 flex items-center justify-between">
            <div>
              <span className="text-slate-400 uppercase text-[11px] font-bold tracking-widest">Section Outline</span>
              <h4 className="text-base font-bold text-slate-800 tracking-tight">
                {section.titleEn}
              </h4>
              <p className="text-xs text-slate-500">{section.titleVi}</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
              {section.questions.length} câu hỏi
            </span>
          </div>

          <div className="space-y-5">
            {section.questions.map((q) => {
              const currentVal = answers[q.id] || '';
              const wordCount = currentVal
                .trim()
                .split(/\s+/)
                .filter((w) => w.length > 0).length;
              const suggestions = suggestionsMap[q.id] || [];
              const isExampleOpen = openExampleId === q.id;

              return (
                <div
                  key={q.id}
                  className="bg-slate-50/80 border border-slate-200/80 rounded-[20px] p-5 transition-all hover:border-slate-300"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center border border-indigo-200">
                        {q.number}
                      </span>
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm sm:text-base">{q.questionEn}</h5>
                        <p className="text-xs text-indigo-600 font-semibold mt-0.5">{q.questionVi}</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                      {wordCount} từ
                    </span>
                  </div>

                  {/* Hint & Sentence Starter */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <div className="text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span className="font-medium">{q.hintVi}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (!currentVal.startsWith(q.sentenceStarter)) {
                          onAnswerChange(q.id, q.sentenceStarter + currentVal);
                        }
                      }}
                      className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full transition-colors cursor-pointer flex items-center gap-1 font-mono text-[11px] font-semibold"
                      title="Bấm để chèn mẫu câu mở đầu"
                    >
                      <span>Mẫu mở đầu: "{q.sentenceStarter}"</span>
                    </button>
                  </div>

                  {/* Input Box */}
                  <div className="mt-3 relative">
                    <textarea
                      id={`question-input-${q.id}`}
                      rows={2}
                      value={currentVal}
                      onChange={(e) => onAnswerChange(q.id, e.target.value)}
                      placeholder={`Viết câu trả lời bằng tiếng Anh... (Gợi ý bắt đầu: ${q.sentenceStarter})`}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                    />
                  </div>

                  {/* Action Row: AI Suggest & Example View */}
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleFetchAiSuggestions(q)}
                      disabled={loadingQuestionId === q.id}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shadow-2xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
                      <span>
                        {loadingQuestionId === q.id ? 'Đang tạo câu...' : 'Gợi ý hoàn thành câu (AI)'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpenExampleId(isExampleOpen ? null : q.id)}
                      className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Xem câu mẫu đáp án</span>
                      {isExampleOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* AI Suggestions Chips */}
                  {suggestions.length > 0 && (
                    <div className="mt-3 p-4 bg-indigo-50/80 border border-indigo-100 rounded-[18px] space-y-2">
                      <p className="text-xs font-bold text-indigo-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        Gợi ý từ AI (Bấm vào câu bạn thích để chọn):
                      </p>
                      <div className="space-y-2">
                        {suggestions.map((sugg, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => onAnswerChange(q.id, sugg.optionEn)}
                            className="w-full text-left p-3 rounded-xl bg-white hover:bg-indigo-100/60 border border-indigo-200/80 transition-all cursor-pointer group shadow-2xs"
                          >
                            <p className="text-xs font-bold text-slate-800 group-hover:text-indigo-900">
                              👉 {sugg.optionEn}
                            </p>
                            <p className="text-[11px] text-slate-500 italic mt-0.5">
                              ({sugg.optionVi})
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Example Answer Collapse */}
                  {isExampleOpen && (
                    <div className="mt-3 p-4 bg-emerald-50/90 border border-emerald-200/80 rounded-[18px] text-xs space-y-1.5">
                      <p className="font-bold text-emerald-900">💡 Câu mẫu chuẩn A1-A2:</p>
                      <p className="text-slate-800 font-mono italic">"{q.exampleAnswer}"</p>
                      <button
                        type="button"
                        onClick={() => onAnswerChange(q.id, q.exampleAnswer)}
                        className="mt-1 px-3 py-1 bg-emerald-600 text-white rounded-full text-[11px] font-semibold hover:bg-emerald-700 cursor-pointer inline-flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Dùng câu mẫu này
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Bottom Floating/Fixed Action Bar */}
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-[24px] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg sticky bottom-4">
        <div>
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tổng cộng bài viết:</span>
          <p className="text-base font-bold text-slate-800">
            {totalCombinedWords} từ{' '}
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold ml-2 ${
                totalCombinedWords >= topic.minWords
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}
            >
              {totalCombinedWords >= topic.minWords
                ? 'Đã đạt >= 150 từ!'
                : `Còn thiếu ${topic.minWords - totalCombinedWords} từ`}
            </span>
          </p>
        </div>

        <button
          id="combine-essay-bottom-btn"
          onClick={onCombineToFullEssay}
          className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Ghép thành bài & Chuyển sang chỉnh sửa</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
