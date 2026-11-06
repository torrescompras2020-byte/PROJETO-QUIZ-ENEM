import { SubjectProgress } from '../types/quiz';
const STORAGE_KEY_PREFIX = 'enem_quiz_ads_';
export function getSubjectProgress(subjectId: string): SubjectProgress | null {
  try {
    const data = localStorage.getItem(`${STORAGE_KEY_PREFIX}${subjectId}`);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}
export function saveSubjectProgress(subjectId: string, score: number, total: number): void {
  try {
    const existing = getSubjectProgress(subjectId);
    const newBest = existing ? Math.max(existing.bestScore, score) : score;
    const progress: SubjectProgress = {
      lastScore: score,
      bestScore: newBest,
      totalAnswered: total,
      lastPlayedAt: new Date().toISOString()
    };
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${subjectId}`, JSON.stringify(progress));
  } catch {}
}
export function clearAllProgress(): void {
  try {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith(STORAGE_KEY_PREFIX));
    keys.forEach((k) => localStorage.removeItem(k));
  } catch {}
}
