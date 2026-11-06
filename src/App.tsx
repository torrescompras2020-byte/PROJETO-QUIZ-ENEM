import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SubjectSelection } from './components/SubjectSelection';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { QRCodeModal } from './components/QRCodeModal';
import { ProjectInfoModal } from './components/ProjectInfoModal';
import { Footer } from './components/Footer';
import { ScreenState, SubjectId, UserAnswerRecord, Question } from './types/quiz';
import { getSubjectById, getQuestionsBySubject } from './data/quizData';
import { soundManager } from './utils/sound';
import { fetchQuestoesDoBackend } from './services/api';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('home');
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.enabled = next;
  };

  const handleChangeFontSize = (delta: number) => {
    setFontSizeLevel((prev) => {
      const next = prev + delta;
      return Math.max(-1, Math.min(2, next));
    });
  };

  const handleSelectSubject = async (subjectId: string) => {
    const sId = subjectId as SubjectId;
    setActiveSubjectId(sId);
    setUserAnswers([]);
    
    // Tenta carregar da API do Laravel; se falhar/estiver desligado, usa as questões locais
    const apiQuestions = await fetchQuestoesDoBackend(sId);
    if (apiQuestions.length > 0) {
      setActiveQuestions(apiQuestions);
    } else {
      setActiveQuestions(getQuestionsBySubject(sId));
    }

    setScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (answers: UserAnswerRecord[]) => {
    setUserAnswers(answers);
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartQuiz = () => {
    setUserAnswers([]);
    setScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChooseOtherSubject = () => {
    setUserAnswers([]);
    setActiveSubjectId(null);
    setScreen('subjects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setUserAnswers([]);
    setActiveSubjectId(null);
    setScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitQuiz = () => {
    if (confirm('Deseja realmente sair deste quiz? O progresso da tentativa atual não será salvo.')) {
      handleChooseOtherSubject();
    }
  };

  const activeSubject = activeSubjectId ? getSubjectById(activeSubjectId) : null;

  const getFontSizeClass = () => {
    switch (fontSizeLevel) {
      case -1: return 'text-sm';
      case 1: return 'text-[1.05rem]';
      case 2: return 'text-[1.12rem]';
      default: return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${getFontSizeClass()}`}>
      <Header
        currentScreen={screen}
        onNavigate={(target) => {
          if (screen === 'quiz') {
            if (confirm('Deseja interromper o quiz e mudar de tela?')) {
              setScreen(target);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          } else {
            setScreen(target);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenQr={() => setIsQrModalOpen(true)}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSize={handleChangeFontSize}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {screen === 'home' && (
          <HeroSection
            onStart={() => {
              setScreen('subjects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQr={() => setIsQrModalOpen(true)}
            onSelectSubject={handleSelectSubject}
          />
        )}

        {screen === 'subjects' && (
          <SubjectSelection
            onSelectSubject={handleSelectSubject}
            onBack={() => {
              setScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {screen === 'quiz' && activeSubject && (
          <QuizView
            subject={activeSubject}
            questions={activeQuestions}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={handleExitQuiz}
          />
        )}

        {screen === 'result' && activeSubject && (
          <ResultView
            subject={activeSubject}
            questions={activeQuestions}
            userAnswers={userAnswers}
            onRestartQuiz={handleRestartQuiz}
            onChooseOtherSubject={handleChooseOtherSubject}
            onGoHome={handleGoHome}
          />
        )}
      </main>

      <Footer
        onNavigate={(target) => {
          setScreen(target);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onOpenQr={() => setIsQrModalOpen(true)}
      />

      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      <ProjectInfoModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
}
