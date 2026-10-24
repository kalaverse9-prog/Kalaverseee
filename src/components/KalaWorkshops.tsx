import React, { useState, useRef, useEffect } from 'react';
import { INITIAL_WORKSHOPS } from '../data/marketWorkshopsData';
import { Workshop, UserProfile } from '../types';
import {
  Calendar,
  Clock,
  Video,
  Award,
  Users,
  CheckCircle2,
  DollarSign,
  PlusCircle,
  Sparkles,
  X,
  ShieldCheck,
  Upload,
  Trash2,
  Camera,
  Lock,
  MessageSquare,
  Send,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { SupportedLanguage, getTranslations } from '../data/translations';
import {
  getLocalizedUI,
  getLocalizedWorkshop,
  ART_FORM_TRANSLATIONS,
  STATE_NAME_TRANSLATIONS
} from '../data/localizedContent';
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

export interface ArtistChatMessage {
  id: string;
  sender: 'user' | 'artist';
  text: string;
  timestamp: string;
}

const DEFAULT_MASTER_WORKSHOPS: Workshop[] = [
  {
    id: 'ws_madhubani_live_1',
    title: 'Madhubani Double-Line Kachni Masterclass',
    artisanName: 'Sunita Devi',
    artisanTitle: 'National Awardee Chitrakar',
    hostName: 'Sunita Devi',
    hostAvatar: '🪷',
    hostState: 'Bihar',
    state: 'Bihar',
    artForm: 'Madhubani / Mithila Painting',
    description: 'Learn the sacred ritual geometry of Kohbar and Matsya pairs using hand-carved bamboo nibs (kalam) and organic charcoal soot ink.',
    priceINR: 499,
    price: 499,
    date: '2026-10-28',
    time: '11:00 AM IST',
    duration: '90 Mins',
    seatsTotal: 25,
    seatsBooked: 18,
    registeredCount: 18,
    meetingLink: 'https://meet.google.com/kal-mith-art',
    imageUrl: '/assets/states/bihar.jpg'
  },
  {
    id: 'ws_kalamkari_live_2',
    title: 'Srikalahasti Freehand Kalam & Fermented Dyeing',
    artisanName: 'Venkata Raman',
    artisanTitle: 'GI Certified Master Craftsman',
    hostName: 'Venkata Raman',
    hostAvatar: '🎨',
    hostState: 'Andhra Pradesh',
    state: 'Andhra Pradesh',
    artForm: 'Kalamkari',
    description: 'Explore the 17-stage natural dyeing process with myrobalan nuts, iron rust-jaggery black resist ink, and date-palm bamboo pens.',
    priceINR: 699,
    price: 699,
    date: '2026-10-30',
    time: '04:00 PM IST',
    duration: '120 Mins',
    seatsTotal: 20,
    seatsBooked: 12,
    registeredCount: 12,
    meetingLink: 'https://meet.google.com/kal-srik-kala',
    imageUrl: '/assets/states/andhra_pradesh.jpg'
  },
  {
    id: 'ws_warli_live_3',
    title: 'Warli Sacred Tarpa Ritual Geometry & Murals',
    artisanName: 'Jivya Soma Mashe Guild',
    artisanTitle: 'Heritage Folk Master',
    hostName: 'Jivya Soma Guild',
    hostAvatar: '🌾',
    hostState: 'Maharashtra',
    state: 'Maharashtra',
    artForm: 'Warli',
    description: 'Connect with tribal rhythms: painting the spiral Tarpa dance using rice paste ink over red geru clay canvas.',
    priceINR: 299,
    price: 299,
    date: '2026-11-02',
    time: '05:30 PM IST',
    duration: '75 Mins',
    seatsTotal: 30,
    seatsBooked: 22,
    registeredCount: 22,
    meetingLink: 'https://meet.google.com/kal-warl-fest',
    imageUrl: '/assets/states/maharashtra.jpg'
  }
];

interface KalaWorkshopsProps {
  currentUser: UserProfile;
  language?: SupportedLanguage;
  onOpenPlanModal: () => void;
}

export const KalaWorkshops: React.FC<KalaWorkshopsProps> = ({
  currentUser,
  language = 'en',
  onOpenPlanModal
}) => {
  const t = getTranslations(language);
  const ui = getLocalizedUI(language);
  const safeLang = (language in STATE_NAME_TRANSLATIONS ? language : 'en') as SupportedLanguage;

  const [workshops, setWorkshops] = useState<Workshop[]>(() => {
    try {
      const saved = localStorage.getItem('kalaverse_workshops');
      if (saved) {
        const parsed: Workshop[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_MASTER_WORKSHOPS;
    } catch {
      return DEFAULT_MASTER_WORKSHOPS;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('kalaverse_workshops', JSON.stringify(workshops));
    } catch {
      // ignore
    }
  }, [workshops]);

  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [showHostModal, setShowHostModal] = useState<boolean>(false);
  const [activeSuccessWorkshop, setActiveSuccessWorkshop] = useState<Workshop | null>(null);

  // Chat with Artist State
  const [chatWorkshop, setChatWorkshop] = useState<Workshop | null>(null);
  const [chatMessages, setChatMessages] = useState<ArtistChatMessage[]>([]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isArtistTyping, setIsArtistTyping] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Load chat messages when opening a chat with an artist
  useEffect(() => {
    if (chatWorkshop) {
      const savedChat = localStorage.getItem(`kalaverse_chat_${chatWorkshop.id}`);
      if (savedChat) {
        try {
          setChatMessages(JSON.parse(savedChat));
          return;
        } catch {
          // ignore
        }
      }
      // Initial greeting from artisan
      const artistName = chatWorkshop.artisanName || chatWorkshop.hostName || 'Master Artisan';
      const initial: ArtistChatMessage[] = [
        {
          id: `msg_welcome_${Date.now()}`,
          sender: 'artist',
          text: `Namaste! I am ${artistName}. Welcome to the ${chatWorkshop.artForm} atelier. Feel free to ask me about our traditional tools, pigments, wasli paper, or the workshop flow. How may I guide you today?`,
          timestamp: 'Just now'
        }
      ];
      setChatMessages(initial);
      localStorage.setItem(`kalaverse_chat_${chatWorkshop.id}`, JSON.stringify(initial));
    }
  }, [chatWorkshop]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatWorkshop && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isArtistTyping]);

  const handleSendChatMessage = (textToSend?: string) => {
    const text = (textToSend || chatInput).trim();
    if (!text || !chatWorkshop) return;

    const userMsg: ArtistChatMessage = {
      id: `msg_user_${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    const updated = [...chatMessages, userMsg];
    setChatMessages(updated);
    setChatInput('');
    setIsArtistTyping(true);

    const artistName = chatWorkshop.artisanName || chatWorkshop.hostName || 'Master Artisan';
    const artForm = chatWorkshop.artForm;

    // Simulate artisan response
    setTimeout(() => {
      let reply = `Thank you for asking! In our traditional ${artForm} practice, every line and motif carries spiritual intention. I look forward to guiding you live during our atelier!`;

      const lower = text.toLowerCase();
      if (lower.includes('material') || lower.includes('prepare') || lower.includes('bring') || lower.includes('require')) {
        reply = `For our ${artForm} atelier, you will need a smooth sheet of thick paper (or handmade wasli), a fine round brush (size 0 or 1) or bamboo nib, and water-based pigments (or watercolor paints). If you don't have handmade wasli, 300gsm watercolor paper works wonderfully!`;
      } else if (lower.includes('beginner') || lower.includes('experience') || lower.includes('start')) {
        reply = `Yes, absolutely! This atelier is warmly crafted for beginners and learners of all levels. We will start from holding the brush/kalam, practicing basic pressure lines, and completing a sacred authentic motif together step-by-step.`;
      } else if (lower.includes('record') || lower.includes('certificate') || lower.includes('miss')) {
        reply = `Yes! All registered participants receive lifetime access to the atelier video recording within 24 hours, plus an official KalaVerse Certificate of Traditional Heritage signed by our guild.`;
      } else if (lower.includes('meeting') || lower.includes('link') || lower.includes('join') || lower.includes('zoom') || lower.includes('google')) {
        reply = `The live session will be conducted via Google Meet / Live Atelier. You can click the "Join" button right on the workshop card or use the link: ${chatWorkshop.meetingLink || 'https://meet.google.com/kal-atelier-live'}. I recommend joining 5 minutes early!`;
      } else if (lower.includes('time') || lower.includes('duration') || lower.includes('when')) {
        reply = `Our live atelier is scheduled for ${chatWorkshop.date} at ${chatWorkshop.time} for a duration of ${chatWorkshop.duration || '90 Mins'}. We will also have 15 minutes of live Q&A at the end!`;
      }

      const artistMsg: ArtistChatMessage = {
        id: `msg_art_${Date.now()}`,
        sender: 'artist',
        text: reply,
        timestamp: 'Just now'
      };

      const finalMessages = [...updated, artistMsg];
      setChatMessages(finalMessages);
      setIsArtistTyping(false);
      localStorage.setItem(`kalaverse_chat_${chatWorkshop.id}`, JSON.stringify(finalMessages));
    }, 800);
  };

  // New Workshop Form State (with Date, Time, Duration, Seats, Meeting Link & Cover Picture)
  const [newTitle, setNewTitle] = useState('');
  const [newArtForm, setNewArtForm] = useState('Madhubani / Mithila Painting');
  const [newPrice, setNewPrice] = useState('499');
  const [newDate, setNewDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [newTime, setNewTime] = useState('11:00 AM IST');
  const [newDuration, setNewDuration] = useState('90 Mins');
  const [newMaxSeats, setNewMaxSeats] = useState('30');
  const [newMeetingLink, setNewMeetingLink] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [uploadedWorkshopImage, setUploadedWorkshopImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const artForms = ['All', 'Madhubani', 'Warli', 'Pichwai', 'Pattachitra', 'Kalamkari', 'Tanjore', 'Gond', 'Mysore', 'Phulkari', 'Cheriyal'];

  const filteredWorkshops = workshops
    .filter((w) => {
      if (selectedFilter === 'All') return true;
      return w.artForm.toLowerCase().includes(selectedFilter.toLowerCase());
    })
    .map((w) => getLocalizedWorkshop(w, language));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedWorkshopImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedWorkshopImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteWorkshop = (wsId: string) => {
    setWorkshops((prev) => prev.filter((w) => w.id !== wsId));
  };

  const handleRegister = (workshop: Workshop) => {
    if (!registeredIds.includes(workshop.id)) {
      setRegisteredIds([...registeredIds, workshop.id]);
      setWorkshops((prev) =>
        prev.map((w) =>
          w.id === workshop.id
            ? { ...w, seatsBooked: (w.seatsBooked || 0) + 1, registeredCount: (w.registeredCount || 0) + 1 }
            : w
        )
      );
      setActiveSuccessWorkshop(workshop);
    }
  };

  const handleHostWorkshop = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser.plan !== 'business') {
      onOpenPlanModal();
      return;
    }

    const priceNum = parseInt(newPrice) || 0;
    const finalMeetingLink = newMeetingLink.trim() || 'https://meet.google.com/kal-live-art';
    const newWs: Workshop = {
      id: `custom_ws_${Date.now()}`,
      title: newTitle,
      artisanName: currentUser.name || 'Master Artisan',
      artisanTitle: currentUser.businessName || 'Verified Guild Master',
      hostName: currentUser.name || 'Master Artisan',
      hostState: currentUser.state || 'India',
      state: currentUser.state || 'India',
      artForm: newArtForm,
      priceINR: priceNum,
      price: priceNum,
      date: newDate,
      time: newTime,
      duration: newDuration,
      seatsTotal: parseInt(newMaxSeats) || 30,
      seatsBooked: 0,
      registeredCount: 0,
      description: newDescription,
      level: 'All Levels (Beginner to Advanced)',
      materialsProvided: ['Digital Linework Stencil', 'Sacred Motif Cheatsheet', 'Master Q&A Recording'],
      meetingLink: finalMeetingLink,
      imageUrl: uploadedWorkshopImage || undefined
    };

    setWorkshops([newWs, ...workshops]);
    setNewTitle('');
    setNewDescription('');
    setNewMeetingLink('');
    setUploadedWorkshopImage(null);
    setShowHostModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <SectionHeaderBanner
        title={t.wsTitle}
        subtitle={t.wsSubtitle}
        tag="Direct Guild Teaching & Live Interactive Ateliers"
        themeColor="indigo"
        icon={<PeacockMotif size={38} color="#38BDF8" accentColor="#F59E0B" />}
        rightBadge={
          <button
            type="button"
            onClick={() => {
              if (currentUser.plan !== 'business') {
                onOpenPlanModal();
              } else {
                setShowHostModal(true);
              }
            }}
            className="px-5 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            {currentUser.plan === 'business' ? (
              <>
                <LotusMotif size={16} color="#1E1B4B" secondaryColor="#E11D48" />
                <span>{t.wsHostBtn || 'Host Workshop'}</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-[#1E1B4B]" />
                <span>Host Workshop (Business Account Only)</span>
              </>
            )}
          </button>
        }
      />

      {/* Filter Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-3 border-[#F59E0B] shadow-lg flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {artForms.map((form) => {
            const locForm = form === 'All'
              ? (ui.allWorkshops || 'All Workshops')
              : (ART_FORM_TRANSLATIONS[safeLang]?.[form] || form);
            return (
              <button
                key={form}
                type="button"
                onClick={() => setSelectedFilter(form)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  selectedFilter === form
                    ? 'bg-[#1E3A8A] text-[#FFF8E7] shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {locForm}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-[#B45309] font-bold bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 shrink-0">
          {ui.directPayoutNotice || '85% Direct Artisan Payout'}
        </div>
      </div>

      {/* Workshops Grid */}
      {filteredWorkshops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((ws) => {
            const isBooked = registeredIds.includes(ws.id);
            const seatsLeft = (ws.seatsTotal || 30) - (ws.seatsBooked || ws.registeredCount || 0);

            return (
              <div
                key={ws.id}
                className="bg-white rounded-3xl border-3 border-[#F59E0B]/40 hover:border-[#1E3A8A] shadow-lg overflow-hidden flex flex-col justify-between transition-all group"
              >
                {/* Workshop Cover Picture */}
                {ws.imageUrl ? (
                  <div className="aspect-video w-full bg-stone-900 overflow-hidden relative">
                    <img
                      src={ws.imageUrl}
                      alt={ws.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-[21/9] w-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 text-center border-b border-stone-100">
                    <MandalaRosette size={40} color="#F59E0B" accentColor="#1E3A8A" />
                  </div>
                )}

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-amber-100 text-[#B45309]">
                      {ws.artForm}
                    </span>
                    <span className="text-xs font-bold text-stone-500">
                      📍 {ws.state}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] group-hover:text-[#F59E0B] transition-colors">
                    {ws.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {ws.description}
                  </p>

                  {/* Schedule Badges */}
                  <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{ws.date} • {ws.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{ui.durationLabel || 'Duration'}: {ws.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{seatsLeft > 0 ? `${seatsLeft} ${t.wsSeatsLeft}` : (ui.soldOutLabel || 'Sold Out')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span className="truncate">Live Atelier {ws.meetingLink ? '• Meeting Link Included' : ''}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price & Registration */}
                <div className="p-5 bg-gradient-to-r from-[#FFFDF5] to-[#FFFBEB] border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                      {ui.seatFeeLabel || 'Seat Fee'}
                    </div>
                    <div className="text-xl font-extrabold text-[#B45309]">
                      {ws.priceINR === 0 ? (ui.freeLabel || 'Free') : `₹${ws.priceINR || ws.price}`}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {ws.id.startsWith('custom_') && (
                      <button
                        type="button"
                        onClick={() => handleDeleteWorkshop(ws.id)}
                        className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                        title="Delete workshop"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setChatWorkshop(ws)}
                      className="px-3 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-[#B45309] text-xs font-bold flex items-center gap-1.5 transition-all hover:scale-105 border border-amber-300 shadow-xs cursor-pointer"
                      title={`Chat with ${ws.artisanName || ws.hostName || 'Artist'}`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#B45309]" />
                      <span>Chat with Artist</span>
                    </button>

                    {isBooked && ws.meetingLink && (
                      <a
                        href={ws.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-md transition-all hover:scale-105"
                        title="Join Live Atelier via Meeting Link"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Join</span>
                      </a>
                    )}

                    <button
                      type="button"
                      disabled={isBooked}
                      onClick={() => handleRegister(ws)}
                      className={`px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-all ${
                        isBooked
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] hover:scale-105 cursor-pointer'
                      }`}
                    >
                      {isBooked ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{t.wsBookedBadge}</span>
                        </>
                      ) : (
                        <>
                          <LotusMotif size={13} color="#FEF08A" secondaryColor="#FB7185" />
                          <span>{t.wsBookSeatBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 sm:p-16 border-3 border-dashed border-[#F59E0B]/50 text-center flex flex-col items-center justify-center space-y-4 shadow-sm relative overflow-hidden">
          <MandalaRosette size={72} color="#F59E0B" accentColor="#1E3A8A" />
          <div className="max-w-md space-y-2">
            {currentUser.plan !== 'business' && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#B45309] text-xs font-bold mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>Business Account Exclusive</span>
              </div>
            )}
            <h3 className="font-display font-extrabold text-xl text-[#1E3A8A]">
              {currentUser.plan === 'business'
                ? 'Workshops Hub Ready For Your Masterclasses'
                : 'Artisan Workshops & Masterclasses'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              {currentUser.plan === 'business'
                ? 'All previous workshops have been cleared. As a verified Business Account holder, you can host your own live interactive ateliers, set ticket fees, and upload custom pictures!'
                : 'All previous sample workshops have been cleared. Personal account members can attend and enroll in workshops. To host masterclasses, upload workshop pictures, and receive direct attendee ticket earnings, please switch to a Business Account.'}
            </p>
          </div>

          {currentUser.plan === 'business' ? (
            <button
              type="button"
              onClick={() => setShowHostModal(true)}
              className="px-6 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4 text-[#FEF08A]" />
              <span>Host Your First Masterclass (Upload Picture)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenPlanModal}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-[#1E1B4B] text-xs font-extrabold flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <Lock className="w-4 h-4 text-[#1E1B4B]" />
              <span>Switch to Business Account to Host Workshops</span>
            </button>
          )}
        </div>
      )}

      {/* Host Workshop Modal */}
      {showHostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] my-auto border-3 border-[#F59E0B] shadow-2xl flex flex-col relative overflow-hidden">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="shrink-0 flex items-center justify-between border-b border-stone-100 p-5 sm:p-6 pb-3 bg-white z-10">
              <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2">
                <LotusMotif size={20} color="#F59E0B" secondaryColor="#FB7185" />
                <span>{ui.hostMasterclassTitle || 'Host an Artisan Masterclass'}</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowHostModal(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleHostWorkshop} className="overflow-y-auto p-5 sm:p-6 pt-3 space-y-4 flex-1 overscroll-contain">
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.masterclassTitleLabel || 'Masterclass Title'}
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="E.g., Sacred Double-Line Madhubani on Handmade Wasli"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm font-semibold text-[#1E3A8A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    {ui.artFormLabel || 'Art Form'}
                  </label>
                  <select
                    value={newArtForm}
                    onChange={(e) => setNewArtForm(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  >
                    <option value="Madhubani / Mithila Painting">{ART_FORM_TRANSLATIONS[safeLang]?.['Madhubani'] || 'Madhubani'}</option>
                    <option value="Warli Folk Art">{ART_FORM_TRANSLATIONS[safeLang]?.['Warli'] || 'Warli Folk'}</option>
                    <option value="Pichwai & Miniature Painting">{ART_FORM_TRANSLATIONS[safeLang]?.['Pichwai'] || 'Pichwai'}</option>
                    <option value="Pattachitra Painting">{ART_FORM_TRANSLATIONS[safeLang]?.['Pattachitra'] || 'Pattachitra'}</option>
                    <option value="Srikalahasti Kalamkari">{ART_FORM_TRANSLATIONS[safeLang]?.['Kalamkari'] || 'Kalamkari'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    {ui.ticketPriceINR || 'Ticket Price (INR)'}
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Date & Time Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Workshop Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Start Time (IST)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    placeholder="e.g. 11:00 AM IST"
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Duration & Seats Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Duration</span>
                  </label>
                  <select
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  >
                    <option value="45 Mins">45 Mins (Fast Track)</option>
                    <option value="60 Mins">60 Mins (1 Hour)</option>
                    <option value="90 Mins">90 Mins (1.5 Hours)</option>
                    <option value="120 Mins">120 Mins (2 Hours)</option>
                    <option value="180 Mins">180 Mins (3 Hours)</option>
                    <option value="Full Day Intensive">Full Day Intensive</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Total Seats Available</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="500"
                    value={newMaxSeats}
                    onChange={(e) => setNewMaxSeats(e.target.value)}
                    placeholder="30"
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Meeting Link Setting */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Live Meeting Link (Google Meet / Zoom / Webex)</span>
                </label>
                <input
                  type="url"
                  required
                  value={newMeetingLink}
                  onChange={(e) => setNewMeetingLink(e.target.value)}
                  placeholder="https://meet.google.com/abc-defg-hij or https://zoom.us/j/..."
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-semibold text-[#1E3A8A]"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  Attendees will receive this direct video link to join your live interactive atelier session.
                </p>
              </div>

              {/* Upload Picture Option for Workshop */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Upload Workshop Cover Picture / Photo (Optional)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#F59E0B]/50 rounded-2xl p-4 text-center cursor-pointer bg-[#FFFDF5] hover:bg-amber-50 transition-colors flex flex-col items-center justify-center min-h-[120px]"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {uploadedWorkshopImage ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={uploadedWorkshopImage}
                        alt="Workshop Picture Preview"
                        className="w-full h-full object-contain bg-stone-900"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveImage();
                        }}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700"
                        title="Remove picture"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-xs text-stone-500">
                      <Camera className="w-6 h-6 text-[#F59E0B] mx-auto mb-1" />
                      <p className="font-bold text-[#1E3A8A]">Click to upload a picture for your workshop</p>
                      <p className="text-[10px]">JPG, PNG, WEBP supported from your device</p>
                    </div>
                  )}
                </div>

                {/* Quick Authentic Art Cover Selector */}
                <div className="mt-2.5">
                  <div className="text-[11px] font-bold text-stone-600 mb-1.5">
                    Or select an authentic traditional art picture:
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { name: 'Mithila', img: '/assets/states/bihar.jpg' },
                      { name: 'Warli', img: '/assets/states/maharashtra.jpg' },
                      { name: 'Pichwai', img: '/assets/states/rajasthan.jpg' },
                      { name: 'Kalamkari', img: '/assets/states/andhra_pradesh.jpg' },
                      { name: 'Pattachitra', img: '/assets/states/odisha.jpg' }
                    ].map((art) => (
                      <button
                        key={art.name}
                        type="button"
                        onClick={() => setUploadedWorkshopImage(art.img)}
                        className={`p-1 rounded-xl border text-center transition-all ${
                          uploadedWorkshopImage === art.img
                            ? 'border-[#1E3A8A] bg-amber-100 ring-2 ring-[#1E3A8A]/30'
                            : 'border-stone-200 bg-white hover:border-[#F59E0B]'
                        }`}
                      >
                        <div className="aspect-square w-full rounded-lg overflow-hidden bg-stone-900 mb-1">
                          <img src={art.img} alt={art.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[10px] font-bold text-stone-700 truncate">{art.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.descriptionSyllabus || 'Description & Syllabus'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Details about brushes, natural pigments, and live steps..."
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm text-[#2D2D2D]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2 pb-1 sticky bottom-0 bg-white/95 backdrop-blur-xs">
                <button
                  type="button"
                  onClick={() => setShowHostModal(false)}
                  className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700 cursor-pointer transition-colors"
                >
                  {ui.cancelBtn || 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold shadow-md cursor-pointer transition-colors"
                >
                  {ui.publishMasterclassBtn || 'Publish Masterclass'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Workshop Registration Success Modal with Direct Meeting Link */}
      {activeSuccessWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border-3 border-emerald-500 shadow-2xl space-y-4 text-center relative overflow-hidden">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Seat Confirmed
              </span>
              <h3 className="font-display font-extrabold text-lg text-[#1E1B4B] mt-2">
                {activeSuccessWorkshop.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {activeSuccessWorkshop.date} • {activeSuccessWorkshop.time} ({activeSuccessWorkshop.duration})
              </p>
            </div>

            {activeSuccessWorkshop.meetingLink && (
              <div className="bg-[#FFFBEB] border-2 border-[#F59E0B]/40 rounded-2xl p-4 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A]">
                  <Video className="w-4 h-4 text-[#F59E0B]" />
                  <span>Live Atelier Meeting Link:</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-xs font-mono break-all text-stone-800 select-all">
                  {activeSuccessWorkshop.meetingLink}
                </div>
                <a
                  href={activeSuccessWorkshop.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Open Video Meeting Now</span>
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={() => setActiveSuccessWorkshop(null)}
              className="w-full py-3 rounded-xl bg-[#1E1B4B] hover:bg-[#312E81] text-[#FFF8E7] text-xs font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Interactive Chat with Artist Atelier Modal */}
      {chatWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FFFDF5] rounded-3xl max-w-lg w-full h-[620px] max-h-[92vh] border-3 border-[#F59E0B] shadow-2xl flex flex-col overflow-hidden relative">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#1E1B4B] text-white flex items-center justify-between border-b-2 border-[#F59E0B] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FFFBEB] text-2xl flex items-center justify-center border-2 border-[#F59E0B] shadow-sm relative">
                  {chatWorkshop.hostAvatar || '🪷'}
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-600 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-[#FFF8E7]">
                      {chatWorkshop.artisanName || chatWorkshop.hostName || 'Master Artisan'}
                    </h3>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-2 py-0.2 rounded-full font-bold">
                      Atelier Online
                    </span>
                  </div>
                  <p className="text-[11px] text-[#FEF08A] font-semibold">
                    {chatWorkshop.artisanTitle || 'Verified Master Craftsman'} • {chatWorkshop.artForm}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setChatWorkshop(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Workshop Quick Info Banner */}
            <div className="px-4 py-2 bg-amber-50/90 border-b border-amber-200 text-xs flex items-center justify-between shrink-0">
              <span className="font-bold text-[#1E3A8A] truncate max-w-[260px]">
                Workshop: {chatWorkshop.title}
              </span>
              <span className="text-[11px] text-stone-500 font-semibold shrink-0">
                {chatWorkshop.date} • {chatWorkshop.time}
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFFDF5]">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#1E3A8A] text-[#FFF8E7] rounded-tr-xs'
                        : 'bg-white border-2 border-amber-200 text-stone-800 rounded-tl-xs shadow-sm'
                    }`}
                  >
                    {msg.sender === 'artist' && (
                      <div className="text-[10px] font-bold text-[#B45309] mb-1 flex items-center gap-1">
                        <LotusMotif size={12} color="#F59E0B" />
                        <span>{chatWorkshop.artisanName || chatWorkshop.hostName || 'Master Artisan'}</span>
                      </div>
                    )}
                    <p>{msg.text}</p>
                    <span
                      className={`text-[9px] block text-right mt-1 ${
                        msg.sender === 'user' ? 'text-white/60' : 'text-stone-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isArtistTyping && (
                <div className="flex items-center gap-2 text-xs text-stone-500 bg-white p-2.5 rounded-xl border border-amber-200 w-fit">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="italic text-[11px]">
                    {chatWorkshop.artisanName || 'Artisan'} is typing from studio...
                  </span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-3 py-2 bg-stone-50/90 border-t border-stone-200 overflow-x-auto flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] text-stone-400 font-bold shrink-0">Ask:</span>
              {[
                'What materials to prepare?',
                'Are beginners welcome?',
                'Recording & certificate provided?',
                'How to join video meeting?'
              ].map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSendChatMessage(q)}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-white hover:bg-amber-100 border border-amber-200 text-[#B45309] font-semibold whitespace-nowrap shadow-xs cursor-pointer transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChatMessage();
              }}
              className="p-3 bg-white border-t border-stone-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask artisan about materials, technique, session..."
                className="flex-1 bg-[#FFFBEB] border border-amber-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="p-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1E1B4B] disabled:opacity-40 text-white shadow-md transition-colors cursor-pointer"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
