export interface Question {
  id: string;
  number: number;
  questionEn: string;
  questionVi: string;
  hintVi: string;
  sentenceStarter: string;
  exampleAnswer: string;
}

export interface QuestionSection {
  id: string;
  titleEn: string;
  titleVi: string;
  questions: Question[];
}

export interface GrammarRule {
  title: string;
  formula: string;
  explanationVi: string;
  examples: string[];
}

export interface VocabularyCategory {
  categoryName: string;
  items: {
    word: string;
    meaning: string;
    example: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'fill_blank';
  prompt: string;
  options?: string[];
  correctAnswer: string;
  explanationVi: string;
}

export interface SampleEssay {
  title: string;
  wordCount: number;
  content: string;
  highlightedGrammar: {
    text: string;
    rule: string;
  }[];
}

export interface Topic {
  id: string;
  number: number;
  titleEn: string;
  titleVi: string;
  minWords: number;
  descriptionVi: string;
  sections: QuestionSection[];
  grammarRules: GrammarRule[];
  vocabularyCategories: VocabularyCategory[];
  sampleEssay: SampleEssay;
  quizzes: QuizQuestion[];
  annotatedTeacherNotes?: string[];
}

export interface GrammarErrorDetail {
  original: string;
  correction: string;
  explanationVi: string;
}

export interface EvaluationResult {
  score: number; // 0 - 10
  wordCount: number;
  isWordCountPass: boolean;
  grammarScore: number; // 0 - 10
  vocabularyScore: number; // 0 - 10
  coherenceScore: number; // 0 - 10
  overallFeedbackVi: string;
  strengthsVi: string[];
  grammarErrors: GrammarErrorDetail[];
  vocabularySuggestions: string[];
  improvedEssay: string;
}

export interface DraftState {
  topicId: string;
  answers: Record<string, string>; // questionId -> answer
  fullEssay: string;
  lastUpdated: string;
}
