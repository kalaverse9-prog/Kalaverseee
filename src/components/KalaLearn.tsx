import React, { useState } from 'react';
import { INDIAN_LANGUAGES_TRACKS } from '../data/languagesData';
import { LanguageTrack, LanguageLesson, LanguageLessonQuestion } from '../types';
import {
  BookOpen,
  Volume2,
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  Flame,
  ArrowRight,
  RefreshCw,
  Trophy,
  Star,
  Layers,
  HelpCircle
} from 'lucide-react';

interface KalaLearnProps {
  onEarnXP?: (xp: number) => void;
}

export const KalaLearn: React.FC<KalaLearnProps> = ({ onEarnXP }) => {
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('hindi');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [lessonCompleted, setLessonCompleted] = useState<boolean>(false);
  const [xpEarnedTotal, setXpEarnedTotal] = useState<number>(0);
  const [streakDays, setStreakDays] = useState<number>(4);

  const languageTracks = Object.values(INDIAN_LANGUAGES_TRACKS);
  const currentTrack: LanguageTrack =
    INDIAN_LANGUAGES_TRACKS[selectedLanguageId] || languageTracks[0];

  const currentLesson: LanguageLesson | undefined = activeLessonId
    ? currentTrack.lessons.find((l) => l.id === activeLessonId)
    : undefined;

  const currentQuestion: LanguageLessonQuestion | undefined =
    currentLesson && currentLesson.questions[activeQuestionIndex];

  // Speech pronunciation handler
  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectOption = (option: string) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || !currentQuestion) return;
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (!currentLesson) return;
    if (activeQuestionIndex < currentLesson.questions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Completed lesson!
      setLessonCompleted(true);
      const earned = currentLesson.rewardXP || 50;
      setXpEarnedTotal((prev) => prev + earned);
      if (onEarnXP) {
        onEarnXP(earned);
      }
    }
  };

  const handleStartLesson = (lesson: LanguageLesson) => {
    setActiveLessonId(lesson.id);
    setActiveQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setLessonCompleted(false);
  };

  const handleExitLesson = () => {
    setActiveLessonId(null);
    setActiveQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setLessonCompleted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1E293B] to-[#1E3A8A] rounded-2xl p-6 sm:p-8 text-[#FFF8E7] shadow-xl border-2 border-[#F59E0B]/30 mb-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#A7F3D0] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Gamified State Language Learning
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold">
              कलाLearn (KalaLearn)
            </h1>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80 leading-relaxed">
              Master the regional languages of India to converse directly with traditional artisans, understand ancient scriptures, and unlock cultural lore.
            </p>
          </div>

          {/* Gamification Stats Widget */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shrink-0">
            <div className="flex items-center gap-2 pr-3 border-r border-white/20">
              <Flame className="w-5 h-5 text-[#F59E0B] animate-pulse" />
              <div>
                <div className="text-lg font-extrabold text-[#F59E0B]">
                  {streakDays} Days
                </div>
                <div className="text-[10px] text-white/70 uppercase font-semibold">
                  Active Streak
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pl-2">
              <Trophy className="w-5 h-5 text-[#10B981]" />
              <div>
                <div className="text-lg font-extrabold text-[#10B981]">
                  +{xpEarnedTotal} XP
                </div>
                <div className="text-[10px] text-white/70 uppercase font-semibold">
                  Session Points
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVE LESSON INTERFACE */}
      {currentLesson ? (
        <div className="bg-white rounded-2xl border-2 border-[#1E3A8A]/20 shadow-xl p-6 sm:p-10 space-y-8 animate-fadeIn max-w-4xl mx-auto">
          {lessonCompleted ? (
            /* Celebration Screen */
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-[#10B981]/20 text-[#047857] flex items-center justify-center mx-auto border-2 border-[#10B981]">
                <Trophy className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] bg-[#FFF8E7] px-3 py-1 rounded-full border border-[#F59E0B]/30">
                  Lesson Mastered!
                </span>
                <h2 className="text-3xl font-display font-bold text-[#1E3A8A] mt-3">
                  Shabash! Congratulations!
                </h2>
                <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto">
                  You successfully mastered{' '}
                  <strong className="text-[#1E3A8A]">{currentLesson.title}</strong> in{' '}
                  {currentTrack.language}.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 bg-[#FFF8E7] px-6 py-3 rounded-2xl border-2 border-[#F59E0B]">
                <Star className="w-6 h-6 text-[#F59E0B] fill-[#F59E0B]" />
                <div className="text-left">
                  <div className="text-xl font-black text-[#1E3A8A]">
                    +{currentLesson.rewardXP} XP Earned
                  </div>
                  <div className="text-xs text-[#D97706] font-semibold">
                    Streak Maintained! 🔥
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleExitLesson}
                  className="px-8 py-3.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-[#FFF8E7] font-bold text-sm shadow-md transition-all"
                >
                  Continue to Next Language Track
                </button>
              </div>
            </div>
          ) : (
            /* Active Question / Vocabulary Presentation */
            <div className="space-y-6">
              {/* Top Progress & Exit */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <button
                    type="button"
                    onClick={handleExitLesson}
                    className="text-xs font-bold text-stone-500 hover:text-[#1E3A8A] flex items-center gap-1"
                  >
                    ← Exit Lesson
                  </button>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mt-1">
                    {currentLesson.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-stone-600">
                    Question {activeQuestionIndex + 1} of {currentLesson.questions.length}
                  </span>
                  <div className="w-32 bg-stone-200 rounded-full h-2 mt-1 overflow-hidden">
                    <div
                      className="bg-[#10B981] h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          ((activeQuestionIndex + 1) / currentLesson.questions.length) * 100
                        }%`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Cultural Insight Box */}
              <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#F59E0B]/30 text-xs sm:text-sm text-[#2D2D2D] leading-relaxed">
                <strong className="text-[#1E3A8A] block mb-1">
                  🏛️ Cultural Insight:
                </strong>
                {currentLesson.culturalInsight}
              </div>

              {/* Vocabulary Preview Carousel */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  Lesson Key Vocabulary:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentLesson.vocabulary.map((vocab, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-base font-bold text-[#1E3A8A]">
                            {vocab.nativeWord}
                          </span>
                          <span className="text-xs font-semibold text-[#D97706]">
                            ({vocab.romanization})
                          </span>
                        </div>
                        <div className="text-xs text-stone-600 font-medium mt-0.5">
                          {vocab.englishMeaning}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => playPronunciation(vocab.nativeWord)}
                        title="Listen to native pronunciation"
                        className="p-2 rounded-lg bg-white hover:bg-[#F59E0B]/20 text-[#1E3A8A] border border-stone-300 transition-colors shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Quiz Question */}
              {currentQuestion && (
                <div className="bg-stone-50 rounded-2xl p-6 border-2 border-stone-200 space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-[#1E3A8A]/10 text-[#1E3A8A]">
                        {currentQuestion.type} Quiz
                      </span>
                      <h4 className="text-lg font-bold text-[#1E3A8A] mt-2">
                        {currentQuestion.prompt}
                      </h4>
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="space-y-2.5">
                    {currentQuestion.options?.map((option, oIdx) => {
                      const isSelected = selectedOption === option;
                      const isCorrect = option === currentQuestion.correctAnswer;

                      let btnStyle = 'bg-white border-stone-300 text-[#2D2D2D] hover:bg-stone-100';
                      if (isSelected) {
                        btnStyle = 'bg-[#1E3A8A] text-[#FFF8E7] border-[#1E3A8A] shadow';
                      }
                      if (isAnswerSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-600 text-white border-emerald-600 shadow';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-600 text-white border-rose-600 shadow';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          type="button"
                          disabled={isAnswerSubmitted}
                          onClick={() => handleSelectOption(option)}
                          className={`w-full p-3.5 rounded-xl border-2 text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {isAnswerSubmitted && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          )}
                          {isAnswerSubmitted && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback once submitted */}
                  {isAnswerSubmitted && (
                    <div
                      className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                        selectedOption === currentQuestion.correctAnswer
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                          : 'bg-rose-50 border border-rose-200 text-rose-900'
                      }`}
                    >
                      <strong className="block mb-1">
                        {selectedOption === currentQuestion.correctAnswer
                          ? '✓ Correct!'
                          : '✗ Not quite:'}
                      </strong>
                      {currentQuestion.explanation}
                    </div>
                  )}

                  {/* Submit / Next Action Bar */}
                  <div className="pt-3 border-t border-stone-200 flex justify-end">
                    {!isAnswerSubmitted ? (
                      <button
                        type="button"
                        disabled={!selectedOption}
                        onClick={handleSubmitAnswer}
                        className="px-6 py-2.5 rounded-xl bg-[#1E3A8A] text-[#FFF8E7] font-bold text-xs sm:text-sm disabled:opacity-40 hover:bg-[#1E3A8A]/90 transition-all shadow"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="px-6 py-2.5 rounded-xl bg-[#10B981] text-white font-bold text-xs sm:text-sm hover:bg-[#10B981]/90 transition-all shadow flex items-center gap-1.5"
                      >
                        <span>
                          {activeQuestionIndex < currentLesson.questions.length - 1
                            ? 'Next Question'
                            : 'Complete Lesson & Claim XP'}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Language Track Selection & Level Directory */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Language Tracks List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider mb-2">
              Select Regional Language:
            </h3>
            {languageTracks.map((trk) => (
              <div
                key={trk.id}
                onClick={() => setSelectedLanguageId(trk.id)}
                className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex items-center justify-between gap-3 ${
                  selectedLanguageId === trk.id
                    ? 'bg-[#FFF8E7] border-[#F59E0B] shadow-md'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{trk.flagEmoji}</span>
                  <div>
                    <h4 className="font-bold text-sm text-[#2D2D2D]">{trk.language}</h4>
                    <div className="text-[11px] text-stone-500">
                      {trk.lessons.length} Progressive Levels
                    </div>
                  </div>
                </div>
                <span className="text-lg font-bold text-[#1E3A8A] font-display">
                  {trk.nativeScript}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Lessons for Selected Track (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border-2 border-[#1E3A8A]/20 shadow-xl p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="border-b border-stone-200 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{currentTrack.flagEmoji}</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1E3A8A]">
                    {currentTrack.language}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed">
                  {currentTrack.description}
                </p>
                <div className="bg-[#FFF8E7] p-3 rounded-xl border border-[#F59E0B]/30 text-xs text-[#D97706] font-medium mt-2">
                  <strong>Artisan Tie-In:</strong> {currentTrack.culturalTieIn}
                </div>
              </div>

              {/* Levels & Lessons Accordion */}
              <div className="space-y-4">
                {currentTrack.lessons.map((lesson, idx) => (
                  <div
                    key={lesson.id}
                    className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3 hover:border-[#1E3A8A]/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="px-2.5 py-0.5 rounded bg-[#1E3A8A] text-[#FFF8E7] text-[10px] font-bold uppercase tracking-wider">
                          Level {lesson.levelNumber}
                        </span>
                        <h4 className="text-base font-bold text-[#1E3A8A] mt-1">
                          {lesson.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] text-xs font-bold flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-[#10B981]" /> +{lesson.rewardXP} XP
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {lesson.topic} • {lesson.vocabulary.length} core words & {lesson.questions.length} interactive questions.
                    </p>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleStartLesson(lesson)}
                        className="px-5 py-2 rounded-xl bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-[#FFF8E7] font-bold text-xs flex items-center gap-2 shadow transition-all"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Start Level {lesson.levelNumber} Lesson</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
