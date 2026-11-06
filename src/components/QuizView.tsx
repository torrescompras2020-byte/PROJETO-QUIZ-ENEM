import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { Question, Subject, UserAnswerRecord } from '../types/quiz';
import { soundManager } from '../utils/sound';
interface QuizViewProps {
  subject: Subject;
  questions: Question[];
  onFinishQuiz: (userAnswers: UserAnswerRecord[]) => void;
  onExitQuiz: () => void;
}
export const QuizView: React.FC<QuizViewProps> = ({
  subject,
  questions,
  onFinishQuiz,
  onExitQuiz
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  useEffect(() => {
    setStartTime(Date.now());
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAnswered) {
        const key = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
          handleSelectOption(key as 'A' | 'B' | 'C' | 'D' | 'E');
        }
      } else if (e.key === 'Enter') {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, selectedOption, currentIndex]);

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (isAnswered) return;

    setSelectedOption(optionId);
    setIsAnswered(true);

    const isCorrect = optionId === currentQuestion.correctOptionId;
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));

    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const newAnswer: UserAnswerRecord = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
      isCorrect,
      timeSpentSeconds: timeSpent
    };

    setUserAnswers((prev) => [...prev, newAnswer]);
  };

  const handleNextQuestion = () => {
    if (!isAnswered) return;

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      soundManager.playFinish();
      onFinishQuiz(userAnswers);
    }
  };

  const isCorrectAnswer = selectedOption === currentQuestion.correctOptionId;

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-6 space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onExitQuiz}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sair do Quiz</span>
          </button>

          <div className="text-center">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              {subject.shortTitle}
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs sm:text-sm font-bold text-slate-700 tabular-nums">
              Questão {currentIndex + 1} de {totalQuestions}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(8, progressPercent)}%` }}
            />
          </div>

          <div className="flex items-center justify-between px-1">
            {questions.map((q, idx) => {
              const answered = userAnswers[idx];
              let dotClass = 'bg-slate-200 text-slate-400';
              if (idx === currentIndex) {
                dotClass = 'ring-2 ring-indigo-600 bg-white text-indigo-600 font-bold';
              } else if (answered) {
                dotClass = answered.isCorrect
                  ? 'bg-emerald-500 text-white'
                  : 'bg-rose-500 text-white';
              }

              return (
                <div
                  key={q.id}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all ${dotClass}`}
                  title={`Questão ${idx + 1}`}
                >
                  {idx + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">{currentQuestion.topic}</span>
            {currentQuestion.enemYear && (
              <>
                <span aria-hidden="true">·</span>
                <span>ENEM {currentQuestion.enemYear}</span>
              </>
            )}
          </div>
          <span className="text-slate-400 font-medium">Nível: {currentQuestion.difficulty}</span>
        </div>

        {currentQuestion.contextText && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 text-sm sm:text-base text-slate-700 italic leading-relaxed">
            {currentQuestion.contextText}
          </div>
        )}

        <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
          {currentQuestion.questionText}
        </h2>

        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.id === currentQuestion.correctOptionId;

            let optionStyle =
              'border-slate-200 bg-white hover:border-indigo-400 hover:bg-slate-50 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

            if (isAnswered) {
              if (isCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-medium ring-1 ring-emerald-500';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 font-medium';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                optionStyle = 'border-slate-200 bg-white text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswered}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${optionStyle}`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border ${badgeStyle}`}
                >
                  {option.id}
                </span>

                <div className="flex-1 text-sm sm:text-base pt-0.5 leading-relaxed">
                  {option.text}
                </div>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div
            className={`p-5 rounded-xl border space-y-3 animate-in fade-in duration-200 ${
              isCorrectAnswer
                ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                : 'bg-rose-50/90 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-base">
              {isCorrectAnswer ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Resposta Correta! Parabéns.</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>
                    Resposta Incorreta. A alternativa correta é a letra {currentQuestion.correctOptionId}.
                  </span>
                </>
              )}
            </div>

            <div className="pt-1 text-sm text-slate-700 leading-relaxed bg-white/70 p-3.5 rounded-lg border border-black/5">
              <span className="font-semibold block text-slate-900 mb-1">
                Gabarito Comentado:
              </span>
              {currentQuestion.explanation}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 active:scale-98 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>
                  {currentIndex < totalQuestions - 1 ? 'Próxima Pergunta' : 'Ver Resultado Final'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-center text-xs text-slate-400">
        Dica: Você também pode responder pressionando as teclas <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-600">A</kbd>, <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-600">B</kbd>, <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-600">C</kbd>, <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-600">D</kbd> ou <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-600">E</kbd> no teclado.
      </div>
    </div>
  );
};
