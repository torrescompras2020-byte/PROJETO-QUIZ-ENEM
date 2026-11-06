export type SubjectId = 'linguagens' | 'matematica' | 'humanas' | 'natureza';
export interface Option {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}
export interface Question {
  id: string;
  subjectId: SubjectId;
  subjectName: string;
  topic: string;
  enemYear?: number;
  contextText?: string;
  questionText: string;
  options: Option[];
  correctOptionId: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}
export interface Subject {
  id: SubjectId;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  accentColor: string;
  iconName: 'book' | 'calculator' | 'globe' | 'atom';
  topics: string[];
}
export interface UserAnswerRecord {
  questionId: string;
  selectedOptionId: 'A' | 'B' | 'C' | 'D' | 'E';
  isCorrect: boolean;
  timeSpentSeconds: number;
}
export interface SubjectProgress {
  lastScore: number;
  bestScore: number;
  totalAnswered: number;
  lastPlayedAt: string;
}
export type ScreenState = 'home' | 'subjects' | 'quiz' | 'result';
