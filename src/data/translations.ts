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

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  script: string;
  region: string;
  greeting: string;
  icon: string;
  sampleArtForm: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    script: 'Latin',
    region: 'Global & Pan-India',
    greeting: 'Welcome to KalaVerse',
    icon: '🌐',
    sampleArtForm: 'Madhubani, Warli & Pichwai'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    script: 'Devanagari',
    region: 'North & Central India (Bihar, Rajasthan, MP, UP)',
    greeting: 'कलाVerse में आपका स्वागत है',
    icon: '🪷',
    sampleArtForm: 'मधुबनी, पिछवाई और मीनाकारी'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'Tamil',
    region: 'Tamil Nadu & Southern Heritage',
    greeting: 'கலாவேர்ஸுக்கு நல்வரவு',
    icon: '🪔',
    sampleArtForm: 'தஞ்சாவூர் ஓவியம் & வெண்கலச் சிற்பங்கள்'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'Telugu',
    region: 'Andhra Pradesh & Telangana',
    greeting: 'కలావర్స్‌కు స్వాగతం',
    icon: '🌿',
    sampleArtForm: 'శ్రీకాళహస్తి కలంకారీ & చెరియాల్ స్క్రోల్'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'Bengali',
    region: 'West Bengal & Eastern Lore',
    greeting: 'কলাভার্সে আপনাকে স্বাগতম',
    icon: '🎨',
    sampleArtForm: 'কালীঘাট পটচিত্র ও টেরাকোটা'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'Devanagari',
    region: 'Maharashtra & Sahyadri Guilds',
    greeting: 'कलाverse मध्ये आपले सहर्ष स्वागत आहे',
    icon: '🚩',
    sampleArtForm: 'वारली आदिवासी कला आणि पैठणी'
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'Gujarati',
    region: 'Gujarat & Kutch Artisans',
    greeting: 'કલાવર્સમાં આપનું સ્વાગત છે',
    icon: '🦚',
    sampleArtForm: 'રોગન આર્ટ, બાંધણી અને પિથોરા'
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    script: 'Kannada',
    region: 'Karnataka & Vijayanagara Heritage',
    greeting: 'ಕಲಾವರ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ',
    icon: '🐘',
    sampleArtForm: 'ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ರಕಲೆ & ಚನ್ನಪಟ್ಟಣ'
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    script: 'Odia',
    region: 'Odisha & Jagannath Culture',
    greeting: 'କଳାଭର୍ସକୁ ସ୍ୱାଗତମ୍',
    icon: '🐚',
    sampleArtForm: 'ରଘୁରାଜପୁର ପଟ୍ଟଚିତ୍ର ଓ ତାଳପତ୍ର ଖୋଦେଇ'
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    script: 'Malayalam',
    region: 'Kerala & Western Ghats',
    greeting: 'കലാവേഴ്സിലേക്ക് സ്വാഗതം',
    icon: '🥥',
    sampleArtForm: 'കേരള ചുവർചിത്രങ്ങൾ & കളമെഴുത്ത്'
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'Gurmukhi',
    region: 'Punjab & Northern Heritage',
    greeting: 'ਕਲਾਵਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
    icon: '🌾',
    sampleArtForm: 'ਫੁਲਕਾਰੀ ਕਢਾਈ ਤੇ ਪੰਜਾਬੀ ਲੋਕ ਕਲਾ'
  },
  {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    script: 'Bengali-Assamese',
    region: 'Assam & Brahmaputra Valley',
    greeting: 'কলাভাৰ্ছলৈ স্বাগতম',
    icon: '🦏',
    sampleArtForm: 'অসমৰ মুখাশিল্প, পাট ৰেচম আৰু সত্ৰীয়া চিত্ৰকলা'
  }
];

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  home: string;
  kalakaarHub: string;
  kalalens: string;
  kalasathi: string;
  workshops: string;
  marketplace: string;
  community: string;
  atlasMap: string;
  craftTrails: string;
  profile: string;
  changeLanguage: string;
  currentPlan: string;
  heroBadge: string;
  heroVerifiedBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  tryKalaLensBtn: string;
  exploreMapBtn: string;
  askKalaSathiBtn: string;
  metricsStates: string;
  metricsTraditions: string;
  metricsLanguages: string;
  metricsPayout: string;
  portalsHeading: string;
  portalsSubtitle: string;
  spotlightBadge: string;
  spotlightTitle: string;
  spotlightSubtitle: string;
  spotlightBtn: string;
  featuredTraditionsTitle: string;
  featuredTraditionsSub: string;
  choosePlanHeading: string;
  choosePlanSub: string;
  welcomeModalTitle: string;
  welcomeModalSubtitle: string;
  chooseLanguagePrompt: string;
  previewCardTitle: string;
  continueBtn: string;
  changeAnytimeNotice: string;
  
  // KalaSathi Specific
  sathiTitle: string;
  sathiSubtitle: string;
  sathiPromptPlaceholder: string;
  sathiSendBtn: string;
  sathiQuickPromptsTitle: string;
  sathiSelectArtForm: string;
  sathiSelectState: string;

  // KalaLens Specific
  lensTitle: string;
  lensSubtitle: string;
  lensUploadTitle: string;
  lensUploadSubtitle: string;
  lensAnalyzeBtn: string;
  lensSelectSample: string;
  lensAuthenticityScore: string;
  lensLinework: string;
  lensPigments: string;
  lensMotifs: string;
  lensAskQuestionPlaceholder: string;
  lensAskBtn: string;
  lensExportReport: string;

  // State Map Explorer Specific
  mapTitle: string;
  mapSubtitle: string;
  mapSearchPlaceholder: string;
  mapFilterAll: string;
  mapFilterNorth: string;
  mapFilterSouth: string;
  mapFilterEast: string;
  mapFilterWest: string;
  mapFilterCentral: string;
  mapFilterNE: string;
  mapViewDetailsBtn: string;
  mapArtisanLineage: string;
  mapNaturalPigments: string;
  mapGITagged: string;

  // KalaTour Specific
  tourTitle: string;
  tourSubtitle: string;
  tourGenerateBtn: string;
  tourDuration1Day: string;
  tourPaceLabel: string;
  tourInterestsLabel: string;
  tourBudgetEst: string;
  tourTimelineTitle: string;
  tourDownloadTrail: string;

  // Community Specific
  commTitle: string;
  commSubtitle: string;
  commShareBtn: string;
  commFilterAll: string;
  commAppreciations: string;
  commFollowBtn: string;
  commFollowingBtn: string;
  commEmptyTitle: string;
  commEmptySub: string;

  // Workshops Specific
  wsTitle: string;
  wsSubtitle: string;
  wsHostBtn: string;
  wsBookSeatBtn: string;
  wsBookedBadge: string;
  wsSeatsLeft: string;
  wsPayoutNotice: string;
  wsEmptyTitle: string;
  wsEmptySub: string;

  // Marketplace Specific
  mktTitle: string;
  mktSubtitle: string;
  mktListBtn: string;
  mktAddToCartBtn: string;
  mktCartTitle: string;
  mktCheckoutBtn: string;
  mktDirectPayout: string;
  mktEmptyTitle: string;
  mktEmptySub: string;

  // Profile Specific
  profTitle: string;
  profSubtitle: string;
  profRoleLabel: string;
  profPlanLabel: string;
  profChangeLangBtn: string;
  profChangePlanBtn: string;
  profResetBtn: string;
  profPledgeTitle: string;

  // Onboarding & Account Types
  accountTypeHeading: string;
  personalAccountTitle: string;
  personalAccountSub: string;
  personalAccountBadge: string;
  personalAccountFeat1: string;
  personalAccountFeat2: string;
  personalAccountFeat3: string;
  personalAccountFeat4: string;
  businessAccountTitle: string;
  businessAccountSub: string;
  businessAccountBadge: string;
  businessAccountFeat1: string;
  businessAccountFeat2: string;
  businessAccountFeat3: string;
  businessAccountFeat4: string;
  selectAccountAndEnter: string;
  languageOptionLabel: string;
  choosePlanPersonal?: string;
  choosePlanBusiness?: string;
  stateExplorer?: string;
  kalatour?: string;

  // AI Agent (KalaYatri AI) & KalaTour Booking
  aiAgentFloatingLabel: string;
  aiAgentTitle: string;
  aiAgentSubtitle: string;
  aiAgentRAGBadge: string;
  tabChat: string;
  tabPreferences: string;
  tabItinerary: string;
  tabBookExperience: string;
  tabMyBookings: string;
  prefInterests: string;
  prefTime: string;
  prefBudget: string;
  prefActivities: string;
  prefAccessibility: string;
  prefFood: string;
  prefExperienceStyle: string;
  updateRecommendationsBtn: string;
  bookNowBtn: string;
  bookingModalTitle: string;
  selectDate: string;
  selectSlot: string;
  travelersLabel: string;
  adultsLabel: string;
  childrenLabel: string;
  seniorsLabel: string;
  accessibilityNeedsPrompt: string;
  mealPreferencePrompt: string;
  priceSummaryTitle: string;
  baseTicketPrice: string;
  directArtisanPayoutNotice: string;
  platformFee: string;
  totalAmount: string;
  paymentMethodTitle: string;
  payUPI: string;
  payCard: string;
  payNetBanking: string;
  confirmAndPayBtn: string;
  processingPayment: string;
  ticketConfirmedTitle: string;
  bookingCodeLabel: string;
  qrCodeNotice: string;
  downloadPassBtn: string;
  closeAgent: string;

  // Portal Cards (HomePage)
  portalLensBadge: string;
  portalLensDesc: string;
  portalMapBadge: string;
  portalMapDesc: string;
  portalSathiBadge: string;
  portalSathiDesc: string;
  portalTourBadge: string;
  portalTourDesc: string;
  portalMktBadge: string;
  portalMktDesc: string;
  portalWsBadge: string;
  portalWsDesc: string;
  portalCommBadge: string;
  portalCommDesc: string;

  // Topics (Featured Art Traditions)
  topicMadhubaniName: string;
  topicMadhubaniOrigin: string;
  topicMadhubaniMotif: string;
  topicMadhubaniDesc: string;

  topicWarliName: string;
  topicWarliOrigin: string;
  topicWarliMotif: string;
  topicWarliDesc: string;

  topicPichwaiName: string;
  topicPichwaiOrigin: string;
  topicPichwaiMotif: string;
  topicPichwaiDesc: string;

  topicKalamkariName: string;
  topicKalamkariOrigin: string;
  topicKalamkariMotif: string;
  topicKalamkariDesc: string;

  topicPattachitraName: string;
  topicPattachitraOrigin: string;
  topicPattachitraMotif: string;
  topicPattachitraDesc: string;

  topicTanjoreName: string;
  topicTanjoreOrigin: string;
  topicTanjoreMotif: string;
  topicTanjoreDesc: string;

  // Topic Card Actions & Extras
  topicLearnInMapBtn: string;
  topicConsultAIBtn: string;
  topicGITagBadge: string;
  topicKeyMotifsLabel: string;

  // Spotlight Section (HomePage)
  spotlightMotifTitle: string;
  spotlightMotifDesc: string;
  spotlightQATitle: string;
  spotlightQADesc: string;
  spotlightReportTitle: string;
  spotlightScoreMasterGrade: string;
  spotlightLineworkLabel: string;
  spotlightColorLabel: string;
  spotlightMotifLabel: string;
  spotlightQAExampleTitle: string;
  spotlightQAExampleQuestion: string;
  spotlightQAExampleAnswer: string;

  // Plan Banner on Homepage
  fairTradeEthicalBadge: string;
  planReviewChangeBtn: string;
  planEthicsPledgeBtn: string;

  // KalaYatri AI Assistant
  kalayatriNameOnly: string;
  kalayatriTooltipSub: string;
  kalayatriTooltipRAG: string;
  kalayatriTooltipOpenPrompt: string;
  kalayatriWelcomeMsg: string;
  kalayatriPromptMadhubani: string;
  kalayatriPromptKalamkari: string;
  kalayatriPromptAccessibility: string;

  // Additional KalaLens Translations
  lensEmptyStateTitle: string;
  lensEmptyStateSub: string;
  lensUploadStep1: string;
  lensUploadReplace: string;
  lensTargetStyleStep2: string;
  lensArtistContextStep3: string;
  lensArtistContextPlaceholder: string;
  lensScanningProgress: string;
  lensMasterAnalysisCritique: string;
  lensStyleVerified: string;
  lensMasteryScore: string;
  lensSacredMotifs: string;
  lensStrengths: string;
  lensAreasImprovement: string;
  lensAskQuestionSpecific: string;
  lensLiveVisionChat: string;
  lensAnalyzingQuestion: string;

  // Additional KalaSathi Translations
  sathiGuruMentorBadge: string;
  sathiTraditionArchive: string;
  sathiLivingLineages: string;
  sathiSelectStyleLabel: string;
  sathiSelectStateLabel: string;
  sathiQuickPromptsSubtitle: string;
  sathiInitialGreeting: string;

  // ChoosePlanModal & PrivacyEthicsModal Translations
  choosePlanModalTitle: string;
  choosePlanModalDesc: string;
  choosePlanFreeForever: string;
  choosePlanFreeSub: string;
  choosePlanSelectedBadge: string;
  choosePlanSelectedPersonalBtn: string;
  choosePlanChoosePersonalBtn: string;
  choosePlanMasterArtisanTier: string;
  choosePlanMasterArtisanSub: string;
  choosePlanSelectedBusinessBtn: string;
  choosePlanChooseBusinessBtn: string;
  choosePlanEthicalPledgeTitle: string;
  choosePlanEthicalPledgeDesc: string;
  choosePlanAcceptTerms: string;
  choosePlanEnterAsArtisan: string;
  choosePlanEnterAsPatron: string;

  privacyModalTitle: string;
  privacyZeroDataTitle: string;
  privacyZeroDataDesc: string;
  privacyFairTradeTitle: string;
  privacyFairTradeDesc: string;
  privacyPositiveSpaceTitle: string;
  privacyPositiveSpaceDesc: string;
  privacyResetBtn: string;
  privacyUnderstoodBtn: string;
  privacyResetConfirmPrompt: string;

  // Community & Workshops Modal Translations
  commPostModalTitle: string;
  commArtworkTitleLabel: string;
  commArtworkTitlePlaceholder: string;
  commArtStyleLabel: string;
  commUploadPhotoLabel: string;
  commUploadClickPrompt: string;
  commUploadFormatsNotice: string;
  commTechniqueLabel: string;
  commTechniquePlaceholder: string;
  commCancelBtn: string;
  commPublishArtworkBtn: string;

  wsHostModalTitle: string;
  wsMasterclassTitleLabel: string;
  wsMasterclassTitlePlaceholder: string;
  wsArtFormLabel: string;
  wsTicketPriceLabel: string;
  wsDateLabel: string;
  wsTimeLabel: string;
  wsDurationLabel: string;
  wsMaxSeatsLabel: string;
  wsDescMaterialsLabel: string;
  wsDescMaterialsPlaceholder: string;
  wsUploadCoverLabel: string;
  wsPublishBtn: string;
  wsSeatFeeLabel: string;
  wsDurationPrefix: string;
  wsFree: string;
  wsSoldOut: string;

  // Footer Translations
  footerLoreDesc: string;
  footerHubsTitle: string;
  footerSettingsTitle: string;
  footerCopyrightNotice: string;
  footerVedicNotice: string;
  footerAccountTier: string;
  footerPrivacyEthics: string;
}

