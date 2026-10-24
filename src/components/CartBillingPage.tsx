import React, { useState } from 'react';
import { CartItem, UserProfile, AppSection, BillingOrder } from '../types';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  QrCode,
  Building,
  Truck,
  ArrowRight,
  ArrowLeft,
  Download,
  Printer,
  Sparkles,
  MapPin,
  Lock,
  Phone,
  Mail,
  User,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
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

interface CartBillingPageProps {
  currentUser: UserProfile;
  cart: CartItem[];
  onUpdateCart: (updatedCart: CartItem[]) => void;
  onNavigate: (section: AppSection) => void;
  language?: SupportedLanguage;
}

export const CartBillingPage: React.FC<CartBillingPageProps> = ({
  currentUser,
  cart,
  onUpdateCart,
  onNavigate,
  language = 'en'
}) => {
  const t = getTranslations(language);

  // Checkout Step: 'cart' | 'billing' | 'confirmed'
  const [activeStep, setActiveStep] = useState<'cart' | 'billing' | 'confirmed'>('cart');

  // Customer & Shipping Details
  const [customerName, setCustomerName] = useState(currentUser.name || 'Aarav Sharma');
  const [customerEmail, setCustomerEmail] = useState(currentUser.email || 'patron@kalaverse.org');
  const [customerPhone, setCustomerPhone] = useState(currentUser.phone || '+91 98765 43210');
  const [streetAddress, setStreetAddress] = useState('Flat 402, Heritage Residency, Kala Marg');
  const [city, setCity] = useState('Jaipur');
  const [stateName, setStateName] = useState(currentUser.state || 'Rajasthan');
  const [pincode, setPincode] = useState('302001');
  const [landmark, setLandmark] = useState('Near Hawa Mahal Craft Cluster');
  const [isGift, setIsGift] = useState(false);
  const [giftNote, setGiftNote] = useState('');

  // Payment Selection: 'upi' | 'card' | 'netbanking' | 'cod'
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiOption, setUpiOption] = useState<'gpay' | 'phonepe' | 'paytm' | 'qr' | 'id'>('gpay');
  const [upiId, setUpiId] = useState('patron@okhdfcbank');

  // Card Inputs
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8849');
  const [cardExpiry, setCardExpiry] = useState('11/28');
  const [cardCvv, setCardCvv] = useState('742');
  const [cardHolder, setCardHolder] = useState(currentUser.name || 'Aarav Sharma');

  // Netbanking Bank
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');

  // Confirmed Order Record
  const [confirmedOrder, setConfirmedOrder] = useState<BillingOrder | null>(null);

  // Calculations
  const subtotalINR = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const artisanShareINR = Math.round(subtotalINR * 0.85);
  const platformFeeINR = Math.round(subtotalINR * 0.15);
  const deliveryINR = 0; // Free direct artisan shipping
  const totalINR = subtotalINR + deliveryINR;

  const handleQuantityChange = (id: string, delta: number) => {
    const updated = cart
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];

    onUpdateCart(updated);
  };

  const handleRemoveItem = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    onUpdateCart(updated);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const orderRecord: BillingOrder = {
      orderId: `ORD-KALA-${Date.now().toString().slice(-6)}`,
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress: {
        street: streetAddress,
        city,
        state: stateName,
        pincode,
        landmark
      },
      items: [...cart],
      subtotalINR,
      artisanDirectPayoutINR: artisanShareINR,
      culturalFundINR: platformFeeINR,
      totalINR,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      orderDate: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      trackingNumber: `KALA-TRK-${Math.floor(100000 + Math.random() * 900000)}`
    };

    setConfirmedOrder(orderRecord);
    setActiveStep('confirmed');

    // Fire Confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#1E3A8A', '#10B981', '#E11D48']
      });
    } catch {
      // ignore
    }

    // Clear cart
    onUpdateCart([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <SectionHeaderBanner
        title="Artisan Cart & Fair-Trade Billing"
        subtitle="100% direct-to-creator settlement. Your order directly sustains traditional craft families and authentic GI heritage lineages."
        tag="Sovereign Fair-Trade Checkout"
        themeColor="amber"
        icon={<ShoppingBag size={38} color="#FEF08A" />}
        rightBadge={
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('kalakaar-marketplace')}
              className="px-4 py-2 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-extrabold text-xs flex items-center gap-2 border border-white/30 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Market</span>
            </button>
          </div>
        }
      />

      {/* Progress Steps Header */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-3 border-[#F59E0B] shadow-md flex items-center justify-around text-xs font-extrabold">
        <div
          onClick={() => cart.length > 0 && activeStep !== 'confirmed' && setActiveStep('cart')}
          className={`flex items-center gap-2 cursor-pointer transition-all ${
            activeStep === 'cart'
              ? 'text-[#1E3A8A] scale-105 font-black'
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
            activeStep === 'cart' ? 'bg-[#1E3A8A] text-white' : 'bg-stone-200 text-stone-600'
          }`}>
            1
          </span>
          <span>Shopping Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
        </div>

        <span className="text-stone-300">→</span>

        <div
          onClick={() => cart.length > 0 && activeStep !== 'confirmed' && setActiveStep('billing')}
          className={`flex items-center gap-2 cursor-pointer transition-all ${
            activeStep === 'billing'
              ? 'text-[#1E3A8A] scale-105 font-black'
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
            activeStep === 'billing' ? 'bg-[#1E3A8A] text-white' : 'bg-stone-200 text-stone-600'
          }`}>
            2
          </span>
          <span>Shipping & Settlement</span>
        </div>

        <span className="text-stone-300">→</span>

        <div className={`flex items-center gap-2 ${
          activeStep === 'confirmed' ? 'text-emerald-700 font-black' : 'text-stone-400'
        }`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
            activeStep === 'confirmed' ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600'
          }`}>
            3
          </span>
          <span>Order Confirmed</span>
        </div>
      </div>

      {/* STEP 1: CART ITEMS REVIEW */}
      {activeStep === 'cart' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#F59E0B] shadow-xl space-y-6 relative overflow-hidden">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <h3 className="font-display font-extrabold text-xl text-[#1E3A8A] flex items-center gap-2">
                <LotusMotif size={22} color="#F59E0B" secondaryColor="#FB7185" />
                <span>Selected Handcrafted Heirlooms ({cart.length})</span>
              </h3>

              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={() => onUpdateCart([])}
                  className="text-xs text-red-600 hover:text-red-800 font-bold flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Bag</span>
                </button>
              )}
            </div>

            {cart.length > 0 ? (
              <div className="divide-y divide-stone-100 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-stone-900 overflow-hidden border-2 border-amber-300 shadow-sm shrink-0">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-amber-100 text-2xl">
                            🎨
                          </div>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-display font-extrabold text-base text-[#1E1B4B]">
                          {item.title}
                        </h4>
                        <div className="text-xs text-stone-500 font-medium">
                          Artisan: <span className="font-bold text-[#D97706]">{item.sellerName || 'Verified Guild Master'}</span>
                        </div>
                        <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>GI Verified Authentic • 85% Creator Share (15% Commission)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-stone-100 rounded-xl p-1 border border-stone-200">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white hover:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-extrabold text-[#1E1B4B]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-white hover:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right min-w-[90px]">
                        <div className="text-base font-extrabold text-[#B45309]">
                          ₹{item.price * item.quantity}
                        </div>
                        <div className="text-[10px] text-stone-400">
                          (₹{item.price} each)
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-4">
                <MandalaRosette size={72} color="#F59E0B" accentColor="#1E3A8A" />
                <h4 className="font-display font-extrabold text-xl text-[#1E3A8A]">Your Artisan Bag is Empty</h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Explore authentic GI-tagged masterpieces created by rural artisans across India and support their heritage craft.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('kalakaar-marketplace')}
                  className="px-6 py-3 rounded-2xl bg-[#1E3A8A] text-white text-xs font-extrabold shadow-md hover:bg-[#1E1B4B] transition-all"
                >
                  Explore Marketplace
                </button>
              </div>
            )}
          </div>

          {/* Price Breakdown Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border-3 border-[#F59E0B] shadow-xl space-y-5 relative">
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <h3 className="font-display font-extrabold text-lg text-[#1E1B4B] border-b border-stone-100 pb-3">
              Order Settlement Summary
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-stone-600">
                <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                <span className="font-bold text-[#1E1B4B]">₹{subtotalINR}</span>
              </div>

              <div className="flex items-center justify-between text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-bold">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct Creator Payout (85%)</span>
                </div>
                <span>₹{artisanShareINR}</span>
              </div>

              <div className="flex items-center justify-between text-stone-500">
                <span>Heritage Platform Commission (15%)</span>
                <span>₹{platformFeeINR}</span>
              </div>

              <div className="flex items-center justify-between text-stone-600">
                <span>Craft Packaging & Courier</span>
                <span className="font-bold text-emerald-700">FREE</span>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-base font-extrabold text-[#1E1B4B]">
                <span>Total Amount</span>
                <span className="text-xl text-[#B45309]">₹{totalINR}</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed font-medium">
              🌿 <strong>Zero Intermediary Guarantee:</strong> Unlike commercial galleries that deduct up to 40% margins, KalaVerse transfers funds directly to the master artisan.
            </div>

            <button
              type="button"
              disabled={cart.length === 0}
              onClick={() => setActiveStep('billing')}
              className="w-full py-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] disabled:opacity-50 text-[#FFF8E7] text-xs font-black shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
            >
              <span>Proceed to Shipping & Settlement</span>
              <ArrowRight className="w-4 h-4 text-[#FDE68A]" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SHIPPING DETAILS & PAYMENT SETTLEMENT */}
      {activeStep === 'billing' && (
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Shipping Address & Details */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#F59E0B] shadow-xl space-y-6 relative overflow-hidden">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />

            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-display font-extrabold text-xl text-[#1E3A8A] flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#F59E0B]" />
                <span>Patron Delivery & Contact Details</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveStep('cart')}
                className="text-xs text-stone-500 hover:text-stone-800 font-bold"
              >
                ← Back to Cart
              </button>
            </div>

            <div className="space-y-4 text-xs font-bold text-[#1E3A8A]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                  />
                </div>

                <div>
                  <label className="block mb-1">Contact Phone (for delivery SMS) *</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Email Address (for invoice & tracking) *</label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                />
              </div>

              <div>
                <label className="block mb-1">Street Address / House No. *</label>
                <input
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="House/Apartment number, street name"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                  />
                </div>

                <div>
                  <label className="block mb-1">State / Province *</label>
                  <input
                    type="text"
                    required
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                  />
                </div>

                <div>
                  <label className="block mb-1">PIN / Postal Code *</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Landmark (Optional)</label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="Near temple, school or prominent landmark"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-2.5 text-xs text-[#1E1B4B] font-semibold"
                />
              </div>

              {/* Gift Wrap / Note */}
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="gift-check"
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="w-4 h-4 text-[#1E3A8A] rounded border-stone-300"
                  />
                  <label htmlFor="gift-check" className="text-xs font-bold text-stone-700 cursor-pointer">
                    🎁 Traditional Gift Packaging & Hand-Written Artisan Blessing Card
                  </label>
                </div>
                {isGift && (
                  <input
                    type="text"
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Enter recipient's name or custom blessing message..."
                    className="w-full bg-white border border-stone-300 rounded-xl p-2 text-xs font-normal"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Payment Method Selection & Checkout Trigger */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-3 border-[#F59E0B] shadow-xl space-y-5 relative">
              <OrnateCorner position="top-right" color="#F59E0B" size={24} />

              <h3 className="font-display font-extrabold text-lg text-[#1E1B4B] border-b border-stone-100 pb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Secure Payment Settlement</span>
              </h3>

              {/* Payment Tabs */}
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-[#1E3A8A] bg-amber-50 text-[#1E3A8A] font-extrabold shadow-sm'
                      : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-[#F59E0B]" />
                  <span>UPI (0% Fee)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#1E3A8A] bg-amber-50 text-[#1E3A8A] font-extrabold shadow-sm'
                      : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#F59E0B]" />
                  <span>Cards / RuPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'border-[#1E3A8A] bg-amber-50 text-[#1E3A8A] font-extrabold shadow-sm'
                      : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Building className="w-4 h-4 text-[#F59E0B]" />
                  <span>NetBanking</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#1E3A8A] bg-amber-50 text-[#1E3A8A] font-extrabold shadow-sm'
                      : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Truck className="w-4 h-4 text-[#F59E0B]" />
                  <span>Cash on Delivery</span>
                </button>
              </div>

              {/* UPI Tab Content */}
              {paymentMethod === 'upi' && (
                <div className="p-4 bg-[#FFFDF5] rounded-2xl border-2 border-amber-200 space-y-3 text-xs">
                  <div className="font-extrabold text-[#1E1B4B]">Instant UPI Settlement</div>
                  <div className="flex flex-wrap gap-2">
                    {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI'].map((app) => (
                      <span key={app} className="px-2.5 py-1 bg-white rounded-lg border border-stone-200 font-bold text-stone-700 shadow-xs">
                        ⚡ {app}
                      </span>
                    ))}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-stone-600 block mb-1">Enter UPI VPA / ID</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="e.g. mobile@upi or username@okhdfcbank"
                      className="w-full bg-white border border-stone-300 rounded-xl p-2 text-xs font-semibold text-[#1E1B4B]"
                    />
                  </div>
                </div>
              )}

              {/* Card Tab Content */}
              {paymentMethod === 'card' && (
                <div className="p-4 bg-[#FFFDF5] rounded-2xl border-2 border-amber-200 space-y-3 text-xs">
                  <div>
                    <label className="text-[11px] font-bold text-stone-600 block mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl p-2 text-xs font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-stone-600 block mb-1">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl p-2 text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-stone-600 block mb-1">CVV</label>
                      <input
                        type="password"
                        maxLength={4}
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl p-2 text-xs font-semibold"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NetBanking Tab Content */}
              {paymentMethod === 'netbanking' && (
                <div className="p-4 bg-[#FFFDF5] rounded-2xl border-2 border-amber-200 space-y-2 text-xs">
                  <label className="text-[11px] font-bold text-stone-600 block">Select Primary Bank</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl p-2.5 text-xs font-bold text-[#1E1B4B]"
                  >
                    <option value="HDFC Bank">HDFC Bank</option>
                    <option value="State Bank of India (SBI)">State Bank of India (SBI)</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Punjab National Bank">Punjab National Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}

              {/* COD Tab Content */}
              {paymentMethod === 'cod' && (
                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                  📦 <strong>Cash on Delivery:</strong> Pay via cash or UPI QR scanner upon doorstep delivery of your handcrafted GI artwork.
                </div>
              )}

              {/* Final Summary */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-base font-extrabold text-[#1E1B4B]">
                <span>Payable Amount:</span>
                <span className="text-xl text-[#B45309]">₹{totalINR}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white text-xs sm:text-sm font-black shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Confirm & Settle Payment (₹{totalINR})</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* STEP 3: ORDER CONFIRMED & DIGITAL INVOICE */}
      {activeStep === 'confirmed' && confirmedOrder && (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-3 border-[#F59E0B] shadow-2xl space-y-6 relative overflow-hidden animate-fadeIn">
          <OrnateCorner position="top-left" color="#F59E0B" size={32} />
          <OrnateCorner position="top-right" color="#F59E0B" size={32} />

          <div className="text-center space-y-3 pb-4 border-b border-stone-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1E1B4B]">
              Order Consecrated & Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
              Dhanyavaad! Your order has been placed directly with the master artisans. 85% of your settlement is reserved for direct creator disbursement (15% platform commission).
            </p>
          </div>

          {/* Invoice Summary Box */}
          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border-2 border-amber-200 space-y-4 text-xs font-sans">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
              <div>
                <span className="text-stone-500 font-bold block text-[10px] uppercase">Order Reference</span>
                <span className="font-mono font-black text-sm text-[#1E1B4B]">{confirmedOrder.orderId}</span>
              </div>
              <div>
                <span className="text-stone-500 font-bold block text-[10px] uppercase">Date</span>
                <span className="font-bold text-[#1E1B4B]">{confirmedOrder.orderDate}</span>
              </div>
              <div>
                <span className="text-stone-500 font-bold block text-[10px] uppercase">Tracking ID</span>
                <span className="font-mono font-bold text-emerald-800">{confirmedOrder.trackingNumber}</span>
              </div>
              <div>
                <span className="text-stone-500 font-bold block text-[10px] uppercase">Payment Status</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold uppercase text-[10px]">
                  {confirmedOrder.paymentStatus === 'paid' ? 'Paid (Settled)' : 'COD Verified'}
                </span>
              </div>
            </div>

            {/* Purchased Items */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-extrabold text-stone-700 uppercase tracking-wider">
                Heirloom Artworks in this Consignment:
              </div>
              {confirmedOrder.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-amber-200/40">
                  <span className="font-bold text-[#1E1B4B]">
                    {item.title} <span className="text-stone-500 font-normal">× {item.quantity}</span>
                  </span>
                  <span className="font-extrabold text-[#B45309]">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Shipping Destination */}
            <div className="pt-2">
              <div className="text-[11px] font-extrabold text-stone-700 uppercase tracking-wider mb-1">
                Dispatched To:
              </div>
              <p className="text-stone-700 font-medium leading-relaxed">
                {confirmedOrder.customerName} • {confirmedOrder.customerPhone} <br />
                {confirmedOrder.shippingAddress.street}, {confirmedOrder.shippingAddress.city}, {confirmedOrder.shippingAddress.state} - {confirmedOrder.shippingAddress.pincode}
              </p>
            </div>

            {/* Payout Transparency */}
            <div className="p-3 bg-white rounded-xl border border-amber-300 flex items-center justify-between font-bold text-[#1E1B4B]">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span>Direct Artisan Transfer (85%):</span>
              </span>
              <span className="text-base text-emerald-700 font-black">₹{confirmedOrder.artisanDirectPayoutINR}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#1E1B4B]" />
              <span>Print / Save Tax Invoice</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('kalakaar-marketplace')}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-white text-xs font-black shadow-md flex items-center justify-center gap-2"
            >
              <span>Continue Exploring Heirlooms</span>
              <ArrowRight className="w-4 h-4 text-[#FDE68A]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
