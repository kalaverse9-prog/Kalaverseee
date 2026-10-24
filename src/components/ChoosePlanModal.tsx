import React, { useState } from 'react';
import { UserPlan } from '../types';
import { Check, Sparkles, Shield, Palette, ShoppingBag, Users, Calendar, Award, Star } from 'lucide-react';
import { SupportedLanguage, getTranslations } from '../data/translations';
import kalaVerseLogo from '../assets/images/kalaverse_monogram_logo_1790837371119.jpg';

interface ChoosePlanModalProps {
  isOpen: boolean;
  onSelectPlan: (plan: UserPlan, role: string) => void;
  userEmail?: string;
  userName?: string;
  language?: SupportedLanguage;
  onClose?: () => void;
}

export const ChoosePlanModal: React.FC<ChoosePlanModalProps> = ({
  isOpen,
  onSelectPlan,
  userName = 'Artisan Explorer',
  language = 'en',
  onClose
}) => {
  const t = getTranslations(language);
  const [selectedPlan, setSelectedPlan] = useState<UserPlan>('personal');
  const [selectedRole, setSelectedRole] = useState<string>('Art Enthusiast & Learner');
  const [agreedToEthicalPolicy, setAgreedToEthicalPolicy] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!agreedToEthicalPolicy) return;
    onSelectPlan(selectedPlan, selectedRole);
    if (onClose) onClose();
  };

  const isHi = language === 'hi';

  return (
    <div
      id="choose-plan-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D2D2D]/80 backdrop-blur-md p-4 overflow-y-auto"
    >
      <div
        id="choose-plan-modal-card"
        className="bg-[#FFF8E7] w-full max-w-4xl rounded-3xl border-2 border-[#F59E0B] shadow-2xl overflow-hidden my-8 animate-fadeIn text-[#2D2D2D]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1E293B] to-[#1E3A8A] text-[#FFF8E7] p-6 sm:p-8 text-center relative">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          )}
          <div className="flex flex-col items-center justify-center mb-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] via-[#FBBF24] to-[#B45309] p-0.5 shadow-xl overflow-hidden ring-2 ring-[#F59E0B]/50 mb-3 transform hover:scale-105 transition-transform">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> {isHi ? 'कलावेर्स में आपका स्वागत है' : 'Welcome to KalaVerse'}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            {isHi ? `नमस्ते, ${userName}! अपनी खाता श्रेणी चुनें` : `Namaste, ${userName}! Choose Your Account Tier`}
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8E7]/80 max-w-xl mx-auto">
            {t.choosePlanSub || (isHi
              ? 'कृपया चुनें कि क्या आप कला प्रेमी व संरक्षक के रूप में अन्वेषण कर रहे हैं, या मास्टरक्लास आयोजित करने और प्रमाणित शिल्प बेचने वाले उस्ताद कारीगर हैं।'
              : 'Please select whether you are exploring and learning as a cultural patron, or hosting masterclasses and selling certified crafts as a master artisan.')}
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Plan */}
            <div
              id="plan-card-personal"
              onClick={() => {
                setSelectedPlan('personal');
                setSelectedRole(isHi ? 'कला प्रेमी और शिक्षार्थी' : 'Art Enthusiast & Learner');
              }}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 relative flex flex-col justify-between ${
                selectedPlan === 'personal'
                  ? 'border-[#1E3A8A] bg-white ring-4 ring-[#1E3A8A]/10 shadow-lg'
                  : 'border-stone-200 bg-white/70 hover:border-[#1E3A8A]/50'
              }`}
            >
              {selectedPlan === 'personal' && (
                <div className="absolute -top-3 right-4 bg-[#1E3A8A] text-[#FFF8E7] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Check className="w-3.5 h-3.5" /> {isHi ? 'चयनित' : 'Selected'}
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A8A]">{t.choosePlanPersonal || (isHi ? 'व्यक्तिगत खाता' : 'Personal Account')}</h3>
                    <p className="text-xs text-stone-500">{isHi ? 'कला प्रेमियों, छात्रों और सांस्कृतिक यात्रियों के लिए' : 'For Art Lovers, Students & Cultural Travelers'}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-extrabold text-[#2D2D2D]">{isHi ? 'सदैव निःशुल्क' : 'Free Forever'}</span>
                  <span className="text-xs text-stone-500 block mt-0.5">{isHi ? 'खोजें, सीखें और प्रामाणिक हस्तशिल्प एकत्र करें' : 'Explore, learn, and collect authentic crafts'}</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 border-t border-b border-stone-200 py-4 my-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span><strong>{t.kalasathi || 'KalaSathi AI'}:</strong> {isHi ? 'पारंपरिक भारतीय कला सलाहकार और लोककथा मार्गदर्शक' : 'Traditional Indian art consultant & lore guide'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span><strong>{t.kalalens || 'KalaLens AI'}:</strong> {isHi ? 'आपकी कलाकृति पर कंप्यूटर विज़न विश्लेषण और प्रामाणिकता स्कोर' : 'Computer vision feedback & scoring on your artwork'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span><strong>{t.stateExplorer || 'State Explorer'}:</strong> {isHi ? 'क्षेत्रीय ट्यूटोरियल, पवित्र रूपांकन और मास्टरक्लास' : 'Regional tutorials, sacred motifs & masterclasses'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span><strong>{t.kalatour || 'KalaTour'}:</strong> {isHi ? 'प्रामाणिक शिल्प यात्रा कार्यक्रम और धरोहर मार्ग' : 'Authentic full-day single-day craft itineraries'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span><strong>{t.community || 'Community'} & {t.marketplace || 'Marketplace'}:</strong> {isHi ? 'कलाकृतियां पसंद करें और कारीगरों से सीधे खरीदें' : 'Like artworks and buy directly from artisans'}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('personal')}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-colors ${
                    selectedPlan === 'personal'
                      ? 'bg-[#1E3A8A] text-[#FFF8E7]'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {selectedPlan === 'personal' 
                    ? (isHi ? '✓ चयनित: व्यक्तिगत खाता' : '✓ Selected: Personal Account')
                    : (isHi ? 'व्यक्तिगत खाता चुनें' : 'Choose Personal Account')}
                </button>
              </div>
            </div>

            {/* Business / Master Artisan Plan */}
            <div
              id="plan-card-business"
              onClick={() => {
                setSelectedPlan('business');
                setSelectedRole(isHi ? 'उस्ताद कारीगर / सत्यापित विक्रेता' : 'Master Artisan / Verified Seller');
              }}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 relative flex flex-col justify-between ${
                selectedPlan === 'business'
                  ? 'border-[#F59E0B] bg-gradient-to-br from-amber-50/70 to-white ring-4 ring-[#F59E0B]/20 shadow-xl'
                  : 'border-stone-200 bg-white/70 hover:border-[#F59E0B]/50'
              }`}
            >
              <div className="absolute -top-3 left-4 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#2D2D2D] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Star className="w-3.5 h-3.5 fill-[#2D2D2D]" /> {isHi ? 'उस्ताद कारीगर और विक्रेता' : 'Master Artisan & Seller'}
              </div>

              {selectedPlan === 'business' && (
                <div className="absolute -top-3 right-4 bg-[#F59E0B] text-[#2D2D2D] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Check className="w-3.5 h-3.5" /> {isHi ? 'चयनित' : 'Selected'}
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-3 mt-2">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 text-[#D97706] flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A8A]">{t.choosePlanBusiness || (isHi ? 'व्यावसायिक खाता' : 'Business Account')}</h3>
                    <p className="text-xs text-stone-500">{isHi ? 'उस्ताद कारीगरों, गिल्ड और प्रशिक्षकों के लिए' : 'For Master Artisans, Guilds & Instructors'}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-extrabold text-[#B45309]">{isHi ? 'उस्ताद कारीगर श्रेणी' : 'Master Artisan Tier'}</span>
                  <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                    {t.wsPayoutNotice || (isHi ? '85% सीधा कारीगर भुगतान • 15% मंच शुल्क' : '85% Direct Artisan Payout • 15% Platform Commission')}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 border-t border-b border-stone-200 py-4 my-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                    <span><strong>{isHi ? 'व्यक्तिगत योजना की सभी सुविधाएं' : 'Everything in Personal Plan'}</strong> {isHi ? 'सम्मिलित' : 'included'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                    <span><strong>{isHi ? 'लाइव कार्यशालाएं आयोजित करें:' : 'Host Live Workshops:'}</strong> {isHi ? 'चित्र अपलोड और टिकट बिक्री के साथ मास्टरक्लास बनाएं' : 'Create masterclasses with image uploads & ticket sales'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                    <span><strong>{isHi ? 'प्रत्यक्ष बाज़ार स्टोर:' : 'Direct Marketplace Store:'}</strong> {isHi ? '85% सीधे भुगतान (15% कमीशन) के साथ जीआई-प्रमाणित कलाकृतियां सूचीबद्ध करें' : 'List GI-certified artworks with 85% direct payout (15% commission)'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                    <span><strong>{isHi ? 'सत्यापित कारीगर बैज:' : 'Verified Artisan Badge:'}</strong> {isHi ? 'आधिकारिक कारीगर संघ प्रामाणिकता बैज' : 'Official Artisan Guild authenticity badge'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                    <span><strong>{isHi ? 'कला टूर पर विशेष पड़ाव:' : 'Featured Tour Stops:'}</strong> {isHi ? 'आधिकारिक कला टूर कारीगर मार्गों पर सूचीबद्ध हों' : 'Get listed on official KalaTour artisan trails'}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('business')}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-colors ${
                    selectedPlan === 'business'
                      ? 'bg-[#F59E0B] text-[#2D2D2D] hover:bg-[#D97706]'
                      : 'bg-amber-100 text-[#B45309] hover:bg-amber-200'
                  }`}
                >
                  {selectedPlan === 'business' 
                    ? (isHi ? '✓ चयनित: व्यावसायिक खाता' : '✓ Selected: Business Account')
                    : (isHi ? 'व्यावसायिक खाता चुनें' : 'Choose Business Account')}
                </button>
              </div>
            </div>
          </div>

          {/* Ethical Principles & Privacy Commitment */}
          <div className="bg-[#FFF8E7] rounded-2xl p-4 border border-[#F59E0B]/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-stone-700">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#1E3A8A] text-xs uppercase tracking-wider mb-0.5">
                {isHi ? 'कलावेर्स गोपनीयता व निष्पक्ष व्यापार प्रतिबद्धता' : 'KalaVerse Privacy & Fair-Trade Commitment'}
              </p>
              <p>
                {isHi 
                  ? 'शून्य डेटा बिक्री प्रतिज्ञा। पूर्ण कला स्वामित्व। प्रमाणित भारतीय उस्ताद कारीगरों को 85% प्रत्यक्ष पारदर्शी भुगतान (15% मंच कमीशन)।'
                  : 'Zero data selling pledge. Full artwork ownership. Fair 85% direct payouts to certified Indian master artisans (15% platform commission).'}
              </p>
            </div>
            <label className="flex items-center gap-2 cursor-pointer shrink-0 font-bold text-[#1E3A8A]">
              <input
                type="checkbox"
                checked={agreedToEthicalPolicy}
                onChange={(e) => setAgreedToEthicalPolicy(e.target.checked)}
                className="w-4 h-4 text-[#1E3A8A] rounded border-stone-300 focus:ring-[#1E3A8A]"
              />
              <span>{isHi ? 'मैं शर्तें स्वीकार करता/करती हूँ' : 'I accept terms'}</span>
            </label>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-2">
            <button
              id="confirm-plan-btn"
              type="button"
              disabled={!agreedToEthicalPolicy}
              onClick={handleConfirm}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md flex items-center gap-2 ${
                agreedToEthicalPolicy
                  ? selectedPlan === 'business'
                    ? 'bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2D2D]'
                    : 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-[#FFF8E7]'
                  : 'bg-stone-300 text-stone-500 cursor-not-allowed'
              }`}
            >
              <span>
                {isHi 
                  ? (selectedPlan === 'business' ? 'उस्ताद कारीगर के रूप में प्रवेश करें' : 'संरक्षक व अन्वेषक के रूप में प्रवेश करें')
                  : `Enter KalaVerse as ${selectedPlan === 'business' ? 'Master Artisan' : 'Patron & Explorer'}`}
              </span>
              <Check className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
