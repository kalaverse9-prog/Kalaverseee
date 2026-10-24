export type AccountPlan = 'personal' | 'business';
export type UserPlan = AccountPlan;
export type VerificationStatus = 'unverified' | 'pending' | 'verified';

export type SupportedLanguage =
  | 'en'
  | 'hi'
  | 'ta'
  | 'te'
  | 'bn'
  | 'mr'
  | 'gu'
  | 'kn'
  | 'or'
  | 'ml'
  | 'pa'
  | 'as';

export type AppSection =
  | 'home'
  | 'map'
  | 'state-detail'
  | 'kalakaar-sathi'
  | 'kalakaar-lens'
  | 'kalakaar-community'
  | 'kalakaar-workshops'
  | 'kalakaar-marketplace'
  | 'kalatour'
  | 'profile'
  | 'reviews'
  | 'cart-billing';

export interface UserTravelPreferences {
  interests: string[];
  availableTime: string;
  budget: number;
  preferredActivities: string[];
  accessibilityRequirements: string[];
  foodPreferences: string;
  experienceType: string;
}

export interface TourBookingReservation {
  id: string;
  experienceId: string;
  experienceTitle: string;
  state: string;
  location: string;
  date: string;
  timeSlot: string;
  travelerCount: {
    adults: number;
    children: number;
    seniors: number;
  };
  totalTravelers: number;
  totalAmountINR: number;
  artisanDirectPayoutINR: number;
  accessibilityNeeds: string[];
  foodPreference: string;
  artisanName: string;
  paymentMethod: 'upi' | 'card' | 'netbanking';
  paymentStatus: 'completed' | 'pending';
  paymentId: string;
  bookingCode: string;
  qrCodeUrl?: string;
  createdAt: string;
}

export interface CulturalExperience {
  id: string;
  title: string;
  artForm: string;
  state: string;
  district: string;
  location: string;
  artisanName: string;
  artisanTitle: string;
  rating: number;
  reviewsCount: number;
  priceINR: number;
  duration: string;
  highlights: string[];
  inclusions: string[];
  accessibilityFeatures: string[];
  dietaryFeatures: string[];
  meetingPoint: string;
  nearestHub: string;
  description: string;
  badge: string;
  heroImageId?: string;
}

export interface KalaYatriChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  citations?: string[];
  suggestedActions?: {
    label: string;
    actionType: 'book' | 'view_tour' | 'refine_preferences' | 'open_map' | 'chat_prompt';
    payload?: string;
  }[];
  experienceToBook?: CulturalExperience;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  plan: AccountPlan;
  activeRole?: 'personal' | 'business';
  role?: string;
  streakDays?: number;
  xpPoints?: number;
  verificationStatus: VerificationStatus;
  businessName?: string;
  artisanCardNumber?: string;
  craftSpecialty?: string;
  state?: string;
  bio?: string;
  phone?: string;
  joinedDate: string;
  likedPostIds: string[];
  followedArtistIds: string[];
  registeredWorkshopIds: string[];
  competitionEntryIds: string[];
  cart: CartItem[];
  tourBookings?: TourBookingReservation[];
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  sellerName: string;
  sellerId: string;
  imageUrl: string;
  isKalaVerseOriginal?: boolean;
}

export interface ArtworkImage {
  id: string;
  title: string;
  artForm: string;
  state: string;
  region: string;
  description: string;
  imageUrl?: string;
  svgData?: string; // High-detail traditional vector representation of user screenshot
  aspectRatio: string;
  colors: string[];
  symbolism: string[];
  materials: string[];
}

export interface CommunityPost {
  id: string;
  authorId?: string;
  creatorId?: string;
  authorName?: string;
  creatorName?: string;
  authorAvatar?: string;
  creatorAvatar?: string;
  creatorRole?: string;
  authorState?: string;
  stateOrigin?: string;
  isVerifiedArtisan?: boolean;
  title: string;
  description: string;
  artForm?: string;
  state?: string;
  artworkId?: string;
  imageUrl?: string;
  likesCount: number;
  likedByCurrentUser?: boolean;
  createdAt?: string;
  timestamp?: string;
  tags: string[];
}

export interface Workshop {
  id: string;
  title: string;
  artisanName?: string;
  artisanTitle?: string;
  hostId?: string;
  hostName?: string;
  hostAvatar?: string;
  hostState?: string;
  state?: string;
  isVerified?: boolean;
  artForm: string;
  description: string;
  price?: number;
  priceINR?: number;
  platformFeeINR?: number;
  artisanPayoutINR?: number;
  platformCommission?: number;
  netEarningsPerTicket?: number;
  date: string;
  time: string;
  duration?: string;
  durationMinutes?: number;
  isFree?: boolean;
  seatsTotal?: number;
  seatsBooked?: number;
  maxAttendees?: number;
  registeredCount?: number;
  rating?: number;
  reviewsCount?: number;
  heroImageId?: string;
  imageUrl?: string;
  materialsProvided?: string[];
  materialsRequiredByStudent?: string[];
  prerequisites?: string[];
  meetingLink?: string;
  zoomMeetingLink?: string;
  level?: string;
}

export interface MarketplaceListing {
  id: string;
  title: string;
  artisanId?: string;
  sellerId?: string;
  artisanName?: string;
  sellerName?: string;
  artisanLocation?: string;
  state: string;
  artForm: string;
  priceINR: number;
  price?: number;
  originalPriceINR?: number;
  dimensions: string;
  materialsUsed?: string;
  materials?: string[];
  inStock?: number;
  stock?: number;
  giCertified?: boolean;
  isVerifiedSeller?: boolean;
  heroImageId?: string;
  imageUrl?: string;
  videoUrl?: string;
  description: string;
  shippingInfo?: string;
  category?: string;
  rating?: number;
}

