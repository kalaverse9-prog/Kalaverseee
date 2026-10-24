import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, BookOpen, Layers, Compass, Loader2, Feather, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SupportedLanguage, getTranslations, getSathiInitialMessage, getSathiQuickPrompts } from '../data/translations';
import { STATE_NAME_TRANSLATIONS, ART_FORM_TRANSLATIONS } from '../data/localizedContent';
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

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  artFormTag?: string;
}

interface KalaSathiProps {
  language?: SupportedLanguage;
}

export const KalaSathi: React.FC<KalaSathiProps> = ({ language = 'en' }) => {
  const t = getTranslations(language);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init_1',
      role: 'assistant',
      content: getSathiInitialMessage(language),
      timestamp: 'Just now'
    }
  ]);

  // Update initial message if language changes and no user interaction has occurred
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === 'assistant') {
        return [
          {
            id: 'init_1',
            role: 'assistant',
            content: getSathiInitialMessage(language),
            timestamp: 'Just now'
          }
        ];
      }
      return prev;
    });
  }, [language]);

  const [inputQuery, setInputQuery] = useState('');
  const [selectedArtForm, setSelectedArtForm] = useState<string>('Madhubani / Mithila');
  const [selectedState, setSelectedState] = useState<string>('Bihar');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [activeStreamingId, setActiveStreamingId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isStreaming]);

  const quickPrompts = getSathiQuickPrompts(language);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isLoading || isStreaming) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      artFormTag: selectedArtForm
    };

    const assistantMsgId = `ai_${Date.now()}`;
    const assistantPlaceholder: ChatMessage = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      artFormTag: selectedArtForm
    };

    setMessages((prev) => [...prev, userMsg, assistantPlaceholder]);
    setInputQuery('');
    setIsLoading(true);
    setIsStreaming(true);
    setActiveStreamingId(assistantMsgId);

    try {
      const response = await fetch('/api/ai/kalasathi/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: query,
          selectedState,
          selectedArtForm,
          language,
          conversationHistory: messages
            .filter((m) => m.content.trim())
            .map((m) => ({
              role: m.role,
              content: m.content
            }))
        })
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data: ')) continue;
          try {
            const data = JSON.parse(trimmed.slice(6));
            if (data.chunk) {
              setIsLoading(false); // First chunk arrived, switch to streaming mode
              accumulated += data.chunk;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsgId
                    ? {
                        ...m,
                        content: accumulated,
                        artFormTag: data.artForm || m.artFormTag
                      }
                    : m
                )
              );
            }
            if (data.done) {
              setIsStreaming(false);
              setActiveStreamingId(null);
            }
          } catch (e) {
            // Ignore parse errors on partial chunks
          }
        }
      }

      if (buffer.trim().startsWith('data: ')) {
        try {
          const data = JSON.parse(buffer.trim().slice(6));
          if (data.chunk) {
            accumulated += data.chunk;
          }
        } catch (e) {
          // Ignore
        }
      }

      if (!accumulated.trim()) {
        accumulated = language === 'hi'
          ? 'नमस्ते! भारतीय पारंपरिक कला, तकनीकों या रूपांकनों के बारे में कोई भी प्रश्न पूछें।'
          : 'Namaste! Please ask any question about Indian traditional arts, techniques, or sacred motifs.';
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsgId
            ? {
                ...m,
                content: accumulated
              }
            : m
        )
      );
    } catch (err: any) {
      try {
        // Fallback gracefully to non-streaming endpoint if streaming is interrupted
        const fallbackRes = await fetch('/api/ai/kalasathi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userQuery: query,
            selectedState,
            selectedArtForm,
            language,
            conversationHistory: messages
              .filter((m) => m.content.trim())
              .map((m) => ({
                role: m.role,
                content: m.content
              }))
          })
        });
        const fbData = await fallbackRes.json();
        if (fbData.reply) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsgId
                ? {
                    ...m,
                    content: fbData.reply,
                    artFormTag: fbData.artForm || m.artFormTag
                  }
                : m
            )
          );
          return;
        }
      } catch (fbErr) {
        // Continue to user message
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsgId
            ? {
                ...m,
                content: m.content
                  ? m.content
                  : language === 'hi'
                  ? 'नमस्ते! मैं आपका सांस्कृतिक मार्गदर्शक कलासाथी हूँ। पारंपरिक भारतीय कलाओं (मधुबनी, वारली, पिछवाई, कलमकारी, पट्टचित्र आदि), तकनीकों या प्राकृतिक रंगों के बारे में कोई भी प्रश्न पूछें।'
                  : 'Namaste! I am KalaSathi, your traditional art mentor. Please ask any question about authentic Indian traditional arts, master techniques, natural pigments, or sacred motifs.'
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      setActiveStreamingId(null);
    }
  };

  const safeLang = (language in STATE_NAME_TRANSLATIONS ? language : 'en') as SupportedLanguage;

  const ART_FORM_OPTIONS = [
    { id: 'Madhubani / Mithila Painting', stateKey: 'Bihar', label: 'Madhubani / Mithila (Bihar)' },
    { id: 'Srikalahasti Kalamkari', stateKey: 'Andhra Pradesh', label: 'Srikalahasti Kalamkari (Andhra)' },
    { id: 'Warli Tribal Folk Art', stateKey: 'Maharashtra', label: 'Warli Folk Art (Maharashtra)' },
    { id: 'Pichwai & Miniature Painting', stateKey: 'Rajasthan', label: 'Pichwai & Miniature (Rajasthan)' },
    { id: 'Raghurajpur Pattachitra', stateKey: 'Odisha', label: 'Raghurajpur Pattachitra (Odisha)' },
    { id: 'Tibetan-Indian Thangka Scroll Art', stateKey: 'Sikkim', label: 'Thangka Scroll Art (Sikkim)' },
    { id: 'Mysore Gold Gesso Painting', stateKey: 'Karnataka', label: 'Mysore Gold Gesso (Karnataka)' },
    { id: 'Thanjavur (Tanjore) 24K Gemstone Art', stateKey: 'Tamil Nadu', label: 'Thanjavur Tanjore (Tamil Nadu)' },
    { id: 'Kangra Pahari Miniature', stateKey: 'Himachal Pradesh', label: 'Kangra Pahari Miniature (Himachal)' },
    { id: 'Gond Dotted Tribal Painting', stateKey: 'Madhya Pradesh', label: 'Gond Dotted Art (Madhya Pradesh)' },
    { id: 'Kutch Lippan Mud & Mirror Art', stateKey: 'Gujarat', label: 'Lippan & Rogan Art (Gujarat)' },
    { id: 'Cheriyal Narrative Scroll Painting', stateKey: 'Telangana', label: 'Cheriyal Scroll (Telangana)' }
  ];

  const STATE_OPTIONS = [
    { id: 'Bihar', sub: 'Mithila & Madhubani' },
    { id: 'Andhra Pradesh', sub: 'Kalamkari' },
    { id: 'Maharashtra', sub: 'Warli Tribal' },
    { id: 'Rajasthan', sub: 'Pichwai & Miniature' },
    { id: 'Odisha', sub: 'Raghurajpur Pattachitra' },
    { id: 'Tamil Nadu', sub: 'Tanjore Glass/Gold' },
    { id: 'Karnataka', sub: 'Mysore Gold Gesso' },
    { id: 'West Bengal', sub: 'Kalighat & Terracotta' },
    { id: 'Madhya Pradesh', sub: 'Gond Painting' },
    { id: 'Gujarat', sub: 'Rogan Art & Lippan Kaam' },
    { id: 'Telangana', sub: 'Cheriyal Scroll' },
    { id: 'Kerala', sub: 'Temple Murals & Kalamezhuthu' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Eye-catching Traditional Header Banner with Motifs */}
      <SectionHeaderBanner
        title={t.sathiTitle}
        subtitle={t.sathiSubtitle}
        tag={t.sathiGuruMentorBadge || 'AI Cultural Guru & Heritage Mentor'}
        themeColor="indigo"
        icon={<PeacockMotif size={36} color="#38BDF8" accentColor="#34D399" />}
        rightBadge={
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wider text-[#FEF08A] font-bold">
              {t.sathiTraditionArchive || (language === 'hi' ? 'कला परंपरा अभिलेखागार' : 'Kala Parampara Archive')}
            </div>
            <div className="text-sm font-extrabold text-white">
              {t.sathiLivingLineages || (language === 'hi' ? '३५+ जीवंत भारतीय कला परंपराएं' : '35+ Living Indian Lineages')}
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side: Art Form & Region Selectors + Quick Prompts with Traditional Card Design */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 border-2 border-[#F59E0B]/50 shadow-md space-y-4 relative overflow-hidden">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#1E3A8A] text-sm flex items-center gap-2">
                <LotusMotif size={18} color="#F59E0B" secondaryColor="#FB7185" />
                <span>{t.sathiSelectArtForm}</span>
              </h3>
              <span className="text-[10px] bg-amber-100 text-[#B45309] font-bold px-2 py-0.5 rounded-full">
                GI Heritage
              </span>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#2D2D2D]/70 block mb-1">
                {t.sathiSelectStyleLabel}
              </label>
              <select
                value={selectedArtForm}
                onChange={(e) => setSelectedArtForm(e.target.value)}
                className="w-full text-xs font-semibold bg-[#FFFBEB] border-2 border-[#F59E0B]/40 rounded-xl p-2.5 text-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] transition-all"
              >
                {ART_FORM_OPTIONS.map((opt) => {
                  const locArt = ART_FORM_TRANSLATIONS[safeLang]?.[opt.id] || opt.id;
                  const locState = STATE_NAME_TRANSLATIONS[safeLang]?.[opt.stateKey] || opt.stateKey;
                  return (
                    <option key={opt.id} value={opt.id}>
                      {locArt} ({locState})
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#2D2D2D]/70 block mb-1">
                {t.sathiSelectState}
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full text-xs font-semibold bg-[#FFFBEB] border-2 border-[#F59E0B]/40 rounded-xl p-2.5 text-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] transition-all"
              >
                {STATE_OPTIONS.map((opt) => {
                  const locState = STATE_NAME_TRANSLATIONS[safeLang]?.[opt.id] || opt.id;
                  return (
                    <option key={opt.id} value={opt.id}>
                      {locState} ({opt.sub})
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pt-2 border-t border-stone-100">
              <VineCreeperBorder color="#059669" flowerColor="#F59E0B" />
            </div>
          </div>

          {/* Quick Prompts with traditional paisley chips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-[#F59E0B]/40 shadow-sm space-y-3 relative">
            <h4 className="text-xs font-extrabold text-[#B45309] uppercase tracking-wider flex items-center gap-2">
              <PaisleyMotif size={18} color="#D97706" />
              <span>{t.sathiQuickPromptsTitle}</span>
            </h4>
            <div className="space-y-2">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(p.query)}
                  className="w-full text-left p-3 rounded-2xl bg-white border border-[#F59E0B]/30 hover:border-[#1E3A8A] hover:bg-amber-100/50 text-xs font-bold text-[#1E3A8A] transition-all shadow-2xs flex items-start gap-2 group"
                >
                  <span className="shrink-0 text-base">{p.label.split(' ')[0]}</span>
                  <span className="line-clamp-2 leading-relaxed">{p.label.substring(p.label.indexOf(' ') + 1)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Rich Conversational Chat Box */}
        <div className="lg:col-span-3 flex flex-col h-[650px] bg-white rounded-3xl border-3 border-[#F59E0B] shadow-xl overflow-hidden relative">
          <OrnateCorner position="top-left" color="#F59E0B" size={28} />
          <OrnateCorner position="top-right" color="#F59E0B" size={28} />
          <OrnateCorner position="bottom-left" color="#F59E0B" size={28} />
          <OrnateCorner position="bottom-right" color="#F59E0B" size={28} />

          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#1E1B4B] p-4 text-[#FFF8E7] flex items-center justify-between border-b-2 border-[#F59E0B]/40 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                <LotusMotif size={22} color="#F59E0B" secondaryColor="#FB7185" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                  <span>{t.kalasathi || 'KalaSathi AI Guru'}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[11px] text-stone-200">
                  <span className="text-stone-300">{language === 'hi' ? 'कला परंपरा केंद्र:' : language === 'ta' ? 'பாரம்பரிய மையம்:' : 'Tradition Focus:'}</span> <strong className="text-[#FEF08A]">{ART_FORM_TRANSLATIONS[safeLang]?.[selectedArtForm] || selectedArtForm}</strong> • {STATE_NAME_TRANSLATIONS[safeLang]?.[selectedState] || selectedState}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMessages([messages[0]])}
              className="text-xs bg-white/10 hover:bg-white/20 text-[#FFF8E7] px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-bold border border-white/20"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'चैट साफ़ करें' : language === 'ta' ? 'அரட்டையை அழிக்கவும்' : 'Clear Chat'}</span>
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#FFFDF5] to-[#FFFBEB]/60 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-stone-300">
              <MandalaWatermark size={320} opacity={0.06} />
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#1E1B4B] border-2 border-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-md">
                    <LotusMotif size={18} color="#FEF08A" secondaryColor="#FB7185" />
                  </div>
                )}

                <div
                  className={`max-w-2xl rounded-3xl p-5 shadow-sm space-y-2 border-2 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#1E3A8A] to-[#1E1B4B] text-[#FFF8E7] rounded-tr-xs border-[#F59E0B]'
                      : 'bg-white text-[#2D2D2D] border-[#F59E0B]/40 rounded-tl-xs shadow-md'
                  }`}
                >
                  <div className="text-xs font-semibold flex items-center justify-between border-b border-black/10 pb-1.5">
                    <span className={msg.role === 'user' ? 'text-[#FEF08A]' : 'text-[#1E3A8A] font-extrabold flex items-center gap-1.5'}>
                      {msg.role === 'assistant' && <PeacockMotif size={16} color="#0284C7" accentColor="#10B981" />}
                      {msg.role === 'user'
                        ? (language === 'hi' ? 'आप (चित्रकार अन्वेषक)' : language === 'ta' ? 'நீங்கள் (கலை ஆய்வாளர்)' : 'You (Chitrakar Explorer)')
                        : (language === 'hi' ? 'कला साथी एआई गुरु' : language === 'ta' ? 'கலாசாதி AI குரு' : 'KalaSathi AI Cultural Guru')}
                    </span>
                    <span className={`text-[10px] ${msg.role === 'user' ? 'text-stone-300' : 'text-stone-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.content === '' && (isLoading || isStreaming) && msg.id === activeStreamingId ? (
                    <div className="flex items-center gap-2 py-1.5 text-xs text-amber-800 font-semibold animate-pulse">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />
                      <span>{language === 'hi' ? 'कला परंपरा और शास्त्रों से परामर्श जारी...' : 'Consulting classical treatises and oral folklore archives...'}</span>
                    </div>
                  ) : (
                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
                      {msg.content}
                      {msg.id === activeStreamingId && isStreaming && (
                        <span className="inline-block w-2 h-4 ml-1 bg-amber-500 animate-pulse align-middle rounded-xs" />
                      )}
                    </div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-9 h-9 rounded-2xl bg-[#F59E0B] text-[#1E1B4B] flex items-center justify-center shrink-0 font-extrabold text-sm border-2 border-[#1E3A8A] shadow-md">
                    क
                  </div>
                )}
              </div>
            ))}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Bar with Toran Border */}
          <div className="p-4 bg-white border-t-2 border-[#F59E0B]/40 relative">
            <div className="absolute -top-3 left-0 right-0">
              <VineCreeperBorder color="#059669" flowerColor="#F59E0B" />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-3 mt-1"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder={t.sathiPromptPlaceholder}
                disabled={isLoading || isStreaming}
                className="flex-1 bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#2D2D2D] font-medium focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] transition-all shadow-inner disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isLoading || isStreaming}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#1E1B4B] hover:opacity-95 disabled:opacity-50 text-[#FFF8E7] text-xs sm:text-sm font-extrabold flex items-center gap-2 border-2 border-[#F59E0B] shadow-md transition-all hover:scale-105 shrink-0"
              >
                <LotusMotif size={16} color="#FEF08A" secondaryColor="#FB7185" />
                <span className="hidden sm:inline">{t.sathiSendBtn}</span>
                <Send className="w-4 h-4 text-[#F59E0B]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
