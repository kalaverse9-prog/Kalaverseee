import React, { useState } from 'react';
import { StateArtData, SupportedLanguage } from '../types';
import { INDIAN_STATES_DATA } from '../data/statesData';
import {
  MapPin,
  Search,
  BookOpen,
  Sparkles,
  ChevronRight,
  Info,
  Clock,
  Layers,
  ArrowLeft,
  CheckCircle,
  Compass,
  Palette,
  Eye,
  Award,
  Filter,
  CheckCircle2,
  Brush,
  Feather,
  Sparkle,
  Video,
  ExternalLink,
  Play
} from 'lucide-react';
import { getTranslations } from '../data/translations';
import { getLocalizedUI, getLocalizedState } from '../data/localizedContent';
import {
  LotusMotif,
  PeacockMotif,
  PaisleyMotif,
  MandalaRosette,
  ToranBorder,
  VineCreeperBorder,
  OrnateCorner,
  MandalaWatermark,
  SectionHeaderBanner
} from './CulturalMotifs';

interface StateMapExplorerProps {
  language?: SupportedLanguage;
  onSelectStateArtForm?: (stateName: string, artForm: string) => void;
  onNavigateToTour?: (stateId: string) => void;
  onNavigateToSathi?: (stateName: string, artForm: string) => void;
}

