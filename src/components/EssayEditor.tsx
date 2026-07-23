import React, { useState } from 'react';
import { Topic } from '../types';
import { Sparkles, Copy, Check, Trash2, Printer, AlertTriangle, CheckCircle2, FileText, Info } from 'lucide-react';

interface EssayEditorProps {
  topic: Topic;
  fullEssay: string;
  onEssayChange: (text: string) => void;
  onEvaluate: () => void;
  isEvaluating: boolean;
}

export const EssayEditor: React.FC<EssayEditorProps> = ({
  topic,
  fullEssay,
  onEssayChange,
  onEvaluate,
  isEvaluating,
}) => {
  const [copied, setCopied] = useState(false);

  // Calculate stats
  const words = fullEssay
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const wordCount = words.length;
  const minWords = topic.minWords || 150;
  const isPassed = wordCount >= minWords;
  const percentage = Math.min(100, Math.round((wordCount / minWords) * 100));

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEssay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Writing Essay - ${topic.titleEn}</title>
            <style>
              body { font-family: sans-serif; padding: 40px; line-height: 1.8; color: #111; }
              h1 { font-size: 20px; border-bottom: 2px solid #333; padding-bottom: 8px; }
              .meta { font-size: 13px; color: #555; margin-bottom: 20px; }
              .content { font-size: 16px; white-space: pre-wrap; font-family: 'Times New Roman', serif; }
              .footer { margin-top: 40px; font-size: 12px; color: #888; border-top: 1px solid #ccc; pt: 10px; }
            </style>
          </head>
          <body>
            <h1>TOPIC ${topic.number}: ${topic.titleEn}</h1>
            <div class="meta">
              <p><strong>Sub-title:</strong> ${topic.titleVi}</p>
              <p><strong>Word Count:</strong> ${wordCount} words (Requirement: >= ${minWords} words)</p>
              <p><strong>Level:</strong> English Level 2.1 (A1 - A2)</p>
            </div>
            <div class="content">${fullEssay}</div>
            <div class="footer">
              Generated via English Writing Level 2.1 Assistant • ${new Date().toLocaleDateString('vi-VN')}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
      {/* Editor Header & Word Count Progress Bar */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-1">Interactive Canvas</h2>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>Bài luận hoàn chỉnh (Full Essay)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Chỉnh sửa trực tiếp bài luận của bạn tại đây trước khi nhờ AI chấm.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã chép!' : 'Sao chép'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In / Xuất PDF</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ bài viết để làm lại không?')) {
                  onEssayChange('');
                }
              }}
              className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa</span>
            </button>
          </div>
        </div>

        {/* Word Count Progress Banner */}
        <div className="bg-slate-50 p-4 rounded-[20px] border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="flex items-center gap-1.5 text-slate-700">
              {isPassed ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              )}
              {isPassed
                ? 'Đã đạt yêu cầu về độ dài (>= 150 từ)'
                : `Cần viết thêm ít nhất ${minWords - wordCount} từ nữa để đạt chuẩn >= ${minWords} từ`}
            </span>
            <span className={isPassed ? 'text-emerald-700' : 'text-amber-700'}>
              {wordCount} / {minWords} words ({percentage}%)
            </span>
          </div>

          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                isPassed ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Textarea */}
      <div className="relative">
        <textarea
          id="full-essay-textarea"
          rows={12}
          value={fullEssay}
          onChange={(e) => onEssayChange(e.target.value)}
          placeholder={`Nhập hoặc dán toàn bộ bài văn tiếng Anh của bạn tại đây... (Ví dụ: Every day, I use several technological devices...)\n\nLưu ý: Bài viết cần đạt ít nhất ${minWords} từ theo đúng yêu cầu đề thi Level 2.1.`}
          className="w-full bg-slate-50 border border-slate-200 rounded-[20px] p-5 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans leading-relaxed"
        />
        <div className="absolute bottom-4 right-4 text-xs font-mono font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
          {wordCount} words | {fullEssay.length} chars
        </div>
      </div>

      {/* Bottom AI Evaluation Action Card - Primary Bento Accent */}
      <div className="bg-indigo-600 rounded-[24px] p-6 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h4 className="font-bold text-white text-base">Chấm điểm & Nhận xét ngữ pháp tự động (AI Teacher)</h4>
          </div>
          <p className="text-xs text-indigo-100 max-w-xl leading-relaxed">
            AI sẽ phân tích lỗi thì, trạng từ tần suất, cấu trúc <code className="text-indigo-200 font-mono bg-indigo-700/60 px-1 rounded">there is/are</code>, <code className="text-indigo-200 font-mono bg-indigo-700/60 px-1 rounded">have to</code> và gợi ý bài sửa nâng điểm.
          </p>
        </div>

        <button
          id="evaluate-essay-main-btn"
          onClick={onEvaluate}
          disabled={isEvaluating || wordCount === 0}
          className="w-full sm:w-auto px-6 py-3 bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-sm rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>{isEvaluating ? 'Đang phân tích bài...' : 'Chấm bài ngay'}</span>
        </button>
      </div>
    </div>
  );
};
