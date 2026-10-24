import React, { useState, useRef } from 'react';
import { INITIAL_MARKETPLACE_LISTINGS } from '../data/marketWorkshopsData';
import { MarketplaceListing, CartItem, UserProfile } from '../types';
import {
  ShoppingBag,
  Award,
  Tag,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Trash2,
  X,
  PlusCircle,
  ArrowRight,
  Upload,
  Percent,
  Play,
  Video,
  ExternalLink,
  Eye,
  MessageCircle,
  Camera,
  Sparkles,
  Lock
} from 'lucide-react';
import { SupportedLanguage, getTranslations } from '../data/translations';
import {
  getLocalizedUI,
  getLocalizedListing,
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

export function extractYoutubeId(urlOrId?: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

const DEFAULT_MARKET_LISTINGS: MarketplaceListing[] = [
  {
    id: 'listing_madhubani_1',
    title: 'Sacred Mithila Matsya & Lotus Canvas',
    artisanName: 'Sunita Devi (Master Chitrakar)',
    artisanId: 'artisan_sunita',
    sellerName: 'Sunita Devi',
    sellerId: 'artisan_sunita',
    state: 'Bihar',
    artForm: 'Madhubani / Mithila Painting',
    priceINR: 3200,
    price: 3200,
    category: 'Original Painting',
    giCertified: true,
    inStock: 1,
    stock: 1,
    description: 'Traditional Mithila painting with double line Kachni hatching using natural charcoal soot ink and bamboo nib (Nib-kalam). Symbolizes prosperity and fertility with the divine twin fish (Matsya) embracing the cosmic lotus.',
    materials: ['Handmade Wasli Paper', 'Cow Dung Wash', 'Natural Organic Pigments'],
    materialsUsed: 'Handmade Wasli Paper, Soot Lampblack, Natural Turmeric & Indigo',
    dimensions: '18 x 24 inches',
    imageUrl: '/assets/states/bihar.jpg',
    videoUrl: 'https://youtu.be/h1uYQ49376M?si=xauqN-I8DG3RnhFD'
  },
  {
    id: 'listing_kalamkari_2',
    title: 'Srikalahasti Tree of Life Kalamkari Hanging',
    artisanName: 'Venkata Raman (GI Master Craftsman)',
    artisanId: 'artisan_venkata',
    sellerName: 'Venkata Raman',
    sellerId: 'artisan_venkata',
    state: 'Andhra Pradesh',
    artForm: 'Kalamkari',
    priceINR: 5800,
    price: 5800,
    category: 'GI Heritage Art',
    giCertified: true,
    inStock: 2,
    stock: 2,
    description: 'Authentic 17-stage Srikalahasti freehand Kalamkari drawn using a tamarind charcoal stick and date-palm bamboo pen (kalam). Dyed with myrobalan (karakkaya) and flowing river-water curd bleaching.',
    materials: ['Unbleached Cotton Mulmul', 'Myrobalan Nut', 'Fermented Jaggery & Iron Rust', 'Alum Mordant'],
    materialsUsed: 'Handspun Cotton, Natural Mineral Madder & Indigo',
    dimensions: '36 x 48 inches',
    imageUrl: '/assets/states/andhra_pradesh.jpg',
    videoUrl: 'https://youtu.be/Ae1JQ7cAyCE?si=-AEgpc85WxjQzqUX'
  },
  {
    id: 'listing_warli_3',
    title: 'Tarpa Dance Sacred Cosmic Circle Canvas',
    artisanName: 'Jivya Soma Mashe Heritage Guild',
    artisanId: 'artisan_warli',
    sellerName: 'Jivya Soma Guild',
    sellerId: 'artisan_warli',
    state: 'Maharashtra',
    artForm: 'Warli',
    priceINR: 2400,
    price: 2400,
    category: 'Original Painting',
    giCertified: true,
    inStock: 3,
    stock: 3,
    description: 'Sacred Warli ritual geometry depicting the spiral Tarpa dance where humans and nature swirl without beginning or end. Painted with ground rice paste and water gum over mud-red geru clay primer.',
    materials: ['Geru Red Ochre Base', 'Rice Paste Pigment', 'Chewed Bamboo Twig Pen'],
    materialsUsed: 'Natural Red Geru, Rice Flour Binder, Canvas',
    dimensions: '20 x 20 inches',
    imageUrl: '/assets/states/maharashtra.jpg',
    videoUrl: 'https://youtu.be/xetipGtr_aw?si=MPssN_9Oaf8UoO31'
  },
  {
    id: 'listing_pichwai_4',
    title: 'Nathdwara Kamal Talai (Lotus Pond) Pichwai',
    artisanName: 'Mohan Lal Sharma (Pichwai Guild)',
    artisanId: 'artisan_mohan',
    sellerName: 'Mohan Lal Sharma',
    sellerId: 'artisan_mohan',
    state: 'Rajasthan',
    artForm: 'Pichwai',
    priceINR: 8500,
    price: 8500,
    category: 'Original Painting',
    giCertified: true,
    inStock: 1,
    stock: 1,
    description: 'Exquisite Nathdwara temple backdrop celebrating Shrinathji. Features blooming golden lotuses with hovering honeybees over deep midnight indigo water, rendered with pure 24K gold foil dusting and squirrel hair brushes.',
    materials: ['Handspun Khadi', 'Starch Maida Primer', '24K Gold Leaf Foil (Varq)', 'Natural Lapis & Malachite Pigments'],
    materialsUsed: 'Handwoven Starched Cotton, Gold Leaf, Natural Mineral Colours',
    dimensions: '24 x 36 inches',
    imageUrl: '/assets/states/rajasthan.jpg',
    videoUrl: 'https://youtu.be/4VUvWE7qLA8?si=dqpCeBf7nZtGjCv9'
  }
];

interface ArtisanMarketplaceProps {
  currentUser: UserProfile;
  language?: SupportedLanguage;
  onOpenPlanModal: () => void;
  cart?: CartItem[];
  onAddToCart?: (listing: MarketplaceListing) => void;
  onRemoveFromCart?: (cartId: string) => void;
  onNavigate?: (section: any) => void;
}

export const ArtisanMarketplace: React.FC<ArtisanMarketplaceProps> = ({
  currentUser,
  language = 'en',
  onOpenPlanModal,
  cart: parentCart,
  onAddToCart: parentAddToCart,
  onRemoveFromCart: parentRemoveFromCart,
  onNavigate
}) => {
  const t = getTranslations(language);
  const ui = getLocalizedUI(language);
  const safeLang = (language in STATE_NAME_TRANSLATIONS ? language : 'en') as SupportedLanguage;

  const [listings, setListings] = useState<MarketplaceListing[]>(() => {
    try {
      const saved = localStorage.getItem('kalaverse_marketplace_listings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_MARKET_LISTINGS;
    } catch {
      return DEFAULT_MARKET_LISTINGS;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('kalaverse_marketplace_listings', JSON.stringify(listings));
    } catch {
      // ignore
    }
  }, [listings]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArtForm, setSelectedArtForm] = useState<string>('All');
  const [internalCart, setInternalCart] = useState<CartItem[]>([]);
  const cart = parentCart !== undefined ? parentCart : internalCart;
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedListing, setSelectedListing] = useState<MarketplaceListing | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  // New Listing Form State (Direct Self-Listing for Users with Optional Video URL)
  const [newTitle, setNewTitle] = useState('');
  const [newArtForm, setNewArtForm] = useState('Madhubani / Mithila Painting');
  const [newCategory, setNewCategory] = useState('Original Painting');
  const [newPrice, setNewPrice] = useState('2500');
  const [newDimensions, setNewDimensions] = useState('18 x 24 inches');
  const [newMaterials, setNewMaterials] = useState('Handmade Wasli Paper, Natural Organic Pigments');
  const [newDescription, setNewDescription] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [isGiCertified, setIsGiCertified] = useState(true);
  const [uploadedArtworkImage, setUploadedArtworkImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Original Painting', 'Handmade Craft', 'GI Heritage Art', 'Silk & Weaves'];
  const artForms = ['All', 'Madhubani', 'Warli', 'Pichwai', 'Pattachitra', 'Kalamkari', 'Tanjore', 'Gond', 'Mysore', 'Phulkari', 'Cheriyal'];

  const filteredListings = listings
    .filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesArt = selectedArtForm === 'All' || item.artForm.toLowerCase().includes(selectedArtForm.toLowerCase());
      return matchesCat && matchesArt;
    })
    .map((item) => getLocalizedListing(item, language));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedArtworkImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveUploadedImage = () => {
    setUploadedArtworkImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAddToCart = (listing: MarketplaceListing) => {
    if (parentAddToCart) {
      parentAddToCart(listing);
      return;
    }
    const existing = internalCart.find((c) => c.productId === listing.id);
    if (existing) {
      setInternalCart(internalCart.map((c) => (c.productId === listing.id ? { ...c, quantity: c.quantity + 1 } : c)));
    } else {
      setInternalCart([
        ...internalCart,
        {
          id: `cart_${Date.now()}`,
          productId: listing.id,
          title: listing.title,
          price: listing.priceINR || listing.price || 0,
          quantity: 1,
          sellerName: listing.artisanName || listing.sellerName || currentUser.name || 'Verified Artisan',
          sellerId: listing.artisanId || 'artisan_1',
          imageUrl: listing.imageUrl || ''
        }
      ]);
    }
  };

  const handleRemoveFromCart = (cartId: string) => {
    if (parentRemoveFromCart) {
      parentRemoveFromCart(cartId);
      return;
    }
    setInternalCart(internalCart.filter((c) => c.id !== cartId));
  };

  const handleDeleteListing = (listingId: string) => {
    setListings((prev) => prev.filter((item) => item.id !== listingId));
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser.plan !== 'business') {
      onOpenPlanModal();
      return;
    }

    const priceNum = parseInt(newPrice) || 0;
    const newListing: MarketplaceListing = {
      id: `listing_${Date.now()}`,
      title: newTitle,
      artisanName: currentUser.name || 'Master Artisan',
      artisanId: currentUser.id || 'artisan_curr',
      sellerName: currentUser.name || 'Master Artisan',
      sellerId: currentUser.id || 'artisan_curr',
      state: currentUser.state || 'India',
      artForm: newArtForm,
      priceINR: priceNum,
      price: priceNum,
      category: newCategory as any,
      giCertified: isGiCertified,
      inStock: 1,
      stock: 1,
      description: newDescription,
      materials: [newMaterials],
      materialsUsed: newMaterials,
      dimensions: newDimensions,
      imageUrl: uploadedArtworkImage || undefined,
      videoUrl: newVideoUrl.trim() || undefined
    };

    setListings([newListing, ...listings]);
    setNewTitle('');
    setNewDescription('');
    setNewVideoUrl('');
    setUploadedArtworkImage(null);
    setShowAddModal(false);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <SectionHeaderBanner
        title={t.mktTitle}
        subtitle={t.mktSubtitle}
        tag={ui.marketplaceTag}
        themeColor="amber"
        icon={<PeacockMotif size={38} color="#FEF08A" accentColor="#F59E0B" />}
        rightBadge={
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-extrabold text-xs flex items-center gap-2 border border-white/30 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#FEF08A]" />
              <span>{ui.cartBtn} ({totalCartCount})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (currentUser.plan !== 'business') {
                  onOpenPlanModal();
                } else {
                  setShowAddModal(true);
                }
              }}
              className="px-5 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              {currentUser.plan === 'business' ? (
                <>
                  <PlusCircle className="w-4 h-4 text-[#1E1B4B]" />
                  <span>{t.mktListBtn || 'Add Product'}</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-[#1E1B4B]" />
                  <span>List Product (Business Account Only)</span>
                </>
              )}
            </button>
          </div>
        }
      />

      {/* Filter Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-3 border-[#F59E0B] shadow-lg flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {artForms.map((form) => {
            const locArt = form === 'All'
              ? ui.allArtForms
              : (ART_FORM_TRANSLATIONS[safeLang]?.[form] || form);
            return (
              <button
                key={form}
                type="button"
                onClick={() => setSelectedArtForm(form)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  selectedArtForm === form
                    ? 'bg-[#1E3A8A] text-[#FFF8E7] shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {locArt}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-[#B45309] font-bold bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 shrink-0">
          {ui.directPayoutNotice}
        </div>
      </div>

      {/* Listings Grid */}
      {/* Listings Grid with Side-by-Side Photo & Directly Embedded Video */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredListings.map((item) => {
            const ytId = extractYoutubeId(item.videoUrl);
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border-3 border-[#F59E0B]/50 hover:border-[#1E3A8A] shadow-xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl"
              >
                <div>
                  {/* Side-by-Side Photo & Directly Embedded Video Container */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 bg-stone-950 border-b-2 border-[#F59E0B]/30 relative overflow-hidden">
                    {/* Left: Artwork Photo */}
                    <div
                      onClick={() => setSelectedListing(item)}
                      className="relative min-h-[240px] sm:min-h-[270px] bg-stone-900 cursor-pointer overflow-hidden flex items-center justify-center border-b sm:border-b-0 sm:border-r border-stone-800 group/img"
                    >
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/assets/states/bihar.jpg';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-4">
                          <MandalaRosette size={56} color="#F59E0B" accentColor="#DC2626" />
                        </div>
                      )}

                      {item.giCertified && (
                        <div className="absolute top-3 left-3 bg-[#1E3A8A]/90 backdrop-blur-xs text-[#FFF8E7] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow">
                          <Award className="w-3 h-3 text-[#FEF08A]" />
                          <span>{ui.giCertifiedBadge}</span>
                        </div>
                      )}

                      <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Camera className="w-3 h-3 text-[#FEF08A]" />
                        <span>Artwork Photo</span>
                      </div>
                    </div>

                    {/* Right: Directly Embedded Video Beside Photo (No Redirect!) */}
                    <div className="relative min-h-[240px] sm:min-h-[270px] bg-black flex flex-col justify-between overflow-hidden">
                      {ytId ? (
                        <div className="w-full h-full min-h-[240px] flex flex-col">
                          <div className="px-3 py-1.5 bg-stone-900 text-[10px] font-bold text-stone-300 flex items-center justify-between border-b border-white/10 shrink-0">
                            <span className="flex items-center gap-1.5 text-red-400">
                              <Video className="w-3.5 h-3.5" />
                              <span>Craft Video (Direct In-App Play)</span>
                            </span>
                            <span className="text-emerald-400 font-mono text-[9px] bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-700">
                              Direct Player
                            </span>
                          </div>
                          <div className="flex-1 w-full relative bg-black">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1&playsinline=1`}
                              title={`${item.title} - Artisan Making Demonstration`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="w-full h-full min-h-[210px] border-0"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="p-5 flex flex-col justify-center items-center text-center h-full bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/50 text-stone-300 space-y-2">
                          <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-[#F59E0B] flex items-center justify-center">
                            <Sparkles className="w-6 h-6" />
                          </div>
                          <div className="font-display font-bold text-xs text-[#FFF8E7]">
                            Master Artisan Heritage Craft
                          </div>
                          <p className="text-[11px] text-stone-400 max-w-[200px] leading-tight">
                            Handcrafted using authentic natural pigments and traditional techniques.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[#B45309] bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {item.artForm}
                      </span>
                      <span className="text-stone-500 font-bold">📍 {item.state}</span>
                    </div>

                    <div className="space-y-1">
                      <h3
                        onClick={() => setSelectedListing(item)}
                        className="font-display font-extrabold text-base sm:text-lg text-[#1E3A8A] cursor-pointer hover:text-[#F59E0B] transition-colors"
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-semibold">
                        Crafted by {item.artisanName || item.sellerName || 'Verified Master Artisan'}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-xl border border-stone-200 flex items-center justify-between">
                      <span>Dimensions: <strong>{item.dimensions || '18 x 24 in'}</strong></span>
                      <span className="text-emerald-700 font-bold">85% Direct Artisan Payout</span>
                    </div>
                  </div>
                </div>

                {/* Price & Actions Footer */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FFFDF5] to-[#FFFBEB] border-t border-stone-200 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                      {ui.priceLabel}
                    </div>
                    <div className="text-2xl font-extrabold text-[#B45309]">
                      ₹{item.priceINR || item.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDeleteListing(item.id)}
                      className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                      title="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className="px-4 py-2.5 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-all hover:scale-105 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#FEF08A]" />
                      <span>{t.mktAddToCartBtn}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        handleAddToCart(item);
                        if (onNavigate) {
                          onNavigate('cart-billing');
                        } else {
                          setIsCartOpen(true);
                        }
                      }}
                      className="px-4 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] text-xs font-extrabold flex items-center gap-1 shadow-md transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Buy Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
                ? 'Artisan Marketplace Ready For Your Products'
                : 'Artisan Marketplace'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              {currentUser.plan === 'business'
                ? 'All previous sample products have been removed. As a verified Business Account holder, you can list your handcrafted paintings, textiles, sculptures, and GI crafts to sell directly to patrons with 85% direct payout (15% platform commission)!'
                : 'All previous sample products have been removed. Personal account members can explore and purchase certified traditional arts. To upload and list your own handcrafted products and receive direct payouts, please switch to a Business Account.'}
            </p>
          </div>

          {currentUser.plan === 'business' ? (
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4 text-[#FEF08A]" />
              <span>Add Your First Product (Upload Photo)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenPlanModal}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-[#1E1B4B] text-xs font-extrabold flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <Lock className="w-4 h-4 text-[#1E1B4B]" />
              <span>Switch to Business Account to Sell & Upload Products</span>
            </button>
          )}
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l-4 border-[#F59E0B] relative">
            <div className="p-5 bg-[#1E1B4B] text-[#FFF8E7] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#FEF08A]" />
                <h3 className="font-display font-extrabold text-base text-white">
                  {t.mktCartTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#1E3A8A]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {ui.qtyLabel}: {item.quantity} • ₹{item.price} {ui.eachLabel}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 p-1.5"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-stone-500 text-xs">
                  {ui.emptyCartNotice}
                </div>
              )}
            </div>

            <div className="p-5 bg-stone-50 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-sm font-extrabold text-[#1E3A8A]">
                <span>{ui.totalAmountLabel}</span>
                <span className="text-lg text-[#B45309]">₹{calculateSubtotal()}</span>
              </div>

              <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-bold">
                {ui.directPayoutGuaranteeText}
              </div>

              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setIsCartOpen(false);
                  if (onNavigate) {
                    onNavigate('cart-billing');
                  } else {
                    if (parentRemoveFromCart) {
                      cart.forEach((c) => parentRemoveFromCart(c.id));
                    } else {
                      setInternalCart([]);
                    }
                    setCheckoutComplete(true);
                  }
                }}
                className="w-full py-3.5 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] disabled:opacity-50 text-[#FFF8E7] text-xs font-extrabold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
              >
                <ShoppingBag className="w-4 h-4 text-[#FEF08A]" />
                <span>{onNavigate ? 'Proceed to Cart & Billing Checkout' : t.mktCheckoutBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#FEF08A]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Success Popup */}
      {checkoutComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center border-3 border-[#F59E0B] shadow-2xl space-y-4">
            <MandalaRosette size={64} color="#F59E0B" accentColor="#10B981" />
            <h3 className="font-display font-extrabold text-xl text-[#1E3A8A]">
              {ui.orderSuccessTitle}
            </h3>
            <p className="text-xs text-stone-600">
              {ui.orderSuccessMessage}
            </p>
            <button
              type="button"
              onClick={() => setCheckoutComplete(false)}
              className="w-full py-3 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold"
            >
              {ui.continueExploringBtn}
            </button>
          </div>
        </div>
      )}
      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 border-3 border-[#F59E0B] shadow-2xl space-y-5 relative">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2">
                <LotusMotif size={20} color="#F59E0B" secondaryColor="#FB7185" />
                <span>Add Artwork / Product to Market</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateListing} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Product / Artwork Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="E.g., Sacred Mithila Matsya & Lotus Canvas"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm font-semibold text-[#1E3A8A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    Traditional Art Form *
                  </label>
                  <select
                    value={newArtForm}
                    onChange={(e) => setNewArtForm(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  >
                    <option value="Madhubani / Mithila Painting">Madhubani / Mithila Painting</option>
                    <option value="Warli Folk Art">Warli Folk Art</option>
                    <option value="Pichwai Painting">Pichwai Painting</option>
                    <option value="Pattachitra Painting">Pattachitra Painting</option>
                    <option value="Srikalahasti Kalamkari">Srikalahasti Kalamkari</option>
                    <option value="Tanjore Sacred Painting">Tanjore Sacred Painting</option>
                    <option value="Gond Tribal Painting">Gond Tribal Painting</option>
                    <option value="Mysore Traditional Painting">Mysore Traditional Painting</option>
                    <option value="Phulkari Embroidery">Phulkari Embroidery</option>
                    <option value="Cheriyal Scroll Painting">Cheriyal Scroll Painting</option>
                    <option value="Kerala Temple Mural">Kerala Temple Mural</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  >
                    <option value="Original Painting">Original Painting</option>
                    <option value="Handmade Craft">Handmade Craft</option>
                    <option value="GI Heritage Art">GI Heritage Art</option>
                    <option value="Silk & Weaves">Silk & Weaves</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    Price in INR (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                    Dimensions (e.g., 18 x 24 inches)
                  </label>
                  <input
                    type="text"
                    value={newDimensions}
                    onChange={(e) => setNewDimensions(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-bold text-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Traditional Materials Used
                </label>
                <input
                  type="text"
                  value={newMaterials}
                  onChange={(e) => setNewMaterials(e.target.value)}
                  placeholder="E.g., Handmade Wasli Paper, Natural Turmeric & Indigo"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-semibold text-[#1E3A8A]"
                />
              </div>

              {/* Device Image Upload Dropzone */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Upload Artwork / Product Photo
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

                  {uploadedArtworkImage ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={uploadedArtworkImage}
                        alt="Product Preview"
                        className="w-full h-full object-contain bg-stone-900"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveUploadedImage();
                        }}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700"
                        title="Remove photo"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-xs text-stone-500">
                      <Camera className="w-6 h-6 text-[#F59E0B] mx-auto mb-1" />
                      <p className="font-bold text-[#1E3A8A]">Click to select product image file from device</p>
                      <p className="text-[10px]">JPG, PNG, WEBP supported</p>
                    </div>
                  )}
                </div>

                {/* Quick Authentic Traditional Art Photo Selector */}
                <div className="mt-2.5">
                  <div className="text-[11px] font-bold text-stone-600 mb-1.5">
                    Or select an authentic craft image:
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
                        onClick={() => setUploadedArtworkImage(art.img)}
                        className={`p-1 rounded-xl border text-center transition-all ${
                          uploadedArtworkImage === art.img
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

              {/* Optional Craft Video URL */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-[#1E3A8A] flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-red-600" />
                    <span>Optional Craft / Process Video Link (YouTube)</span>
                  </label>
                  <span className="text-[10px] text-stone-500 font-semibold bg-stone-100 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <input
                  type="url"
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                  placeholder="E.g., https://youtu.be/h1uYQ49376M or YouTube Video ID"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs font-semibold text-[#1E3A8A]"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  Displays your craft-making or live atelier demonstration video directly beside your artwork photo in the marketplace!
                </p>
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <span className="text-[10px] text-stone-400 font-bold">Try authentic craft demo:</span>
                  {[
                    { label: 'Madhubani', url: 'https://youtu.be/h1uYQ49376M' },
                    { label: 'Kalamkari', url: 'https://youtu.be/Ae1JQ7cAyCE' },
                    { label: 'Warli', url: 'https://youtu.be/xetipGtr_aw' },
                    { label: 'Pichwai', url: 'https://youtu.be/4VUvWE7qLA8' }
                  ].map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setNewVideoUrl(s.url)}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200 text-[#B45309] font-bold cursor-pointer"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  Description & Craft Story
                </label>
                <textarea
                  required
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Describe your craft technique, heritage lineage, symbolism..."
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm text-[#2D2D2D]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="gi-cert-check"
                  checked={isGiCertified}
                  onChange={(e) => setIsGiCertified(e.target.checked)}
                  className="w-4 h-4 text-[#1E3A8A] rounded border-stone-300 focus:ring-[#F59E0B]"
                />
                <label htmlFor="gi-cert-check" className="text-xs font-bold text-stone-700 cursor-pointer">
                  Certified authentic handmade traditional craft (GI tagged standard)
                </label>
              </div>

              <div className="flex items-center gap-3 pt-2">
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
                  Publish to Market
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Selected Product Detail Modal - Photo & Video Displayed Side-by-Side */}
      {selectedListing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FFFDF5] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border-3 border-[#F59E0B] shadow-2xl relative flex flex-col">
            <OrnateCorner position="top-left" color="#F59E0B" size={28} />
            <OrnateCorner position="top-right" color="#F59E0B" size={28} />

            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#1E1B4B] text-white flex items-center justify-between border-b-2 border-[#F59E0B]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-[#1E1B4B]">
                    {selectedListing.artForm}
                  </span>
                  {selectedListing.giCertified && (
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>GI Certified Traditional Craft</span>
                    </span>
                  )}
                  <span className="text-xs text-white/70 font-semibold">
                    📍 {selectedListing.state}
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-lg sm:text-2xl text-[#FFF8E7]">
                  {selectedListing.title}
                </h2>
                <p className="text-xs text-[#FEF08A] font-semibold">
                  By {selectedListing.artisanName || selectedListing.sellerName || 'Master Artisan'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedListing(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-6">
              {/* MEDIA SECTION: Photo and Video Displayed Side-by-Side */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-sm text-[#1E3A8A] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    <span>Artwork Visual & Artisan Craft Video</span>
                  </h3>
                  {selectedListing.videoUrl && (
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-red-100 text-red-700 flex items-center gap-1 border border-red-300">
                      <Play className="w-3 h-3 fill-current" />
                      <span>Craft Demonstration Included</span>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                  {/* Left Column: Artwork Photo */}
                  <div className="bg-stone-900 rounded-2xl overflow-hidden border-2 border-[#F59E0B]/50 shadow-md flex flex-col justify-between group min-h-[280px] sm:min-h-[340px]">
                    <div className="p-2.5 bg-black/60 text-white text-[11px] font-bold flex items-center justify-between border-b border-white/10">
                      <span className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-[#FEF08A]" />
                        <span>High-Resolution Artwork Photo</span>
                      </span>
                      <span className="text-[10px] text-amber-300 font-mono">100% Authentic</span>
                    </div>

                    <div className="flex-1 flex items-center justify-center p-3 relative overflow-hidden">
                      {selectedListing.imageUrl ? (
                        <img
                          src={selectedListing.imageUrl}
                          alt={selectedListing.title}
                          className="w-full h-full max-h-[320px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/assets/states/bihar.jpg';
                          }}
                        />
                      ) : (
                        <div className="text-center p-8 text-amber-200">
                          <MandalaRosette size={64} color="#F59E0B" accentColor="#DC2626" />
                          <p className="text-xs mt-2 font-bold">Artisan Handcrafted Original</p>
                        </div>
                      )}
                    </div>

                    <div className="p-2.5 bg-black/40 text-[10px] text-stone-300 flex items-center justify-between">
                      <span>Dimensions: {selectedListing.dimensions || 'Custom Size'}</span>
                      <span className="text-emerald-400 font-bold">Direct from Artisan Atelier</span>
                    </div>
                  </div>

                  {/* Right Column: Video Displayed Beside the Photo */}
                  <div className="bg-stone-900 rounded-2xl overflow-hidden border-2 border-[#F59E0B]/50 shadow-md flex flex-col justify-between min-h-[280px] sm:min-h-[340px]">
                    <div className="p-2.5 bg-black/60 text-white text-[11px] font-bold flex items-center justify-between border-b border-white/10">
                      <span className="flex items-center gap-1.5 text-red-400">
                        <Video className="w-3.5 h-3.5" />
                        <span>Artisan Craft Making Video</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700">
                        Direct In-App Video
                      </span>
                    </div>

                    <div className="flex-1 bg-black flex items-center justify-center">
                      {selectedListing.videoUrl && extractYoutubeId(selectedListing.videoUrl) ? (
                        <div className="w-full h-full min-h-[260px] aspect-video">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${extractYoutubeId(selectedListing.videoUrl)}?rel=0`}
                            title={`${selectedListing.title} - Artisan Making Process`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          />
                        </div>
                      ) : (
                        <div className="p-6 text-center space-y-3">
                          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-[#F59E0B] mx-auto flex items-center justify-center">
                            <Video className="w-7 h-7" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm text-[#FFF8E7]">
                              Live Atelier Process Video
                            </h4>
                            <p className="text-xs text-stone-400 max-w-xs mx-auto mt-1 leading-relaxed">
                              This listing was published without an embedded video link. You can request a live studio video or connect with the artisan.
                            </p>
                          </div>
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedListing(null);
                                onNavigate?.('kalakaar-workshops');
                              }}
                              className="px-4 py-2 rounded-xl bg-amber-500/30 hover:bg-amber-500/50 text-[#FEF08A] text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                            >
                              <span>Explore Live Masterclass Ateliers</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-2.5 bg-black/40 text-[10px] text-stone-300 flex items-center justify-between">
                      <span>Video: Step-by-Step Technique</span>
                      <span className="text-amber-400 font-bold">GI Verified Heritage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price, Fair-Trade Direct Payout & Actions Bar */}
              <div className="bg-gradient-to-r from-amber-50 via-[#FFFBEB] to-emerald-50 rounded-2xl p-5 border-2 border-[#F59E0B] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider">
                    Fair-Trade Artisan Price
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#B45309]">
                      ₹{selectedListing.priceINR || selectedListing.price || 0}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      ₹{Math.round((selectedListing.priceINR || selectedListing.price || 0) * 0.85)} (85%) Direct to Artisan
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    100% transparent: 15% platform commission, 85% direct creator payout. Secured via KalaVerse Artisan Escrow.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedListing);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#FEF08A]" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedListing);
                      setSelectedListing(null);
                      if (onNavigate) {
                        onNavigate('cart-billing');
                      } else {
                        setIsCartOpen(true);
                      }
                    }}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-[#1E1B4B] text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>Buy Now (Checkout)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Craft Specifications & Story Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-5 border border-stone-200 space-y-3">
                  <h4 className="font-display font-extrabold text-sm text-[#1E3A8A] flex items-center gap-2">
                    <LotusMotif size={18} color="#F59E0B" />
                    <span>Materials & Technical Specifications</span>
                  </h4>

                  <div className="space-y-2 text-xs text-stone-700">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="font-bold text-stone-500">Traditional Materials:</span>
                      <span className="font-semibold text-right">
                        {Array.isArray(selectedListing.materials)
                          ? selectedListing.materials.join(', ')
                          : selectedListing.materialsUsed || 'Natural Organic Pigments, Handmade Paper'}
                      </span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="font-bold text-stone-500">Dimensions:</span>
                      <span className="font-semibold">{selectedListing.dimensions || 'Standard Frame (18 x 24 in)'}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="font-bold text-stone-500">GI Tag Status:</span>
                      <span className="font-bold text-emerald-700">
                        {selectedListing.giCertified ? 'Officially GI Tag Certified' : 'Traditional Master Guild Standard'}
                      </span>
                    </div>

                    <div className="flex justify-between py-1">
                      <span className="font-bold text-stone-500">Packaging & Shipping:</span>
                      <span className="font-semibold text-stone-700">Museum-grade wooden crate / roll with COA</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-stone-200 space-y-3">
                  <h4 className="font-display font-extrabold text-sm text-[#1E3A8A] flex items-center gap-2">
                    <PeacockMotif size={20} color="#F59E0B" />
                    <span>Heritage Lineage & Craft Lore</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedListing.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#B45309] font-bold">
                    <span>Artisan Guild: {selectedListing.artisanName || selectedListing.sellerName}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedListing(null);
                        onNavigate?.('reviews');
                      }}
                      className="text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Reviews</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