const TRANSLATIONS_EN: TranslationDictionary = {
    appName: 'KalaVerse',
    tagline: 'Living Arts of Bharat',
    home: 'Home',
    kalakaarHub: 'KalaKaar Hub',
    kalalens: 'कलाLens (AI Vision)',
    kalasathi: 'KalaSathi (AI Guru)',
    workshops: 'Live Workshops',
    marketplace: 'Artisan Market',
    community: 'Community',
    atlasMap: 'State Explorer',
    craftTrails: 'कलाTour (Trails)',
    profile: 'Profile',
    changeLanguage: 'Language',
    currentPlan: 'Plan',
    heroBadge: "India's Living Heritage Platform",
    heroVerifiedBadge: 'Verified GI-Tag Artisans',
    heroTitle: "Discover, Master & Celebrate India's Timeless Living Arts",
    heroSubtitle:
      'Step into the sacred canvas of Bharat. Scan your paintings with कलाLens AI, consult with KalaSathi, explore 28 states with State Explorer, and embark on artisan craft trails.',
    tryKalaLensBtn: 'Try कलाLens AI Vision',
    exploreMapBtn: 'Open State Explorer',
    askKalaSathiBtn: 'Ask KalaSathi AI',
    metricsStates: '28 States & 8 UTs Covered',
    metricsTraditions: '35+ Living Art Traditions',
    metricsLanguages: '11 Cultural Languages',
    metricsPayout: '85% Direct Artisan Payout',
    portalsHeading: 'Explore KalaVerse Experience Hubs',
    portalsSubtitle:
      'Select an experience below to dive straight into AI vision mentoring, artisan trails, or state craft mastery.',
    spotlightBadge: 'Feature Spotlight',
    spotlightTitle: 'कलाLens: Deep Artwork Feedback & Interactive Q&A on Your Paintings',
    spotlightSubtitle:
      'Upload any sketch, drawing, or painting to receive rigorous computer vision analysis of linework, motifs, and pigments — plus ask specific questions directly about your uploaded work!',
    spotlightBtn: 'Launch कलाLens & Test Your Painting',
    featuredTraditionsTitle: 'Celebrated Indian Art Forms',
    featuredTraditionsSub:
      'Each state holds millennia of sacred mythology, indigenous pigments, and generational artisan lineages.',
    choosePlanHeading: 'Choose Your KalaVerse Plan & Role',
    choosePlanSub:
      'Whether you are an art enthusiast exploring Indian heritage or a master artisan selling GI-certified originals and hosting live workshops, KalaVerse has dedicated support for you.',
    welcomeModalTitle: 'Welcome to KalaVerse',
    welcomeModalSubtitle:
      'Experience the living heritage, sacred folk arts, and master artisan traditions of India in your preferred language.',
    chooseLanguagePrompt: 'Choose Your App Language',
    previewCardTitle: 'Preview in this language',
    continueBtn: 'Enter KalaVerse',
    changeAnytimeNotice: 'You can change your language anytime from the top navigation bar.',

    // KalaSathi
    sathiTitle: 'KalaSathi: AI Cultural Guru & Art Mentor',
    sathiSubtitle: 'Consult on authentic folklore, sacred geometry, natural pigment recipes, and step-by-step master techniques.',
    sathiPromptPlaceholder: 'Ask about Madhubani motifs, Kalamkari natural dyes, Warli figures, Pichwai gold foil...',
    sathiSendBtn: 'Consult Guru',
    sathiQuickPromptsTitle: 'Sacred Inquiry Starters',
    sathiSelectArtForm: 'Art Tradition',
    sathiSelectState: 'Heritage State',

    // KalaLens
    lensTitle: 'कलाLens: Computer Vision Artwork Analysis',
    lensSubtitle: 'Scan your paintings, sketches, and motifs for linework precision, pigment authenticity, and cultural symbolism.',
    lensUploadTitle: 'Upload Your Painting / Drawing',
    lensUploadSubtitle: 'Drag & drop high-resolution artwork or choose sample paintings below',
    lensAnalyzeBtn: 'Scan & Analyze Artwork',
    lensSelectSample: 'Or analyze a celebrated masterpiece:',
    lensAuthenticityScore: 'Folk Lineage & Precision Score',
    lensLinework: 'Linework & Brush Precision',
    lensPigments: 'Pigment & Color Palette Balance',
    lensMotifs: 'Sacred Motif & Symbol Recognition',
    lensAskQuestionPlaceholder: 'Ask specific questions about your uploaded painting...',
    lensAskBtn: 'Ask AI Vision',
    lensExportReport: 'Download Analysis Report',

    // State Explorer
    mapTitle: 'Living Cultural Heritage Atlas',
    mapSubtitle: 'Interactive exploration of 28 Indian States & 8 Union Territories with verified GI tags, indigenous pigments, and master artisan lineages.',
    mapSearchPlaceholder: 'Search state (e.g. Bihar, Odisha, Rajasthan) or craft (e.g. Madhubani, Warli)...',
    mapFilterAll: 'All Regions (28 States)',
    mapFilterNorth: 'North India',
    mapFilterSouth: 'South India',
    mapFilterEast: 'East India',
    mapFilterWest: 'West India',
    mapFilterCentral: 'Central India',
    mapFilterNE: 'North-East',
    mapViewDetailsBtn: 'Explore Art Heritage',
    mapArtisanLineage: 'Master Artisan Lineages',
    mapNaturalPigments: 'Natural & Mineral Pigments',
    mapGITagged: 'GI Tagged Heritage Art',

    // KalaTour
    tourTitle: 'कलाTour: 1-Day Cultural Craft Trails',
    tourSubtitle: 'Custom 1-day immersive artisan itineraries connecting living master studios, sacred dye workshops, and heritage craft villages.',
    tourGenerateBtn: 'Generate 1-Day Heritage Itinerary',
    tourDuration1Day: '1-Day Immersive Route',
    tourPaceLabel: 'Tour Pace',
    tourInterestsLabel: 'Artisan Focus & Craft Interests',
    tourBudgetEst: 'Estimated Route Budget',
    tourTimelineTitle: 'Curated 1-Day Heritage Trail',
    tourDownloadTrail: 'Save & Print Itinerary',

    // Community
    commTitle: 'KalaKaar Community & Student Atelier',
    commSubtitle: 'A safe, positive cultural space where traditional artists, students, and folk painters share authentic handmade creations.',
    commShareBtn: 'Share Your Artwork',
    commFilterAll: 'All Traditions',
    commAppreciations: 'Appreciations',
    commFollowBtn: 'Follow Artist',
    commFollowingBtn: 'Following',
    commEmptyTitle: 'No Community Posts Yet',
    commEmptySub: 'Be the first artisan or student to share your traditional artwork, sketches, and cultural paintings with the KalaVerse community.',

    // Workshops
    wsTitle: 'Live Masterclasses & Interactive Ateliers',
    wsSubtitle: 'Learn directly from National Awardees, master chitrakars, and traditional guild lineages in live online ateliers.',
    wsHostBtn: 'Host a Masterclass',
    wsBookSeatBtn: 'Book Live Seat',
    wsBookedBadge: 'Seat Confirmed',
    wsSeatsLeft: 'Seats Available',
    wsPayoutNotice: '85% direct payout transferred directly to the master artisan.',
    wsEmptyTitle: 'No Live Workshops Scheduled Yet',
    wsEmptySub: 'Master artisans and traditional guilds can host live masterclasses, interactive webinars, and certification workshops.',

    // Marketplace
    mktTitle: 'Artisan Heritage Bazaar & Direct Store',
    mktSubtitle: 'Direct fair-trade platform connecting certified master artisans with global art patrons. 85% direct payout on every creation.',
    mktListBtn: 'List an Artwork',
    mktAddToCartBtn: 'Add to Cart',
    mktCartTitle: 'Artisan Cart & Fair-Trade Checkout',
    mktCheckoutBtn: 'Proceed to Secure Checkout',
    mktDirectPayout: '85% Direct Artisan Payout',
    mktEmptyTitle: 'No Marketplace Listings Yet',
    mktEmptySub: 'Verified artisans and master guilds can list authentic handmade paintings, GI crafts, and heritage textiles directly for art patrons.',

    // Profile
    profTitle: 'Artisan Profile & Cultural Credentials',
    profSubtitle: 'Manage your verified credentials, enrolled masterclasses, language preferences, and fair-trade certificates.',
    profRoleLabel: 'Cultural Role',
    profPlanLabel: 'Active Membership Plan',
    profChangeLangBtn: 'Change App Language',
    profChangePlanBtn: 'Change Account Tier',
    profResetBtn: 'Reset Stored Data',
    profPledgeTitle: 'Ethical Cultural Heritage Pledge',

    // Onboarding & Account Types
    accountTypeHeading: 'Select Your KalaVerse Experience & Account Type',
    personalAccountTitle: 'Personal Account',
    personalAccountSub: 'For Cultural Explorers, Heritage Travelers & Art Enthusiasts',
    personalAccountBadge: '🌿 Free Heritage Pass',
    personalAccountFeat1: 'Full Access to 28-State Living Art Atlas & Interactive Map',
    personalAccountFeat2: 'AI Cultural Travel Concierge (KalaYatri) with RAG Itinerary Grounding',
    personalAccountFeat3: 'KalaLens Computer Vision Art Critique & KalaSathi Guru Mentorship',
    personalAccountFeat4: 'Book Verified KalaTour Experiences with 85% Direct Artisan Remuneration',
    businessAccountTitle: 'Business Account',
    businessAccountSub: 'For Master Artisans, Traditional Guilds, Cooperatives & Tour Curators',
    businessAccountBadge: '👑 Verified Master Guild',
    businessAccountFeat1: 'Official GI Artisan Pehchan Card Verification & Cultural Seller Badge',
    businessAccountFeat2: 'Host Live Masterclasses, Physical Experiences & Manage Tour Bookings',
    businessAccountFeat3: 'Zero Agency Exploitation: Guaranteed 85% Direct Payout to Your Bank / UPI',
    businessAccountFeat4: 'List Authentic Creations in Global Heritage Bazaar with Provenance Seals',
    selectAccountAndEnter: 'Enter KalaVerse with Selected Account',
    languageOptionLabel: 'Choose Preferred Language (12 Pan-Indian Languages Available)',

    // AI Agent (KalaYatri AI) & KalaTour Booking
    aiAgentFloatingLabel: 'KalaYatri AI • Cultural Travel Assistant',
    aiAgentTitle: 'KalaYatri AI (कलायात्री)',
    aiAgentSubtitle: 'Personal Cultural Travel Assistant & KalaTour Concierge',
    aiAgentRAGBadge: 'Grounded in KalaVerse Verified Cultural Knowledge Base',
    tabChat: 'Cultural Concierge',
    tabPreferences: 'Travel Preferences',
    tabItinerary: 'Active Itinerary',
    tabBookExperience: 'Book Experiences',
    tabMyBookings: 'My Passes & Tickets',
    prefInterests: 'Art & Heritage Interests',
    prefTime: 'Available Time & Schedule',
    prefBudget: 'Budget per Person (₹ INR)',
    prefActivities: 'Preferred Cultural Activities',
    prefAccessibility: 'Accessibility & Mobility Requirements',
    prefFood: 'Regional Food & Dietary Preferences',
    prefExperienceStyle: 'Cultural Immersion Style',
    updateRecommendationsBtn: 'Update Recommendations & Refine Itinerary',
    bookNowBtn: 'Book Authentic Experience',
    bookingModalTitle: 'Reserve Official KalaTour Cultural Experience',
    selectDate: 'Choose Travel Date',
    selectSlot: 'Select Time Slot',
    travelersLabel: 'Select Number of Travelers',
    adultsLabel: 'Adults (12+ yrs)',
    childrenLabel: 'Children (5-11 yrs)',
    seniorsLabel: 'Seniors (60+ yrs)',
    accessibilityNeedsPrompt: 'Special Accessibility Requirements (Step-free, Wheelchair, Rest Breaks)',
    mealPreferencePrompt: 'Culinary Choice (Pure Vegetarian, Sattvic, Regional Thali)',
    priceSummaryTitle: 'Reservation & Direct Artisan Remuneration Breakdown',
    baseTicketPrice: 'Experience Ticket Price',
    directArtisanPayoutNotice: '85% of your ticket is paid directly to the Master Artisan lineage & guild.',
    platformFee: 'Platform Fee (₹0 Zero Markup)',
    totalAmount: 'Total Amount Payable',
    paymentMethodTitle: 'Select Payment Method',
    payUPI: 'Instant UPI (Google Pay, PhonePe, Paytm, BHIM)',
    payCard: 'Debit / Credit Card (RuPay, Visa, Mastercard)',
    payNetBanking: 'NetBanking (All Major Indian Banks)',
    confirmAndPayBtn: 'Authorize Payment & Confirm Reservation',
    processingPayment: 'Securing Artisan Slot & Authorizing Payment...',
    ticketConfirmedTitle: 'Reservation Confirmed! Official Cultural E-Pass Issued',
    bookingCodeLabel: 'E-Pass Booking Reference',
    qrCodeNotice: 'Present this digital pass with QR code to the Master Artisan upon arrival at the village atelier.',
    downloadPassBtn: 'Save / Print Cultural Pass',
    closeAgent: 'Minimize Assistant',

    // Portal Cards (HomePage)
    portalLensBadge: 'Multimodal Vision AI',
    portalLensDesc: 'Scan handmade artworks for stroke discipline, sacred geometry & natural pigment harmony.',
    portalMapBadge: 'Living GI Atlas',
    portalMapDesc: 'Explore 28 States, master artisan lineages, sacred motifs & authentic techniques.',
    portalSathiBadge: 'Heritage AI Guru',
    portalSathiDesc: 'Consult ancient shastras, mythological symbolism, natural dyes & classical iconography.',
    portalTourBadge: '1-Day Immersive Trails',
    portalTourDesc: 'Single-day craft itineraries, village atelier visits & master weaver interactions.',
    portalMktBadge: 'Fair Trade Market',
    portalMktDesc: 'Collect authentic certified originals with 85% direct compensation to artisans.',
    portalWsBadge: 'Master Guilds',
    portalWsDesc: 'Live video masterclasses with National Award & Shilp Guru master artisans.',
    portalCommBadge: 'Artisan Circle',
    portalCommDesc: 'Connect with traditional painters, sculptors, handloom guilds and researchers.',

    // Topics (Featured Art Traditions)
    topicMadhubaniName: 'Madhubani Painting',
    topicMadhubaniOrigin: 'Mithila Region, Bihar',
    topicMadhubaniMotif: 'Matsya (Fish), Lotus, Bamboo, Sun & Moon',
    topicMadhubaniDesc: 'Ancient wall & paper art drawn with bamboo nibs (kalam) and natural indigo, turmeric & lampblack.',

    topicWarliName: 'Warli Folk Art',
    topicWarliOrigin: 'Northern Sahyadri, Maharashtra',
    topicWarliMotif: 'Tarpa Dance, Kalpavriksha, Sun, Moon, Animals',
    topicWarliDesc: 'Minimalist tribal philosophy expressing cosmic harmony through simple geometric triangles, circles & rice paste.',

    topicPichwaiName: 'Pichwai Art',
    topicPichwaiOrigin: 'Nathdwara, Rajasthan',
    topicPichwaiMotif: 'Shrinathji, Sacred Cows, Kadamba Trees, Lotuses',
    topicPichwaiDesc: 'Devotional cloth miniatures with pure 24K gold leaf, natural lapis lazuli and mineral pigments.',

    topicKalamkariName: 'Srikalahasti Kalamkari',
    topicKalamkariOrigin: 'Tirupati District, Andhra Pradesh',
    topicKalamkariMotif: 'Deities, Tree of Life, Peacocks, Mythological Epics',
    topicKalamkariDesc: '17-step organic pen art using myrobalan mordant, buffalo milk & natural river washes.',

    topicPattachitraName: 'Odisha Pattachitra',
    topicPattachitraOrigin: 'Raghurajpur Village, Odisha',
    topicPattachitraMotif: 'Jagannath Trio, Dasavatara, Lotus Borders',
    topicPattachitraDesc: 'Fine scroll paintings on treated cotton cloth using conch shell white, red stone & vegetable tree gum.',

    topicTanjoreName: 'Thanjavur Painting',
    topicTanjoreOrigin: 'Thanjavur, Tamil Nadu',
    topicTanjoreMotif: 'Gilded Krishna, Ganesha, Floral Teakwood Mandapams',
    topicTanjoreDesc: 'Opulent South Indian temple art adorned with pure 22K gold foil, precious gemstones & limestone gesso relief.',

    // Topic Card Actions & Extras
    topicLearnInMapBtn: 'Explore in State Map ❯',
    topicConsultAIBtn: 'Consult AI Guru ❯',
    topicGITagBadge: 'GI Tag Heritage',
    topicKeyMotifsLabel: 'Key Motifs:',

    // Spotlight Section (HomePage)
    spotlightMotifTitle: 'Motif & Linework Precision',
    spotlightMotifDesc: 'Evaluates Nayan eyes, Katchni hatching & contour stability.',
    spotlightQATitle: 'Ask Questions on Your Art',
    spotlightQADesc: 'Ask how to fix petals, borders, or blend authentic natural dyes.',
    spotlightReportTitle: 'Sample Analysis Report',
    spotlightScoreMasterGrade: '9.2 / 10 Master Grade',
    spotlightLineworkLabel: 'Linework & Contour Precision',
    spotlightColorLabel: 'Traditional Color Harmony',
    spotlightMotifLabel: 'Motif & Sacred Iconography',
    spotlightQAExampleTitle: 'Live Q&A Followup Example:',
    spotlightQAExampleQuestion: '"How do I fix the lotus petal symmetry?"',
    spotlightQAExampleAnswer: 'Master KalaLens advises single-breath continuous bamboo stylus strokes.',

    // Plan Banner on Homepage
    fairTradeEthicalBadge: 'Ethical & Transparent',
    planReviewChangeBtn: 'Review / Change Plan ❯',
    planEthicsPledgeBtn: 'Privacy & Ethics Pledge ❯',

    // KalaYatri AI Assistant
    kalayatriNameOnly: 'KalaYatri',
    kalayatriTooltipSub: 'Cultural Concierge & Tour Passes',
    kalayatriTooltipRAG: 'RAG Knowledge • 85% Direct Pay',
    kalayatriTooltipOpenPrompt: 'Click side icon to open ❯',
    kalayatriWelcomeMsg: 'Greetings! I am KalaYatri, your Personal AI Cultural Travel Assistant grounded in KalaVerse verified cultural knowledge base (RAG). I can guide you through authentic 1-day craft itineraries, answer questions about timings and accessibility, and complete direct artisan bookings with zero agency markups. Where would your cultural curiosity like to wander today?',
    kalayatriPromptMadhubani: '1-Day Madhubani Trail',
    kalayatriPromptKalamkari: 'Srikalahasti Kalamkari',
    kalayatriPromptAccessibility: 'Accessibility & Step-free Details',

    // Additional KalaLens Translations
    lensEmptyStateTitle: 'Awaiting Artwork Submission',
    lensEmptyStateSub: 'Upload a photo of your traditional sketch or painting on the left. KalaLens will provide detailed breakdown of linework, traditional motifs, color harmony, and allow you to ask interactive questions directly on your artwork!',
    lensUploadStep1: '1. Upload Your Artwork',
    lensUploadReplace: 'Click to replace image',
    lensTargetStyleStep2: '2. Target Traditional Style',
    lensArtistContextStep3: '3. Artist Context / Notes (Optional)',
    lensArtistContextPlaceholder: 'E.g., Practiced double border hatching, used black pigment pen and flat ochre acrylics...',
    lensScanningProgress: 'Scanning strokes & pigment layers...',
    lensMasterAnalysisCritique: 'Master Analysis & Critique',
    lensStyleVerified: 'Style Verified',
    lensMasteryScore: 'Mastery Score',
    lensSacredMotifs: 'Sacred Motifs Recognized:',
    lensStrengths: 'Preserved Lineage Strengths',
    lensAreasImprovement: 'Recommended Refinements',
    lensAskQuestionSpecific: 'Ask KalaLens Specific Questions About Your Painting',
    lensLiveVisionChat: 'Live Vision Chat',
    lensAnalyzingQuestion: 'Analyzing stroke curvature and pigment formulation...',

    // Additional KalaSathi Translations
    sathiGuruMentorBadge: 'AI Cultural Guru & Heritage Mentor',
    sathiTraditionArchive: 'Tradition Archive',
    sathiLivingLineages: '35+ Living Indian Lineages',
    sathiSelectStyleLabel: 'Select Art Style',
    sathiSelectStateLabel: 'Select State Context',
    sathiQuickPromptsSubtitle: 'Click any prompt to instantly explore sacred lore, pigments, and techniques:',
    sathiInitialGreeting: `### 🪷 Namaste! I am KalaSathi (कला साथी)\nYour personal AI consultant, cultural historian, and creative mentor for authentic **Traditional Indian Arts & Crafts**.\n\nHow may I guide your artistic journey today?\n- Ask for **original painting ideas** tailored to your mood, room, or festival.\n- Unravel the **deep spiritual symbolism** behind sacred motifs (Peacock, Fish, Tree of Life, Lotus).\n- Learn **authentic traditional materials** (natural stone pigments, cow-dung wasli paper, bamboo nib pens).\n- Get **step-by-step guidance** for Madhubani, Kalamkari, Warli, Pichwai, Tanjore, Pattachitra, and more!`,

    // ChoosePlanModal & PrivacyEthicsModal Translations
    choosePlanModalTitle: 'Choose Your Account Tier',
    choosePlanModalDesc: 'Please select whether you are exploring and learning as a cultural patron, or hosting masterclasses and selling certified crafts as a master artisan.',
    choosePlanFreeForever: 'Free Forever',
    choosePlanFreeSub: 'Explore, learn, and collect authentic crafts',
    choosePlanSelectedBadge: 'Selected',
    choosePlanSelectedPersonalBtn: '✓ Selected: Personal Account',
    choosePlanChoosePersonalBtn: 'Choose Personal Account',
    choosePlanMasterArtisanTier: 'Master Artisan Tier',
    choosePlanMasterArtisanSub: '85% Direct Artisan Payout • 15% Platform Commission',
    choosePlanSelectedBusinessBtn: '✓ Selected: Business Account',
    choosePlanChooseBusinessBtn: 'Choose Business Account',
    choosePlanEthicalPledgeTitle: 'KalaVerse Privacy & Fair-Trade Commitment',
    choosePlanEthicalPledgeDesc: 'Zero data selling pledge. Full artwork ownership. Fair 85% direct payouts to certified Indian master artisans.',
    choosePlanAcceptTerms: 'I accept terms',
    choosePlanEnterAsArtisan: 'Master Artisan',
    choosePlanEnterAsPatron: 'Patron & Explorer',

    privacyModalTitle: 'Privacy, Ethics & Data Sovereignty',
    privacyZeroDataTitle: 'Zero Data Selling Guarantee',
    privacyZeroDataDesc: 'KalaVerse never sells your artwork, drawing practice, or personal data to third-party ad networks or unauthorized AI training corpuses.',
    privacyFairTradeTitle: 'Fair Artisan Trade Code:',
    privacyFairTradeDesc: 'All marketplace sales and workshop registrations enforce a strict 85% direct payout model directly into verified artisan bank accounts, preventing predatory middlemen exploitation.',
    privacyPositiveSpaceTitle: 'Positive Space Mandate:',
    privacyPositiveSpaceDesc: 'Community interactions are strictly positive. Our system enforces like-only appreciation and constructive AI mentorship to protect budding and master artists alike.',
    privacyResetBtn: 'Reset Local Session & Progress',
    privacyUnderstoodBtn: 'Understood',
    privacyResetConfirmPrompt: 'Are you sure you want to clear your local session data, cart, and progress?',

    // Community & Workshops Modal Translations
    commPostModalTitle: 'Share Your Heritage Artwork',
    commArtworkTitleLabel: 'Artwork Title',
    commArtworkTitlePlaceholder: 'E.g., Sacred Peacock in Kadamba Grove',
    commArtStyleLabel: 'Traditional Art Style',
    commUploadPhotoLabel: 'Upload Photo from Device (Optional)',
    commUploadClickPrompt: 'Click to select image file from device',
    commUploadFormatsNotice: 'JPG, PNG, WEBP supported',
    commTechniqueLabel: 'Technique & Description',
    commTechniquePlaceholder: 'Explain pigments used, motif lineage, or what you practiced...',
    commCancelBtn: 'Cancel',
    commPublishArtworkBtn: 'Publish Artwork',

    wsHostModalTitle: 'Host an Artisan Masterclass',
    wsMasterclassTitleLabel: 'Masterclass Title',
    wsMasterclassTitlePlaceholder: 'E.g., Sacred Double-Line Madhubani on Handmade Wasli',
    wsArtFormLabel: 'Art Form',
    wsTicketPriceLabel: 'Ticket Price (INR)',
    wsDateLabel: 'Date',
    wsTimeLabel: 'Time (IST)',
    wsDurationLabel: 'Duration',
    wsMaxSeatsLabel: 'Max Seats',
    wsDescMaterialsLabel: 'Description & Required Materials',
    wsDescMaterialsPlaceholder: 'Detail workshop prerequisites, pigments, brushes, or what participants should bring...',
    wsUploadCoverLabel: 'Upload Cover Photo from Device (Optional)',
    wsPublishBtn: 'Publish Workshop & Open Seats',
    wsSeatFeeLabel: 'Seat Fee',
    wsDurationPrefix: 'Duration:',
    wsFree: 'Free',
    wsSoldOut: 'Sold Out',

    // Footer Translations
    footerLoreDesc: 'Dedicated to honoring and preserving traditional Indian arts, folk crafts, and GI-certified artisanal lineages across all 28 states and 8 union territories.',
    footerHubsTitle: 'KalaVerse Hubs',
    footerSettingsTitle: 'Account & Settings',
    footerCopyrightNotice: "Preserving India's Living Heritage.",
    footerVedicNotice: 'Authentic Vedic & Folk Crafts',
    footerAccountTier: 'Account Tier',
    footerPrivacyEthics: 'Privacy & Ethics'
};

