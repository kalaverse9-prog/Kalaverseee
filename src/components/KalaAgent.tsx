import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  MessageSquare,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  X,
  Send,
  Ticket,
  DollarSign,
  QrCode,
  Download,
  AlertCircle,
  Users,
  Utensils,
  Accessibility,
  HeartHandshake,
  Maximize2,
  Minimize2,
  Loader2,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import {
  SupportedLanguage,
  UserProfile,
  UserTravelPreferences,
  CulturalExperience,
  TourBookingReservation,
  KalaYatriChatMessage
} from '../types';
import { getTranslations } from '../data/translations';
import kalaVerseLogo from '../assets/images/kalaverse_monogram_logo_1790837371119.jpg';
import {
  getLocalizedUI,
  STATE_NAME_TRANSLATIONS,
  ART_FORM_TRANSLATIONS,
  getLocalizedCulturalExperience
} from '../data/localizedContent';
import {
  BOOKABLE_CULTURAL_EXPERIENCES,
  retrieveCulturalContext,
  findMatchingExperience
} from '../utils/ragKnowledgeBase';
import { validateTravelQuery } from '../utils/kalasathiLogic';
import { LotusMotif, PeacockMotif, MandalaRosette } from './CulturalMotifs';

interface KalaAgentProps {
  language: SupportedLanguage;
  userProfile: UserProfile;
  onUpdateUserProfile: (updated: Partial<UserProfile>) => void;
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
  onNavigateSection?: (section: any) => void;
  activeTourContext?: any;
}

