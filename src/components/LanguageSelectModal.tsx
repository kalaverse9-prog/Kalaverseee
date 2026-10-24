import React, { useState } from 'react';
import {
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Palette,
  X,
  Check,
  Award,
  Crown
} from 'lucide-react';
import {
  SupportedLanguage,
  LANGUAGE_OPTIONS,
  getTranslations
} from '../data/translations';
import kalaVerseLogo from '../assets/images/kalaverse_monogram_logo_1790837371119.jpg';
import { UserPlan } from '../types';
import {
  LotusMotif,
  PeacockMotif,
  PaisleyMotif,
  MandalaRosette,
  ToranBorder,
  VineCreeperBorder,
  OrnateCorner,
  MandalaWatermark
} from './CulturalMotifs';

interface LanguageAndPlanModalProps {
  isOpen: boolean;
  currentLanguage: SupportedLanguage;
  currentPlan: UserPlan;
  currentRole?: string;
  onPreviewLanguageChange?: (language: SupportedLanguage) => void;
  onSavePreferences: (language: SupportedLanguage, plan: UserPlan, role: string) => void;
  onClose?: () => void;
  userName?: string;
  isInitialOnboarding?: boolean;
}

export const LanguageSelectModal: React.FC<LanguageAndPlanModalProps> = ({
  isOpen,
  currentLanguage,
  currentPlan,
  currentRole = 'Art Enthusiast & Learner',
  onPreviewLanguageChange,
  onSavePreferences,
  onClose,
  userName = 'Cultural Explorer',
  isInitialOnboarding = false
}) => {
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>(currentLanguage);
  const [selectedPlan, setSelectedPlan] = useState<UserPlan>(currentPlan);
  const [selectedRole, setSelectedRole] = useState<string>(currentRole);
  const [activeTab, setActiveTab] = useState<'language' | 'plan'>('language');

  const handleSelectLang = (code: SupportedLanguage) => {
    setSelectedLang(code);
    onPreviewLanguageChange?.(code);
  };

  if (!isOpen) return null;

  const currentLangOption =
    LANGUAGE_OPTIONS.find((l) => l.code === selectedLang) || LANGUAGE_OPTIONS[0];
  const t = getTranslations(selectedLang);

  const handleConfirm = () => {
    onSavePreferences(selectedLang, selectedPlan, selectedRole);
    if (onClose) onClose();
  };

  return (
    <div
      id="onboarding-language-plan-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div
        id="onboarding-modal-container"
        className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border-4 border-[#F59E0B] overflow-hidden my-4 text-[#2D2D2D] flex flex-col max-h-[92vh] relative"
      >
        {/* Ornate Corner Accents */}
        <OrnateCorner position="top-left" color="#F59E0B" size={32} />
        <OrnateCorner position="top-right" color="#F59E0B" size={32} />
        <OrnateCorner position="bottom-left" color="#F59E0B" size={32} />
        <OrnateCorner position="bottom-right" color="#F59E0B" size={32} />

        {/* Auspicious Banner Header with Motifs */}
        <div className="bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#312E81] p-5 sm:p-7 text-[#FFF8E7] relative shrink-0">
          <div className="absolute top-0 left-0 right-0">
            <ToranBorder color="#F59E0B" accentColor="#E11D48" />
          </div>

          <div className="absolute -top-10 -right-10 text-white pointer-events-none">
            <MandalaWatermark size={200} opacity={0.15} />
          </div>

          <div className="relative z-10 flex items-start justify-between gap-4 pt-2">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] via-[#FBBF24] to-[#B45309] p-0.5 shadow-xl shrink-0 overflow-hidden ring-2 ring-[#F59E0B]/50">
                <img
                  src={kalaVerseLogo}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/kalaverse_logo.jpg';
                  }}
                  alt="KalaVerse Indian Heritage Monogram Logo"
                  className="w-full h-full object-cover rounded-[14px] bg-[#FFF8E7]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B] text-[#FEF08A] text-xs font-bold uppercase tracking-wider shadow-sm">
                  <LotusMotif size={16} color="#F59E0B" secondaryColor="#FB7185" />
                  <span>
                    {isInitialOnboarding
                      ? 'Welcome to KalaVerse • भाषा एवं खाता चयन'
                      : 'Language & Account Settings • भाषा व खाता विन्यास'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#FFF8E7] leading-tight flex items-center gap-2">
                  <span>{t.welcomeModalTitle}</span>
                  <PeacockMotif size={32} color="#38BDF8" accentColor="#34D399" />
                </h2>

                <p className="text-xs sm:text-sm text-stone-200 max-w-2xl leading-relaxed">
                  {isInitialOnboarding
                    ? 'Please select your preferred language and choose your account type (Personal or Business) before entering KalaVerse.'
                    : t.welcomeModalSubtitle}
                </p>
              </div>
            </div>

            {!isInitialOnboarding && onClose && (
              <button
                type="button"
                id="close-onboarding-modal-btn"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Pill Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/15">
            <button
              type="button"
              id="tab-select-language"
              onClick={() => setActiveTab('language')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all ${
                activeTab === 'language'
                  ? 'bg-[#F59E0B] text-[#1E1B4B] shadow-md ring-2 ring-white/50'
                  : 'bg-white/10 hover:bg-white/20 text-stone-200'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Globe className="w-4 h-4 shrink-0" />
                <span className="truncate">1. {t.chooseLanguagePrompt}</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-black/20 shrink-0 font-medium">
                {currentLangOption.icon} {currentLangOption.nativeName}
              </span>
            </button>

            <button
              type="button"
              id="tab-select-plan"
              onClick={() => setActiveTab('plan')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all ${
                activeTab === 'plan'
                  ? 'bg-[#F59E0B] text-[#1E1B4B] shadow-md ring-2 ring-white/50'
                  : 'bg-white/10 hover:bg-white/20 text-stone-200'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Award className="w-4 h-4 shrink-0" />
                <span className="truncate">2. Account: Personal vs Business</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-black/20 shrink-0 font-medium">
                {selectedPlan === 'business' ? '👑 Business (Artisan)' : '🌿 Personal (Free)'}
              </span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFBEB]/40 to-[#FFF8E7]">
          {/* TAB 1: LANGUAGE SELECTION */}
          {activeTab === 'language' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1E3A8A] flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#F59E0B]" />
                    <span>{t.chooseLanguagePrompt} (11 Indian Languages)</span>
                  </h3>
                  <p className="text-xs text-stone-600">
                    All application features, AI art mentoring, state folklore, and navigation will be presented in your chosen language.
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold shrink-0 self-start sm:self-auto shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Previewing: {currentLangOption.nativeName} ({currentLangOption.name})</span>
                </div>
              </div>

              {/* 11 Languages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {LANGUAGE_OPTIONS.map((lang) => {
                  const isSelected = selectedLang === lang.code;
                  return (
                    <div
                      key={lang.code}
                      id={`lang-option-${lang.code}`}
                      onClick={() => handleSelectLang(lang.code)}
                      className={`cursor-pointer rounded-2xl p-4 border-2 transition-all flex flex-col justify-between group relative overflow-hidden ${
                        isSelected
                          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-[#F59E0B] shadow-md ring-3 ring-[#F59E0B]/30 scale-[1.02]'
                          : 'bg-white border-stone-200 hover:border-[#1E3A8A]/40 hover:bg-stone-50 shadow-xs'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{lang.icon}</span>
                            <div>
                              <span className="font-display font-bold text-base text-[#1E3A8A] block">
                                {lang.nativeName}
                              </span>
                              <span className="text-[11px] text-stone-500 font-semibold">
                                {lang.name} • {lang.script}
                              </span>
                            </div>
                          </div>

                          {isSelected ? (
                            <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-[#1E1B4B] flex items-center justify-center shadow-sm">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-stone-300 group-hover:border-stone-400" />
                          )}
                        </div>

                        <div className="text-[11px] text-stone-600 font-medium">
                          📍 {lang.region}
                        </div>

                        <div className="text-[10px] text-[#B45309] bg-amber-100/70 border border-amber-200/80 px-2.5 py-0.5 rounded-md font-medium truncate flex items-center gap-1">
                          <span>🎨</span>
                          <span>{lang.sampleArtForm}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Live Language Greeting Preview Card */}
              <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1E293B] to-[#1E3A8A] text-white rounded-2xl p-5 border-2 border-[#F59E0B] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 text-white pointer-events-none">
                  <MandalaWatermark size={140} opacity={0.15} />
                </div>

                <div className="space-y-1 text-center sm:text-left z-10">
                  <div className="text-xs font-bold text-[#FEF08A] uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    <span>{t.previewCardTitle}</span>
                  </div>
                  <div className="text-lg font-display font-extrabold text-[#FFF8E7]">
                    "{currentLangOption.greeting}"
                  </div>
                  <div className="text-xs text-stone-200">
                    Selected: <strong>{currentLangOption.nativeName} ({currentLangOption.name})</strong> • Account: <strong>{selectedPlan === 'business' ? 'Business & Master Artisan' : 'Personal (Free)'}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 z-10 shrink-0">
                  <button
                    type="button"
                    id="goto-account-tier-btn"
                    onClick={() => setActiveTab('plan')}
                    className="px-5 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                  >
                    <span>Next: Choose Account (Personal / Business)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PLAN & ROLE SELECTION */}
          {activeTab === 'plan' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1E3A8A] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F59E0B]" />
                    <span>{t.choosePlanHeading}</span>
                  </h3>
                  <p className="text-xs text-stone-600">
                    {t.choosePlanSub}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold shrink-0 self-start sm:self-auto">
                  <Shield className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Fair-Trade Guaranteed</span>
                </div>
              </div>

              {/* Plan Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Personal Plan */}
                <div
                  id="onboarding-plan-personal"
                  onClick={() => {
                    setSelectedPlan('personal');
                    setSelectedRole('Art Enthusiast & Learner');
                  }}
                  className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex flex-col justify-between relative ${
                    selectedPlan === 'personal'
                      ? 'border-[#1E3A8A] bg-white ring-4 ring-[#1E3A8A]/15 shadow-lg scale-[1.01]'
                      : 'border-stone-200 bg-white hover:border-[#1E3A8A]/40 shadow-xs'
                  }`}
                >
                  {selectedPlan === 'personal' && (
                    <div className="absolute -top-3 right-4 bg-[#1E3A8A] text-[#FFF8E7] text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Check className="w-3 h-3" /> Selected Tier
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center font-bold">
                        <Palette className="w-5 h-5 text-[#1E3A8A]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1E3A8A]">
                          {t.personalAccountTitle || 'Personal Account'}
                        </h4>
                        <p className="text-xs text-stone-500">
                          {t.personalAccountSub || 'For Cultural Explorers, Students & Art Lovers'}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm font-extrabold text-[#1E3A8A] bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-200/60 inline-block">
                      {t.personalAccountBadge || '🌿 Free Lifetime Heritage Access'}
                    </div>

                    <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-100">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t.personalAccountFeat1 || 'Interactive 28 states live art atlas & craft trails'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t.personalAccountFeat2 || 'KalaYatri AI personal cultural travel assistant (RAG grounded)'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t.personalAccountFeat3 || 'KalaLens AI painting analysis & KalaSathi master guidance'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t.personalAccountFeat4 || 'Book verified KalaTour experiences with 85% direct artisan pay'}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Business / Master Artisan Plan */}
                <div
                  id="onboarding-plan-business"
                  onClick={() => {
                    setSelectedPlan('business');
                    setSelectedRole('Traditional Chitrakar / Master Artisan');
                  }}
                  className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex flex-col justify-between relative ${
                    selectedPlan === 'business'
                      ? 'border-[#F59E0B] bg-white ring-4 ring-[#F59E0B]/25 shadow-lg scale-[1.01]'
                      : 'border-stone-200 bg-white hover:border-[#F59E0B]/50 shadow-xs'
                  }`}
                >
                  {selectedPlan === 'business' && (
                    <div className="absolute -top-3 right-4 bg-[#F59E0B] text-[#1E1B4B] text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Check className="w-3 h-3" /> Selected Tier
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 text-[#B45309] flex items-center justify-center font-bold">
                        <Crown className="w-5 h-5 text-[#B45309]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1E3A8A]">
                          {t.businessAccountTitle || 'Business & Master Artisan'}
                        </h4>
                        <p className="text-xs text-stone-500">
                          {t.businessAccountSub || 'For Master Chitrakars, Folk Guilds & Cooperatives'}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm font-extrabold text-[#B45309] bg-amber-50/80 px-3 py-1.5 rounded-lg border border-amber-200/60 inline-block">
                      {t.businessAccountBadge || '👑 Certified Master Guild Tier'}
                    </div>

                    <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-100">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{t.businessAccountFeat1 || 'Official GI & Artisan identity verification badge'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{t.businessAccountFeat2 || 'Host live masterclasses & manage craft tour bookings'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{t.businessAccountFeat3 || 'Zero middlemen: 85% direct bank / UPI payout guaranteed (15% commission)'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{t.businessAccountFeat4 || 'List original handmade art in global artisan marketplace'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Live Summary & Enter App Trigger */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-700">
            <PaisleyMotif size={20} color="#D97706" />
            <span>
              Chosen: <strong>{currentLangOption.icon} {currentLangOption.nativeName}</strong> &bull;{' '}
              <strong>{selectedPlan === 'business' ? '👑 Business (Master Artisan)' : '🌿 Personal (Free)'}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {activeTab === 'language' && (
              <button
                type="button"
                id="onboarding-next-step-btn"
                onClick={() => setActiveTab('plan')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105"
              >
                <span>Choose Account (Personal / Business)</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </button>
            )}

            <button
              type="button"
              id="onboarding-confirm-btn"
              onClick={handleConfirm}
              className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#D97706] hover:opacity-95 text-[#1E1B4B] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg border-2 border-[#FEF08A] transition-all hover:scale-105"
            >
              <LotusMotif size={18} color="#1E1B4B" secondaryColor="#991B1B" />
              <span>
                Enter KalaVerse as {selectedPlan === 'business' ? 'Business' : 'Personal'} ({currentLangOption.nativeName})
              </span>
              <ArrowRight className="w-4 h-4 text-[#1E1B4B]" />
            </button>
          </div>
        </div>

        {/* Bottom Vine Creeper accent */}
        <div className="bg-stone-50 pb-1">
          <VineCreeperBorder color="#059669" flowerColor="#F59E0B" />
        </div>
      </div>
    </div>
  );
};