const TRANSLATIONS_HI: TranslationDictionary = {
    appName: 'कलाVerse',
    tagline: 'भारत की जीवंत लोक एवं शास्त्रीय कलाएं',
    home: 'होम',
    kalakaarHub: 'कलाकार हब',
    kalalens: 'कलाLens (एआई विज़न)',
    kalasathi: 'कलासाथी (एआई गुरु)',
    workshops: 'लाइव कार्यशालाएं',
    marketplace: 'शिल्पकार बाज़ार',
    community: 'कला समुदाय',
    atlasMap: 'राज्य अन्वेषक',
    craftTrails: 'कलाTour (शिल्प यात्राएं)',
    profile: 'प्रोफ़ाइल',
    changeLanguage: 'भाषा',
    currentPlan: 'योजना',
    heroBadge: 'भारत का जीवंत विरासत मंच',
    heroVerifiedBadge: 'जीआई प्रमाणित शिल्पकार',
    heroTitle: 'भारत की कालजयी पारंपरिक कलाओं को जानें, सीखें और संजोएं',
    heroSubtitle:
      'भारत की पावन कला-धरोहर में प्रवेश करें। कलाLens AI से अपनी पेंटिंग्स का विश्लेषण करें, कलासाथी से परामर्श लें, और राज्य अन्वेषक से 28 राज्यों की कलाएं जानें।',
    tryKalaLensBtn: 'कलाLens एआई विज़न आज़माएं',
    exploreMapBtn: 'राज्य अन्वेषक खोलें',
    askKalaSathiBtn: 'कलासाथी AI से पूछें',
    metricsStates: '28 राज्य व 8 केंद्र शासित प्रदेश',
    metricsTraditions: '35+ जीवंत कला परंपराएं',
    metricsLanguages: '11 सांस्कृतिक भाषाएं',
    metricsPayout: '85% सीधा शिल्पकार भुगतान',
    portalsHeading: 'कलाVerse के मुख्य अनुभव केंद्र',
    portalsSubtitle:
      'एआई विज़न मेंटरशिप, शिल्प यात्राओं, या राज्य कला अन्वेषण में सीधे प्रवेश करने के लिए नीचे दिए गए हब चुनें।',
    spotlightBadge: 'विशेष आकर्षण',
    spotlightTitle: 'कलाLens: गहन कलाकृति विश्लेषण और आपकी पेंटिंग पर लाइव प्रश्नोत्तर',
    spotlightSubtitle:
      'अपनी पेंटिंग अपलोड करें और रेखांकन, पारंपरिक रूपांकनों और रंगों का सटीक विश्लेषण पाएं — और अपनी कला पर सीधे सवाल भी पूछें!',
    spotlightBtn: 'कलाLens शुरू करें और पेंटिंग जांचें',
    featuredTraditionsTitle: 'भारत की प्रमुख कला परंपराएं',
    featuredTraditionsSub:
      'प्रत्येक राज्य में सहस्राब्दियों की पौराणिक कथाएं, प्राकृतिक रंग और पीढ़ियों से चली आ रही शिल्प परंपराएं हैं।',
    choosePlanHeading: 'अपनी कलाVerse योजना और भूमिका चुनें',
    choosePlanSub:
      'चाहे आप कला प्रेमी हों या जीआई-प्रमाणित मूल कृतियां बेचने वाले मास्टर शिल्पकार, कलाVerse आपके लिए समर्पित है।',
    welcomeModalTitle: 'कलाVerse में आपका स्वागत है',
    welcomeModalSubtitle:
      'भारत की समृद्ध सांस्कृतिक विरासत, पारंपरिक कलाओं और शिल्पकारों की दुनिया का अपनी पसंदीदा भाषा में अनुभव करें।',
    chooseLanguagePrompt: 'अपनी ऐप भाषा चुनें',
    previewCardTitle: 'इस भाषा में देखें',
    continueBtn: 'कलाVerse में प्रवेश करें',
    changeAnytimeNotice: 'आप शीर्ष नेविगेशन बार से किसी भी समय अपनी भाषा बदल सकते हैं।',

    // KalaSathi
    sathiTitle: 'कलासाथी: एआई सांस्कृतिक गुरु एवं कला परामर्शदाता',
    sathiSubtitle: 'प्रामाणिक लोककथाओं, पवित्र ज्यामिति, प्राकृतिक रंजकों और पारंपरिक तकनीकों पर गुरु परामर्श लें।',
    sathiPromptPlaceholder: 'मधुबनी रूपांकनों, कलमकारी प्राकृतिक रंगों, वारली आकृतियों, पिछवाई स्वर्ण पत्र के बारे में पूछें...',
    sathiSendBtn: 'गुरु से पूछें',
    sathiQuickPromptsTitle: 'महत्वपूर्ण कला प्रश्न',
    sathiSelectArtForm: 'कला परंपरा',
    sathiSelectState: 'विरासत राज्य',

    // KalaLens
    lensTitle: 'कलाLens: कंप्यूटर विज़न कलाकृति विश्लेषण',
    lensSubtitle: 'अपनी पेंटिंग, रेखाचित्र और पारंपरिक रूपांकनों की रेखांकन शुद्धता और रंग संतुलन की जांच करें।',
    lensUploadTitle: 'अपनी पेंटिंग या रेखाचित्र अपलोड करें',
    lensUploadSubtitle: 'चित्र को यहां खींचें या नीचे दिए गए नमूनों में से चुनें',
    lensAnalyzeBtn: 'स्कैन करें और विश्लेषण पाएं',
    lensSelectSample: 'या किसी प्रसिद्ध मास्टरपीस का विश्लेषण देखें:',
    lensAuthenticityScore: 'पारंपरिक शुद्धता व रेखांकन स्कोर',
    lensLinework: 'रेखांकन व ब्रश नियंत्रण',
    lensPigments: 'प्राकृतिक रंग व संतुलन',
    lensMotifs: 'पवित्र रूपांकनों की पहचान',
    lensAskQuestionPlaceholder: 'अपनी अपलोड की गई पेंटिंग के बारे में प्रश्न पूछें...',
    lensAskBtn: 'एआई से पूछें',
    lensExportReport: 'विश्लेषण रिपोर्ट डाउनलोड करें',

    // State Explorer
    mapTitle: 'जीवंत सांस्कृतिक विरासत एटलस',
    mapSubtitle: 'भारत के 28 राज्यों और 8 केंद्र शासित प्रदेशों की जीआई टैग कलाएं, प्राकृतिक रंग और शिल्पकार वंश।',
    mapSearchPlaceholder: 'राज्य (उदा. बिहार, ओडिशा, राजस्थान) या कला खोजें...',
    mapFilterAll: 'सभी क्षेत्र (28 राज्य)',
    mapFilterNorth: 'उत्तर भारत',
    mapFilterSouth: 'दक्षिण भारत',
    mapFilterEast: 'पूर्वी भारत',
    mapFilterWest: 'पश्चिम भारत',
    mapFilterCentral: 'मध्य भारत',
    mapFilterNE: 'पूर्वोत्तर भारत',
    mapViewDetailsBtn: 'कला विरासत देखें',
    mapArtisanLineage: 'मास्टर शिल्पकार वंश',
    mapNaturalPigments: 'प्राकृतिक व खनिज रंग',
    mapGITagged: 'जीआई प्रमाणित विरासत',

    // KalaTour
    tourTitle: 'कलाTour: 1-दिवसीय सांस्कृतिक शिल्प यात्राएं',
    tourSubtitle: 'मास्टर कार्यशालाओं, प्राकृतिक रंग केंद्रों और शिल्प गांवों की विशेष 1-दिवसीय यात्रा योजना।',
    tourGenerateBtn: '1-दिवसीय यात्रा तैयार करें',
    tourDuration1Day: '1-दिवसीय अनुभव यात्रा',
    tourPaceLabel: 'यात्रा गति',
    tourInterestsLabel: 'कला विधाएं व शिल्प रुचि',
    tourBudgetEst: 'अनुमानित यात्रा बजट',
    tourTimelineTitle: 'विशेष 1-दिवसीय शिल्प मार्ग',
    tourDownloadTrail: 'यात्रा योजना सहेजें',

    // Community
    commTitle: 'कलाकार समुदाय एवं छात्र दीर्घा',
    commSubtitle: 'पारंपरिक कलाकारों और छात्रों का सुरक्षित मंच जहां आप अपनी कलाकृतियां साझा कर सकते हैं।',
    commShareBtn: 'अपनी कला साझा करें',
    commFilterAll: 'सभी कलाएं',
    commAppreciations: 'प्रशंसाएं',
    commFollowBtn: 'कलाकार का अनुसरण करें',
    commFollowingBtn: 'अनुसरण में',
    commEmptyTitle: 'अभी कोई पोस्ट नहीं है',
    commEmptySub: 'अपनी पारंपरिक कलाकृति या रेखाचित्र साझा करने वाले पहले कलाकार बनें।',

    // Workshops
    wsTitle: 'लाइव मास्टरक्लास एवं कार्यशालाएं',
    wsSubtitle: 'राष्ट्रीय पुरस्कार विजेताओं और मास्टर शिल्पकारों से लाइव ऑनलाइन कार्यशालाओं में सीधे सीखें।',
    wsHostBtn: 'मास्टरक्लास आयोजित करें',
    wsBookSeatBtn: 'सीट बुक करें',
    wsBookedBadge: 'सीट आरक्षित',
    wsSeatsLeft: 'उपलब्ध सीटें',
    wsPayoutNotice: '85% राशि सीधे मास्टर शिल्पकार को हस्तांतरित की जाती है।',
    wsEmptyTitle: 'कोई आगामी कार्यशाला नहीं',
    wsEmptySub: 'मास्टर शिल्पकार यहां अपनी लाइव कार्यशालाएं आयोजित कर सकते हैं।',

    // Marketplace
    mktTitle: 'शिल्पकार विरासत बाज़ार एवं स्टोर',
    mktSubtitle: 'प्रमाणित मास्टर शिल्पकारों से सीधे कलाकृतियां खरीदें। प्रत्येक कलाकृति पर 85% सीधा भुगतान।',
    mktListBtn: 'कलाकृति सूचीबद्ध करें',
    mktAddToCartBtn: 'कार्ट में जोड़ें',
    mktCartTitle: 'शिल्पकार कार्ट एवं चेकआउट',
    mktCheckoutBtn: 'सुरक्षित चेकआउट करें',
    mktDirectPayout: '85% सीधा शिल्पकार भुगतान',
    mktEmptyTitle: 'अभी कोई सूची उपलब्ध नहीं है',
    mktEmptySub: 'प्रमाणित शिल्पकार यहां अपनी मूल कलाकृतियां सूचीबद्ध कर सकते हैं।',

    // Profile
    profTitle: 'कलाकार प्रोफ़ाइल एवं साख',
    profSubtitle: 'अपनी साख, नामांकित कार्यशालाएं, भाषा प्राथमिकताएं और निष्पक्ष व्यापार प्रमाणपत्र प्रबंधित करें।',
    profRoleLabel: 'सांस्कृतिक भूमिका',
    profPlanLabel: 'सक्रिय सदस्यता योजना',
    profChangeLangBtn: 'ऐप भाषा बदलें',
    profChangePlanBtn: 'खाता श्रेणी बदलें',
    profResetBtn: 'डेटा रीसेट करें',
    profPledgeTitle: 'नैतिक सांस्कृतिक विरासत प्रतिज्ञा',

    // Onboarding & Account Types
    accountTypeHeading: 'अपना कलाVerse अनुभव और खाता प्रकार चुनें',
    personalAccountTitle: 'व्यक्तिगत खाता (Personal Account)',
    personalAccountSub: 'सांस्कृतिक यात्रियों, कला प्रेमियों, छात्रों और पर्यटकों के लिए',
    personalAccountBadge: '🌿 निःशुल्क आजीवन धरोहर पास',
    personalAccountFeat1: '28 राज्यों के जीवंत कला एटलस व इंटरेक्टिव मानचित्र तक पूर्ण पहुंच',
    personalAccountFeat2: 'कलायात्री AI व्यक्तिगत सांस्कृतिक यात्रा सहायक (सत्यापित RAG ज्ञान आधारित)',
    personalAccountFeat3: 'कलाLens एआई विज़न कलाकृति परीक्षण और कलासाथी गुरु मार्गदर्शन',
    personalAccountFeat4: '85% सीधे शिल्पकार भुगतान के साथ सत्यापित कलाTour अनुभव बुक करें',
    businessAccountTitle: 'व्यापार / शिल्पकार खाता (Business Account)',
    businessAccountSub: 'मास्टर शिल्पकारों, पारंपरिक गिल्डों, सहकारी समितियों व टूर क्यूरेटरों के लिए',
    businessAccountBadge: '👑 सत्यापित मास्टर गिल्ड',
    businessAccountFeat1: 'आधिकारिक जीआई व पहचान कार्ड सत्यापन और सांस्कृतिक विक्रेता बैज',
    businessAccountFeat2: 'लाइव मास्टरक्लास व कार्यशालाएं आयोजित करें और टूर बुकिंग प्रबंधित करें',
    businessAccountFeat3: 'बिचौलियों से मुक्त: आपके बैंक या यूपीआई में 85% सीधा भुगतान गारंटी',
    businessAccountFeat4: 'प्रमाणपत्र के साथ वैश्विक शिल्पकार बाज़ार में अपनी कृतियां सूचीबद्ध करें',
    selectAccountAndEnter: 'चयनित खाते के साथ कलाVerse में प्रवेश करें',
    languageOptionLabel: 'पसंदीदा भाषा चुनें (12 प्रमुख भारतीय भाषाएं उपलब्ध)',

    // AI Agent (KalaYatri AI) & KalaTour Booking
    aiAgentFloatingLabel: 'कलायात्री AI • सांस्कृतिक यात्रा सहायक',
    aiAgentTitle: 'कलायात्री AI (KalaYatri)',
    aiAgentSubtitle: 'आपका व्यक्तिगत सांस्कृतिक यात्रा सलाहकार व कलाTour सहायक',
    aiAgentRAGBadge: 'कलाVerse के सत्यापित सांस्कृतिक ज्ञानकोश से संचालित (RAG)',
    tabChat: 'यात्रा चैट व परामर्श',
    tabPreferences: 'यात्रा प्राथमिकताएं',
    tabItinerary: 'सक्रिय यात्रा योजना',
    tabBookExperience: 'अनुभव बुक करें',
    tabMyBookings: 'मेरे ई-पास व टिकट',
    prefInterests: 'कला व शिल्प में रुचि',
    prefTime: 'उपलब्ध समय व अवधि',
    prefBudget: 'प्रति व्यक्ति बजट (₹)',
    prefActivities: 'पसंदीदा सांस्कृतिक गतिविधियां',
    prefAccessibility: 'सुगमता व गतिशीलता आवश्यकताएं (Accessibility)',
    prefFood: 'भोजन व खानपान प्राथमिकता (सात्विक, शाकाहारी थाली)',
    prefExperienceStyle: 'अनुभव शैली',
    updateRecommendationsBtn: 'सिफारिशें अपडेट करें और योजना सुधारें',
    bookNowBtn: 'सत्यापित अनुभव बुक करें',
    bookingModalTitle: 'कलाTour सांस्कृतिक अनुभव आरक्षण',
    selectDate: 'यात्रा की तिथि चुनें',
    selectSlot: 'समय स्लॉट चुनें',
    travelersLabel: 'यात्रियों की संख्या',
    adultsLabel: 'वयस्क (12+ वर्ष)',
    childrenLabel: 'बच्चे (5-11 वर्ष)',
    seniorsLabel: 'वरिष्ठ नागरिक (60+ वर्ष)',
    accessibilityNeedsPrompt: 'विशेष सुगमता सहायता (व्हीलचेयर, समतल मार्ग, विश्राम)',
    mealPreferencePrompt: 'भोजन विकल्प (शुद्ध शाकाहारी, सात्विक, क्षेत्रीय थाली)',
    priceSummaryTitle: 'आरक्षण व 85% शिल्पकार भुगतान विवरण',
    baseTicketPrice: 'अनुभव टिकट मूल्य',
    directArtisanPayoutNotice: 'आपके टिकट का 85% सीधे मास्टर शिल्पकार व ग्राम सहकारी को जाता है।',
    platformFee: 'प्लेटफ़ॉर्म शुल्क (₹0 शून्य अतिरिक्त शुल्क)',
    totalAmount: 'कुल देय राशि',
    paymentMethodTitle: 'सुरक्षित भुगतान विधि चुनें',
    payUPI: 'तुरंत यूपीआई (Google Pay, PhonePe, Paytm, BHIM)',
    payCard: 'डेबिट / क्रेडिट कार्ड (RuPay, Visa, Mastercard)',
    payNetBanking: 'नेटबैंकिंग (सभी प्रमुख भारतीय बैंक)',
    confirmAndPayBtn: 'भुगतान अधिकृत करें और आरक्षण पुष्टि करें',
    processingPayment: 'शिल्पकार स्लॉट आरक्षित हो रहा है और भुगतान प्रक्रिया जारी है...',
    ticketConfirmedTitle: 'आरक्षण संपन्न! आधिकारिक सांस्कृतिक ई-पास जारी',
    bookingCodeLabel: 'बुकिंग संदर्भ कोड',
    qrCodeNotice: 'ग्राम कार्यशाला में आगमन पर यह डिजिटल क्यूआर पास मास्टर शिल्पकार को दिखाएं।',
    downloadPassBtn: 'सांस्कृतिक ई-पास सहेजें / प्रिंट करें',
    closeAgent: 'सहायक छोटा करें',

    // Portal Cards (HomePage)
    portalLensBadge: 'मल्टीमॉडल विज़न AI',
    portalLensDesc: 'हस्तनिर्मित कलाकृतियों के रेखांकन, ज्यामिति व प्राकृतिक रंगों का गहरा मूल्यांकन।',
    portalMapBadge: 'सजीव GI एटलस',
    portalMapDesc: '28 राज्यों की कला परंपराएं, मास्टर शिल्पकार व पारंपरिक तकनीकें खोजें।',
    portalSathiBadge: 'विरासत AI गुरु',
    portalSathiDesc: 'प्राचीन शास्त्रों, प्रतीकों, वानस्पतिक रंगों और तकनीकों पर मार्गदर्शन लें।',
    portalTourBadge: '1-दिवसीय कला यात्राएं',
    portalTourDesc: 'कारीगर कार्यशालाओं, जीवित करघों और शिल्प गांवों का 1-दिवसीय मार्ग।',
    portalMktBadge: 'सत्यापित बाज़ार',
    portalMktDesc: 'प्रमाणित मूल कलाकृतियां खरीदें, 85% सीधा भुगतान शिल्पकारों को।',
    portalWsBadge: 'मास्टर कार्यशालाएं',
    portalWsDesc: 'राष्ट्रीय पुरस्कार विजेता मास्टर कलाकारों से सीधे ऑनलाइन सीखें।',
    portalCommBadge: 'कलाकार मंडल',
    portalCommDesc: 'पारंपरिक कलाकारों, शोधकर्ताओं और कला प्रेमियों के साथ संवाद करें।',

    // Topics (Featured Art Traditions)
    topicMadhubaniName: 'मधुबनी चित्रकला',
    topicMadhubaniOrigin: 'मिथिला क्षेत्र, बिहार',
    topicMadhubaniMotif: 'मत्स्य (मछली), कमल, बांस, सूर्य एवं चंद्र',
    topicMadhubaniDesc: 'बांस की कलम और प्राकृतिक नील, हल्दी व काजल से बनाई जाने वाली प्राचीन भित्ति व पत्र कला।',

    topicWarliName: 'वारली लोक कला',
    topicWarliOrigin: 'उत्तरी सह्याद्रि, महाराष्ट्र',
    topicWarliMotif: 'तारपा नृत्य, कल्पवृक्ष, सूर्य, चंद्रमा एवं जीव-जंतु',
    topicWarliDesc: 'चावल के लेप व ज्यामितीय त्रिकोणों से ब्रह्मांडीय सामंजस्य दर्शाने वाली प्राचीन आदिवासी कला।',

    topicPichwaiName: 'पिछवाई कला',
    topicPichwaiOrigin: 'नाथद्वारा, राजस्थान',
    topicPichwaiMotif: 'श्रीनाथजी, कामधेनु गायें, कदंब वृक्ष एवं कमल ताल',
    topicPichwaiDesc: 'शुद्ध 24K स्वर्ण वर्क, लाजवर्त और प्राकृतिक खनिजों से रची जाने वाली वैष्णव भक्ति कला।',

    topicKalamkariName: 'श्रीकालहस्ती कलमकारी',
    topicKalamkariOrigin: 'तिरुपति जिला, आंध्र प्रदेश',
    topicKalamkariMotif: 'देवी-देवता, जीवन वृक्ष, मयूर एवं पौराणिक कथाएं',
    topicKalamkariDesc: 'हरड़, भैंस के दूध और नदी के जल से 17 चरणों में तैयार होने वाली प्राकृतिक कलम कला।',

    topicPattachitraName: 'ओडिशा पट्टचित्र',
    topicPattachitraOrigin: 'रघुराजपुर ग्राम, ओडिशा',
    topicPattachitraMotif: 'जगन्नाथ त्रिमूर्ति, दशावतार एवं कमल किनारियां',
    topicPattachitraDesc: 'शंख चूर्ण सफेदी, पत्थर के रंगों और कैथा गोंद से कपड़े के पट्टे पर चित्रित प्राचीन कला।',

    topicTanjoreName: 'तंजावुर चित्रकला',
    topicTanjoreOrigin: 'तंजावुर, तमिलनाडु',
    topicTanjoreMotif: 'स्वर्णमंडित बाल कृष्ण, गणेश एवं नक्काशीदार मंडप',
    topicTanjoreDesc: 'शुद्ध 22K सोने के वर्क, अनमोल रत्नों और चूने की उभरी नक्काशी से सुसज्जित मंदिर कला।',

    // Topic Card Actions & Extras
    topicLearnInMapBtn: 'राज्य मानचित्र में देखें ❯',
    topicConsultAIBtn: 'AI गुरु से परामर्श ❯',
    topicGITagBadge: 'GI टैग प्रमाणित विरासत',
    topicKeyMotifsLabel: 'प्रमुख प्रतीक:',

    // Spotlight Section (HomePage)
    spotlightMotifTitle: 'प्रतीक एवं रेखांकन शुद्धता',
    spotlightMotifDesc: 'नयन, कचनी रेखांकन और रूपरेखा की स्थिरता का मूल्यांकन करता है।',
    spotlightQATitle: 'अपनी कला पर सीधे प्रश्न पूछें',
    spotlightQADesc: 'कमल पंखुड़ियों, सीमाओं या प्राकृतिक रंगों के सम्मिश्रण पर सलाह लें।',
    spotlightReportTitle: 'नमूना विश्लेषण रिपोर्ट',
    spotlightScoreMasterGrade: '9.2 / 10 मास्टर ग्रेड',
    spotlightLineworkLabel: 'रेखांकन व सीमा शुद्धता',
    spotlightColorLabel: 'पारंपरिक रंग सामंजस्य',
    spotlightMotifLabel: 'पवित्र प्रतीक एवं प्रतिमा विज्ञान',
    spotlightQAExampleTitle: 'लाइव प्रश्नोत्तर उदाहरण:',
    spotlightQAExampleQuestion: '"कमल की पंखुड़ियों में समरूपता कैसे सुधारें?"',
    spotlightQAExampleAnswer: 'मास्टर कलाLens: एक ही श्वास में निरंतर बाँस की कलम से रेखा खींचने का परामर्श।',

    // Plan Banner on Homepage
    fairTradeEthicalBadge: 'नैतिक एवं पारदर्शी',
    planReviewChangeBtn: 'योजना समीक्षा / बदलें ❯',
    planEthicsPledgeBtn: 'गोपनीयता व आचार संहिता ❯',

    // KalaYatri AI Assistant
    kalayatriNameOnly: 'KalaYatri',
    kalayatriTooltipSub: 'सांस्कृतिक सहायक एवं टूर पास',
    kalayatriTooltipRAG: 'RAG ज्ञानकोश • 85% सीधा भुगतान',
    kalayatriTooltipOpenPrompt: 'खोलने के लिए क्लिक करें ❯',
    kalayatriWelcomeMsg: 'नमस्ते! मैं आपका व्यक्तिगत सांस्कृतिक यात्रा सहायक कलायात्री (KalaYatri) हूँ। मैं कलाVerse के प्रमाणित सांस्कृतिक ज्ञानकोश (RAG) से जुड़ा हुआ हूँ। मैं आपको 1-दिवसीय कलाTour योजना, मास्टर शिल्पकार कार्यशालाओं, सुलभता, सात्विक खानपान और 85% सीधे कारीगर भुगतान के साथ टिकट बुकिंग में सहायता प्रदान करूँगा। आज आप किस कला यात्रा पर विचार कर रहे हैं?',
    kalayatriPromptMadhubani: 'बिहार मधुबनी 1-दिवसीय यात्रा',
    kalayatriPromptKalamkari: 'आंध्र कलमकारी अनुभव',
    kalayatriPromptAccessibility: 'सुगमता एवं व्हीलचेयर विवरण',

    // Additional KalaLens Translations
    lensEmptyStateTitle: 'कलाकृति सबमिशन की प्रतीक्षा',
    lensEmptyStateSub: 'बाईं ओर अपनी पारंपरिक पेंटिंग या रेखाचित्र अपलोड करें। कलाLens आपकी रेखाओं, प्रतीकों और रंगों का सूक्ष्म विश्लेषण करेगा और आपको अपनी पेंटिंग पर सीधे प्रश्न पूछने की सुविधा देगा।',
    lensUploadStep1: '1. अपनी कलाकृति अपलोड करें',
    lensUploadReplace: 'छवि बदलने के लिए क्लिक करें',
    lensTargetStyleStep2: '2. पारंपरिक कला शैली चुनें',
    lensArtistContextStep3: '3. कलाकार संदर्भ / विवरण (वैकल्पिक)',
    lensArtistContextPlaceholder: 'उदा. बाँस की कलम और हस्तनिर्मित वासली कागज़ पर कचनी रेखांकन का अभ्यास...',
    lensScanningProgress: 'रेखाओं और रंगों की परतों का विश्लेषण जारी...',
    lensMasterAnalysisCritique: 'मास्टर विश्लेषण एवं समीक्षा',
    lensStyleVerified: 'सत्यापित शैली',
    lensMasteryScore: 'कौशल स्कोर',
    lensSacredMotifs: 'पहचाने गए पवित्र प्रतीक:',
    lensStrengths: 'संरक्षित पारंपरिक विशेषताएं',
    lensAreasImprovement: 'सुझाए गए सुधार',
    lensAskQuestionSpecific: 'अपनी कलाकृति पर कलाLens से सीधे प्रश्न पूछें',
    lensLiveVisionChat: 'लाइव विज़न संवाद',
    lensAnalyzingQuestion: 'स्ट्रोक वक्रता एवं प्राकृतिक रंगों का विश्लेषण...',

    // Additional KalaSathi Translations
    sathiGuruMentorBadge: 'एआई सांस्कृतिक गुरु एवं परंपरा मार्गदर्शक',
    sathiTraditionArchive: 'परंपरा अभिलेखागार',
    sathiLivingLineages: '35+ जीवंत भारतीय कला परंपराएं',
    sathiSelectStyleLabel: 'कला शैली चुनें',
    sathiSelectStateLabel: 'राज्य संदर्भ चुनें',
    sathiQuickPromptsSubtitle: 'पवित्र प्रतीकों, प्राकृतिक रंगों और तकनीकों को जानने के लिए किसी भी विषय पर क्लिक करें:',
    sathiInitialGreeting: `### 🪷 नमस्ते! मैं कला साथी (KalaSathi) हूँ\nपारंपरिक भारतीय कला और शिल्प के लिए आपका व्यक्तिगत AI सांस्कृतिक गुरु और रचनात्मक मार्गदर्शक।\n\nआज मैं आपकी कला यात्रा का मार्गदर्शन कैसे करूँ?\n- अपने कमरे या त्योहार के अनुसार **अनूठे पेंटिंग विचार** पूछें।\n- पवित्र प्रतीकों (मोर, मछली, कल्पवृक्ष, कमल) के पीछे का **गहन आध्यात्मिक अर्थ** समझें।\n- **प्रामाणिक पारंपरिक सामग्री** (प्राकृतिक पत्थर के रंग, वासली कागज, बांस की कलम) के बारे में जानें।\n- मधुबनी, कलमकारी, वारली, पिछवाई, तंजौर, पट्टचित्र और अन्य कलाओं के लिए **कदम-दर-कदम मार्गदर्शन** प्राप्त करें!`,

    // ChoosePlanModal & PrivacyEthicsModal Translations
    choosePlanModalTitle: 'अपनी खाता श्रेणी चुनें',
    choosePlanModalDesc: 'कृपया चुनें कि क्या आप एक सांस्कृतिक संरक्षक के रूप में कलाएं सीख रहे हैं, या मास्टर शिल्पकार के रूप में कार्यशालाएं और कलाकृतियां बेच रहे हैं।',
    choosePlanFreeForever: 'आजीवन निःशुल्क',
    choosePlanFreeSub: 'प्रामाणिक कलाकृतियों को जानें, सीखें और संजोएं',
    choosePlanSelectedBadge: 'चयनित',
    choosePlanSelectedPersonalBtn: '✓ चयनित: व्यक्तिगत खाता',
    choosePlanChoosePersonalBtn: 'व्यक्तिगत खाता चुनें',
    choosePlanMasterArtisanTier: 'मास्टर शिल्पकार श्रेणी',
    choosePlanMasterArtisanSub: '85% सीधा शिल्पकार भुगतान • 15% मंच सहयोग',
    choosePlanSelectedBusinessBtn: '✓ चयनित: व्यापार खाता',
    choosePlanChooseBusinessBtn: 'व्यापार खाता चुनें',
    choosePlanEthicalPledgeTitle: 'कलाVerse गोपनीयता एवं निष्पक्ष व्यापार प्रतिज्ञा',
    choosePlanEthicalPledgeDesc: 'शून्य डेटा बिक्री गारंटी। कलाकृति पर पूर्ण अधिकार। प्रमाणित भारतीय मास्टर शिल्पकारों को 85% सीधा भुगतान।',
    choosePlanAcceptTerms: 'मैं शर्तें स्वीकार करता/करती हूँ',
    choosePlanEnterAsArtisan: 'मास्टर शिल्पकार',
    choosePlanEnterAsPatron: 'कला संरक्षक एवं अन्वेषक',

    privacyModalTitle: 'गोपनीयता, नैतिकता एवं डेटा संप्रभुता',
    privacyZeroDataTitle: 'शून्य डेटा बिक्री गारंटी',
    privacyZeroDataDesc: 'कलाVerse आपकी कलाकृतियों, रेखाचित्रों या व्यक्तिगत डेटा को किसी भी विज्ञापन नेटवर्क या अनधिकृत एआई को कभी नहीं बेचता।',
    privacyFairTradeTitle: 'शिल्पकार निष्पक्ष व्यापार संहिता:',
    privacyFairTradeDesc: 'सभी बाज़ार बिक्री और कार्यशाला पंजीकरणों में 85% सीधा भुगतान सीधे कारीगरों के सत्यापित बैंक खातों में जाता है।',
    privacyPositiveSpaceTitle: 'सकारात्मक कला वातावरण जनादेश:',
    privacyPositiveSpaceDesc: 'कलाकार समुदाय केवल सकारात्मक और रचनात्मक सराहना पर आधारित है, जिससे सभी कलाकारों को प्रोत्साहन मिले।',
    privacyResetBtn: 'स्थानीय सत्र एवं प्रगति रीसेट करें',
    privacyUnderstoodBtn: 'स्वीकार है',
    privacyResetConfirmPrompt: 'क्या आप वाकई अपना स्थानीय सत्र डेटा, कार्ट और प्रगति मिटाना चाहते हैं?',

    // Community & Workshops Modal Translations
    commPostModalTitle: 'अपनी पारंपरिक कलाकृति साझा करें',
    commArtworkTitleLabel: 'कलाकृति का शीर्षक',
    commArtworkTitlePlaceholder: 'उदा. कदंब वन में पवित्र मोर',
    commArtStyleLabel: 'पारंपरिक कला शैली',
    commUploadPhotoLabel: 'उपकरण से फ़ोटो अपलोड करें (वैकल्पिक)',
    commUploadClickPrompt: 'उपकरण से छवि फ़ाइल चुनने के लिए क्लिक करें',
    commUploadFormatsNotice: 'JPG, PNG, WEBP समर्थित',
    commTechniqueLabel: 'तकनीक एवं विवरण',
    commTechniquePlaceholder: 'उपयोग किए गए रंगों, रूपांकनों या अपने अभ्यास का विवरण दें...',
    commCancelBtn: 'रद्द करें',
    commPublishArtworkBtn: 'कलाकृति प्रकाशित करें',

    wsHostModalTitle: 'शिल्पकार मास्टरक्लास आयोजित करें',
    wsMasterclassTitleLabel: 'मास्टरक्लास का शीर्षक',
    wsMasterclassTitlePlaceholder: 'उदा. हस्तनिर्मित वासली पर पवित्र दोहरी रेखा मधुबनी',
    wsArtFormLabel: 'कला शैली',
    wsTicketPriceLabel: 'टिकट शुल्क (₹)',
    wsDateLabel: 'तारीख',
    wsTimeLabel: 'समय (IST)',
    wsDurationLabel: 'अवधि',
    wsMaxSeatsLabel: 'कुल सीटें',
    wsDescMaterialsLabel: 'विवरण एवं आवश्यक सामग्री',
    wsDescMaterialsPlaceholder: 'कार्यशाला की पूर्व-आवश्यकताएं, रंग, ब्रश या प्रतिभागियों को क्या लाना चाहिए...',
    wsUploadCoverLabel: 'कवर फ़ोटो अपलोड करें (वैकल्पिक)',
    wsPublishBtn: 'कार्यशाला प्रकाशित करें व सीटें खोलें',
    wsSeatFeeLabel: 'सीट शुल्क',
    wsDurationPrefix: 'अवधि:',
    wsFree: 'निःशुल्क',
    wsSoldOut: 'सीटें पूर्ण',

    // Footer Translations
    footerLoreDesc: 'सभी 28 राज्यों और 8 केंद्र शासित प्रदेशों में पारंपरिक भारतीय कलाओं, लोक शिल्पों और जीआई-प्रमाणित कारीगर परंपराओं को समर्पित।',
    footerHubsTitle: 'कलाVerse केंद्र',
    footerSettingsTitle: 'खाता एवं सेटिंग्स',
    footerCopyrightNotice: 'भारत की जीवंत विरासत का संरक्षण।',
    footerVedicNotice: 'प्रामाणिक वैदिक एवं लोक शिल्प',
    footerAccountTier: 'खाता श्रेणी',
    footerPrivacyEthics: 'गोपनीयता एवं नैतिकता'
};

