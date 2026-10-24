import React from 'react';
import { AppSection, UserProfile } from '../types';
import {
  Sparkles,
  MapPin,
  Eye,
  MessageSquare,
  Compass,
  GraduationCap,
  Store,
  Video,
  Users,
  Shield,
  Award,
  ArrowRight,
  Palette,
  Heart,
  Flame,
  CheckCircle2,
  Star,
  Layers,
  ChevronRight,
  Globe,
  Phone,
  Mail,
  Instagram
} from 'lucide-react';
import {
  SupportedLanguage,
  LANGUAGE_OPTIONS,
  TRANSLATIONS
} from '../data/translations';

interface HomePageProps {
  onNavigate: (section: AppSection) => void;
  onOpenPlanModal: () => void;
  onOpenPrivacyModal: () => void;
  onOpenLanguageModal?: () => void;
  onOpenContactModal?: () => void;
  currentUser: UserProfile;
  language: SupportedLanguage;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPlanModal,
  onOpenPrivacyModal,
  onOpenLanguageModal,
  onOpenContactModal,
  currentUser,
  language
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const currentLangObj =
    LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const corePortals = [
    {
      id: 'kalakaar-lens',
      title: t.kalalens,
      badge: t.portalLensBadge,
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: t.portalLensDesc,
      icon: Eye,
      color: 'from-emerald-600 to-teal-700',
      bgGlow: 'bg-emerald-50 hover:bg-emerald-100/70 border-emerald-300',
      actionText: t.tryKalaLensBtn,
      section: 'kalakaar-lens' as AppSection
    },
    {
      id: 'map',
      title: t.atlasMap,
      badge: t.portalMapBadge,
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description: t.portalMapDesc,
      icon: MapPin,
      color: 'from-amber-600 to-orange-700',
      bgGlow: 'bg-amber-50 hover:bg-amber-100/70 border-amber-300',
      actionText: t.exploreMapBtn,
      section: 'map' as AppSection
    },
    {
      id: 'kalakaar-sathi',
      title: t.kalasathi,
      badge: t.portalSathiBadge,
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      description: t.portalSathiDesc,
      icon: MessageSquare,
      color: 'from-blue-600 to-indigo-800',
      bgGlow: 'bg-blue-50 hover:bg-blue-100/70 border-blue-300',
      actionText: t.askKalaSathiBtn,
      section: 'kalakaar-sathi' as AppSection
    },
    {
      id: 'kalatour',
      title: t.craftTrails,
      badge: t.portalTourBadge,
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
      description: t.portalTourDesc,
      icon: Compass,
      color: 'from-rose-600 to-pink-700',
      bgGlow: 'bg-rose-50 hover:bg-rose-100/70 border-rose-300',
      actionText: t.craftTrails,
      section: 'kalatour' as AppSection
    },
    {
      id: 'kalakaar-marketplace',
      title: t.marketplace,
      badge: t.portalMktBadge,
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description: t.portalMktDesc,
      icon: Store,
      color: 'from-amber-500 to-yellow-600',
      bgGlow: 'bg-amber-50 hover:bg-amber-100/70 border-amber-300',
      actionText: t.marketplace,
      section: 'kalakaar-marketplace' as AppSection
    },
    {
      id: 'kalakaar-workshops',
      title: t.workshops,
      badge: t.portalWsBadge,
      badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      description: t.portalWsDesc,
      icon: Video,
      color: 'from-cyan-600 to-blue-700',
      bgGlow: 'bg-cyan-50 hover:bg-cyan-100/70 border-cyan-300',
      actionText: t.workshops,
      section: 'kalakaar-workshops' as AppSection
    },
    {
      id: 'kalakaar-community',
      title: t.community,
      badge: t.portalCommBadge,
      badgeColor: 'bg-pink-100 text-pink-900 border-pink-300',
      description: t.portalCommDesc,
      icon: Users,
      color: 'from-pink-600 to-rose-700',
      bgGlow: 'bg-pink-50 hover:bg-pink-100/70 border-pink-300',
      actionText: t.community,
      section: 'kalakaar-community' as AppSection
    }
  ];

