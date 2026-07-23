import React, { useState } from 'react';
import { EvaluationResult } from '../types';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Copy, Check, ThumbsUp, RefreshCw } from 'lucide-react';

interface EvaluationModalProps {
  result: EvaluationResult;
  onClose: () => void;
  onApplyImprovedEssay: (improvedText: string) => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  result,
  onClose,
  onApplyImprovedEssay,
}) => {
  const [copiedImproved, setCopiedImproved] = useState(false);

  const handleCopyImproved = () => {
    navigator.clipboard.writeText(result.improvedEssay);
    setCopiedImproved(true);
    setTimeout(() => setCopiedImproved(false), 2000);
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 8) return 'bg-emerald-500 text-white';
    if (score >= 6.5) return 'bg-indigo-600 text-white';
    if (score >= 5) return 'bg-amber-500 text-white';
    return 'bg-rose-500 text-white';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-[28px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 border-b border-slate-100 p-5 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-slate-800">Kết quả Chấm bài AI (Level 2.1)</h3>
              <p className="text-xs text-slate-500">Đánh giá theo chuẩn thang điểm tiếng Anh Cao đẳng</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-slate-800">
          {/* Top Score Overview Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Total Score */}
            <div className="bg-slate-50 p-4 rounded-[20px] border border-slate-200/80 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Điểm Tổng</span>
              <div
                className={`mt-1.5 text-xl font-bold px-3 py-1 rounded-full ${getScoreBadgeColor(
                  result.score
                )}`}
              >
                {result.score} / 10
              </div>
            </div>

            {/* Word Count */}
            <div className="bg-slate-50 p-4 rounded-[20px] border border-slate-200/80 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Số từ</span>
              <div
                className={`mt-1 text-base font-bold flex items-center gap-1 ${
                  result.isWordCountPass ? 'text-emerald-700' : 'text-amber-700'
                }`}
              >
                {result.isWordCountPass ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                )}
                <span>{result.wordCount} từ</span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
                {result.isWordCountPass ? 'Đạt chuẩn >=150 từ' : 'Chưa đạt 150 từ'}
              </span>
            </div>

            {/* Grammar Score */}
            <div className="bg-slate-50 p-4 rounded-[20px] border border-slate-200/80 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Ngữ pháp</span>
              <div className="mt-1 text-lg font-bold text-indigo-700">{result.grammarScore} / 10</div>
            </div>

            {/* Vocabulary Score */}
            <div className="bg-slate-50 p-4 rounded-[20px] border border-slate-200/80 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Từ vựng</span>
              <div className="mt-1 text-lg font-bold text-emerald-700">{result.vocabularyScore} / 10</div>
            </div>
          </div>

          {/* Overall Feedback */}
          <div className="bg-indigo-50/80 border border-indigo-100 rounded-[20px] p-5">
            <h4 className="font-bold text-indigo-900 text-sm mb-1">💬 Nhận xét chung của Cô Giáo AI:</h4>
            <p className="text-sm text-slate-800 leading-relaxed">{result.overallFeedbackVi}</p>
          </div>

          {/* Strengths */}
          {result.strengthsVi && result.strengthsVi.length > 0 && (
            <div className="bg-slate-50 p-5 rounded-[20px] border border-slate-200/80">
              <h4 className="font-bold text-emerald-800 text-sm mb-2 flex items-center gap-1.5">
                <ThumbsUp className="w-4 h-4 text-emerald-600" />
                <span>Điểm mạnh trong bài viết:</span>
              </h4>
              <ul className="space-y-1.5 text-xs font-semibold text-slate-700">
                {result.strengthsVi.map((st, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Grammar Errors Table */}
          <div className="space-y-3">
            <h4 className="font-bold text-rose-800 text-sm flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Phân tích lỗi ngữ pháp & Cách khắc phục ({result.grammarErrors.length} lỗi):</span>
            </h4>

            {result.grammarErrors.length === 0 ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 font-semibold">
                🎉 Tuyệt vời! Không phát hiện thấy lỗi ngữ pháp nghiêm trọng nào trong bài viết.
              </div>
            ) : (
              <div className="space-y-3">
                {result.grammarErrors.map((err, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-[20px] text-xs space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                      <div className="text-rose-700 line-through font-mono font-medium">
                        ❌ {err.original}
                      </div>
                      <div className="text-emerald-700 font-mono font-bold">
                        ✅ {err.correction}
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      💡 <strong className="text-indigo-700">Giải thích:</strong> {err.explanationVi}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vocabulary Suggestions */}
          {result.vocabularySuggestions && result.vocabularySuggestions.length > 0 && (
            <div className="bg-slate-50 p-5 rounded-[20px] border border-slate-200/80">
              <h4 className="font-bold text-emerald-800 text-sm mb-2">
                🌟 Gợi ý từ vựng / Collocation giúp bài viết ấn tượng hơn:
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.vocabularySuggestions.map((sug, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold shadow-2xs"
                  >
                    {sug}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Improved Essay Preview */}
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-[24px] p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 pb-3">
              <div>
                <h4 className="font-bold text-indigo-900 text-base flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span>Bài văn đã sửa hoàn chỉnh (A1-A2 High Score)</span>
                </h4>
                <p className="text-xs text-indigo-700">
                  Phiên bản đã được sửa hết lỗi ngữ pháp và đạt chuẩn &gt;= 150 từ.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyImproved}
                  className="px-3.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                >
                  {copiedImproved ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedImproved ? 'Đã sao chép!' : 'Sao chép'}</span>
                </button>

                <button
                  onClick={() => {
                    onApplyImprovedEssay(result.improvedEssay);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Áp dụng bài này</span>
                </button>
              </div>
            </div>

            <div className="p-5 bg-white rounded-[20px] border border-indigo-100 text-sm font-sans text-slate-800 leading-relaxed whitespace-pre-wrap italic shadow-2xs">
              {result.improvedEssay}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold transition-colors cursor-pointer"
          >
            Đóng bảng kết quả
          </button>
        </div>
      </div>
    </div>
  );
};
