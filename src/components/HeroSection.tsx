import React from 'react';
import { Play, Sparkles, BookCheck, Smartphone, CheckCircle2 } from 'lucide-react';
import { SUBJECTS } from '../data/quizData';
interface HeroSectionProps {
  onStart: () => void;
  onOpenQr: () => void;
  onSelectSubject: (subjectId: string) => void;
}
export const HeroSection: React.FC<HeroSectionProps> = ({ onStart, onOpenQr, onSelectSubject }) => {
  return (
    <div className="space-y-16 py-8 md:py-12">
      <section className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase">
            <span>Projeto de Extensão Acadêmica</span>
            <span aria-hidden="true">·</span>
            <span>Análise e Desenvolvimento de Sistemas (ADS)</span>
            <span aria-hidden="true">·</span>
            <span>Preparação para o ENEM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            Plataforma Web Interativa de Quizzes para a Preparação para o ENEM
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Uma ferramenta educacional moderna, intuitiva e sem barreiras para apoiar a rotina de estudos de estudantes
            na preparação para o ENEM. Revise conteúdos essenciais das quatro grandes áreas do exame com feedback imediato
            e explicações didáticas em cada questão.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Começar Agora</span>
            </button>

            <button
              onClick={onOpenQr}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-slate-600" />
              <span>Abrir no Celular por QR Code</span>
            </button>
          </div>

          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Gabaritos comentados questão por questão</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Front-end: sem login ou cadastros</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Interface adaptada para leitura fácil e acessível</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Áreas do Conhecimento
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Escolha uma matéria para treinar
            </h2>
          </div>
          <button
            onClick={onStart}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer flex items-center gap-1"
          >
            Ver todas as matérias &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUBJECTS.map((subject, idx) => (
            <div
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className="group bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md rounded-xl p-5 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-400">
                  Área 0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  {subject.shortTitle}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {subject.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-indigo-600">
                <span>6 Questões Verificadas</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Contexto do Projeto Integrador ADS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Por que uma plataforma interativa focada no ENEM?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A preparação para o ENEM exige fixação contínua de conteúdos e desenvolvimento de agilidade na resolução
            de problemas. Nossa plataforma foi concebida para oferecer sessões objetivas de aprendizagem ativa,
            proporcionando revisão prática das competências cobradas no exame nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Feedback Formativo Imediato</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O estudante não precisa esperar o final da prova para descobrir a lógica da resposta. Cada alternativa
              tem sua justificativa clara e desmistificada.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              <BookCheck className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Alinhado à Matriz de Habilidades</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Questões selecionadas com enunciados contextualizados e interpretação de situações-problema reais,
              seguindo os parâmetros do INEP/MEC.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              <Smartphone className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Acessibilidade & Baixo Consumo</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Desenvolvida em SPA front-end leve, consome mínima quantidade de dados móveis e funciona com máxima fluidez
              em smartphones básicos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
