import React from 'react';
import { BookOpen, Calculator, Globe2, Atom, ArrowLeft, Play, Award } from 'lucide-react';
import { SUBJECTS } from '../data/quizData';
import { getSubjectProgress } from '../utils/storage';
import { SubjectId } from '../types/quiz';
interface SubjectSelectionProps {
  onSelectSubject: (subjectId: SubjectId) => void;
  onBack: () => void;
}
export const SubjectSelection: React.FC<SubjectSelectionProps> = ({ onSelectSubject, onBack }) => {
  const getIcon = (id: SubjectId) => {
    switch (id) {
      case 'linguagens':
        return <BookOpen className="w-6 h-6 text-indigo-600" />;
      case 'matematica':
        return <Calculator className="w-6 h-6 text-blue-600" />;
      case 'humanas':
        return <Globe2 className="w-6 h-6 text-amber-600" />;
      case 'natureza':
        return <Atom className="w-6 h-6 text-emerald-600" />;
    }
  };

  const getBorderHover = (id: SubjectId) => {
    switch (id) {
      case 'linguagens':
        return 'hover:border-indigo-400 group-hover:text-indigo-600';
      case 'matematica':
        return 'hover:border-blue-400 group-hover:text-blue-600';
      case 'humanas':
        return 'hover:border-amber-400 group-hover:text-amber-600';
      case 'natureza':
        return 'hover:border-emerald-400 group-hover:text-emerald-600';
    }
  };

  return (
    <div className="space-y-8 py-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </button>

        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          4 Áreas Disponíveis
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Selecione a Área do Conhecimento
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          Cada módulo contém perguntas de edições oficiais do ENEM com gabarito comentado passo a passo para reforçar
          seus pontos fortes e corrigir dúvidas conceituais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SUBJECTS.map((subject) => {
          const progress = getSubjectProgress(subject.id);
          const percent = progress && progress.totalAnswered > 0
            ? Math.round((progress.bestScore / progress.totalAnswered) * 100)
            : null;

          return (
            <div
              key={subject.id}
              className={`group bg-white border border-slate-200 ${getBorderHover(
                subject.id
              )} rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {getIcon(subject.id)}
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium text-slate-400">
                      6 Questões de Múltipla Escolha
                    </span>
                    {percent !== null && (
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>Melhor: {percent}%</span>
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 transition-colors">
                    {subject.title}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {subject.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {subject.description}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-400 mb-2">Tópicos abordados:</div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
                    {subject.topics.map((t, i) => (
                      <React.Fragment key={t}>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">{t}</span>
                        {i < subject.topics.length - 1 && <span className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {progress ? `Última nota: ${progress.lastScore}/${progress.totalAnswered}` : 'Ainda não realizado'}
                </span>

                <button
                  onClick={() => onSelectSubject(subject.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{progress ? 'Refazer / Praticar' : 'Iniciar Quiz'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
