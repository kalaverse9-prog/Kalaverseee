import React, { useState } from 'react';
import { ArtisanReview, UserProfile, AppSection } from '../types';
import {
  Star,
  Award,
  CheckCircle2,
  ThumbsUp,
  PlusCircle,
  Filter,
  Search,
  MessageSquare,
  Sparkles,
  ShoppingBag,
  Video,
  Compass,
  X,
  Camera,
  Calendar,
  MapPin
} from 'lucide-react';
import { SupportedLanguage, getTranslations } from '../data/translations';
import {
  LotusMotif,
  PeacockMotif,
  PaisleyMotif,
  MandalaRosette,
  ToranBorder,
  OrnateCorner,
  SectionHeaderBanner
} from './CulturalMotifs';

interface ReviewsPageProps {
  currentUser: UserProfile;
  language?: SupportedLanguage;
  onNavigate: (section: AppSection) => void;
}

const INITIAL_REVIEWS: ArtisanReview[] = [
  {
    id: 'rev_1',
    authorName: 'Priya Sundaram',
    authorLocation: 'Bengaluru, Karnataka',
    authorAvatar: '🪷',
    rating: 5,
    category: 'Marketplace Art',
    targetTitle: 'Sacred Mithila Matsya & Lotus Canvas',
    artisanName: 'Sunita Devi (Master Chitrakar)',
    artForm: 'Madhubani / Mithila Painting',
    date: '2 days ago',
    comment:
      'The handcrafted precision is breathtaking. You can immediately feel the organic texture of the cow-dung washed handmade wasli paper. The fine diagonal Katchni hatching is razor-sharp, and knowing that 85% of my payment went directly to Sunita Devi in Jitwarpur (with transparent 15% platform commission) makes this so meaningful.',
    verifiedPurchase: true,
    helpfulCount: 24,
    highlight: 'Museum-grade authentic linework & transparent artisan payout',
    photoUrl: '/assets/states/bihar.jpg'
  },
  {
    id: 'rev_2',
    authorName: 'Vikramaditya Rathore',
    authorLocation: 'Jaipur, Rajasthan',
    authorAvatar: '🎨',
    rating: 5,
    category: 'Workshops',
    targetTitle: 'Live Atelier: Warli Tribal Geometries & The Cosmic Tarpa',
    artisanName: 'Jivya Soma Mashe Guild Master',
    artForm: 'Warli Folk Tribal Art',
    date: '4 days ago',
    comment:
      'The live workshop was an unforgettable experience. The master artisan explained the sacred philosophy behind the opposing triangles representing male and female harmony in nature. The meeting link worked seamlessly, and being able to chat directly with the artist before the class helped me prepare my terracotta mud base perfectly.',
    verifiedPurchase: true,
    helpfulCount: 19,
    highlight: 'Direct interactive guidance from living tribal masters'
  },
  {
    id: 'rev_3',
    authorName: 'Ananya Banerjee',
    authorLocation: 'Kolkata, West Bengal',
    authorAvatar: '🌺',
    rating: 5,
    category: 'Marketplace Art',
    targetTitle: '24K Gold Foil & Kundan Gemstone Thanjavur Arch',
    artisanName: 'Ramanathan Sthapathy',
    artForm: 'Thanjavur (Tanjore) Painting',
    date: '1 week ago',
    comment:
      'The video demonstration displayed beside the artwork in the marketplace gave me total confidence before purchasing. When the painting arrived, the 22K gold foil relief and embedded Jaipur gemstones caught the morning sunlight exactly like in the video. True temple heritage.',
    verifiedPurchase: true,
    helpfulCount: 31,
    highlight: 'Video preview matched the delivered physical heirloom 100%'
  },
  {
    id: 'rev_4',
    authorName: 'Marcus Lindqvist',
    authorLocation: 'Stockholm, Sweden',
    authorAvatar: '🧭',
    rating: 5,
    category: 'Cultural Tours',
    targetTitle: 'Raghurajpur Heritage Village Craftsmen Trail',
    artisanName: 'Bhikari Chitrakar Lineage',
    artForm: 'Raghurajpur Pattachitra',
    date: '2 weeks ago',
    comment:
      'A deeply moving cultural journey. We visited master Chitrakars grinding conch shell white and boiling tree resin. The digital travel voucher and itinerary guide on KalaVerse made traveling to rural Puri so seamless and respectful to local customs.',
    verifiedPurchase: true,
    helpfulCount: 15,
    highlight: 'Zero middlemen, genuine cultural respect and warmth'
  },
  {
    id: 'rev_5',
    authorName: 'Meera Nambiar',
    authorLocation: 'Kochi, Kerala',
    authorAvatar: '🦚',
    rating: 5,
    category: 'Platform',
    targetTitle: 'KalaVerse Vernacular Multi-Dialect Platform',
    artisanName: 'KalaVerse Collective',
    date: '3 weeks ago',
    comment:
      'Finally an Indian art platform that honors our linguistic diversity with 12 languages and provides true data sovereignty! The step-by-step master tutorials with YouTube video walkthroughs are the gold standard for traditional arts education.',
    verifiedPurchase: true,
    helpfulCount: 28,
    highlight: 'Outstanding regional language support and tutorial videos'
  }
];

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  currentUser,
  language = 'en',
  onNavigate
}) => {
  const t = getTranslations(language);

  const [reviews, setReviews] = useState<ArtisanReview[]>(() => {
    try {
      const saved = localStorage.getItem('kalaverse_reviews');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_REVIEWS;
  });

  const saveReviews = (updated: ArtisanReview[]) => {
    setReviews(updated);
    try {
      localStorage.setItem('kalaverse_reviews', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Form State
  const [newTargetTitle, setNewTargetTitle] = useState('');
  const [newArtisanName, setNewArtisanName] = useState('');
  const [newCategory, setNewCategory] = useState<'Marketplace Art' | 'Workshops' | 'Cultural Tours' | 'Platform'>('Marketplace Art');
  const [newRating, setNewRating] = useState<number>(5);
  const [newComment, setNewComment] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [isVerified, setIsVerified] = useState<boolean>(true);

  const handleHelpfulVote = (id: string) => {
    const updated = reviews.map((r) =>
      r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
    );
    saveReviews(updated);
  };

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !newTargetTitle.trim()) return;

    const newRev: ArtisanReview = {
      id: `rev_${Date.now()}`,
      authorName: currentUser.name || 'Art Patron',
      authorLocation: currentUser.state ? `${currentUser.state}, India` : 'India',
      authorAvatar: currentUser.avatar || '🪷',
      rating: newRating,
      category: newCategory,
      targetTitle: newTargetTitle,
      artisanName: newArtisanName || undefined,
      date: 'Just now',
      comment: newComment,
      verifiedPurchase: isVerified,
      helpfulCount: 0,
      highlight: newHighlight || undefined
    };

    saveReviews([newRev, ...reviews]);
    setShowAddModal(false);
    setNewTargetTitle('');
    setNewArtisanName('');
    setNewComment('');
    setNewHighlight('');
  };

  const filteredReviews = reviews.filter((r) => {
    const matchCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchSearch =
      !searchQuery ||
      r.targetTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.artisanName && r.artisanName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      r.comment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const categories = ['All', 'Marketplace Art', 'Workshops', 'Cultural Tours', 'Platform'];

  // Ratings calculation
  const totalCount = reviews.length;
  const avgRating = totalCount > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalCount).toFixed(1) : '5.0';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <SectionHeaderBanner
        title="Patron & Artisan Reviews"
        subtitle="Genuine, verified testimonials celebrating master craftsmanship, transparent livelihoods, and transformative cultural learning."
        tag="Verified Community Provenance"
        themeColor="amber"
        icon={<LotusMotif size={38} color="#FEF08A" secondaryColor="#F59E0B" />}
        rightBadge={
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="px-5 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4 text-[#1E1B4B]" />
              <span>Write a Review</span>
            </button>
          </div>
        }
      />

      {/* Rating Summary Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#F59E0B] shadow-xl relative overflow-hidden">
        <OrnateCorner position="top-left" color="#F59E0B" size={28} />
        <OrnateCorner position="top-right" color="#F59E0B" size={28} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Average Rating Score */}
          <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-6">
            <div className="text-5xl sm:text-6xl font-display font-black text-[#1E1B4B] flex items-center justify-center md:justify-start gap-3">
              <span>{avgRating}</span>
              <span className="text-2xl text-stone-400 font-sans font-normal">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <p className="text-xs text-stone-500 font-semibold">
              Based on {totalCount} authentic community & patron evaluations
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Genuine Verified Purchases</span>
              </span>
            </div>
          </div>

          {/* Rating Breakdown & Highlights */}
          <div className="md:col-span-8 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-center">
                <div className="text-xl font-display font-extrabold text-[#B45309]">85%</div>
                <div className="text-[11px] font-bold text-stone-600 mt-0.5">Direct Creator Payouts (15% Commission)</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center">
                <div className="text-xl font-display font-extrabold text-emerald-700">100%</div>
                <div className="text-[11px] font-bold text-stone-600 mt-0.5">Authentic GI Standards</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-center">
                <div className="text-xl font-display font-extrabold text-[#1E1B4B]">4.9 ★</div>
                <div className="text-[11px] font-bold text-stone-600 mt-0.5">Live Master Workshops</div>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-sans pt-1">
              Every review on KalaVerse represents a real patron, learner, or traveler supporting living master craftspeople across all 36 Indian States and Union Territories.
            </p>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-[#F59E0B] shadow-lg space-y-4 relative">
        <OrnateCorner position="top-left" color="#F59E0B" size={20} />
        <OrnateCorner position="top-right" color="#F59E0B" size={20} />

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[#F59E0B] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by artwork, artisan name, or review keywords..."
              className="w-full pl-11 pr-4 py-3 bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-2xl text-xs sm:text-sm text-[#1E1B4B] font-semibold focus:ring-2 focus:ring-[#1E3A8A] transition-all shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1E3A8A] text-[#FFF8E7] shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-5">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl border-3 border-[#F59E0B]/40 hover:border-[#1E3A8A] shadow-md hover:shadow-xl p-6 sm:p-7 transition-all duration-300 relative overflow-hidden group"
            >
              <OrnateCorner position="top-right" color="#F59E0B" size={20} />

              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-stone-100 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300 flex items-center justify-center text-xl shadow-xs shrink-0">
                    {rev.authorAvatar || '🪷'}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display font-extrabold text-base sm:text-lg text-[#1E1B4B]">
                        {rev.authorName}
                      </h4>
                      {rev.verifiedPurchase && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Verified Patron</span>
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-stone-500 font-medium flex items-center gap-2 mt-0.5">
                      <span>📍 {rev.authorLocation || 'India'}</span>
                      <span>•</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars & Category Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'fill-[#F59E0B] text-[#F59E0B]'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-[#B45309]">
                    {rev.category}
                  </span>
                </div>
              </div>

              {/* Review Body */}
              <div className="pt-4 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#1E3A8A]">
                    {rev.targetTitle}
                  </span>
                  {rev.artisanName && (
                    <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-lg border border-stone-200">
                      Artisan: {rev.artisanName}
                    </span>
                  )}
                </div>

                {rev.highlight && (
                  <div className="text-xs font-extrabold text-[#B45309] bg-amber-50 p-2.5 rounded-xl border border-amber-200/80">
                    “{rev.highlight}”
                  </div>
                )}

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {rev.comment}
                </p>

                {/* Helpful Button & Actions Footer */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => handleHelpfulVote(rev.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-[#1E3A8A]" />
                    <span>Helpful ({rev.helpfulCount})</span>
                  </button>

                  <div className="text-stone-400 text-[11px] font-semibold">
                    KalaVerse Verified Provenance
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border-3 border-dashed border-[#F59E0B]/50 space-y-3">
            <MandalaRosette size={64} color="#F59E0B" accentColor="#1E3A8A" />
            <h4 className="font-display font-extrabold text-lg text-[#1E3A8A]">No Reviews Found</h4>
            <p className="text-xs text-stone-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Write a Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 border-3 border-[#F59E0B] shadow-2xl space-y-5 relative">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2">
                <LotusMotif size={20} color="#F59E0B" secondaryColor="#FB7185" />
                <span>Write an Authentic Patron Review</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Category *
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                >
                  <option value="Marketplace Art">Marketplace Art & Heirlooms</option>
                  <option value="Workshops">Live Masterclass / Workshop</option>
                  <option value="Cultural Tours">Cultural Tourism / KalaTour</option>
                  <option value="Platform">General Platform & Learning</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Artwork, Workshop or Experience Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTargetTitle}
                  onChange={(e) => setNewTargetTitle(e.target.value)}
                  placeholder="E.g., Sacred Mithila Matsya Canvas or Warli Live Workshop"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-semibold text-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Artisan or Master Guild Name (Optional)
                </label>
                <input
                  type="text"
                  value={newArtisanName}
                  onChange={(e) => setNewArtisanName(e.target.value)}
                  placeholder="E.g., Sunita Devi or Jivya Soma Mashe Guild"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-semibold text-[#1E3A8A]"
                />
              </div>

              {/* Star Rating Picker */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= newRating
                            ? 'fill-[#F59E0B] text-[#F59E0B]'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-stone-600 ml-2">
                    {newRating} / 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Key Highlight / Short Summary
                </label>
                <input
                  type="text"
                  value={newHighlight}
                  onChange={(e) => setNewHighlight(e.target.value)}
                  placeholder="E.g., Breathtaking linework and wonderful direct artisan interaction"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-semibold text-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Detailed Review & Experience *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share details about the craftsmanship, materials, workshop interaction, packaging, or cultural significance..."
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm text-[#2D2D2D]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="verified-patron-check"
                  checked={isVerified}
                  onChange={(e) => setIsVerified(e.target.checked)}
                  className="w-4 h-4 text-[#1E3A8A] rounded border-stone-300 focus:ring-[#F59E0B]"
                />
                <label htmlFor="verified-patron-check" className="text-xs font-bold text-stone-700 cursor-pointer">
                  I confirm this is an authentic evaluation of my experience
                </label>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold shadow-md"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
