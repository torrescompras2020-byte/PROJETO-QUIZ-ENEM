import React from 'react';
import { X, GraduationCap, Code2, BookOpen, Layers } from 'lucide-react';
interface ProjectInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ProjectInfoModal: React.FC<ProjectInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Projeto de Faculdade ADS · Projeto Integrador</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Sobre o Projeto Acadêmico
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Plataforma Web Interativa de Quizzes para a Preparação para o ENEM
          </p>
        </div>

        <div className="space-y-5 text-sm text-slate-700">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Objetivo & Relevância Educacional</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O projeto foi desenvolvido para atender às necessidades de estudantes em fase de preparação para o
              Exame Nacional do Ensino Médio (ENEM). A plataforma proporciona uma experiência de estudo dinâmica,
              focada e sem atritos de cadastros ou barreiras de acesso, com ênfase na revisão prática por meio de
              gabaritos comentados.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Estrutura Pedagógica das Questões</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O banco de dados local contempla as quatro matrizes do ENEM:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li><strong>Linguagens, Códigos e suas Tecnologias:</strong> Variação linguística, funções da linguagem, literatura e coesão textual.</li>
              <li><strong>Matemática e suas Tecnologias:</strong> Razão e proporção, porcentagem, estatística (média/mediana), geometria espacial e funções.</li>
              <li><strong>Ciências Humanas e suas Tecnologias:</strong> Constituição Cidadã, mobilidade urbana, história do trabalho e ética filosófica.</li>
              <li><strong>Ciências da Natureza e suas Tecnologias:</strong> Cadeias tróficas e ecologia, potência elétrica, química ambiental e imunização.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Arquitetura de Front-End (ADS)</span>
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Tecnologia Base:</span>
                <span className="font-mono text-slate-600">React 19 + TypeScript + Tailwind CSS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Persistência:</span>
                <span className="font-mono text-slate-600">LocalStorage API (zero backend)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Acessibilidade:</span>
                <span className="font-mono text-slate-600">Atalhos de teclado, ajuste de fonte, contraste WCAG AA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Interatividade Sonora:</span>
                <span className="font-mono text-slate-600">Web Audio API nativa (sem arquivos pesados)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Curso de Análise e Desenvolvimento de Sistemas
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
