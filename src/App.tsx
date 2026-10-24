import React, { useState, useEffect } from 'react';
import { AppSection, UserProfile, UserPlan, CartItem, MarketplaceListing } from './types';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ChoosePlanModal } from './components/ChoosePlanModal';
import { LanguageSelectModal } from './components/LanguageSelectModal';
import { PrivacyEthicsModal } from './components/PrivacyEthicsModal';
import { ContactModal } from './components/ContactModal';
import { KalaSathi } from './components/KalaSathi';
import { KalaLens } from './components/KalaLens';
import { StateMapExplorer } from './components/StateMapExplorer';
import { KalaTour } from './components/KalaTour';
import { KalaWorkshops } from './components/KalaWorkshops';
import { ArtisanMarketplace } from './components/ArtisanMarketplace';
import { CommunityFeed } from './components/CommunityFeed';
import { ProfilePage } from './components/ProfilePage';
import { ReviewsPage } from './components/ReviewsPage';
import { CartBillingPage } from './components/CartBillingPage';
import { KalaAgent } from './components/KalaAgent';
import { SupportedLanguage } from './data/translations';
import { Shield, Sparkles, Heart, Globe, Award, Phone, Mail, Instagram, ExternalLink } from 'lucide-react';
import { ToranBorder } from './components/CulturalMotifs';

const INITIAL_USER: UserProfile = {
  id: 'user_kalaverse_1',
  name: 'Aarav Sharma',
  email: 'kalaverse66@gmail.com',
  avatar: '🪷',
  plan: 'personal',
  role: 'Art Enthusiast & Learner',
  verificationStatus: 'verified',
  state: 'Rajasthan',
  joinedDate: '2025-01-15',
  likedPostIds: [],
  followedArtistIds: ['Sunita Devi'],
  registeredWorkshopIds: [],
  competitionEntryIds: [],
  cart: []
};

