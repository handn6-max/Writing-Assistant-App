import React, { useState, useEffect } from 'react';
import { TOPICS } from './data/topics';
import { Topic, EvaluationResult } from './types';
import { Navbar } from './components/Navbar';
import { TopicHeader } from './components/TopicHeader';
import { GuidedQuestionBuilder } from './components/GuidedQuestionBuilder';
import { EssayEditor } from './components/EssayEditor';
import { GrammarVocabTab } from './components/GrammarVocabTab';
import { SampleEssayModal } from './components/SampleEssayModal';
import { QuizPractice } from './components/QuizPractice';
import { EvaluationModal } from './components/EvaluationModal';
import { AiMentorDrawer } from './components/AiMentorDrawer';

const STORAGE_KEY_ANSWERS = 'eng_writing_21_answers_v1';
const STORAGE_KEY_ESSAYS = 'eng_writing_21_essays_v1';

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('topic-1');
  const [activeTab, setActiveTab] = useState<'guided' | 'editor' | 'grammar_vocab' | 'sample' | 'quiz'>(
    'guided'
  );

  // Persistence State
  const [topicAnswers, setTopicAnswers] = useState<Record<string, Record<string, string>>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [topicEssays, setTopicEssays] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ESSAYS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // AI Evaluation & Assistant State
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);
  const [isMentorChatOpen, setIsMentorChatOpen] = useState<boolean>(false);

  // Current selected topic object
  const currentTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];
  const currentAnswers = topicAnswers[selectedTopicId] || {};
  const currentFullEssay = topicEssays[selectedTopicId] || '';

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(topicAnswers));
    } catch (e) {
      console.error('Failed to save answers', e);
    }
  }, [topicAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ESSAYS, JSON.stringify(topicEssays));
    } catch (e) {
      console.error('Failed to save essays', e);
    }
  }, [topicEssays]);

  // Handle guided question answer change
  const handleAnswerChange = (questionId: string, value: string) => {
    setTopicAnswers((prev) => ({
      ...prev,
      [selectedTopicId]: {
        ...(prev[selectedTopicId] || {}),
        [questionId]: value,
      },
    }));
  };

  // Combine guided question answers into a full paragraph essay
  const handleCombineAnswersToFullEssay = () => {
    const questionsList = currentTopic.sections.flatMap((s) => s.questions);
    const compiledSentences: string[] = [];

    questionsList.forEach((q) => {
      const ans = currentAnswers[q.id]?.trim();
      if (ans) {
        // Ensure proper punctuation
        let sentence = ans;
        if (!/[.!?]$/.test(sentence)) {
          sentence += '.';
        }
        // Capitalize first letter
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        compiledSentences.push(sentence);
      }
    });

    const combinedText = compiledSentences.join(' ');
    setTopicEssays((prev) => ({
      ...prev,
      [selectedTopicId]: combinedText,
    }));

    setActiveTab('editor');
  };

  // Handle full essay direct edits
  const handleEssayChange = (newText: string) => {
    setTopicEssays((prev) => ({
      ...prev,
      [selectedTopicId]: newText,
    }));
  };

  // Calculate live word count
  const wordCount = currentFullEssay
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  // AI Evaluation handler
  const handleEvaluateEssay = async () => {
    if (!currentFullEssay.trim()) {
      alert('Vui lòng nhập hoặc hoàn thành bài viết trước khi chấm với AI.');
      return;
    }

    setIsEvaluating(true);
    try {
      const response = await fetch('/api/gemini/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicTitle: currentTopic.titleEn,
          topicMinWords: currentTopic.minWords,
          essayText: currentFullEssay,
          grammarRules: currentTopic.grammarRules,
          teacherNotes: currentTopic.annotatedTeacherNotes,
        }),
      });

      if (!response.ok) {
        throw new Error('Chấm bài thất bại, vui lòng kiểm tra kết nối.');
      }

      const data: EvaluationResult = await response.json();
      setEvaluationResult(data);
    } catch (err: any) {
      alert(err.message || 'Có lỗi xảy ra khi chấm bài.');
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        selectedTopicId={selectedTopicId}
        onSelectTopic={(id) => {
          setSelectedTopicId(id);
          setEvaluationResult(null);
        }}
        wordCount={wordCount}
        minWords={currentTopic.minWords}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenMentorChat={() => setIsMentorChatOpen(true)}
        onEvaluate={handleEvaluateEssay}
        isEvaluating={isEvaluating}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Topic Header & Requirement Banner */}
        <TopicHeader topic={currentTopic} />

        {/* Dynamic Tab Views */}
        {activeTab === 'guided' && (
          <GuidedQuestionBuilder
            topic={currentTopic}
            answers={currentAnswers}
            onAnswerChange={handleAnswerChange}
            onCombineToFullEssay={handleCombineAnswersToFullEssay}
          />
        )}

        {activeTab === 'editor' && (
          <EssayEditor
            topic={currentTopic}
            fullEssay={currentFullEssay}
            onEssayChange={handleEssayChange}
            onEvaluate={handleEvaluateEssay}
            isEvaluating={isEvaluating}
          />
        )}

        {activeTab === 'grammar_vocab' && <GrammarVocabTab topic={currentTopic} />}

        {activeTab === 'sample' && (
          <SampleEssayModal
            topic={currentTopic}
            onApplySample={(sampleText) => {
              handleEssayChange(sampleText);
              setActiveTab('editor');
            }}
          />
        )}

        {activeTab === 'quiz' && <QuizPractice topic={currentTopic} />}
      </main>

      {/* AI Evaluation Modal Result */}
      {evaluationResult && (
        <EvaluationModal
          result={evaluationResult}
          onClose={() => setEvaluationResult(null)}
          onApplyImprovedEssay={(improvedText) => {
            handleEssayChange(improvedText);
            setActiveTab('editor');
          }}
        />
      )}

      {/* AI Mentor Chat Drawer */}
      <AiMentorDrawer
        isOpen={isMentorChatOpen}
        onClose={() => setIsMentorChatOpen(false)}
        topicTitle={currentTopic.titleEn}
        currentEssay={currentFullEssay}
      />

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-slate-200 bg-white text-slate-500 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-semibold text-slate-700">
            Ứng Dụng Hỗ Trợ Sinh Viên Cao Đẳng Viết Bài Luận Tiếng Anh Level 2.1 (A1 - A2)
          </p>
          <p className="mt-1 text-slate-400">
            Bám sát 4 chủ đề thi chuẩn Curriculum • Tích hợp Chấm bài AI với Gemini API server-side
          </p>
        </div>
      </footer>
    </div>
  );
}
