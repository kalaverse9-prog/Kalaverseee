import React, { useState, useRef } from 'react';
import {
  UserProfile,
  AppSection,
  UserPlan,
  VerificationStatus
} from '../types';
import {
  User,
  Sparkles,
  Award,
  Shield,
  Palette,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Edit3,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Download,
  Trash2,
  Camera,
  Upload,
  Image as ImageIcon,
  GraduationCap,
  Eye,
  Video,
  Store,
  Heart,
  BookOpen,
  ArrowRight,
  Clock,
  Check,
  X,
  Share2,
  BadgeCheck,
  TrendingUp,
  Layers,
  Crown,
  Lock,
  Key,
  Copy,
  RefreshCw,
  Sliders,
  ShieldCheck
} from 'lucide-react';
import {
  LotusMotif,
  PeacockMotif,
  PaisleyMotif,
  MandalaRosette,
  ToranBorder,
  VineCreeperBorder,
  OrnateCorner
} from './CulturalMotifs';
import {
  SupportedLanguage,
  getTranslations
} from '../data/translations';
import {
  getLocalizedUI,
  STATE_NAME_TRANSLATIONS,
  ART_FORM_TRANSLATIONS
} from '../data/localizedContent';
import { getProfileTranslations } from '../data/profileTranslations';

interface ProfilePageProps {
  currentUser: UserProfile;
  onUpdateUser: (updatedData: Partial<UserProfile>) => void;
  onNavigate: (section: AppSection) => void;
  onOpenPlanModal: () => void;
  onOpenPrivacyModal: () => void;
  onOpenLanguageModal?: () => void;
  language: SupportedLanguage;
}

interface AvatarPreset {
  id: string;
  icon: string;
  name: string;
  tradition: string;
  bgGradient: string;
}

const ARTISAN_AVATAR_PRESETS: AvatarPreset[] = [
  { id: 'lotus', icon: '🪷', name: 'Sacred Lotus (कमल)', tradition: 'Mithila & Pichwai', bgGradient: 'from-amber-100 to-rose-100' },
  { id: 'peacock', icon: '🦚', name: 'Mayura Peacock (मयूर)', tradition: 'Madhubani & Miniature', bgGradient: 'from-sky-100 to-emerald-100' },
  { id: 'palette', icon: '🎨', name: 'Master Chitrakar (चित्रकार)', tradition: 'Folk & Heritage Arts', bgGradient: 'from-purple-100 to-amber-100' },
  { id: 'deepak', icon: '🪔', name: 'Temple Diya (दीपक)', tradition: 'Tanjore & Pichwai', bgGradient: 'from-amber-100 to-orange-100' },
  { id: 'elephant', icon: '🐘', name: 'Airavata Elephant (गजराज)', tradition: 'Mysore & Gond', bgGradient: 'from-emerald-100 to-teal-100' },
  { id: 'mask', icon: '🎭', name: 'Kathakali Performer (कथकली)', tradition: 'Kerala Performing Folk', bgGradient: 'from-green-100 to-yellow-100' },
  { id: 'warli', icon: '🌾', name: 'Tarpa Harvest (वारली)', tradition: 'Warli Tribal Mural', bgGradient: 'from-amber-100 to-stone-100' },
  { id: 'conch', icon: '🐚', name: 'Shankha Conch (शंख)', tradition: 'Raghurajpur Pattachitra', bgGradient: 'from-blue-100 to-indigo-100' },
  { id: 'tiger', icon: '🐅', name: 'Royal Bengal (बाघ)', tradition: 'Kalighat & Gond Lore', bgGradient: 'from-orange-100 to-amber-100' },
  { id: 'pottery', icon: '🏺', name: 'Terracotta Kumbh (कुंभ)', tradition: 'Gorakhpur & Bankura', bgGradient: 'from-amber-100 to-red-100' },
  { id: 'chanderi', icon: '🧵', name: 'Zari Loom (जरी करघा)', tradition: 'Chanderi & Banarasi', bgGradient: 'from-fuchsia-100 to-pink-100' },
  { id: 'heritage', icon: '🏛️', name: 'Heritage Scholar (विद्वान)', tradition: 'Cultural Preservation', bgGradient: 'from-indigo-100 to-blue-100' },
  { id: 'patron', icon: '👑', name: 'Royal Patron (संरक्षक)', tradition: 'Fair-Trade Supporter', bgGradient: 'from-yellow-100 to-amber-100' },
  { id: 'kerala', icon: '🥥', name: 'Kerala Coconut (केरला)', tradition: 'Mural & Temple Wood', bgGradient: 'from-emerald-100 to-green-100' },
  { id: 'flower', icon: '🌺', name: 'Rani Rose (गुलाब)', tradition: 'Phulkari & Chintz', bgGradient: 'from-rose-100 to-pink-100' },
  { id: 'tree', icon: '🌿', name: 'Kalpavriksha Tree (वृक्ष)', tradition: 'Kalamkari & Gond', bgGradient: 'from-teal-100 to-emerald-100' }
];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
  'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Delhi'
];

const CULTURAL_ROLES = [
  'Art Enthusiast & Heritage Learner',
  'Traditional Chitrakar / Master Folk Painter',
  'Art Collector & Cultural Patron',
  'Artisan Guild / Craft Cooperative Leader',
  'Heritage Researcher & Student'
];

const ALL_HERITAGE_BADGES = [
  {
    id: 'badge_mithila',
    name: 'Mithila Master Scholar',
    artForm: 'Madhubani Painting',
    description: 'Completed foundational Bihar art line and pigment studies',
    icon: '🪷',
    earned: true,
    category: 'Traditional Master',
    color: 'border-amber-400 bg-amber-50/70 text-amber-900'
  },
  {
    id: 'badge_pahari',
    name: 'Pahari Inscriptionist',
    artForm: 'Kangra & Basohli Miniatures',
    description: 'Mastered traditional botanical color mixing and fine brushwork',
    icon: '⛰️',
    earned: true,
    category: 'Art Mastery',
    color: 'border-emerald-400 bg-emerald-50/70 text-emerald-900'
  },
  {
    id: 'badge_patachitra',
    name: 'Patachitra Connoisseur',
    artForm: 'Raghurajpur Palm Leaf Etching',
    description: 'Decoded sacred iconography from Odisha palm-leaf scrolls',
    icon: '📜',
    earned: true,
    category: 'Cultural Lore',
    color: 'border-blue-400 bg-blue-50/70 text-blue-900'
  },
  {
    id: 'badge_warli',
    name: 'Warli Geometry Master',
    artForm: 'Maharashtra Folk Murals',
    description: 'Executed circle, triangle, and square rhythmic village life compositions',
    icon: '🌾',
    earned: false,
    category: 'Art Mastery',
    color: 'border-stone-300 bg-stone-50 text-stone-600'
  },
  {
    id: 'badge_pichwai',
    name: 'Pichwai Devotee',
    artForm: 'Nathdwara Temple Cloths',
    description: 'Studied intricate lotus pond and Shrinathji temple hanging motifs',
    icon: '🪔',
    earned: false,
    category: 'Mythology',
    color: 'border-stone-300 bg-stone-50 text-stone-600'
  },
  {
    id: 'badge_fairtrade',
    name: 'Fair-Trade Patron',
    artForm: 'GI Craft Supporter',
    description: 'Directly supported indigenous master artisans with 85% payouts (15% commission)',
    icon: '💎',
    earned: true,
    category: 'Patronage',
    color: 'border-rose-400 bg-rose-50/70 text-rose-900'
  }
];