export const StateMapExplorer: React.FC<StateMapExplorerProps> = ({
  language = 'en',
  onSelectStateArtForm,
  onNavigateToTour,
  onNavigateToSathi
}) => {
  const t = getTranslations(language);
  const ui = getLocalizedUI(language);

  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStateId, setActiveStateId] = useState<string | null>(null);
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  const zones = ['All', 'East', 'South', 'West', 'North', 'Central', 'North-East'];

  const getZoneLabel = (z: string) => {
    switch (z) {
      case 'All': return ui.zoneAll;
      case 'East': return ui.zoneEast;
      case 'South': return ui.zoneSouth;
      case 'West': return ui.zoneWest;
      case 'North': return ui.zoneNorth;
      case 'Central': return ui.zoneCentral;
      case 'North-East': return ui.zoneNE;
      default: return `${z} India`;
    }
  };

  const allStates = Object.values(INDIAN_STATES_DATA);

  const filteredStates = allStates
    .filter((st) => {
      const matchesZone = selectedZone === 'All' || st.zone === selectedZone;
      const matchesSearch =
        st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.primaryArtForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.otherCrafts.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesZone && matchesSearch;
    })
    .map((st) => getLocalizedState(st, language));

  const rawCurrentState: StateArtData | undefined = activeStateId
    ? INDIAN_STATES_DATA[activeStateId]
    : undefined;

  const currentState = rawCurrentState ? getLocalizedState(rawCurrentState, language) : undefined;

  return (
    <div id="state-explorer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Detail View / Master Tutorial when a state is selected */}
      {currentState ? (
        <div className="space-y-8 animate-fadeIn">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => setActiveStateId(null)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border-2 border-[#F59E0B] text-xs sm:text-sm font-extrabold text-[#1E3A8A] hover:bg-[#FFFBEB] transition-all shadow-md hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 text-[#F59E0B]" />
            <span>{ui.backToStates}</span>
          </button>

          {/* State Hero Banner */}
          <div className="bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#312E81] rounded-3xl p-6 sm:p-10 text-[#FFF8E7] shadow-xl border-3 border-[#F59E0B] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0">
              <ToranBorder color="#F59E0B" accentColor="#E11D48" />
            </div>

            <div className="absolute -right-10 -bottom-10 text-white pointer-events-none">
              <MandalaWatermark size={280} opacity={0.12} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 pt-2">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#F59E0B] text-[#1E1B4B] text-xs font-black uppercase tracking-wider shadow-sm">
                    {currentState.zone} {ui.zoneLabel}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/20 text-[#FFF8E7] text-xs font-bold border border-white/20">
                    {ui.capitalLabel}: {currentState.capital}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                    <Award className="w-3.5 h-3.5 text-emerald-400" /> {ui.giAuthenticCertified}
                  </span>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#FFF8E7] flex items-center gap-3">
                    <span>{currentState.primaryArtForm}</span>
                    <PeacockMotif size={36} color="#38BDF8" accentColor="#34D399" />
                  </h1>
                  <p className="text-base sm:text-lg text-[#FEF08A] font-bold mt-1">
                    {ui.stateOf} {currentState.name}, India
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-3xl">
                  {currentState.culturalSignificance || currentState.history}
                </p>

                {/* Quick Action Navigation Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {onNavigateToTour && (
                    <button
                      type="button"
                      onClick={() => onNavigateToTour(currentState.id)}
                      className="px-5 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105"
                    >
                      <Compass className="w-4 h-4" />
                      <span>{ui.generateTrailForState} {currentState.name}</span>
                    </button>
                  )}
                  {onNavigateToSathi && (
                    <button
                      type="button"
                      onClick={() =>
                        onNavigateToSathi(currentState.name, currentState.primaryArtForm)
                      }
                      className="px-5 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center gap-2 border border-white/30 transition-all hover:scale-105"
                    >
                      <LotusMotif size={16} color="#FEF08A" secondaryColor="#FB7185" />
                      <span>{ui.consultGuruOnArt} {currentState.primaryArtForm}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* State Emblem / Art Preview Card with Exact Artwork Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-3xl p-4 text-[#2D2D2D] shadow-2xl border-3 border-[#F59E0B] space-y-3 relative overflow-hidden group">
                  <OrnateCorner position="top-left" color="#F59E0B" size={20} />
                  <OrnateCorner position="top-right" color="#F59E0B" size={20} />

                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-amber-300 relative shadow-inner bg-[#FFF8E7]">
                    {currentState.artwork?.imageUrl ? (
                      <img
                        src={currentState.artwork.imageUrl}
                        alt={`${currentState.primaryArtForm} - ${currentState.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                        <MandalaRosette size={72} color="#F59E0B" accentColor="#DC2626" />
                        <div className="mt-2 font-display font-extrabold text-base text-[#1E3A8A]">
                          {currentState.primaryArtForm}
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white">
                      <div className="font-display font-extrabold text-sm text-[#FEF08A] drop-shadow-md">
                        {currentState.artwork?.title || currentState.primaryArtForm}
                      </div>
                      <div className="text-[11px] text-stone-200 font-medium">
                        {currentState.artwork?.region || currentState.name}
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-xs text-stone-700 font-bold flex items-center justify-center gap-1.5">
                    <Award className="w-4 h-4 text-[#F59E0B]" />
                    <span>{currentState.primaryArtForm} • {currentState.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Heritage Breakdown: Materials, Motifs, Pigments */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Natural Pigments / Traditional Materials */}
            <div className="bg-white rounded-3xl p-6 border-3 border-[#F59E0B] shadow-lg space-y-4 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#F59E0B" size={20} />
              <div className="flex items-center gap-2 text-[#1E3A8A] font-extrabold text-base border-b border-stone-100 pb-3">
                <Palette className="w-5 h-5 text-[#F59E0B]" />
                <span>{ui.naturalMaterialsTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {currentState.traditionalMaterials?.map((pigment, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/80">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1 shrink-0" />
                    <span className="leading-relaxed">{pigment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sacred Motifs & Iconography */}
            <div className="bg-white rounded-3xl p-6 border-3 border-[#1E3A8A] shadow-lg space-y-4 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#1E3A8A" size={20} />
              <div className="flex items-center gap-2 text-[#1E3A8A] font-extrabold text-base border-b border-stone-100 pb-3">
                <LotusMotif size={20} color="#F59E0B" secondaryColor="#FB7185" />
                <span>{ui.sacredMotifsTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {currentState.keyMotifs?.map((motif, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-blue-50/60 p-2.5 rounded-xl border border-blue-200/80">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A8A] mt-1 shrink-0" />
                    <span className="leading-relaxed">{motif}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unique Lore & Facts */}
            <div className="bg-white rounded-3xl p-6 border-3 border-emerald-600 shadow-lg space-y-4 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#059669" size={20} />
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base border-b border-stone-100 pb-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>{ui.uniqueLoreTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {currentState.uniqueFacts?.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1 shrink-0" />
                    <span className="leading-relaxed font-semibold">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Step-by-Step Technique Masterclass with Video Tutorial */}
          {currentState.tutorial?.steps && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#F59E0B] shadow-xl space-y-6 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#F59E0B" size={28} />
              <OrnateCorner position="top-right" color="#F59E0B" size={28} />

              {/* Masterclass Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-[#B45309] uppercase tracking-wider flex items-center gap-2">
                    <Brush className="w-4 h-4" /> {ui.authenticTechniqueGuide}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1E3A8A]">
                    {ui.masteringArtStep} {currentState.primaryArtForm}: Step-by-Step
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {currentState.tutorial.videoUrl && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-extrabold border border-red-300 shadow-xs">
                      <Video className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                      <span>Video Tutorial Included</span>
                    </span>
                  )}
                  <span className="text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    ⏱️ {currentState.tutorial.estimatedTime || '2 - 3 hours'}
                  </span>
                </div>
              </div>

              {/* Side-by-Side: Video Player & Written Master Tutorial */}
              <div className={`grid grid-cols-1 ${currentState.tutorial.youtubeId ? 'lg:grid-cols-12' : 'grid-cols-1'} gap-6 items-start`}>
                {/* Master Video Player Container (When Video Available) */}
                {currentState.tutorial.youtubeId && (
                  <div className="lg:col-span-6 space-y-3">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-amber-300 shadow-lg bg-stone-900 relative">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${currentState.tutorial.youtubeId}?rel=0&modestbranding=1`}
                        title={`${currentState.primaryArtForm} Masterclass Video Tutorial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#1E1B4B]">
                        <Play className="w-4 h-4 text-[#D97706] shrink-0" />
                        <span className="line-clamp-1">{currentState.tutorial.title}</span>
                      </div>
                      {currentState.tutorial.videoUrl && (
                        <a
                          href={currentState.tutorial.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 font-extrabold text-[#D97706] hover:text-[#B45309] hover:underline flex items-center gap-1"
                        >
                          <span>Open on YouTube</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Materials Checklist */}
                    {currentState.tutorial.materialsNeeded && (
                      <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                          <Palette className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>Materials Used in Video:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentState.tutorial.materialsNeeded.map((mat, i) => (
                            <span key={i} className="text-[11px] bg-white text-stone-700 px-2.5 py-1 rounded-lg border border-stone-200 font-medium">
                              • {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Written Steps Column */}
                <div className={`${currentState.tutorial.youtubeId ? 'lg:col-span-6' : 'col-span-1'} space-y-4`}>
                  {/* Step Selector Tabs */}
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <div className="text-xs font-bold text-stone-600">
                      Step {activeStepTab + 1} of {currentState.tutorial.steps.length}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {currentState.tutorial.steps.map((step, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveStepTab(idx)}
                          className={`w-7 h-7 rounded-lg text-xs font-extrabold transition-all ${
                            activeStepTab === idx
                              ? 'bg-[#1E3A8A] text-[#FFF8E7] shadow-md scale-105'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                          title={`Step ${step.stepNumber}: ${step.title}`}
                        >
                          {step.stepNumber}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Step Content */}
                  {currentState.tutorial.steps[activeStepTab] && (
                    <div className="bg-gradient-to-br from-[#FFFDF5] to-[#FFFBEB] p-5 sm:p-6 rounded-2xl border-2 border-[#F59E0B]/50 space-y-3.5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-[#1E1B4B] flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                          {currentState.tutorial.steps[activeStepTab].stepNumber}
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-display font-extrabold text-[#1E3A8A]">
                            {currentState.tutorial.steps[activeStepTab].title}
                          </h4>
                          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                            Demonstrated at Stage {currentState.tutorial.steps[activeStepTab].stepNumber}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans pl-11">
                        {currentState.tutorial.steps[activeStepTab].description}
                      </p>

                      {currentState.tutorial.steps[activeStepTab].proTip && (
                        <div className="ml-11 p-3 bg-amber-100/80 border border-amber-300 rounded-xl text-xs text-[#92400E] font-bold space-y-0.5">
                          <div className="text-[10px] uppercase font-black tracking-wider text-[#B45309]">
                            💡 Master Artisan Pro-Tip:
                          </div>
                          <div className="leading-relaxed font-medium">
                            {currentState.tutorial.steps[activeStepTab].proTip}
                          </div>
                        </div>
                      )}

                      {/* Step Pagination Controls */}
                      <div className="pt-2 flex items-center justify-between border-t border-amber-200/60 pl-11">
                        <button
                          type="button"
                          disabled={activeStepTab === 0}
                          onClick={() => setActiveStepTab((prev) => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white border border-stone-200 disabled:opacity-40 hover:bg-stone-50 transition-colors"
                        >
                          ← Previous Step
                        </button>

                        <button
                          type="button"
                          disabled={activeStepTab === currentState.tutorial.steps.length - 1}
                          onClick={() => setActiveStepTab((prev) => Math.min(currentState.tutorial.steps.length - 1, prev + 1))}
                          className="px-4 py-1.5 rounded-xl text-xs font-extrabold bg-[#1E3A8A] text-white hover:bg-[#1E1B4B] disabled:opacity-40 transition-colors shadow-xs"
                        >
                          Next Step →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Main Directory / Grid View */
        <div className="space-y-8 animate-fadeIn">
          {/* Header Banner */}
          <SectionHeaderBanner
            title={t.mapTitle}
            subtitle={t.mapSubtitle}
            tag={ui.stateExplorerTag}
            themeColor="purple"
            icon={<PeacockMotif size={38} color="#C084FC" accentColor="#F59E0B" />}
            rightBadge={
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wider text-[#FEF08A] font-bold">{ui.stateExplorerBadgeTop}</div>
                <div className="text-sm font-extrabold text-white">{ui.stateExplorerBadgeSub}</div>
              </div>
            }
          />

          {/* Filter Bar & Search */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-[#F59E0B] shadow-xl space-y-4 relative">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-[#F59E0B] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.mapSearchPlaceholder}
                  className="w-full pl-11 pr-4 py-3 bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-2xl text-xs sm:text-sm text-[#2D2D2D] font-medium focus:ring-2 focus:ring-[#1E3A8A] transition-all shadow-inner"
                />
              </div>

              {/* Zone Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {zones.map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setSelectedZone(zone)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                      selectedZone === zone
                        ? 'bg-[#1E3A8A] text-[#FFF8E7] shadow-md scale-105'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {getZoneLabel(zone)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* States Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredStates.map((state) => (
              <div
                key={state.id}
                id={`state-card-${state.id}`}
                onClick={() => setActiveStateId(state.id)}
                className="cursor-pointer bg-white rounded-3xl p-5 border-3 border-[#F59E0B]/40 hover:border-[#1E3A8A] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1"
              >
                <OrnateCorner position="top-right" color="#F59E0B" size={20} />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-[#B45309]">
                      {state.zone} {ui.zoneLabel}
                    </span>
                    <span className="text-[11px] font-bold text-stone-500">
                      📍 {state.capital}
                    </span>
                  </div>

                  {/* Card Art Emblem Banner with Exact Artwork Image */}
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#1E3A8A] to-[#1E293B] text-white flex flex-col justify-between shadow-md relative overflow-hidden group-hover:scale-[1.02] transition-transform border border-amber-300/40">
                    {state.artwork?.imageUrl ? (
                      <img
                        src={state.artwork.imageUrl}
                        alt={`${state.primaryArtForm} - ${state.name}`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : null}

                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10 p-3">
                      <LotusMotif size={18} color="#FEF08A" secondaryColor="#FB7185" />
                      <span className="text-[10px] bg-black/60 backdrop-blur-xs text-[#FEF08A] px-2 py-0.5 rounded-full font-bold border border-amber-400/50 shadow-xs">
                        GI Certified
                      </span>
                    </div>

                    <div className="relative z-10 p-3 pt-0">
                      <h4 className="font-display font-black text-sm text-[#FFF8E7] line-clamp-1 drop-shadow-md">
                        {state.primaryArtForm}
                      </h4>
                      <p className="text-[11px] text-[#FEF08A] font-bold drop-shadow-sm">
                        {state.name}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {state.culturalSignificance || state.history}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mb-1">
                      {ui.secondaryCraftsLabel}:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {state.otherCrafts?.slice(0, 2).map((c, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] group-hover:text-[#F59E0B] transition-colors">
                  <span>{t.mapViewDetailsBtn}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