export const KalaAgent: React.FC<KalaAgentProps> = ({
  language,
  userProfile,
  onUpdateUserProfile,
  isOpen,
  onToggleOpen,
  onNavigateSection,
  activeTourContext
}) => {
  const t = getTranslations(language);
  const ui = getLocalizedUI(language);
  const safeLang = (language in STATE_NAME_TRANSLATIONS ? language : 'en') as SupportedLanguage;

  const [activeTab, setActiveTab] = useState<'chat' | 'book' | 'passes'>('chat');
  const [isExpanded, setIsExpanded] = useState(false);

  // Default Travel Context for RAG retrieval
  const defaultPreferences: UserTravelPreferences = {
    interests: ['Mithila Painting', 'Freehand Kalamkari', 'Warli Tribal Murals'],
    availableTime: '1 Day (Morning to Evening)',
    budget: 2500,
    preferredActivities: ['Hands-on Masterclasses', 'Village Heritage Walks', 'Direct Fair-Trade Markets'],
    accessibilityRequirements: ['Step-free / Ground level paths', 'Seated workstations'],
    foodPreferences: 'Pure Vegetarian / Sattvic Thali',
    experienceType: 'Hands-on Artisan Immersion'
  };

  // Chat conversation state
  const [messages, setMessages] = useState<KalaYatriChatMessage[]>([
    {
      id: 'welcome_1',
      role: 'assistant',
      content: t.kalayatriWelcomeMsg || (language === 'hi'
        ? `नमस्ते! मैं आपका व्यक्तिगत सांस्कृतिक यात्रा सहायक **कलायात्री (KalaYatri)** हूँ। मैं कलाVerse के प्रमाणित सांस्कृतिक ज्ञानकोश (RAG) से जुड़ा हुआ हूँ। मैं आपको 1-दिवसीय कलाTour योजना, मास्टर शिल्पकार कार्यशालाओं, सुलभता (Accessibility), सात्विक खानपान और 85% सीधे कारीगर भुगतान (15% मंच कमीशन) के साथ टिकट बुकिंग में सहायता प्रदान करूँगा। आज आप किस कला यात्रा पर विचार कर रहे हैं?`
        : `Greetings! I am **KalaYatri**, your Personal AI Cultural Travel Assistant grounded in KalaVerse's verified cultural knowledge base (RAG). I can guide you through authentic 1-day craft itineraries, answer questions about timings and accessibility, and complete direct artisan bookings with 85% direct payout and transparent 15% platform commission. Where would your cultural curiosity like to wander today?`),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: ['KalaVerse Verified GI Registry & Direct Artisan Lineage Registry'],
      suggestedActions: [
        { label: t.kalayatriPromptMadhubani || '1-Day Madhubani Trail', actionType: 'book', payload: 'exp_mithila_atelier' },
        { label: t.kalayatriPromptKalamkari || 'Srikalahasti Kalamkari', actionType: 'book', payload: 'exp_kalamkari_temple' },
        { label: language === 'hi' ? '🎟️ सभी अनुभव देखें' : '🎟️ Explore Experiences', actionType: 'book' }
      ]
    }
  ]);

  // Synchronize initial welcome message when language changes if user hasn't sent user messages yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === 'assistant') {
        return [
          {
            id: 'welcome_1',
            role: 'assistant',
            content: t.kalayatriWelcomeMsg,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            citations: ['KalaVerse Verified GI Registry & Direct Artisan Lineage Registry'],
            suggestedActions: [
              { label: t.kalayatriPromptMadhubani, actionType: 'book', payload: 'exp_mithila_atelier' },
              { label: t.kalayatriPromptKalamkari, actionType: 'book', payload: 'exp_kalamkari_temple' },
              { label: language === 'hi' ? '🎟️ सभी अनुभव देखें' : '🎟️ Explore Experiences', actionType: 'book' }
            ]
          }
        ];
      }
      return prev;
    });
  }, [language, t]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Booking Flow State
  const [selectedExperience, setSelectedExperience] = useState<CulturalExperience | null>(null);
  const [bookingDate, setBookingDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [bookingSlot, setBookingSlot] = useState<string>('Morning (08:30 AM – 01:30 PM)');
  const [travelerCounts, setTravelerCounts] = useState({ adults: 1, children: 0, seniors: 0 });
  const [specialAccessibility, setSpecialAccessibility] = useState<string[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<string>('Pure Vegetarian Heritage Thali');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState<TourBookingReservation | null>(null);

  // Auto-scroll chat
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, activeTab]);

  // Handle Send Chat
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMsg: KalaYatriChatMessage = {
      id: `msg_user_${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Recognize and immediately prevent inappropriate and irrelevant stuff in KalaYatri
    const validation = validateTravelQuery(query, language);
    if (!validation.allowed && validation.reply) {
      const aiMsg: KalaYatriChatMessage = {
        id: `msg_ai_${Date.now()}`,
        role: 'assistant',
        content: validation.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, userMsg, aiMsg]);
      if (!textToSend) setInputQuery('');
      return;
    }

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      // 1. RAG Retrieval from verified knowledge base
      const ragContext = retrieveCulturalContext(query, defaultPreferences);
      const matchingExp = findMatchingExperience(query);

      // 2. Call backend proxy endpoint
      const response = await fetch('/api/ai/kalayatri-rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: query,
          userPreferences: defaultPreferences,
          language,
          chatHistory: messages.slice(-4),
          retrievedContext: ragContext.chunks.map((c) => `[${c.source}]: ${c.content}`),
          currentTour: activeTourContext
        })
      });

      const data = await response.json();
      const replyText = data.reply || (language === 'hi'
        ? 'कलाVerse सांस्कृतिक ज्ञानकोश के अनुसार आपकी यात्रा योजना तैयार की जा रही है।'
        : 'Consulting the verified KalaVerse cultural registry for your itinerary.');

      const aiMsg: KalaYatriChatMessage = {
        id: `msg_ai_${Date.now()}`,
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: ragContext.citations,
        experienceToBook: matchingExp,
        suggestedActions: matchingExp
          ? [
              {
                label: language === 'hi' ? `🎟️ ${matchingExp.title.slice(0, 24)}... बुक करें` : `🎟️ Book ${matchingExp.artForm}`,
                actionType: 'book',
                payload: matchingExp.id
              },
              {
                label: language === 'hi' ? '🎟️ सभी अनुभव देखें' : '🎟️ Browse All Passes',
                actionType: 'book'
              }
            ]
          : [
              {
                label: language === 'hi' ? '🎟️ सभी अनुभव देखें' : '🎟️ Explore Experiences',
                actionType: 'book'
              },
              {
                label: language === 'hi' ? 'मधुबनी शिल्प अनुभव' : 'Madhubani Trail Details',
                actionType: 'chat_prompt',
                payload: 'Tell me about the Madhubani Heritage Trail'
              }
            ]
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const fallbackMsg: KalaYatriChatMessage = {
        id: `msg_fallback_${Date.now()}`,
        role: 'assistant',
        content:
          language === 'hi'
            ? `क्षमा करें, नेटवर्क विलंब हुआ है। कलाVerse के सत्यापित ज्ञानकोश के अनुसार जीतवारपुर (मधुबनी) और श्रीकालहस्ती (कलमकारी) के 1-दिवसीय यात्रा कार्यक्रम सीधे 'Book Passes' से आरक्षित किए जा सकते हैं।`
            : `I have grounded your query against KalaVerse's verified registry. You can review authentic 1-day craft experiences and book passes in Madhubani, Kalamkari, Warli, and Pichwai under the 'Book Passes' tab.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: ['KalaVerse Verified Cultural Knowledge Base']
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger Booking Modal / Step
  const handleOpenBooking = (expId?: string) => {
    const target = expId
      ? BOOKABLE_CULTURAL_EXPERIENCES.find((e) => e.id === expId) || BOOKABLE_CULTURAL_EXPERIENCES[0]
      : BOOKABLE_CULTURAL_EXPERIENCES[0];
    setSelectedExperience(target);
    setActiveTab('book');
  };

  // Complete Payment & Reservation
  const handleConfirmReservation = () => {
    if (!selectedExperience) return;

    setIsProcessingPayment(true);

    const totalTravelers = travelerCounts.adults + travelerCounts.children + travelerCounts.seniors;
    const baseTotal = selectedExperience.priceINR * totalTravelers;
    const directArtisanAmount = Math.round(baseTotal * 0.85);

    setTimeout(() => {
      const newPass: TourBookingReservation = {
        id: `res_${Date.now()}`,
        experienceId: selectedExperience.id,
        experienceTitle: selectedExperience.title,
        state: selectedExperience.state,
        location: selectedExperience.location,
        date: bookingDate,
        timeSlot: bookingSlot,
        travelerCount: travelerCounts,
        totalTravelers,
        totalAmountINR: baseTotal,
        artisanDirectPayoutINR: directArtisanAmount,
        accessibilityNeeds: specialAccessibility,
        foodPreference: selectedMeal,
        artisanName: selectedExperience.artisanName,
        paymentMethod,
        paymentStatus: 'completed',
        paymentId: `PAY_KV_${Math.floor(100000 + Math.random() * 900000)}`,
        bookingCode: `KV-PASS-${Math.floor(10000 + Math.random() * 90000)}`,
        qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=KV-PASS-${selectedExperience.id}-${bookingDate}`,
        createdAt: new Date().toISOString()
      };

      setConfirmedPass(newPass);
      setIsProcessingPayment(false);

      // Save to user profile
      const updatedBookings = [...(userProfile.tourBookings || []), newPass];
      onUpdateUserProfile({ tourBookings: updatedBookings });

      // Post confirmation into chat
      const confirmationChatMsg: KalaYatriChatMessage = {
        id: `msg_pass_${Date.now()}`,
        role: 'assistant',
        content:
          language === 'hi'
            ? `🎉 बधाई! **${selectedExperience.title}** के लिए आपका आधिकारिक सांस्कृतिक ई-पास (Booking: **${newPass.bookingCode}**) जारी कर दिया गया है। ₹${directArtisanAmount} (85%) सीधे मास्टर शिल्पकार **${selectedExperience.artisanName}** को अंतरित कर दिए गए हैं (15% मंच कमीशन)। आप इसे 'My Passes' टैब में कभी भी देख सकते हैं।`
            : `🎉 Congratulations! Your Official Cultural E-Pass for **${selectedExperience.title}** (Code: **${newPass.bookingCode}**) is confirmed. ₹${directArtisanAmount} (85%) has been remitted directly to Master Artisan **${selectedExperience.artisanName}** with transparent 15% platform commission. You can view and download your pass anytime in the 'My Passes' tab.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: ['KalaVerse 85% Direct Artisan Remuneration Settlement System']
      };

      setMessages((prev) => [...prev, confirmationChatMsg]);
    }, 1400);
  };

  const totalTravelers = Math.max(1, travelerCounts.adults + travelerCounts.children + travelerCounts.seniors);
  const currentTotalCost = (selectedExperience?.priceINR || 1850) * totalTravelers;
  const currentArtisanCut = Math.round(currentTotalCost * 0.85);

  return (
    <>
      {/* Side-Docked KalaYatri AI Icon Trigger Button */}
      {!isOpen && (
        <aside
          aria-label="KalaYatri AI Travel Assistant"
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center group select-none animate-fadeIn"
        >
          {/* Slide-out tooltip card on hover */}
          <div className="absolute right-full mr-3.5 hidden group-hover:flex flex-col items-end pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
            <div className="bg-stone-950/95 text-stone-100 px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/40 backdrop-blur-md text-right whitespace-nowrap min-w-[210px]">
              <div className="flex items-center gap-1.5 justify-end text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.kalayatriNameOnly || 'KalaYatri'}</span>
              </div>
              <div className="text-[11px] text-stone-300 mt-0.5">
                {t.kalayatriTooltipSub || 'Cultural Concierge & Tour Passes'}
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1 flex items-center justify-end gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.kalayatriTooltipRAG || 'RAG Knowledge • 85% Direct Pay'}
              </div>
              <div className="mt-1.5 pt-1.5 border-t border-white/10 text-[10px] text-amber-200/90 font-medium">
                {t.kalayatriTooltipOpenPrompt || 'Click side icon to open ❯'}
              </div>
            </div>
          </div>

          <button
            id="open-kalayatri-agent-btn"
            onClick={() => onToggleOpen(true)}
            className="relative flex items-center bg-gradient-to-l from-stone-950 via-amber-950 to-amber-900 text-amber-100 pl-3 pr-2 py-3.5 rounded-l-2xl shadow-2xl hover:shadow-amber-500/40 border-y-2 border-l-2 border-amber-400 transition-all duration-300 group-hover:-translate-x-1.5 cursor-pointer"
            title="KalaYatri"
          >
            {/* Ambient gold glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-l-2xl blur-xs opacity-40 group-hover:opacity-100 transition -z-10" />

            {/* Circular Ornate Emblem Icon */}
            <div className="relative flex flex-col items-center gap-1.5">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 border-2 border-amber-300 shadow-xl group-hover:scale-105 group-hover:border-amber-100 transition-transform overflow-hidden shrink-0">
                  <img
                    src={kalaVerseLogo}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/kalaverse_logo.jpg';
                    }}
                    alt="KalaVerse Heritage Monogram"
                    className="w-full h-full object-cover rounded-[10px] bg-[#FFF8E7]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Active live indicator */}
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-stone-900 rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-stone-900 rounded-full" />
              </div>

              {/* Only the name KalaYatri and nothing else */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-bold tracking-wide text-[#FFF8E7] font-display leading-tight">
                  {t.kalayatriNameOnly || 'KalaYatri'}
                </span>
              </div>
            </div>
          </button>
        </aside>
      )}

      {/* Expanded Agent Drawer / Panel */}
      {isOpen && (
        <section
          aria-label="KalaYatri Cultural Concierge Window"
          className={`fixed z-50 bg-stone-900/95 text-stone-100 shadow-2xl backdrop-blur-md border border-amber-500/30 flex flex-col transition-all duration-300 ${
            isExpanded
              ? 'inset-4 md:inset-8 rounded-2xl'
              : 'bottom-4 right-4 w-full sm:w-[480px] md:w-[540px] h-[85vh] max-h-[720px] rounded-2xl'
          }`}
        >
          {/* Header Banner */}
          <div className="px-5 py-4 border-b border-amber-500/20 bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <MandalaRosette size={140} color="#f59e0b" />
            </div>

            <div className="flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 shadow-md flex items-center justify-center overflow-hidden border border-amber-300/40 shrink-0">
                <img
                  src={kalaVerseLogo}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/kalaverse_logo.jpg';
                  }}
                  alt="KalaVerse Heritage Monogram"
                  className="w-full h-full object-cover rounded-[8px] bg-[#FFF8E7]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-amber-100 tracking-wide">
                    {t.aiAgentTitle || 'KalaYatri AI (कलायात्री)'}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    RAG Grounded
                  </span>
                </div>
                <p className="text-xs text-stone-400">
                  {t.aiAgentSubtitle || 'Personal Cultural Travel Concierge & KalaTour Assistant'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 z-10">
              <button
                id="agent-toggle-expand-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? 'Minimize' : 'Maximize'}
                className="p-2 rounded-lg text-stone-400 hover:text-amber-200 hover:bg-stone-800 transition"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                id="agent-close-btn"
                onClick={() => onToggleOpen(false)}
                aria-label="Close Assistant"
                className="p-2 rounded-lg text-stone-400 hover:text-rose-300 hover:bg-stone-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-stone-800 bg-stone-950/60 px-3 overflow-x-auto text-xs font-medium scrollbar-none">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-1.5 py-3 px-3.5 border-b-2 transition whitespace-nowrap ${
                activeTab === 'chat'
                  ? 'border-amber-500 text-amber-300 font-semibold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {t.tabChat || 'Concierge Chat'}
            </button>

            <button
              onClick={() => setActiveTab('book')}
              className={`flex items-center gap-1.5 py-3 px-3.5 border-b-2 transition whitespace-nowrap ${
                activeTab === 'book'
                  ? 'border-amber-500 text-amber-300 font-semibold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Ticket className="w-3.5 h-3.5" />
              {t.tabBookExperience || 'Book Passes'}
            </button>

            <button
              onClick={() => setActiveTab('passes')}
              className={`flex items-center gap-1.5 py-3 px-3.5 border-b-2 transition whitespace-nowrap ${
                activeTab === 'passes'
                  ? 'border-amber-500 text-amber-300 font-semibold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              {t.tabMyBookings || 'My Passes'}
              {(userProfile.tourBookings?.length || 0) > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 font-bold text-[10px] flex items-center justify-center">
                  {userProfile.tourBookings?.length}
                </span>
              )}
            </button>
          </div>

          {/* Main Body per Tab */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* TAB 1: CHAT CONCIERGE */}
            {activeTab === 'chat' && (
              <div className="flex flex-col h-full justify-between gap-3">
                {/* Messages stream */}
                <div className="space-y-3.5 flex-1 pr-1">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-amber-50 rounded-br-none shadow-md'
                            : 'bg-stone-800/90 text-stone-200 border border-stone-700/80 rounded-bl-none shadow-sm'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{msg.content}</div>

                        {/* Verified Grounding Citations */}
                        {msg.citations && msg.citations.length > 0 && (
                          <div className="mt-2.5 pt-2 border-t border-stone-700/60 text-[11px] text-amber-400/90 flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Grounded:
                            </span>
                            {msg.citations.map((cite, i) => (
                              <span key={i} className="bg-stone-900/80 px-2 py-0.5 rounded text-[10px] text-stone-300 border border-stone-700">
                                {cite}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Suggested action buttons */}
                        {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {msg.suggestedActions.map((action, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  if (action.actionType === 'book') {
                                    handleOpenBooking(action.payload);
                                  } else if (action.payload) {
                                    handleSendMessage(action.payload);
                                  } else {
                                    handleSendMessage(action.label);
                                  }
                                }}
                                className="text-xs bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1 transition"
                              >
                                {action.label}
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] text-stone-500 mt-1 px-1">{msg.timestamp}</span>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex items-center gap-2 text-xs text-amber-400 bg-stone-800/80 px-3.5 py-2.5 rounded-xl border border-stone-700 w-fit animate-pulse">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                      <span>{language === 'hi' ? 'कलाVerse ज्ञानकोश से उत्तर खोजा जा रहा है...' : 'Retrieving verified cultural knowledge & refining guidance...'}</span>
                    </div>
                  )}

                  <div ref={chatBottomRef} />
                </div>

                {/* Quick inquiry starter prompts */}
                <div className="pt-2 border-t border-stone-800">
                  <div className="text-[11px] text-stone-400 font-medium mb-1.5 flex items-center justify-between">
                    <span>{t.sathiQuickPromptsTitle || (language === 'hi' ? 'त्वरित सांस्कृतिक प्रश्न:' : 'Quick Heritage Questions:')}</span>
                    <span className="text-amber-500 text-[10px]">RAG Grounded</span>
                  </div>
                  <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                    {[
                      t.kalayatriPromptMadhubani,
                      t.kalayatriPromptKalamkari,
                      t.kalayatriPromptAccessibility
                    ].map((promptText, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(promptText)}
                        className="whitespace-nowrap text-xs bg-stone-800/80 hover:bg-stone-700 text-stone-300 border border-stone-700 px-2.5 py-1 rounded-lg transition"
                      >
                        {promptText}
                      </button>
                    ))}
                  </div>

                  {/* Input form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      id="agent-chat-input"
                      type="text"
                      value={inputQuery}
                      onChange={(e) => setInputQuery(e.target.value)}
                      placeholder={
                        language === 'hi'
                          ? 'कलाTour, सुगमता, बजट या बुकिंग के बारे में पूछें...'
                          : `${t.sathiPromptPlaceholder || 'Ask about 1-day tours, accessibility, food, or booking...'}`
                      }
                      className="flex-1 bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition"
                    />
                    <button
                      id="agent-send-btn"
                      type="submit"
                      disabled={!inputQuery.trim() || isLoading}
                      className="bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-stone-950 font-bold px-4 py-2.5 rounded-xl flex items-center justify-center transition shadow"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* TAB 2: BOOK CULTURAL EXPERIENCES */}
            {activeTab === 'book' && (
              <div className="space-y-4">
                {/* List experiences if none selected */}
                {!selectedExperience && (
                  <div className="space-y-3">
                    <div className="text-xs text-stone-400">
                      {language === 'hi'
                        ? 'कलाVerse द्वारा सत्यापित आधिकारिक सांस्कृतिक अनुभव। प्रत्येक टिकट का 85% सीधे मास्टर शिल्पकार को दिया जाता है (15% मंच कमीशन)।'
                        : 'Official GI-certified cultural experiences. 85% of your ticket is directly disbursed to master artisan lineages (15% platform commission).'}
                    </div>

                    <div className="space-y-3">
                      {BOOKABLE_CULTURAL_EXPERIENCES.map((rawExp) => {
                        const exp = getLocalizedCulturalExperience(rawExp, language);
                        return (
                        <div
                          key={exp.id}
                          className="bg-stone-800/80 border border-stone-700/80 rounded-xl p-3.5 space-y-2.5 hover:border-amber-500/50 transition"
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                              {exp.badge}
                            </span>
                            <div className="text-right">
                              <span className="text-base font-bold text-amber-400 font-mono">₹{exp.priceINR}</span>
                              <span className="text-[10px] text-stone-400 block">/ person</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-stone-100 text-sm">{exp.title}</h4>
                            <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-amber-400" /> {exp.location}
                            </p>
                            <p className="text-xs text-stone-300 mt-1.5 line-clamp-2 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-stone-700/60 text-xs">
                            <span className="text-stone-400 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-stone-500" /> {exp.duration}
                            </span>
                            <button
                              onClick={() => setSelectedExperience(exp)}
                              className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
                            >
                              <Ticket className="w-3.5 h-3.5" />
                              {t.bookNowBtn || 'Book Now'}
                            </button>
                          </div>
                        </div>
                      );
                      })}
                    </div>
                  </div>
                )}

                {/* Selected experience guided reservation form */}
                {selectedExperience && !confirmedPass && (
                  <div className="space-y-4">
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                    >
                      ← {language === 'hi' ? 'सभी अनुभवों पर वापस जाएं' : 'Back to all experiences'}
                    </button>

                    <div className="bg-stone-900 border border-amber-500/30 rounded-xl p-3.5 space-y-1">
                      <span className="text-[10px] bg-amber-950 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold">
                        {selectedExperience.badge}
                      </span>
                      <h4 className="font-bold text-base text-amber-100 mt-1">{selectedExperience.title}</h4>
                      <p className="text-xs text-stone-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" /> {selectedExperience.location}
                      </p>
                      <p className="text-xs text-emerald-400 flex items-center gap-1 pt-1 font-medium">
                        <HeartHandshake className="w-3.5 h-3.5" /> Master Artisan: {selectedExperience.artisanName}
                      </p>
                    </div>

                    {/* Form Controls */}
                    <div className="space-y-3 bg-stone-800/60 border border-stone-700/80 rounded-xl p-3.5">
                      {/* Date & Slot */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-amber-300 block mb-1">
                            {t.selectDate || 'Select Date'}
                          </label>
                          <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-amber-300 block mb-1">
                            {t.selectSlot || 'Select Time Slot'}
                          </label>
                          <select
                            value={bookingSlot}
                            onChange={(e) => setBookingSlot(e.target.value)}
                            className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                          >
                            <option value="Morning (08:30 AM – 01:30 PM)">Morning (08:30 AM – 01:30 PM)</option>
                            <option value="Full Day (08:30 AM – 06:30 PM)">Full Day (08:30 AM – 06:30 PM)</option>
                            <option value="Afternoon (02:00 PM – 07:00 PM)">Afternoon (02:00 PM – 07:00 PM)</option>
                          </select>
                        </div>
                      </div>

                      {/* Traveler Counts */}
                      <div>
                        <label className="text-xs font-semibold text-amber-300 block mb-1.5">
                          {t.travelersLabel || 'Travelers'}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-stone-900 p-2 rounded-lg border border-stone-700 text-center">
                            <span className="text-[11px] text-stone-400 block">{t.adultsLabel || (safeLang === 'hi' ? 'वयस्क' : 'Adults')}</span>
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <button
                                onClick={() => setTravelerCounts((p) => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                                className="w-5 h-5 bg-stone-800 rounded text-stone-300 flex items-center justify-center font-bold"
                              >
                                -
                              </button>
                              <span className="font-bold text-stone-100 text-xs">{travelerCounts.adults}</span>
                              <button
                                onClick={() => setTravelerCounts((p) => ({ ...p, adults: p.adults + 1 }))}
                                className="w-5 h-5 bg-stone-800 rounded text-stone-300 flex items-center justify-center font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="bg-stone-900 p-2 rounded-lg border border-stone-700 text-center">
                            <span className="text-[11px] text-stone-400 block">{t.childrenLabel || (safeLang === 'hi' ? 'बच्चे' : 'Children')}</span>
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <button
                                onClick={() => setTravelerCounts((p) => ({ ...p, children: Math.max(0, p.children - 1) }))}
                                className="w-5 h-5 bg-stone-800 rounded text-stone-300 flex items-center justify-center font-bold"
                              >
                                -
                              </button>
                              <span className="font-bold text-stone-100 text-xs">{travelerCounts.children}</span>
                              <button
                                onClick={() => setTravelerCounts((p) => ({ ...p, children: p.children + 1 }))}
                                className="w-5 h-5 bg-stone-800 rounded text-stone-300 flex items-center justify-center font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="bg-stone-900 p-2 rounded-lg border border-stone-700 text-center">
                            <span className="text-[11px] text-stone-400 block">{t.seniorsLabel || (safeLang === 'hi' ? 'वरिष्ठ' : 'Seniors (60+)')}</span>
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <button
                                onClick={() => setTravelerCounts((p) => ({ ...p, seniors: Math.max(0, p.seniors - 1) }))}
                                className="w-5 h-5 bg-stone-800 rounded text-stone-300 flex items-center justify-center font-bold"
                              >
                                -
                              </button>
                              <span className="font-bold text-stone-100 text-xs">{travelerCounts.seniors}</span>
                              <button
                                onClick={() => setTravelerCounts((p) => ({ ...p, seniors: p.seniors + 1 }))}
                                className="w-5 h-5 bg-stone-800 rounded text-stone-300 flex items-center justify-center font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Meal & Accessibility */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-amber-300 block mb-1">
                            {t.mealPreferencePrompt || 'Meal Option'}
                          </label>
                          <select
                            value={selectedMeal}
                            onChange={(e) => setSelectedMeal(e.target.value)}
                            className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                          >
                            <option value="Pure Vegetarian Heritage Thali">{safeLang === 'hi' ? 'शुद्ध शाकाहारी पारंपरिक थाली' : 'Pure Vegetarian Heritage Thali'}</option>
                            <option value="Sattvic (No Onion/No Garlic)">{safeLang === 'hi' ? 'सात्विक (बिना प्याज/लहसुन)' : 'Sattvic (No Onion/No Garlic)'}</option>
                            <option value="Gluten-free Millets / Nachni">{safeLang === 'hi' ? 'बाजरा / नाचनी मिलेट आहार' : 'Gluten-free Millets / Nachni'}</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-amber-300 block mb-1">
                            {t.accessibilityNeedsPrompt || 'Mobility Assistance'}
                          </label>
                          <select
                            onChange={(e) => {
                              if (e.target.value && !specialAccessibility.includes(e.target.value)) {
                                setSpecialAccessibility((p) => [...p, e.target.value]);
                              }
                            }}
                            className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                          >
                            <option value="">{safeLang === 'hi' ? 'मानक पैदल चलना' : 'None / Standard Walking'}</option>
                            <option value="Wheelchair Assistance">{safeLang === 'hi' ? 'व्हीलचेयर सहायता' : 'Wheelchair Assistance'}</option>
                            <option value="Ground-floor Step-free">{safeLang === 'hi' ? 'समतल सीढ़ी-मुक्त मार्ग' : 'Ground-floor Step-free'}</option>
                            <option value="Senior Rest Support">{safeLang === 'hi' ? 'वरिष्ठ नागरिक विश्राम सहायता' : 'Senior Rest Support'}</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="bg-stone-950 border border-amber-500/30 rounded-xl p-3.5 space-y-2">
                      <h5 className="font-bold text-xs text-amber-200 uppercase tracking-wider">
                        {t.priceSummaryTitle || 'Price Breakdown & Artisan Guarantee'}
                      </h5>

                      <div className="flex justify-between text-xs text-stone-300">
                        <span>
                          {selectedExperience.title.slice(0, 26)}... (₹{selectedExperience.priceINR} × {totalTravelers})
                        </span>
                        <span className="font-mono">₹{currentTotalCost}</span>
                      </div>

                      <div className="flex justify-between text-xs text-emerald-400 font-medium">
                        <span className="flex items-center gap-1">
                          <HeartHandshake className="w-3.5 h-3.5" /> {safeLang === 'hi' ? '८५% मास्टर शिल्पकार को सीधा भुगतान' : (t.directArtisanPayoutNotice || '85% Direct Master Artisan Remuneration')}
                        </span>
                        <span className="font-mono font-bold">₹{currentArtisanCut}</span>
                      </div>

                      <div className="flex justify-between text-xs text-stone-400">
                        <span>{t.platformFee || (safeLang === 'hi' ? 'कलाVerse मंच कमीशन (15%)' : 'Platform Commission (15%)')}</span>
                        <span className="font-mono">₹{currentTotalCost - currentArtisanCut}</span>
                      </div>

                      <div className="pt-2 border-t border-stone-800 flex justify-between items-center">
                        <span className="font-bold text-stone-100 text-sm">{t.totalAmount || (safeLang === 'hi' ? 'कुल देय राशि' : 'Total Payable')}</span>
                        <span className="font-bold text-amber-400 text-lg font-mono">₹{currentTotalCost}</span>
                      </div>
                    </div>

                    {/* Payment Method Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-amber-300 block">
                        {t.paymentMethodTitle || 'Choose Payment Method'}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'upi', label: 'UPI (GPay/BHIM)' },
                          { id: 'card', label: 'Card (RuPay/Visa)' },
                          { id: 'netbanking', label: 'NetBanking' }
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id as any)}
                            className={`p-2 rounded-lg border text-xs text-center transition ${
                              paymentMethod === method.id
                                ? 'bg-amber-950 border-amber-500 text-amber-200 font-bold'
                                : 'bg-stone-900 border-stone-700 text-stone-400'
                            }`}
                          >
                            {method.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Authorize button */}
                    <button
                      disabled={isProcessingPayment}
                      onClick={handleConfirmReservation}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-600 text-stone-950 font-extrabold text-sm hover:opacity-95 transition shadow-xl flex items-center justify-center gap-2"
                    >
                      {isProcessingPayment ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                          <span>{t.processingPayment || 'Authorizing Direct Artisan Payout...'}</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4" />
                          <span>{t.confirmAndPayBtn || 'Pay ₹' + currentTotalCost + ' & Issue Cultural Pass'}</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Confirmed Pass Display */}
                {confirmedPass && (
                  <div className="bg-gradient-to-b from-stone-900 to-amber-950/40 border-2 border-amber-500/60 rounded-2xl p-5 space-y-4 shadow-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                        {safeLang === 'hi' ? 'आधिकारिक सांस्कृतिक ई-पास' : 'Official Cultural E-Pass'}
                      </span>
                      <h4 className="text-lg font-bold text-stone-100 mt-0.5">{confirmedPass.experienceTitle}</h4>
                      <p className="text-xs text-stone-400">{confirmedPass.location}</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl w-fit mx-auto shadow-md">
                      <img
                        src={confirmedPass.qrCodeUrl}
                        alt="Booking QR Code"
                        className="w-36 h-36 mx-auto"
                      />
                      <span className="text-[10px] text-stone-800 font-mono font-bold block mt-1">
                        {confirmedPass.bookingCode}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left text-xs bg-stone-950/80 p-3 rounded-xl border border-stone-800">
                      <div>
                        <span className="text-[10px] text-stone-400 block">{safeLang === 'hi' ? 'तारीख एवं स्लॉट:' : 'Date & Slot:'}</span>
                        <span className="font-semibold text-amber-200">{confirmedPass.date}</span>
                        <span className="text-[10px] text-stone-400 block">{confirmedPass.timeSlot}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block">{safeLang === 'hi' ? 'यात्री:' : 'Travelers:'}</span>
                        <span className="font-semibold text-stone-200">{confirmedPass.totalTravelers} {safeLang === 'hi' ? 'व्यक्ति' : 'Person(s)'}</span>
                        <span className="text-[10px] text-emerald-400 block">₹{confirmedPass.artisanDirectPayoutINR} {safeLang === 'hi' ? 'कारीगर को' : 'to Artisan'}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          window.print();
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700 flex items-center justify-center gap-1.5 transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        {safeLang === 'hi' ? 'पास प्रिंट / सुरक्षित करें' : (t.downloadPassBtn || 'Print / Save Pass')}
                      </button>

                      <button
                        onClick={() => {
                          setConfirmedPass(null);
                          setSelectedExperience(null);
                          setActiveTab('passes');
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition"
                      >
                        {safeLang === 'hi' ? 'मेरे पास देखें' : 'View in My Passes'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: MY PASSES */}
            {activeTab === 'passes' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-stone-100 flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-amber-400" />
                    {safeLang === 'hi' ? 'मेरे सांस्कृतिक पास एवं आरक्षण' : (t.tabMyBookings || 'My Cultural Passes & Reservations')}
                  </h4>
                  <span className="text-xs text-amber-400 font-mono">
                    {userProfile.tourBookings?.length || 0} {safeLang === 'hi' ? 'पास' : 'Pass(es)'}
                  </span>
                </div>

                {(!userProfile.tourBookings || userProfile.tourBookings.length === 0) && (
                  <div className="text-center py-12 px-4 bg-stone-900/60 rounded-2xl border border-stone-800 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-500 mx-auto flex items-center justify-center">
                      <Ticket className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-stone-300 text-sm">
                      {safeLang === 'hi' ? 'अभी कोई आरक्षित पास नहीं है' : safeLang === 'ta' ? 'இன்னும் முன்பதிவு செய்யப்பட்ட பாஸ்கள் இல்லை' : safeLang === 'te' ? 'ఇంకా రిజర్వ్ చేయబడిన పాస్‌లు లేవు' : 'No Cultural Passes Yet'}
                    </h5>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto">
                      {safeLang === 'hi'
                        ? 'कलाTour के सत्यापित मास्टर शिल्पकार अनुभवों को आरक्षित करें। आपका डिजिटल क्यूआर पास यहां दिखाई देगा।'
                        : safeLang === 'ta'
                        ? 'அங்கீகரிக்கப்பட்ட கலைப்பயணங்களை முன்பதிவு செய்யுங்கள். உங்கள் டிஜிட்டல் பாஸ் இங்கே தோன்றும்.'
                        : safeLang === 'te'
                        ? 'ధృవీకరించబడిన కళా యాత్రలను బుక్ చేసుకోండి. మీ డిజిటల్ పాస్ ఇక్కడ కనిపిస్తుంది.'
                        : 'Explore authentic KalaTour experiences to book your cultural visits. Your digital QR passes will appear here.'}
                    </p>
                    <button
                      onClick={() => setActiveTab('book')}
                      className="mt-2 text-xs bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-4 py-2 rounded-xl transition"
                    >
                      {safeLang === 'hi' ? 'शिल्प अनुभव ब्राउज़ करें' : safeLang === 'ta' ? 'அனுபவங்களை உலாவுங்கள்' : safeLang === 'te' ? 'అనుభవాలను బ్రౌజ్ చేయండి' : 'Browse Experiences'}
                    </button>
                  </div>
                )}

                {userProfile.tourBookings && userProfile.tourBookings.length > 0 && (
                  <div className="space-y-3">
                    {userProfile.tourBookings.map((pass) => (
                      <div
                        key={pass.id}
                        className="bg-stone-900/90 border border-amber-500/30 rounded-xl p-3.5 space-y-3 shadow-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                              {safeLang === 'hi' ? 'पुष्टीकृत एवं भुगतान संपन्न' : safeLang === 'ta' ? 'உறுதிசெய்யப்பட்டது மற்றும் செலுத்தப்பட்டது' : safeLang === 'te' ? 'ధృవీకరించబడింది & చెల్లించబడింది' : 'Confirmed & Paid'}
                            </span>
                            <h5 className="font-bold text-stone-100 text-sm mt-1">{pass.experienceTitle}</h5>
                            <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-amber-500" /> {pass.location}
                            </p>
                          </div>
                          <div className="bg-white p-1.5 rounded-lg shrink-0">
                            <img src={pass.qrCodeUrl} alt="Pass QR" className="w-16 h-16" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs bg-stone-950 p-2.5 rounded-lg border border-stone-800">
                          <div>
                            <span className="text-[10px] text-stone-400 block">{safeLang === 'hi' ? 'तारीख एवं समय:' : safeLang === 'ta' ? 'தேதி & நேரம்:' : safeLang === 'te' ? 'తేదీ & సమయం:' : 'Date & Time:'}</span>
                            <span className="font-semibold text-amber-200">{pass.date}</span>
                            <span className="text-[10px] text-stone-400 block">{pass.timeSlot}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-stone-400 block">{safeLang === 'hi' ? 'संदर्भ संख्या:' : safeLang === 'ta' ? 'குறிப்பு எண்:' : safeLang === 'te' ? 'రిఫరెన్స్ నం:' : 'Reference:'}</span>
                            <span className="font-mono text-amber-400 font-bold">{pass.bookingCode}</span>
                            <span className="text-[10px] text-emerald-400 block">{safeLang === 'hi' ? '८५% कारीगर को सीधा भुगतान (१५% शुल्क)' : safeLang === 'ta' ? '85% கலைஞருக்கு நேரடி வருவாய்' : safeLang === 'te' ? '85% కళాకారుడికి ప్రత్యక్ష చెల్లింపు' : '85% Paid to Artisan (15% Commission)'}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-xs pt-1">
                          <span className="text-stone-400">
                            {safeLang === 'hi' ? 'यात्री:' : safeLang === 'ta' ? 'பயணிகள்:' : safeLang === 'te' ? 'ప్రయాణికులు:' : 'Travelers:'} <strong className="text-stone-200">{pass.totalTravelers}</strong> | {safeLang === 'hi' ? 'कुल:' : safeLang === 'ta' ? 'மொத்தம்:' : safeLang === 'te' ? 'మొత్తం:' : 'Total:'} <strong className="text-amber-400 font-mono">₹{pass.totalAmountINR}</strong>
                          </span>
                          <button
                            onClick={() => window.print()}
                            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                          >
                            <Download className="w-3.5 h-3.5" /> {safeLang === 'hi' ? 'ई-पास प्रिंट करें' : safeLang === 'ta' ? 'இ-பாஸ் அச்சிடுக' : safeLang === 'te' ? 'ఈ-పాస్ ప్రింట్ చేయండి' : (t.downloadPassBtn || 'Print E-Pass')}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