const SAMPLE_ARTWORK_EVALUATIONS = [
  {
    id: 'eval_1',
    title: 'Madhubani Double-Line Peacock Study',
    artForm: 'Madhubani Painting (Bihar)',
    date: '2025-02-10',
    score: 9.4,
    colorHarmonyScore: 9.5,
    lineworkPrecisionScore: 9.2,
    authenticityScore: 9.6,
    motifs: ['Mayura (Peacock)', 'Kachni Hatching', 'Mithila Border'],
    feedbackSummary: 'Exemplary geometric balance and authentic double-line precision with traditional vegetable pigment palette.'
  },
  {
    id: 'eval_2',
    title: 'Warli Tarpa Village Circle Sketch',
    artForm: 'Warli Art (Maharashtra)',
    date: '2025-01-28',
    score: 8.8,
    colorHarmonyScore: 9.0,
    lineworkPrecisionScore: 8.6,
    authenticityScore: 8.9,
    motifs: ['Tarpa Musician', 'Spiraling Human Circle', 'Sacred Sun'],
    feedbackSummary: 'Strong dynamic rhythm capturing community celebration; slight variance in concentric ring spacing.'
  }
];

const SAMPLE_REGISTERED_WORKSHOPS = [
  {
    id: 'ws_sample_1',
    title: 'Madhubani Natural Pigment Extraction & Fine Linework',
    artisanName: 'Sunita Devi (Master Chitrakar)',
    artForm: 'Madhubani Art',
    date: 'Tomorrow at 4:00 PM IST',
    duration: '90 Minutes',
    status: 'Confirmed (Google Meet Link Active)',
    meetingLink: 'https://meet.google.com/kalaverse-masterclass-live',
    priceINR: 499,
    artisanPayoutINR: 449.1
  }
];

const getLocalizedRole = (role: string, lang: SupportedLanguage): string => {
  if (lang === 'hi') {
    if (role.includes('Learner') || role.includes('Enthusiast')) return 'कला प्रेमी एवं धरोहर अध्येता';
    if (role.includes('Chitrakar') || role.includes('Painter')) return 'पारंपरिक चित्रकार / मुख्य लोक शिल्पी';
    if (role.includes('Collector') || role.includes('Patron')) return 'कला संग्रहकर्ता एवं सांस्कृतिक संरक्षक';
    if (role.includes('Cooperative') || role.includes('Leader')) return 'कारीगर गिल्ड / शिल्प सहकारी समिति प्रमुख';
    if (role.includes('Researcher') || role.includes('Student')) return 'धरोहर शोधकर्ता एवं विद्यार्थी';
  }
  if (lang === 'ta') {
    if (role.includes('Learner') || role.includes('Enthusiast')) return 'கலை ஆர்வலர் & பாரம்பரிய பயிலுநர்';
    if (role.includes('Chitrakar') || role.includes('Painter')) return 'பாரம்பரிய ஓவியர் / முதன்மை கலைஞர்';
    if (role.includes('Collector') || role.includes('Patron')) return 'கலை சேகரிப்பாளர் & புரவலர்';
    if (role.includes('Cooperative') || role.includes('Leader')) return 'கைவினைஞர் சங்கத் தலைவர்';
    if (role.includes('Researcher') || role.includes('Student')) return 'பாரம்பரிய ஆராய்ச்சியாளர்';
  }
  if (lang === 'te') {
    if (role.includes('Learner') || role.includes('Enthusiast')) return 'కళా ప్రేమికుడు & వారసత్వ అభ్యాసకుడు';
    if (role.includes('Chitrakar') || role.includes('Painter')) return 'సాంప్రదాయ చిత్రకారుడు / ప్రధాన కళాకారుడు';
    if (role.includes('Collector') || role.includes('Patron')) return 'కళా సేకరణకర్త & పోషకుడు';
    if (role.includes('Cooperative') || role.includes('Leader')) return 'చేతివృత్తుల సంఘం నాయకుడు';
    if (role.includes('Researcher') || role.includes('Student')) return 'వారసత్వ పరిశోధకుడు';
  }
  if (lang === 'bn') {
    if (role.includes('Learner') || role.includes('Enthusiast')) return 'শিল্পপ্রেমী ও ঐতিহ্য শিক্ষার্থী';
    if (role.includes('Chitrakar') || role.includes('Painter')) return 'ঐতিহ্যবাহী চিত্রশিল্পী / প্রধান লোকশিল্পী';
    if (role.includes('Collector') || role.includes('Patron')) return 'শিল্প সংগ্রাহক ও সাংস্কৃতিক পৃষ্ঠপোষক';
    if (role.includes('Cooperative') || role.includes('Leader')) return 'কারিগর সমিতি / শিল্প সমবায় নেতা';
    if (role.includes('Researcher') || role.includes('Student')) return 'ঐতিহ্য গবেষক ও শিক্ষার্থী';
  }
  return role;
};

