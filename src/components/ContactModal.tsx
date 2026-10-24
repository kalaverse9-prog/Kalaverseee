import React, { useState } from 'react';
import {
  X,
  Phone,
  Mail,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  ShieldCheck,
  Calendar,
  Palette,
  Users
} from 'lucide-react';
import { SupportedLanguage } from '../data/translations';
import { ToranBorder } from './CulturalMotifs';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: SupportedLanguage;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  language = 'en'
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  const isHindi = language === 'hi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FFF8E7] text-[#2D2D2D] rounded-3xl shadow-2xl border-2 border-[#F59E0B] overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Top Decorative Toran Header */}
        <div className="relative bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#1E1B4B] text-[#FFF8E7] p-5 sm:p-6 border-b-2 border-[#F59E0B]">
          <div className="absolute top-0 left-0 right-0">
            <ToranBorder color="#F59E0B" accentColor="#E11D48" />
          </div>

          <div className="flex items-center justify-between relative z-10 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-[#1E1B4B] flex items-center justify-center font-bold text-xl shadow-md">
                <Phone className="w-5 h-5 text-[#1E1B4B]" />
              </div>
              <div>
                <h3 id="contact-modal-title" className="font-display font-extrabold text-xl sm:text-2xl text-[#FFF8E7] tracking-tight">
                  {isHindi ? 'कलाVerse से संपर्क करें' : 'Contact KalaVerse'}
                </h3>
                <p className="text-xs text-stone-300 font-sans">
                  {isHindi
                    ? 'पारंपरिक कला पूछताछ, कारीगर सहयोग व सहायता'
                    : 'Artisan Coordination, Heritage Queries & Support'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Close Contact Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Quick Notice Banner */}
          <div className="bg-amber-50 border border-amber-300/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">
                {isHindi ? 'सीधा संपर्क सूत्र' : 'Official KalaVerse Direct Channels'}
              </p>
              <p className="text-stone-700 leading-relaxed text-[11px] sm:text-xs">
                {isHindi
                  ? 'कला प्रेमियों, शिल्पकारों और सांस्कृतिक यात्रियों के लिए हमारे संपर्क विवरण नीचे उपलब्ध हैं। आप हमें इंस्टाग्राम, कॉल या ईमेल के माध्यम से सीधे संपर्क कर सकते हैं।'
                  : 'Reach out directly to our artisan desk for handcrafted commissions, workshop bookings, state crafts, and platform inquiries.'}
              </p>
            </div>
          </div>

          {/* 3 Core Contact Cards (Instagram, Phone, Email) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* 1. Instagram */}
            <div className="bg-white rounded-2xl p-4 border border-rose-200/80 hover:border-pink-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-xs">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                    Instagram
                  </span>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500 font-medium">Instagram Handle</div>
                  <div className="font-bold text-sm sm:text-base text-stone-800 tracking-tight font-mono">
                    @kalaverse12
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-stone-100 flex items-center gap-1.5">
                <a
                  href="https://www.instagram.com/kalaverse12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('kalaverse12', 'instagram')}
                  className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs transition-colors shrink-0"
                  title="Copy Instagram ID"
                >
                  {copiedItem === 'instagram' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* 2. Phone */}
            <div className="bg-white rounded-2xl p-4 border border-emerald-200/80 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Call & WhatsApp
                  </span>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500 font-medium">Phone Support</div>
                  <div className="font-bold text-sm sm:text-base text-stone-800 tracking-tight font-mono">
                    9987349872
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-stone-100 flex items-center gap-1.5">
                <a
                  href="tel:9987349872"
                  className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919987349872?text=Hello%20KalaVerse%20Team%2C%20I%20have%20an%20inquiry%20regarding%20traditional%20Indian%20arts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold flex items-center justify-center transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('9987349872', 'phone')}
                  className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs transition-colors shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* 3. Email */}
            <div className="bg-white rounded-2xl p-4 border border-blue-200/80 hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1E3A8A] to-blue-500 text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Official Mail
                  </span>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500 font-medium">Email Desk</div>
                  <div className="font-bold text-xs sm:text-[13px] text-stone-800 tracking-tight font-mono break-all">
                    kalaverse9@gmail.com
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-stone-100 flex items-center gap-1.5">
                <a
                  href="mailto:kalaverse9@gmail.com?subject=KalaVerse%20Cultural%20Inquiry"
                  className="flex-1 py-1.5 px-2 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all"
                >
                  <Mail className="w-3 h-3" />
                  <span>Send Mail</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('kalaverse9@gmail.com', 'email')}
                  className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs transition-colors shrink-0"
                  title="Copy Email Address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Guidance Cards */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3.5">
            <h4 className="font-bold text-stone-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              {isHindi ? 'त्वरित सहायता व मार्गदर्शन' : 'How We Can Assist You'}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <Palette className="w-3.5 h-3.5 text-rose-600" />
                  <span>Custom Commissions</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  Request bespoke Madhubani, Pichwai, Kalamkari, or Tanjore masterworks directly crafted by national awardees.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Artisan Onboarding</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  Weavers and craftspeople receive transparent 85% direct payouts and 15% platform commission with GI verification.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <Calendar className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  <span>Tours & Workshops</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  Book live artisan studio masterclasses, immersive craft residency tours, and group cultural expeditions.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Details */}
          <div className="pt-2 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Pan-India Lineages: Jaipur • Madhubani • Srikalahasti • Varanasi</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Verified Authentic Artisans & 85% Direct Remuneration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
