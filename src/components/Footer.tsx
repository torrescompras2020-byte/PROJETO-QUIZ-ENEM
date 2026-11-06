import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ScreenState } from '../types/quiz';
interface FooterProps {
  onNavigate: (screen: ScreenState) => void;
  onOpenAbout: () => void;
  onOpenQr: () => void;
}
export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAbout, onOpenQr }) => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base">
                Quiz ENEM Interativo
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Plataforma Web Interativa de Quizzes para a Preparação para o ENEM.
              Projeto acadêmico desenvolvido no curso superior de Análise e Desenvolvimento de Sistemas (ADS).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => {
                onNavigate('subjects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Matérias do ENEM
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Sobre o Projeto ADS
            </button>
            <button
              onClick={onOpenQr}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Acesso via QR Code
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Faculdade de Tecnologia · Curso de Análise e Desenvolvimento de Sistemas (ADS)
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido para apoio e preparação de estudantes para o ENEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