const getLocalizedBadge = (badge: typeof ALL_HERITAGE_BADGES[0], lang: SupportedLanguage) => {
  if (lang === 'hi') {
    const badgeNames: Record<string, { name: string; desc: string; art: string }> = {
      badge_mithila: {
        name: 'मिथिला मास्टर विद्वान',
        desc: 'बिहार कला की आधारभूत रेखा एवं प्राकृतिक रंग विधा का पूर्ण अध्ययन',
        art: 'मधुबनी चित्रकला'
      },
      badge_pahari: {
        name: 'पहाड़ी सूक्ष्म शिल्पी',
        desc: 'पारंपरिक वनस्पति रंग मिश्रण और सूक्ष्म तूलिका संचालन में निपुणता',
        art: 'कांगड़ा एवं बसोहली लघुचित्र'
      },
      badge_patachitra: {
        name: 'पट्टचित्र पारखी',
        desc: 'ओडिशा ताड़पत्र अभिलेखों से पवित्र रूपांकनों और आख्यानों का विश्लेषण',
        art: 'रघुराजपुर ताड़पत्र नक्काशी'
      },
      badge_warli: {
        name: 'वारली ज्यामिति मास्टर',
        desc: 'वृत्त, त्रिकोण और चौकोर ज्यामिति से लयबद्ध ग्रामीण जीवन का सजीव अंकन',
        art: 'महाराष्ट्र लोक भित्तिचित्र'
      },
      badge_pichwai: {
        name: 'पिछवाई अनन्य साधक',
        desc: 'श्रीनाथजी मंदिर एवं दिव्य कमल सरोवर के अलंकृत प्रतीकों का अध्ययन',
        art: 'नाथद्वारा मंदिर वस्त्रकला'
      },
      badge_fairtrade: {
        name: 'निष्पक्ष-व्यापार संरक्षक',
        desc: '९०% सीधे भुगतान के साथ मूल मास्टर शिल्पियों का प्रत्यक्ष सहयोग',
        art: 'जीआई शिल्प समर्थक'
      }
    };
    const b = badgeNames[badge.id];
    if (b) return { ...badge, name: b.name, description: b.desc, artForm: b.art };
  }
  if (lang === 'ta') {
    const badgeNames: Record<string, { name: string; desc: string; art: string }> = {
      badge_mithila: {
        name: 'மிதிலா மாஸ்டர் அறிஞர்',
        desc: 'பீகார் கலை மற்றும் இயற்கை வண்ணங்களின் முழுமையான ஆய்வு',
        art: 'மதுபானி ஓவியம்'
      },
      badge_pahari: {
        name: 'பஹாரி நுண்ணிய கலைஞர்',
        desc: 'பாரம்பரிய தாவர நிறக் கலவை மற்றும் நுணுக்கமான தூரிகை வேலைப்பாடு',
        art: 'காங்ரா மற்றும் பசொஹ்லி ஓவியங்கள்'
      },
      badge_patachitra: {
        name: 'பட்டச்சித்ரா ஆய்வாளர்',
        desc: 'ஒடிசா பனை ஓலை சுருள்களிலிருந்து புனித வடிவங்களை ஆய்வு செய்தல்',
        art: 'ரகுராஜ்பூர் பனை ஓலை செதுக்குதல்'
      },
      badge_warli: {
        name: 'வார்லி வடிவியல் மாஸ்டர்',
        desc: 'வட்டம், முக்கோணம் மூலம் கிராமப்புற வாழ்க்கையை சித்தரித்தல்',
        art: 'மகாராஷ்டிரா நாட்டுப்புற சுவரோவியங்கள்'
      },
      badge_pichwai: {
        name: 'பிச்வாய் பக்தர்',
        desc: 'ஸ்ரீநாத்ஜி கோவில் மற்றும் தாமரைக் குளம் வடிவங்களின் ஆய்வு',
        art: 'நாத்துவாரா கோவில் துணி ஓவியங்கள்'
      },
      badge_fairtrade: {
        name: 'நேர்மை வர்த்தக புரவலர்',
        desc: '85% நேரடி கட்டணத்துடன் பாரம்பரிய கைவினைஞர்களுக்கு ஆதரவு (15% கமிஷன்)',
        art: 'GI கைவினை ஆதரவாளர்'
      }
    };
    const b = badgeNames[badge.id];
    if (b) return { ...badge, name: b.name, description: b.desc, artForm: b.art };
  }
  return badge;
};