export type MarketplaceProduct = MarketplaceListing;

export interface StateArtData {
  id: string;
  name: string;
  capital: string;
  zone: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | 'UT';
  primaryArtForm: string;
  otherCrafts: string[];
  history: string;
  culturalSignificance: string;
  uniqueFacts: string[];
  traditionalMaterials: string[];
  keyMotifs: string[];
  artwork: ArtworkImage;
  tutorial: {
    title: string;
    estimatedTime: string;
    difficulty: 'Easy' | 'Intermediate' | 'Advanced';
    materialsNeeded: string[];
    videoUrl?: string;
    youtubeId?: string;
    steps: {
      stepNumber: number;
      title: string;
      description: string;
      proTip: string;
    }[];
  };
}

export interface ArtisanReview {
  id: string;
  authorName: string;
  authorLocation?: string;
  authorAvatar?: string;
  rating: number; // 1 to 5
  category: 'Marketplace Art' | 'Workshops' | 'Cultural Tours' | 'Platform';
  targetTitle: string;
  artisanName?: string;
  artForm?: string;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
  highlight?: string;
  photoUrl?: string;
}

export interface BillingOrder {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
  };
  items: CartItem[];
  subtotalINR: number;
  artisanDirectPayoutINR: number;
  culturalFundINR: number;
  totalINR: number;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'cod';
  paymentStatus: 'paid' | 'pending';
  orderDate: string;
  trackingNumber: string;
}

export interface KalaLensMotif {
  name: string;
  significance: string;
  accuracyComment: string;
}

export interface KalaLensFeedback {
  isTraditionalArt?: boolean;
  isDeclined?: boolean;
  declineReason?: 'SELF_HARM' | 'INAPPROPRIATE' | 'IRRELEVANT' | string;
  rejectionReason?: string;
  rating?: number | null; // 0 to 10, or null if image is not traditional art
  artFormDetected: string;
  summary: string;
  traditionalMotifsDetected?: (KalaLensMotif | string)[];
  lineworkAnalysis?: string;
  colorHarmonyAnalysis?: string;
  spatialGeometryAnalysis?: string;
  whatWasDoneWell?: string[];
  strongestPoints?: string[];
  strengths?: string[];
  areasForImprovement: string[];
  actionableSuggestions?: string[];
  whatToTryNext?: string[];
  masterArtisanProTip?: string;
  pigmentCritique?: string;
  lineworkPrecision?: string;
  symbolismAccuracy?: string;
  colorHarmonyScore?: number | null;
  lineworkPrecisionScore?: number | null;
  traditionalAuthenticityScore?: number | null;
  spatialCompositionScore?: number | null;
  motifAccuracyScore?: number | null;
}

export interface KalaLensChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isFallback?: boolean;
}

export interface TourScheduleItem {
  timeSlot: string;
  period: 'Morning' | 'Afternoon' | 'Evening' | string;
  activityTitle: string;
  location: string;
  description: string;
  craftExperience: string;
  insiderTip: string;
}

export interface TourItinerary {
  id: string;
  stateId: string;
  stateName: string;
  title: string;
  theme: string;
  duration: string;
  heroImageId?: string;
  highlights: string[];
  practicalTips: string[];
  schedule: TourScheduleItem[];
}

export interface TourPlanRequest {
  destination: string;
  ageGroup: string;
  interests: string[];
  budget: number;
  peopleCount: number;
  pace: 'Relaxed' | 'Moderate' | 'Intensive';
  travelDate?: string;
}

export interface TourItineraryItem {
  time: string;
  title: string;
  type: 'Craft Cluster' | 'Artisan Workshop' | 'Museum/Gallery' | 'Cultural Fair' | 'Authentic Shopping' | 'Artisan Break';
  location: string;
  description: string;
  estimatedCostPerPerson: number;
  highlights: string[];
  diyOpportunity?: string;
  alternativeOption?: string;
  isPartnerArtisan?: boolean;
  commissionNotice?: string;
}

export interface TourItineraryResult {
  destination: string;
  themeTitle: string;
  summary: string;
  estimatedTotalBudgetPerPerson: number;
  travelLogistics: string;
  schedule: TourItineraryItem[];
  insiderArtisanTips: string[];
  culturalEtiquette: string[];
}

export interface LanguageLessonQuestion {
  id: string;
  type: 'translate' | 'multiple-choice' | 'listening' | 'cultural-match' | 'fill-blank';
  prompt: string;
  culturalNote?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  audioText?: string;
}

export interface LanguageLesson {
  id: string;
  levelNumber: 1 | 2 | 3;
  levelName: 'Level 1: Basic Foundations' | 'Level 2: Conversational (Artisans & Daily Life)' | 'Level 3: Master (Cultural Heritage & Art Idioms)';
  title: string;
  topic: string;
  culturalInsight: string;
  vocabulary: {
    nativeWord: string;
    romanization: string;
    englishMeaning: string;
    exampleSentenceNative: string;
    exampleSentenceEnglish: string;
    audioHint?: string;
  }[];
  questions: LanguageLessonQuestion[];
  rewardXP: number;
}

export interface LanguageTrack {
  id: string;
  language: string;
  nativeScript: string;
  statesSpoken: string[];
  flagEmoji: string;
  description: string;
  culturalTieIn: string;
  lessons: LanguageLesson[];
}
