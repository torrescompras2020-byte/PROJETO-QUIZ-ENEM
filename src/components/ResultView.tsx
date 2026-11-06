import React, { useState, useEffect } from 'react';
import { RotateCcw, ListFilter, Home, CheckCircle2, XCircle, ChevronDown, ChevronUp, Award, BookCheck } from 'lucide-react';
import { Subject, Question, UserAnswerRecord } from '../types/quiz';
import { saveSubjectProgress } from '../utils/storage';
interface ResultViewProps {
  subject: Subject;
  questions: Question[];
  userAnswers: UserAnswerRecord[];
  onRestartQuiz: () => void;
  onChooseOtherSubject: () => void;
  onGoHome: () => void;
}
export const ResultView: React.FC<ResultViewProps> = ({
  subject,
  questions,
  userAnswers,
  onRestartQuiz,
  onChooseOtherSubject,
  onGoHome
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const totalQuestions = questions.length;
  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const errorCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  useEffect(() => {
    saveSubjectProgress(subject.id, correctCount, totalQuestions);
  }, [subject.id, correctCount, totalQuestions]);

  const getFeedbackMessage = () => {
    if (percentage >= 80) {
      return {
        title: 'Excelente Desempenho!',
        description: 'Você demonstrou excelente domínio das competências e habilidades exigidas pelo ENEM nesta área do conhecimento. Continue mantendo esse ritmo!',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
      };
    } else if (percentage >= 60) {
      return {
        title: 'Bom Aproveitamento!',
        description: 'Você está no caminho certo! Teve acertos consistentes, e revisar as explicações das questões que errou consolidará ainda mais sua nota no ENEM.',
        color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
      };
    } else {
      return {
        title: 'Continue Praticando!',
        description: 'A preparação para o ENEM é um processo gradual e contínuo. Revise os gabaritos comentados abaixo e refaça o teste para fixar os conceitos!',
        color: 'text-amber-700 bg-amber-50 border-amber-200'
      };
    }
  };

  const feedback = getFeedbackMessage();

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mb-2">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Quiz Finalizado · {subject.shortTitle}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Seu Desempenho no Módulo
          </h1>
        </div>

        <div className="py-2">
          <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight tabular-nums">
            {percentage}%
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Percentual Total de Aproveitamento
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 text-center">
            <span className="text-xs text-slate-500 block font-medium">Total</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
              {totalQuestions}
            </span>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 sm:p-4 text-center">
            <span className="text-xs text-emerald-700 block font-medium flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Acertos
            </span>
            <span className="text-xl sm:text-2xl font-bold text-emerald-700 tabular-nums">
              {correctCount}
            </span>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 sm:p-4 text-center">
            <span className="text-xs text-rose-700 block font-medium flex items-center justify-center gap-1">
              <XCircle className="w-3.5 h-3.5" /> Erros
            </span>
            <span className="text-xl sm:text-2xl font-bold text-rose-700 tabular-nums">
              {errorCount}
            </span>
          </div>
        </div>

        <div className={`p-4 sm:p-5 rounded-xl border text-left max-w-2xl mx-auto space-y-1.5 ${feedback.color}`}>
          <h3 className="font-bold text-base">{feedback.title}</h3>
          <p className="text-xs sm:text-sm leading-relaxed">{feedback.description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onRestartQuiz}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer este Quiz</span>
          </button>

          <button
            onClick={onChooseOtherSubject}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            <ListFilter className="w-4 h-4" />
            <span>Escolher Outra Matéria</span>
          </button>

          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Página Inicial</span>
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <BookCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-slate-900">
              Revisão Completa das Questões
            </h2>
          </div>
          <span className="text-xs text-slate-400">Clique para expandir o gabarito</span>
        </div>

        <div className="space-y-3">
          {questions.map((question, idx) => {
            const answer = userAnswers[idx];
            const isCorrect = answer?.isCorrect;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={question.id}
                className={`border rounded-xl transition-colors ${
                  isCorrect ? 'border-slate-200 hover:border-emerald-300' : 'border-slate-200 hover:border-rose-300'
                }`}
              >
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 text-white ${
                        isCorrect ? 'bg-emerald-600' : 'bg-rose-500'
                      }`}
                    >
                      {idx + 1}
                    </span>

                    <div>
                      <div className="text-xs text-slate-500">
                        {question.topic} · {question.difficulty}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 line-clamp-1">
                        {question.questionText}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-medium text-slate-600 hidden sm:inline">
                      Sua: <strong className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>{answer?.selectedOptionId}</strong> · Certa: <strong className="text-emerald-700">{question.correctOptionId}</strong>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-slate-100 space-y-3 mt-2 text-sm">
                    {question.contextText && (
                      <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-lg">
                        {question.contextText}
                      </p>
                    )}

                    <div className="space-y-1.5 pt-1">
                      {question.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-2.5 rounded-lg text-xs sm:text-sm flex items-start gap-2 ${
                            opt.id === question.correctOptionId
                              ? 'bg-emerald-50 text-emerald-950 font-medium border border-emerald-200'
                              : opt.id === answer?.selectedOptionId
                              ? 'bg-rose-50 text-rose-950 border border-rose-200'
                              : 'text-slate-600'
                          }`}
                        >
                          <span className="font-bold">{opt.id})</span>
                          <span>{opt.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="block text-slate-900 mb-1">Explicação Oficial:</strong>
                      {question.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