export const ProfilePage: React.FC<ProfilePageProps> = ({
  currentUser,
  onUpdateUser,
  onNavigate,
  onOpenPlanModal,
  onOpenPrivacyModal,
  language
}) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'evaluations' | 'workshops' | 'badges' | 'studio' | 'settings' | 'security'
  >('overview');

  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  // Photo modal tabs: 'upload' | 'presets' | 'url'
  const [photoModalTab, setPhotoModalTab] = useState<'upload' | 'presets' | 'url'>('upload');
  const [previewPhoto, setPreviewPhoto] = useState<string>(currentUser.avatar || '🪷');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>('');
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit Profile Form Fields
  const [editName, setEditName] = useState(currentUser.name);
  const [editRole, setEditRole] = useState(currentUser.role || CULTURAL_ROLES[0]);
  const [editBio, setEditBio] = useState(
    currentUser.bio || 'Preserving and practicing traditional Indian folk art lineages, sacred geometry, and indigenous natural pigments.'
  );
  const [editState, setEditState] = useState(currentUser.state || 'Rajasthan');
  const [editPhone, setEditPhone] = useState(currentUser.phone || '+91 98765 43210');
  const [editCraftSpecialty, setEditCraftSpecialty] = useState(currentUser.craftSpecialty || 'Madhubani & Folk Murals');
  const [editPassword, setEditPassword] = useState(currentUser.password || '');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordSavedAlert, setPasswordSavedAlert] = useState(false);

  // Verification Form Fields
  const [artisanCardNum, setArtisanCardNum] = useState(currentUser.artisanCardNumber || 'GI-IND-2025-8849');
  const [artisanGuildName, setArtisanGuildName] = useState(currentUser.businessName || 'Heritage Artisan Collective');
  const [verificationSubmitted, setVerificationSubmitted] = useState(false);

  const t = getTranslations(language);
  const ui = getLocalizedUI(language);
  const pt = getProfileTranslations(language);
  const safeLang = (language in STATE_NAME_TRANSLATIONS ? language : 'en') as SupportedLanguage;

  const isImageAvatar = (avatarStr?: string) => {
    if (!avatarStr) return false;
    return avatarStr.startsWith('data:image') || avatarStr.startsWith('http') || avatarStr.startsWith('blob:');
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const resultStr = e.target.result as string;
        setPreviewPhoto(resultStr);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingPhoto(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSavePhoto = () => {
    let finalAvatar = previewPhoto;
    if (photoModalTab === 'url' && customPhotoUrl.trim()) {
      finalAvatar = customPhotoUrl.trim();
    }
    onUpdateUser({ avatar: finalAvatar });
    setIsPhotoModalOpen(false);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      name: editName,
      role: editRole,
      bio: editBio,
      state: editState,
      phone: editPhone,
      craftSpecialty: editCraftSpecialty,
      password: editPassword
    });
    setIsEditModalOpen(false);
  };

  const handleSavePasswordDirect = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      password: editPassword
    });
    setPasswordSavedAlert(true);
    setTimeout(() => setPasswordSavedAlert(false), 3000);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      artisanCardNumber: artisanCardNum,
      businessName: artisanGuildName,
      verificationStatus: 'verified'
    });
    setVerificationSubmitted(true);
    setTimeout(() => {
      setIsVerificationModalOpen(false);
      setVerificationSubmitted(false);
    }, 1200);
  };

  const handleExportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentUser, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `kalaverse_profile_${currentUser.name.replace(/\s+/g, '_').toLowerCase()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div id="user-profile-page" className="min-h-screen bg-gradient-to-b from-[#FFFDF7] via-[#FFF8E7]/50 to-[#FFFDF7] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Traditional Watermarks */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-20 -rotate-12">
        <MandalaRosette size={220} color="#F59E0B" accentColor="#E11D48" />
      </div>
      <div className="absolute top-48 right-4 pointer-events-none opacity-20 rotate-45">
        <MandalaRosette size={260} color="#059669" accentColor="#F59E0B" />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Top Breadcrumb & Sovereign Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-stone-600 font-medium">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-[#1E1B4B] font-bold transition-colors flex items-center gap-1 text-[#1E1B4B]"
            >
              <span>{t.home}</span>
            </button>
            <span className="text-[#F59E0B] font-bold">/</span>
            <span className="font-extrabold text-[#E11D48]">
              {t.profTitle || pt.artisanPortfolioTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[11px] border border-emerald-300/80 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>{pt.zeroDataSellingBadge}</span>
            </span>
          </div>
        </div>

        {/* HERO PROFILE IDENTITY CARD - ORNATE TRADITIONAL BANNER */}
        <div
          id="profile-hero-card"
          className="bg-white rounded-3xl border-2 border-[#F59E0B]/60 shadow-2xl overflow-hidden relative"
        >
          {/* Ornate Corner Flourishes */}
          <OrnateCorner position="top-left" color="#F59E0B" size={48} />
          <OrnateCorner position="top-right" color="#F59E0B" size={48} />

          {/* Top Toran Border Fringe */}
          <div className="relative z-10">
            <ToranBorder color="#F59E0B" accentColor="#E11D48" />
          </div>

          {/* Decorative Pattern Background Header */}
          <div className="h-44 sm:h-52 bg-gradient-to-r from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] relative overflow-hidden p-6 flex flex-col justify-between">
            {/* Background Pattern Grid & Motifs */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F59E0B_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#F59E0B]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-[#E11D48]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LotusMotif size={28} color="#FDE68A" secondaryColor="#F43F5E" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FDE68A] bg-black/30 px-3 py-1 rounded-full border border-amber-300/30 backdrop-blur-sm">
                  {pt.verifiedCulturalIdentity}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#FDE68A] bg-black/30 px-3 py-1 rounded-full border border-amber-300/30 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>KalaVerse Verified Artisan Portfolio</span>
                </span>
              </div>
            </div>
          </div>

          {/* Profile Identity Details Row */}
          <div className="px-6 sm:px-8 pb-8 pt-0 relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 -mt-16 sm:-mt-20">
              {/* Avatar & Basic Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                {/* Avatar with Click to Change Photo */}
                <div className="relative group shrink-0">
                  <div
                    onClick={() => {
                      setPreviewPhoto(currentUser.avatar || '🪷');
                      setIsPhotoModalOpen(true);
                    }}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 border-4 border-white shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all relative overflow-hidden ring-4 ring-[#F59E0B]/40 group-hover:ring-[#E11D48]"
                    title={pt.changePhoto}
                  >
                    {isImageAvatar(currentUser.avatar) ? (
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-5xl sm:text-7xl select-none filter drop-shadow">
                        {currentUser.avatar || '🪷'}
                      </span>
                    )}

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-extrabold gap-1 p-2 text-center">
                      <Camera className="w-5 h-5 text-[#FDE68A]" />
                      <span>{pt.updatePhotoHover}</span>
                    </div>
                  </div>

                  {/* Edit Photo Icon Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewPhoto(currentUser.avatar || '🪷');
                      setIsPhotoModalOpen(true);
                    }}
                    className="absolute -bottom-2 -right-2 w-9 h-9 rounded-2xl bg-gradient-to-br from-[#E11D48] to-[#9F1239] text-[#FFF8E7] flex items-center justify-center shadow-xl border-2 border-white text-xs hover:scale-110 transition-transform cursor-pointer"
                    title={pt.changePhoto}
                  >
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Identity Name, Role & Badges */}
                <div className="space-y-2 pt-2 sm:pt-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-name font-bold tracking-tight text-[#1E1B4B] bg-[#ece7e7] px-2.5 py-0.5 rounded-xl">
                      {currentUser.name}
                    </h1>

                    {/* Verification Status Badge */}
                    {currentUser.verificationStatus === 'verified' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold border-2 border-emerald-400 shadow-xs">
                        <BadgeCheck className="w-4 h-4 text-emerald-600" />
                        <span>{pt.verifiedGiArtisanBadge} #{currentUser.artisanCardNumber || 'GI-IND-8849'}</span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsVerificationModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold hover:bg-amber-200 transition-colors border border-amber-400 shadow-xs cursor-pointer"
                      >
                        <Shield className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{pt.requestGiArtisanBadge}</span>
                      </button>
                    )}
                  </div>

                  {/* Cultural Role & Affiliation Chips */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 font-medium">
                    <span className="text-[#92400E] font-extrabold bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-300/80 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>{getLocalizedRole(currentUser.role || 'Traditional Chitrakar & Artisan', safeLang)}</span>
                    </span>

                    <span className="flex items-center gap-1.5 bg-blue-50 text-[#1E1B4B] px-3 py-1 rounded-lg border border-blue-200 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{STATE_NAME_TRANSLATIONS[safeLang]?.[currentUser.state || 'Rajasthan'] || currentUser.state || 'Rajasthan'}, {safeLang === 'hi' ? 'भारत' : 'India'}</span>
                    </span>

                    <span className="flex items-center gap-1.5 bg-stone-100 text-stone-700 px-3 py-1 rounded-lg border border-stone-200">
                      <Calendar className="w-3.5 h-3.5 text-stone-500" />
                      <span>{pt.memberSince} {currentUser.joinedDate || '2025'}</span>
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-stone-700 max-w-2xl leading-relaxed font-normal bg-[#FFFDF7] p-2.5 rounded-xl border border-amber-200/60">
                    {safeLang === 'hi' && (!currentUser.bio || currentUser.bio.includes('Preserving'))
                      ? pt.defaultBio
                      : currentUser.bio || pt.defaultBio}
                  </p>
                </div>
              </div>

              {/* Artisan Membership & Status Counters */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 self-stretch lg:self-auto justify-between lg:justify-end pt-2 lg:pt-0">
                {/* Plan Tier Box */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-3.5 text-center min-w-[110px] shadow-sm">
                  <div className="flex items-center justify-center gap-1 text-[#D97706] font-extrabold text-sm">
                    <Crown className="w-4 h-4" />
                    <span>{currentUser.plan === 'business' ? pt.masterArtisanTier : pt.freeExplorerTier}</span>
                  </div>
                  <div className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider mt-0.5">
                    {pt.planLabel}
                  </div>
                </div>

                {/* Craft Specialty */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-3.5 text-center min-w-[120px] shadow-sm">
                  <div className="flex items-center justify-center gap-1 text-[#059669] font-bold text-xs truncate max-w-[130px]">
                    <Palette className="w-4 h-4 shrink-0" />
                    <span className="truncate">{ART_FORM_TRANSLATIONS[safeLang]?.[currentUser.craftSpecialty || ''] || currentUser.craftSpecialty || 'Folk Art'}</span>
                  </div>
                  <div className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider mt-0.5">
                    {pt.craftSpecialtyLabel}
                  </div>
                </div>

                {/* Access PIN Status */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-3.5 text-center min-w-[110px] shadow-sm">
                  <div className="flex items-center justify-center gap-1 text-[#1E1B4B] font-extrabold text-xs">
                    <Lock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{currentUser.password ? pt.protectedPin : pt.setPin}</span>
                  </div>
                  <div className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider mt-0.5">
                    {pt.accessPinLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH PROFILE ACTION TOOLBAR: Change Photo, Edit Profile, Master Artisan Plan */}
            <div className="mt-6 pt-5 border-t border-amber-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <button
                type="button"
                id="profile-change-photo-full-btn"
                onClick={() => {
                  setPreviewPhoto(currentUser.avatar || '🪷');
                  setIsPhotoModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-amber-50 text-[#1E1B4B] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-sm border-2 border-amber-300/80 hover:border-amber-500 cursor-pointer hover:shadow-md"
              >
                <Camera className="w-4 h-4 text-[#D97706]" />
                <span>{pt.changePhoto || 'Change Photo'}</span>
              </button>

              <button
                type="button"
                id="edit-profile-full-btn"
                onClick={() => setIsEditModalOpen(true)}
                className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-amber-50 text-[#1E1B4B] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-sm border-2 border-amber-300/80 hover:border-amber-500 cursor-pointer hover:shadow-md"
              >
                <Edit3 className="w-4 h-4 text-[#D97706]" />
                <span>{pt.editProfile || 'Edit Profile'}</span>
              </button>

              <button
                type="button"
                id="profile-change-plan-full-btn"
                onClick={onOpenPlanModal}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:brightness-105 text-[#1E1B4B] text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all shadow-md border-2 border-amber-300 cursor-pointer hover:shadow-lg"
              >
                <Award className="w-4 h-4 text-[#1E1B4B]" />
                <span>{currentUser.plan === 'business' ? (pt.masterArtisanPlanBtn || 'Master Artisan Plan') : (pt.switchMasterPlanBtn || 'Master Artisan Plan')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* SUB-TABS NAVIGATION BAR WITH TRADITIONAL MOTIF HIGHLIGHTS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b-2 border-[#F59E0B]/30 scrollbar-none">
          <button
            type="button"
            id="profile-tab-overview"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'bg-[#1E1B4B] text-[#FFF8E7] shadow-lg scale-102 border-2 border-[#F59E0B]'
                : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-xs'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#F59E0B]" />
            <span>{pt.tabOverview}</span>
          </button>

          <button
            type="button"
            id="profile-tab-security"
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'security'
                ? 'bg-[#1E1B4B] text-[#FFF8E7] shadow-lg scale-102 border-2 border-[#F59E0B]'
                : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-xs'
            }`}
          >
            <Key className="w-4 h-4 text-[#10B981]" />
            <span>{pt.tabSecurity}</span>
          </button>

          <button
            type="button"
            id="profile-tab-evaluations"
            onClick={() => setActiveTab('evaluations')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'evaluations'
                ? 'bg-[#1E1B4B] text-[#FFF8E7] shadow-lg scale-102 border-2 border-[#F59E0B]'
                : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-xs'
            }`}
          >
            <Eye className="w-4 h-4 text-[#0284C7]" />
            <span>{pt.tabEvaluations} ({SAMPLE_ARTWORK_EVALUATIONS.length})</span>
          </button>

          <button
            type="button"
            id="profile-tab-workshops"
            onClick={() => setActiveTab('workshops')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'workshops'
                ? 'bg-[#1E1B4B] text-[#FFF8E7] shadow-lg scale-102 border-2 border-[#F59E0B]'
                : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-xs'
            }`}
          >
            <Video className="w-4 h-4 text-[#E11D48]" />
            <span>{pt.tabMasterclasses} ({SAMPLE_REGISTERED_WORKSHOPS.length})</span>
          </button>

          <button
            type="button"
            id="profile-tab-badges"
            onClick={() => setActiveTab('badges')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'badges'
                ? 'bg-[#1E1B4B] text-[#FFF8E7] shadow-lg scale-102 border-2 border-[#F59E0B]'
                : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-xs'
            }`}
          >
            <Award className="w-4 h-4 text-[#D97706]" />
            <span>{pt.tabBadges}</span>
          </button>

          {currentUser.plan === 'business' && (
            <button
              type="button"
              id="profile-tab-studio"
              onClick={() => setActiveTab('studio')}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
                activeTab === 'studio'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-lg scale-102 border-2 border-amber-300'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 shadow-xs'
              }`}
            >
              <Crown className="w-4 h-4 text-amber-300" />
              <span>{pt.tabStudio}</span>
            </button>
          )}

          <button
            type="button"
            id="profile-tab-settings"
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'settings'
                ? 'bg-[#1E1B4B] text-[#FFF8E7] shadow-lg scale-102 border-2 border-[#F59E0B]'
                : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-xs'
            }`}
          >
            <Shield className="w-4 h-4 text-stone-500" />
            <span>{pt.tabSettings}</span>
          </button>
        </div>

        {/* TAB 1: ARTISAN OVERVIEW & PORTFOLIO */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
            {/* Left 2 Cols: Cultural Portfolio & Action Portals */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Bio & Specialty Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#F59E0B]/40 shadow-md space-y-5 relative overflow-hidden">
                <OrnateCorner position="top-right" color="#F59E0B" size={36} />

                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-display font-extrabold text-[#1E1B4B] flex items-center gap-2">
                      <Palette className="w-5 h-5 text-[#D97706]" />
                      <span>{pt.artisanPortfolioTitle}</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      {pt.artisanPortfolioSubtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(true)}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#B45309] text-xs font-bold flex items-center gap-1.5 border border-amber-200 transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{pt.editProfile}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                    <span className="text-stone-500 block text-[11px] font-bold uppercase tracking-wider">{pt.primaryArtTradition}</span>
                    <strong className="text-sm text-[#1E1B4B] block">{ART_FORM_TRANSLATIONS[safeLang]?.[currentUser.craftSpecialty || ''] || currentUser.craftSpecialty || 'Madhubani / Mithila Painting'}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-1">
                    <span className="text-stone-500 block text-[11px] font-bold uppercase tracking-wider">{pt.stateAffiliation}</span>
                    <strong className="text-sm text-[#1E1B4B] block">{STATE_NAME_TRANSLATIONS[safeLang]?.[currentUser.state || 'Rajasthan'] || currentUser.state || 'Rajasthan'}, {safeLang === 'hi' ? 'भारत' : 'India'}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80 space-y-1">
                    <span className="text-stone-500 block text-[11px] font-bold uppercase tracking-wider">{pt.membershipLevel}</span>
                    <strong className="text-sm text-[#D97706] block">
                      {currentUser.plan === 'business' ? pt.masterArtisanTier : pt.freeExplorerTier}
                    </strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                    <span className="text-stone-500 block text-[11px] font-bold uppercase tracking-wider">{pt.giVerificationStatus}</span>
                    <strong className="text-sm text-[#047857] block">
                      {currentUser.verificationStatus === 'verified' ? pt.verifiedStatusText : pt.pendingVerificationText}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Quick Heritage Activity Hub */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-stone-200 shadow-md space-y-5">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h3 className="text-base font-display font-extrabold text-[#1E1B4B] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                    <span>{pt.quickKalaverseHubs}</span>
                  </h3>
                  <span className="text-xs text-stone-500 font-medium">{pt.artisanPortfolioSubtitle}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <button
                    type="button"
                    onClick={() => onNavigate('kalakaar-lens')}
                    className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-teal-50/60 hover:from-emerald-100/70 hover:to-teal-100/70 border border-emerald-200 text-left transition-all space-y-1.5 group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-xs text-[#065F46] group-hover:text-emerald-800">
                        {pt.scanArtworkTitle}
                      </div>
                      <Eye className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {pt.scanArtworkDesc}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('kalakaar-sathi')}
                    className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/60 to-yellow-50/60 hover:from-amber-100/70 hover:to-yellow-100/70 border border-amber-200 text-left transition-all space-y-1.5 group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-xs text-[#92400E] group-hover:text-amber-900">
                        {pt.consultGuruTitle}
                      </div>
                      <LotusMotif size={20} color="#D97706" secondaryColor="#E11D48" />
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {pt.consultGuruDesc}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('kalakaar-community')}
                    className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/60 to-pink-50/60 hover:from-rose-100/70 hover:to-pink-100/70 border border-rose-200 text-left transition-all space-y-1.5 group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-xs text-[#9F1239] group-hover:text-rose-900">
                        {pt.communityGalleryTitle}
                      </div>
                      <Heart className="w-4 h-4 text-rose-500" />
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {pt.communityGalleryDesc}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('kalatour')}
                    className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/60 to-indigo-50/60 hover:from-blue-100/70 hover:to-indigo-100/70 border border-blue-200 text-left transition-all space-y-1.5 group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-xs text-[#1E3A8A] group-hover:text-indigo-950">
                        {pt.craftTrailTitle}
                      </div>
                      <PeacockMotif size={22} color="#0284C7" accentColor="#10B981" />
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {pt.craftTrailDesc}
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Quick Launchpad Hub & Security Notice */}
            <div className="space-y-6">
              {/* Photo & Identity Quick Card */}
              <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl p-6 border-2 border-[#F59E0B]/50 shadow-md space-y-4 text-center">
                <div className="relative w-20 h-20 mx-auto rounded-2xl bg-amber-100 border-2 border-[#F59E0B] flex items-center justify-center overflow-hidden shadow-inner">
                  {isImageAvatar(currentUser.avatar) ? (
                    <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">{currentUser.avatar || '🪷'}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="font-extrabold text-sm text-[#1E1B4B]">{currentUser.name}</div>
                  <div className="text-xs text-stone-500">{currentUser.email || 'artisan@kalaverse.in'}</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setPreviewPhoto(currentUser.avatar || '🪷');
                    setIsPhotoModalOpen(true);
                  }}
                  className="w-full py-2 rounded-xl bg-[#1E1B4B] hover:bg-[#312E81] text-[#FFF8E7] font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Camera className="w-4 h-4 text-[#FDE68A]" />
                  <span>{pt.changePhoto}</span>
                </button>
              </div>

              {/* Persistent Security Access Card */}
              <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] text-[#FFF8E7] rounded-3xl p-6 shadow-xl space-y-4 border border-indigo-900 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FDE68A]">
                  <Key className="w-4 h-4 text-[#F59E0B]" />
                  <span>{pt.crossDevicePassTitle}</span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {pt.crossDevicePassSub}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveTab('security')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-[#1E1B4B] font-extrabold text-xs transition-all shadow-md"
                >
                  {pt.managePasswordBtn}
                </button>
              </div>

              {/* Fair-Trade Artisan Commitment Card */}
              <div className="bg-amber-50/80 rounded-3xl p-5 border-2 border-amber-300 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-[#F59E0B]" />
                  <span>{pt.fairTradeGuaranteeTitle}</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {pt.fairTradeGuaranteeSub}
                </p>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="text-xs font-bold text-[#B45309] hover:underline flex items-center gap-1"
                >
                  <span>{pt.readEthicalCharter}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB: PERSISTENT PASSWORD & CROSS-DEVICE ACCESS */}
        {activeTab === 'security' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-200 shadow-md space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#1E1B4B] flex items-center justify-center">
                  <Lock className="w-6 h-6 text-indigo-700" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#1E1B4B]">
                    {pt.securityTitle}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {pt.securitySub}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                {pt.persistentActive}
              </span>
            </div>

            {passwordSavedAlert && (
              <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-2xl text-xs text-emerald-900 font-bold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{pt.passwordSavedNotice}</span>
              </div>
            )}

            <form onSubmit={handleSavePasswordDirect} className="space-y-4 max-w-lg">
              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">
                  {pt.masterAccessPasswordLabel}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                    placeholder={pt.enterMasterPasswordPlaceholder}
                    className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl pl-3.5 pr-24 py-2.5 text-xs sm:text-sm font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-2.5 text-xs font-extrabold text-[#1E1B4B] hover:text-[#E11D48] px-2 py-0.5 rounded bg-stone-200"
                  >
                    {showPassword ? pt.hide : pt.show}
                  </button>
                </div>
                <p className="text-[11px] text-stone-500 mt-1.5">
                  {pt.passwordHelpText}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="text-xs font-bold text-[#B45309] flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#F59E0B]" />
                  <span>{pt.credentialsSummaryTitle}</span>
                </div>
                <div className="text-xs text-stone-700 space-y-1">
                  <div><strong>{pt.accountNameLabel}</strong> {currentUser.name}</div>
                  <div><strong>{pt.registeredEmailLabel}</strong> {currentUser.email || 'artisan@kalaverse.in'}</div>
                  <div><strong>{pt.persistentPasswordLabel}</strong> {editPassword ? (showPassword ? editPassword : '••••••••••••') : pt.notSetYet}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#312E81] text-[#FFF8E7] font-extrabold text-xs shadow-md transition-all border border-amber-300"
                >
                  {pt.saveUpdatePasswordBtn}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: KALALENS EVALUATIONS */}
        {activeTab === 'evaluations' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display font-extrabold text-[#1E1B4B]">
                {pt.archivedScansTitle}
              </h3>
              <button
                type="button"
                onClick={() => onNavigate('kalakaar-lens')}
                className="px-4 py-2 rounded-xl bg-[#1E1B4B] text-[#FFF8E7] text-xs font-bold flex items-center gap-1.5 hover:bg-[#312E81] transition-colors shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>{pt.scanNewArtworkBtn}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SAMPLE_ARTWORK_EVALUATIONS.map((evalItem) => (
                <div
                  key={evalItem.id}
                  className="bg-white rounded-3xl border-2 border-stone-200 p-6 space-y-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {evalItem.artForm}
                      </span>
                      <h4 className="font-extrabold text-base text-[#1E1B4B] mt-1.5">
                        {evalItem.title}
                      </h4>
                      <span className="text-[11px] text-stone-400">{pt.scannedOn} {evalItem.date}</span>
                    </div>

                    <div className="text-center p-2 rounded-xl bg-amber-50 border border-amber-200 min-w-[64px]">
                      <div className="text-base font-extrabold text-[#D97706]">
                        {evalItem.score}
                      </div>
                      <div className="text-[9px] font-bold text-stone-500 uppercase">{pt.scoreOutOfTen}</div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed bg-[#FFFDF7] p-3 rounded-xl border border-stone-200 italic">
                    "{evalItem.feedbackSummary}"
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {evalItem.motifs.map((motif, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold bg-blue-50 text-[#1E1B4B] px-2.5 py-1 rounded-md border border-blue-100"
                      >
                        {motif}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: REGISTERED WORKSHOPS */}
        {activeTab === 'workshops' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display font-extrabold text-[#1E1B4B]">
                {pt.enrolledMasterclassesTitle}
              </h3>
              <button
                type="button"
                onClick={() => onNavigate('kalakaar-workshops')}
                className="px-4 py-2 rounded-xl bg-[#1E1B4B] text-[#FFF8E7] text-xs font-bold flex items-center gap-1.5 hover:bg-[#312E81] transition-colors shadow-sm"
              >
                <Video className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>{pt.browseAllMasterclasses}</span>
              </button>
            </div>

            <div className="space-y-4">
              {SAMPLE_REGISTERED_WORKSHOPS.map((ws) => (
                <div
                  key={ws.id}
                  className="bg-white rounded-3xl border-2 border-stone-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase border border-blue-200">
                        {ART_FORM_TRANSLATIONS[safeLang]?.[ws.artForm] || ws.artForm}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {ws.status}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-base text-[#1E1B4B]">{ws.title}</h4>
                    <p className="text-xs text-stone-500">
                      {pt.instructor}: <strong>{ws.artisanName}</strong> • {ws.date} ({ws.duration})
                    </p>
                  </div>

                  <a
                    href={ws.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#312E81] text-[#FFF8E7] text-xs font-bold flex items-center gap-2 shadow-md transition-all border border-amber-300"
                  >
                    <Video className="w-4 h-4 text-[#F59E0B]" />
                    <span>{pt.joinGoogleMeet}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BADGES & HONORS */}
        {activeTab === 'badges' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display font-extrabold text-[#1E1B4B]">
                {pt.heritageBadgesTitle}
              </h3>
              <span className="text-xs text-stone-500 font-semibold">
                {pt.badgesEarnedCount(ALL_HERITAGE_BADGES.filter((b) => b.earned).length, ALL_HERITAGE_BADGES.length)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_HERITAGE_BADGES.map((rawBadge) => {
                const b = getLocalizedBadge(rawBadge, safeLang);
                return (
                  <div
                    key={b.id}
                    className={`p-6 rounded-3xl border-2 transition-all space-y-3.5 relative overflow-hidden ${
                      b.earned
                        ? 'bg-white border-[#F59E0B] shadow-md'
                        : 'bg-stone-50/60 border-stone-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{b.icon}</span>
                      <span
                        className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${
                          b.earned ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-stone-200 text-stone-600 border-stone-300'
                        }`}
                      >
                        {b.earned ? pt.badgeEarned : pt.badgeLocked}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-sm text-[#1E1B4B]">{b.name}</h4>
                      <span className="text-[11px] font-bold text-[#D97706]">{b.artForm}</span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: ARTISAN STUDIO PORTAL (BUSINESS PLAN ONLY) */}
        {activeTab === 'studio' && currentUser.plan === 'business' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#92400E] rounded-3xl p-6 sm:p-8 text-[#FFF8E7] shadow-xl space-y-3 relative overflow-hidden border-2 border-amber-300">
              <OrnateCorner position="top-right" color="#FDE68A" size={40} />

              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FDE68A]">
                <Crown className="w-4 h-4" /> {pt.artisanDashboardTitle}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold">
                {currentUser.businessName || pt.artisanStudioName}
              </h2>
              <p className="text-xs sm:text-sm text-[#FFF8E7]/90 max-w-2xl leading-relaxed">
                {pt.artisanDashboardDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('kalakaar-workshops')}
                className="p-6 rounded-3xl bg-white border-2 border-stone-200 hover:border-[#F59E0B] shadow-sm text-left space-y-2.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#1E1B4B] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm text-[#1E1B4B]">{pt.hostMasterclassTitle}</h4>
                <p className="text-xs text-stone-500">
                  {pt.hostMasterclassDesc}
                </p>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('kalakaar-marketplace')}
                className="p-6 rounded-3xl bg-white border-2 border-stone-200 hover:border-[#F59E0B] shadow-sm text-left space-y-2.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#047857] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <Store className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm text-[#1E1B4B]">{pt.uploadArtMarketplaceTitle}</h4>
                <p className="text-xs text-stone-500">
                  {pt.uploadArtMarketplaceDesc}
                </p>
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS & DATA SOVEREIGNTY (NO LANGUAGE OPTION) */}
        {activeTab === 'settings' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Ethical Sovereignty Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-[#1E1B4B]">
                    {pt.zeroDataPledgeTitle}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {pt.zeroDataPledgeDesc}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <div className="font-extrabold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{pt.sovereignStorageActive}</span>
                </div>
                <p className="leading-relaxed text-stone-700">
                  {pt.sovereignStorageDesc}
                </p>
              </div>
            </div>

            {/* Plan Preference Management */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-stone-200 shadow-sm space-y-4">
              <h4 className="text-base font-display font-extrabold text-[#1E1B4B]">{pt.membershipPlanTierTitle}</h4>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700">{pt.currentMembershipTierLabel}</span>
                  <span className="text-xs font-extrabold text-[#D97706]">
                    {currentUser.plan === 'business' ? pt.masterArtisanTier : pt.freeExplorerTier}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  {pt.membershipTierHelp}
                </p>
                <button
                  type="button"
                  onClick={onOpenPlanModal}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] text-xs font-extrabold transition-colors shadow-sm"
                >
                  {pt.manageChangePlanBtn}
                </button>
              </div>
            </div>

            {/* Export & Reset Actions */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-stone-200 shadow-sm space-y-4">
              <h4 className="text-base font-display font-extrabold text-[#1E1B4B]">{pt.dataPortabilityTitle}</h4>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  id="export-profile-json-btn"
                  onClick={handleExportData}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-stone-300"
                >
                  <Download className="w-4 h-4 text-[#1E1B4B]" />
                  <span>{pt.downloadProfileJson}</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border-2 border-red-200 text-red-700 hover:bg-red-50 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{pt.deleteDataResetAccount}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CHANGE PROFILE PHOTO MODAL */}
      {isPhotoModalOpen && (
        <div
          id="change-photo-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-2 border-[#F59E0B] p-6 space-y-5 animate-scaleUp max-h-[90vh] overflow-y-auto relative">
            <OrnateCorner position="top-right" color="#F59E0B" size={32} />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#B45309] flex items-center justify-center">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold text-[#1E1B4B]">{pt.changePhotoModalTitle}</h3>
                  <p className="text-[11px] text-stone-500">{pt.changePhotoModalSub}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Live Preview Display */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-200 flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-amber-100 border-2 border-[#F59E0B] flex items-center justify-center overflow-hidden shadow-inner shrink-0">
                {isImageAvatar(previewPhoto) ? (
                  <img src={previewPhoto} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl">{previewPhoto || '🪷'}</span>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{pt.livePreview}</span>
                <h4 className="font-extrabold text-sm text-[#1E1B4B]">{currentUser.name}</h4>
                <p className="text-[11px] text-stone-500">
                  {isImageAvatar(previewPhoto) ? pt.customUploadedImage : pt.traditionalMotifSymbol}
                </p>
              </div>
            </div>

            {/* Modal Tabs: Upload | Presets | URL */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setPhotoModalTab('upload')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                  photoModalTab === 'upload'
                    ? 'bg-white text-[#1E1B4B] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{pt.uploadFileTab}</span>
              </button>

              <button
                type="button"
                onClick={() => setPhotoModalTab('presets')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                  photoModalTab === 'presets'
                    ? 'bg-white text-[#1E1B4B] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LotusMotif size={16} color="#D97706" secondaryColor="#E11D48" />
                <span>{pt.artisanMotifsTab}</span>
              </button>

              <button
                type="button"
                onClick={() => setPhotoModalTab('url')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                  photoModalTab === 'url'
                    ? 'bg-white text-[#1E1B4B] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{pt.imageUrlTab}</span>
              </button>
            </div>

            {/* TAB CONTENT: UPLOAD FROM DEVICE */}
            {photoModalTab === 'upload' && (
              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/jpg"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                />

                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDraggingPhoto(true);
                  }}
                  onDragLeave={() => setIsDraggingPhoto(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all space-y-2 ${
                    isDraggingPhoto
                      ? 'border-[#E11D48] bg-rose-50/60'
                      : 'border-[#F59E0B] hover:bg-amber-50/50 bg-stone-50/50'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#B45309] flex items-center justify-center mx-auto shadow-xs">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#1E1B4B]">
                      {pt.clickOrDragPhoto}
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      {pt.supportsJpg}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: CULTURAL MOTIFS */}
            {photoModalTab === 'presets' && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-stone-500">
                  {pt.selectHeritageAvatar}
                </div>
                <div className="grid grid-cols-4 gap-2.5 max-h-60 overflow-y-auto p-1">
                  {ARTISAN_AVATAR_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setPreviewPhoto(preset.icon)}
                      className={`p-2.5 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-1 ${
                        previewPhoto === preset.icon
                          ? 'border-[#E11D48] bg-rose-50 shadow-sm scale-105'
                          : 'border-stone-200 hover:border-amber-300 bg-stone-50/60'
                      }`}
                    >
                      <span className="text-2xl">{preset.icon}</span>
                      <span className="text-[10px] font-extrabold text-stone-700 truncate w-full">
                        {preset.name.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: IMAGE URL */}
            {photoModalTab === 'url' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">
                    {pt.directImageUrlLabel}
                  </label>
                  <input
                    type="url"
                    value={customPhotoUrl}
                    onChange={(e) => {
                      setCustomPhotoUrl(e.target.value);
                      if (e.target.value.trim().startsWith('http')) {
                        setPreviewPhoto(e.target.value.trim());
                      }
                    }}
                    placeholder="https://example.com/artisan-photo.jpg"
                    className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] focus:outline-none"
                  />
                </div>
                <p className="text-[11px] text-stone-500">
                  {pt.pasteHttpsLink}
                </p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-100">
              <button
                type="button"
                onClick={() => setPreviewPhoto('🪷')}
                className="text-xs font-bold text-stone-500 hover:text-stone-800 underline"
              >
                {pt.resetToDefault}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100"
                >
                  {pt.cancel}
                </button>

                <button
                  type="button"
                  onClick={handleSavePhoto}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-[#1E1B4B] font-extrabold text-xs shadow-md border border-amber-300"
                >
                  {pt.savePhoto}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PROFILE MODAL */}
      {isEditModalOpen && (
        <div
          id="edit-profile-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-2 border-[#F59E0B] p-6 space-y-5 animate-scaleUp max-h-[90vh] overflow-y-auto relative">
            <OrnateCorner position="top-right" color="#F59E0B" size={32} />

            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#F59E0B]" />
                <h3 className="text-lg font-display font-extrabold text-[#1E1B4B]">{pt.editModalTitle}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.fullName}</label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.culturalRole}</label>
                <select
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                  className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                >
                  {CULTURAL_ROLES.map((r) => (
                    <option key={r} value={r}>
                      {getLocalizedRole(r, safeLang)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.stateRegion}</label>
                <select
                  value={editState}
                  onChange={(e) => setEditState(e.target.value)}
                  className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>
                      {STATE_NAME_TRANSLATIONS[safeLang]?.[st] || st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.craftSpecialty}</label>
                <input
                  type="text"
                  value={editCraftSpecialty}
                  onChange={(e) => setEditCraftSpecialty(e.target.value)}
                  placeholder="e.g. Madhubani, Pattachitra, Warli Murals"
                  className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">
                  {pt.persistentPasswordModal}
                </label>
                <input
                  type="password"
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                  placeholder="Set persistent password..."
                  className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.bioCulturalMission}</label>
                <textarea
                  rows={3}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100"
                >
                  {pt.cancel}
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] font-extrabold text-xs shadow-md border border-amber-300"
                >
                  {pt.saveProfileChanges}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GI ARTISAN VERIFICATION REQUEST MODAL */}
      {isVerificationModalOpen && (
        <div
          id="verification-request-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border-2 border-emerald-500 p-6 space-y-5 animate-scaleUp relative">
            <OrnateCorner position="top-right" color="#10B981" size={32} />

            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-display font-extrabold text-[#1E1B4B]">{pt.giModalTitle}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVerificationModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {verificationSubmitted ? (
              <div className="py-6 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <div className="font-extrabold text-sm text-[#1E1B4B]">{pt.giSuccessTitle}</div>
                <div className="text-xs text-stone-500">{pt.giSuccessSub}</div>
              </div>
            ) : (
              <form onSubmit={handleVerificationSubmit} className="space-y-4">
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pt.giModalInstruction}
                </p>

                <div>
                  <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.artisanStudioNameLabel}</label>
                  <input
                    type="text"
                    required
                    value={artisanGuildName}
                    onChange={(e) => setArtisanGuildName(e.target.value)}
                    className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-[#1E1B4B] block mb-1">{pt.pehchanGiCardNumber}</label>
                  <input
                    type="text"
                    required
                    value={artisanCardNum}
                    onChange={(e) => setArtisanCardNum(e.target.value)}
                    placeholder="e.g. GI-IND-2025-8849"
                    className="w-full bg-stone-50 border-2 border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setIsVerificationModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100"
                  >
                    {pt.cancel}
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md"
                  >
                    {pt.verifyGiStatusBtn}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
