import React, { useState } from 'react';
import { AppSection, UserProfile } from '../types';
import {
  Palette,
  Compass,
  MapPin,
  Sparkles,
  Shield,
  User as UserIcon,
  ChevronDown,
  Menu,
  X,
  Store,
  Video,
  Users,
  Eye,
  MessageSquare,
  Globe,
  Star,
  ShoppingBag,
  Phone
} from 'lucide-react';
import {
  SupportedLanguage,
  LANGUAGE_OPTIONS,
  TRANSLATIONS
} from '../data/translations';
import kalaVerseLogo from '../assets/images/kalaverse_monogram_logo_1790837371119.jpg';

interface NavbarProps {
  currentSection: AppSection;
  onNavigate: (section: AppSection) => void;
  user: UserProfile;
  onOpenPlanModal: () => void;
  onOpenPrivacyModal: () => void;
  language: SupportedLanguage;
  onOpenLanguageModal: () => void;
  cartCount?: number;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  user,
  onOpenPlanModal,
  onOpenPrivacyModal,
  language,
  onOpenLanguageModal,
  cartCount = 0,
  onOpenContactModal
}) => {
  const [isKalaKaarMenuOpen, setIsKalaKaarMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const currentLangObj =
    LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const isKalaKaarActive = [
    'kalakaar-sathi',
    'kalakaar-lens',
    'kalakaar-community',
    'kalakaar-workshops',
    'kalakaar-marketplace'
  ].includes(currentSection);

  const handleKalaKaarSubNav = (section: AppSection) => {
    onNavigate(section);
    setIsKalaKaarMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E3A8A] text-[#FFF8E7] shadow-md border-b-2 border-[#F59E0B]/30">
      {/* Top Auspicious Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#F59E0B] via-[#10B981] to-[#F59E0B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div
            id="brand-logo"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] via-[#FBBF24] to-[#B45309] p-0.5 shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-transform overflow-hidden ring-2 ring-[#F59E0B]/50 shrink-0">
              <img
                src={kalaVerseLogo}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/kalaverse_logo.jpg';
                }}
                alt="KalaVerse Indian Heritage Monogram Logo"
                className="w-full h-full object-cover rounded-[10px] bg-[#FFF8E7]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-2xl tracking-tight text-[#FFF8E7] group-hover:text-[#F59E0B] transition-colors">
                  कला<span className="text-[#F59E0B]">Verse</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 hidden sm:inline-block">
                  Heritage
                </span>
              </div>
              <p className="text-[11px] text-[#FFF8E7]/70 font-sans -mt-0.5 tracking-wide">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Home Link */}
            <button
              id="nav-home-btn"
              type="button"
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentSection === 'home'
                  ? 'bg-[#F59E0B] text-[#2D2D2D] shadow-sm'
                  : 'text-[#FFF8E7] hover:bg-white/10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.home}</span>
            </button>

            {/* KalaKaar Dropdown */}
            <div className="relative">
              <button
                id="nav-kalakaar-dropdown-btn"
                type="button"
                onClick={() => setIsKalaKaarMenuOpen(!isKalaKaarMenuOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isKalaKaarActive
                    ? 'bg-[#F59E0B] text-[#2D2D2D] shadow-sm'
                    : 'text-[#FFF8E7] hover:bg-white/10'
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>{t.kalakaarHub}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    isKalaKaarMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* KalaKaar Mega Menu */}
              {isKalaKaarMenuOpen && (
                <div
                  id="kalakaar-dropdown-menu"
                  className="absolute left-0 mt-2 w-72 bg-[#FFF8E7] text-[#2D2D2D] rounded-xl shadow-2xl border-2 border-[#F59E0B] p-2 space-y-1 z-50 animate-fadeIn"
                >
                  <button
                    type="button"
                    onClick={() => handleKalaKaarSubNav('kalakaar-sathi')}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors ${
                      currentSection === 'kalakaar-sathi'
                        ? 'bg-[#1E3A8A] text-[#FFF8E7]'
                        : 'hover:bg-amber-100/70'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/20 text-[#D97706] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.kalasathi}</div>
                      <div className="text-[11px] opacity-75">Painting ideas, lore & materials</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleKalaKaarSubNav('kalakaar-lens')}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors ${
                      currentSection === 'kalakaar-lens'
                        ? 'bg-[#1E3A8A] text-[#FFF8E7]'
                        : 'hover:bg-amber-100/70'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.kalalens}</div>
                      <div className="text-[11px] opacity-75">Upload art for AI analysis & score</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleKalaKaarSubNav('kalakaar-community')}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors ${
                      currentSection === 'kalakaar-community'
                        ? 'bg-[#1E3A8A] text-[#FFF8E7]'
                        : 'hover:bg-amber-100/70'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EC4899]/20 text-[#EC4899] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.community}</div>
                      <div className="text-[11px] opacity-75">Upload pictures & connect with artisans</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleKalaKaarSubNav('kalakaar-workshops')}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors ${
                      currentSection === 'kalakaar-workshops'
                        ? 'bg-[#1E3A8A] text-[#FFF8E7]'
                        : 'hover:bg-amber-100/70'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.workshops}</div>
                      <div className="text-[11px] opacity-75">Paid & free masterclasses</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleKalaKaarSubNav('kalakaar-marketplace')}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors ${
                      currentSection === 'kalakaar-marketplace'
                        ? 'bg-[#1E3A8A] text-[#FFF8E7]'
                        : 'hover:bg-amber-100/70'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/20 text-[#D97706] flex items-center justify-center shrink-0">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.marketplace}</div>
                      <div className="text-[11px] opacity-75">Direct seller to customer with GI tag</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* State Explorer Link */}
            <button
              id="nav-map-btn"
              type="button"
              onClick={() => onNavigate('map')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentSection === 'map'
                  ? 'bg-[#F59E0B] text-[#2D2D2D] shadow-sm'
                  : 'text-[#FFF8E7] hover:bg-white/10'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{t.atlasMap}</span>
            </button>

            {/* KalaTour Link */}
            <button
              id="nav-kalatour-btn"
              type="button"
              onClick={() => onNavigate('kalatour')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentSection === 'kalatour'
                  ? 'bg-[#F59E0B] text-[#2D2D2D] shadow-sm'
                  : 'text-[#FFF8E7] hover:bg-white/10'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{t.craftTrails}</span>
            </button>

            {/* Reviews Link */}
            <button
              id="nav-reviews-btn"
              type="button"
              onClick={() => onNavigate('reviews')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentSection === 'reviews'
                  ? 'bg-[#F59E0B] text-[#2D2D2D] shadow-sm'
                  : 'text-[#FFF8E7] hover:bg-white/10'
              }`}
            >
              <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <span>Reviews</span>
            </button>

            {/* Profile Link */}
            <button
              id="nav-profile-btn"
              type="button"
              onClick={() => onNavigate('profile')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentSection === 'profile'
                  ? 'bg-[#F59E0B] text-[#2D2D2D] shadow-sm'
                  : 'text-[#FFF8E7] hover:bg-white/10'
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span>{t.profile}</span>
            </button>
          </nav>

          {/* Right Action Widgets (Cart, Language Picker, Plan Badge, Profile) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Shopping Cart Button */}
            <button
              id="nav-cart-btn"
              type="button"
              onClick={() => onNavigate('cart-billing')}
              title="Shopping Cart & Billing"
              className={`relative p-2.5 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                currentSection === 'cart-billing'
                  ? 'bg-[#F59E0B] text-[#1E1B4B] border-[#F59E0B] shadow-md scale-105'
                  : 'bg-white/15 hover:bg-white/25 border-white/30 text-[#FFF8E7]'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#FEF08A]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow border border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Language Switcher Pill */}
            <button
              id="nav-language-picker-btn"
              type="button"
              onClick={onOpenLanguageModal}
              title="Change App Language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-[#FFF8E7] text-xs font-bold transition-all shadow-sm group"
            >
              <span className="text-sm">{currentLangObj.icon}</span>
              <span className="group-hover:text-[#F59E0B] transition-colors">{currentLangObj.nativeName}</span>
              <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>

            {/* Contact Button */}
            {onOpenContactModal && (
              <button
                id="nav-contact-btn"
                type="button"
                onClick={onOpenContactModal}
                title="Contact KalaVerse (@kalaverse12 / 9987349872)"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F59E0B]/20 hover:bg-[#F59E0B]/35 border border-[#F59E0B]/50 text-[#FEF08A] hover:text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Contact</span>
              </button>
            )}

            {/* User Plan Badge & Switcher */}
            <button
              id="user-plan-badge"
              type="button"
              onClick={onOpenPlanModal}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                user.plan === 'business'
                  ? 'bg-[#F59E0B] text-[#2D2D2D] hover:bg-[#D97706]'
                  : 'bg-white/20 text-[#FFF8E7] hover:bg-white/30 border border-white/30'
              }`}
            >
              <span>{user.plan === 'business' ? '👑 Business Plan' : '🌿 Personal Plan'}</span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="w-10 h-10 rounded-full bg-[#F59E0B]/20 border-2 border-[#F59E0B] flex items-center justify-center text-lg hover:scale-105 transition-transform overflow-hidden shadow-inner"
              >
                {user.avatar && (user.avatar.startsWith('data:image') || user.avatar.startsWith('http')) ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{user.avatar || '🎨'}</span>
                )}
              </button>

              {isProfileMenuOpen && (
                <div
                  id="profile-dropdown-menu"
                  className="absolute right-0 mt-2 w-64 bg-[#FFF8E7] text-[#2D2D2D] rounded-xl shadow-2xl border-2 border-[#F59E0B] p-3 space-y-2 z-50 animate-fadeIn"
                >
                  <div className="border-b border-stone-200 pb-2">
                    <div className="font-bold text-sm text-[#1E3A8A]">{user.name}</div>
                    <div className="text-xs text-stone-500">{user.email}</div>
                    <div className="text-[11px] font-semibold text-[#D97706] mt-0.5">{user.role}</div>
                  </div>

                  <button
                    type="button"
                    id="profile-dropdown-view-profile-btn"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onNavigate('profile');
                    }}
                    className="w-full flex items-center gap-2 p-2.5 text-xs font-bold rounded-xl bg-[#1E3A8A] text-[#FFF8E7] hover:bg-[#1E3A8A]/90 text-left transition-colors shadow-sm"
                  >
                    <UserIcon className="w-4 h-4 text-[#F59E0B]" />
                    <span>{t.profile}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onOpenLanguageModal();
                    }}
                    className="w-full flex items-center gap-2 p-2 text-xs font-semibold rounded-lg hover:bg-amber-100 text-left text-[#1E3A8A]"
                  >
                    <Globe className="w-4 h-4 text-[#F59E0B]" />
                    <span>Language: {currentLangObj.nativeName} ({currentLangObj.name})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onOpenPlanModal();
                    }}
                    className="w-full flex items-center gap-2 p-2 text-xs font-semibold rounded-lg hover:bg-amber-100 text-left text-[#1E3A8A]"
                  >
                    <UserIcon className="w-4 h-4" />
                    <span>Change Plan ({user.plan === 'business' ? 'Business' : 'Personal'})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onOpenPrivacyModal();
                    }}
                    className="w-full flex items-center gap-2 p-2 text-xs font-semibold rounded-lg hover:bg-amber-100 text-left text-[#1E3A8A]"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Privacy & Security</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button & Mobile Cart / Language button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate('cart-billing')}
              className={`relative p-1.5 rounded-full border flex items-center justify-center ${
                currentSection === 'cart-billing'
                  ? 'bg-[#F59E0B] text-[#1E1B4B] border-[#F59E0B]'
                  : 'bg-white/20 text-[#FFF8E7] border-white/30'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={onOpenLanguageModal}
              className="px-2 py-1 rounded-full text-xs font-bold bg-white/20 text-[#FFF8E7] flex items-center gap-1"
            >
              <span>{currentLangObj.icon}</span>
              <span>{currentLangObj.nativeName}</span>
            </button>
            <button
              type="button"
              onClick={onOpenPlanModal}
              className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-[#2D2D2D]"
            >
              {user.plan === 'business' ? 'Business' : 'Personal'}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#FFF8E7] hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E293B] text-[#FFF8E7] border-t border-white/10 px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 pb-1 border-b border-white/10">
            <button
              type="button"
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 p-2.5 rounded-lg bg-[#F59E0B] text-[#2D2D2D] text-left text-sm font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.home}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLanguageModal();
              }}
              className="p-2.5 rounded-lg bg-white/10 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <Globe className="w-4 h-4 text-[#F59E0B]" />
              <span>{currentLangObj.nativeName}</span>
            </button>
          </div>

          <div className="font-semibold text-xs text-[#F59E0B] uppercase tracking-wider">{t.kalakaarHub}</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleKalaKaarSubNav('kalakaar-sathi')}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-xs font-medium flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.kalasathi}</span>
            </button>
            <button
              type="button"
              onClick={() => handleKalaKaarSubNav('kalakaar-lens')}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-xs font-medium flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#10B981]" />
              <span>{t.kalalens}</span>
            </button>
            <button
              type="button"
              onClick={() => handleKalaKaarSubNav('kalakaar-community')}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-xs font-medium flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-[#EC4899]" />
              <span>{t.community}</span>
            </button>
            <button
              type="button"
              onClick={() => handleKalaKaarSubNav('kalakaar-workshops')}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-xs font-medium flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-[#3B82F6]" />
              <span>{t.workshops}</span>
            </button>
            <button
              type="button"
              onClick={() => handleKalaKaarSubNav('kalakaar-marketplace')}
              className="col-span-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-xs font-medium flex items-center gap-2"
            >
              <Store className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.marketplace}</span>
            </button>
          </div>

          <div className="border-t border-white/10 pt-2 space-y-2">
            <button
              type="button"
              onClick={() => {
                onNavigate('map');
                setIsMobileMenuOpen(false);
              }}
              className="w-full p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-sm font-semibold flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.atlasMap}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('kalatour');
                setIsMobileMenuOpen(false);
              }}
              className="w-full p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-sm font-semibold flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.craftTrails}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('reviews');
                setIsMobileMenuOpen(false);
              }}
              className="w-full p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-sm font-semibold flex items-center gap-2"
            >
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Reviews</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('cart-billing');
                setIsMobileMenuOpen(false);
              }}
              className="w-full p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left text-sm font-semibold flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#F59E0B]" />
                <span>Cart & Billing Checkout</span>
              </div>
              {cartCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold">
                  {cartCount} items
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('profile');
                setIsMobileMenuOpen(false);
              }}
              className="w-full p-2.5 rounded-lg bg-[#F59E0B] text-[#2D2D2D] text-left text-sm font-bold flex items-center gap-2"
            >
              <UserIcon className="w-4 h-4 text-[#1E3A8A]" />
              <span>{user.name} ({t.profile})</span>
            </button>
          </div>

          <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPrivacyModal();
              }}
              className="text-stone-300 underline"
            >
              Privacy & Rights
            </button>

            {onOpenContactModal && (
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B] text-[#1E1B4B] font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