  const featuredArtForms = [
    {
      name: t.topicMadhubaniName,
      origin: t.topicMadhubaniOrigin,
      motif: t.topicMadhubaniMotif,
      accentColor: 'from-amber-500 to-red-600',
      description: t.topicMadhubaniDesc,
      imageUrl: '/assets/states/bihar.jpg'
    },
    {
      name: t.topicWarliName,
      origin: t.topicWarliOrigin,
      motif: t.topicWarliMotif,
      accentColor: 'from-red-800 to-amber-900',
      description: t.topicWarliDesc,
      imageUrl: '/assets/states/maharashtra.jpg'
    },
    {
      name: t.topicPichwaiName,
      origin: t.topicPichwaiOrigin,
      motif: t.topicPichwaiMotif,
      accentColor: 'from-blue-700 to-indigo-900',
      description: t.topicPichwaiDesc,
      imageUrl: '/assets/states/rajasthan.jpg'
    },
    {
      name: t.topicKalamkariName,
      origin: t.topicKalamkariOrigin,
      motif: t.topicKalamkariMotif,
      accentColor: 'from-emerald-700 to-teal-900',
      description: t.topicKalamkariDesc,
      imageUrl: '/assets/states/andhra_pradesh.jpg'
    },
    {
      name: t.topicPattachitraName,
      origin: t.topicPattachitraOrigin,
      motif: t.topicPattachitraMotif,
      accentColor: 'from-orange-600 to-red-700',
      description: t.topicPattachitraDesc,
      imageUrl: '/assets/states/odisha.jpg'
    },
    {
      name: t.topicTanjoreName,
      origin: t.topicTanjoreOrigin,
      motif: t.topicTanjoreMotif,
      accentColor: 'from-yellow-600 to-amber-700',
      description: t.topicTanjoreDesc,
      imageUrl: '/assets/states/tamil_nadu.jpg'
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Vibrant Hero Section with Indian Motif Patterns */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E293B] to-[#0F172A] text-[#FFF8E7] py-16 sm:py-24 border-b-4 border-[#F59E0B] shadow-2xl">
        {/* Auspicious Background Glows */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Auspicious Badges & Language Selector Indicator */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2">
              {onOpenLanguageModal && (
                <button
                  type="button"
                  onClick={onOpenLanguageModal}
                  className="px-3.5 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-[#FFF8E7] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm group"
                >
                  <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Previewing in: <strong>{currentLangObj.nativeName} ({currentLangObj.name})</strong></span>
                  <span className="text-[#F59E0B] underline text-[11px] ml-1">Change</span>
                </button>
              )}

              <span className="px-3.5 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> {t.heroBadge}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#A7F3D0] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Shield className="w-3.5 h-3.5" /> {t.heroVerifiedBadge}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-stone-200 text-xs font-semibold">
                {t.currentPlan}: <strong className="text-[#F59E0B] uppercase">{currentUser.plan}</strong>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#FDE68A] to-[#F59E0B] leading-tight">
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#FFF8E7]/85 max-w-3xl mx-auto font-sans leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                id="hero-kalalens-btn"
                type="button"
                onClick={() => onNavigate('kalakaar-lens')}
                className="px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2D2D] font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5 text-[#2D2D2D]" />
                <span>{t.tryKalaLensBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-map-btn"
                type="button"
                onClick={() => onNavigate('map')}
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-[#FFF8E7] border border-white/30 font-bold text-sm sm:text-base flex items-center gap-2 backdrop-blur-sm transition-all"
              >
                <MapPin className="w-5 h-5 text-[#F59E0B]" />
                <span>{t.exploreMapBtn}</span>
              </button>

              <button
                id="hero-kalasathi-btn"
                type="button"
                onClick={() => onNavigate('kalakaar-sathi')}
                className="px-5 py-3.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1E3A8A]/80 text-[#FFF8E7] border border-[#F59E0B]/50 font-bold text-sm sm:text-base flex items-center gap-2 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                <span>{t.askKalaSathiBtn}</span>
              </button>
            </div>

            {/* Live Metrics Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-3xl mx-auto border-t border-white/10">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                <div className="text-2xl font-extrabold text-[#F59E0B]">28 + 8</div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider">{t.metricsStates}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                <div className="text-2xl font-extrabold text-[#10B981]">35+</div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider">{t.metricsTraditions}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                <div className="text-2xl font-extrabold text-[#38BDF8]">8</div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider">{t.metricsLanguages}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                <div className="text-2xl font-extrabold text-[#EC4899]">85%</div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider">{t.metricsPayout}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core KalaVerse Portals Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-stone-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#B45309] text-xs font-bold uppercase tracking-wider mb-2">
              <Palette className="w-3.5 h-3.5" /> {t.portalsHeading}
            </div>
            <h2 className="text-3xl font-display font-extrabold text-[#1E3A8A]">
              {t.portalsHeading}
            </h2>
            <p className="text-sm text-[#2D2D2D]/75 mt-1">
              {t.portalsSubtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenPlanModal}
            className="px-4 py-2 rounded-xl bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-[#FFF8E7] text-xs font-bold flex items-center gap-2 transition-all shrink-0 self-start sm:self-auto shadow-sm"
          >
            <span>{t.currentPlan}: {currentUser.plan === 'business' ? '👑 Master Artisan' : '🌿 Personal'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePortals.map((portal) => {
            const Icon = portal.icon;
            return (
              <div
                key={portal.id}
                id={`portal-card-${portal.id}`}
                onClick={() => onNavigate(portal.section)}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 ${portal.bgGlow}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${portal.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${portal.badgeColor}`}>
                      {portal.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#1E3A8A] group-hover:text-[#D97706] transition-colors mb-2">
                    {portal.title}
                  </h3>

                  <p className="text-xs text-[#2D2D2D]/80 leading-relaxed">
                    {portal.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-black/5 mt-4 flex items-center justify-between text-xs font-bold text-[#1E3A8A] group-hover:text-[#D97706]">
                  <span>{portal.actionText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Spotlight: KalaLens Computer Vision with Live Q&A */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E3A8A] rounded-3xl p-8 sm:p-12 text-[#FFF8E7] shadow-2xl border-4 border-[#F59E0B]/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#A7F3D0] text-xs font-bold uppercase tracking-wider">
                <Eye className="w-4 h-4" /> {t.spotlightBadge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFF8E7] leading-tight">
                {t.spotlightTitle}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {t.spotlightSubtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-[#FDE68A]">{t.spotlightMotifTitle}</div>
                    <div className="text-[11px] text-stone-300">{t.spotlightMotifDesc}</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-[#FDE68A]">{t.spotlightQATitle}</div>
                    <div className="text-[11px] text-stone-300">{t.spotlightQADesc}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('kalakaar-lens')}
                  className="px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2D2D] font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
                >
                  <Eye className="w-5 h-5" />
                  <span>{t.spotlightBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/15 backdrop-blur-md space-y-4">
              {/* Authentic Mithila Masterpiece Image Display */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-amber-400/40 shadow-inner group">
                <img
                  src="/assets/states/bihar.jpg"
                  alt="Mithila Madhubani Authentic Masterpiece"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-amber-400/50 text-[10px] text-[#FEF08A] font-extrabold flex items-center gap-1 shadow">
                  <Award className="w-3 h-3 text-[#FEF08A]" />
                  <span>GI Certified Mithila Painting</span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs font-bold text-[#FEF08A]">Mithila Matsya & Lotus Flora</div>
                    <div className="text-[10px] text-stone-300">Jitwarpur Atelier • Bihar</div>
                  </div>
                  <span className="bg-[#10B981] text-[#0F172A] px-2.5 py-0.5 rounded-full font-extrabold text-[11px]">
                    {t.spotlightScoreMasterGrade}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold border-b border-white/10 pb-2">
                <span className="text-[#F59E0B] flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> {t.spotlightReportTitle}
                </span>
                <span className="text-[11px] text-stone-300">
                  AI Authentic Linework Analysis
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-stone-300 mb-1">
                    <span>{t.spotlightLineworkLabel}</span>
                    <span className="text-[#F59E0B]">9.0/10</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#F59E0B] h-2 rounded-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-stone-300 mb-1">
                    <span>{t.spotlightColorLabel}</span>
                    <span className="text-[#10B981]">9.4/10</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#10B981] h-2 rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-stone-300 mb-1">
                    <span>{t.spotlightMotifLabel}</span>
                    <span className="text-[#38BDF8]">9.1/10</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#38BDF8] h-2 rounded-full w-[91%]" />
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-xs text-stone-200">
                <strong className="text-[#FDE68A] block mb-0.5">💬 {t.spotlightQAExampleTitle}</strong>
                {t.spotlightQAExampleQuestion} <br />
                <span className="text-emerald-300 font-medium">→ {t.spotlightQAExampleAnswer}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Iconic Art Traditions Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" /> {t.featuredTraditionsTitle}
          </div>
          <h2 className="text-3xl font-display font-extrabold text-[#1E3A8A]">
            {t.featuredTraditionsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2D2D]/70">
            {t.featuredTraditionsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtForms.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border-2 border-stone-200 hover:border-[#F59E0B] shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Artwork Master Image Display */}
                {art.imageUrl && (
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 relative shadow-inner bg-stone-900 border border-stone-200">
                    <img
                      src={art.imageUrl}
                      alt={art.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-bold">
                      <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[#FEF08A]">
                        {art.origin}
                      </span>
                      <span className="bg-[#1E3A8A]/80 backdrop-blur-xs px-2 py-0.5 rounded text-white text-[10px]">
                        GI Certified
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1E3A8A]/10 text-[#1E3A8A]">
                    {art.origin}
                  </span>
                  <span className="text-[11px] font-semibold text-[#D97706]">
                    {t.topicGITagBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#1E3A8A]">
                  {art.name}
                </h3>

                <div className="text-xs font-semibold text-[#D97706] mb-2">
                  {t.topicKeyMotifsLabel} {art.motif}
                </div>

                <p className="text-xs text-[#2D2D2D]/75 leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate('map')}
                  className="text-xs font-bold text-[#1E3A8A] hover:text-[#D97706] flex items-center gap-1"
                >
                  <span>{t.topicLearnInMapBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('kalakaar-sathi')}
                  className="text-xs font-bold text-[#D97706] hover:underline"
                >
                  {t.topicConsultAIBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan Banner & Artisan Guild Empowerment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-[#FFF8E7] via-amber-50 to-[#FFF8E7] rounded-3xl p-8 sm:p-10 border-2 border-[#F59E0B] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" /> {t.fairTradeEthicalBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1E3A8A]">
              {t.choosePlanHeading}
            </h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed">
              {t.choosePlanSub}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenPlanModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-[#FFF8E7] font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>{t.planReviewChangeBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-[#2D2D2D] border border-stone-300 font-semibold text-xs transition-all"
            >
              {t.planEthicsPledgeBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Official Contact & Direct Artisan Desk below the page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-[#1E1B4B] via-[#1E3A8A] to-[#1E1B4B] rounded-3xl p-6 sm:p-8 border-2 border-[#F59E0B] text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'सीधा संपर्क केंद्र' : 'Direct Contact Desk'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#FFF8E7]">
                {language === 'hi' ? 'कलाVerse से संपर्क करें' : 'Connect With KalaVerse'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {language === 'hi'
                  ? 'पारंपरिक कलाकृतियों, अनुकूलित आर्डर, मास्टरक्लास या जीआई प्रमाणन के लिए हमारी समर्पित टीम से सीधे संपर्क करें।'
                  : 'Have custom heritage art inquiries, GI craft collaborations, or workshop questions? Contact our dedicated artisan support team directly.'}
              </p>
            </div>

            {/* Direct Contact Buttons & Details */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/kalaverse12"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center gap-3 transition-all group cursor-pointer"
                title="Follow us on Instagram @kalaverse12"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-pink-300 font-bold uppercase tracking-wider">Instagram</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">kalaverse12</div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:9987349872"
                className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center gap-3 transition-all group cursor-pointer"
                title="Call 9987349872"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Phone No.</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">9987349872</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:kalaverse9@gmail.com"
                className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center gap-3 transition-all group cursor-pointer"
                title="Email kalaverse9@gmail.com"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1E3A8A] to-blue-500 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">kalaverse9@gmail.com</div>
                </div>
              </a>

              {/* Contact Button */}
              {onOpenContactModal && (
                <button
                  type="button"
                  id="home-contact-button"
                  onClick={onOpenContactModal}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-amber-400 to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#1E1B4B] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 shrink-0 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#1E1B4B]" />
                  <span>{language === 'hi' ? 'संपर्क बटन' : 'Contact Button'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

