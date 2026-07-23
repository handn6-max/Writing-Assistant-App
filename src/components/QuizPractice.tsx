import React, { useState } from 'react';
import { Topic, QuizQuestion } from '../types';
import { CheckCircle2, XCircle, RefreshCw, HelpCircle, Trophy } from 'lucide-react';

interface QuizPracticeProps {
  topic: Topic;
}

export const QuizPractice: React.FC<QuizPracticeProps> = ({ topic }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [fillAnswers, setFillAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const handleSelectOption = (qId: string, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: option }));
    setShowResults((prev) => ({ ...prev, [qId]: true }));
  };

  const handleFillSubmit = (qId: string) => {
    setShowResults((prev) => ({ ...prev, [qId]: true }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setFillAnswers({});
    setShowResults({});
  };

  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-1">Interactive Quiz</h2>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-emerald-600" />
            <span>Luyện tập Ngữ pháp & Từ vựng Nhanh (Topic {topic.number})</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Củng cố quy tắc ngữ pháp trọng tâm trước khi viết bài luận.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-start sm:self-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Làm lại tất cả</span>
        </button>
      </div>

      <div className="space-y-5">
        {topic.quizzes.map((q, idx) => {
          const isSubmitted = showResults[q.id];
          const userAns = q.type === 'multiple_choice' ? selectedAnswers[q.id] : fillAnswers[q.id];
          const isCorrect =
            userAns?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

          return (
            <div
              key={q.id}
              className="bg-slate-50/80 p-5 rounded-[20px] border border-slate-200/80 space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-200 flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="font-bold text-slate-800 text-sm sm:text-base">{q.prompt}</p>
              </div>

              {/* Multiple Choice Options */}
              {q.type === 'multiple_choice' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswers[q.id] === opt;
                    let optStyle = 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800 shadow-2xs';

                    if (isSubmitted) {
                      if (opt.toLowerCase() === q.correctAnswer.toLowerCase()) {
                        optStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold';
                      } else if (isSelected) {
                        optStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(q.id, opt)}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${optStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Fill in the blank */}
              {q.type === 'fill_blank' && (
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    value={fillAnswers[q.id] || ''}
                    onChange={(e) => setFillAnswers({ ...fillAnswers, [q.id]: e.target.value })}
                    placeholder="Nhập từ cần điền..."
                    className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 max-w-xs font-sans shadow-2xs"
                  />
                  <button
                    onClick={() => handleFillSubmit(q.id)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-xs cursor-pointer shadow-2xs"
                  >
                    Kiểm tra
                  </button>
                </div>
              )}

              {/* Feedback Explanation */}
              {isSubmitted && (
                <div
                  className={`p-4 rounded-[16px] border text-xs space-y-1 ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Chính xác! Đáp án đúng: {q.correctAnswer}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Chưa đúng! Đáp án chính xác là: "{q.correctAnswer}"</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-600">💡 Giải thích: {q.explanationVi}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
