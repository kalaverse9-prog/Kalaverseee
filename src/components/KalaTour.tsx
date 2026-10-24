import React, { useState } from 'react';
import { ART_TOURS_DATA } from '../data/toursData';
import { TourItinerary, SupportedLanguage } from '../types';
import {
  Compass,
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  DollarSign,
  Award,
  Users,
  Printer
} from 'lucide-react';
import { getTranslations } from '../data/translations';
import { getLocalizedUI, getLocalizedTour } from '../data/localizedContent';
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

interface KalaTourProps {
  language?: SupportedLanguage;
  onOpenAgent?: (tourContext?: any) => void;
}

export const KalaTour: React.FC<KalaTourProps> = ({ language = 'en', onOpenAgent }) => {
  const t = getTranslations(language);
  const ui = getLocalizedUI(language);

  const [activeTab, setActiveTab] = useState<'curated' | 'custom'>('curated');
  const [selectedTourId, setSelectedTourId] = useState<string>('bihar_madhubani');

  // Custom Tour Generator Form State (Locked to 1-Day Single-Day Itinerary)
  const [customDestination, setCustomDestination] = useState('Varanasi, Uttar Pradesh');
  const customDays = '1';
  const [customPace, setCustomPace] = useState('Moderate');
  const [customBudget, setCustomBudget] = useState('3500');
  const [customInterests, setCustomInterests] = useState<string[]>([
    'Banarasi Silk Weaving',
    'Gulabi Meenakari Enameling',
    'Wooden Lacquer Toys'
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customResult, setCustomResult] = useState<any>(null);

  const rawCuratedToursList = Object.values(ART_TOURS_DATA);
  const curatedToursList = rawCuratedToursList.map((tr) => getLocalizedTour(tr, language));
  const rawCurrentTour: TourItinerary = ART_TOURS_DATA[selectedTourId] || rawCuratedToursList[0];
  const currentTour: TourItinerary = getLocalizedTour(rawCurrentTour, language);

  const tourStateImageMap: Record<string, string> = {
    bihar_madhubani: '/assets/states/bihar.jpg',
    andhra_kalamkari: '/assets/states/andhra_pradesh.jpg',
    maharashtra_warli: '/assets/states/maharashtra.jpg',
    rajasthan_pichwai: '/assets/states/rajasthan.jpg',
    odisha_pattachitra: '/assets/states/odisha.jpg'
  };

  const handleGenerateCustomTour = async () => {
    setIsGenerating(true);
    setCustomResult(null);

    try {
      const res = await fetch('/api/ai/custom-tour', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: customDestination,
          duration: '1 Day (Morning to Evening)',
          days: '1',
          interests: customInterests,
          pace: customPace,
          budget: customBudget,
          language
        })
      });
      const data = await res.json();
      if (data.itinerary) {
        setCustomResult(data.itinerary);
      } else {
        throw new Error('Fallback to default generation');
      }
    } catch (e) {
      setCustomResult({
        themeTitle: `1-Day Sacred Heritage & GI Craft Trail of ${customDestination}`,
        summary: `A carefully planned 1-day single-day craft immersion designed for authentic artisan guild visits, live looms, and direct master studio interactions.`,
        schedule: [
          {
            timeSlot: '09:00 AM – 11:30 AM',
            period: 'Morning',
            activityTitle: 'Master Weavers Collective & Jacquard Loom Walk',
            location: 'Old City Artisan Quarter',
            description: 'Visit hereditary master weavers creating silver and gold Zari borders on traditional pit looms.',
            craftExperience: 'Hands-on warp and weft demonstration with raw mulberry silk.',
            insiderTip: 'Look for the official Silk Mark and GI hologram when purchasing authentic handlooms.'
          },
          {
            timeSlot: '12:30 PM – 02:30 PM',
            period: 'Afternoon',
            activityTitle: 'Gulabi Meenakari (Pink Enamel) Guild Studio',
            location: 'Chaukhamba Heritage Lane',
            description: 'Observe the delicate art of firing silver jewelry with pulverized glass colors and silver foil inlay.',
            craftExperience: 'Mini-workshop applying crushed enamel colors to a lotus pendant.',
            insiderTip: 'True Banaras Meenakari uses pink and white lotus tones distinct from Rajasthani green-red enameling.'
          },
          {
            timeSlot: '04:00 PM – 06:30 PM',
            period: 'Evening',
            activityTitle: 'Kashmiri & Wooden Lacquerware Toy Turners',
            location: 'Khojwa Craft Cluster',
            description: 'Meet 5th-generation artisans turning eucalyptus wood on high-speed lathes and applying non-toxic natural shellac colors.',
            craftExperience: 'Paint a traditional wooden spinning top (Lattu).',
            insiderTip: 'These toys are 100% natural, baby-safe, and colored with organic turmeric and catechu.'
          }
        ],
        insiderArtisanTips: [
          'Direct Fair-Trade: Always pay artisans directly; avoid middleman commissions in tourist lanes.',
          'Early Visits: Morning hours between 9:00 AM and 11:00 AM offer the best natural lighting for loom photography.',
          'Artisan Etiquette: Remove footwear before stepping onto the white mattress (Gaddi) of traditional craft ateliers.'
        ]
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleInterest = (tag: string) => {
    if (customInterests.includes(tag)) {
      setCustomInterests(customInterests.filter((t) => t !== tag));
    } else {
      setCustomInterests([...customInterests, tag]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-fadeIn">
      {/* Ornate Header Banner */}
      <SectionHeaderBanner
        title={t.tourTitle}
        subtitle={t.tourSubtitle}
        tag={ui.kalaTourTag}
        themeColor="amber"
        icon={<PeacockMotif size={38} color="#FEF08A" accentColor="#F59E0B" />}
        rightBadge={
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wider text-[#FEF08A] font-bold">{ui.trailDurationBadgeTop}</div>
            <div className="text-sm font-extrabold text-white">{ui.oneDayRouteLabel}</div>
          </div>
        }
      />

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab('curated')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 border-2 transition-all ${
            activeTab === 'curated'
              ? 'bg-[#1E3A8A] text-[#FFF8E7] border-[#F59E0B] shadow-md scale-105'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
          }`}
        >
          <LotusMotif size={16} color="#F59E0B" secondaryColor="#FB7185" />
          <span>{ui.tabCuratedTrails}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('custom')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 border-2 transition-all ${
            activeTab === 'custom'
              ? 'bg-[#1E3A8A] text-[#FFF8E7] border-[#F59E0B] shadow-md scale-105'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <span>{ui.tabCustomAiTrail}</span>
        </button>
      </div>

      {activeTab === 'curated' ? (
        /* Curated 1-Day Trails Section */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Trail Picker (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-5 border-3 border-[#F59E0B] shadow-xl space-y-3 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#F59E0B" size={20} />
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="font-display font-extrabold text-sm text-[#1E3A8A] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#F59E0B]" />
                  <span>{ui.selectCraftTrailTitle}</span>
                </h3>
                <span className="text-[10px] bg-amber-100 text-[#B45309] font-bold px-2 py-0.5 rounded-full">
                  {ui.dayFocusLabel}
                </span>
              </div>

              <div className="space-y-2.5">
                {curatedToursList.map((tour) => {
                  const isSelected = tour.id === selectedTourId;
                  const tourImg = tourStateImageMap[tour.id] || `/assets/states/${tour.stateId}.jpg`;
                  return (
                    <div
                      key={tour.id}
                      onClick={() => setSelectedTourId(tour.id)}
                      className={`cursor-pointer p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-[#F59E0B] shadow-md ring-2 ring-[#F59E0B]/30'
                          : 'bg-white border-stone-200 hover:border-[#1E3A8A]/40'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-stone-900 border border-stone-200 shadow-sm relative">
                        <img
                          src={tourImg}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-[#1E3A8A] truncate">{tour.stateName || tour.stateId}</span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] shrink-0">
                            {ui.oneDayRouteLabel}
                          </span>
                        </div>
                        <div className="font-display font-bold text-xs sm:text-sm text-[#2D2D2D] line-clamp-1">
                          {tour.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Trail Details Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#F59E0B] shadow-xl space-y-6 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#F59E0B" size={28} />
              <OrnateCorner position="top-right" color="#F59E0B" size={28} />

              {/* Panoramic Tour Artwork Hero Banner */}
              <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full rounded-2xl overflow-hidden shadow-md border-2 border-amber-300 bg-stone-900">
                <img
                  src={tourStateImageMap[currentTour.id] || `/assets/states/${currentTour.stateId}.jpg`}
                  alt={currentTour.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-amber-400/50 text-[10px] text-[#FEF08A] font-extrabold flex items-center gap-1 shadow">
                  <Award className="w-3 h-3 text-[#FEF08A]" />
                  <span>GI Heritage Craft Trail</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold text-[#FEF08A] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-amber-400/40">
                    📍 {currentTour.stateName || currentTour.stateId} Heritage Route
                  </span>
                  <span className="text-xs font-semibold text-stone-200 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    {currentTour.duration}
                  </span>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#B45309] text-xs font-bold">
                    <LotusMotif size={14} color="#D97706" />
                    <span>{currentTour.stateName || currentTour.stateId} • {ui.oneDayRouteLabel}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1E3A8A]">
                    {currentTour.title}
                  </h2>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs text-stone-500 font-semibold">{ui.themeLabel}</div>
                  <div className="text-sm font-extrabold text-[#B45309]">{currentTour.theme}</div>
                </div>
              </div>

              {/* KalaYatri AI Concierge & Direct Booking Callout */}
              <div className="bg-gradient-to-r from-stone-900 via-amber-950/60 to-stone-900 text-stone-100 p-4 sm:p-5 rounded-2xl border-2 border-amber-500/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {ui.kalaYatriConciergeTitle}
                    </span>
                  </div>
                  <p className="text-xs text-stone-200 leading-relaxed max-w-xl">
                    {ui.kalaYatriConciergeDesc}
                  </p>
                </div>

                <button
                  type="button"
                  id="tour-consult-kalayatri-btn"
                  onClick={() => onOpenAgent && onOpenAgent(currentTour)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-stone-950 font-bold text-xs flex items-center gap-2 shrink-0 shadow-md transition hover:scale-105"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{ui.consultKalaYatriBtn}</span>
                </button>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
                  {ui.trailHighlightsTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentTour.highlights?.map((h, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-50 rounded-xl border border-amber-200 text-xs font-semibold text-stone-700">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1-Day Schedule Timeline */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F59E0B]" />
                  <span>{ui.stepScheduleTitle}</span>
                </h4>

                <div className="space-y-3">
                  {currentTour.schedule && currentTour.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-gradient-to-r from-[#FFFDF5] to-[#FFFBEB] border-2 border-[#F59E0B]/30 space-y-2 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#B45309] bg-amber-100 px-3 py-1 rounded-full">
                          ⏰ {item.timeSlot} ({item.period})
                        </span>
                        <span className="text-xs font-bold text-stone-600 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#1E3A8A]" />
                          {item.location}
                        </span>
                      </div>

                      <h5 className="font-display font-bold text-sm text-[#1E3A8A]">
                        {item.activityTitle}
                      </h5>

                      <p className="text-xs text-stone-700 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                        ✨ <strong>{ui.masterExperienceLabel}:</strong> {item.craftExperience}
                      </div>

                      {item.insiderTip && (
                        <div className="text-[11px] text-[#B45309] bg-amber-100/60 p-2 rounded-lg font-semibold">
                          💡 <strong>{ui.insiderTipLabel}:</strong> {item.insiderTip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Artisan Etiquette Tips */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                <h5 className="text-xs font-extrabold text-[#B45309] uppercase tracking-wider flex items-center gap-1.5">
                  <PaisleyMotif size={14} color="#D97706" />
                  <span>{ui.guildEtiquetteTitle}</span>
                </h5>
                <ul className="space-y-1 text-xs text-stone-700">
                  {currentTour.practicalTips?.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#F59E0B] font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Custom 1-Day AI Generator Section */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border-3 border-[#F59E0B] shadow-xl space-y-5 relative overflow-hidden">
              <OrnateCorner position="top-left" color="#F59E0B" size={24} />
              <OrnateCorner position="top-right" color="#F59E0B" size={24} />

              <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                <span>{ui.customizeTrailTitle}</span>
              </h3>

              {/* Destination */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.heritageCityLabel}
                </label>
                <input
                  type="text"
                  value={customDestination}
                  onChange={(e) => setCustomDestination(e.target.value)}
                  placeholder={ui.heritageCityPlaceholder || "E.g., Madurai, Raghurajpur, Jaipur, Pochampally..."}
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm font-semibold text-[#1E3A8A]"
                />
              </div>

              {/* Duration Notice: Locked to 1-Day Single Day */}
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-[#B45309] font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>{ui.durationNotice}</span>
              </div>

              {/* Pace & Budget */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    {t.tourPaceLabel}
                  </label>
                  <select
                    value={customPace}
                    onChange={(e) => setCustomPace(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  >
                    <option value="Relaxed">{ui.paceRelaxed}</option>
                    <option value="Moderate">{ui.paceModerate}</option>
                    <option value="Intense">{ui.paceIntense}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    {ui.dayBudgetLabel}
                  </label>
                  <input
                    type="number"
                    value={customBudget}
                    onChange={(e) => setCustomBudget(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Craft Interests */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1.5">
                  {t.tourInterestsLabel}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Natural Dye Washing',
                    'Pottery & Terracotta',
                    'Silk Handlooms',
                    'Miniature Painting',
                    'Stone Carving',
                    'Metal Casting (Dhokra)',
                    'Wood Turning'
                  ].map((craft, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleInterest(craft)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        customInterests.includes(craft)
                          ? 'bg-[#1E3A8A] text-white'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {craft}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                type="button"
                disabled={isGenerating || !customDestination.trim()}
                onClick={handleGenerateCustomTour}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#1E3A8A] via-[#1E1B4B] to-[#1E3A8A] hover:opacity-95 text-[#FFF8E7] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg border-2 border-[#F59E0B] transition-all hover:scale-105"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#FEF08A]" />
                    <span>{ui.generatingTrailText}</span>
                  </>
                ) : (
                  <>
                    <LotusMotif size={18} color="#FEF08A" secondaryColor="#FB7185" />
                    <span>{t.tourGenerateBtn}</span>
                    <Sparkles className="w-4 h-4 text-[#FEF08A]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Result Container */}
          <div className="lg:col-span-7">
            {customResult ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#F59E0B] shadow-xl space-y-6 animate-fadeIn relative">
                <OrnateCorner position="top-left" color="#F59E0B" size={24} />
                <OrnateCorner position="top-right" color="#F59E0B" size={24} />

                <div className="border-b border-stone-100 pb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-[#B45309] text-xs font-bold">
                    ✓ {ui.customTrailGeneratedBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1E3A8A] mt-2">
                    {customResult.themeTitle}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    {customResult.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  {customResult.schedule?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-gradient-to-r from-[#FFFDF5] to-[#FFFBEB] border-2 border-[#F59E0B]/30 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-[#B45309] bg-amber-100 px-3 py-0.5 rounded-full">
                          ⏰ {item.timeSlot}
                        </span>
                        <span className="font-bold text-stone-600">
                          📍 {item.location}
                        </span>
                      </div>
                      <h5 className="font-display font-bold text-sm text-[#1E3A8A]">
                        {item.activityTitle}
                      </h5>
                      <p className="text-xs text-stone-700">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 border-3 border-dashed border-[#F59E0B]/50 text-center flex flex-col items-center justify-center min-h-[420px] space-y-3">
                <MandalaRosette size={64} color="#F59E0B" accentColor="#1E3A8A" />
                <h4 className="font-display font-extrabold text-lg text-[#1E3A8A]">
                  {ui.aiTrailReadyTitle}
                </h4>
                <p className="text-xs text-stone-600 max-w-sm">
                  {ui.aiTrailReadyDesc}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
