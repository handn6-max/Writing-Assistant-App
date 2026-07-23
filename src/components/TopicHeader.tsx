import React from 'react';
import { Topic } from '../types';
import { BookOpen, FileCheck, Info, Tag, Lightbulb } from 'lucide-react';

interface TopicHeaderProps {
  topic: Topic;
}

export const TopicHeader: React.FC<TopicHeaderProps> = ({ topic }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 mb-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full">
              TOPIC {topic.number}
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5 text-emerald-600" /> Standard: &gt;= {topic.minWords} words
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-full">
              Level 2.1 (A1 - A2)
            </span>
          </div>

          <h2 className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-3">Current Topic</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mt-0.5">
            {topic.titleEn}
          </h3>
          <p className="text-sm font-semibold text-indigo-600 mt-1">{topic.titleVi}</p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-3xl">
            {topic.descriptionVi}
          </p>
        </div>
      </div>

      {/* Teacher Annotated Notes Callout if available */}
      {topic.annotatedTeacherNotes && topic.annotatedTeacherNotes.length > 0 && (
        <div className="mt-5 p-4 bg-amber-50 border border-amber-200/80 rounded-[20px]">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs mb-1">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span className="uppercase tracking-wider">Teacher Guidance & Outline Hints:</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {topic.annotatedTeacherNotes.map((note, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold bg-white text-amber-800 border border-amber-200 rounded-xl shadow-2xs"
              >
                ✏️ {note}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Language Suggestions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 pt-5 border-t border-slate-100 text-xs">
        <div className="bg-indigo-50/60 p-4 rounded-[20px] border border-indigo-100">
          <span className="font-bold text-indigo-900 flex items-center gap-1.5 mb-2">
            <BookOpen className="w-4 h-4 text-indigo-600" /> Key Grammar Structures:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {topic.grammarRules.map((g, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white text-indigo-800 border border-indigo-200/80 rounded-lg font-mono font-medium"
              >
                {g.title}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50/60 p-4 rounded-[20px] border border-emerald-100">
          <span className="font-bold text-emerald-900 flex items-center gap-1.5 mb-2">
            <Tag className="w-4 h-4 text-emerald-600" /> Target Vocabulary:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {topic.vocabularyCategories.map((c, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white text-emerald-800 border border-emerald-200/80 rounded-lg font-medium"
              >
                {c.categoryName}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
