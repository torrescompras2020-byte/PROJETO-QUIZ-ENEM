import React from 'react';
import { QrCode, Volume2, VolumeX, GraduationCap, Info } from 'lucide-react';
import { ScreenState } from '../types/quiz';
interface HeaderProps {
  currentScreen: ScreenState;
  onNavigate: (screen: ScreenState) => void;
  onOpenQr: () => void;
  onOpenAbout: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  fontSizeLevel: number;
  onChangeFontSize: (delta: number) => void;
}
export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenQr,
  onOpenAbout,
  soundEnabled,
  onToggleSound,
  fontSizeLevel,
  onChangeFontSize
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <GraduationCap className="w-5 h-5" />
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="text-left font-bold text-lg tracking-tight text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            Quiz ENEM <span className="font-medium text-slate-500 text-sm hidden sm:inline">| Projeto ADS</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-slate-900 ${
              currentScreen === 'home' ? 'text-indigo-600 font-semibold' : ''
            }`}
          >
            Início
          </button>
          <button
            onClick={() => onNavigate('subjects')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-slate-900 ${
              currentScreen === 'subjects' || currentScreen === 'quiz' || currentScreen === 'result'
                ? 'text-indigo-600 font-semibold'
                : ''
            }`}
          >
            Matérias do ENEM
          </button>
          <button
            onClick={onOpenAbout}
            className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Info className="w-4 h-4 text-slate-400" />
            <span>Sobre o Projeto</span>
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center border border-slate-200 rounded-lg p-0.5 text-xs text-slate-600 bg-slate-50">
            <button
              onClick={() => onChangeFontSize(-1)}
              disabled={fontSizeLevel <= -1}
              title="Diminuir texto"
              aria-label="Diminuir tamanho da fonte"
              className="px-2 py-1 rounded hover:bg-white hover:text-slate-900 transition-colors disabled:opacity-40 cursor-pointer"
            >
              A-
            </button>
            <span className="px-1 text-slate-300">|</span>
            <button
              onClick={() => onChangeFontSize(1)}
              disabled={fontSizeLevel >= 2}
              title="Aumentar texto"
              aria-label="Aumentar tamanho da fonte"
              className="px-2 py-1 rounded hover:bg-white hover:text-slate-900 transition-colors disabled:opacity-40 cursor-pointer font-bold"
            >
              A+
            </button>
          </div>

          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Desativar som de feedback' : 'Ativar som de feedback'}
            aria-label={soundEnabled ? 'Desativar som' : 'Ativar som'}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-indigo-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
          </button>

          <button
            onClick={onOpenQr}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Acessar pelo Celular via QR Code"
          >
            <QrCode className="w-4 h-4 text-slate-700" />
            <span className="hidden sm:inline">QR Code Celular</span>
          </button>

          {currentScreen === 'home' && (
            <button
              onClick={() => onNavigate('subjects')}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              Iniciar Quiz
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