function TRANSLATIONS_FALLBACK(
  code: string,
  appName: string,
  tagline: string,
  langName: string
): TranslationDictionary {
  return {
    ...TRANSLATIONS_HI,
    appName,
    tagline,
    chooseLanguagePrompt: `App Language (${langName})`
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: TRANSLATIONS_EN,
  hi: TRANSLATIONS_HI,
  ta: {
    ...TRANSLATIONS_EN,
    appName: 'கலாவேர்ஸ்',
    tagline: 'பாரதத்தின் பாரம்பரியக் கலைகள்',
    home: 'முகப்பு',
    kalakaarHub: 'கலைஞர் தளம்',
    kalalens: 'கலாLens (AI பார்வை)',
    kalasathi: 'கலாசாதி (AI வழிகாட்டி)',
    workshops: 'நேரலை பயிலரங்குகள்',
    marketplace: 'கைவினைச் சந்தை',
    community: 'கலை சமூகம்',
    atlasMap: 'மாநில எக்ஸ்ப்ளோரர்',
    craftTrails: 'கலாடூர் (கலைச் சுற்றுலா)',
    profile: 'சுயவிவரம்',
    changeLanguage: 'மொழி',
    currentPlan: 'திட்டம்',
    heroBadge: 'இந்தியாவின் வாழும் பாரம்பரிய தளம்',
    heroVerifiedBadge: 'GI அங்கீகரிக்கப்பட்ட கைவினைஞர்கள்',
    heroTitle: 'இந்தியாவின் தொன்மையான பாரம்பரிய கலைகளைக் கற்று மகிழுங்கள்',
    heroSubtitle: 'பாரதத்தின் புனிதமான கலை உலகில் நுழையுங்கள். உங்கள் ஓவியங்களை கலாLens AI மூலம் பகுப்பாய்வு செய்யுங்கள்.',
    tryKalaLensBtn: 'கலாLens AI பார்வையை முயற்சிக்கவும்',
    exploreMapBtn: 'மாநில எக்ஸ்ப்ளோரரைத் திறக்க',
    askKalaSathiBtn: 'கலாசாதியிடம் கேளுங்கள்',
    metricsStates: '28 மாநிலங்கள் & 8 ஒன்றியங்கள்',
    metricsTraditions: '35+ வாழும் கலை மரபுகள்',
    metricsLanguages: '11 பண்பாட்டு மொழிகள்',
    metricsPayout: '85% நேரடி கலைஞர் வருவாய்',
    portalsHeading: 'கலாவேர்ஸ் அனுபவ மையங்கள்',
    portalsSubtitle: 'AI வழிகாட்டல், கைவினைப் பாதைகள் அல்லது கலை வடிவங்களைத் தேர்வுசெய்யுங்கள்.',
    spotlightBadge: 'சிறப்பு அம்சம்',
    spotlightTitle: 'கலாLens: உங்கள் ஓவியங்களுக்கான ஆழ்ந்த மதிப்பீடு',
    spotlightSubtitle: 'உங்கள் ஓவியங்களை பதிவேற்றி கோடுகள் மற்றும் வண்ணங்களின் மதிப்பீட்டைப் பெறுங்கள்.',
    spotlightBtn: 'கலாLens தொடங்குங்கள்',
    featuredTraditionsTitle: 'புகழ்பெற்ற இந்தியக் கலை வடிவங்கள்',
    featuredTraditionsSub: 'ஒவ்வொரு மாநிலமும் ஆயிரம் ஆண்டு கால தொன்மங்களையும் இயற்கை வண்ணங்களையும் கொண்டுள்ளது.',
    choosePlanHeading: 'உங்கள் திட்டம் மற்றும் பங்கைத் தேர்வுசெய்யவும்',
    choosePlanSub: 'கலை கற்பவர்கள் முதல் கைவினைஞர்கள் வரை அனைவருக்கும் கலாவேர்ஸ் துணையாக உள்ளது.',
    welcomeModalTitle: 'கலாவேர்ஸுக்கு நல்வரவு',
    welcomeModalSubtitle: 'இந்தியாவின் கலைப் பாரம்பரியத்தை உங்கள் தாய்மொழியில் கண்டு களியுங்கள்.',
    chooseLanguagePrompt: 'பயன்பாட்டு மொழியைத் தேர்ந்தெடுக்கவும்',
    previewCardTitle: 'இந்த மொழியில் முன்னோட்டம்',
    continueBtn: 'கலாவேர்ஸில் நுழையுங்கள்',
    changeAnytimeNotice: 'மேல் பட்டியில் இருந்து எந்த நேரத்திலும் மொழியை மாற்றலாம்.',

    sathiTitle: 'கலாசாதி: AI கலை வழிகாட்டி மற்றும் ஆசிரியர்',
    sathiSubtitle: 'புனித வடிவங்கள், இயற்கை வண்ணங்கள் மற்றும் நுணுக்கங்களைக் கற்றுக்கொள்ளுங்கள்.',
    sathiPromptPlaceholder: 'தஞ்சாவூர் தங்கம், கலங்காரி இயற்கை சாயம் பற்றி கேளுங்கள்...',
    sathiSendBtn: 'கேளுங்கள்',
    sathiQuickPromptsTitle: 'முக்கிய கலைக் கேள்விகள்',
    sathiSelectArtForm: 'கலை வடிவம்',
    sathiSelectState: 'மாநிலம்',

    lensTitle: 'கலாLens: AI கலைப்படைப்பு பகுப்பாய்வு',
    lensSubtitle: 'ஓவியங்களின் கோடுகள், வண்ணங்கள் மற்றும் பாரம்பரிய சின்னங்களை ஆய்வு செய்யுங்கள்.',
    lensUploadTitle: 'உங்கள் ஓவியத்தை பதிவேற்றவும்',
    lensUploadSubtitle: 'படத்தை இங்கே இழுத்துப் போடவும் அல்லது தேர்ந்தெடுக்கவும்',
    lensAnalyzeBtn: 'ஸ்கேன் செய்து பகுப்பாய்வு செய்யவும்',
    lensSelectSample: 'புகழ்பெற்ற படைப்பை ஆராயுங்கள்:',
    lensAuthenticityScore: 'பாரம்பரிய துல்லிய மதிப்பீடு',
    lensLinework: 'தூரிகை மற்றும் கோடு துல்லியம்',
    lensPigments: 'இயற்கை வண்ண சமநிலை',
    lensMotifs: 'புனித சின்னங்கள் அடையாளம்',
    lensAskQuestionPlaceholder: 'உங்கள் ஓவியம் பற்றி கேள்வி கேளுங்கள்...',
    lensAskBtn: 'AI யிடம் கேளுங்கள்',
    lensExportReport: 'அறிக்கையை பதிவிறக்கவும்',

    mapTitle: 'பாரம்பரிய கலை வரைபடம்',
    mapSubtitle: '28 மாநிலங்களின் GI கலைகள் மற்றும் கைவினைஞர்கள்.',
    mapSearchPlaceholder: 'மாநிலம் அல்லது கலையைத் தேடுங்கள்...',
    mapFilterAll: 'அனைத்து பகுதிகள்',
    mapFilterNorth: 'வட இந்தியா',
    mapFilterSouth: 'தென் இந்தியா',
    mapFilterEast: 'கிழக்கு இந்தியா',
    mapFilterWest: 'மேற்கு இந்தியா',
    mapFilterCentral: 'மத்திய இந்தியா',
    mapFilterNE: 'வடகிழக்கு',
    mapViewDetailsBtn: 'விவரங்களைப் பார்க்க',
    mapArtisanLineage: 'மாஸ்டர் கைவினைஞர் வம்சம்',
    mapNaturalPigments: 'இயற்கை வண்ணங்கள்',
    mapGITagged: 'GI சான்றளிக்கப்பட்ட கலை',

    tourTitle: 'கலாடூர்: 1-நாள் கலைச் சுற்றுலா',
    tourSubtitle: 'கைவினைப் பட்டறைகள் மற்றும் பாரம்பரியக் கிராமங்களை இணைக்கும் 1-நாள் பயணத் திட்டம்.',
    tourGenerateBtn: '1-நாள் பயணத் திட்டத்தை உருவாக்கவும்',
    tourDuration1Day: '1-நாள் கலைப் பயணம்',
    tourPaceLabel: 'பயண வேகம்',
    tourInterestsLabel: 'கலை ஆர்வங்கள்',
    tourBudgetEst: 'மதிப்பிடப்பட்ட பட்ஜெட்',
    tourTimelineTitle: 'சிறப்பு 1-நாள் பயணம்',
    tourDownloadTrail: 'பயணத் திட்டத்தை சேமிக்கவும்',

    commTitle: 'கலைஞர் சமூகம்',
    commSubtitle: 'பாரம்பரியக் கலைஞர்கள் தங்கள் படைப்புகளைப் பகிரும் களம்.',
    commShareBtn: 'உங்கள் கலையைப் பகிருங்கள்',
    commFilterAll: 'அனைத்து கலைகள்',
    commAppreciations: 'பாராட்டுக்கள்',
    commFollowBtn: 'பின்தொடர்',
    commFollowingBtn: 'பின்தொடர்கிறீர்கள்',
    commEmptyTitle: 'பதிவுகள் எதுவும் இல்லை',
    commEmptySub: 'முதல் கலைப் பதிவை நீங்கள் பகிருங்கள்.',

    wsTitle: 'நேரலை பயிலரங்குகள்',
    wsSubtitle: 'தேசிய விருது பெற்றவர்களிடம் இருந்து நேரடியாகக் கற்றுக்கொள்ளுங்கள்.',
    wsHostBtn: 'பயிலரங்கை நடத்துங்கள்',
    wsBookSeatBtn: 'இடத்தை முன்பதிவு செய்யவும்',
    wsBookedBadge: 'முன்பதிவு முடிந்தது',
    wsSeatsLeft: 'மீதமுள்ள இடங்கள்',
    wsPayoutNotice: '85% வருவாய் நேரடியாகக் கலைஞருக்குச் செல்கிறது.',
    wsEmptyTitle: 'பயிலரங்குகள் எதுவும் இல்லை',
    wsEmptySub: 'கைவினைஞர்கள் தங்கள் பயிலரங்குகளை இங்கே பதிவு செய்யலாம்.',

    mktTitle: 'பாரம்பரியக் கலைச் சந்தை',
    mktSubtitle: 'நேரடியாக கைவினைஞர்களிடம் இருந்து அசல் கலைப்படைப்புகளை வாங்குங்கள்.',
    mktListBtn: 'கலையை பட்டியலிடுங்கள்',
    mktAddToCartBtn: 'கூடையில் சேர்க்க',
    mktCartTitle: 'கைவினைஞர் கூடை',
    mktCheckoutBtn: 'பணம் செலுத்த தொடரவும்',
    mktDirectPayout: '85% நேரடி கலைஞர் வருவாய்',
    mktEmptyTitle: 'தயாரிப்புகள் எதுவும் இல்லை',
    mktEmptySub: 'கைவினைஞர்கள் தங்கள் படைப்புகளை இங்கே பட்டியலிடலாம்.',

    profTitle: 'சுயவிவரம் மற்றும் சான்றுகள்',
    profSubtitle: 'சான்றிதழ்கள் மற்றும் கணக்கு அமைப்புகளை நிர்வகிக்கவும்.',
    profRoleLabel: 'கலாச்சார பங்கு',
    profPlanLabel: 'செயலில் உள்ள திட்டம்',
    profChangeLangBtn: 'மொழியை மாற்றவும்',
    profChangePlanBtn: 'திட்டத்தை மாற்றவும்',
    profResetBtn: 'தரவை மீட்டமைக்க',
    profPledgeTitle: 'பாரம்பரியக் கலை உறுதிமொழி'
  },

  te: {
    ...TRANSLATIONS_EN,
    appName: 'కలావర్స్',
    tagline: 'భారతీయ సాంప్రదాయ కళలు',
    home: 'హోమ్',
    kalakaarHub: 'కళాకారుల హబ్',
    kalalens: 'కళాLens (AI విజన్)',
    kalasathi: 'కళాసాథి (AI గురువు)',
    workshops: 'లైవ్ వర్క్‌షాప్‌లు',
    marketplace: 'కళాకారుల మార్కెట్',
    community: 'కమ్యూనిటీ',
    atlasMap: 'రాష్ట్ర ఎక్స్‌ప్లోరర్',
    craftTrails: 'కళాటూర్ (కళా యాత్రలు)',
    profile: 'ప్రొఫైల్',
    changeLanguage: 'భాష',
    currentPlan: 'ప్లాన్',
    heroBadge: 'భారతదేశ జీవన వారసత్వ వేదిక',
    heroVerifiedBadge: 'GI ధృవీకరించబడిన కళాకారులు',
    heroTitle: 'భారతదేశ అద్భుత సాంప్రదాయ కళలను కనుగొనండి & నేర్చుకోండి',
    heroSubtitle: 'కళాLens AI తో మీ పెయింటింగ్స్‌ను విశ్లేషించండి, 28 రాష్ట్రాల కళలను అన్వేషించండి.',
    tryKalaLensBtn: 'కళాLens AI ప్రయత్నించండి',
    exploreMapBtn: 'రాష్ట్ర ఎక్స్‌ప్లోరర్ తెరవండి',
    askKalaSathiBtn: 'కళాసాథిని అడగండి',
    metricsStates: '28 రాష్ట్రాలు & 8 కేంద్రపాలిత ప్రాంతాలు',
    metricsTraditions: '35+ సాంప్రదాయ కళలు',
    metricsLanguages: '11 భాషలు',
    metricsPayout: '85% ప్రత్యక్ష కళాకారుల చెల్లింపు',
    portalsHeading: 'కలావర్స్ అనుభవ కేంద్రాలు',
    portalsSubtitle: 'కళా విశ్లేషణ, చేతివృత్తుల యాత్రలు లేదా సాంప్రదాయ కళలను అన్వేషించండి.',
    spotlightBadge: 'ఫీచర్ స్పాట్‌లైట్',
    spotlightTitle: 'కళాLens: పెయింటింగ్స్‌పై లోతైన విశ్లేషణ',
    spotlightSubtitle: 'మీ పెయింటింగ్ అప్‌లోడ్ చేసి కలర్ గైడెన్స్ పొందండి.',
    spotlightBtn: 'కళాLens ప్రారంభించండి',
    featuredTraditionsTitle: 'భారతీయ ప్రసిద్ధ కళారూపాలు',
    featuredTraditionsSub: 'ప్రతి రాష్ట్రం వేల ఏళ్ల పౌరాణిక కథలు మరియు సహజ రంగుల వారసత్వాన్ని కలిగి ఉంది.',
    choosePlanHeading: 'మీ కలావర్స్ ప్లాన్ ఎంచుకోండి',
    choosePlanSub: 'కళాభిమానుల నుండి మాస్టర్ కళాకారుల వరకు కలావర్స్ తోడుగా ఉంటుంది.',
    welcomeModalTitle: 'కలావర్స్‌కు స్వాగతం',
    welcomeModalSubtitle: 'భారతదేశ జీవన వారసత్వాన్ని మీ స్వంత భాషలో అనుభవించండి.',
    chooseLanguagePrompt: 'యాప్ భాషను ఎంచుకోండి',
    previewCardTitle: 'ఈ భాషలో చూడండి',
    continueBtn: 'కలావర్స్‌లో ప్రవేశించండి',
    changeAnytimeNotice: 'మీరు ఎప్పుడైనా భాషను మార్చుకోవచ్చు.',

    sathiTitle: 'కళాసాథి: AI సాంస్కృతిక గురువు',
    sathiSubtitle: 'పౌరాణిక జ్ఞానం, సహజ రంగులు మరియు సాంప్రదాయ మెళకువలను తెలుసుకోండి.',
    sathiPromptPlaceholder: 'కలంకారీ సహజ రంగులు, మధుబని డిజైన్లు గురించి అడగండి...',
    sathiSendBtn: 'గురువును అడగండి',
    sathiQuickPromptsTitle: 'ప్రశ్నల సూచనలు',
    sathiSelectArtForm: 'కళారూపం',
    sathiSelectState: 'రాష్ట్రం',

    lensTitle: 'కళాLens: AI ఆర్ట్‌వర్క్ విశ్లేషణ',
    lensSubtitle: 'మీ పెయింటింగ్ గీతలు, సహజ రంగులు మరియు సాంప్రదాయ చిహ్నాలను విశ్లేషించండి.',
    lensUploadTitle: 'మీ పెయింటింగ్ అప్‌లోడ్ చేయండి',
    lensUploadSubtitle: 'చిత్రాన్ని ఇక్కడ డ్రాగ్ చేయండి లేదా ఎంచుకోండి',
    lensAnalyzeBtn: 'స్కాన్ చేసి విశ్లేషించండి',
    lensSelectSample: 'ప్రముఖ కళాఖండాన్ని ఎంచుకోండి:',
    lensAuthenticityScore: 'సాంప్రదాయ ఖచ్చితత్వ స్కోరు',
    lensLinework: 'గీతల ఖచ్చితత్వం',
    lensPigments: 'రంగుల సమతుల్యత',
    lensMotifs: 'సాంప్రదాయ చిహ్నాల గుర్తింపు',
    lensAskQuestionPlaceholder: 'మీ పెయింటింగ్ గురించి ప్రశ్నలు అడగండి...',
    lensAskBtn: 'AI ని అడగండి',
    lensExportReport: 'రిపోర్ట్ డౌన్‌లోడ్ చేయండి',

    mapTitle: 'సాంస్కృతిక వారసత్వ అట్లాస్',
    mapSubtitle: '28 రాష్ట్రాల GI కళలు మరియు సహజ రంగుల సమాచారం.',
    mapSearchPlaceholder: 'రాష్ట్రం లేదా కళను వెతకండి...',
    mapFilterAll: 'అన్ని ప్రాంతాలు',
    mapFilterNorth: 'ఉత్తర భారతదేశం',
    mapFilterSouth: 'దక్షిణ భారతదేశం',
    mapFilterEast: 'తూర్పు భారతదేశం',
    mapFilterWest: 'పశ్చిమ భారతదేశం',
    mapFilterCentral: 'మధ్య భారతదేశం',
    mapFilterNE: 'ఈశాన్య ప్రాంతం',
    mapViewDetailsBtn: 'వివరాలు చూడండి',
    mapArtisanLineage: 'మాస్టర్ కళాకారుల వంశం',
    mapNaturalPigments: 'సహజ ఖనిజ రంగులు',
    mapGITagged: 'GI గుర్తింపు పొందిన కళ',

    tourTitle: 'కళాటూర్: 1-రోజు కళా యాత్ర',
    tourSubtitle: 'కళాకారుల స్టూడియోలు మరియు గ్రామాలతో 1-రోజు యాత్రా ప్రణాళిక.',
    tourGenerateBtn: '1-రోజు ప్రయాణ ప్లాన్ రూపొందించండి',
    tourDuration1Day: '1-రోజు కళా యాత్ర',
    tourPaceLabel: 'ప్రయాణ వేగం',
    tourInterestsLabel: 'కళా ఆసక్తులు',
    tourBudgetEst: 'అంచనా బడ్జెట్',
    tourTimelineTitle: '1-రోజు యాత్రా మార్గం',
    tourDownloadTrail: 'ప్లాన్ డౌన్‌లోడ్ చేయండి',

    commTitle: 'కళాకారుల సంఘం',
    commSubtitle: 'కళాకారులు తమ కళను పంచుకునే వేదిక.',
    commShareBtn: 'మీ కళను పంచుకోండి',
    commFilterAll: 'అన్ని కళలు',
    commAppreciations: 'ప్రశంసలు',
    commFollowBtn: 'ఫాలో చేయండి',
    commFollowingBtn: 'ఫాలోయింగ్',
    commEmptyTitle: 'ఇంకా ఎలాంటి పోస్ట్‌లు లేవు',
    commEmptySub: 'మొదటి కళాకారుడిగా మీ చిత్రాన్ని పంచుకోండి.',

    wsTitle: 'లైవ్ వర్క్‌షాప్‌లు',
    wsSubtitle: 'అవార్డు గ్రహీతల వద్ద నేరుగా నేర్చుకోండి.',
    wsHostBtn: 'వర్క్‌షాప్ నిర్వహించండి',
    wsBookSeatBtn: 'సీటు బుక్ చేయండి',
    wsBookedBadge: 'బుకింగ్ పూర్తయింది',
    wsSeatsLeft: 'మిగిలిన సీట్లు',
    wsPayoutNotice: '85% చెల్లింపు నేరుగా కళాకారుడికే చేరుతుంది.',
    wsEmptyTitle: 'వర్క్‌షాప్‌లు అందుబాటులో లేవు',
    wsEmptySub: 'కళాకారులు తమ వర్క్‌షాప్‌లను ఇక్కడ చేర్చవచ్చు.',

    mktTitle: 'చేతివృత్తుల బజార్',
    mktSubtitle: 'కళాకారుల నుండి నేరుగా కళాఖండాలను కొనుగోలు చేయండి.',
    mktListBtn: 'కళను లిస్ట్ చేయండి',
    mktAddToCartBtn: 'కార్ట్‌కు జోడించండి',
    mktCartTitle: 'కళాకారుల కార్ట్',
    mktCheckoutBtn: 'చెల్లింపుకు కొనసాగండి',
    mktDirectPayout: '85% ప్రత్యక్ష కళాకారుల చెల్లింపు',
    mktEmptyTitle: 'వస్తువులు ఏవీ లేవు',
    mktEmptySub: 'కళాకారులు తమ సృష్టిని ఇక్కడ చేర్చవచ్చు.',

    profTitle: 'ప్రొఫైల్ & సర్టిఫికేట్లు',
    profSubtitle: 'మీ ఖాతా వివరాలు మరియు ప్రాధాన్యతలను నిర్వహించండి.',
    profRoleLabel: 'సాంస్కృతిక పాత్ర',
    profPlanLabel: 'సభ్యత్వ ప్లాన్',
    profChangeLangBtn: 'భాషను మార్చండి',
    profChangePlanBtn: 'ప్లాన్ మార్చండి',
    profResetBtn: 'డేటా రీసెట్ చేయండి',
    profPledgeTitle: 'సాంస్కృతిక వారసత్వ ప్రతిజ్ఞ'
  },

  // Fallback for remaining languages using structured mappings
  bn: {
    ...TRANSLATIONS_FALLBACK('bn', 'কলাভার্স', 'ভারতের চিরন্তন লোকশিল্প ও ঐতিহ্য', 'বাংলা'),
    appName: 'কলাভার্স',
    tagline: 'ভারতের চিরন্তন লোকশিল্প ও ঐতিহ্য',
    home: 'হোম',
    kalakaarHub: 'শিল্পী হাব',
    kalalens: 'কলাLens (এআই ভিশন)',
    kalasathi: 'কলাসাথী (এআই গুরু)',
    workshops: 'লাইভ ওয়ার্কশপ',
    marketplace: 'শিল্পী বাজার',
    community: 'কলা সম্প্রদায়',
    atlasMap: 'রাজ্য এক্সপ্লোরার',
    craftTrails: 'কলাট্যুর (শিল্প পদযাত্রা)',
    profile: 'প্রোফাইল',
    changeLanguage: 'ভাষা',
    currentPlan: 'প্ল্যান',
    heroBadge: 'ভারতের জীবন্ত ঐতিহ্য মঞ্চ',
    heroVerifiedBadge: 'জিআই স্বীকৃত শিল্পী',
    heroTitle: 'ভারতের চিরায়ত লোকশিল্প ও ঐতিহ্যকে জানুন এবং সমৃদ্ধ করুন',
    heroSubtitle: 'কলাLens এআই দিয়ে আপনার চিত্রকর্ম বিশ্লেষণ করুন এবং ২৮টি রাজ্যের শিল্পকলা আবিষ্কার করুন।',
    tryKalaLensBtn: 'কলাLens এআই ব্যবহার করুন',
    exploreMapBtn: 'রাজ্য এক্সপ্লোরার খুলুন',
    askKalaSathiBtn: 'কলাসাথীকে জিজ্ঞাসা করুন',
    metricsStates: '২৮ রাজ্য ও ৮ কেন্দ্রশাসিত অঞ্চল',
    metricsTraditions: '৩৫+ জীবন্ত লোকশিল্প ধারা',
    metricsLanguages: '১১টি আঞ্চলিক ভাষা',
    metricsPayout: '৯০% সরাসরি শিল্পী পারিশ্রমিক',
    portalsHeading: 'কলাভার্স অভিজ্ঞতা কেন্দ্র',
    portalsSubtitle: 'এআই দৃষ্টি নির্দেশিকা, শিল্পী পদযাত্রা বা লোকশিল্পের গভীরে প্রবেশ করুন।',
    spotlightBadge: 'বিশেষ আকর্ষণ',
    spotlightTitle: 'কলাLens: চিত্রকর্মের গভীর বিশ্লেষণ',
    spotlightSubtitle: 'ছবি আপলোড করে রেখা, রং ও মোটিফের নির্ভুল বিশ্লেষণ নিন।',
    spotlightBtn: 'কলাLens শুরু করুন',
    featuredTraditionsTitle: 'ভারতের ঐতিহ্যবাহী শিল্পরূপ',
    featuredTraditionsSub: 'প্রতিটি রাজ্যে রয়েছে সহস্রাব্দের পৌরাণিক ঐতিহ্য।',
    choosePlanHeading: 'আপনার কলাভার্স প্ল্যান বেছে নিন',
    choosePlanSub: 'শিক্ষার্থী থেকে শুরু করে কারুশিল্পী সবার জন্য কলাভার্স নিবেদিত।',
    welcomeModalTitle: 'কলাভার্সে স্বাগতম',
    welcomeModalSubtitle: 'আপনার মাতৃভাষায় ভারতের সমৃদ্ধ লোকশিল্পের আনন্দ উপভোগ করুন।',
    chooseLanguagePrompt: 'অ্যাপের ভাষা বেছে নিন',
    previewCardTitle: 'এই ভাষায় দেখুন',
    continueBtn: 'কলাভার্সে প্রবেশ করুন',
    changeAnytimeNotice: 'আপনি যে কোনো সময় ভাষা পরিবর্তন করতে পারেন।'
  },

  mr: {
    ...TRANSLATIONS_FALLBACK('mr', 'कलाverse', 'भारताची समृद्ध लोककला व वारसा', 'मराठी'),
    appName: 'कलाverse',
    tagline: 'भारताची समृद्ध लोककला व वारसा',
    home: 'मुख्यपृष्ठ',
    kalakaarHub: 'कलाकार केंद्र',
    kalalens: 'कलाLens (AI दृष्टी)',
    kalasathi: 'कलासाथी (AI मार्गदर्शक)',
    workshops: 'थेट कार्यशाळा',
    marketplace: 'कलाकार बाजारपेठ',
    community: 'कला समुदाय',
    atlasMap: 'राज्य अन्वेषक',
    craftTrails: 'कलाटूर (कला यात्रा)',
    profile: 'माझे प्रोफाइल',
    changeLanguage: 'भाषा',
    currentPlan: 'योजना',
    heroBadge: 'भारताचे जिवंत वारसा व्यासपीठ',
    heroVerifiedBadge: 'GI प्रमाणित पारंपरिक कारागीर',
    heroTitle: 'भारताच्या शाश्वत लोककलांचे अन्वेषण करा व शिका',
    heroSubtitle: 'कलाLens AI द्वारे तुमच्या चित्रांचे विश्लेषण करा आणि २८ राज्यांतील कलांचा शोध घ्या.',
    tryKalaLensBtn: 'कलाLens AI वापरा',
    exploreMapBtn: 'राज्य अन्वेषक उघडा',
    askKalaSathiBtn: 'कलासाथीला विचारा',
    metricsStates: '२८ राज्ये आणि ८ केंद्रशासित प्रदेश',
    metricsTraditions: '३५+ पारंपरिक लोककला',
    metricsLanguages: '११ भारतीय भाषा',
    metricsPayout: '८५% थेट कारागीर परतावा',
    portalsHeading: 'कलाverse अनुभव केंद्रे',
    portalsSubtitle: 'एआय मार्गदर्शन, कला प्रवास किंवा राज्य हस्तकलेचा अनुभव घ्या.',
    spotlightBadge: 'वैशिष्ट्य आकर्षण',
    spotlightTitle: 'कलाLens: कलाकृतींवर सखोल विश्लेषण',
    spotlightSubtitle: 'चित्रे अपलोड करा आणि रेषा, रंग व पारंपरिक प्रतीकांची माहिती मिळवा.',
    spotlightBtn: 'कलाLens सुरू करा',
    featuredTraditionsTitle: 'भारतातील प्रसिद्ध कला परंपरा',
    featuredTraditionsSub: 'प्रत्येक राज्यात शतकानुशतके जपलेला पौराणिक वारसा आहे.',
    choosePlanHeading: 'तुमची योजना निवडा',
    choosePlanSub: 'कलाप्रेमींपासून ते निष्णात कारागिरांपर्यंत सर्वांसाठी कलाverse कटीबद्ध आहे.',
    welcomeModalTitle: 'कलाverse मध्ये आपले स्वागत आहे',
    welcomeModalSubtitle: 'भारताचा अमूल्य वारसा तुमच्या मातृभाषेत अनुभवा.',
    chooseLanguagePrompt: 'अ‍ॅपची भाषा निवडा',
    previewCardTitle: 'या भाषेत पूर्वावलोकन',
    continueBtn: 'कलाverse मध्ये प्रवेश करा',
    changeAnytimeNotice: 'तुम्ही वरच्या पट्टीवरून कधीही भाषा बदलू शकता।'
  },

  gu: {
    ...TRANSLATIONS_FALLBACK('gu', 'કલાવર્સ', 'ભારતની જીવંત લોકકલા અને સંસ્કૃતિ', 'ગુજરાતી'),
    appName: 'કલાવર્સ',
    tagline: 'ભારતની જીવંત લોકકલા અને સંસ્કૃતિ',
    home: 'હોમ',
    kalakaarHub: 'કલાકાર હબ',
    kalalens: 'કલાLens (AI વિઝન)',
    kalasathi: 'કલાસાથી (AI ગુરુ)',
    workshops: 'લાઇવ વર્કશોપ',
    marketplace: 'કારીગર બજાર',
    community: 'કલા સમુદાય',
    atlasMap: 'રાજ્ય એક્સપ્લોરર',
    craftTrails: 'કલાટૂર (કલા યાત્રા)',
    profile: 'પ્રોફાઇલ',
    changeLanguage: 'ભાષા',
    currentPlan: 'પ્લાન',
    heroBadge: 'ભારતનું જીવંત વારસો પ્લેટફોર્મ',
    heroVerifiedBadge: 'GI પ્રમાણિત કારીગરો',
    heroTitle: 'ભારતની અજોડ પરંપરાગત કલાઓને જાણો અને શીખો',
    heroSubtitle: 'કલાLens AI વડે તમારા પેઇન્ટિંગ્સનું વિશ્લેષણ કરો અને 28 રાજ્યોની કલાઓ જાણો.',
    tryKalaLensBtn: 'કલાLens AI અજમાવો',
    exploreMapBtn: 'રાજ્ય એક્સપ્લોરર ખોલો',
    askKalaSathiBtn: 'કલાસાથીને પૂછો',
    metricsStates: '28 રાજ્યો અને 8 કેન્દ્રશાસિત પ્રદેશો',
    metricsTraditions: '35+ જીવંત કલા પરંપરાઓ',
    metricsLanguages: '11 પ્રાદેશિક ભાષાઓ',
    metricsPayout: '85% સીધું કારીગર વળતર',
    portalsHeading: 'કલાવર્સ અનુભવ કેન્દ્રો',
    portalsSubtitle: 'AI વિઝન મેન્ટરશિપ, કલા યાત્રાઓ અથવા રાજ્ય કલાઓમાં સીધા પ્રવેશો.',
    spotlightBadge: 'વિશેષ આકર્ષણ',
    spotlightTitle: 'કલાLens: તમારા ચિત્રો પર ગહન વિશ્લેષણ',
    spotlightSubtitle: 'તમારું ચિત્ર અપલોડ કરો અને પરંપરાગત ભાતનું મૂલ્યાંકન મેળવો.',
    spotlightBtn: 'કલાLens શરૂ કરો',
    featuredTraditionsTitle: 'ભારતીય પ્રખ્યાત કલા શૈલીઓ',
    featuredTraditionsSub: 'દરેક રાજ્યમાં સદીઓ જૂની પૌરાણિક કથાઓ છે.',
    choosePlanHeading: 'તમારો પ્લાન અને ભૂમિકા પસંદ કરો',
    choosePlanSub: 'કલા પ્રેમીઓથી માંડીને માસ્ટર કારીગરો સુધી કલાવર્સ સાથે છે.',
    welcomeModalTitle: 'કલાવર્સમાં આપનું સ્વાગત છે',
    welcomeModalSubtitle: 'ભારતની સમૃદ્ધ કલા સંસ્કૃતિનો તમારી માતૃભાષામાં આનંદ માણો.',
    chooseLanguagePrompt: 'એપની ભાષા પસંદ કરો',
    previewCardTitle: 'આ ભાષામાં પૂર્વાવલોકન',
    continueBtn: 'કલાવર્સમાં પ્રવેશ કરો',
    changeAnytimeNotice: 'તમે કોઈપણ સમયે ઉપરના નેવિગેશન બારમાંથી ભાષા બદલી શકો છો.'
  },

  kn: {
    ...TRANSLATIONS_FALLBACK('kn', 'ಕಲಾವರ್ಸ್', 'ಭಾರತದ ಜೀವಂತ ಕಲೆಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿ', 'ಕನ್ನಡ'),
    appName: 'ಕಲಾವರ್ಸ್',
    tagline: 'ಭಾರತದ ಜೀವಂತ ಕಲೆಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿ',
    home: 'ಮುಖಪುಟ',
    kalakaarHub: 'ಕಲಾಕಾರ ಕೇಂದ್ರ',
    kalalens: 'ಕಲಾLens (AI ದೃಷ್ಟಿ)',
    kalasathi: 'ಕಲಾಸಾಥಿ (AI ಮಾರ್ಗದರ್ಶಕ)',
    workshops: 'ನೇರ ಕಾರ್ಯಾಗಾರಗಳು',
    marketplace: 'ಕುಶಲಕರ್ಮಿಗಳ ಮಾರುಕಟ್ಟೆ',
    community: 'ಕಲಾ ಸಮುದಾಯ',
    atlasMap: 'ರಾಜ್ಯ ಎಕ್ಸ್‌ಪ್ಲೋರರ್',
    craftTrails: 'ಕಲಾಟೂರ್ (ಕಲಾ ಪ್ರವಾಸ)',
    profile: 'ಪ್ರೊಫೈಲ್',
    changeLanguage: 'ಭಾಷೆ',
    currentPlan: 'ಯೋಜನೆ',
    heroBadge: 'ಭಾರತದ ಜೀವಂತ ಪರಂಪರೆಯ ವೇದಿಕೆ',
    heroVerifiedBadge: 'GI ಪ್ರಮಾಣೀಕೃತ ಕುಶಲಕರ್ಮಿಗಳು',
    heroTitle: 'ಭಾರತದ ಅನನ್ಯ ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಕಲಿಯಿರಿ',
    heroSubtitle: 'ಕಲಾLens AI ಮೂಲಕ ನಿಮ್ಮ ಚಿತ್ರಕಲೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಮತ್ತು ೨೮ ರಾಜ್ಯಗಳ ಕಲೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.',
    tryKalaLensBtn: 'ಕಲಾLens AI ಪ್ರಯತ್ನಿಸಿ',
    exploreMapBtn: 'ರಾಜ್ಯ ಎಕ್ಸ್‌ಪ್ಲೋರರ್ ತೆರೆಯಿರಿ',
    askKalaSathiBtn: 'ಕಲಾಸಾಥಿಯನ್ನು ಕೇಳಿ',
    metricsStates: '೨೮ ರಾಜ್ಯಗಳು ಮತ್ತು ೮ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು',
    metricsTraditions: '೩೫+ ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳು',
    metricsLanguages: '೧೧ ಭಾಷೆಗಳು',
    metricsPayout: '೯೦% ನೇರ ಕುಶಲಕರ್ಮಿ ಪಾವತಿ',
    portalsHeading: 'ಕಲಾವರ್ಸ್ ಅನುಭವ ಕೇಂದ್ರಗಳು',
    portalsSubtitle: 'ಕಲಾ ವಿಶ್ಲೇಷಣೆ, ಕುಶಲಕರ್ಮಿಗಳ ಪ್ರವಾಸ ಅಥವಾ ರಾಜ್ಯ ಕಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    spotlightBadge: 'ವಿಶೇಷ ಆಕರ್ಷಣೆ',
    spotlightTitle: 'ಕಲಾLens: ನಿಮ್ಮ ಚಿತ್ರಕಲೆಗಳ ಕುರಿತು ಆಳವಾದ ಪ್ರತಿಕ್ರಿಯೆ',
    spotlightSubtitle: 'ನಿಮ್ಮ ಚಿತ್ರಕಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ರೇಖೆಗಳ ಮೌಲ್ಯಮಾಪನ ಪಡೆಯಿರಿ.',
    spotlightBtn: 'ಕಲಾLens ಪ್ರಾರಂಭಿಸಿ',
    featuredTraditionsTitle: 'ಭಾರತದ ಪ್ರಮುಖ ಕಲಾ ಪರಂಪರೆಗಳು',
    featuredTraditionsSub: 'ಪ್ರತಿ ರಾಜ್ಯವೂ ಸಹಸ್ರಾರು ವರ್ಷಗಳ ಪೌರಾಣಿಕ ಕಥೆಗಳನ್ನು ಹೊಂದಿದೆ.',
    choosePlanHeading: 'ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಆರಿಸಿ',
    choosePlanSub: 'ಕಲಿಕಾರ್ಥಿಗಳಿಂದ ಹಿಡಿದು ಮಾಸ್ಟರ್ ಕುಶಲಕರ್ಮಿಗಳವರೆಗೆ ಕಲಾವರ್ಸ್ ನಿಮ್ಮೊಂದಿಗಿದೆ.',
    welcomeModalTitle: 'ಕಲಾವರ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ',
    welcomeModalSubtitle: 'ಭಾರತದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ನಿಮ್ಮ ನೆಚ್ಚಿನ ಭಾಷೆಯಲ್ಲಿ ಅನುಭವಿಸಿ.',
    chooseLanguagePrompt: 'ಅಪ್ಲಿಕೇಶನ್ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    previewCardTitle: 'ಈ ಭಾಷೆಯಲ್ಲಿ ನೋಟ',
    continueBtn: 'ಕಲಾವರ್ಸ್‌ಗೆ ಪ್ರವೇಶಿಸಿ',
    changeAnytimeNotice: 'ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಮೇಲಿನ ಪಟ್ಟಿಯಿಂದ ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದು.'
  },

  or: {
    ...TRANSLATIONS_FALLBACK('or', 'କଳାଭର୍ସ', 'ଭାରତର ଜୀବନ୍ତ ଲୋକକଳା ଓ ଐତିହ୍ୟ', 'ଓଡ଼ିଆ'),
    appName: 'କଳାଭର୍ସ',
    tagline: 'ଭାରତର ଜୀବନ୍ତ ଲୋକକଳା ଓ ଐତିହ୍ୟ',
    home: 'ମୂଳପୃଷ୍ଠା',
    kalakaarHub: 'କଳାକାର ହବ୍',
    kalalens: 'କଳାLens (AI ଦୃଷ୍ଟି)',
    kalasathi: 'କଳାସାଥୀ (AI ଗୁରୁ)',
    workshops: 'ଲାଇଭ୍ କର୍ମଶାଳା',
    marketplace: 'ଶିଳ୍ପୀ ବଜାର',
    community: 'କଳା ସମ୍ପ୍ରଦାୟ',
    atlasMap: 'ରାଜ୍ୟ ଏକ୍ସପ୍ଲୋରର୍',
    craftTrails: 'କଳାଟୁର୍ (ଶିଳ୍ପ ଯାତ୍ରା)',
    profile: 'ପ୍ରୋଫାଇଲ୍',
    changeLanguage: 'ଭାଷା',
    currentPlan: 'ଯୋଜନା',
    heroBadge: 'ଭାରତର ଜୀବନ୍ତ ଐତିହ୍ୟ ମଞ୍ଚ',
    heroVerifiedBadge: 'GI ସ୍ୱୀକୃତିପ୍ରାପ୍ତ ଶିଳ୍ପୀ',
    heroTitle: 'ଭାରତର ପାରମ୍ପରିକ କଳା ସମ୍ପଦକୁ ଜାଣନ୍ତୁ ଏବଂ ଶିଖନ୍ତୁ',
    heroSubtitle: 'କଳାLens AI ସାହାଯ୍ୟରେ ନିଜ ଚିତ୍ରକଳା ପରୀକ୍ଷା କରନ୍ତୁ ଏବଂ ୨୮ଟି ରାଜ୍ୟର କଳା ଆବିଷ୍କାର କରନ୍ତୁ।',
    tryKalaLensBtn: 'କଳାLens AI ବ୍ୟବହାର କରନ୍ତୁ',
    exploreMapBtn: 'ରାଜ୍ୟ ଏକ୍ସପ୍ଲୋରର୍ ଖୋଲନ୍ତୁ',
    askKalaSathiBtn: 'କଳାସାଥୀଙ୍କୁ ପଚାରନ୍ତୁ',
    metricsStates: '୨୮ ରାଜ୍ୟ ଓ ୮ କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ',
    metricsTraditions: '୩୫+ ଜୀବନ୍ତ କଳା ପରମ୍ପରା',
    metricsLanguages: '୧୧ଟି ଆଞ୍ଚଳିକ ଭାଷା',
    metricsPayout: '୯୦% ସିଧାସଳଖ ଶିଳ୍ପୀ ପ୍ରାପ୍ୟ',
    portalsHeading: 'କଳାଭର୍ସ ଅନୁଭୂତି କେନ୍ଦ୍ର',
    portalsSubtitle: 'AI ମାର୍ଗଦର୍ଶନ, ଶିଳ୍ପ ଯାତ୍ରା କିମ୍ବା ରାଜ୍ୟ କଳାର ଅନୁଭୂତି ନିଅନ୍ତୁ।',
    spotlightBadge: 'ବିଶେଷ ଆକର୍ଷଣ',
    spotlightTitle: 'କଳାLens: ଚିତ୍ରକଳାର ଗଭୀର ମୂଲ୍ୟାୟନ',
    spotlightSubtitle: 'ଚିତ୍ର ଅପଲୋଡ୍ କରନ୍ତୁ ଏବଂ ପାରମ୍ପରିକ ରୂପକଳ୍ପର ପରାମର୍ଶ ପାଆନ୍ତୁ।',
    spotlightBtn: 'କଳାLens ଆରମ୍ଭ କରନ୍ତୁ',
    featuredTraditionsTitle: 'ଭାରତର ପ୍ରସିଦ୍ଧ କଳା ପରମ୍ପରା',
    featuredTraditionsSub: 'ପ୍ରତି ରାଜ୍ୟରେ ଶହ ଶହ ବର୍ଷର ପୌରାଣିକ କଥା ରହିଛି।',
    choosePlanHeading: 'ଆପଣଙ୍କ ଯୋଜନା ବାଛନ୍ତୁ',
    choosePlanSub: 'କଳା ପ୍ରେମୀଙ୍କ ଠାରୁ ଆରମ୍ଭ କରି ମାଷ୍ଟର ଶିଳ୍ପୀଙ୍କ ପର୍ଯ୍ୟନ୍ତ କଳାଭର୍ସ ସହିତ।',
    welcomeModalTitle: 'କଳାଭର୍ସକୁ ସ୍ୱାଗତମ୍',
    welcomeModalSubtitle: 'ଭାରତର ସାଂସ୍କୃତିକ ଐତିହ୍ୟକୁ ନିଜ ଭାଷାରେ ଉପଭୋଗ କରନ୍ତୁ।',
    chooseLanguagePrompt: 'ଆପ୍ ଭାଷା ବାଛନ୍ତୁ',
    previewCardTitle: 'ଏହି ଭାଷାରେ ଦେଖନ୍ତୁ',
    continueBtn: 'କଳାଭର୍ସରେ ପ୍ରବେଶ କରନ୍ତୁ',
    changeAnytimeNotice: 'ଆପଣ ଯେକୌଣସି ସମୟରେ ଉପର ପଟିରୁ ଭାଷା ବଦଳାଇ ପାରିବେ।'
  },

  ml: {
    ...TRANSLATIONS_FALLBACK('ml', 'കലാവേഴ്സ്', 'ഭാരതത്തിൻ്റെ പാരമ്പര്യ കലകൾ', 'മലയാളം'),
    appName: 'കലാവേഴ്സ്',
    tagline: 'ഭാരതത്തിൻ്റെ പാരമ്പര്യ കലകൾ',
    home: 'ഹോം',
    kalakaarHub: 'കലാകാര കേന്ദ്രം',
    kalalens: 'കലാLens (AI കാഴ്ച)',
    kalasathi: 'കലാസാഥി (AI ഗുരു)',
    workshops: 'തത്സമയ ശില്പശാലകൾ',
    marketplace: 'കരകൗശല ചന്ത',
    community: 'കലാ സമൂഹം',
    atlasMap: 'സംസ്ഥാന എക്സ്പ്ലോറർ',
    craftTrails: 'കലാടൂർ (കലാ യാത്രകൾ)',
    profile: 'പ്രൊഫൈൽ',
    changeLanguage: 'ഭാഷ',
    currentPlan: 'പ്ലാൻ',
    heroBadge: 'ഭാരതത്തിൻ്റെ പൈതൃക വേദി',
    heroVerifiedBadge: 'GI അംഗീകൃത കലാകാരന്മാർ',
    heroTitle: 'ഭാരതത്തിൻ്റെ പാരമ്പര്യ കലകളെ അറിയുക, പഠിക്കുക',
    heroSubtitle: 'കലാLens AI വഴി നിങ്ങളുടെ ചിത്രങ്ങൾ വിലയിരുത്തുക, 28 സംസ്ഥാനങ്ങളിലെ കലകൾ ആസ്വദിക്കുക.',
    tryKalaLensBtn: 'കലാLens AI പരീക്ഷിക്കുക',
    exploreMapBtn: 'സംസ്ഥാന എക്സ്പ്ലോറർ തുറക്കുക',
    askKalaSathiBtn: 'കലാസാഥിയോട് ചോദിക്കുക',
    metricsStates: '28 സംസ്ഥാനങ്ങൾ & 8 കേന്ദ്രഭരണ പ്രദേശങ്ങൾ',
    metricsTraditions: '35+ പാരമ്പര്യ കലാരൂപങ്ങൾ',
    metricsLanguages: '11 ഭാഷകൾ',
    metricsPayout: '85% നേരിട്ടുള്ള കലാകാര വരുമാനം',
    portalsHeading: 'കലാവേഴ്സ് കേന്ദ്രങ്ങൾ',
    portalsSubtitle: 'AI മാർഗ്ഗനിർദ്ദേശം, കരകൗശല യാത്രകൾ എന്നിവ കണ്ടെത്തുക.',
    spotlightBadge: 'പ്രത്യേക സവിശേഷത',
    spotlightTitle: 'കലാLens: ചിത്രങ്ങൾക്ക് ആഴത്തിലുള്ള അവലോകനം',
    spotlightSubtitle: 'ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്ത് വരകളുടെ കൃത്യത മനസ്സിലാക്കുക.',
    spotlightBtn: 'കലാLens ആരംഭിക്കുക',
    featuredTraditionsTitle: 'ഭാരതീയ കലാ പാരമ്പര്യങ്ങൾ',
    featuredTraditionsSub: 'ഓരോ സംസ്ഥാനത്തിനും നൂറ്റാണ്ടുകളുടെ ഇതിഹാസ കഥകളുണ്ട്.',
    choosePlanHeading: 'നിങ്ങളുടെ പ്ലാൻ തിരഞ്ഞെടുക്കുക',
    choosePlanSub: 'കലാ പ്രേമികൾ മുതൽ കരകൗശല വിദഗ്ദ്ധർ വരെ എല്ലാവർക്കും കലാവേഴ്സ് കൂട്ടാണ്.',
    welcomeModalTitle: 'കലാവേഴ്സിലേക്ക് സ്വാഗതം',
    welcomeModalSubtitle: 'ഭാരതത്തിൻ്റെ സമ്പന്നമായ പൈതൃകം നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ അനുഭവിക്കുക.',
    chooseLanguagePrompt: 'ആപ്പ് ഭാഷ തിരഞ്ഞെടുക്കുക',
    previewCardTitle: 'ഈ ഭാഷയിൽ കാണുക',
    continueBtn: 'കലാവേഴ്സിൽ പ്രവേശിക്കുക',
    changeAnytimeNotice: 'മുകളിലെ മെനുവിൽ നിന്ന് ഏത് സമയത്തും ഭാഷ മാറ്റാം.'
  },

  pa: {
    ...TRANSLATIONS_FALLBACK('pa', 'ਕਲਾਵਰਸ', 'ਭਾਰਤ ਦੀ ਜੀਵੰਤ ਲੋਕ ਕਲਾ ਤੇ ਵਿਰਾਸਤ', 'ਪੰਜਾਬੀ'),
    appName: 'ਕਲਾਵਰਸ',
    tagline: 'ਭਾਰਤ ਦੀ ਜੀਵੰਤ ਲੋਕ ਕਲਾ ਤੇ ਵਿਰਾਸਤ',
    home: 'ਮੁੱਖ ਪੰਨਾ',
    kalakaarHub: 'ਕਲਾਕਾਰ ਹੱਬ',
    kalalens: 'ਕਲਾLens (AI ਵਿਜ਼ਨ)',
    kalasathi: 'ਕਲਾਸਾਥੀ (AI ਗੁਰੂ)',
    workshops: 'ਲਾਈਵ ਵਰਕਸ਼ਾਪਾਂ',
    marketplace: 'ਦਸਤਕਾਰ ਬਜ਼ਾਰ',
    community: 'ਕਲਾ ਭਾਈਚਾਰਾ',
    atlasMap: 'ਰਾਜ ਐਕਸਪਲੋਰਰ',
    craftTrails: 'ਕਲਾਟੂਰ (ਕਲਾ ਯਾਤਰਾ)',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    changeLanguage: 'ਭਾਸ਼ਾ',
    currentPlan: 'ਪਲਾਨ',
    heroBadge: 'ਭਾਰਤ ਦਾ ਵਿਰਾਸਤੀ ਮੰਚ',
    heroVerifiedBadge: 'GI ਪ੍ਰਮਾਣਿਤ ਦਸਤਕਾਰ',
    heroTitle: 'ਭਾਰਤ ਦੀ ਅਮੀਰ ਲੋਕ ਕਲਾ ਤੇ ਵਿਰਾਸਤ ਨੂੰ ਜਾਣੋ ਤੇ ਸਿੱਖੋ',
    heroSubtitle: 'ਕਲਾLens AI ਰਾਹੀਂ ਆਪਣੀਆਂ ਪੇਂਟਿੰਗਾਂ ਦੀ ਪਰਖ ਕਰੋ ਅਤੇ 28 ਰਾਜਾਂ ਦੀਆਂ ਕਲਾਵਾਂ ਨੂੰ ਜਾਣੋ।',
    tryKalaLensBtn: 'ਕਲਾLens AI ਅਜ਼ਮਾਓ',
    exploreMapBtn: 'ਰਾਜ ਐਕਸਪਲੋਰਰ ਖੋਲ੍ਹੋ',
    askKalaSathiBtn: 'ਕਲਾਸਾਥੀ ਨੂੰ ਪੁੱਛੋ',
    metricsStates: '28 ਰਾਜ ਅਤੇ 8 ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼',
    metricsTraditions: '35+ ਰਵਾਇਤੀ ਕਲਾ ਸ਼ੈਲੀਆਂ',
    metricsLanguages: '11 ਭਾਸ਼ਾਵਾਂ',
    metricsPayout: '85% ਸਿੱਧਾ ਦਸਤਕਾਰ ਭੁਗਤਾਨ',
    portalsHeading: 'ਕਲਾਵਰਸ ਅਨੁਭਵ ਕੇਂਦਰ',
    portalsSubtitle: 'AI ਮਾਰਗਦਰਸ਼ਨ, ਦਸਤਕਾਰੀ ਯਾਤਰਾਵਾਂ ਜਾਂ ਰਵਾਇਤੀ ਕਲਾਵਾਂ ਦਾ ਆਨੰਦ ਲਵੋ।',
    spotlightBadge: 'ਵਿਸ਼ੇਸ਼ ਆਕਰਸ਼ਣ',
    spotlightTitle: 'ਕਲਾLens: ਤੁਹਾਡੀਆਂ ਪੇਂਟਿੰਗਾਂ ਦਾ ਡੂੰਘਾ ਵਿਸ਼ਲੇਸ਼ਣ',
    spotlightSubtitle: 'ਆਪਣੀ ਕਲਾ ਅਪਲੋਡ ਕਰੋ ਅਤੇ ਰੇਖਾਵਾਂ ਦੀ ਪਰਖ ਪ੍ਰਾਪਤ ਕਰੋ।',
    spotlightBtn: 'ਕਲਾLens ਸ਼ੁਰੂ ਕਰੋ',
    featuredTraditionsTitle: 'ਭਾਰਤ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਕਲਾ ਪਰੰਪਰਾਵਾਂ',
    featuredTraditionsSub: 'ਹਰੇਕ ਰਾਜ ਕੋਲ ਸਦੀਆਂ ਪੁਰਾਣੀਆਂ ਪੌਰਾਣਿਕ ਕਥਾਵਾਂ ਹਨ।',
    choosePlanHeading: 'ਆਪਣਾ ਪਲਾਨ ਚੁਣੋ',
    choosePlanSub: 'ਕਲਾ ਪ੍ਰੇਮੀਆਂ ਤੋਂ ਲੈ ਕੇ ਮਾਸਟਰ ਦਸਤਕਾਰਾਂ ਤੱਕ ਕਲਾਵਰਸ ਹਰ ਕਦਮ ਤੁਹਾਡੇ ਨਾਲ ਹੈ।',
    welcomeModalTitle: 'ਕਲਾਵਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
    welcomeModalSubtitle: 'ਭਾਰਤ ਦੀ ਅਮੀਰ ਸੱਭਿਆਚਾਰਕ ਵਿਰਾਸਤ ਨੂੰ ਆਪਣੀ ਮਾਂ-ਬੋਲੀ ਵਿੱਚ ਮਾਣੋ।',
    chooseLanguagePrompt: 'ਐਪ ਦੀ ਭਾਸ਼ਾ ਚੁਣੋ',
    previewCardTitle: 'ਇਸ ਭਾਸ਼ਾ ਵਿੱਚ ਦੇਖੋ',
    continueBtn: 'ਕਲਾਵਰਸ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰੋ',
    changeAnytimeNotice: 'ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਉੱਪਰਲੀ ਪੱਟੀ ਤੋਂ ਭਾਸ਼ਾ ਬਦਲ ਸਕਦੇ ਹੋ।'
  },
  as: {
    ...TRANSLATIONS_FALLBACK('as', 'কলাভাৰ্ছ', 'ভাৰতৰ জীৱন্ত লোক আৰু শাস্ত্ৰীয় কলা', 'অসমীয়া'),
    home: 'মুখ্য পৃষ্ঠা',
    kalakaarHub: 'শিল্পী কেন্দ্ৰ',
    kalalens: 'কলাLens (AI দৃষ্টি)',
    kalasathi: 'কলাসাথী (AI গুৰু)',
    workshops: 'লাইভ কৰ্মশালা',
    marketplace: 'শিল্পী বজাৰ',
    community: 'কলা সমাজ',
    atlasMap: 'ৰাজ্য মানচিত্ৰ',
    craftTrails: 'কলাTour (শিল্প যাত্ৰা)',
    profile: 'প্রফাইল',
    changeLanguage: 'ভাষা',
    currentPlan: 'পৰিকল্পনা',
    heroBadge: 'ভাৰতৰ জীৱন্ত ঐতিহ্য মঞ্চ',
    heroVerifiedBadge: 'GI স্বীকৃত হস্তশিল্পী',
    heroTitle: 'ভাৰতৰ কালজয়ী পৰম্পৰাগত কলাস সম্ভাৰ জানক, শিকক আৰু সংৰক্ষণ কৰক',
    heroSubtitle: 'ভাৰতৰ পৱিত্ৰ কলা ঐতিহ্যলৈ স্বাগতম। কলাLens AI ৰে আপোনাৰ চিত্ৰকলা পৰীক্ষা কৰক আৰু কলাসাথীৰ পৰামৰ্শ লওক।',
    tryKalaLensBtn: 'কলাLens AI ব্যৱহাৰ কৰক',
    exploreMapBtn: 'ৰাজ্য মানচিত্ৰ খোলক',
    askKalaSathiBtn: 'কলাসাথীক সোধক',
    welcomeModalTitle: 'কলাভাৰ্ছলৈ স্বাগতম',
    welcomeModalSubtitle: 'ভাৰতৰ গৌৰৱময় কলা ঐতিহ্য আপোনাৰ নিজৰ ভাষাত উপভোগ কৰক।',
    chooseLanguagePrompt: 'ভাষা বাছনি কৰক',
    continueBtn: 'কলাভাৰ্ছত প্ৰৱেশ কৰক'
  }
};

export function getTranslations(lang?: string | SupportedLanguage): TranslationDictionary {
  if (!lang || lang === 'en') return TRANSLATIONS_EN;
  const target = (TRANSLATIONS as any)[lang];
  if (!target) return TRANSLATIONS_EN;
  return { ...TRANSLATIONS_EN, ...target };
}

export function getSathiInitialMessage(lang?: string | SupportedLanguage): string {
  const dict = getTranslations(lang);
  if (dict.sathiInitialGreeting) {
    return dict.sathiInitialGreeting;
  }
  return TRANSLATIONS_EN.sathiInitialGreeting;
}

export interface SathiQuickPrompt {
  label: string;
  query: string;
  artForm: string;
  state: string;
}

export function getSathiQuickPrompts(lang?: string | SupportedLanguage): SathiQuickPrompt[] {
  const safeLang = (lang || 'en') as SupportedLanguage;
  switch (safeLang) {
    case 'hi':
      return [
        {
          label: '🎨 मूल मधुबनी पेंटिंग विचार',
          query: 'हस्तनिर्मित कागज पर मोर और नदी की लहरों वाली अनूठी मधुबनी पेंटिंग का विचार दें, चरण-दर-चरण निर्देश और पारंपरिक रंगों के साथ।',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🪶 श्रीकालहस्ती कलमकारी प्रक्रिया',
          query: 'श्रीकालहस्ती कलमकारी की 17-चरणीय प्राकृतिक रंगाई और नदी धुलाई प्रक्रिया समझाएं, और वीणा के साथ देवी सरस्वती के लिए रचना विचार दें।',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '🌿 वारली कल्पवृक्ष रहस्य',
          query: 'वारली आदिवासी कला में कल्पवृक्ष (जीवन का पेड़) का सांस्कृतिक और आध्यात्मिक महत्व क्या है? पारंपरिक त्रिकोणीय आकृतियों से इसे कैसे चित्रित करें?',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '✨ पिछवाई स्वर्ण पत्र तकनीक',
          query: 'समझाएं कि नाथद्वारा पिछवाई लघु चित्रों में 24K सोने का वर्क और लाजवर्त कैसे लगाया जाता है, और कदंब वृक्ष रचना सुझाएं।',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        }
      ];

    case 'ta':
      return [
        {
          label: '🎨 தஞ்சாவூர் ஓவியம் & தங்கத் தகடு நுட்பம்',
          query: 'தஞ்சாவூர் பாரம்பரிய ஓவியத்தில் 22K தங்கத் தகடு மற்றும் ஜெய்ப்பூர் கற்களைப் பதிக்கும் பாரம்பரிய முறையை விளக்குங்கள்.',
          artForm: 'Thanjavur (Tanjore) Art',
          state: 'Tamil Nadu'
        },
        {
          label: '🪶 ஸ்ரீகாளஹஸ்தி கலம்காரி செயல்முறை',
          query: 'ஸ்ரீகாளஹஸ்தி கலம்காரியின் 17-படிநிலை இயற்கை சாயமிடுதல் மற்றும் புனித மையக்கருத்துகளை விளக்குங்கள்.',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '🌿 மதுபனி மயில் மற்றும் தாமரை வரைதல்',
          query: 'கையால் செய்யப்பட்ட காகிதத்தில் பாரம்பரிய இரட்டை வரிசை மதுபனி ஓவியத்தை வரைவதற்கான வழிமுறைகளை அளியுங்கள்.',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '✨ வார்லி பழங்குடி கலைக் குறியீடுகள்',
          query: 'வார்லி நாட்டுப்புறக் கலையில் டார்பா நடனம் மற்றும் வாழ்க்கை வட்டத்தின் தத்துவப் பின்னணியை விளக்குங்கள்.',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        }
      ];

    case 'te':
      return [
        {
          label: '🪶 శ్రీకాళహస్తి కలంకారీ 17 దశలు',
          query: 'శ్రీకాళహస్తి కలంకారీలోని సహజ రంగుల ప్రక్రియ, సువర్ణముఖి నది వాషింగ్ మరియు సరస్వతి దేవి చిత్రకళా మార్గదర్శకత్వం తెలపండి.',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '🎨 చేర్యాల నక్షా స్క్రోల్ పెయింటింగ్',
          query: 'తెలంగాణ సాంప్రదాయ చేర్యాల స్క్రోల్ పెయింటింగ్‌లో సహజ వర్ణాలు మరియు కథారూప చిత్రాల ప్రాముఖ్యత ఏమిటి?',
          artForm: 'Cheriyal Scroll Painting',
          state: 'Telangana'
        },
        {
          label: '🌿 మధుబని జంట-గీతల కళా రహస్యం',
          query: 'చేతితో చేసిన కాగితంపై సాంప్రదాయ మధుబని తామర పువ్వుల రంగుల కలయికను ఎలా సాధించాలి?',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '✨ తంజావూరు బంగారు రేకు శైలి',
          query: 'తంజావూరు కళలో సున్నం గచ్చు పని మరియు 22K బంగారు రేకుల అలంకరణ వివరాలు వివరించండి.',
          artForm: 'Thanjavur (Tanjore) Art',
          state: 'Tamil Nadu'
        }
      ];

    case 'bn':
      return [
        {
          label: '🎨 পটচিত্র ও কালীঘাট পটশিল্প',
          query: 'কালীঘাট পটের ইতিহাস, স্বচ্ছন্দ তুলির টান এবং প্রাকৃতিক খনিজ রঙের ব্যবহার বিশদে ব্যাখ্যা করুন।',
          artForm: 'Kalighat Painting',
          state: 'West Bengal'
        },
        {
          label: '🪶 মধুবাণী পদ্ম ও মাছের মোটিফ',
          query: 'হাতে তৈরি কাগজে দ্বি-রেখা সীমানা এবং প্রাকৃতিক রঙের সমন্বয়ে সুন্দর মধুবাণী ছবি আঁকার উপায় কী?',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🌿 পিছুওয়াই ও কদম্ব পাতার বিন্যাস',
          query: 'নাথদ্বারা পিছুওয়াই শিল্পে প্রাকৃতিক নীল ও স্বর্ণভস্ম প্রয়োগের সনাতন পদ্ধতি বর্ণনা করুন।',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        },
        {
          label: '✨ ওয়ারলি লোকশিল্প ও জীবনচক্র',
          query: 'মহারাষ্ট্রের ওয়ারলি উপজাতীয় চিত্রে তারপা নৃত্য ও ত্রিকোণ মানবদেহের দার্শনিক ব্যাখ্যা দিন।',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        }
      ];

    case 'mr':
      return [
        {
          label: '🌿 वारली लोककला व तारपा नृत्य',
          query: 'वारली चित्रांमधील त्रिकोणात्मक मानवी आकृती, जीवनचक्र आणि तांदळाच्या पिठाची पारंपारिक पद्धत समजावून सांगा.',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '🎨 पैठणी व पारंपारिक म्युरल्स',
          query: 'महाराष्ट्राच्या पारंपारिक कलांमध्ये मोर आणि कमळाच्या प्रतीकांचा ऐतिहासिक संदर्भ काय आहे?',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '✨ पिछवाई सुवर्ण पत्र कला',
          query: 'राजस्थानच्या नाथद्वारा पिछवाई कलेत २४ कॅरेट सोन्याचा मुलामा आणि नैसर्गिक रंगांचा वापर कसा केला जातो?',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        },
        {
          label: '🪶 मधुबनी दुहेरी रेषा तंत्र',
          query: 'मधुबनी चित्रकलेतील कचनी रेखांकन आणि नैसर्गिक रंगांची निवड कशी करावी?',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        }
      ];

    case 'gu':
      return [
        {
          label: '🎨 પીછવાઈ અને કદંબ વૃક્ષ રચના',
          query: 'નાથદ્વારા પીછવાઈ ચિત્રકળામાં કુદરતી ખનિજ રંગો અને સોનાના વરખનો ઉપયોગ કેવી રીતે કરવો?',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        },
        {
          label: '🌿 પીઠોરા આદિવાસી ભીંતચિત્રો',
          query: 'ગુજરાતના રાઠવા સમુદાયની પીઠોરા કલામાં ઘોડા અને પવિત્ર આકૃતિઓનું મહત્વ સમજાવો.',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '✨ મધુબની બેવડી રેખા શૈલી',
          query: 'હાથબનાવટ કાગળ પર મધુબની કમળ અને મોરની સમપ્રમાણ રચના કરવા માટે માર્ગદર્શન આપો.',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🪶 વારલી પવિત્ર જીવનવૃક્ષ',
          query: 'વારલી લોકકળામાં સફેદ ચોખાની પેસ્ટ વડે ભૌમિતિક આકારો દોરવાની સાચી રીત કઈ છે?',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        }
      ];

    case 'kn':
      return [
        {
          label: '🎨 ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಗಸ್ಸೋ ಕಲೆ',
          query: 'ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ರಕಲೆಯಲ್ಲಿ ಗಸ್ಸೋ ಪೇಸ್ಟ್ ಮತ್ತು ಚಿನ್ನದ ರೇಕುಗಳ ಅಲಂಕಾರ ವಿಧಾನವನ್ನು ವಿವರಿಸಿ.',
          artForm: 'Mysore Traditional Art',
          state: 'Karnataka'
        },
        {
          label: '🪶 ಶ್ರೀಕಾಳಹಸ್ತಿ ಕಲಂಕಾರಿ ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳು',
          query: 'ಕಲಂಕಾರಿಯಲ್ಲಿ ಗಿಡಮೂಲಿಕೆಗಳ ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳ ಬಳಕೆ ಮತ್ತು ಪವಿತ್ರ ಪುರಾಣ ಕಥೆಗಳ ಚಿತ್ರಣದ ವಿವರ ನೀಡಿ.',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '🌿 ಮಧುಬನಿ ಕಲೆ & ಕಚ್ನಿ ರೇಖಾ ಶೈಲಿ',
          query: 'ಮಧುಬನಿ ಚಿತ್ರಕಲೆಯಲ್ಲಿ ಜೋಡಿ ರೇಖೆಗಳು ಮತ್ತು ನವಿಲು-ಕಮಲದ ಸಂಕೇತಗಳ ಮಹತ್ವ ತಿಳಿಸಿ.',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '✨ ವಾರ್ಲಿ ಬುಡಕಟ್ಟು ಕಲಾ ಪರಂಪರೆ',
          query: 'ವಾರ್ಲಿ ಕಲೆಯಲ್ಲಿ ತಾರ್ಪ ನೃತ್ಯ ಮತ್ತು ಜೀವನ ವೃಕ್ಷದ ಆಧ್ಯಾತ್ಮಿಕ ಹಿನ್ನೆಲೆಯನ್ನು ವಿವರಿಸಿ.',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        }
      ];

    case 'ml':
      return [
        {
          label: '🎨 കേരള ക്ഷേത്ര ചുവർച്ചിത്രങ്ങൾ',
          query: 'കേരളത്തിലെ പരമ്പരാഗത ചുവർച്ചിത്രങ്ങളിലെ പഞ്ചവർണ്ണ സിദ്ധാന്തവും പ്രകൃതിദത്ത ചായക്കൂട്ടുകളും വിശദീകരിക്കുക.',
          artForm: 'Kerala Temple Murals',
          state: 'Kerala'
        },
        {
          label: '🪶 തഞ്ചാവൂർ സ്വർണ്ണത്തകിട് ചിത്രകല',
          query: 'തഞ്ചാവൂർ പരമ്പരാഗത ചിത്രകലയിലെ കല്ലുപതിക്കലും 22K സ്വർണ്ണത്തകിട് പ്രയോഗവും വ്യക്തമാക്കുക.',
          artForm: 'Thanjavur (Tanjore) Art',
          state: 'Tamil Nadu'
        },
        {
          label: '🌿 മധുബനി ഇരട്ട വര സാങ്കേതികത',
          query: 'കൈകൊണ്ട് നിർമ്മിച്ച കടലാസിൽ മധുബനി താമരയും പവിത്ര പക്ഷികളും വരയ്ക്കാനുള്ള നിർദ്ദേശങ്ങൾ നൽകുക.',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '✨ വാർലി ഗോത്രകലാരീതി',
          query: 'വാർലി നാടോടി കലയിൽ ജീവവൃക്ഷവും മനുഷ്യ രൂപങ്ങളും അരിമാവ് കൊണ്ട് വരയ്ക്കുന്ന രീതി വിവരിക്കുക.',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        }
      ];

    case 'or':
      return [
        {
          label: '🎨 ରଘୁରାଜପୁର ପଟ୍ଟଚିତ୍ର କଳା',
          query: 'ଓଡ଼ିଶାର ରଘୁରାଜପୁର ପଟ୍ଟଚିତ୍ରରେ ଶଙ୍ଖ ଧଳା ରଙ୍ଗ ଓ ଦଶାବତାର ଚିତ୍ରଣର ପରମ୍ପରା ବର୍ଣ୍ଣନା କରନ୍ତୁ।',
          artForm: 'Pattachitra Painting',
          state: 'Odisha'
        },
        {
          label: '🪶 ମଧୁବନୀ ଦ୍ୱି-ରେଖା ନିୟମ',
          query: 'ମଧୁବନୀ ଚିତ୍ରକଳାରେ ମୟୂର ଓ କମଳ ପ୍ରତୀକଗୁଡ଼ିକର ଆଧ୍ୟାତ୍ମିକ ଅର୍ଥ କ’ଣ?',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🌿 ଶ୍ରୀକାଳହସ୍ତୀ କଲମକାରୀ ଶୈଳୀ',
          query: 'କଲମକାରୀରେ ବାଉଁଶ କଲମ ଏବଂ ପ୍ରାକୃତିକ ଉଦ୍ଭିଦ ରଙ୍ଗ ପ୍ରସ୍ତୁତି ବିଷୟରେ ବୁଝାନ୍ତୁ।',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '✨ ପିଛୱାଇ ସୁବର୍ଣ୍ଣ ପତ୍ର କଳା',
          query: 'ନାଥଦ୍ୱାରା ପିଛୱାଇରେ କଦମ୍ବ ଗଛ ଏବଂ ଶ୍ରୀନାଥଜୀଙ୍କ ଗାଈମାନଙ୍କ ଚିତ୍ରଣ କିପରି କରାଯାଏ?',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        }
      ];

    case 'pa':
      return [
        {
          label: '🎨 ਫੁਲਕਾਰੀ ਅਤੇ ਪੰਜਾਬੀ ਲੋਕ ਵਿਰਾਸਤ',
          query: 'ਫੁਲਕਾਰੀ ਕਢਾਈ ਵਿੱਚ ਰੇਸ਼ਮ ਦੇ ਧਾਗੇ, ਬਾਗ਼ ਪੈਟਰਨ ਅਤੇ ਰਵਾਇਤੀ ਜਿਓਮੈਟ੍ਰਿਕ ਮੋਟਿਫਾਂ ਦੀ ਵਿਰਾਸਤ ਸਮਝਾਓ।',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '🪶 ਮਧੂਬਨੀ ਦੋਹਰੀ ਰੇਖਾ ਕਲਾ',
          query: 'ਹੱਥ ਨਾਲ ਬਣੇ ਕਾਗਜ਼ ਉੱਤੇ ਮਧੂਬਨੀ ਮੋਰ ਅਤੇ ਕਮਲ ਬਣਾਉਣ ਦੇ ਰਵਾਇਤੀ ਨਿਯਮ ਕੀ ਹਨ?',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🌿 ਵਾਰਲੀ ਰਵਾਇਤੀ ਕਬਾਇਲੀ ਕਲਾ',
          query: 'ਵਾਰਲੀ ਲੋਕ ਕਲਾ ਵਿੱਚ ਤਾਰਪਾ ਨਾਚ ਅਤੇ ਕੁਦਰਤੀ ਜੀਵਨ ਚੱਕਰ ਦਾ ਦਾਰਸ਼ਨਿਕ ਅਰਥ ਕੀ ਹੈ?',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '✨ ਪਿਛਵਾਈ ਅਤੇ ਲਘੂ ਚਿੱਤਰਕਲਾ',
          query: 'ਰਾਜਸਥਾਨ ਦੀ ਪਿਛਵਾਈ ਚਿੱਤਰਕਾਰੀ ਵਿੱਚ ਕੁਦਰਤੀ ਖਣਿਜ ਰੰਗਾਂ ਅਤੇ ਸੋਨੇ ਦੇ ਵਰਕ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ?',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        }
      ];

    case 'as':
      return [
        {
          label: '🎨 মাজুলীৰ মুখাশিল্প আৰু সত্ৰীয়া কলা',
          query: 'অসমৰ মাজুলীৰ পৰম্পৰাগত মুখাশিল্প নিৰ্মাণ আৰু প্ৰাকৃতিক বোকা-বাঁহৰ ব্যৱহাৰ বিশদভাৱে ব্যাখ্যা কৰক।',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '🪶 মধুবনী চিত্ৰকলাৰ দ্বৈত ৰেখা শৈলী',
          query: 'মধুবনী চিত্ৰশিল্পত প্ৰাকৃতিক ৰং আৰু ময়ূৰ-পদ্মৰ প্ৰতীকৰ ধৰ্মীয় তাৎপৰ্য কি?',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🌿 শ্ৰীকলাহস্তী কলমকাৰী প্ৰক্ৰিয়া',
          query: 'কলমকাৰীত বাঁহৰ কলম আৰু প্ৰাকৃতিক বনৌষধি ৰঙৰ ব্যৱহাৰ কেনেদৰে কৰা হয়?',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '✨ পটচিত্ৰ আৰু পৌৰাণিক আখ্যান',
          query: 'পৰম্পৰাগত কাপোৰৰ পটচিত্ৰত প্ৰাকৃতিক ৰং প্ৰস্তুত কৰাৰ প্ৰাচীন পদ্ধতি কি?',
          artForm: 'Pattachitra Painting',
          state: 'Odisha'
        }
      ];

    default:
      return [
        {
          label: '🎨 Original Madhubani Painting Idea',
          query: 'Suggest an original Madhubani composition featuring peacocks and river waves on handmade paper, with step-by-step instructions and traditional pigments.',
          artForm: 'Madhubani Painting',
          state: 'Bihar'
        },
        {
          label: '🪶 Srikalahasti Kalamkari Process',
          query: 'Explain the 17-stage natural mordanting and river-washing process in Srikalahasti Kalamkari, and suggest a composition for Goddess Saraswati with Veena.',
          artForm: 'Srikalahasti Kalamkari',
          state: 'Andhra Pradesh'
        },
        {
          label: '🌿 Warli Tree of Life Secrets',
          query: 'What is the cultural and spiritual significance of the Kalpavriksha (Tree of Life) in Warli tribal art? How do I paint it using triangular figures?',
          artForm: 'Warli Folk Art',
          state: 'Maharashtra'
        },
        {
          label: '✨ Pichwai Gold Leaf Technique',
          query: 'Explain how 24K real gold leaf and lapis lazuli are applied in Nathdwara Pichwai miniature paintings, and suggest a Kadamba tree foliage composition.',
          artForm: 'Pichwai & Miniature Painting',
          state: 'Rajasthan'
        }
      ];
  }
}