export default function App() {
  const [currentSection, setCurrentSection] = useState<AppSection>('home');

  // Shared Global Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kalaverse_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kalaverse_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const handleAddToCart = (listing: MarketplaceListing) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === listing.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === listing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `cart_${Date.now()}`,
          productId: listing.id,
          title: listing.title,
          price: listing.priceINR || listing.price || 0,
          quantity: 1,
          sellerName: listing.artisanName || listing.sellerName || 'Verified Artisan',
          sellerId: listing.artisanId || 'artisan_1',
          imageUrl: listing.imageUrl || ''
        }
      ];
    });
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartId));
  };

  const handleUpdateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
  };
  
  // App Preview Language State
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('kalaverse_preview_language') as SupportedLanguage;
    return saved || 'en';
  });

  // Entry Language & Account Type Gate (Shown before the app opens)
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(() => {
    return !sessionStorage.getItem('kalaverse_session_entered');
  });

  // Entry Plan Choice Gate
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Persistent KalaYatri AI Cultural Travel Concierge Agent
  const [isAgentOpen, setIsAgentOpen] = useState<boolean>(false);
  const [activeTourContext, setActiveTourContext] = useState<any>(null);

  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('kalaverse_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_USER;
      }
    }
    return INITIAL_USER;
  });

  useEffect(() => {
    localStorage.setItem('kalaverse_user_profile', JSON.stringify(user));
  }, [user]);

  const handleSelectPlan = (plan: UserPlan, role: string) => {
    setUser((prev) => ({
      ...prev,
      plan,
      role
    }));
    localStorage.setItem('kalaverse_plan_selected', 'true');
    localStorage.setItem('kalaverse_onboarding_completed', 'true');
    setIsPlanModalOpen(false);
  };

  const handleSaveLanguage = (
    lang: SupportedLanguage,
    plan: UserPlan,
    role: string
  ) => {
    setSelectedLanguage(lang);
    setUser((prev) => ({
      ...prev,
      plan,
      role
    }));
    localStorage.setItem('kalaverse_preview_language', lang);
    localStorage.setItem('kalaverse_plan_selected', 'true');
    localStorage.setItem('kalaverse_onboarding_completed', 'true');
    sessionStorage.setItem('kalaverse_session_entered', 'true');
    setIsLanguageModalOpen(false);
  };

  const handleResetData = () => {
    localStorage.removeItem('kalaverse_user_profile');
    localStorage.removeItem('kalaverse_plan_selected');
    localStorage.removeItem('kalaverse_onboarding_completed');
    localStorage.removeItem('kalaverse_preview_language');
    sessionStorage.removeItem('kalaverse_session_entered');
    setUser(INITIAL_USER);
    setSelectedLanguage('en');
    setIsLanguageModalOpen(true);
    setIsPlanModalOpen(false);
    setIsContactModalOpen(false);
  };

  const renderActiveSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentSection}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
            onOpenContactModal={() => setIsContactModalOpen(true)}
            currentUser={user}
            language={selectedLanguage}
          />
        );

      case 'map':
      case 'state-detail':
        return (
          <StateMapExplorer
            language={selectedLanguage}
            onNavigateToTour={(stateId) => {
              setCurrentSection('kalatour');
            }}
            onNavigateToSathi={(stateName, artForm) => {
              setCurrentSection('kalakaar-sathi');
            }}
          />
        );

      case 'kalakaar-sathi':
        return <KalaSathi language={selectedLanguage} />;

      case 'kalakaar-lens':
        return <KalaLens language={selectedLanguage} />;

      case 'kalakaar-community':
        return (
          <CommunityFeed
            currentUser={user}
            language={selectedLanguage}
          />
        );

      case 'kalakaar-workshops':
        return (
          <KalaWorkshops
            currentUser={user}
            language={selectedLanguage}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
          />
        );

      case 'kalakaar-marketplace':
        return (
          <ArtisanMarketplace
            currentUser={user}
            language={selectedLanguage}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onNavigate={setCurrentSection}
          />
        );

      case 'reviews':
        return (
          <ReviewsPage
            currentUser={user}
            language={selectedLanguage}
            onNavigate={setCurrentSection}
          />
        );

      case 'cart-billing':
        return (
          <CartBillingPage
            currentUser={user}
            cart={cart}
            onUpdateCart={handleUpdateCart}
            onNavigate={setCurrentSection}
            language={selectedLanguage}
          />
        );

      case 'kalatour':
        return (
          <KalaTour
            language={selectedLanguage}
            onOpenAgent={(tourContext) => {
              setActiveTourContext(tourContext);
              setIsAgentOpen(true);
            }}
          />
        );

      case 'profile':
        return (
          <ProfilePage
            currentUser={user}
            onUpdateUser={(updatedData) =>
              setUser((prev) => ({ ...prev, ...updatedData }))
            }
            onNavigate={setCurrentSection}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
            language={selectedLanguage}
          />
        );

      default:
        return (
          <HomePage
            onNavigate={setCurrentSection}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
            currentUser={user}
            language={selectedLanguage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#2D2D2D] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-[#2D2D2D]">
      {/* Primary Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={setCurrentSection}
        user={user}
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        language={selectedLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 pb-16">{renderActiveSection()}</main>

      {/* Cultural Heritage Footer */}
      <footer className="bg-[#1E1B4B] text-[#FFF8E7] border-t-4 border-[#F59E0B] py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <ToranBorder color="#F59E0B" accentColor="#E11D48" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
          {/* Prominent Contact Banner below the app page */}
          <div className="bg-gradient-to-r from-stone-900/90 via-[#1E1B4B]/90 to-stone-900/90 border border-amber-500/40 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FEF08A] border border-[#F59E0B]/40 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Direct Artisan & Support Desk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#FFF8E7]">
                Connect With KalaVerse Cultural Support
              </h3>
              <p className="text-xs text-stone-300 max-w-xl">
                Have questions about authentic heritage art, custom masterclass bookings, or artisan partnerships? Reach out directly via Instagram, phone call, or email.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {/* Instagram Pill */}
              <a
                href="https://www.instagram.com/kalaverse12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-pink-400/40 text-white text-xs font-semibold transition-all hover:scale-105"
                title="Instagram ID: kalaverse12"
              >
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white text-xs">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>@kalaverse12</span>
              </a>

              {/* Phone Pill */}
              <a
                href="tel:9987349872"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-emerald-400/40 text-white text-xs font-semibold transition-all hover:scale-105"
                title="Phone No: 9987349872"
              >
                <div className="w-5 h-5 rounded-md bg-emerald-600 flex items-center justify-center text-white text-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono">9987349872</span>
              </a>

              {/* Email Pill */}
              <a
                href="mailto:kalaverse9@gmail.com"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/40 text-white text-xs font-semibold transition-all hover:scale-105"
                title="Email: kalaverse9@gmail.com"
              >
                <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono">kalaverse9@gmail.com</span>
              </a>

              {/* Contact Button */}
              <button
                type="button"
                id="footer-contact-desk-btn"
                onClick={() => setIsContactModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] via-amber-400 to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#1E1B4B] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-amber-500/30 transition-transform hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#1E1B4B]" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Lore */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#F59E0B] text-[#1E3A8A] flex items-center justify-center font-bold text-lg">
                  क
                </div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-[#FFF8E7]">
                  कला<span className="text-[#F59E0B]">Verse</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Dedicated to honoring and preserving traditional Indian arts, folk crafts, and GI-certified artisanal lineages across all 28 states and 8 union territories.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F59E0B]/20 text-[#FEF08A] border border-[#F59E0B]/40 text-xs font-bold hover:bg-[#F59E0B]/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Artisan Assistance Desk</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                KalaVerse Hubs
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('kalakaar-sathi')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    KalaSathi (AI Consultant)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('kalakaar-lens')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    KalaLens (CV Feedback)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('kalatour')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    कलाTour (Craft Itineraries)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('map')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    State Explorer & Tutorials
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('kalakaar-marketplace')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Artisan Marketplace
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('reviews')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Artisan & Patron Reviews
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('cart-billing')}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Shopping Cart & Billing Checkout
                  </button>
                </li>
              </ul>
            </div>

            {/* Settings & Plans */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Account & Settings
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentSection('profile')}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 font-semibold text-white"
                  >
                    <span>🪷 My Profile & Mastery Hub</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsLanguageModalOpen(true)}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Language Settings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsPlanModalOpen(true)}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Account Tier (Personal / Business)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Zero Data-Selling Pledge
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Data Ownership & Deletion
                  </button>
                </li>
              </ul>
            </div>

            {/* Official Contact Channels */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Official Contact
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href="https://www.instagram.com/kalaverse12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-300 hover:text-white group"
                  >
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-pink-300 block font-semibold">Instagram ID</span>
                      <span className="font-mono text-white font-medium">kalaverse12</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:9987349872"
                    className="flex items-center gap-2 text-stone-300 hover:text-white group"
                  >
                    <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-300 block font-semibold">Phone Support</span>
                      <span className="font-mono text-white font-medium">9987349872</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kalaverse9@gmail.com"
                    className="flex items-center gap-2 text-stone-300 hover:text-white group"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-blue-300 block font-semibold">Email Desk</span>
                      <span className="font-mono text-white font-medium text-[11px] truncate block">kalaverse9@gmail.com</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#1E1B4B] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all hover:scale-102"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Open Contact Desk</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>© {new Date().getFullYear()} KalaVerse (कलाVerse). Preserving India's Living Heritage.</div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span>Authentic Vedic & Folk Crafts</span>
              <span>•</span>
              <button
                type="button"
                onClick={() => setIsLanguageModalOpen(true)}
                className="underline hover:text-white"
              >
                Change Language
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setIsPlanModalOpen(true)}
                className="underline hover:text-white"
              >
                Account Tier
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(true)}
                className="underline hover:text-white"
              >
                Privacy & Ethics
              </button>
              <span>•</span>
              <button
                type="button"
                id="footer-bottom-contact-link"
                onClick={() => setIsContactModalOpen(true)}
                className="underline hover:text-white text-[#F59E0B] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Contact Us (@kalaverse12)</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Quick Contact Button */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          type="button"
          id="floating-contact-btn"
          onClick={() => setIsContactModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#1E1B4B] to-[#1E3A8A] text-[#FFF8E7] shadow-xl border-2 border-[#F59E0B] hover:scale-105 active:scale-95 transition-all text-xs font-bold group cursor-pointer"
          title="Contact KalaVerse (Instagram: kalaverse12, Phone: 9987349872, Email: kalaverse9@gmail.com)"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
          </span>
          <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Contact Us</span>
          <span className="hidden sm:inline text-[10px] text-amber-300 font-mono">@kalaverse12</span>
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        language={selectedLanguage}
      />

      {/* Language Selection Modal (Onboarding Gate & Settings) */}
      <LanguageSelectModal
        isOpen={isLanguageModalOpen}
        currentLanguage={selectedLanguage}
        currentPlan={user.plan}
        currentRole={user.role}
        onPreviewLanguageChange={(lang) => {
          setSelectedLanguage(lang);
          localStorage.setItem('kalaverse_preview_language', lang);
        }}
        onSavePreferences={handleSaveLanguage}
        onClose={() => setIsLanguageModalOpen(false)}
        userName={user.name}
        isInitialOnboarding={!sessionStorage.getItem('kalaverse_session_entered')}
      />

      {/* Plan Choice Modal */}
      <ChoosePlanModal
        isOpen={isPlanModalOpen}
        onSelectPlan={handleSelectPlan}
        userName={user.name}
        onClose={() => setIsPlanModalOpen(false)}
      />

      {/* Privacy & Ethics Modal */}
      <PrivacyEthicsModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        onResetData={handleResetData}
      />

      {/* Persistent KalaYatri AI Cultural Travel Concierge Agent */}
      <KalaAgent
        language={selectedLanguage}
        userProfile={user}
        onUpdateUserProfile={(updated) => setUser((prev) => ({ ...prev, ...updated }))}
        isOpen={isAgentOpen}
        onToggleOpen={setIsAgentOpen}
        onNavigateSection={setCurrentSection}
        activeTourContext={activeTourContext}
      />
    </div>
  );
}
