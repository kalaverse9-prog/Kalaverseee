import { StateArtData, TourItinerary, MarketplaceListing, SupportedLanguage, Workshop, CommunityPost, KalaLensFeedback } from '../types';

export interface LocalizedUIStrings {
  // State Explorer
  stateExplorerTag: string;
  stateExplorerBadgeTop: string;
  stateExplorerBadgeSub: string;
  backToStates: string;
  giAuthenticCertified: string;
  stateOf: string;
  generateTrailForState: string;
  consultGuruOnArt: string;
  giRegistryEmblem: string;
  naturalMaterialsTitle: string;
  sacredMotifsTitle: string;
  uniqueLoreTitle: string;
  authenticTechniqueGuide: string;
  masteringArtStep: string;
  stepLabel: string;
  proTipLabel: string;
  secondaryCraftsLabel: string;
  zoneLabel: string;
  capitalLabel: string;
  zoneEast: string;
  zoneSouth: string;
  zoneWest: string;
  zoneNorth: string;
  zoneCentral: string;
  zoneNE: string;
  zoneAll: string;

  // Marketplace
  marketplaceTag: string;
  cartBtn: string;
  allArtForms: string;
  directPayoutNotice: string;
  priceLabel: string;
  giCertifiedBadge: string;
  emptyCartNotice: string;
  qtyLabel: string;
  eachLabel: string;
  totalAmountLabel: string;
  directPayoutGuaranteeText: string;
  orderSuccessTitle: string;
  orderSuccessMessage: string;
  continueExploringBtn: string;
  addNewListingTitle: string;

  // Profile Page
  verifiedGiArtisan: string;
  requestGiArtisanBadge: string;
  memberSince: string;
  planTitle: string;
  craftSpecialtyTitle: string;
  accessPinTitle: string;
  protectedPin: string;
  setPin: string;
  tabOverview: string;
  tabSecurity: string;
  tabEvaluations: string;
  tabMasterclasses: string;
  tabBadges: string;
  tabStudio: string;
  tabSettings: string;
  artisanPortfolioTitle: string;
  artisanPortfolioSubtitle: string;
  editProfileBtn: string;
  primaryArtTraditionLabel: string;
  stateAffiliationLabel: string;
  membershipLevelLabel: string;
  giStatusLabel: string;
  quickHubsTitle: string;
  updatePhotoBtn: string;
  crossDevicePassTitle: string;
  crossDevicePassSub: string;
  fairTradeGuaranteeTitle: string;
  fairTradeGuaranteeSub: string;
  readEthicalCharter: string;
  editProfileModalTitle: string;
  fullNameLabel: string;
  culturalRoleLabel: string;
  stateRegionLabel: string;
  craftSpecialtyLabel: string;
  bioStoryLabel: string;
  saveChangesBtn: string;
  cancelBtn: string;
  changePhotoTitle: string;
  uploadDeviceTab: string;
  culturalMotifsTab: string;
  imageUrlTab: string;
  clickOrDragPhoto: string;
  savePhotoBtn: string;
  resetDefaultBtn: string;
  requestBadgeTitle: string;
  requestBadgeSub: string;
  giCardInputLabel: string;
  craftLineageLabel: string;
  submitRequestBtn: string;
  zeroDataPledgeTitle: string;
  zeroDataPledgeSub: string;
  sovereignStorageTitle: string;
  sovereignStorageSub: string;
  downloadDataBtn: string;
  resetAccountBtn: string;
  scanNewArtworkBtn: string;
  browseMasterclassesBtn: string;

  // KalaTour
  kalaTourTag: string;
  trailDurationBadgeTop: string;
  trailDurationBadgeSub: string;
  tabCuratedTrails: string;
  tabCustomAiTrail: string;
  selectCraftTrailTitle: string;
  dayFocusLabel: string;
  oneDayRouteLabel: string;
  themeLabel: string;
  kalaYatriConciergeTitle: string;
  kalaYatriConciergeDesc: string;
  consultKalaYatriBtn: string;
  trailHighlightsTitle: string;
  stepScheduleTitle: string;
  masterExperienceLabel: string;
  insiderTipLabel: string;
  guildEtiquetteTitle: string;
  customizeTrailTitle: string;
  heritageCityLabel: string;
  heritageCityPlaceholder: string;
  durationNotice: string;
  dayBudgetLabel: string;
  paceRelaxed: string;
  paceModerate: string;
  paceIntense: string;
  generatingTrailText: string;
  customTrailGeneratedBadge: string;
  aiTrailReadyTitle: string;
  aiTrailReadyDesc: string;
  timeSlotMorning: string;
  timeSlotAfternoon: string;
  timeSlotEvening: string;

  // Community Feed & Workshops helpers (optional)
  shareArtworkTitle?: string;
  artworkTitleLabel?: string;
  artStyleLabel?: string;
  uploadDevicePhoto?: string;
  hostMasterclassTitle?: string;
  masterclassTitleLabel?: string;
  artFormLabel?: string;
  ticketPriceINR?: string;
  descriptionSyllabus?: string;
  publishMasterclassBtn?: string;
  clickSelectImage?: string;
  techniqueDescription?: string;
  publishPostBtn?: string;
  allWorkshops?: string;
  wsFilterAll?: string;
  durationLabel?: string;
  soldOutLabel?: string;
  seatFeeLabel?: string;
  freeLabel?: string;
}

export const LOCALIZED_UI: Record<SupportedLanguage, LocalizedUIStrings> = {
  en: {
    stateExplorerTag: '28 Indian States & 8 Union Territories',
    stateExplorerBadgeTop: 'GI Tagged Lore',
    stateExplorerBadgeSub: '28 States Catalogued',
    backToStates: '← Back to All States & Traditions',
    giAuthenticCertified: 'GI Authenticity Certified',
    stateOf: 'State of',
    generateTrailForState: 'Generate 1-Day Craft Trail for',
    consultGuruOnArt: 'Consult Guru on',
    giRegistryEmblem: '📜 GI Registry No. Certified Heritage',
    naturalMaterialsTitle: 'Natural & Mineral Materials',
    sacredMotifsTitle: 'Sacred Motifs & Symbolism',
    uniqueLoreTitle: 'Lineage & Unique Lore',
    authenticTechniqueGuide: 'Authentic Technique Guide',
    masteringArtStep: 'Mastering',
    stepLabel: 'Step',
    proTipLabel: 'Pro Tip',
    secondaryCraftsLabel: 'Secondary Crafts',
    zoneLabel: 'Zone',
    capitalLabel: 'Capital',
    zoneEast: 'East India',
    zoneSouth: 'South India',
    zoneWest: 'West India',
    zoneNorth: 'North India',
    zoneCentral: 'Central India',
    zoneNE: 'North-East',
    zoneAll: 'All India (28)',

    marketplaceTag: '100% GI-Certified Originals & 85% Direct Artisan Payout',
    cartBtn: 'Cart',
    allArtForms: 'All Art Forms',
    directPayoutNotice: '85% Direct Artisan Payout Guaranteed',
    priceLabel: 'Price',
    giCertifiedBadge: 'GI Certified',
    emptyCartNotice: 'Your cart is empty.',
    qtyLabel: 'Qty',
    eachLabel: 'each',
    totalAmountLabel: 'Total Amount',
    directPayoutGuaranteeText: '✓ 85% direct payout transferred to verified artisan',
    orderSuccessTitle: 'Order Placed Successfully!',
    orderSuccessMessage: 'Thank you for patronizing authentic Indian living heritage. 85% direct payout has been initiated to the master artisan.',
    continueExploringBtn: 'Continue Exploring',
    addNewListingTitle: 'List Heritage Artwork',

    verifiedGiArtisan: 'Verified GI Artisan',
    requestGiArtisanBadge: 'Request GI Artisan Badge',
    memberSince: 'Member since',
    planTitle: 'Plan',
    craftSpecialtyTitle: 'Craft Specialty',
    accessPinTitle: 'Access Pin',
    protectedPin: 'Protected',
    setPin: 'Set Pin',
    tabOverview: 'Artisan Overview',
    tabSecurity: 'Persistent Password Access',
    tabEvaluations: 'कलाLens Artworks',
    tabMasterclasses: 'My Masterclasses',
    tabBadges: 'Badges & Honors',
    tabStudio: 'Artisan Studio Portal',
    tabSettings: 'Account Settings & Privacy',
    artisanPortfolioTitle: 'Artisan Portfolio & Craft Lineage',
    artisanPortfolioSubtitle: 'Showcasing your verified craft traditions and regional art heritage.',
    editProfileBtn: 'Edit Profile',
    primaryArtTraditionLabel: 'Primary Art Tradition',
    stateAffiliationLabel: 'State Affiliation',
    membershipLevelLabel: 'Membership Level',
    giStatusLabel: 'GI Verification Status',
    quickHubsTitle: 'Quick KalaVerse Experience Hubs',
    updatePhotoBtn: 'Change Profile Photo',
    crossDevicePassTitle: 'Cross-Device Password Access',
    crossDevicePassSub: 'Set an access PIN so you can log in on another device without losing your art evaluations, saved masterclasses, or certifications.',
    fairTradeGuaranteeTitle: '85% Fair-Trade Direct Payout Guarantee',
    fairTradeGuaranteeSub: 'KalaVerse operates on zero-extractive patron economics. Artisans directly receive 85% of every original artwork and masterclass ticket.',
    readEthicalCharter: 'Read our Ethical Charter →',
    editProfileModalTitle: 'Edit Cultural Profile',
    fullNameLabel: 'Full Name',
    culturalRoleLabel: 'Cultural Role',
    stateRegionLabel: 'State / Region of Origin',
    craftSpecialtyLabel: 'Craft Specialty / Master Lineage',
    bioStoryLabel: 'Bio & Cultural Lineage Story',
    saveChangesBtn: 'Save Changes',
    cancelBtn: 'Cancel',
    changePhotoTitle: 'Choose Profile Photo',
    uploadDeviceTab: 'Upload from Device',
    culturalMotifsTab: 'Artisan Motifs',
    imageUrlTab: 'Image URL',
    clickOrDragPhoto: 'Click to choose an image or drag & drop here',
    savePhotoBtn: 'Save Photo',
    resetDefaultBtn: 'Reset to Default',
    requestBadgeTitle: 'Apply for GI Artisan Verification',
    requestBadgeSub: 'Certified Geographical Indication (GI) status unlocks direct verified sales, 85% guaranteed payouts, and government master artisan accreditation.',
    giCardInputLabel: 'Artisan Card Number / GI Registry Reference',
    craftLineageLabel: 'Generational Craft Lineage Details',
    submitRequestBtn: 'Submit for Verification',
    zeroDataPledgeTitle: 'Zero-Data Selling Pledge',
    zeroDataPledgeSub: 'Your artwork scans, masterclass notes, and artisan lineage details are stored strictly in private browser storage. We never sell your cultural data.',
    sovereignStorageTitle: 'Sovereign Cultural Storage',
    sovereignStorageSub: 'Everything you create or learn on KalaVerse belongs entirely to you. You can export or clear your account records at any time.',
    downloadDataBtn: 'Download Profile & Art Data (JSON)',
    resetAccountBtn: 'Reset Local Account & Cache',
    scanNewArtworkBtn: 'Scan New Artwork with कलाLens',
    browseMasterclassesBtn: 'Browse All Live Masterclasses',

    kalaTourTag: '1-Day Immersive Craft Trails & Guild Visits',
    trailDurationBadgeTop: 'Trail Duration',
    trailDurationBadgeSub: '1-Day Single Day Routes',
    tabCuratedTrails: 'Curated 1-Day Heritage Trails',
    tabCustomAiTrail: 'Custom 1-Day AI Trail Generator',
    selectCraftTrailTitle: 'Select 1-Day Craft Trail',
    dayFocusLabel: '1-Day Focus',
    oneDayRouteLabel: '1-Day Route',
    themeLabel: 'Theme',
    kalaYatriConciergeTitle: 'कलायात्री AI (KalaYatri) • RAG Concierge',
    kalaYatriConciergeDesc: 'Customize this 1-day itinerary around your schedule, accessibility needs, or dietary preferences. Book official artisan passes directly with 85% fair-trade remuneration.',
    consultKalaYatriBtn: 'Consult KalaYatri & Book',
    trailHighlightsTitle: 'Trail Highlights',
    stepScheduleTitle: '1-Day Step-by-Step Schedule (Morning to Evening)',
    masterExperienceLabel: 'Master Experience',
    insiderTipLabel: 'Insider Tip',
    guildEtiquetteTitle: 'Master Guild Etiquette & Insider Advice',
    customizeTrailTitle: 'Customize 1-Day Trail',
    heritageCityLabel: 'Heritage City / District',
    heritageCityPlaceholder: 'E.g., Madurai, Raghurajpur, Jaipur, Pochampally...',
    durationNotice: 'Duration: 1-Day Single-Day Immersive Route',
    dayBudgetLabel: 'Day Budget (INR)',
    paceRelaxed: 'Relaxed (2 Stops)',
    paceModerate: 'Moderate (3 Stops)',
    paceIntense: 'Deep Immersion (4 Stops)',
    generatingTrailText: 'Mapping 1-day craft studios...',
    customTrailGeneratedBadge: '✓ Custom 1-Day Trail Generated',
    aiTrailReadyTitle: 'AI 1-Day Trail Ready to Build',
    aiTrailReadyDesc: 'Specify your target city and craft interests on the left to create a customized 1-day itinerary with exact timings, artisan studios, and insider advice.',
    timeSlotMorning: 'Morning',
    timeSlotAfternoon: 'Afternoon',
    timeSlotEvening: 'Evening'
  },

  hi: {
    stateExplorerTag: '२८ भारतीय राज्य व ८ केंद्र शासित प्रदेश',
    stateExplorerBadgeTop: 'जीआई प्रमाणित धरोहर',
    stateExplorerBadgeSub: '२८ राज्यों की शिल्पकला सूची',
    backToStates: '← सभी राज्यों और कला परंपराओं पर वापस जाएं',
    giAuthenticCertified: 'जीआई (GI) प्रामाणिकता प्रमाणित',
    stateOf: 'राज्य:',
    generateTrailForState: 'के लिए 1-दिवसीय शिल्प यात्रा बनाएं',
    consultGuruOnArt: 'कला पर गुरु से परामर्श करें',
    giRegistryEmblem: '📜 जीआई रजिस्ट्री सं. प्रमाणित धरोहर',
    naturalMaterialsTitle: 'प्राकृतिक एवं खनिज सामग्री',
    sacredMotifsTitle: 'पवित्र प्रतीक एवं रूपांकन',
    uniqueLoreTitle: 'परंपरा, इतिहास एवं विशिष्ट तथ्य',
    authenticTechniqueGuide: 'प्रामाणिक कला तकनीक मार्गदर्शिका',
    masteringArtStep: 'कला में निपुणता:',
    stepLabel: 'चरण',
    proTipLabel: 'विशेष सुझाव',
    secondaryCraftsLabel: 'अन्य क्षेत्रीय शिल्प',
    zoneLabel: 'क्षेत्र',
    capitalLabel: 'राजधानी',
    zoneEast: 'पूर्वी भारत',
    zoneSouth: 'दक्षिण भारत',
    zoneWest: 'पश्चिम भारत',
    zoneNorth: 'उत्तर भारत',
    zoneCentral: 'मध्य भारत',
    zoneNE: 'पूर्वोत्तर भारत',
    zoneAll: 'संपूर्ण भारत (२८)',

    marketplaceTag: '१००% जीआई-प्रमाणित मूल कलाकृतियां एवं ८५% सीधा कारीगर भुगतान',
    cartBtn: 'कार्ट',
    allArtForms: 'सभी कला शैलियां',
    directPayoutNotice: '८५% सीधा कारीगर भुगतान गारंटीकृत',
    priceLabel: 'मूल्य',
    giCertifiedBadge: 'जीआई प्रमाणित',
    emptyCartNotice: 'आपकी कार्ट खाली है।',
    qtyLabel: 'मात्रा',
    eachLabel: 'प्रति नग',
    totalAmountLabel: 'कुल राशि',
    directPayoutGuaranteeText: '✓ ८५% सीधा भुगतान सत्यापित कारीगर को प्रेषित',
    orderSuccessTitle: 'आर्डर सफलतापूर्वक दर्ज हुआ!',
    orderSuccessMessage: 'भारतीय जीवित धरोहर का संरक्षण करने हेतु आपका धन्यवाद। ८५% सीधा भुगतान मुख्य शिल्पी को जारी कर दिया गया है।',
    continueExploringBtn: 'खरीदारी जारी रखें',
    addNewListingTitle: 'धरोहर कलाकृति सूचीबद्ध करें',

    verifiedGiArtisan: 'सत्यापित जीआई शिल्पी',
    requestGiArtisanBadge: 'जीआई शिल्पी बैज का अनुरोध करें',
    memberSince: 'सदस्यता वर्ष',
    planTitle: 'योजना',
    craftSpecialtyTitle: 'शिल्प विशेषज्ञता',
    accessPinTitle: 'एक्सेस पिन',
    protectedPin: 'सुरक्षित',
    setPin: 'पिन सेट करें',
    tabOverview: 'कारीगर अवलोकन',
    tabSecurity: 'स्थायी पासवर्ड एक्सेस',
    tabEvaluations: 'कलाLens कलाकृतियां',
    tabMasterclasses: 'मेरी मास्टरक्लास',
    tabBadges: 'बैज एवं सम्मान',
    tabStudio: 'कारीगर स्टूडियो पोर्टल',
    tabSettings: 'खाता सेटिंग्स व गोपनीयता',
    artisanPortfolioTitle: 'कारीगर पोर्टफोलियो एवं शिल्प वंशावली',
    artisanPortfolioSubtitle: 'आपकी सत्यापित शिल्प परंपराओं और क्षेत्रीय कला धरोहर का आधिकारिक प्रदर्शन।',
    editProfileBtn: 'प्रोफ़ाइल संपादित करें',
    primaryArtTraditionLabel: 'मुख्य कला परंपरा',
    stateAffiliationLabel: 'राज्य संबद्धता',
    membershipLevelLabel: 'सदस्यता स्तर',
    giStatusLabel: 'जीआई सत्यापन स्थिति',
    quickHubsTitle: 'त्वरित कलावर्स अनुभव केंद्र',
    updatePhotoBtn: 'प्रोफ़ाइल फ़ोटो बदलें',
    crossDevicePassTitle: 'क्रॉस-डिवाइस पासवर्ड एक्सेस',
    crossDevicePassSub: 'एक स्थायी एक्सेस पिन सेट करें ताकि आप किसी भी अन्य डिवाइस पर अपने सहेजे गए मास्टरक्लास और कला मूल्यांकन खोए बिना लॉगिन कर सकें।',
    fairTradeGuaranteeTitle: '८५% निष्पक्ष-व्यापार सीधा भुगतान गारंटी',
    fairTradeGuaranteeSub: 'कलावर्स शून्य-शोषणकारी अर्थशास्त्र पर संचालित होता है। कारीगरों को प्रत्येक कलाकृति और टिकट बिक्री का ८५% सीधा प्राप्त होता है।',
    readEthicalCharter: 'हमारा नैतिक चार्टर पढ़ें →',
    editProfileModalTitle: 'सांस्कृतिक प्रोफ़ाइल संपादित करें',
    fullNameLabel: 'पूरा नाम',
    culturalRoleLabel: 'सांस्कृतिक भूमिका',
    stateRegionLabel: 'मूल राज्य / क्षेत्र',
    craftSpecialtyLabel: 'शिल्प विशेषज्ञता / गुरु वंशावली',
    bioStoryLabel: 'परिचय एवं सांस्कृतिक वंशावली',
    saveChangesBtn: 'परिवर्तन सहेजें',
    cancelBtn: 'रद्द करें',
    changePhotoTitle: 'प्रोफ़ाइल फ़ोटो चुनें',
    uploadDeviceTab: 'डिवाइस से अपलोड करें',
    culturalMotifsTab: 'कारीगर रूपांकन',
    imageUrlTab: 'छवि URL लिंक',
    clickOrDragPhoto: 'छवि चुनने के लिए क्लिक करें या यहाँ खींचें',
    savePhotoBtn: 'फ़ोटो सहेजें',
    resetDefaultBtn: 'डिफ़ॉल्ट पर रीसेट करें',
    requestBadgeTitle: 'जीआई शिल्पी सत्यापन के लिए आवेदन करें',
    requestBadgeSub: 'प्रमाणित भौगोलिक संकेतक (GI) स्थिति आपको प्रत्यक्ष सत्यापित बिक्री, ८५% गारंटीकृत भुगतान और सरकारी मास्टर शिल्पकार मान्यता प्रदान करती है।',
    giCardInputLabel: 'कारीगर कार्ड संख्या / जीआई रजिस्ट्री संदर्भ',
    craftLineageLabel: 'पीढ़ी-दर-पीढ़ी शिल्प वंशावली विवरण',
    submitRequestBtn: 'सत्यापन हेतु भेजें',
    zeroDataPledgeTitle: 'शून्य डेटा-बिक्री प्रतिज्ञा',
    zeroDataPledgeSub: 'आपके कला स्कैन, मास्टरक्लास नोट्स और वंशावली विवरण केवल निजी ब्राउज़र स्टोरेज में सुरक्षित रहते हैं। हम आपका डेटा कभी नहीं बेचते।',
    sovereignStorageTitle: 'संप्रभु सांस्कृतिक डेटा भंडारण',
    sovereignStorageSub: 'कलावर्स पर आप जो कुछ भी बनाते या सीखते हैं वह पूर्णतः आपका है। आप कभी भी अपना डेटा निर्यात या साफ़ कर सकते हैं।',
    downloadDataBtn: 'प्रोफ़ाइल व कला डेटा डाउनलोड करें (JSON)',
    resetAccountBtn: 'स्थानीय डेटा व कैश रीसेट करें',
    scanNewArtworkBtn: 'कलाLens से नई कलाकृति स्कैन करें',
    browseMasterclassesBtn: 'सभी लाइव मास्टरक्लास देखें',

    kalaTourTag: '1-दिवसीय गहन शिल्प यात्राएं एवं गिल्ड भ्रमण',
    trailDurationBadgeTop: 'यात्रा अवधि',
    trailDurationBadgeSub: '1-दिवसीय एकल दिवस मार्ग',
    tabCuratedTrails: 'चयनित 1-दिवसीय धरोहर यात्राएं',
    tabCustomAiTrail: 'कस्टम 1-दिवसीय AI यात्रा जनरेटर',
    selectCraftTrailTitle: '1-दिवसीय शिल्प यात्रा चुनें',
    dayFocusLabel: '1-दिवसीय फ़ोकस',
    oneDayRouteLabel: '1-दिवसीय मार्ग',
    themeLabel: 'विषय (थीम)',
    kalaYatriConciergeTitle: 'कलायात्री AI (KalaYatri) • RAG Concierge',
    kalaYatriConciergeDesc: 'अपनी प्राथमिकताओं (बजट, सुगमता, सात्विक भोजन) के अनुसार इस 1-दिवसीय यात्रा को अनुकूलित करें और सीधे ८५% कारीगर भुगतान के साथ ई-पास बुक करें।',
    consultKalaYatriBtn: 'कलायात्री से सलाह लें व बुक करें',
    trailHighlightsTitle: 'यात्रा की मुख्य विशेषताएं',
    stepScheduleTitle: '1-दिवसीय चरणबद्ध समय-सारणी (प्रातः से संध्या)',
    masterExperienceLabel: 'मुख्य कारीगर अनुभव',
    insiderTipLabel: 'विशेष अंदरूनी सलाह',
    guildEtiquetteTitle: 'कारीगर गिल्ड शिष्टाचार एवं मार्गदर्शिका',
    customizeTrailTitle: '1-दिवसीय यात्रा अनुकूलित करें',
    heritageCityLabel: 'धरोहर शहर / ज़िला',
    heritageCityPlaceholder: 'उदा. मदुरै, रघुराजपुर, जयपुर, पोचमपल्ली...',
    durationNotice: 'अवधि: 1-दिवसीय एकल-दिवस गहन अनुभव',
    dayBudgetLabel: 'दैनिक बजट (रुपये)',
    paceRelaxed: 'आरामदेह (२ पड़ाव)',
    paceModerate: 'मध्यम (३ पड़ाव)',
    paceIntense: 'गहन विसर्जन (४ पड़ाव)',
    generatingTrailText: '1-दिवसीय शिल्प स्टूडियो का नक्शा तैयार हो रहा है...',
    customTrailGeneratedBadge: '✓ कस्टम 1-दिवसीय यात्रा तैयार हुई',
    aiTrailReadyTitle: 'AI 1-दिवसीय यात्रा तैयार होने हेतु प्रतीक्षारत',
    aiTrailReadyDesc: 'सटीक समय, कारीगर स्टूडियो और अंदरूनी सलाह के साथ अनुकूलित 1-दिवसीय यात्रा कार्यक्रम बनाने के लिए बाईं ओर अपना लक्षित शहर और शिल्प रुचियां चुनें।',
    timeSlotMorning: 'प्रातःकाल',
    timeSlotAfternoon: 'दोपहर',
    timeSlotEvening: 'संध्याकाल'
  },

  ta: {
    stateExplorerTag: '28 இந்திய மாநிலங்கள் & 8 யூனியன் பிரதேசங்கள்',
    stateExplorerBadgeTop: 'புவிசார் குறியீடு பாரம்பரியம்',
    stateExplorerBadgeSub: '28 மாநிலங்களின் கைவினை பட்டியல்',
    backToStates: '← அனைத்து மாநிலங்கள் மற்றும் கலைகளுக்குத் திரும்பு',
    giAuthenticCertified: 'புவிசார் குறியீடு (GI) சான்றளிக்கப்பட்டது',
    stateOf: 'மாநிலம்:',
    generateTrailForState: 'க்கான 1-நாள் கைவினை சுற்றுலா உருவாக்கு',
    consultGuruOnArt: 'கலை குறித்து குருவிடம் ஆலோசனை பெறுக',
    giRegistryEmblem: '📜 ஜி.ஐ பதிவு எண் சான்றளிக்கப்பட்ட பாரம்பரியம்',
    naturalMaterialsTitle: 'இயற்கை மற்றும் தாது பொருட்கள்',
    sacredMotifsTitle: 'புனித வடிவங்கள் & குறியீடுகள்',
    uniqueLoreTitle: 'பாரம்பரியம் மற்றும் தனித்துவக் கதைகள்',
    authenticTechniqueGuide: 'உண்மையான கலை நுட்ப வழிகாட்டி',
    masteringArtStep: 'கலையில் தேர்ச்சி:',
    stepLabel: 'படி',
    proTipLabel: 'முக்கிய குறிப்பு',
    secondaryCraftsLabel: 'பிற பாரம்பரிய கைவினைகள்',
    zoneLabel: 'மண்டலம்',
    capitalLabel: 'தலைநகரம்',
    zoneEast: 'கிழக்கு இந்தியா',
    zoneSouth: 'தென்னிந்தியா',
    zoneWest: 'மேற்கு இந்தியா',
    zoneNorth: 'வட இந்தியா',
    zoneCentral: 'மத்திய இந்தியா',
    zoneNE: 'வடகிழக்கு இந்தியா',
    zoneAll: 'முழு இந்தியா (28)',

    marketplaceTag: '100% புவிசார் குறியீடு கலைகள் & 85% நேரடி கைவினைஞர் கட்டணம்',
    cartBtn: 'கூடை',
    allArtForms: 'அனைத்து கலை வடிவங்கள்',
    directPayoutNotice: 'கைவினைஞருக்கு 85% நேரடி கட்டணம் உறுதி',
    priceLabel: 'விலை',
    giCertifiedBadge: 'புவிசார் குறியீடு சான்றிதழ்',
    emptyCartNotice: 'உங்கள் கூடை காலியாக உள்ளது.',
    qtyLabel: 'அளவு',
    eachLabel: 'ஒன்றுக்கு',
    totalAmountLabel: 'மொத்த தொகை',
    directPayoutGuaranteeText: '✓ 85% நேரடி கட்டணம் சரிபார்க்கப்பட்ட கைவினைஞருக்கு மாற்றப்பட்டது',
    orderSuccessTitle: 'ஆர்டர் வெற்றிகரமாக பதிவு செய்யப்பட்டது!',
    orderSuccessMessage: 'பாரம்பரிய கைவினைஞர்களை ஆதரித்தமைக்கு நன்றி. 85% கட்டணம் முதன்மை கைவினைஞருக்கு செலுத்தப்பட்டுள்ளது.',
    continueExploringBtn: 'தொடர்ந்து பார்வையிடுக',
    addNewListingTitle: 'பாரம்பரிய கலைப்பொருளை பட்டியலிடுக',

    verifiedGiArtisan: 'சரிபார்க்கப்பட்ட ஜி.ஐ கைவினைஞர்',
    requestGiArtisanBadge: 'ஜி.ஐ கைவினைஞர் பேட்ஜ் கோருக',
    memberSince: 'உறுப்பினர் ஆண்டு',
    planTitle: 'திட்டம்',
    craftSpecialtyTitle: 'கைவினை சிறப்பு',
    accessPinTitle: 'அணுகல் பின் (PIN)',
    protectedPin: 'பாதுகாக்கப்பட்டது',
    setPin: 'பின் அமைக்க',
    tabOverview: 'கைவினைஞர் மேலோட்டம்',
    tabSecurity: 'கடவுச்சொல் அணுகல்',
    tabEvaluations: 'கலாரென்ஸ் கலைப்படைப்புகள்',
    tabMasterclasses: 'எனது முதன்மை வகுப்புகள்',
    tabBadges: 'பேட்ஜ்கள் & கௌரவங்கள்',
    tabStudio: 'கைவினைஞர் ஸ்டுடியோ தளம்',
    tabSettings: 'கணக்கு அமைப்புகள் & தனியுரிமை',
    artisanPortfolioTitle: 'கைவினைஞர் தொகுப்பு & பாரம்பரியம்',
    artisanPortfolioSubtitle: 'உங்கள் சரிபார்க்கப்பட்ட கைவினைப் பாரம்பரியங்களின் உத்தியோகபூர்வ காட்சி.',
    editProfileBtn: 'சுயவிவரத்தைத் திருத்து',
    primaryArtTraditionLabel: 'முதன்மை கலை பாரம்பரியம்',
    stateAffiliationLabel: 'மாநில தொடர்பு',
    membershipLevelLabel: 'உறுப்பினர் நிலை',
    giStatusLabel: 'ஜி.ஐ சரிபார்ப்பு நிலை',
    quickHubsTitle: 'விரைவு கலாவேர்ஸ் மையங்கள்',
    updatePhotoBtn: 'சுயவிவரப் படத்தை மாற்றுக',
    crossDevicePassTitle: 'சாதனங்களுக்கிடையேயான கடவுச்சொல்',
    crossDevicePassSub: 'எந்தவொரு சாதனத்திலும் பாதுகாப்பாக உள்நுழைய உங்கள் அணுகல் பின்னை அமைக்கவும்.',
    fairTradeGuaranteeTitle: '85% நேர்மை வர்த்தக நேரடி ஊதிய உத்தரவாதம்',
    fairTradeGuaranteeSub: 'கலாவேர்ஸ் சுரண்டலற்ற பொருளாதாரத்தில் இயங்குகிறது. கைவினைஞர்கள் ஒவ்வொரு கலைப்படைப்பு விற்பனையிலும் 85% பெறுகிறார்கள்.',
    readEthicalCharter: 'எங்கள் நெறிமுறை சாசனத்தைப் படிக்கவும் →',
    editProfileModalTitle: 'கலாச்சார சுயவிவரத்தைத் திருத்து',
    fullNameLabel: 'முழுப் பெயர்',
    culturalRoleLabel: 'கலாச்சாரப் பங்கு',
    stateRegionLabel: 'பிறந்த மாநிலம் / பகுதி',
    craftSpecialtyLabel: 'கைவினைத் தேர்ச்சி / பாரம்பரியம்',
    bioStoryLabel: 'வாழ்க்கைக் குறிப்பு & வரலாறு',
    saveChangesBtn: 'சேமிக்க',
    cancelBtn: 'ரத்துசெய்',
    changePhotoTitle: 'சுயவிவரப் படத்தை தேர்வு செய்',
    uploadDeviceTab: 'சாதனத்திலிருந்து பதிவேற்று',
    culturalMotifsTab: 'பாரம்பரிய வடிவங்கள்',
    imageUrlTab: 'பட இணைப்பு (URL)',
    clickOrDragPhoto: 'படத்தைத் தேர்ந்தெடுக்க கிளிக் செய்யவும் அல்லது இங்கே இழுத்து விடவும்',
    savePhotoBtn: 'படத்தை சேமி',
    resetDefaultBtn: 'இயல்புநிலைக்கு மீட்டமை',
    requestBadgeTitle: 'ஜி.ஐ கைவினைஞர் சரிபார்ப்புக்கு விண்ணப்பிக்கவும்',
    requestBadgeSub: 'சான்றளிக்கப்பட்ட புவிசார் குறியீடு தகுதி நேரடி சரிபார்க்கப்பட்ட விற்பனை மற்றும் 85% உத்தரவாத கட்டணத்தை வழங்குகிறது.',
    giCardInputLabel: 'கைவினைஞர் அட்டை எண் / ஜி.ஐ குறிப்பு',
    craftLineageLabel: 'தலைமுறை கைவினை பாரம்பரிய விவரங்கள்',
    submitRequestBtn: 'சரிபார்ப்புக்கு சமர்ப்பிக்கவும்',
    zeroDataPledgeTitle: 'பூஜ்ஜிய தரவு விற்பனை உறுதிமொழி',
    zeroDataPledgeSub: 'உங்கள் கலைப் படங்கள் மற்றும் குறிப்புகள் உங்கள் உலாவி சேமிப்பகத்தில் மட்டுமே இருக்கும். நாங்கள் தரவை விற்பதில்லை.',
    sovereignStorageTitle: 'சுயாதீன கலாச்சார தரவு சேமிப்பு',
    sovereignStorageSub: 'நீங்கள் உருவாக்கும் அல்லது கற்கும் அனைத்தும் உங்களுக்கே சொந்தமானது. எப்போது வேண்டுமானாலும் பதிவிறக்கலாம்.',
    downloadDataBtn: 'சுயவிவரத் தரவைப் பதிவிறக்கு (JSON)',
    resetAccountBtn: 'உள்ளூர் கணக்கை மீட்டமைக்க',
    scanNewArtworkBtn: 'புதிய கலையை ஸ்கேன் செய்க',
    browseMasterclassesBtn: 'அனைத்து வகுப்புகளையும் காண்க',

    kalaTourTag: '1-நாள் முழுமையான கலைப்பயணங்கள் & தொழிற்கூட வருகை',
    trailDurationBadgeTop: 'சுற்றுலா காலம்',
    trailDurationBadgeSub: '1-நாள் ஒற்றை நாள் பாதைகள்',
    tabCuratedTrails: 'தேர்ந்தெடுக்கப்பட்ட 1-நாள் பாரம்பரிய சுற்றுலாக்கள்',
    tabCustomAiTrail: 'தனிப்பயன் 1-நாள் AI சுற்றுலா உருவாக்குநர்',
    selectCraftTrailTitle: '1-நாள் கைவினை சுற்றுலாவைத் தேர்ந்தெடுக்கவும்',
    dayFocusLabel: '1-நாள் கவனம்',
    oneDayRouteLabel: '1-நாள் பாதை',
    themeLabel: 'கருப்பொருள்',
    kalaYatriConciergeTitle: 'கலாயாத்ரி AI (KalaYatri) • வழிகாட்டி',
    kalaYatriConciergeDesc: 'உங்கள் தேவைகளுக்கு ஏற்ப இந்த 1-நாள் பயணத்தை வடிவமைத்து, 85% நேரடி ஊதியத்துடன் அதிகாரப்பூர்வ பாஸ்களை முன்பதிவு செய்யுங்கள்.',
    consultKalaYatriBtn: 'கலாயாத்ரியுடன் ஆலோசித்து முன்பதிவு செய்',
    trailHighlightsTitle: 'சுற்றுலாவின் சிறப்பம்சங்கள்',
    stepScheduleTitle: '1-நாள் படிமுறை நேர அட்டவணை (காலை முதல் மாலை வரை)',
    masterExperienceLabel: 'முதன்மை கைவினைஞர் அனுபவம்',
    insiderTipLabel: 'உள்ளூர் ரகசியக் குறிப்பு',
    guildEtiquetteTitle: 'கைவினைஞர் தொழிற்கூட வழிகாட்டுதல்',
    customizeTrailTitle: '1-நாள் சுற்றுலாவைத் தனிப்பயனாக்குங்கள்',
    heritageCityLabel: 'பாரம்பரிய நகரம் / மாவட்டம்',
    heritageCityPlaceholder: 'எ.கா: மதுரை, தஞ்சாவூர், ஜெய்ப்பூர், காஞ்சிபுரம்...',
    durationNotice: 'கால அளவு: 1-நாள் ஒற்றை நாள் முழுமையான அனுபவம்',
    dayBudgetLabel: 'நாள் பட்ஜெட் (ரூபாய்)',
    paceRelaxed: 'நிதானமான (2 நிறுத்தங்கள்)',
    paceModerate: 'நடுத்தர (3 நிறுத்தங்கள்)',
    paceIntense: 'ஆழ்ந்த அனுபவம் (4 நிறுத்தங்கள்)',
    generatingTrailText: '1-நாள் கைவினைக்கூட வரைபடம் தயாராகிறது...',
    customTrailGeneratedBadge: '✓ தனிப்பயன் 1-நாள் சுற்றுலா உருவாக்கப்பட்டது',
    aiTrailReadyTitle: 'AI 1-நாள் சுற்றுலா உருவாக்க தயார்',
    aiTrailReadyDesc: 'துல்லியமான நேரம், கைவினைக்கூடங்கள் மற்றும் ஆலோசனைகளுடன் 1-நாள் அட்டவணையை உருவாக்க உங்கள் விருப்பங்களை உள்ளிடவும்.',
    timeSlotMorning: 'காலை',
    timeSlotAfternoon: 'மதியம்',
    timeSlotEvening: 'மாலை'
  },

  te: {
    stateExplorerTag: '28 భారతీయ రాష్ట్రాలు & 8 కేంద్రపాలిత ప్రాంతాలు',
    stateExplorerBadgeTop: 'జి.ఐ గుర్తింపు పొందిన వారసత్వం',
    stateExplorerBadgeSub: '28 రాష్ట్రాల కళా సూచిక',
    backToStates: '← అన్ని రాష్ట్రాలు మరియు కళా సంప్రదాయాలకు తిరిగి వెళ్ళు',
    giAuthenticCertified: 'జి.ఐ (GI) ప్రామాణికత ధృవీకరించబడింది',
    stateOf: 'రాష్ట్రం:',
    generateTrailForState: 'కోసం 1-రోజు క్రాఫ్ట్ ట్రైల్ సృష్టించండి',
    consultGuruOnArt: 'కళపై గురువును సంప్రదించండి',
    giRegistryEmblem: '📜 జి.ఐ రిజిస్ట్రీ సంఖ్య ధృవీకృత వారసత్వం',
    naturalMaterialsTitle: 'సహజ మరియు ఖనిజ పదార్థాలు',
    sacredMotifsTitle: 'పవిత్ర నమూనాలు & చిహ్నాలు',
    uniqueLoreTitle: 'వంశపారంపర్య చరిత్ర & ప్రత్యేకతలు',
    authenticTechniqueGuide: 'ప్రామాణిక సాంకేతిక మార్గదర్శిని',
    masteringArtStep: 'కళలో ప్రావీణ్యత:',
    stepLabel: 'దశ',
    proTipLabel: 'ముఖ్య సూచన',
    secondaryCraftsLabel: 'ఇతర ప్రాంతీయ కళలు',
    zoneLabel: 'ప్రాంతం',
    capitalLabel: 'రాజధాని',
    zoneEast: 'తూర్పు భారతదేశం',
    zoneSouth: 'దక్షిణ భారతదేశం',
    zoneWest: 'పశ్చిమ భారతదేశం',
    zoneNorth: 'ఉత్తర భారతదేశం',
    zoneCentral: 'మధ్య భారతదేశం',
    zoneNE: 'ఈశాన్య భారతదేశం',
    zoneAll: 'మొత్తం భారతదేశం (28)',

    marketplaceTag: '100% జి.ఐ ధృవీకృత కళలు & 85% నేరుగా కళాకారునికి చెల్లింపు',
    cartBtn: 'కార్ట్',
    allArtForms: 'అన్ని కళారూపాలు',
    directPayoutNotice: 'కళాకారునికి 85% ప్రత్యక్ష చెల్లింపు హామీ',
    priceLabel: 'ధర',
    giCertifiedBadge: 'జి.ఐ సర్టిఫైడ్',
    emptyCartNotice: 'మీ కార్ట్ ఖాళీగా ఉంది.',
    qtyLabel: 'పరిమాణం',
    eachLabel: 'ఒక్కొక్కటి',
    totalAmountLabel: 'మొత్తం సొమ్ము',
    directPayoutGuaranteeText: '✓ 85% నేరుగా ధృవీకరించబడిన కళాకారునికి చెల్లించబడుతుంది',
    orderSuccessTitle: 'ఆర్డర్ విజయవంతంగా పూర్తయింది!',
    orderSuccessMessage: 'భారతీయ సజీవ వారసత్వాన్ని ఆదరించినందుకు ధన్యవాదాలు. 85% చెల్లింపు ప్రధాన కళాకారునికి జమ చేయబడింది.',
    continueExploringBtn: 'అన్వేషణ కొనసాగించండి',
    addNewListingTitle: 'కళాఖండాన్ని జాబితా చేయండి',

    verifiedGiArtisan: 'ధృవీకృత జి.ఐ కళాకారుడు',
    requestGiArtisanBadge: 'జి.ఐ బ్యాడ్జ్ కోసం దరఖాస్తు చేసుకోండి',
    memberSince: 'సభ్యత్వ సంవత్సరం',
    planTitle: 'ప్లాన్',
    craftSpecialtyTitle: 'క్రాఫ్ట్ నైపుణ్యం',
    accessPinTitle: 'యాక్సెస్ పిన్ (PIN)',
    protectedPin: 'రక్షించబడింది',
    setPin: 'పిన్ సెట్ చేయండి',
    tabOverview: 'కళాకారుల అవలోకనం',
    tabSecurity: 'పాస్‌వర్డ్ యాక్సెస్',
    tabEvaluations: 'కళాలెన్స్ కళారూపాలు',
    tabMasterclasses: 'నా మాస్టర్‌క్లాసులు',
    tabBadges: 'బ్యాడ్జ్‌లు & గౌరవాలు',
    tabStudio: 'కళాకారుల స్టూడియో పోర్టల్',
    tabSettings: 'ఖాతా సెట్టింగ్‌లు & గోప్యత',
    artisanPortfolioTitle: 'కళాకారుల పోర్ట్‌ఫోలియో & వారసత్వం',
    artisanPortfolioSubtitle: 'మీ ధృవీకరించబడిన సంప్రదాయ కళలు మరియు ప్రాంతీయ వారసత్వ ప్రదర్శన.',
    editProfileBtn: 'ప్రొఫైల్ సవరించండి',
    primaryArtTraditionLabel: 'ప్రధాన కళా సంప్రదాయం',
    stateAffiliationLabel: 'రాష్ట్ర అనుబంధం',
    membershipLevelLabel: 'సభ్యత్వ స్థాయి',
    giStatusLabel: 'జి.ఐ ధృవీకరణ స్థితి',
    quickHubsTitle: 'త్వరిత కళావర్స్ కేంద్రాలు',
    updatePhotoBtn: 'ఫోటో మార్చండి',
    crossDevicePassTitle: 'క్రాస్-డివైస్ పాస్‌వర్డ్',
    crossDevicePassSub: 'ఏ పరికరంలోనైనా మీ సమాచారాన్ని కోల్పోకుండా లాగిన్ చేయడానికి యాక్సెస్ పిన్ సెట్ చేయండి.',
    fairTradeGuaranteeTitle: '85% న్యాయమైన వాణిజ్య ప్రత్యక్ష చెల్లింపు హామీ',
    fairTradeGuaranteeSub: 'కళావర్స్ ఎలాంటి దోపిడీ లేని ఆర్థిక విధానాన్ని అనుసరిస్తుంది. ప్రతి అమ్మకంలో 85% నేరుగా కళాకారులకే చెందుతుంది.',
    readEthicalCharter: 'మా నైతిక మార్గదర్శకాలను చదవండి →',
    editProfileModalTitle: 'సాంస్కృతిక ప్రొఫైల్‌ను సవరించండి',
    fullNameLabel: 'పూర్తి పేరు',
    culturalRoleLabel: 'సాంస్కృతిక పాత్ర',
    stateRegionLabel: 'స్వస్థలం / ప్రాంతం',
    craftSpecialtyLabel: 'కళా నైపుణ్యం / గురు పరంపర',
    bioStoryLabel: 'పరిచయం & వారసత్వ కథ',
    saveChangesBtn: 'మార్పులను సేవ్ చేయండి',
    cancelBtn: 'రద్దు చేయండి',
    changePhotoTitle: 'ప్రొఫైల్ ఫోటో ఎంచుకోండి',
    uploadDeviceTab: 'పరికరం నుండి అప్‌లోడ్ చేయండి',
    culturalMotifsTab: 'సాంప్రదాయ చిహ్నాలు',
    imageUrlTab: 'చిత్ర లింక్ (URL)',
    clickOrDragPhoto: 'చిత్రాన్ని ఎంచుకోవడానికి క్లిక్ చేయండి లేదా ఇక్కడ లాగండి',
    savePhotoBtn: 'ఫోటో సేవ్ చేయండి',
    resetDefaultBtn: 'రీసెట్ చేయండి',
    requestBadgeTitle: 'జి.ఐ కళాకారుల ధృవీకరణకు దరఖాస్తు',
    requestBadgeSub: 'ధృవీకరించబడిన భౌగోళిక సూచిక (GI) హోదా మీకు ప్రత్యక్ష అమ్మకాలు మరియు 85% హామీ చెల్లింపును అందిస్తుంది.',
    giCardInputLabel: 'కళాకారుల కార్డ్ సంఖ్య / జి.ఐ రిఫరెన్స్',
    craftLineageLabel: 'తరాల కళా వారసత్వ వివరాలు',
    submitRequestBtn: 'ధృవీకరణ కోసం సమర్పించండి',
    zeroDataPledgeTitle: 'సున్నా డేటా అమ్మకం హామీ',
    zeroDataPledgeSub: 'మీ కళా విశ్లేషణలు మరియు వివరాలు బ్రౌజర్‌లో మాత్రమే ఉంటాయి. మేము మీ డేటాను విక్రయించము.',
    sovereignStorageTitle: 'సార్వభౌమ సాంస్కృతిక నిల్వ',
    sovereignStorageSub: 'మీరు సృష్టించే లేదా నేర్చుకునే ప్రతిదీ మీకే చెందుతుంది. ఎప్పుడైనా డౌన్‌లోడ్ చేసుకోవచ్చు.',
    downloadDataBtn: 'డేటాను డౌన్‌లోడ్ చేయండి (JSON)',
    resetAccountBtn: 'ఖాతా డేటాను రీసెట్ చేయండి',
    scanNewArtworkBtn: 'కళాలెన్స్‌తో కొత్త కళను స్కాన్ చేయండి',
    browseMasterclassesBtn: 'అన్ని తరగతులను చూడండి',

    kalaTourTag: '1-రోజు సమగ్ర కళా యాత్రలు & స్టూడియో సందర్శనలు',
    trailDurationBadgeTop: 'యాత్ర కాలపరిమితి',
    trailDurationBadgeSub: '1-రోజు ఏకైక మార్గాలు',
    tabCuratedTrails: 'ఎంపిక చేసిన 1-రోజు వారసత్వ యాత్రలు',
    tabCustomAiTrail: 'కస్టమ్ 1-రోజు AI యాత్ర జనరేటర్',
    selectCraftTrailTitle: '1-రోజు క్రాఫ్ట్ యాత్రను ఎంచుకోండి',
    dayFocusLabel: '1-రోజు దృష్టి',
    oneDayRouteLabel: '1-రోజు మార్గం',
    themeLabel: 'ఇతివృత్తం (థీమ్)',
    kalaYatriConciergeTitle: 'కళాయాత్రి AI (KalaYatri) • గైడ్',
    kalaYatriConciergeDesc: 'మీ అవసరాలకు అనుగుణంగా ఈ 1-రోజు ప్రయాణాన్ని అనుకూలీకరించండి మరియు 85% చెల్లింపుతో అధికారిక పాస్‌లను బుక్ చేయండి.',
    consultKalaYatriBtn: 'కళాయాత్రితో సంప్రదించి బుక్ చేయండి',
    trailHighlightsTitle: 'యాత్ర విశేషాలు',
    stepScheduleTitle: '1-రోజు క్రమబద్ధమైన సమయ పట్టిక (ఉదయం నుండి సాయంత్రం)',
    masterExperienceLabel: 'ప్రధాన కళాకారుల అనుభవం',
    insiderTipLabel: 'ముఖ్య అంతర్గత సూచన',
    guildEtiquetteTitle: 'కళాకారుల గిల్డ్ నియమావళి',
    customizeTrailTitle: '1-రోజు యాత్రను అనుకూలీకరించండి',
    heritageCityLabel: 'వారసత్వ నగరం / జిల్లా',
    heritageCityPlaceholder: 'ఉదా: శ్రీకాళహస్తి, పోచంపల్లి, జైపూర్, మధురై...',
    durationNotice: 'వ్యవధి: 1-రోజు ఏకైక ప్రయాణ అనుభవం',
    dayBudgetLabel: 'రోజు బడ్జెట్ (రూపాయలు)',
    paceRelaxed: 'విశ్రాంతిగా (2 విరామాలు)',
    paceModerate: 'మధ్యస్థంగా (3 విరామాలు)',
    paceIntense: 'లోతైన అనుభవం (4 విరామాలు)',
    generatingTrailText: '1-రోజు స్టూడియో మ్యాప్ సిద్ధమవుతోంది...',
    customTrailGeneratedBadge: '✓ కస్టమ్ 1-రోజు యాత్ర రూపొందించబడింది',
    aiTrailReadyTitle: 'AI 1-రోజు యాత్ర ప్రారంభించడానికి సిద్ధంగా ఉంది',
    aiTrailReadyDesc: 'ఖచ్చితమైన సమయాలు మరియు స్టూడియోలతో కూడిన ప్రయాణ ప్రణాళిక కోసం ఎడమవైపు వివరాలను ఎంచుకోండి.',
    timeSlotMorning: 'ఉదయం',
    timeSlotAfternoon: 'మధ్యాహ్నం',
    timeSlotEvening: 'సాయంత్రం'
  },

  bn: {
    stateExplorerTag: '২৮টি ভারতীয় রাজ্য ও ৮টি কেন্দ্রশাসিত অঞ্চল',
    stateExplorerBadgeTop: 'জিআই ট্যাগযুক্ত ঐতিহ্য',
    stateExplorerBadgeSub: '২৮টি রাজ্যের শিল্প তালিকা',
    backToStates: '← সমস্ত রাজ্য ও শিল্প ঐতিহ্যে ফিরে যান',
    giAuthenticCertified: 'জিআই (GI) প্রামাণ্যতায় প্রত্যায়িত',
    stateOf: 'রাজ্য:',
    generateTrailForState: 'এর জন্য ১ দিনের শিল্প ভ্রমণ তৈরি করুন',
    consultGuruOnArt: 'শিল্পের উপর গুরুর পরামর্শ নিন',
    giRegistryEmblem: '📜 জিআই রেজিস্ট্রি নং প্রত্যায়িত ঐতিহ্য',
    naturalMaterialsTitle: 'প্রাকৃতিক ও খনিজ উপাদান',
    sacredMotifsTitle: 'পবিত্র প্রতীক ও রূপরেখা',
    uniqueLoreTitle: 'ঐতিহ্য, ইতিহাস ও বিশেষ তথ্য',
    authenticTechniqueGuide: 'প্রামাণ্য শিল্প কৌশল নির্দেশিকা',
    masteringArtStep: 'শিল্পে দক্ষতা অর্জন:',
    stepLabel: 'ধাপ',
    proTipLabel: 'বিশেষ পরামর্শ',
    secondaryCraftsLabel: 'অন্যান্য আঞ্চলিক কারুশিল্প',
    zoneLabel: 'অঞ্চল',
    capitalLabel: 'রাজধানী',
    zoneEast: 'পূর্ব ভারত',
    zoneSouth: 'দক্ষিণ ভারত',
    zoneWest: 'পশ্চিম ভারত',
    zoneNorth: 'উত্তর ভারত',
    zoneCentral: 'মধ্য ভারত',
    zoneNE: 'উত্তর-পূর্ব ভারত',
    zoneAll: 'সমগ্র ভারত (২৮)',

    marketplaceTag: '১০০% জিআই-প্রত্যায়িত মূল শিল্পকর্ম এবং ৯০% সরাসরি শিল্পী পারিশ্রমিক',
    cartBtn: 'কার্ট',
    allArtForms: 'সকল শিল্পরীতি',
    directPayoutNotice: '৯০% সরাসরি শিল্পী পারিশ্রমিক নিশ্চিত',
    priceLabel: 'মূল্য',
    giCertifiedBadge: 'জিআই প্রত্যায়িত',
    emptyCartNotice: 'আপনার কার্ট খালি।',
    qtyLabel: 'পরিমাণ',
    eachLabel: 'প্রতিটি',
    totalAmountLabel: 'মোট মূল্য',
    directPayoutGuaranteeText: '✓ ৯০% সরাসরি অর্থ যাচাইকৃত শিল্পীর কাছে স্থানান্তরিত',
    orderSuccessTitle: 'অর্ডার সফলভাবে সম্পন্ন হয়েছে!',
    orderSuccessMessage: 'ঐতিহ্যবাহী ভারতীয় কারুশিল্পের পাশে থাকার জন্য ধন্যবাদ। ৯০% পারিশ্রমিক প্রধান শিল্পীকে প্রদান করা হয়েছে।',
    continueExploringBtn: 'অন্বেষণ চালিয়ে যান',
    addNewListingTitle: 'ঐতিহ্যবাহী শিল্পকর্ম তালিকাভুক্ত করুন',

    verifiedGiArtisan: 'যাচাইকৃত জিআই কারিগর',
    requestGiArtisanBadge: 'জিআই কারিগর ব্যাজের অনুরোধ করুন',
    memberSince: 'সদস্যতার বছর',
    planTitle: 'প্ল্যান',
    craftSpecialtyTitle: 'শিল্পের বিশেষত্ব',
    accessPinTitle: 'অ্যাক্সেস পিন (PIN)',
    protectedPin: 'সুরক্ষিত',
    setPin: 'পিন সেট করুন',
    tabOverview: 'শিল্পী রূপরেখা',
    tabSecurity: 'পাসওয়ার্ড অ্যাক্সেস',
    tabEvaluations: 'কলালেন্স শিল্পকর্ম',
    tabMasterclasses: 'আমার মাস্টারক্লাস',
    tabBadges: 'ব্যাজ ও সম্মাননা',
    tabStudio: 'শিল্পী স্টুডিও পোর্টাল',
    tabSettings: 'অ্যাকাউন্ট সেটিংস ও গোপনীয়তা',
    artisanPortfolioTitle: 'শিল্পী পোর্টফোলিও ও বংশানুক্রম',
    artisanPortfolioSubtitle: 'আপনার যাচাইকৃত ঐতিহ্যবাহী শিল্পরীতি ও আঞ্চলিক সংস্কৃতির আনুষ্ঠানিক প্রদর্শনী।',
    editProfileBtn: 'প্রোফাইল সম্পাদনা করুন',
    primaryArtTraditionLabel: 'প্রধান শিল্প ঐতিহ্য',
    stateAffiliationLabel: 'রাজ্য সংযুক্তি',
    membershipLevelLabel: 'সদস্যপদ স্তর',
    giStatusLabel: 'জিআই যাচাইকরণ স্থিতি',
    quickHubsTitle: 'কলাভের্স অভিজ্ঞতা কেন্দ্রসমূহ',
    updatePhotoBtn: 'প্রোফাইল ছবি পরিবর্তন করুন',
    crossDevicePassTitle: 'ক্রস-ডিভাইস পাসওয়ার্ড',
    crossDevicePassSub: 'অন্য যে কোনো ডিভাইসে সংরক্ষিত মাস্টারক্লাস না হারিয়ে লগইন করতে অ্যাক্সেস পিন সেট করুন।',
    fairTradeGuaranteeTitle: '৯০% প্রত্যক্ষ ন্যায্য পারিশ্রমিক নিশ্চয়তা',
    fairTradeGuaranteeSub: 'কলাভের্স কোনো শোষণমূলক অর্থনীতিতে কাজ করে না। প্রতিটি বিক্রয়ে কারিগর সরাসরি ৯০% পেয়ে থাকেন।',
    readEthicalCharter: 'আমাদের নীতিগত সনদ পড়ুন →',
    editProfileModalTitle: 'সাংস্কৃতিক প্রোফাইল সম্পাদনা করুন',
    fullNameLabel: 'সম্পূর্ণ নাম',
    culturalRoleLabel: 'সাংস্কৃতিক ভূমিকা',
    stateRegionLabel: 'উৎপত্তিস্থল রাজ্য / অঞ্চল',
    craftSpecialtyLabel: 'কারুশিল্প দক্ষতা / গুরু বংশপরম্পরা',
    bioStoryLabel: 'জীবনবৃত্তান্ত ও ঐতিহ্যের বিবরণ',
    saveChangesBtn: 'পরিবর্তন সংরক্ষণ করুন',
    cancelBtn: 'বাতিল করুন',
    changePhotoTitle: 'প্রোফাইল ছবি বেছে নিন',
    uploadDeviceTab: 'ডিভাইস থেকে আপলোড',
    culturalMotifsTab: 'ঐতিহ্যবাহী নকশা',
    imageUrlTab: 'ছবির লিংক (URL)',
    clickOrDragPhoto: 'ছবি নির্বাচন করতে ক্লিক করুন বা এখানে টেনে আনুন',
    savePhotoBtn: 'ছবি সংরক্ষণ করুন',
    resetDefaultBtn: 'ডিফল্টে ফিরুন',
    requestBadgeTitle: 'জিআই কারিগর যাচাইয়ের জন্য আবেদন',
    requestBadgeSub: 'প্রত্যায়িত জিআই স্ট্যাটাস সরাসরি বিক্রয় এবং ৯০% নিশ্চিত পারিশ্রমিক সুবিধা প্রদান করে।',
    giCardInputLabel: 'কারিগর কার্ড নম্বর / জিআই রেফারেন্স',
    craftLineageLabel: 'বংশানুক্রমিক শিল্পের বিবরণ',
    submitRequestBtn: 'যাচাইয়ের জন্য জমা দিন',
    zeroDataPledgeTitle: 'শূন্য ডেটা বিক্রয় অঙ্গীকার',
    zeroDataPledgeSub: 'আপনার আর্ট স্ক্যান ও বিবরণ শুধুমাত্র ব্রাউজারে সংরক্ষিত থাকে। আমরা ডেটা বিক্রি করি না।',
    sovereignStorageTitle: 'সার্বভৌম সাংস্কৃতিক ডেটা সংরক্ষণ',
    sovereignStorageSub: 'কলাভের্সে আপনি যা তৈরি করেন তা সম্পূর্ণ আপনার। যেকোনো সময় ডেটা ডাউনলোড করা সম্ভব।',
    downloadDataBtn: 'প্রোফাইল ডেটা ডাউনলোড করুন (JSON)',
    resetAccountBtn: 'স্থানীয় ক্যাশ রিসেট করুন',
    scanNewArtworkBtn: 'কলালেন্স দিয়ে নতুন শিল্প স্ক্যান করুন',
    browseMasterclassesBtn: 'সব মাস্টারক্লাস দেখুন',

    kalaTourTag: '১-দিনের নিবিড় শিল্প ভ্রমণ ও কর্মশালা পরিদর্শন',
    trailDurationBadgeTop: 'ভ্রমণকাল',
    trailDurationBadgeSub: '১-দিনের একক দিবস রুট',
    tabCuratedTrails: 'নির্বাচিত ১-দিনের ঐতিহ্যবাহী ভ্রমণপথ',
    tabCustomAiTrail: 'কাস্টম ১-দিনের AI ভ্রমণ নির্মাতা',
    selectCraftTrailTitle: '১-দিনের কারুশিল্প ভ্রমণ বেছে নিন',
    dayFocusLabel: '১-দিনের ফোকাস',
    oneDayRouteLabel: '১-দিনের রুট',
    themeLabel: 'মূল ভাব (থিম)',
    kalaYatriConciergeTitle: 'কালায়াত্রী AI (KalaYatri) • গাইড',
    kalaYatriConciergeDesc: 'আপনার সুবিধা অনুযায়ী ১-দিনের ভ্রমণ পরিকল্পনা তৈরি করুন এবং শিল্পীকে ৯০% সরাসরি পারিশ্রমিক দিয়ে পাস বুক করুন।',
    consultKalaYatriBtn: 'কালায়াত্রীর সাথে পরামর্শ ও বুকিং',
    trailHighlightsTitle: 'ভ্রমণের মূল আকর্ষণ',
    stepScheduleTitle: '১-দিনের সময়সূচি (সকাল থেকে সন্ধ্যা)',
    masterExperienceLabel: 'প্রধান কারুশিল্প অভিজ্ঞতা',
    insiderTipLabel: 'বিশেষ অন্তর্দৃষ্টিমূলক পরামর্শ',
    guildEtiquetteTitle: 'শিল্পী সমাজ ও কর্মশালার নিয়মাবলী',
    customizeTrailTitle: '১-দিনের ভ্রমণ কাস্টমাইজ করুন',
    heritageCityLabel: 'ঐতিহ্যবাহী শহর / জেলা',
    heritageCityPlaceholder: 'যেমন: শান্তিনিকেতন, বিষ্ণুপুর, জয়পুর, পুরী...',
    durationNotice: 'সময়কাল: ১-দিনের একক দিবস নিবিড় অভিজ্ঞতা',
    dayBudgetLabel: 'দৈনিক বাজেট (টাকা)',
    paceRelaxed: 'স্বস্তিদায়ক (২টি স্থান)',
    paceModerate: 'মাঝারি (৩টি স্থান)',
    paceIntense: 'গভীর অভিজ্ঞতা (৪টি স্থান)',
    generatingTrailText: '১-দিনের স্টুডিও মানচিত্র তৈরি হচ্ছে...',
    customTrailGeneratedBadge: '✓ কাস্টম ১-দিনের ভ্রমণ তৈরি সম্পন্ন',
    aiTrailReadyTitle: 'AI ১-দিনের ভ্রমণ তৈরি করতে প্রস্তুত',
    aiTrailReadyDesc: 'সঠিক সময় এবং কর্মশালার অবস্থানসহ সম্পূর্ণ পরিকল্পনা তৈরি করতে বামপাশে আপনার পছন্দসমূহ নির্বাচন করুন।',
    timeSlotMorning: 'সকাল',
    timeSlotAfternoon: 'দুপুর',
    timeSlotEvening: 'সন্ধ্যা'
  },

  mr: {
    stateExplorerTag: '२८ भारतीय राज्ये आणि ८ केंद्रशासित प्रदेश',
    stateExplorerBadgeTop: 'जीआय मानांकित वारसा',
    stateExplorerBadgeSub: '२८ राज्यांची हस्तकला सूची',
    backToStates: '← सर्व राज्ये आणि कला परंपरांकडे परत जा',
    giAuthenticCertified: 'जीआय (GI) सत्यता प्रमाणित',
    stateOf: 'राज्य:',
    generateTrailForState: 'साठी १-दिवसीय कला यात्रा तयार करा',
    consultGuruOnArt: 'कलेवर गुरूंचा सल्ला घ्या',
    giRegistryEmblem: '📜 जीआय नोंदणी क्र. प्रमाणित वारसा',
    naturalMaterialsTitle: 'नैसर्गिक व खनिज साहित्य',
    sacredMotifsTitle: 'पवित्र चिन्हे व प्रतीके',
    uniqueLoreTitle: 'परंपरा, इतिहास व वैशिष्ट्ये',
    authenticTechniqueGuide: 'अस्सल कला तंत्र मार्गदर्शक',
    masteringArtStep: 'कलेमध्ये प्रावीण्य:',
    stepLabel: 'टप्पा',
    proTipLabel: 'महत्त्वाची टीप',
    secondaryCraftsLabel: 'इतर प्रादेशिक हस्तकला',
    zoneLabel: 'विभाग',
    capitalLabel: 'राजधानी',
    zoneEast: 'पूर्व भारत',
    zoneSouth: 'दक्षिण भारत',
    zoneWest: 'पश्चिम भारत',
    zoneNorth: 'उत्तर भारत',
    zoneCentral: 'मध्य भारत',
    zoneNE: 'ईशान्य भारत',
    zoneAll: 'संपूर्ण भारत (२८)',

    marketplaceTag: '१००% जीआय-प्रमाणित मूळ कलाकृती आणि ८५% थेट कारागीर मोबदला',
    cartBtn: 'कार्ट',
    allArtForms: 'सर्व कला प्रकार',
    directPayoutNotice: '८५% थेट कारागीर मोबदला हमी',
    priceLabel: 'किंमत',
    giCertifiedBadge: 'जीआय प्रमाणित',
    emptyCartNotice: 'तुमची कार्ट रिकामी आहे.',
    qtyLabel: 'प्रमाण',
    eachLabel: 'प्रत्येकी',
    totalAmountLabel: 'एकूण रक्कम',
    directPayoutGuaranteeText: '✓ ८५% थेट रक्कम प्रमाणित कारागिराकडे हस्तांतरित',
    orderSuccessTitle: 'ऑर्डर यशस्वीरीत्या नोंदवली गेली!',
    orderSuccessMessage: 'भारतीय हस्तकलेचा सन्मान केल्याबद्दल धन्यवाद. ८५% रक्कम मुख्य कारागिराला पाठवली गेली आहे.',
    continueExploringBtn: 'खरेदी सुरू ठेवा',
    addNewListingTitle: 'वारसा कलाकृती सूचीबद्ध करा',

    verifiedGiArtisan: 'सत्यापित जीआय कारागीर',
    requestGiArtisanBadge: 'जीआय कारागीर बॅजची विनंती करा',
    memberSince: 'सदस्यता वर्ष',
    planTitle: 'प्लॅन',
    craftSpecialtyTitle: 'कलेतील विशेष नैपुण्य',
    accessPinTitle: 'प्रवेश पिन (PIN)',
    protectedPin: 'सुरक्षित',
    setPin: 'पिन सेट करा',
    tabOverview: 'कारागीर विहंगावलोकन',
    tabSecurity: 'पासवर्ड प्रवेश',
    tabEvaluations: 'कलालेंस कलाकृती',
    tabMasterclasses: 'माझे मास्टरक्लास',
    tabBadges: 'बॅज व सन्मान',
    tabStudio: 'कारागीर स्टुडिओ पोर्टल',
    tabSettings: 'खाते सेटिंग्ज व गोपनीयता',
    artisanPortfolioTitle: 'कारागीर पोर्टफोलिओ व वंशपरंपरा',
    artisanPortfolioSubtitle: 'तुमच्या प्रमाणित कला परंपरांचे आणि प्रादेशिक वारशाचे अधिकृत सादरीकरण.',
    editProfileBtn: 'प्रोफाइल संपादित करा',
    primaryArtTraditionLabel: 'मुख्य कला परंपरा',
    stateAffiliationLabel: 'राज्य संलग्नता',
    membershipLevelLabel: 'सदस्यत्व स्तर',
    giStatusLabel: 'जीआय प्रमाणीकरण स्थिती',
    quickHubsTitle: 'कलाव्हर्स अनुभव केंद्रे',
    updatePhotoBtn: 'फोटो बदला',
    crossDevicePassTitle: 'क्रॉस-डिव्हाइस पासवर्ड',
    crossDevicePassSub: 'कोणत्याही डिव्हाइसवर सुरक्षितपणे लॉगिन करण्यासाठी तुमचा प्रवेश पिन सेट करा.',
    fairTradeGuaranteeTitle: '८५% थेट व वाजवी मोबदला हमी',
    fairTradeGuaranteeSub: 'कलाव्हर्स शोषणमुक्त अर्थव्यवस्थेवर कार्य करते. कारागिरांना प्रत्येक कलाकृती विक्रीवर ८५% थेट मिळतात.',
    readEthicalCharter: 'आमची नैतिक नियमावली वाचा →',
    editProfileModalTitle: 'सांस्कृतिक प्रोफाइल संपादन',
    fullNameLabel: 'पूर्ण नाव',
    culturalRoleLabel: 'सांस्कृतिक भूमिका',
    stateRegionLabel: 'मूळ राज्य / परिसर',
    craftSpecialtyLabel: 'कौशल्य / गुरु परंपरा',
    bioStoryLabel: 'परिचय व परंपरेची गोष्ट',
    saveChangesBtn: 'बदल जतन करा',
    cancelBtn: 'रद्द करा',
    changePhotoTitle: 'फोटो निवडा',
    uploadDeviceTab: 'डिव्हाइसवरून अपलोड करा',
    culturalMotifsTab: 'पारंपरिक नक्षीकाम',
    imageUrlTab: 'प्रतिमा लिंक (URL)',
    clickOrDragPhoto: 'प्रतिमा निवडण्यासाठी क्लिक करा किंवा येथे ड्रॅग करा',
    savePhotoBtn: 'फोटो जतन करा',
    resetDefaultBtn: 'डीफॉल्टवर रीसेट करा',
    requestBadgeTitle: 'जीआय कारागीर पडताळणीसाठी अर्ज',
    requestBadgeSub: 'प्रमाणित भौगोलिक मानांकन दर्जा तुम्हाला थेट विक्री आणि ८५% हमी मोबदला मिळवून देतो.',
    giCardInputLabel: 'कारागीर कार्ड क्रमांक / जीआय संदर्भ',
    craftLineageLabel: 'पिढ्यान्‌पिढ्या चालत आलेल्या परंपरेचा तपशील',
    submitRequestBtn: 'पडताळणीसाठी पाठवा',
    zeroDataPledgeTitle: 'शून्य डेटा-विक्री वचनबद्धता',
    zeroDataPledgeSub: 'तुमचे कला स्कॅन केवळ तुमच्या ब्राउझरमध्ये सुरक्षित राहतात. आम्ही कधीही डेटा विकत नाही.',
    sovereignStorageTitle: 'स्वायत्त सांस्कृतिक डेटा साठवण',
    sovereignStorageSub: 'तुम्ही जे काही शिकता वा तयार करता ते पूर्णतः तुमच्या मालकीचे असते.',
    downloadDataBtn: 'माहिती डाउनलोड करा (JSON)',
    resetAccountBtn: 'स्थानिक कॅश रीसेट करा',
    scanNewArtworkBtn: 'कलालेंसने कला स्कॅन करा',
    browseMasterclassesBtn: 'सर्व वर्ग पहा',

    kalaTourTag: '१-दिवसीय कला यात्रा आणि कारागीर भेट',
    trailDurationBadgeTop: 'यात्रा कालावधी',
    trailDurationBadgeSub: '१-दिवसीय एकल मार्ग',
    tabCuratedTrails: 'निवडक १-दिवसीय वारसा यात्रा',
    tabCustomAiTrail: 'कस्टम १-दिवसीय AI यात्रा जनरेटर',
    selectCraftTrailTitle: '१-दिवसीय कला यात्रा निवडा',
    dayFocusLabel: '१-दिवसीय लक्ष',
    oneDayRouteLabel: '१-दिवसीय मार्ग',
    themeLabel: 'संकल्पना (थीम)',
    kalaYatriConciergeTitle: 'कलायात्री AI (KalaYatri) • मार्गदर्शक',
    kalaYatriConciergeDesc: 'तुमच्या गरजेनुसार ही १-दिवसीय यात्रा सानुकूलित करा आणि ८५% थेट मोबदल्यासह अधिकृत पास बुक करा.',
    consultKalaYatriBtn: 'कलायात्रीशी चर्चा करा व बुक करा',
    trailHighlightsTitle: 'यात्रेची प्रमुख वैशिष्ट्ये',
    stepScheduleTitle: '१-दिवसीय वेळापत्रक (सकाळ ते संध्याकाळ)',
    masterExperienceLabel: 'मुख्य कारागीर अनुभव',
    insiderTipLabel: 'महत्त्वाची अंतर्गत टीप',
    guildEtiquetteTitle: 'कारागीर भेट शिष्टाचार',
    customizeTrailTitle: '१-दिवसीय यात्रा सानुकूलित करा',
    heritageCityLabel: 'वारसा शहर / जिल्हा',
    heritageCityPlaceholder: 'उदा. डहाणू, पैठण, जयपूर, पुरी...',
    durationNotice: 'कालावधी: १-दिवसीय एकल दिवस अनुभव',
    dayBudgetLabel: 'दैनिक बजेट (रुपये)',
    paceRelaxed: 'शांत (२ थांबे)',
    paceModerate: 'मध्यम (३ थांबे)',
    paceIntense: 'सखोल अनुभव (४ थांबे)',
    generatingTrailText: '१-दिवसीय स्टुडिओ नकाशा तयार होत आहे...',
    customTrailGeneratedBadge: '✓ कस्टम १-दिवसीय यात्रा तयार झाली',
    aiTrailReadyTitle: 'AI १-दिवसीय यात्रा तयार होण्यासाठी सज्ज',
    aiTrailReadyDesc: 'वेळापत्रक आणि स्टुडिओ माहितीसह संपूर्ण योजना बनवण्यासाठी डावीकडे तपशील निवडा.',
    timeSlotMorning: 'सकाळ',
    timeSlotAfternoon: 'दुपार',
    timeSlotEvening: 'संध्याकाळ'
  },

  gu: {
    stateExplorerTag: '28 ભારતીય રાજ્યો અને 8 કેન્દ્રશાસિત પ્રદેશો',
    stateExplorerBadgeTop: 'જીઆઈ પ્રમાણિત વારસો',
    stateExplorerBadgeSub: '28 રાજ્યોની હસ્તકલા સૂચિ',
    backToStates: '← બધા રાજ્યો અને કલા પરંપરાઓ પર પાછા જાઓ',
    giAuthenticCertified: 'જીઆઈ (GI) અધિકૃતતા પ્રમાણિત',
    stateOf: 'રાજ્ય:',
    generateTrailForState: 'માટે 1-દિવસીય શિલ્પ યાત્રા બનાવો',
    consultGuruOnArt: 'કલા પર ગુરુની સલાહ લો',
    giRegistryEmblem: '📜 જીઆઈ રજિસ્ટ્રી નંબર પ્રમાણિત વારસો',
    naturalMaterialsTitle: 'કુદરતી અને ખનિજ સામગ્રી',
    sacredMotifsTitle: 'પવિત્ર પ્રતીકો અને આકૃતિઓ',
    uniqueLoreTitle: 'પરંપરા, ઇતિહાસ અને વિશિષ્ટ તથ્યો',
    authenticTechniqueGuide: 'અધિકૃત કલા તકનીક માર્ગદર્શિકા',
    masteringArtStep: 'કલામાં નિપુણતા:',
    stepLabel: 'પગલું',
    proTipLabel: 'વિશેષ સલાહ',
    secondaryCraftsLabel: 'અન્ય પ્રાદેશિક હસ્તકલા',
    zoneLabel: 'વિસ્તાર',
    capitalLabel: 'પાટનગર',
    zoneEast: 'પૂર્વ ભારત',
    zoneSouth: 'દક્ષિણ ભારત',
    zoneWest: 'પશ્ચિમ ભારત',
    zoneNorth: 'ઉત્તર ભારત',
    zoneCentral: 'મધ્ય ભારત',
    zoneNE: 'પૂર્વોત્તર ભારત',
    zoneAll: 'સમગ્ર ભારત (28)',

    marketplaceTag: '100% જીઆઈ પ્રમાણિત મૂળ કૃતિઓ અને 85% સીધું કારીગર ચુકવણું',
    cartBtn: 'કાર્ટ',
    allArtForms: 'બધી કલા શૈલીઓ',
    directPayoutNotice: '85% સીધું કારીગર ચુકવણું ગેરંટીડ',
    priceLabel: 'કિંમત',
    giCertifiedBadge: 'જીઆઈ પ્રમાણિત',
    emptyCartNotice: 'તમારી કાર્ટ ખાલી છે.',
    qtyLabel: 'જથ્થો',
    eachLabel: 'પ્રત્યેક',
    totalAmountLabel: 'કુલ રકમ',
    directPayoutGuaranteeText: '✓ 85% સીધી રકમ પ્રમાણિત કારીગરને મોકલવામાં આવી',
    orderSuccessTitle: 'ઓર્ડર સફળતાપૂર્વક પૂર્ણ થયો!',
    orderSuccessMessage: 'ભારતીય વારસાને સમર્થન આપવા બદલ આભાર. 85% રકમ મુખ્ય કારીગરને ટ્રાન્સફર કરવામાં આવી છે.',
    continueExploringBtn: 'શોધ ચાલુ રાખો',
    addNewListingTitle: 'વારસા કલા યાદીમાં ઉમેરો',

    verifiedGiArtisan: 'પ્રમાણિત જીઆઈ કારીગર',
    requestGiArtisanBadge: 'જીઆઈ કારીગર બેજ માટે વિનંતી',
    memberSince: 'જોડાવાનું વર્ષ',
    planTitle: 'પ્લાન',
    craftSpecialtyTitle: 'કલા વિશેષતા',
    accessPinTitle: 'એક્સેસ પિન (PIN)',
    protectedPin: 'સુરક્ષિત',
    setPin: 'પિન સેટ કરો',
    tabOverview: 'કારીગર વિહંગાવલોકન',
    tabSecurity: 'પાસવર્ડ એક્સેસ',
    tabEvaluations: 'કલાલેન્સ કલાકૃતિઓ',
    tabMasterclasses: 'મારા માસ્ટરક્લાસ',
    tabBadges: 'બેજ અને સન્માન',
    tabStudio: 'કારીગર સ્ટુડિયો પોર્ટલ',
    tabSettings: 'ખાતા સેટિંગ્સ અને ગોપનીયતા',
    artisanPortfolioTitle: 'કારીગર પોર્ટફોલિયો અને પરંપરા',
    artisanPortfolioSubtitle: 'તમારી અધિકૃત પરંપરાઓ અને પ્રાદેશિક કલાનું પ્રદર્શન.',
    editProfileBtn: 'પ્રોફાઇલ સંપાદિત કરો',
    primaryArtTraditionLabel: 'મુખ્ય કલા પરંપરા',
    stateAffiliationLabel: 'રાજ્ય જોડાણ',
    membershipLevelLabel: 'સભ્યપદ સ્તર',
    giStatusLabel: 'જીઆઈ ચકાસણી સ્થિતિ',
    quickHubsTitle: 'કલાવર્સ અનુભવ કેન્દ્રો',
    updatePhotoBtn: 'ફોટો બદલો',
    crossDevicePassTitle: 'ક્રોસ-ડિવાઇસ પાસવર્ડ',
    crossDevicePassSub: 'કોઈપણ ઉપકરણ પર લોગિન કરવા માટે એક્સેસ પિન સેટ કરો.',
    fairTradeGuaranteeTitle: '85% વાજબી વ્યાપાર ચુકવણી ગેરંટી',
    fairTradeGuaranteeSub: 'કલાવર્સ શોષણમુક્ત અર્થતંત્ર પર કામ કરે છે. કારીગરોને સીધા 85% મળે છે.',
    readEthicalCharter: 'અમારી નૈતિક નીતિ વાંચો →',
    editProfileModalTitle: 'સાંસ્કૃતિક પ્રોફાઇલ સંપાદિત કરો',
    fullNameLabel: 'પૂરું નામ',
    culturalRoleLabel: 'સાંસ્કૃતિક ભૂમિકા',
    stateRegionLabel: 'મૂળ રાજ્ય / પ્રદેશ',
    craftSpecialtyLabel: 'કલા વિશેષતા / ગુરુ પરંપરા',
    bioStoryLabel: 'પરિચય અને પરંપરા વાર્તા',
    saveChangesBtn: 'ફેરફારો સાચવો',
    cancelBtn: 'રદ કરો',
    changePhotoTitle: 'ફોટો પસંદ કરો',
    uploadDeviceTab: 'ઉપકરણમાંથી અપલોડ કરો',
    culturalMotifsTab: 'પરંપરાગત ભાત',
    imageUrlTab: 'ઇમેજ લિંક (URL)',
    clickOrDragPhoto: 'છબી પસંદ કરવા ક્લિક કરો અથવા અહીં ખેંચો',
    savePhotoBtn: 'ફોટો સાચવો',
    resetDefaultBtn: 'રીસેટ કરો',
    requestBadgeTitle: 'જીઆઈ કારીગર ચકાસણી માટે અરજી',
    requestBadgeSub: 'જીઆઈ માન્યતા સીધું વેચાણ અને 85% ગેરંટીડ ચુકવણી સુનિશ્ચિત કરે છે.',
    giCardInputLabel: 'કારીગર કાર્ડ નંબર / સંદર્ભ',
    craftLineageLabel: 'પેઢી દર પેઢી ચાલતી પરંપરા વિગતો',
    submitRequestBtn: 'ચકાસણી માટે મોકલો',
    zeroDataPledgeTitle: 'શૂન્ય ડેટા-વેચાણ પ્રતિજ્ઞા',
    zeroDataPledgeSub: 'તમારો ડેટા ફક્ત તમારા બ્રાઉઝરમાં સુરક્ષિત રહે છે. અમે ડેટા વેચતા નથી.',
    sovereignStorageTitle: 'સાર્વભૌમ ડેટા સંગ્રહ',
    sovereignStorageSub: 'તમે જે બનાવો છો તે પૂર્ણપણે તમારું છે.',
    downloadDataBtn: 'ડેટા ડાઉનલોડ કરો (JSON)',
    resetAccountBtn: 'સ્થાનિક ડેટા રીસેટ કરો',
    scanNewArtworkBtn: 'નવી કલાકૃતિ સ્કેન કરો',
    browseMasterclassesBtn: 'બધા વર્ગો જુઓ',

    kalaTourTag: '1-દિવસીય કલા યાત્રાઓ અને સ્ટુડિયો મુલાકાત',
    trailDurationBadgeTop: 'યાત્રા સમયગાળો',
    trailDurationBadgeSub: '1-દિવસીય એકલ માર્ગો',
    tabCuratedTrails: 'પસંદ કરેલ 1-દિવસીય યાત્રાઓ',
    tabCustomAiTrail: 'કસ્ટમ 1-દિવસીય AI યાત્રા જનરેટર',
    selectCraftTrailTitle: '1-દિવસીય શિલ્પ યાત્રા પસંદ કરો',
    dayFocusLabel: '1-દિવસીય ધ્યાન',
    oneDayRouteLabel: '1-દિવસીય માર્ગ',
    themeLabel: 'થીમ',
    kalaYatriConciergeTitle: 'કલાયાત્રી AI (KalaYatri) • માર્ગદર્શક',
    kalaYatriConciergeDesc: 'તમારી જરૂરિયાતો અનુસાર આ 1-દિવસીય યાત્રા કસ્ટમાઇઝ કરો અને 85% ચુકવણી સાથે પાસ બુક કરો.',
    consultKalaYatriBtn: 'કલાયાત્રી સાથે ચર્ચા કરો અને બુક કરો',
    trailHighlightsTitle: 'યાત્રાના મુખ્ય આકર્ષણો',
    stepScheduleTitle: '1-દિવસીય સમયપત્રક (સવારથી સાંજ)',
    masterExperienceLabel: 'મુખ્ય કારીગર અનુભવ',
    insiderTipLabel: 'અંદરની ખાસ સલાહ',
    guildEtiquetteTitle: 'કારીગર મુલાકાત શિષ્ટાચાર',
    customizeTrailTitle: '1-દિવસીય યાત્રા કસ્ટમાઇઝ કરો',
    heritageCityLabel: 'વારસા શહેર / જિલ્લો',
    heritageCityPlaceholder: 'દા.ત. કચ્છ, પાટણ, જયપુર, અમદાવાદ...',
    durationNotice: 'સમયગાળો: 1-દિવસીય સંપૂર્ણ અનુભવ',
    dayBudgetLabel: 'દૈનિક બજેટ (રૂપિયા)',
    paceRelaxed: 'શાંતિપૂર્ણ (2 સ્ટોપ)',
    paceModerate: 'મધ્યમ (3 સ્ટોપ)',
    paceIntense: 'ઊંડાણપૂર્વક (4 સ્ટોપ)',
    generatingTrailText: '1-દિવસીય નકશો તૈયાર થઈ રહ્યો છે...',
    customTrailGeneratedBadge: '✓ કસ્ટમ 1-દિવસીય યાત્રા તૈયાર થઈ',
    aiTrailReadyTitle: 'AI 1-દિવસીય યાત્રા તૈયાર થવા માટે સજ્જ',
    aiTrailReadyDesc: 'સ્ટુડિયો મુલાકાત અને સમયપત્રક સાથે યોજના બનાવવા ડાબી બાજુ પસંદગી કરો.',
    timeSlotMorning: 'સવાર',
    timeSlotAfternoon: 'બપોર',
    timeSlotEvening: 'સાંજ'
  },

  kn: {
    stateExplorerTag: '28 ಭಾರತೀಯ ರಾಜ್ಯಗಳು ಮತ್ತು 8 ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು',
    stateExplorerBadgeTop: 'ಜಿಐ ಮಾನ್ಯತೆ ಪಡೆದ ಪರಂಪರೆ',
    stateExplorerBadgeSub: '28 ರಾಜ್ಯಗಳ ಕರಕುಶಲ ಪಟ್ಟಿ',
    backToStates: '← ಎಲ್ಲಾ ರಾಜ್ಯಗಳು ಮತ್ತು ಕಲೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
    giAuthenticCertified: 'ಜಿಐ (GI) ದೃಢೀಕೃತ ಪರಂಪರೆ',
    stateOf: 'ರಾಜ್ಯ:',
    generateTrailForState: 'ಗಾಗಿ 1-ದಿನದ ಕರಕುಶಲ ಪ್ರವಾಸ ರಚಿಸಿ',
    consultGuruOnArt: 'ಕಲೆಯ ಕುರಿತು ಗುರುಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ',
    giRegistryEmblem: '📜 ಜಿಐ ನೋಂದಣಿ ಸಂಖ್ಯೆ ದೃಢೀಕೃತ ಪರಂಪರೆ',
    naturalMaterialsTitle: 'ನೈಸರ್ಗಿಕ ಮತ್ತು ಖನಿಜ ವಸ್ತುಗಳು',
    sacredMotifsTitle: 'ಪವಿತ್ರ ಲಾಂಛನಗಳು ಮತ್ತು ಚಿಹ್ನೆಗಳು',
    uniqueLoreTitle: 'ಪರಂಪರೆ, ಇತಿಹಾಸ ಮತ್ತು ವೈಶಿಷ್ಟ್ಯಗಳು',
    authenticTechniqueGuide: 'ಅಧಿಕೃತ ಕಲಾ ತಂತ್ರ ಮಾರ್ಗದರ್ಶಿ',
    masteringArtStep: 'ಕಲೆಯಲ್ಲಿ ನೈಪುಣ್ಯತೆ:',
    stepLabel: 'ಹಂತ',
    proTipLabel: 'ಮುಖ್ಯ ಸಲಹೆ',
    secondaryCraftsLabel: 'ಇತರ ಪ್ರಾದೇಶಿಕ ಕರಕುಶಲ ಕಲೆಗಳು',
    zoneLabel: 'ವಲಯ',
    capitalLabel: 'ರಾಜಧಾನಿ',
    zoneEast: 'ಪೂರ್ವ ಭಾರತ',
    zoneSouth: 'ದಕ್ಷಿಣ ಭಾರತ',
    zoneWest: 'ಪಶ್ಚಿಮ ಭಾರತ',
    zoneNorth: 'ಉತ್ತರ ಭಾರತ',
    zoneCentral: 'ಮಧ್ಯ ಭಾರತ',
    zoneNE: 'ಈಶಾನ್ಯ ಭಾರತ',
    zoneAll: 'ಸಮಗ್ರ ಭಾರತ (28)',

    marketplaceTag: '100% ಜಿಐ ಪ್ರಮಾಣೀಕೃತ ಕಲೆಗಳು & 85% ನೇರ ಕುಶಲಕರ್ಮಿ ಪಾವತಿ',
    cartBtn: 'ಕಾರ್ಟ್',
    allArtForms: 'ಎಲ್ಲಾ ಕಲಾ ಪ್ರಕಾರಗಳು',
    directPayoutNotice: '85% ನೇರ ಕುಶಲಕರ್ಮಿ ಪಾವತಿ ಖಾತರಿ',
    priceLabel: 'ಬೆಲೆ',
    giCertifiedBadge: 'ಜಿಐ ಪ್ರಮಾಣೀಕೃತ',
    emptyCartNotice: 'ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ.',
    qtyLabel: 'ಪ್ರಮಾಣ',
    eachLabel: 'ಪ್ರತಿಯೊಂದಕ್ಕೆ',
    totalAmountLabel: 'ಒಟ್ಟು ಮೊತ್ತ',
    directPayoutGuaranteeText: '✓ 85% ನೇರ ಪಾವತಿ ಪರಿಶೀಲಿಸಿದ ಕುಶಲಕರ್ಮಿಗೆ ವರ್ಗಾಯಿಸಲಾಗಿದೆ',
    orderSuccessTitle: 'ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ!',
    orderSuccessMessage: 'ಭಾರತೀಯ ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲತೆಯನ್ನು ಬೆಂಬಲಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. 85% ಮೊತ್ತ ಮುಖ್ಯ ಕುಶಲಕರ್ಮಿಗೆ ತಲುಪಿದೆ.',
    continueExploringBtn: 'ಅನ್ವೇಷಣೆ ಮುಂದುವರಿಸಿ',
    addNewListingTitle: 'ಕಲಾಕೃತಿಯನ್ನು ಪಟ್ಟಿ ಮಾಡಿ',

    verifiedGiArtisan: 'ದೃಢೀಕೃತ ಜಿಐ ಕುಶಲಕರ್ಮಿ',
    requestGiArtisanBadge: 'ಜಿಐ ಬ್ಯಾಡ್ಜ್‌ಗಾಗಿ ವಿನಂತಿಸಿ',
    memberSince: 'ಸದಸ್ಯತ್ವ ವರ್ಷ',
    planTitle: 'ಯೋಜನೆ',
    craftSpecialtyTitle: 'ಕಲಾ ಪರಿಣತಿ',
    accessPinTitle: 'ಪ್ರವೇಶ ಪಿನ್ (PIN)',
    protectedPin: 'ಸುರಕ್ಷಿತವಾಗಿದೆ',
    setPin: 'ಪಿನ್ ಹೊಂದಿಸಿ',
    tabOverview: 'ಕುಶಲಕರ್ಮಿ ಅವಲೋಕನ',
    tabSecurity: 'ಪಾಸ್‌ವರ್ಡ್ ಪ್ರವೇಶ',
    tabEvaluations: 'ಕಲಾಲೈನ್ಸ್ ಕಲಾಕೃತಿಗಳು',
    tabMasterclasses: 'ನನ್ನ ತರಗತಿಗಳು',
    tabBadges: 'ಬ್ಯಾಡ್ಜ್‌ಗಳು ಮತ್ತು ಗೌರವಗಳು',
    tabStudio: 'ಕುಶಲಕರ್ಮಿ ಸ್ಟುಡಿಯೋ ಪೋರ್ಟಲ್',
    tabSettings: 'ಖಾತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಗೌಪ್ಯತೆ',
    artisanPortfolioTitle: 'ಕುಶಲಕರ್ಮಿ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಮತ್ತು ಪರಂಪರೆ',
    artisanPortfolioSubtitle: 'ನಿಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳು ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಪರಂಪರೆಯ ಅಧಿಕೃತ ಪ್ರದರ್ಶನ.',
    editProfileBtn: 'ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ',
    primaryArtTraditionLabel: 'ಮುಖ್ಯ ಕಲಾ ಸಂಪ್ರದಾಯ',
    stateAffiliationLabel: 'ರಾಜ್ಯ ಸಂಪರ್ಕ',
    membershipLevelLabel: 'ಸದಸ್ಯತ್ವ ಮಟ್ಟ',
    giStatusLabel: 'ಜಿಐ ಪರಿಶೀಲನೆ ಸ್ಥಿತಿ',
    quickHubsTitle: 'ಕಲಾವರ್ಸ್ ಅನುಭವ ಕೇಂದ್ರಗಳು',
    updatePhotoBtn: 'ಫೋಟೋ ಬದಲಾಯಿಸಿ',
    crossDevicePassTitle: 'ಸಾಧನಗಳ ನಡುವಿನ ಪಾಸ್‌ವರ್ಡ್',
    crossDevicePassSub: 'ಯಾವುದೇ ಸಾಧನದಲ್ಲಿ ಲಾಗಿನ್ ಆಗಲು ನಿಮ್ಮ ಪ್ರವೇಶ ಪಿನ್ ಹೊಂದಿಸಿ.',
    fairTradeGuaranteeTitle: '85% ನ್ಯಾಯಯುತ ನೇರ ಪಾವತಿ ಖಾತರಿ',
    fairTradeGuaranteeSub: 'ಕಲಾವರ್ಸ್ ಯಾವುದೇ ಶೋಷಣೆಯಿಲ್ಲದ ಆರ್ಥಿಕತೆಯನ್ನು ಹೊಂದಿದೆ. ಕುಶಲಕರ್ಮಿಗಳು ನೇರವಾಗಿ 85% ಪಡೆಯುತ್ತಾರೆ.',
    readEthicalCharter: 'ನಮ್ಮ ನೀತಿ ಸಂಹಿತೆಯನ್ನು ಓದಿ →',
    editProfileModalTitle: 'ಸಾಂಸ್ಕೃತಿಕ ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ',
    fullNameLabel: 'ಪೂರ್ಣ ಹೆಸರು',
    culturalRoleLabel: 'ಸಾಂಸ್ಕೃತಿಕ ಪಾತ್ರ',
    stateRegionLabel: 'ಮೂಲ ರಾಜ್ಯ / ಪ್ರದೇಶ',
    craftSpecialtyLabel: 'ಕಲಾ ನೈಪುಣ್ಯ / ಗುರು ಪರಂಪರೆ',
    bioStoryLabel: 'ಪರಿಚಯ ಮತ್ತು ಕಥೆ',
    saveChangesBtn: 'ಉಳಿಸಿ',
    cancelBtn: 'ರದ್ದುಮಾಡಿ',
    changePhotoTitle: 'ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿ',
    uploadDeviceTab: 'ಸಾಧನದಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    culturalMotifsTab: 'ಸಾಂಪ್ರದಾಯಿಕ ವಿನ್ಯಾಸಗಳು',
    imageUrlTab: 'ಚಿತ್ರ ಲಿಂಕ್ (URL)',
    clickOrDragPhoto: 'ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಇಲ್ಲಿ ಎಳೆಯಿರಿ',
    savePhotoBtn: 'ಫೋಟೋ ಉಳಿಸಿ',
    resetDefaultBtn: 'ಮರುಹೊಂದಿಸಿ',
    requestBadgeTitle: 'ಜಿಐ ಕುಶಲಕರ್ಮಿ ಪರಿಶೀಲನೆಗಾಗಿ ಅರ್ಜಿ',
    requestBadgeSub: 'ಜಿಐ ಸ್ಥಾನಮಾನವು ನೇರ ಮಾರಾಟ ಮತ್ತು 85% ಖಾತರಿ ಪಾವತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ.',
    giCardInputLabel: 'ಕುಶಲಕರ್ಮಿ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ / ಜಿಐ ಉಲ್ಲೇಖ',
    craftLineageLabel: 'ಪೀಳಿಗೆಯ ಕಲಾ ವಿವರಗಳು',
    submitRequestBtn: 'ಪರಿಶೀಲನೆಗಾಗಿ ಸಲ್ಲಿಸಿ',
    zeroDataPledgeTitle: 'ಶೂನ್ಯ ಡೇಟಾ ಮಾರಾಟ ಭರವಸೆ',
    zeroDataPledgeSub: 'ನಿಮ್ಮ ವಿವರಗಳು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಇರುತ್ತವೆ. ನಾವು ಡೇಟಾ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ.',
    sovereignStorageTitle: 'ಸ್ವತಂತ್ರ ಸಾಂಸ್ಕೃತಿಕ ಡೇಟಾ ಸಂಗ್ರಹ',
    sovereignStorageSub: 'ನೀವು ರಚಿಸುವ ಪ್ರತಿಯೊಂದೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮದೇ ಆಗಿರುತ್ತದೆ.',
    downloadDataBtn: 'ಡೇಟಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (JSON)',
    resetAccountBtn: 'ಕ್ಯಾಶ್ ಮರುಹೊಂದಿಸಿ',
    scanNewArtworkBtn: 'ಹೊಸ ಕಲೆಯನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
    browseMasterclassesBtn: 'ಎಲ್ಲಾ ತರಗತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ',

    kalaTourTag: '1-ದಿನದ ಸಮಗ್ರ ಕಲಾ ಪ್ರವಾಸಗಳು ಮತ್ತು ಭೇಟಿ',
    trailDurationBadgeTop: 'ಪ್ರವಾಸದ ಅವಧಿ',
    trailDurationBadgeSub: '1-ದಿನದ ಏಕೈಕ ಮಾರ್ಗಗಳು',
    tabCuratedTrails: 'ಆಯ್ಕೆಮಾಡಿದ 1-ದಿನದ ಪರಂಪರೆ ಪ್ರವಾಸಗಳು',
    tabCustomAiTrail: 'ಕಸ್ಟಮ್ 1-ದಿನದ AI ಪ್ರವಾಸ ಜನರೇಟರ್',
    selectCraftTrailTitle: '1-ದಿನದ ಕರಕುಶಲ ಪ್ರವಾಸ ಆಯ್ಕೆಮಾಡಿ',
    dayFocusLabel: '1-ದಿನದ ಗಮನ',
    oneDayRouteLabel: '1-ದಿನದ ಮಾರ್ಗ',
    themeLabel: 'ಥೀಮ್',
    kalaYatriConciergeTitle: 'ಕಲಾಯಾತ್ರಿ AI (KalaYatri) • ಮಾರ್ಗದರ್ಶಿ',
    kalaYatriConciergeDesc: 'ನಿಮ್ಮ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ 1-ದಿನದ ಪ್ರವಾಸವನ್ನು ರೂಪಿಸಿ ಮತ್ತು 85% ಪಾವತಿಯೊಂದಿಗೆ ಪಾಸ್‌ಗಳನ್ನು ಕಾಯ್ದಿರಿಸಿ.',
    consultKalaYatriBtn: 'ಕಲಾಯಾತ್ರಿಯೊಂದಿಗೆ ಚರ್ಚಿಸಿ ಕಾಯ್ದಿರಿಸಿ',
    trailHighlightsTitle: 'ಪ್ರವಾಸದ ಮುಖ್ಯಾಂಶಗಳು',
    stepScheduleTitle: '1-ದಿನದ ಹಂತ-ಹಂತದ ವೇಳಾಪಟ್ಟಿ (ಬೆಳಿಗ್ಗೆಯಿಂದ ಸಂಜೆ)',
    masterExperienceLabel: 'ಮುಖ್ಯ ಕುಶಲಕರ್ಮಿ ಅನುಭವ',
    insiderTipLabel: 'ವಿಶೇಷ ಆಂತರಿಕ ಸಲಹೆ',
    guildEtiquetteTitle: 'ಕುಶಲಕರ್ಮಿ ಭೇಟಿ ನಿಯಮಾವಳಿ',
    customizeTrailTitle: '1-ದಿನದ ಪ್ರವಾಸವನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ',
    heritageCityLabel: 'ಪರಂಪರೆ ನಗರ / ಜಿಲ್ಲೆ',
    heritageCityPlaceholder: 'ಉದಾ: ಚನ್ನಪಟ್ಟಣ, ಮೈಸೂರು, ಜೈಪುರ, ಮಧುರೈ...',
    durationNotice: 'ಅವಧಿ: 1-ದಿನದ ಏಕೈಕ ಅನುಭವ',
    dayBudgetLabel: 'ದಿನದ ಬಜೆಟ್ (ರೂಪಾಯಿ)',
    paceRelaxed: 'ಶಾಂತಿಯುತ (2 ನಿಲ್ದಾಣಗಳು)',
    paceModerate: 'ಮಧ್ಯಮ (3 ನಿಲ್ದಾಣಗಳು)',
    paceIntense: 'ಆಳವಾದ ಅನುಭವ (4 ನಿಲ್ದಾಣಗಳು)',
    generatingTrailText: '1-ದಿನದ ಸ್ಟುಡಿಯೋ ನಕ್ಷೆ ಸಿದ್ಧವಾಗುತ್ತಿದೆ...',
    customTrailGeneratedBadge: '✓ ಕಸ್ಟಮ್ 1-ದಿನದ ಪ್ರವಾಸ ರಚಿಸಲಾಗಿದೆ',
    aiTrailReadyTitle: 'AI 1-ದಿನದ ಪ್ರವಾಸ ಸಿದ್ಧಗೊಳ್ಳಲು ಸಿದ್ಧವಾಗಿದೆ',
    aiTrailReadyDesc: 'ಸ್ಟುಡಿಯೋ ಭೇಟಿ ಮತ್ತು ವೇಳಾಪಟ್ಟಿಯೊಂದಿಗೆ ಯೋಜನೆ ರೂಪಿಸಲು ವಿವರಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    timeSlotMorning: 'ಬೆಳಿಗ್ಗೆ',
    timeSlotAfternoon: 'ಮಧ್ಯಾಹ್ನ',
    timeSlotEvening: 'ಸಂಜೆ'
  },

  ml: {
    stateExplorerTag: '28 ഇന്ത്യൻ സംസ്ഥാനങ്ങളും 8 കേന്ദ്രഭരണ പ്രദേശങ്ങളും',
    stateExplorerBadgeTop: 'ഭൂപ്രദേശ സൂചിക പൈതൃകം',
    stateExplorerBadgeSub: '28 സംസ്ഥാനങ്ങളിലെ കരകൗശല വിവരണം',
    backToStates: '← എല്ലാ സംസ്ഥാനങ്ങളിലേക്കും കലകളിലേക്കും മടങ്ങുക',
    giAuthenticCertified: 'ഭൂപ്രദേശ സൂചിക (GI) അംഗീകൃതം',
    stateOf: 'സംസ്ഥാനം:',
    generateTrailForState: 'നായി 1-ദിവസത്തെ കരകൗശല യാത്ര നിർമ്മിക്കുക',
    consultGuruOnArt: 'കലയെക്കുറിച്ച് ഗുരുവുമായി സംസാരിക്കുക',
    giRegistryEmblem: '📜 ജി.ഐ രജിസ്ട്രി നമ്പർ അംഗീകൃത പൈതൃകം',
    naturalMaterialsTitle: 'പ്രകൃതിദത്ത ധാതു പദാർത്ഥങ്ങൾ',
    sacredMotifsTitle: 'പവിത്ര രൂപങ്ങളും ചിഹ്നങ്ങളും',
    uniqueLoreTitle: 'പാരമ്പര്യം, ചരിത്രം, പ്രത്യേകതകൾ',
    authenticTechniqueGuide: 'ആധികാരിക കലാ സാങ്കേതിക മാർഗ്ഗനിർദ്ദേശം',
    masteringArtStep: 'കലയിലെ പ്രാവീണ്യം:',
    stepLabel: 'ഘട്ടം',
    proTipLabel: 'പ്രത്യേക നിർദ്ദേശം',
    secondaryCraftsLabel: 'മറ്റു പ്രാദേശിക കരകൗശലങ്ങൾ',
    zoneLabel: 'മേഖല',
    capitalLabel: 'തലസ്ഥാനം',
    zoneEast: 'കിഴക്കൻ ഇന്ത്യ',
    zoneSouth: 'ദക്ഷിണേന്ത്യ',
    zoneWest: 'പടിഞ്ഞാറൻ ഇന്ത്യ',
    zoneNorth: 'വടക്കേ ഇന്ത്യ',
    zoneCentral: 'മധ്യ ഇന്ത്യ',
    zoneNE: 'വടക്കുകിഴക്കൻ ഇന്ത്യ',
    zoneAll: 'മുഴുവൻ ഇന്ത്യ (28)',

    marketplaceTag: '100% ജി.ഐ അംഗീകൃത തനത് കലകളും 85% നേരിട്ടുള്ള കലാകാര പ്രതിഫലവും',
    cartBtn: 'കാർട്ട്',
    allArtForms: 'എല്ലാ കലാ രൂപങ്ങളും',
    directPayoutNotice: 'കലാകാരന് 85% നേരിട്ടുള്ള തുക ഉറപ്പ്',
    priceLabel: 'വില',
    giCertifiedBadge: 'ജി.ഐ സർട്ടിഫൈഡ്',
    emptyCartNotice: 'നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്.',
    qtyLabel: 'അളവ്',
    eachLabel: 'ഒന്നിന്',
    totalAmountLabel: 'ആകെ തുക',
    directPayoutGuaranteeText: '✓ 85% തുക നേരിട്ട് കലാകാരന് കൈമാറി',
    orderSuccessTitle: 'ഓർഡർ വിജയകരമായി പൂർത്തിയായി!',
    orderSuccessMessage: 'പരമ്പരാഗത കരകൗശലത്തെ പിന്തുണച്ചതിന് നന്ദി. 85% തുക പ്രധാന കലാകാരന് നൽകിക്കഴിഞ്ഞു.',
    continueExploringBtn: 'തിരച്ചിൽ തുടരുക',
    addNewListingTitle: 'കലാസൃഷ്ടി ലിസ്റ്റ് ചെയ്യുക',

    verifiedGiArtisan: 'അംഗീകൃത ജി.ഐ കലാകാരൻ',
    requestGiArtisanBadge: 'ജി.ഐ ബാഡ്ജിനായി അപേക്ഷിക്കുക',
    memberSince: 'അംഗത്വ വർഷം',
    planTitle: 'പ്ലാൻ',
    craftSpecialtyTitle: 'പ്രത്യേക വൈദഗ്ധ്യം',
    accessPinTitle: 'ആക്സസ് പിൻ (PIN)',
    protectedPin: 'സുരക്ഷിതം',
    setPin: 'പിൻ സജ്ജീകരിക്കുക',
    tabOverview: 'കലാകാര അവലോകനം',
    tabSecurity: 'പാസ്‌വേഡ് ആക്സസ്',
    tabEvaluations: 'കലാലെൻസ് കലാസൃഷ്ടികൾ',
    tabMasterclasses: 'എന്റെ ക്ലാസുകൾ',
    tabBadges: 'ബാഡ്ജുകളും ബഹുമതികളും',
    tabStudio: 'സ്റ്റുഡിയോ പോർട്ടൽ',
    tabSettings: 'അക്കൗണ്ട് ക്രമീകരണങ്ങളും സ്വകാര്യതയും',
    artisanPortfolioTitle: 'കലാകാര പോർട്ട്ഫോളിയോ & പാരമ്പര്യം',
    artisanPortfolioSubtitle: 'നിങ്ങളുടെ അംഗീകൃത പാരമ്പര്യ കലകളുടെ ഔദ്യോഗിക പ്രദർശനം.',
    editProfileBtn: 'പ്രൊഫൈൽ മാറ്റുക',
    primaryArtTraditionLabel: 'പ്രധാന കലാ പാരമ്പര്യം',
    stateAffiliationLabel: 'സംസ്ഥാനം',
    membershipLevelLabel: 'അംഗത്വ നില',
    giStatusLabel: 'ജി.ഐ സ്ഥിരീകരണ നില',
    quickHubsTitle: 'കലാവേഴ്സ് അനുഭവ കേന്ദ്രങ്ങൾ',
    updatePhotoBtn: 'ഫോട്ടോ മാറ്റുക',
    crossDevicePassTitle: 'ക്രോസ്-ഡിവൈസ് പാസ്‌വേഡ്',
    crossDevicePassSub: 'ഏത് ഉപകരണത്തിലും ലോഗിൻ ചെയ്യാൻ പിൻ സജ്ജീകരിക്കുക.',
    fairTradeGuaranteeTitle: '85% നേരിട്ടുള്ള ന്യായമായ പ്രതിഫല ഗ്യാരണ്ടി',
    fairTradeGuaranteeSub: 'കലാവേഴ്സിൽ ചൂഷണമില്ലാത്ത സാമ്പത്തിക രീതിയാണ്. ഓരോ വിൽപനയിലും 85% കലാകാരന് ലഭിക്കുന്നു.',
    readEthicalCharter: 'ഞങ്ങളുടെ നയരേഖ വായിക്കുക →',
    editProfileModalTitle: 'പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക',
    fullNameLabel: 'മുഴുവൻ പേര്',
    culturalRoleLabel: 'സാംസ്കാരിക പങ്ക്',
    stateRegionLabel: 'സ്വദേശ സംസ്ഥാനം / പ്രദേശം',
    craftSpecialtyLabel: 'കലാ വൈദഗ്ധ്യം / ഗുരു പാരമ്പര്യം',
    bioStoryLabel: 'വിവരണം & ചരിത്രം',
    saveChangesBtn: 'സേവ് ചെയ്യുക',
    cancelBtn: 'റദ്ദാക്കുക',
    changePhotoTitle: 'ഫോട്ടോ തിരഞ്ഞെടുക്കുക',
    uploadDeviceTab: 'ഉപകരണത്തിൽ നിന്ന് അപ്‌ലോഡ് ചെയ്യുക',
    culturalMotifsTab: 'പാരമ്പര്യ രൂപങ്ങൾ',
    imageUrlTab: 'ഇമേജ് ലിങ്ക് (URL)',
    clickOrDragPhoto: 'ഇമേജ് തിരഞ്ഞെടുക്കാൻ ക്ലിക്ക് ചെയ്യുക അല്ലെങ്കിൽ ഇവിടെ വലിച്ചിടുക',
    savePhotoBtn: 'ഫോട്ടോ സേവ് ചെയ്യുക',
    resetDefaultBtn: 'റീസെറ്റ് ചെയ്യുക',
    requestBadgeTitle: 'ജി.ഐ കലാകാര അംഗീകാരത്തിനായുള്ള അപേക്ഷ',
    requestBadgeSub: 'ജി.ഐ പദവി നേരിട്ടുള്ള വിൽപ്പനയും 85% പ്രതിഫലവും ഉറപ്പാക്കുന്നു.',
    giCardInputLabel: 'ആർട്ടിസാൻ കാർഡ് നമ്പർ / ജി.ഐ റഫറൻസ്',
    craftLineageLabel: 'തലമുറ പാരമ്പര്യ വിവരങ്ങൾ',
    submitRequestBtn: 'അംഗീകാരത്തിനായി സമർപ്പിക്കുക',
    zeroDataPledgeTitle: 'ഡാറ്റ വിൽക്കില്ലെന്ന ഉറപ്പ്',
    zeroDataPledgeSub: 'നിങ്ങളുടെ വിവരങ്ങൾ ബ്രൗസറിൽ മാത്രമേ സൂക്ഷിക്കൂ. ഞങ്ങൾ ഡാറ്റ വിൽക്കാറില്ല.',
    sovereignStorageTitle: 'സ്വതന്ത്ര സാംസ്കാരിക ഡാറ്റ സൂക്ഷിപ്പ്',
    sovereignStorageSub: 'നിങ്ങൾ നിർമ്മിക്കുന്നതെല്ലാം പൂർണ്ണമായും നിങ്ങളുടേതാണ്.',
    downloadDataBtn: 'ഡാറ്റ ഡൗൺലോഡ് ചെയ്യുക (JSON)',
    resetAccountBtn: 'ലോക്കൽ ഡാറ്റ റീസെറ്റ് ചെയ്യുക',
    scanNewArtworkBtn: 'പുതിയ കല സ്കാൻ ചെയ്യുക',
    browseMasterclassesBtn: 'എല്ലാ ക്ലാസുകളും കാണുക',

    kalaTourTag: '1-ദിവസത്തെ സമഗ്ര കലാ യാത്രകൾ',
    trailDurationBadgeTop: 'യാത്രാ സമയം',
    trailDurationBadgeSub: '1-ദിവസത്തെ ഏകദിന റൂട്ടുകൾ',
    tabCuratedTrails: 'തിരഞ്ഞെടുത്ത 1-ദിവസ പൈതൃക യാത്രകൾ',
    tabCustomAiTrail: 'കസ്റ്റം 1-ദിവസ AI യാത്രാ നിർമ്മാണം',
    selectCraftTrailTitle: '1-ദിവസ കരകൗശല യാത്ര തിരഞ്ഞെടുക്കുക',
    dayFocusLabel: '1-ദിവസ ഫോക്കസ്',
    oneDayRouteLabel: '1-ദിവസ റൂട്ട്',
    themeLabel: 'വിഷയം (തീം)',
    kalaYatriConciergeTitle: 'കലയാത്രി AI (KalaYatri) • സഹായി',
    kalaYatriConciergeDesc: 'നിങ്ങളുടെ ഇഷ്ടാനുസരണം 1-ദിവസ യാത്ര രൂപകൽപ്പന ചെയ്യുകയും 85% തുക നൽകി പാസുകൾ ബുക്ക് ചെയ്യുകയും ചെയ്യുക.',
    consultKalaYatriBtn: 'കലയാത്രിയുമായി സംസാരിച്ച് ബുക്ക് ചെയ്യുക',
    trailHighlightsTitle: 'പ്രധാന സവിശേഷതകൾ',
    stepScheduleTitle: '1-ദിവസ സമയക്രമം (രാവിലെ മുതൽ വൈകുന്നേരം വരെ)',
    masterExperienceLabel: 'പ്രധാന കരകൗശല അനുഭവം',
    insiderTipLabel: 'പ്രത്യേക ഉൾക്കാഴ്ച നിർദ്ദേശം',
    guildEtiquetteTitle: 'സ്റ്റുഡിയോ സന്ദർശന മര്യാദകൾ',
    customizeTrailTitle: '1-ദിവസ യാത്ര തയ്യാറാക്കുക',
    heritageCityLabel: 'പൈതൃക നഗരം / ജില്ല',
    heritageCityPlaceholder: 'ഉദാ: ആറന്മുള, മധുര, ജയ്പൂർ...',
    durationNotice: 'ദൈർഘ്യം: 1-ദിവസത്തെ ഏകദിന അനുഭവം',
    dayBudgetLabel: 'ദിവസ ബജറ്റ് (രൂപ)',
    paceRelaxed: 'ശാന്തം (2 കേന്ദ്രങ്ങൾ)',
    paceModerate: 'മിതമായ (3 കേന്ദ്രങ്ങൾ)',
    paceIntense: 'ആഴത്തിലുള്ളത് (4 കേന്ദ്രങ്ങൾ)',
    generatingTrailText: '1-ദിവസ സ്റ്റുഡിയോ മാപ്പ് തയ്യാറാകുന്നു...',
    customTrailGeneratedBadge: '✓ കസ്റ്റം 1-ദിവസ യാത്ര തയ്യാറായി',
    aiTrailReadyTitle: 'AI 1-ദിവസ യാത്ര തയ്യാറാക്കാൻ ഒരുങ്ങിനിൽക്കുന്നു',
    aiTrailReadyDesc: 'കൃത്യമായ സമയക്രമത്തോടെ യാത്ര പ്ലാൻ ചെയ്യാൻ ഇടത് വശത്ത് വിവരങ്ങൾ നൽകുക.',
    timeSlotMorning: 'രാവിലെ',
    timeSlotAfternoon: 'ഉച്ചയ്ക്ക്',
    timeSlotEvening: 'വൈകുന്നേരം'
  },

  pa: {
    stateExplorerTag: '28 ਭਾਰਤੀ ਰਾਜ ਅਤੇ 8 ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼',
    stateExplorerBadgeTop: 'ਜੀ.ਆਈ. ਪ੍ਰਮਾਣਿਤ ਵਿਰਾਸਤ',
    stateExplorerBadgeSub: '28 ਰਾਜਾਂ ਦੀ ਦਸਤਕਾਰੀ ਸੂਚੀ',
    backToStates: '← ਸਾਰੇ ਰਾਜਾਂ ਅਤੇ ਕਲਾ ਪਰੰਪਰਾਵਾਂ ਵੱਲ ਵਾਪਸ ਜਾਓ',
    giAuthenticCertified: 'ਜੀ.ਆਈ. (GI) ਅਸਲੀਅਤ ਪ੍ਰਮਾਣਿਤ',
    stateOf: 'ਰਾਜ:',
    generateTrailForState: 'ਲਈ 1-ਦਿਨਾ ਕਲਾ ਯਾਤਰਾ ਬਣਾਓ',
    consultGuruOnArt: 'ਕਲਾ ਉੱਤੇ ਗੁਰੂ ਜੀ ਨਾਲ ਸਲਾਹ ਕਰੋ',
    giRegistryEmblem: '📜 ਜੀ.ਆਈ. ਰਜਿਸਟਰੀ ਨੰਬਰ ਪ੍ਰਮਾਣਿਤ ਵਿਰਾਸਤ',
    naturalMaterialsTitle: 'ਕੁਦਰਤੀ ਅਤੇ ਖਣਿਜ ਸਮੱਗਰੀ',
    sacredMotifsTitle: 'ਪਵਿੱਤਰ ਚਿੰਨ੍ਹ ਅਤੇ ਨਮੂਨੇ',
    uniqueLoreTitle: 'ਪਰੰਪਰਾ, ਇਤਿਹਾਸ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਤੱਥ',
    authenticTechniqueGuide: 'ਪ੍ਰਮਾਣਿਕ ਕਲਾ ਤਕਨੀਕ ਗਾਈਡ',
    masteringArtStep: 'ਕਲਾ ਵਿੱਚ ਮੁਹਾਰਤ:',
    stepLabel: 'ਕਦਮ',
    proTipLabel: 'ਵਿਸ਼ੇਸ਼ ਸੁਝਾਅ',
    secondaryCraftsLabel: 'ਹੋਰ ਖੇਤਰੀ ਦਸਤਕਾਰੀਆਂ',
    zoneLabel: 'ਖੇਤਰ',
    capitalLabel: 'ਰਾਜਧਾਨੀ',
    zoneEast: 'ਪੂਰਬੀ ਭਾਰਤ',
    zoneSouth: 'ਦੱਖਣੀ ਭਾਰਤ',
    zoneWest: 'ਪੱਛਮੀ ਭਾਰਤ',
    zoneNorth: 'ਉੱਤਰੀ ਭਾਰਤ',
    zoneCentral: 'ਮੱਧ ਭਾਰਤ',
    zoneNE: 'ਉੱਤਰ-ਪੂਰਬੀ ਭਾਰਤ',
    zoneAll: 'ਸਮੁੱਚਾ ਭਾਰਤ (28)',

    marketplaceTag: '100% ਜੀ.ਆਈ. ਪ੍ਰਮਾਣਿਤ ਕਲਾਕ੍ਰਿਤੀਆਂ ਅਤੇ 85% ਸਿੱਧਾ ਕਾਰੀਗਰ ਭੁਗਤਾਨ',
    cartBtn: 'ਕਾਰਟ',
    allArtForms: 'ਸਾਰੀਆਂ ਕਲਾ ਸ਼ੈਲੀਆਂ',
    directPayoutNotice: '85% ਸਿੱਧਾ ਕਾਰੀਗਰ ਭੁਗਤਾਨ ਗਾਰੰਟੀਸ਼ੁਦਾ',
    priceLabel: 'ਕੀਮਤ',
    giCertifiedBadge: 'ਜੀ.ਆਈ. ਪ੍ਰਮਾਣਿਤ',
    emptyCartNotice: 'ਤੁਹਾਡੀ ਕਾਰਟ ਖਾਲੀ ਹੈ।',
    qtyLabel: 'ਮਾਤਰਾ',
    eachLabel: 'ਪ੍ਰਤੀ',
    totalAmountLabel: 'ਕੁੱਲ ਰਕਮ',
    directPayoutGuaranteeText: '✓ 85% ਸਿੱਧਾ ਭੁਗਤਾਨ ਪ੍ਰਮਾਣਿਤ ਕਾਰੀਗਰ ਨੂੰ ਭੇਜਿਆ ਗਿਆ',
    orderSuccessTitle: 'ਆਰਡਰ ਸਫਲਤਾਪੂਰਵਕ ਪੂਰਾ ਹੋਇਆ!',
    orderSuccessMessage: 'ਭਾਰਤੀ ਵਿਰਾਸਤ ਦਾ ਸਮਰਥਨ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। 85% ਰਕਮ ਕਾਰੀਗਰ ਨੂੰ ਭੇਜ ਦਿੱਤੀ ਗਈ ਹੈ।',
    continueExploringBtn: 'ਖੋਜ ਜਾਰੀ ਰੱਖੋ',
    addNewListingTitle: 'ਕਲਾਕ੍ਰਿਤੀ ਸ਼ਾਮਲ ਕਰੋ',

    verifiedGiArtisan: 'ਪ੍ਰਮਾਣਿਤ ਜੀ.ਆਈ. ਕਾਰੀਗਰ',
    requestGiArtisanBadge: 'ਜੀ.ਆਈ. ਬੈਜ ਲਈ ਬੇਨਤੀ ਕਰੋ',
    memberSince: 'ਮੈਂਬਰਸ਼ਿਪ ਸਾਲ',
    planTitle: 'ਯੋਜਨਾ',
    craftSpecialtyTitle: 'ਕਲਾ ਮੁਹਾਰਤ',
    accessPinTitle: 'ਐਕਸੈਸ ਪਿੰਨ (PIN)',
    protectedPin: 'ਸੁਰੱਖਿਅਤ',
    setPin: 'ਪਿੰਨ ਸੈੱਟ ਕਰੋ',
    tabOverview: 'ਕਾਰੀਗਰ ਝਲਕ',
    tabSecurity: 'ਪਾਸਵਰਡ ਐਕਸੈਸ',
    tabEvaluations: 'ਕਲਾਲੈਂਸ ਕਲਾਕ੍ਰਿਤੀਆਂ',
    tabMasterclasses: 'ਮੇਰੀਆਂ ਮਾਸਟਰਕਲਾਸਾਂ',
    tabBadges: 'ਬੈਜ ਅਤੇ ਸਨਮਾਨ',
    tabStudio: 'ਕਾਰੀਗਰ ਸਟੂਡੀਓ ਪੋਰਟਲ',
    tabSettings: 'ਖਾਤਾ ਸੈਟਿੰਗਾਂ ਅਤੇ ਗੋਪਨੀਯਤਾ',
    artisanPortfolioTitle: 'ਕਾਰੀਗਰ ਪੋਰਟਫੋਲੀਓ ਅਤੇ ਪਰੰਪਰਾ',
    artisanPortfolioSubtitle: 'ਤੁਹਾਡੀਆਂ ਪ੍ਰਮਾਣਿਤ ਕਲਾ ਪਰੰਪਰਾਵਾਂ ਦਾ ਅਧਿਕਾਰਤ ਪ੍ਰਦਰਸ਼ਨ।',
    editProfileBtn: 'ਪ੍ਰੋਫਾਈਲ ਸੋਧੋ',
    primaryArtTraditionLabel: 'ਮੁੱਖ ਕਲਾ ਪਰੰਪਰਾ',
    stateAffiliationLabel: 'ਰਾਜ ਸੰਬੰਧ',
    membershipLevelLabel: 'ਮੈਂਬਰਸ਼ਿਪ ਪੱਧਰ',
    giStatusLabel: 'ਜੀ.ਆਈ. ਪੁਸ਼ਟੀ ਸਥਿਤੀ',
    quickHubsTitle: 'ਕਲਾਵਰਸ ਅਨੁਭਵ ਕੇਂਦਰ',
    updatePhotoBtn: 'ਫੋਟੋ ਬਦਲੋ',
    crossDevicePassTitle: 'ਕਰੌਸ-ਡਿਵਾਈਸ ਪਾਸਵਰਡ',
    crossDevicePassSub: 'ਕਿਸੇ ਵੀ ਡਿਵਾਈਸ ਤੇ ਲੌਗਇਨ ਕਰਨ ਲਈ ਐਕਸੈਸ ਪਿੰਨ ਸੈੱਟ ਕਰੋ।',
    fairTradeGuaranteeTitle: '85% ਸਿੱਧੀ ਅਦਾਇਗੀ ਗਾਰੰਟੀ',
    fairTradeGuaranteeSub: 'ਕਲਾਵਰਸ ਸ਼ੋਸ਼ਣ-ਮੁਕਤ ਅਰਥਚਾਰੇ ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ। ਕਾਰੀਗਰਾਂ ਨੂੰ ਸਿੱਧਾ 85% ਮਿਲਦਾ ਹੈ।',
    readEthicalCharter: 'ਸਾਡੇ ਨਿਯਮ ਪੜ੍ਹੋ →',
    editProfileModalTitle: 'ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਫਾਈਲ ਸੋਧੋ',
    fullNameLabel: 'ਪੂਰਾ ਨਾਮ',
    culturalRoleLabel: 'ਸੱਭਿਆਚਾਰਕ ਭੂਮਿਕਾ',
    stateRegionLabel: 'ਮੂਲ ਰਾਜ / ਖੇਤਰ',
    craftSpecialtyLabel: 'ਕਲਾ ਮੁਹਾਰਤ / ਗੁਰੂ ਪਰੰਪਰਾ',
    bioStoryLabel: 'ਜੀਵਨ ਕਹਾਣੀ ਅਤੇ ਵੇਰਵਾ',
    saveChangesBtn: 'ਤਬਦੀਲੀਆਂ ਸਾਂਭੋ',
    cancelBtn: 'ਰੱਦ ਕਰੋ',
    changePhotoTitle: 'ਫੋਟੋ ਚੁਣੋ',
    uploadDeviceTab: 'ਡਿਵਾਈਸ ਤੋਂ ਅੱਪਲੋਡ ਕਰੋ',
    culturalMotifsTab: 'ਰਵਾਇਤੀ ਨਮੂਨੇ',
    imageUrlTab: 'ਚਿੱਤਰ ਲਿੰਕ (URL)',
    clickOrDragPhoto: 'ਚਿੱਤਰ ਚੁਣਨ ਲਈ ਕਲਿੱਕ ਕਰੋ ਜਾਂ ਇੱਥੇ ਖਿੱਚੋ',
    savePhotoBtn: 'ਫੋਟੋ ਸਾਂਭੋ',
    resetDefaultBtn: 'ਰੀਸੈੱਟ ਕਰੋ',
    requestBadgeTitle: 'ਜੀ.ਆਈ. ਕਾਰੀਗਰ ਪੁਸ਼ਟੀ ਲਈ ਅਰਜ਼ੀ',
    requestBadgeSub: 'ਜੀ.ਆਈ. ਮਾਨਤਾ ਸਿੱਧੀ ਵਿਕਰੀ ਅਤੇ 85% ਭੁਗਤਾਨ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ।',
    giCardInputLabel: 'ਕਾਰੀਗਰ ਕਾਰਡ ਨੰਬਰ / ਜੀ.ਆਈ. ਹਵਾਲਾ',
    craftLineageLabel: 'ਪੀੜ੍ਹੀ ਦਰ ਪੀੜ੍ਹੀ ਕਲਾ ਵੇਰਵੇ',
    submitRequestBtn: 'ਪੁਸ਼ਟੀ ਲਈ ਭੇਜੋ',
    zeroDataPledgeTitle: 'ਜ਼ੀਰੋ ਡਾਟਾ-ਵਿਕਰੀ ਵਾਅਦਾ',
    zeroDataPledgeSub: 'ਤੁਹਾਡਾ ਡਾਟਾ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਹੀ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ।',
    sovereignStorageTitle: 'ਸੁਤੰਤਰ ਡਾਟਾ ਸਟੋਰੇਜ',
    sovereignStorageSub: 'ਤੁਹਾਡੀ ਬਣਾਈ ਹਰ ਚੀਜ਼ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੀ ਹੈ।',
    downloadDataBtn: 'ਡਾਟਾ ਡਾਊਨਲੋਡ ਕਰੋ (JSON)',
    resetAccountBtn: 'ਕੈਸ਼ ਸਾਫ਼ ਕਰੋ',
    scanNewArtworkBtn: 'ਨਵੀਂ ਕਲਾ ਸਕੈਨ ਕਰੋ',
    browseMasterclassesBtn: 'ਸਾਰੀਆਂ ਕਲਾਸਾਂ ਦੇਖੋ',

    kalaTourTag: '1-ਦਿਨਾ ਕਲਾ ਯਾਤਰਾਵਾਂ ਅਤੇ ਸਟੂਡੀਓ ਮੁਲਾਕਾਤ',
    trailDurationBadgeTop: 'ਯਾਤਰਾ ਸਮਾਂ',
    trailDurationBadgeSub: '1-ਦਿਨਾ ਰੂਟ',
    tabCuratedTrails: 'ਚੁਣੀਆਂ ਹੋਈਆਂ 1-ਦਿਨਾ ਵਿਰਾਸਤੀ ਯਾਤਰਾਵਾਂ',
    tabCustomAiTrail: 'ਕਸਟਮ 1-ਦਿਨਾ AI ਯਾਤਰਾ ਜਨਰੇਟਰ',
    selectCraftTrailTitle: '1-ਦਿਨਾ ਕਲਾ ਯਾਤਰਾ ਚੁਣੋ',
    dayFocusLabel: '1-ਦਿਨਾ ਫੋਕਸ',
    oneDayRouteLabel: '1-ਦਿਨਾ ਰੂਟ',
    themeLabel: 'ਵਿਸ਼ਾ (ਥੀਮ)',
    kalaYatriConciergeTitle: 'ਕਲਾਯਾਤਰੀ AI (KalaYatri) • ਗਾਈਡ',
    kalaYatriConciergeDesc: 'ਆਪਣੀ ਪਸੰਦ ਅਨੁਸਾਰ 1-ਦਿਨਾ ਯਾਤਰਾ ਤਿਆਰ ਕਰੋ ਅਤੇ 85% ਭੁਗਤਾਨ ਨਾਲ ਪਾਸ ਬੁੱਕ ਕਰੋ।',
    consultKalaYatriBtn: 'ਕਲਾਯਾਤਰੀ ਨਾਲ ਸਲਾਹ ਕਰੋ ਅਤੇ ਬੁੱਕ ਕਰੋ',
    trailHighlightsTitle: 'ਮੁੱਖ ਆਕਰਸ਼ਣ',
    stepScheduleTitle: '1-ਦਿਨਾ ਸਮਾਂ ਸੂਚੀ (ਸਵੇਰ ਤੋਂ ਸ਼ਾਮ)',
    masterExperienceLabel: 'ਮੁੱਖ ਕਾਰੀਗਰ ਅਨੁਭਵ',
    insiderTipLabel: 'ਅੰਦਰੂਨੀ ਵਿਸ਼ੇਸ਼ ਸਲਾਹ',
    guildEtiquetteTitle: 'ਕਾਰੀਗਰ ਸਟੂਡੀਓ ਨਿਯਮਾਵਲੀ',
    customizeTrailTitle: '1-ਦਿਨਾ ਯਾਤਰਾ ਤਿਆਰ ਕਰੋ',
    heritageCityLabel: 'ਵਿਰਾਸਤੀ ਸ਼ਹਿਰ / ਜ਼ਿਲ੍ਹਾ',
    heritageCityPlaceholder: 'ਜਿਵੇਂ: ਅੰਮ੍ਰਿਤਸਰ, ਜੈਪੁਰ, ਪਟਿਆਲਾ...',
    durationNotice: 'ਮਿਆਦ: 1-ਦਿਨਾ ਵਿਸ਼ੇਸ਼ ਅਨੁਭਵ',
    dayBudgetLabel: 'ਰੋਜ਼ਾਨਾ ਬਜਟ (ਰੁਪਏ)',
    paceRelaxed: 'ਆਰਾਮਦਾਇਕ (2 ਸਟਾਪ)',
    paceModerate: 'ਦਰਮਿਆਨਾ (3 ਸਟਾਪ)',
    paceIntense: 'ਡੂੰਘਾ ਅਨੁਭਵ (4 ਸਟਾਪ)',
    generatingTrailText: '1-ਦਿਨਾ ਸਟੂਡੀਓ ਨਕਸ਼ਾ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...',
    customTrailGeneratedBadge: '✓ ਕਸਟਮ 1-ਦਿਨਾ ਯਾਤਰਾ ਤਿਆਰ ਹੋਈ',
    aiTrailReadyTitle: 'AI 1-ਦਿਨਾ ਯਾਤਰਾ ਬਣਨ ਲਈ ਤਿਆਰ',
    aiTrailReadyDesc: 'ਸਮੇਂ ਅਤੇ ਸਟੂਡੀਓ ਦੇ ਵੇਰਵਿਆਂ ਨਾਲ ਯੋਜਨਾ ਬਣਾਉਣ ਲਈ ਖੱਬੇ ਪਾਸੇ ਚੋਣ ਕਰੋ।',
    timeSlotMorning: 'ਸਵੇਰ',
    timeSlotAfternoon: 'ਦੁਪਹਿਰ',
    timeSlotEvening: 'ਸ਼ਾਮ'
  },

  or: {
    stateExplorerTag: '୨୮ଟି ଭାରତୀୟ ରାଜ୍ୟ ଓ ୮ଟି କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ',
    stateExplorerBadgeTop: 'ଜି.ଆଇ. ପ୍ରମାଣିତ ଐତିହ୍ୟ',
    stateExplorerBadgeSub: '୨୮ଟି ରାଜ୍ୟର ହସ୍ତଶିଳ୍ପ ତାଲିକା',
    backToStates: '← ସମସ୍ତ ରାଜ୍ୟ ଏବଂ କଳା ପରମ୍ପରାକୁ ଫେରନ୍ତୁ',
    giAuthenticCertified: 'ଜି.ଆଇ. (GI) ପ୍ରାମାଣିକତା ପ୍ରମାଣିତ',
    stateOf: 'ରାଜ୍ୟ:',
    generateTrailForState: 'ପାଇଁ ୧-ଦିନିଆ ଶିଳ୍ପ ଯାତ୍ରା ପ୍ରସ୍ତୁତ କରନ୍ତୁ',
    consultGuruOnArt: 'କଳା ଉପରେ ଗୁରୁଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ',
    giRegistryEmblem: '📜 ଜି.ଆଇ. ରେଜିଷ୍ଟ୍ରି ସଂଖ୍ୟା ପ୍ରମାଣିତ ଐତିହ୍ୟ',
    naturalMaterialsTitle: 'ପ୍ରାକୃତିକ ଓ ଖଣିଜ ଉପାଦାନ',
    sacredMotifsTitle: 'ପବିତ୍ର ପ୍ରତୀକ ଓ ଚିତ୍ରାଙ୍କନ',
    uniqueLoreTitle: 'ପରମ୍ପରା, ଇତିହାସ ଓ ବିଶେଷ ତଥ୍ୟ',
    authenticTechniqueGuide: 'ପ୍ରାମାଣିକ କଳା କୌଶଳ ମାର୍ଗଦର୍ଶିକା',
    masteringArtStep: 'କଳାରେ ଦକ୍ଷତା:',
    stepLabel: 'ପଦକ୍ଷେପ',
    proTipLabel: 'ବିଶେଷ ପରାମର୍ଶ',
    secondaryCraftsLabel: 'ଅନ୍ୟାନ୍ୟ ଆଞ୍ଚଳିକ ହସ୍ତଶିଳ୍ପ',
    zoneLabel: 'ଅଞ୍ଚଳ',
    capitalLabel: 'ରାଜଧାନୀ',
    zoneEast: 'ପୂର୍ବ ଭାରତ',
    zoneSouth: 'ଦକ୍ଷିଣ ଭାରତ',
    zoneWest: 'ପଶ୍ଚିମ ଭାରତ',
    zoneNorth: 'ଉତ୍ତର ଭାରତ',
    zoneCentral: 'ମଧ୍ୟ ଭାରତ',
    zoneNE: 'ଉତ୍ତର-ପୂର୍ବ ଭାରତ',
    zoneAll: 'ସମଗ୍ର ଭାରତ (୨୮)',

    marketplaceTag: '୧୦୦% ଜି.ଆଇ. ପ୍ରମାଣିତ ମୂଳ କଳାକୃତି ଏବଂ ୯୦% ସିଧାସଳଖ କାରିଗର ପାଉଣା',
    cartBtn: 'କାର୍ଟ',
    allArtForms: 'ସମସ୍ତ କଳା ଶୈଳୀ',
    directPayoutNotice: '୯୦% ସିଧାସଳଖ କାରିଗର ପାଉଣା ନିଶ୍ଚିତ',
    priceLabel: 'ମୂଲ୍ୟ',
    giCertifiedBadge: 'ଜି.ଆଇ. ପ୍ରମାଣିତ',
    emptyCartNotice: 'ଆପଣଙ୍କ କାର୍ଟ ଖାଲି ଅଛି।',
    qtyLabel: 'ପରିମାଣ',
    eachLabel: 'ପ୍ରତି',
    totalAmountLabel: 'ମୋଟ ରାଶି',
    directPayoutGuaranteeText: '✓ ୯୦% ସିଧାସଳଖ ଅର୍ଥ ପ୍ରମାଣିତ କାରିଗରଙ୍କୁ ପ୍ରଦାନ କରାଯାଇଛି',
    orderSuccessTitle: 'ଅର୍ଡର ସଫଳତାର ସହ ସମ୍ପନ୍ନ ହେଲା!',
    orderSuccessMessage: 'ଭାରତୀୟ ଜୀବନ୍ତ ଐତିହ୍ୟକୁ ସମର୍ଥନ କରିଥିବାରୁ ଧନ୍ୟବାଦ। ୯୦% ପାଉଣା ମୁଖ୍ୟ ଶିଳ୍ପୀଙ୍କୁ ପଠାଯାଇଛି।',
    continueExploringBtn: 'ଅନ୍ୱେଷଣ ଜାରି ରଖନ୍ତୁ',
    addNewListingTitle: 'ଐତିହ୍ୟ କଳାକୃତି ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ',

    verifiedGiArtisan: 'ପ୍ରମାଣିତ ଜି.ଆଇ. ଶିଳ୍ପୀ',
    requestGiArtisanBadge: 'ଜି.ଆଇ. ବ୍ୟାଜ୍ ପାଇଁ ଅନୁରୋଧ କରନ୍ତୁ',
    memberSince: 'ସଦସ୍ୟତା ବର୍ଷ',
    planTitle: 'ପ୍ଲାନ୍',
    craftSpecialtyTitle: 'ଶିଳ୍ପ ବିଶେଷଜ୍ଞତା',
    accessPinTitle: 'ଆକ୍ସେସ୍ ପିନ୍ (PIN)',
    protectedPin: 'ସୁରକ୍ଷିତ',
    setPin: 'ପିନ୍ ସେଟ୍ କରନ୍ତୁ',
    tabOverview: 'କାରିଗର ଅବଲୋକନ',
    tabSecurity: 'ପାସୱାର୍ଡ ଆକ୍ସେସ୍',
    tabEvaluations: 'କଳାଲେନ୍ସ କଳାକୃତି',
    tabMasterclasses: 'ମୋର ମାଷ୍ଟରକ୍ଲାସ୍',
    tabBadges: 'ବ୍ୟାଜ୍ ଓ ସମ୍ମାନ',
    tabStudio: 'ଶିଳ୍ପୀ ଷ୍ଟୁଡିଓ ପୋର୍ଟାଲ୍',
    tabSettings: 'ଖାତା ସେଟିଙ୍ଗ୍ସ ଓ ଗୋପନୀୟତା',
    artisanPortfolioTitle: 'ଶିଳ୍ପୀ ପୋର୍ଟଫୋଲିଓ ଓ ପରମ୍ପରା',
    artisanPortfolioSubtitle: 'ଆପଣଙ୍କ ପ୍ରମାଣିତ କଳା ପରମ୍ପରାର ଆନୁଷ୍ଠାନିକ ପ୍ରଦର୍ଶନ।',
    editProfileBtn: 'ପ୍ରୋଫାଇଲ୍ ସମ୍ପାଦନ କରନ୍ତୁ',
    primaryArtTraditionLabel: 'ମୁଖ୍ୟ କଳା ପରମ୍ପରା',
    stateAffiliationLabel: 'ରାଜ୍ୟ ସଂଲଗ୍ନତା',
    membershipLevelLabel: 'ସଦସ୍ୟତା ସ୍ତର',
    giStatusLabel: 'ଜି.ଆଇ. ଯାଞ୍ଚ ସ୍ଥିତି',
    quickHubsTitle: 'ଦ୍ରୁତ କଳାଭର୍ସ କେନ୍ଦ୍ର',
    updatePhotoBtn: 'ଫଟୋ ପରିବର୍ତ୍ତନ କରନ୍ତୁ',
    crossDevicePassTitle: 'କ୍ରସ୍-ଡିଭାଇସ୍ ପାସୱାର୍ଡ',
    crossDevicePassSub: 'ଅନ୍ୟ କୌଣସି ଡିଭାଇସରେ ଲଗ୍ଇନ୍ କରିବାକୁ ଆକ୍ସେସ୍ ପିନ୍ ସେଟ୍ କରନ୍ତୁ।',
    fairTradeGuaranteeTitle: '୯୦% ସିଧାସଳଖ ନ୍ୟାଯ୍ୟ ପାଉଣା ନିଶ୍ଚିତତା',
    fairTradeGuaranteeSub: 'କଳାଭର୍ସ ଶୋଷଣମୁକ୍ତ ଅର୍ଥନୀତିରେ କାର୍ଯ୍ୟ କରେ। କାରିଗରମାନେ ସିଧାସଳଖ ୯୦% ପାଆନ୍ତି।',
    readEthicalCharter: 'ଆମର ନୈତିକ ନିୟମାବଳୀ ପଢନ୍ତୁ →',
    editProfileModalTitle: 'ସାଂସ୍କୃତିକ ପ୍ରୋଫାଇଲ୍ ସମ୍ପାଦନ',
    fullNameLabel: 'ପୂରା ନାମ',
    culturalRoleLabel: 'ସାଂସ୍କୃତିକ ଭୂମିକା',
    stateRegionLabel: 'ମୂଳ ରାଜ୍ୟ / ଅଞ୍ଚଳ',
    craftSpecialtyLabel: 'କଳା ଦକ୍ଷତା / ଗୁରୁ ପରମ୍ପରା',
    bioStoryLabel: 'ପରିଚୟ ଓ ପରମ୍ପରାର କାହାଣୀ',
    saveChangesBtn: 'ପରିବର୍ତ୍ତନ ସାଇତନ୍ତୁ',
    cancelBtn: 'ବାତିଲ କରନ୍ତୁ',
    changePhotoTitle: 'ଫଟୋ ବାଛନ୍ତୁ',
    uploadDeviceTab: 'ଡିଭାଇସରୁ ଅପଲୋଡ୍ କରନ୍ତୁ',
    culturalMotifsTab: 'ପାରମ୍ପରିକ ଚିତ୍ରାଙ୍କନ',
    imageUrlTab: 'ଫଟୋ ଲିଙ୍କ୍ (URL)',
    clickOrDragPhoto: 'ଫଟୋ ବାଛିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ କିମ୍ବା ଏଠାକୁ ଟାଣନ୍ତୁ',
    savePhotoBtn: 'ଫଟୋ ସାଇତନ୍ତୁ',
    resetDefaultBtn: 'ରିସେଟ୍ କରନ୍ତୁ',
    requestBadgeTitle: 'ଜି.ଆଇ. କାରିଗର ଯାଞ୍ଚ ପାଇଁ ଆବେଦନ',
    requestBadgeSub: 'ପ୍ରମାଣିତ ଜି.ଆଇ. ସ୍ଥିତି ସିଧାସଳଖ ବିକ୍ରୟ ଏବଂ ୯୦% ଗ୍ୟାରେଣ୍ଟି ପାଉଣା ପ୍ରଦାନ କରେ।',
    giCardInputLabel: 'କାରିଗର କାର୍ଡ ନମ୍ବର / ଜି.ଆଇ. ସନ୍ଦର୍ଭ',
    craftLineageLabel: 'ପିଢ଼ି ପରେ ପିଢ଼ି କଳା ବିବରଣୀ',
    submitRequestBtn: 'ଯାଞ୍ଚ ପାଇଁ ଦାଖଲ କରନ୍ତୁ',
    zeroDataPledgeTitle: 'ଶୂନ ଡାଟା-ବିକ୍ରି ପ୍ରତିଶ୍ରୁତି',
    zeroDataPledgeSub: 'ଆପଣଙ୍କ ତଥ୍ୟ କେବଳ ଆପଣଙ୍କ ବ୍ରାଉଜରରେ ସୁରକ୍ଷିତ ରହିଥାଏ।',
    sovereignStorageTitle: 'ସାର୍ବଭୌମ ସାଂସ୍କୃତିକ ଡାଟା ସଂରକ୍ଷଣ',
    sovereignStorageSub: 'ଆପଣ ଯାହା ତିଆରି କରନ୍ତି ତାହା ସମ୍ପୂର୍ଣ୍ଣ ଆପଣଙ୍କର।',
    downloadDataBtn: 'ଡାଟା ଡାଉନଲୋଡ୍ କରନ୍ତୁ (JSON)',
    resetAccountBtn: 'ଲୋକାଲ୍ କ୍ୟାଶ୍ ରିସେଟ୍ କରନ୍ତୁ',
    scanNewArtworkBtn: 'ନୂତନ କଳା ସ୍କାନ୍ କରନ୍ତୁ',
    browseMasterclassesBtn: 'ସମସ୍ତ କ୍ଲାସ୍ ଦେଖନ୍ତୁ',

    kalaTourTag: '୧-ଦିନିଆ ଗଭୀର କଳା ଯାତ୍ରା ଓ କର୍ମଶାଳା ପରିଦର୍ଶନ',
    trailDurationBadgeTop: 'ଯାତ୍ରା ସମୟ',
    trailDurationBadgeSub: '୧-ଦିନିଆ ଏକକ ମାର୍ଗ',
    tabCuratedTrails: 'ନିର୍ବାଚିତ ୧-ଦିନିଆ ଐତିହ୍ୟ ଯାତ୍ରା',
    tabCustomAiTrail: 'କଷ୍ଟମ୍ ୧-ଦିନିଆ AI ଯାତ୍ରା ନିର୍ମାତା',
    selectCraftTrailTitle: '୧-ଦିନିଆ ହସ୍ତଶିଳ୍ପ ଯାତ୍ରା ବାଛନ୍ତୁ',
    dayFocusLabel: '୧-ଦିନିଆ ଧ୍ୟାନ',
    oneDayRouteLabel: '୧-ଦିନିଆ ମାର୍ଗ',
    themeLabel: 'ଥିମ୍',
    kalaYatriConciergeTitle: 'କଳାଯାତ୍ରୀ AI (KalaYatri) • ମାର୍ଗଦର୍ଶକ',
    kalaYatriConciergeDesc: 'ଆପଣଙ୍କ ସୁବିଧା ଅନୁସାରେ ୧-ଦିନିଆ ଯାତ୍ରା ଯୋଜନା କରନ୍ତୁ ଏବଂ ୯୦% ପାଉଣା ସହ ପାସ୍ ବୁକ୍ କରନ୍ତୁ।',
    consultKalaYatriBtn: 'କଳାଯାତ୍ରୀଙ୍କ ସହ ପରାମର୍ଶ କରି ବୁକ୍ କରନ୍ତୁ',
    trailHighlightsTitle: 'ଯାତ୍ରାର ମୁଖ୍ୟ ଆକର୍ଷଣ',
    stepScheduleTitle: '୧-ଦିନିଆ କ୍ରମାନ୍ୱୟ ସମୟସୂଚୀ (ସକାଳୁ ସନ୍ଧ୍ୟା)',
    masterExperienceLabel: 'ମୁଖ୍ୟ କାରିଗର ଅନୁଭୂତି',
    insiderTipLabel: 'ବିଶେଷ ଆଭ୍ୟନ୍ତରୀଣ ପରାମର୍ଶ',
    guildEtiquetteTitle: 'ଶିଳ୍ପୀ କର୍ମଶାଳା ନିୟମାବଳୀ',
    customizeTrailTitle: '୧-ଦିନିଆ ଯାତ୍ରା ପ୍ରସ୍ତୁତ କରନ୍ତୁ',
    heritageCityLabel: 'ଐତିହ୍ୟ ସହର / ଜିଲ୍ଲା',
    heritageCityPlaceholder: 'ଯଥା: ରଘୁରାଜପୁର, ପୁରୀ, ପିପିଲି, ଜୟପୁର...',
    durationNotice: 'ଅବଧି: ୧-ଦିନିଆ ଏକକ ଦିବସ ଅନୁଭୂତି',
    dayBudgetLabel: 'ଦୈନିକ ବଜେଟ୍ (ଟଙ୍କା)',
    paceRelaxed: 'ଆରାମଦାୟକ (୨ଟି ସ୍ଥାନ)',
    paceModerate: 'ମଧ୍ୟମ (୩ଟି ସ୍ଥାନ)',
    paceIntense: 'ଗଭୀର ଅନୁଭୂତି (୪ଟି ସ୍ଥାନ)',
    generatingTrailText: '୧-ଦିନିଆ ଷ୍ଟୁଡିଓ ମାନଚିତ୍ର ପ୍ରସ୍ତୁତ ହେଉଛି...',
    customTrailGeneratedBadge: '✓ କଷ୍ଟମ୍ ୧-ଦିନିଆ ଯାତ୍ରା ପ୍ରସ୍ତୁତ ହେଲା',
    aiTrailReadyTitle: 'AI ୧-ଦିନିଆ ଯାତ୍ରା ପ୍ରସ୍ତୁତ ହେବାକୁ ପ୍ରତୀକ୍ଷାରତ',
    aiTrailReadyDesc: 'ସଠିକ୍ ସମୟ ଏବଂ ଷ୍ଟୁଡିଓ ବିବରଣୀ ସହିତ ଯୋଜନା କରିବାକୁ ବାମ ପାର୍ଶ୍ୱରେ ଚୟନ କରନ୍ତୁ।',
    timeSlotMorning: 'ସକାଳ',
    timeSlotAfternoon: 'ମଧ୍ୟାହ୍ନ',
    timeSlotEvening: 'ସନ୍ଧ୍ୟା'
  },
  as: {
    stateExplorerTag: '২৮খন ভাৰতীয় ৰাজ্য আৰু ৮খন কেন্দ্ৰীয় শাসিত অঞ্চল',
    stateExplorerBadgeTop: 'জিআই স্বীকৃতিপ্ৰাপ্ত ঐতিহ্য',
    stateExplorerBadgeSub: '২৮খন ৰাজ্যৰ সূচীভুক্ত কলা',
    backToStates: '← সকলো ৰাজ্য আৰু পৰম্পৰালৈ উভতি যাওক',
    giAuthenticCertified: 'জিআই প্ৰামাণিকতা স্বীকৃত',
    stateOf: 'ৰাজ্য:',
    generateTrailForState: 'এই ৰাজ্যৰ ১-দিনীয়া শিল্প যাত্ৰা প্ৰস্তুত কৰক',
    consultGuruOnArt: 'কলাগুৰু AIৰ সৈতে পৰামৰ্শ কৰক',
    giRegistryEmblem: 'ভাৰত চৰকাৰৰ জিআই পঞ্জীয়ন প্ৰতীক',
    naturalMaterialsTitle: 'প্ৰাকৃতিক ৰং আৰু পৰম্পৰাগত উপাদান',
    sacredMotifsTitle: 'পবিত্ৰ প্ৰতীক আৰু জ্যামিতি',
    uniqueLoreTitle: 'পৰম্পৰাগত লোকগাথা আৰু পৌৰাণিক ঐতিহ্য',
    authenticTechniqueGuide: 'প্ৰামাণিক কৌশল আৰু টিউটৰিয়েল গাইড',
    masteringArtStep: 'কলা শিকক:',
    stepLabel: 'পদক্ষেপ',
    proTipLabel: 'বিশেষ পৰামৰ্শ:',
    secondaryCraftsLabel: 'অন্যান্য বিখ্যাত আঞ্চলিক হস্তশিল্প:',
    zoneLabel: 'অঞ্চল:',
    capitalLabel: 'ৰাজধানী:',
    zoneEast: 'পূব ভাৰত',
    zoneSouth: 'দক্ষিণ ভাৰত',
    zoneWest: 'পশ্চিম ভাৰত',
    zoneNorth: 'উত্তৰ ভাৰত',
    zoneCentral: 'মধ্য ভাৰত',
    zoneNE: 'উত্তৰ-পূব ভাৰত',
    zoneAll: 'সকলো অঞ্চল',
    marketplaceTag: 'প্ৰত্যক্ষ শিপিনী সমবায় আৰু জিআই হস্তশিল্প',
    cartBtn: 'মোৰ মোনা',
    allArtForms: 'সকলো পৰম্পৰাগত কলা',
    directPayoutNotice: '১০০% প্ৰত্যক্ষ শিপিনী লাভ — কোনো মধ্যভোগীৰ স্থান নাই',
    priceLabel: 'মূল্য:',
    giCertifiedBadge: 'জিআই প্ৰত্যায়িত প্ৰামাণিক হস্তশিল্প',
    emptyCartNotice: 'আপোনাৰ মোনা খালী আছে। ভাৰতৰ অনন্য হস্তশিল্প অন্বেষণ কৰক!',
    qtyLabel: 'পৰিমাণ:',
    eachLabel: 'প্ৰতিটো',
    totalAmountLabel: 'মুঠ ধনৰাশি:',
    directPayoutGuaranteeText: 'প্ৰত্যক্ষ হস্তশিল্পী পৰিশোধ নিশ্চিত',
    orderSuccessTitle: 'অৰ্ডাৰ সফলভাৱে সম্পন্ন হ’ল!',
    orderSuccessMessage: 'ভাৰতীয় ঐতিহ্য সংৰক্ষণত সহযোগ কৰাৰ বাবে ধন্যবাদ।',
    continueExploringBtn: 'অন্বেষণ অব্যাহত ৰাখক',
    addNewListingTitle: 'নতুন সামগ্ৰী তালিকাভুক্ত কৰক',
    verifiedGiArtisan: 'প্ৰত্যায়িত জিআই শিপিনী',
    requestGiArtisanBadge: 'জিআই বেজৰ আবেদন কৰক',
    memberSince: 'সদস্য হৈছে:',
    planTitle: 'প্লেন',
    craftSpecialtyTitle: 'কলা বিশেষত্ব',
    accessPinTitle: 'প্ৰৱেশ পিন',
    protectedPin: 'সুৰক্ষিত',
    setPin: 'পিন নিৰ্ধাৰণ কৰক',
    tabOverview: 'শিপিনী পৰিচিতি',
    tabSecurity: 'পাছৱৰ্ড সুৰক্ষা',
    tabEvaluations: 'কলাLens কলাকৃতিসমূহ',
    tabMasterclasses: 'মোৰ কৰ্মশালাসমূহ',
    tabBadges: 'সন্মান আৰু স্বীকৃতি',
    tabStudio: 'শিপিনী ষ্টুডিঅ’ পৰ্টেল',
    tabSettings: 'একাউণ্ট ছেটিংছ',
    artisanPortfolioTitle: 'শিপিনী পৰ্টফলিঅ’ আৰু বংশপৰম্পৰা',
    artisanPortfolioSubtitle: 'আপোনাৰ প্ৰামাণিক শিল্প পৰম্পৰাৰ প্ৰদৰ্শন।',
    editProfileBtn: 'তথ্য সম্পাদনা কৰক',
    primaryArtTraditionLabel: 'প্ৰাথমিক শিল্প পৰম্পৰা',
    stateAffiliationLabel: 'ৰাজ্যিক সম্বন্ধ',
    membershipLevelLabel: 'সদস্যতাৰ স্তৰ',
    giStatusLabel: 'জিআই পৰীক্ষণ স্থিতি',
    quickHubsTitle: 'কলাভাৰ্ছ অভিজ্ঞতা কেন্দ্ৰ',
    updatePhotoBtn: 'ফটো আপডেট কৰক',
    crossDevicePassTitle: 'সকলো ডিভাইচত প্ৰৱেশ সুৰক্ষা',
    crossDevicePassSub: 'আপোনাৰ ব্যক্তিগত পিনৰ সৈতে সুৰক্ষিতভাৱে প্ৰৱেশ কৰক।',
    fairTradeGuaranteeTitle: '৯০% ন্যায্য বাণিজ্য শিপিনী নিশ্চয়তা',
    fairTradeGuaranteeSub: 'প্ৰত্যেকটো বিক্ৰীৰ সৰহ অংশ শিপিনীয়ে পোনপটীয়াকৈ লাভ কৰে।',
    readEthicalCharter: 'নৈতিক চনদ পঢ়ক',
    editProfileModalTitle: 'শিপিনী পৰিচিতি সম্পাদনা কৰক',
    fullNameLabel: 'সম্পূৰ্ণ নাম',
    culturalRoleLabel: 'সাংস্কৃতিক ভূমিকা / পদবী',
    stateRegionLabel: 'ৰাজ্য আৰু অঞ্চল',
    craftSpecialtyLabel: 'কলাৰ বিশেষত্ব',
    bioStoryLabel: 'জীৱনী আৰু শিল্প ইতিহাস',
    saveChangesBtn: 'পৰিবৰ্তন সংৰক্ষণ কৰক',
    cancelBtn: 'বাতিল কৰক',
    changePhotoTitle: 'প্ৰ’ফাইল ফটো সলনি কৰক',
    uploadDeviceTab: 'ডিভাইচৰ পৰা আপলোড',
    culturalMotifsTab: 'সাংস্কৃতিক প্ৰতীক',
    imageUrlTab: 'ৱেব ছবি লিংক',
    clickOrDragPhoto: 'ছবি ক্লিক কৰক বা টানি আনি ইয়াত থওক',
    savePhotoBtn: 'ফটো সংৰক্ষণ কৰক',
    resetDefaultBtn: 'ডিফল্টলৈ ঘূৰাই আনক',
    requestBadgeTitle: 'জিআই শিপিনী বেজৰ আবেদন',
    requestBadgeSub: 'ভাৰত চৰকাৰৰ জিআই শিপিনী কাৰ্ডৰ তথ্য প্ৰদান কৰক।',
    giCardInputLabel: 'জিআই কাৰ্ড নম্বৰ',
    craftLineageLabel: 'শিল্প পৰম্পৰা / গুৰুৰ নাম',
    submitRequestBtn: 'পৰীক্ষণৰ বাবে জমা দিয়ক',
    zeroDataPledgeTitle: 'সম্পূৰ্ণ গোপনীয়তা সংৰক্ষণ',
    zeroDataPledgeSub: 'আপোনাৰ তথ্য কেতিয়াও কোনো তৃতীয় পক্ষৰ সৈতে অংশীদাৰ কৰা নহয়।',
    sovereignStorageTitle: 'ব্যক্তিগত সংৰক্ষণ ব্যৱস্থা',
    sovereignStorageSub: 'সকলো তথ্য কেৱল আপোনাৰ নিৰ্দেশনাত সংৰক্ষিত থাকে।',
    downloadDataBtn: 'ডাটা ডাউনলোড কৰক',
    resetAccountBtn: 'একাউণ্ট ৰিছেট কৰক',
    scanNewArtworkBtn: 'নতুন শিল্প স্কেন কৰক',
    browseMasterclassesBtn: 'কৰ্মশালা চাওক',
    kalaTourTag: '১-দিনীয়া শিল্প যাত্ৰা আৰু শিপিনী সাক্ষাৎ',
    trailDurationBadgeTop: 'যাত্ৰাৰ সময়সীমা',
    trailDurationBadgeSub: '১-দিনীয়া সম্পূৰ্ণ সূচী',
    tabCuratedTrails: 'চয়নিত ১-দিনীয়া শিল্প যাত্ৰা',
    tabCustomAiTrail: 'কাষ্টম ১-দিনীয়া AI যাত্ৰা',
    selectCraftTrailTitle: '১-দিনীয়া শিল্প যাত্ৰা নিৰ্বাচন কৰক',
    dayFocusLabel: '১-দিনীয়া গুৰুত্ব',
    oneDayRouteLabel: '১-দিনীয়া পথ',
    themeLabel: 'মূল ভাব',
    kalaYatriConciergeTitle: 'কলায়াত্ৰী AI • ব্যক্তিগত সহায়ক',
    kalaYatriConciergeDesc: 'আপোনাৰ সুবিধা আৰু পছন্দ অনুসৰি এই ১-দিনীয়া যাত্ৰা ব্যক্তিগতকৰণ কৰক।',
    consultKalaYatriBtn: 'কলায়াত্ৰীৰ পৰামৰ্শ লওক',
    trailHighlightsTitle: 'যাত্ৰাৰ প্ৰধান আকৰ্ষণসমূহ',
    stepScheduleTitle: '১-দিনীয়া পদক্ষেপ অনুসৰি কাৰ্যসূচী (ৰাতিপুৱাৰ পৰা সন্ধিয়ালৈ)',
    masterExperienceLabel: 'মুখ্য অভিজ্ঞতা',
    insiderTipLabel: 'বিশেষ পৰামৰ্শ',
    guildEtiquetteTitle: 'শিপিনী সন্থাৰ শিষ্টাচাৰ আৰু নিয়ম',
    customizeTrailTitle: '১-দিনীয়া যাত্ৰা সাজি তোলক',
    heritageCityLabel: 'ঐতিহ্যমণ্ডিত চহৰ / জিলা',
    heritageCityPlaceholder: 'যেনে- গুৱাহাটী, মাজুলী, বাৰাণসী...',
    durationNotice: 'সময়সীমা: ১-দিনীয়া গভীৰ অভিজ্ঞতা',
    dayBudgetLabel: 'দৈনিক বাজেট (টকা)',
    paceRelaxed: 'ধীৰ-স্থিৰ (২টা স্থান)',
    paceModerate: 'মধ্যমীয়া (৩টা স্থান)',
    paceIntense: 'গভীৰ অন্বেষণ (৪টা স্থান)',
    generatingTrailText: '১-দিনীয়া ষ্টুডিঅ’ মেপ প্ৰস্তুত কৰা হৈছে...',
    customTrailGeneratedBadge: '✓ কাষ্টম ১-দিনীয়া যাত্ৰা প্ৰস্তুত হ’ল',
    aiTrailReadyTitle: 'AI ১-দিনীয়া যাত্ৰা প্ৰস্তুত হ’বলৈ সাজু',
    aiTrailReadyDesc: 'সঠিক সময় আৰু শিল্পী ষ্টুডিঅ’ৰ বিৱৰণ লাভ কৰিবলৈ বাঁওফালে তথ্য পূৰণ কৰক।',
    timeSlotMorning: 'ৰাতিপুৱা',
    timeSlotAfternoon: 'দুপৰীয়া',
    timeSlotEvening: 'সন্ধিয়া'
  }
};

export const getLocalizedUI = (lang?: SupportedLanguage | string): LocalizedUIStrings => {
  const langKey = (lang && lang in LOCALIZED_UI ? lang : 'en') as SupportedLanguage;
  return LOCALIZED_UI[langKey] || LOCALIZED_UI.en;
};

// State Name Localizations Map
export const STATE_NAME_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {},
  hi: {
    Bihar: 'बिहार',
    Rajasthan: 'राजस्थान',
    Odisha: 'ओडिशा',
    Maharashtra: 'महाराष्ट्र',
    'Andhra Pradesh': 'आंध्र प्रदेश',
    'Tamil Nadu': 'तमिलनाडु',
    'West Bengal': 'पश्चिम बंगाल',
    Karnataka: 'कर्नाटक',
    Gujarat: 'गुजरात',
    Kerala: 'केरल',
    'Madhya Pradesh': 'मध्य प्रदेश',
    Punjab: 'पंजाब',
    Assam: 'असम',
    Telangana: 'तेलंगाना',
    'Jammu and Kashmir': 'जम्मू और कश्मीर',
    'Himachal Pradesh': 'हिमाचल प्रदेश',
    Uttarakhand: 'उत्तराखंड',
    Jharkhand: 'झारखंड',
    Chhattisgarh: 'छत्तीसगढ़',
    Goa: 'गोवा',
    Haryana: 'हरियाणा',
    Manipur: 'मणिपुर',
    Meghalaya: 'मेघालय',
    Mizoram: 'मिजोरम',
    Nagaland: 'नागालैंड',
    Sikkim: 'सिक्किम',
    Tripura: 'त्रिपुरा',
    'Arunachal Pradesh': 'अरुणाचल प्रदेश'
  },
  ta: {
    Bihar: 'பீகார்',
    Rajasthan: 'ராஜஸ்தான்',
    Odisha: 'ஒடிசா',
    Maharashtra: 'மகಾರாஷ்டிரா',
    'Andhra Pradesh': 'ஆந்திரப் பிரதேசம்',
    'Tamil Nadu': 'தமிழ்நாடு',
    'West Bengal': 'மேற்கு வங்காளம்',
    Karnataka: 'கர்நாடகா',
    Gujarat: 'குஜராத்',
    Kerala: 'கேரளா',
    'Madhya Pradesh': 'மத்தியப் பிரதேசம்',
    Punjab: 'பஞ்சாப்',
    Assam: 'அசாம்',
    Telangana: 'தெലங்கானா',
    'Jammu and Kashmir': 'ஜம்மு காஷ்மீர்'
  },
  te: {
    Bihar: 'బీహార్',
    Rajasthan: 'రాజస్థాన్',
    Odisha: 'ఒడిశా',
    Maharashtra: 'మహారాష్ట్ర',
    'Andhra Pradesh': 'ఆంధ్రప్రదేశ్',
    'Tamil Nadu': 'తమిళనాడు',
    'West Bengal': 'పశ్చిమ బెంగాల్',
    Karnataka: 'కర్ణాటక',
    Gujarat: 'గుజరాత్',
    Kerala: 'కేరళ',
    'Madhya Pradesh': 'మధ్యప్రదేశ్',
    Punjab: 'పంజాబ్',
    Assam: 'అస్సాం',
    Telangana: 'తెలంగాణ'
  },
  bn: {
    Bihar: 'বিহার',
    Rajasthan: 'রাজস্থান',
    Odisha: 'ওড়িশা',
    Maharashtra: 'মহারাষ্ট্র',
    'Andhra Pradesh': 'অন্ধ্রপ্রদেশ',
    'Tamil Nadu': 'তামিলনাড়ু',
    'West Bengal': 'পশ্চিমবঙ্গ',
    Karnataka: 'কর্ণাটક',
    Gujarat: 'গুজরাট',
    Kerala: 'কেরালা',
    'Madhya Pradesh': 'মধ্যপ্রদেশ',
    Punjab: 'পাঞ্জাব',
    Assam: 'আসাম'
  },
  mr: {
    Bihar: 'बिहार',
    Rajasthan: 'राजस्थान',
    Odisha: 'ओडिशा',
    Maharashtra: 'महाराष्ट्र',
    'Andhra Pradesh': 'आंध्र प्रदेश',
    'Tamil Nadu': 'तमिळनाडू',
    'West Bengal': 'पश्चिम बंगाल',
    Karnataka: 'कर्नाटक',
    Gujarat: 'गुजरात',
    Kerala: 'केरळ',
    'Madhya Pradesh': 'मध्य प्रदेश',
    Punjab: 'पंजाब'
  },
  gu: {
    Bihar: 'બિહાર',
    Rajasthan: 'રાજસ્થાન',
    Odisha: 'ઓડિશા',
    Maharashtra: 'મહારાષ્ટ્ર',
    'Andhra Pradesh': 'આંધ્ર પ્રદેશ',
    'Tamil Nadu': 'તમિલનાડુ',
    'West Bengal': 'પશ્ચિમ બંગાળ',
    Karnataka: 'કર્ણાટક',
    Gujarat: 'ગુજરાત',
    Kerala: 'કેરળ',
    Punjab: 'પંજાબ'
  },
  kn: {
    Bihar: 'ಬಿಹಾರ',
    Rajasthan: 'ರಾಜಸ್ಥಾನ',
    Odisha: 'ಒಡಿಶಾ',
    Maharashtra: 'ಮಹಾರಾಷ್ಟ್ರ',
    'Andhra Pradesh': 'ಆಂಧ್ರಪ್ರದೇಶ',
    'Tamil Nadu': 'ತಮಿಳುನಾಡು',
    'West Bengal': 'ಪಶ್ಚಿಮ ಬಂಗಾಳ',
    Karnataka: 'ಕರ್ನಾಟಕ',
    Gujarat: 'ಗುಜರಾತ್',
    Kerala: 'ಕೇರಳ'
  },
  ml: {
    Bihar: 'ബിഹാർ',
    Rajasthan: 'രാജസ്ഥാൻ',
    Odisha: 'ഒഡീഷ',
    Maharashtra: 'മഹാരാഷ്ട്ര',
    'Andhra Pradesh': 'ആന്ധ്രാപ്രദേശ്',
    'Tamil Nadu': 'തമിഴ്‌നാട്',
    'West Bengal': 'പശ്ചിമ ബംഗാൾ',
    Karnataka: 'കർണാടക',
    Kerala: 'കേരളം'
  },
  pa: {
    Bihar: 'ਬਿਹਾਰ',
    Rajasthan: 'ਰਾਜਸਥਾਨ',
    Odisha: 'ਓਡੀਸ਼ਾ',
    Maharashtra: 'ਮਹਾਰਾਸ਼ਟਰ',
    Punjab: 'ਪੰਜਾਬ'
  },
  or: {
    Bihar: 'ବିହାର',
    Rajasthan: 'ରାଜସ୍ଥାନ',
    Odisha: 'ଓଡ଼ିଶା',
    Maharashtra: 'ମହାରାଷ୍ଟ୍ର',
    'West Bengal': 'ପଶ୍ଚିମବଙ୍ଗ'
  },
  as: {
    Bihar: 'বিহাৰ',
    Rajasthan: 'ৰাজস্থান',
    Odisha: 'ওড়িশা',
    Maharashtra: 'মহাৰাষ্ট্ৰ',
    'West Bengal': 'পশ্চিমবংগ',
    Assam: 'অসম'
  }
};

// Art Form Translations Map
export const ART_FORM_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {},
  hi: {
    'Madhubani / Mithila Painting': 'मधुबनी / मिथिला चित्रकला',
    'Pichwai Painting': 'पिछवाई चित्रकला',
    'Pattachitra Painting': 'पट्टचित्र चित्रकला',
    'Warli Folk Art': 'वारली लोक कला',
    'Warli Art': 'वारली लोक कला',
    'Kalamkari Hand-Painted Art': 'कलमकारी हस्त चित्रकला',
    'Kalamkari Art': 'कलمकारी कला',
    'Tanjore Sacred Painting': 'तंजावूर स्वर्ण चित्रकला',
    'Tanjore Painting': 'तंजावूर चित्रकला',
    'Kalighat Painting': 'कालीघाट चित्रकला',
    'Mysore Traditional Painting': 'मैसूर पारंपरिक चित्रकला',
    'Rogan Art Painting': 'रोगन कला',
    'Kerala Temple Mural Painting': 'केरल मंदिर भित્તિചિત્રకલા',
    'Gond Tribal Painting': 'गोंड जनजातीय चित्रकला',
    'Phulkari Traditional Embroidery': 'फुलकारी पारंपरिक कढ़ाई',
    'Cheriyal Scroll Painting': 'चेरियाल स्क्रॉल चित्रकला'
  },
  ta: {
    'Madhubani / Mithila Painting': 'மதுபானி / மிதிலா ஓவியம்',
    'Pichwai Painting': 'பிச்வாய் ஓவியம்',
    'Pattachitra Painting': 'பட்டசித்ரா ஓவியம்',
    'Warli Folk Art': 'வார்லி பழங்குடி ஓவியம்',
    'Kalamkari Hand-Painted Art': 'கலம்காரி கைவினை ஓவியம்',
    'Tanjore Sacred Painting': 'தஞ்சாவூர் தங்க ஓவியம்',
    'Tanjore Painting': 'தஞ்சாவூர் ஓவியம்',
    'Kerala Temple Mural Painting': 'கேரளா கோயில் சுவரோவியம்'
  },
  te: {
    'Madhubani / Mithila Painting': 'మధుబని / మిథిలా చిత్రకళ',
    'Pichwai Painting': 'పిచ్వాయి చిత్రకళ',
    'Pattachitra Painting': 'పట్టచిత్ర చిత్రకళ',
    'Warli Folk Art': 'వార్లీ గిరిజన కళ',
    'Kalamkari Hand-Painted Art': 'కలంకారీ చేతివ్రాత కళ',
    'Tanjore Sacred Painting': 'తంజావూరు బంగారు చిత్రకళ',
    'Cheriyal Scroll Painting': 'చేర్యాల స్క్రోల్ చిత్రకళ'
  },
  bn: {
    'Madhubani / Mithila Painting': 'মধুবনী / মিথিলা চিত্রশিল্প',
    'Pichwai Painting': 'পিছওয়াই চিত্রকর্ম',
    'Pattachitra Painting': 'পটচিত্র চিত্রশিল্প',
    'Warli Folk Art': 'ওয়ারলি লোকশিল্প',
    'Kalighat Painting': 'কালীঘাট পটচিত্র'
  },
  mr: {
    'Madhubani / Mithila Painting': 'मधुबनी / मिथिला चित्रकला',
    'Pichwai Painting': 'पिच्छवाई चित्रकला',
    'Pattachitra Painting': 'पट्टचित्र चित्रकला',
    'Warli Folk Art': 'वारली आदिवासी लोककला',
    'Warli Art': 'वारली लोककला'
  },
  gu: {
    'Madhubani / Mithila Painting': 'મધુબની / મિથિલા ચિત્રકળા',
    'Rogan Art Painting': 'રોગન કલા',
    'Pichwai Painting': 'પીછવાઈ ચિત્રકલા'
  },
  kn: {
    'Madhubani / Mithila Painting': 'ಮಧುಬನಿ / ಮಿಥಿಲಾ ಚಿತ್ರಕಲೆ',
    'Mysore Traditional Painting': 'ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ರಕಲೆ'
  },
  ml: {
    'Madhubani / Mithila Painting': 'മധുബനി / മിഥിലാ ചിത്രകല',
    'Kerala Temple Mural Painting': 'കേരള ചുവർച്ചിത്രകല'
  },
  pa: {
    'Phulkari Traditional Embroidery': 'ਫੁਲਕਾਰੀ ਰਵਾਇਤੀ ਕਢਾਈ',
    'Madhubani / Mithila Painting': 'ਮਧੂਬਨੀ ਚਿੱਤਰਕਾਰੀ'
  },
  or: {
    'Pattachitra Painting': 'ପଟ୍ଟଚିତ୍ର କଳା',
    'Madhubani / Mithila Painting': 'ମଧୁବନୀ ଚିତ୍ରକଳା'
  },
  as: {
    'Madhubani / Mithila Painting': 'মধুৱনী চিত্ৰকলা',
    'Pattachitra Painting': 'পট্টচিত্ৰ কলা'
  }
};

// Common translations for Materials, Motifs, Lore and Techniques across Indian Languages
const TRANSLATED_MATERIALS: Record<SupportedLanguage, Record<string, string>> = {
  en: {},
  hi: {
    'Handmade wasli paper soaked in cow-dung water': 'गोबर के जल से उपचारित हस्तनिर्मित वासली कागज',
    'Bamboo stylus nibs': 'नुकीली बांस की पारंपरिक कलम (निब)',
    'Natural vegetable and mineral dyes': 'अपराजिता, हल्दी, नील और पलाश के प्राकृतिक वानस्पतिक एवं खनिज रंग',
    'Rice powder binder': 'प्राकृतिक बबूल गोंद एवं चावल का पेस्ट',
    'Unbleached hand-spun cotton': 'अविशोधित हथकरघा खादी सूती वस्त्र',
    'Myrobalan (Karakka) nut bath': 'हरड़ (हरीतकी) फल का औषधीय अर्क लेप',
    'Fermented jaggery and iron rust ink (Kasim)': 'किण्वित गुड़ और लोहे के जंग की काली स्याही (कासिम)',
    'Alum mordant': 'फिटकरी रंग बंधक',
    'Red ochre (Geru) washed base': 'प्राकृतिक गेरू मिट्टी से लिपा हुआ धरातल',
    'Chewed bamboo twigs': 'कूची गई बांस की टहनी की पारंपरिक ब्रश',
    'Rice flour paste with water': 'पिसे हुए चावल का घोल एवं प्राकृतिक गोंद',
    '24-Karat pure gold leaf foil': '२४-कैरेट शुद्ध स्वर्ण पत्र',
    'Pulverized precious gemstone gouache': 'पीसे हुए बहुमूल्य रत्न, लाजवर्त एवं हरिताल का पेस्ट',
    'Starched pure cotton khadi': 'मांड लगा हुआ शुद्ध सूती खादी कपड़ा',
    'Dried palmyra palm leaves': 'धूप में सुखाई गई ताड़ के पत्तों की पट्टियां',
    'Iron stylus engraving tool': 'नुकीला लोहे का उत्कीर्णन औजार (लेखाणी)',
    'Lampblack soot and camphor': 'कपूर और सरसों तेल के दीये का काजल',
    'Natural abrus precatorius paste': 'गुंजा बीज और इमली के बीजों का प्राकृतिक लेप'
  },
  ta: {
    'Handmade wasli paper soaked in cow-dung water': 'பாரம்பரிய சாணம் கலந்த நீரில் பதப்படுத்தப்பட்ட வாசலி காகிதம்',
    'Bamboo stylus nibs': 'மூங்கில் குச்சி தூரிகை',
    'Natural vegetable and mineral dyes': 'இயற்கை மூலிகை மற்றும் கனிம சாயங்கள் (மஞ்சள், அவுரி, செம்பருத்தி)',
    'Rice powder binder': 'அரிசி மாவு மற்றும் இயற்கை பசை',
    'Unbleached hand-spun cotton': 'கைத்தறி பருத்தி துணி',
    'Fermented jaggery and iron rust ink (Kasim)': 'வெல்லம் மற்றும் இரும்பு துரு கலந்த கருப்பு மை',
    '24-Karat pure gold leaf foil': '24-காரட் தூய தங்க இலை தகடு',
    'Pulverized precious gemstone gouache': 'அரைக்கப்பட்ட ரத்தினக் கற்கள் மற்றும் இயற்கை வண்ணங்கள்',
    'Dried palmyra palm leaves': 'பதப்படுத்தப்பட்ட பனை ஓலைகள்',
    'Iron stylus engraving tool': 'இரும்பு எழுத்தாணி',
    'Lampblack soot and camphor': 'விளக்குக்கரி மை மற்றும் கற்பூரம்'
  },
  te: {
    'Handmade wasli paper soaked in cow-dung water': 'ఆవు పేడ నీటిలో శుద్ధి చేసిన సాంప్రదాయ వాస్లీ కాగితం',
    'Bamboo stylus nibs': 'వెదురు కలం',
    'Natural vegetable and mineral dyes': 'సహజ వృక్ష సంబంధిత మరియు ఖనిజ రంగులు',
    'Rice powder binder': 'బియ్యపు పిండి మరియు సహజ జిగురు',
    'Unbleached hand-spun cotton': 'చేనేత ఖాదీ కాటన్ వస్త్రం',
    'Fermented jaggery and iron rust ink (Kasim)': 'బెల్లం మరియు ఇనుప తుప్పుతో తయారైన నల్లటి రంగు (కాసిమ్)',
    '24-Karat pure gold leaf foil': '24-క్యారెట్ స్వచ్ఛమైన బంగారు రేకు',
    'Dried palmyra palm leaves': 'తాళపత్రాలు',
    'Iron stylus engraving tool': 'ఇనుప గంటం',
    'Lampblack soot and camphor': 'దీపం కాటుక మరియు కర్పూరం'
  },
  bn: {
    'Handmade wasli paper soaked in cow-dung water': 'গোবর জলে শোধিত ঐতিহ্যবাহী হস্তনির্মিত ওয়াসলি কাগজ',
    'Bamboo stylus nibs': 'বাঁশের কঞ্চি দিয়ে তৈরি কলম',
    'Natural vegetable and mineral dyes': 'অপরাজিতা, হলুদ ও নীলের প্রাকৃতিক উদ্ভিজ্জ রং',
    'Rice powder binder': 'চালের গুঁড়ো ও প্রাকৃতিক আঠা',
    'Unbleached hand-spun cotton': 'হাতে বোনা খাঁটি খাদি সুতি কাপড়',
    '24-Karat pure gold leaf foil': '২৪-ক্যারেট খাঁটি সোনার তবক',
    'Dried palmyra palm leaves': 'তালপাতার পুথি ও খোদাই পাতা',
    'Iron stylus engraving tool': 'লোহার ধারালো লেখনী',
    'Lampblack soot and camphor': 'প্রদীপের খাঁটি কাজল ও কর্পূর'
  },
  mr: {
    'Handmade wasli paper soaked in cow-dung water': 'शेणाच्या पाण्यात प्रक्रिया केलेला हस्तनिर्मित वासली कागद',
    'Bamboo stylus nibs': 'बांबूची पारंपरिक टोकदार लेखणी',
    'Natural vegetable and mineral dyes': 'हळद, नीळ आणि पळसापासून बनवलेले नैसर्गिक रंग',
    'Rice powder binder': 'तांदळाचे पीठ व बाभळीचा डिंक',
    'Red ochre (Geru) washed base': 'नैसर्गिक गेरू मातीचा थर दिलेला कॅनव्हास',
    'Chewed bamboo twigs': 'बांबूच्या काडीचा कुंचला',
    '24-Karat pure gold leaf foil': '२४-कॅरेट शुद्ध सोन्याचा वर्क',
    'Dried palmyra palm leaves': 'वाळवलेली ताडपत्रे',
    'Iron stylus engraving tool': 'लोखंडी टोकदार लेखणी'
  },
  gu: {
    'Handmade wasli paper soaked in cow-dung water': 'છાણના પાણીમાં પલાળેલો પરંપરાગત વાસલી કાગળ',
    'Bamboo stylus nibs': 'વાંસની પરંપરાગત કલમ',
    'Natural vegetable and mineral dyes': 'કુદરતી વનસ્પતિ અને ખનિજ રંગો',
    'Rice powder binder': 'ચોખાનો લોટ અને કુદરતી ગુંદર',
    '24-Karat pure gold leaf foil': '૨૪-કેરેટ શુદ્ધ સોનાનો વરખ',
    'Dried palmyra palm leaves': 'તાડપત્રો',
    'Iron stylus engraving tool': 'લોખંડની શલાકા'
  },
  kn: {
    'Handmade wasli paper soaked in cow-dung water': 'ಸಗಣಿ ನೀರಿನಲ್ಲಿ ಹದಗೊಳಿಸಿದ ಕೈಯಿಂದ ಮಾಡಿದ ವಾಸ್ಲಿ ಕಾಗದ',
    'Bamboo stylus nibs': 'ಬಿದಿರಿನ ಸಾಂಪ್ರದಾಯಿಕ ಕಲ್ಮ',
    'Natural vegetable and mineral dyes': 'ನೈಸರ್ಗಿಕ ಸಸ್ಯಜನ್ಯ ಮತ್ತು ಖನಿಜ ಬಣ್ಣಗಳು',
    'Rice powder binder': 'ಅಕ್ಕಿ ಹಿಟ್ಟು ಮತ್ತು ನೈಸರ್ಗಿಕ ಅಂಟು',
    '24-Karat pure gold leaf foil': '೨೪-ಕ್ಯಾರಟ್ ಶುದ್ಧ ಚಿನ್ನದ ಎಲೆ',
    'Dried palmyra palm leaves': 'ತಾಳೆಗರಿಗಳು',
    'Iron stylus engraving tool': 'ಕಬ್ಬಿಣದ ಗಂಟಂ'
  },
  ml: {
    'Handmade wasli paper soaked in cow-dung water': 'ചാണകവെള്ളത്തിൽ പാകപ്പെടുത്തിയ പരമ്പരാഗത വാസ്‌ലി പേപ്പർ',
    'Bamboo stylus nibs': 'മുളന്തണ്ട് കൊണ്ടുള്ള പരമ്പരാഗത പേന',
    'Natural vegetable and mineral dyes': 'പ്രകൃതിദത്ത സസ്യ-ധാതു ചായങ്ങൾ',
    'Rice powder binder': 'അരിപ്പൊടിയും പ്രകൃതിദത്ത പശയും',
    '24-Karat pure gold leaf foil': '24-കാരറ്റ് ശുദ്ധമായ സ്വർണ്ണത്തകിട്',
    'Dried palmyra palm leaves': 'താളിയോലകൾ',
    'Iron stylus engraving tool': 'എഴുത്താണി'
  },
  pa: {
    'Handmade wasli paper soaked in cow-dung water': 'ਗੋਬਰ ਦੇ ਪਾਣੀ ਨਾਲ ਸੋਧਿਆ ਹੱਥ ਦਾ ਬਣਿਆ ਵਾਸਲੀ ਕਾਗਜ਼',
    'Bamboo stylus nibs': 'ਬਾਂਸ ਦੀ ਕਲਮ',
    'Natural vegetable and mineral dyes': 'ਕੁਦਰਤੀ ਬਨਸਪਤੀ ਤੇ ਖਣਿਜ ਰੰਗ',
    'Rice powder binder': 'ਚੌਲਾਂ ਦਾ ਆਟਾ ਤੇ ਕੁਦਰਤੀ ਗੂੰਦ',
    '24-Karat pure gold leaf foil': '24-ਕੈਰੇਟ ਸ਼ੁੱਧ ਸੋਨੇ ਦਾ ਵਰਕ'
  },
  or: {
    'Handmade wasli paper soaked in cow-dung water': 'ଗୋବର ପାଣିରେ ପ୍ରସ୍ତୁତ ପାରମ୍ପରିକ ୱାସଲି କାଗଜ',
    'Bamboo stylus nibs': 'ବାଉଁଶ କଲମ',
    'Natural vegetable and mineral dyes': 'ପ୍ରାକୃତିକ ବୃକ୍ଷଲତା ଓ ଖଣିଜ ରଙ୍ଗ',
    'Dried palmyra palm leaves': 'ଶୁଖିଲା ତାଳପତ୍ର',
    'Iron stylus engraving tool': 'ଲୁହା ଲେଖନୀ',
    'Lampblack soot and camphor': 'ଦୀପ କଳା ଓ କର୍ପୂର'
  },
  as: {
    'Handmade wasli paper soaked in cow-dung water': 'গোবৰ পানীত শোধিত হাতেৰে বনোৱা ৱাছলি কাগজ',
    'Bamboo stylus nibs': 'বাঁহৰ কলম',
    'Natural vegetable and mineral dyes': 'প্ৰাকৃতিক উদ্ভিদ আৰু খনিজ ৰং',
    'Dried palmyra palm leaves': 'তালপাতৰ ফলক',
    'Iron stylus engraving tool': 'লোৰ লেখনী'
  }
};

// Localize a single StateArtData object with deep materials, motifs, lore & technique translations
export const getLocalizedState = (state: StateArtData, lang?: SupportedLanguage | string): StateArtData => {
  if (!lang || lang === 'en') return state;
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;

  const localizedName = STATE_NAME_TRANSLATIONS[safeLang]?.[state.name] || state.name;
  const localizedArtForm = ART_FORM_TRANSLATIONS[safeLang]?.[state.primaryArtForm] || state.primaryArtForm;

  // Localize materials
  const localizedMaterials = state.traditionalMaterials?.map((mat) => {
    return TRANSLATED_MATERIALS[safeLang]?.[mat] || (safeLang === 'hi' ? `पारंपरिक प्राकृतिक सामग्री: ${mat}` : mat);
  });

  // Localize motifs
  const localizedMotifs = state.keyMotifs?.map((m) => {
    if (safeLang === 'hi') {
      if (m.includes('Matsya') || m.includes('Fish')) return 'मत्स्य (पवित्र मछली) - उर्वरता, समृद्धि एवं जल तत्व की जीवनदायिनी शक्ति';
      if (m.includes('Padma') || m.includes('Lotus')) return 'पद्म (सहस्रदल कमल) - ब्रह्मांडीय चेतना, शुद्धि एवं दैवीय उत्पत्ति';
      if (m.includes('Mayura') || m.includes('Peacock')) return 'मयूर (मोर) - वर्षा उत्सव, अमर प्रेम एवं सौंदर्य का द्योतक';
      if (m.includes('Surya')) return 'सूर्य एवं चंद्र - ब्रह्मांडीय ऊर्जा, संतुलन एवं शाश्वत जीवन चक्र';
      if (m.includes('Tarpa')) return 'तारपा नृत्य - सामूहिकता, प्रकृति उपासना एवं लयबद्ध जीवन चक्र';
      if (m.includes('Shrinathji') || m.includes('Kadamba')) return 'कदंब कुंज एवं श्रीनाथजी - भक्ति, समर्पण एवं दिव्य लीला';
      if (m.includes('Kalpavriksha') || m.includes('Tree')) return 'कल्पवृक्ष (जीवन का वृक्ष) - इच्छापूर्ति, प्रकृति से अटूट संबंध';
      if (m.includes('Ganesha')) return 'विघ्नहर्ता गणेश - शुभ आरंभ, रिद्धि-सिद्धि एवं मांगलिक फल';
      return `पवित्र रूपांकन: ${m}`;
    }
    return m;
  });

  // Localize unique lore
  const localizedLore = state.uniqueFacts?.map((fact) => {
    if (safeLang === 'hi') {
      if (fact.includes('Geographical Indication') || fact.includes('GI')) {
        return 'भारत सरकार द्वारा प्रतिष्ठित भौगोलिक उपदर्शन (GI) प्रमाणित मूल धरोहर, जो वास्तविक गुरु-शिष्य परंपरा का संरक्षण करती है।';
      }
      if (fact.includes('five distinct styles') || fact.includes('Bharni')) {
        return 'पारंपरिक रूप से पांच विशिष्ट शैलियों में विभाजित: भरनी, कचनी, तांत्रिक, गोदना और कोहबर।';
      }
      if (fact.includes('Natural pigments') || fact.includes('turmeric')) {
        return 'अपराजिता पुष्प, हल्दी, नील, काजल और बेलपत्र से पूरी तरह रासायनिक मुक्त जैविक रंग तैयार किए जाते हैं।';
      }
      return fact;
    }
    return fact;
  });

  // Localize tutorial step-by-step
  let localizedTutorial = state.tutorial;
  if (state.tutorial && safeLang === 'hi') {
    localizedTutorial = {
      ...state.tutorial,
      title: `${localizedArtForm} में निपुणता: पवित्र रूपांकन निर्माण`,
      materialsNeeded: state.tutorial.materialsNeeded?.map((m) => `सामग्री: ${m}`),
      steps: state.tutorial.steps?.map((step) => {
        const hiStepTitles: Record<number, { title: string; desc: string; tip: string }> = {
          1: {
            title: 'पारंपरिक दोहरी रेखा सीमा (बॉर्डर) बनाएं',
            desc: 'कागज के चारों ओर 1 इंच की दोहरी समानांतर रेखाएं खींचें। इस कला में कोई भी कृति बिना अलंकृत सीमा के नहीं छोड़ी जाती।',
            tip: 'दोहरी रेखाओं के बीच में तिरछी रेखाओं (कचनी) या त्रिकोणों की श्रृंखला भरें।'
          },
          2: {
            title: 'पवित्र रूपांकन की बाह्य रूपरेखा (कंटूर) बनाएं',
            desc: 'केंद्र में मुख्य देव या प्राकृतिक प्रतीक की सुडौल रूपरेखा बनाएं। बारीक बांस की कलम या स्याही पेन का प्रयोग करें।',
            tip: 'नेत्रों में बादाम जैसी बड़ी और भावपूर्ण शैली दें, जो इस प्राचीन विधा की मुख्य पहचान है।'
          },
          3: {
            title: 'ज्यामितीय खानों में विभाजन एवं कचनी अंकन',
            desc: 'रूपांकन के आंतरिक अंगों को सूक्ष्म समानांतर रेखाओं और बिंदुओं से भरें। यह बारीक रेखांकन कृति को जीवंत बनाता है।',
            tip: 'बिना किसी शेडिंग के केवल रेखाओं के घनत्व से प्रकाश और छाया का संतुलन बनाएं।'
          },
          4: {
            title: 'पृष्ठभूमि में प्रकृति एवं जल तरंगों का अलंकरण',
            desc: 'पारंपरिक शास्त्रों के अनुसार कैनवास पर खाली स्थान नहीं छोड़ा जाता (हॉरर वैकुई)। चारों ओर कमल कलियां, लहरें और पत्तियां बनाएं।',
            tip: 'पांच पंखुड़ियों वाले पुष्प और घुमावदार लताएं रिक्त स्थान को पवित्र ऊर्जा से भर देती हैं।'
          },
          5: {
            title: 'सपाट प्राकृतिक रंगों का भराव (भरनी)',
            desc: 'हल्दी के पीले, अपराजिता के नीले और पलाश के गहरे लाल रंगों को बिना मिलाए सपाट रूप से भरें।',
            tip: 'रंग सूखने के बाद काले रंग की स्याही से दोबारा बाहरी सीमाओं को उभारें।'
          }
        };
        const custom = hiStepTitles[step.stepNumber];
        return {
          ...step,
          title: custom?.title || step.title,
          description: custom?.desc || step.description,
          proTip: custom?.tip || step.proTip
        };
      })
    };
  }

  // Localize history & cultural significance
  let localizedHistory = state.history;
  let localizedSignificance = state.culturalSignificance;
  if (safeLang === 'hi') {
    localizedHistory = `${localizedName} की यह प्राचीन कला परंपरा सदियों पुरानी गुरु-शिष्य परंपरा का प्रतीक है, जिसे भारत सरकार द्वारा प्रतिष्ठित भौगोलिक संकेतक (GI) टैग प्राप्त है।`;
    localizedSignificance = `पारंपरिक रूप से ${localizedName} के सांस्कृतिक उत्सवों, शुभ अनुष्ठानों एवं जीवन चक्र समारोहों में बनाई जाने वाली विशिष्ट कला। पीढ़ी-दर-पीढ़ी विरासत में मिली यह कला प्राकृतिक रंगों और पवित्र रूपांकनों से सजी होती है।`;
  }

  return {
    ...state,
    name: localizedName,
    primaryArtForm: localizedArtForm,
    culturalSignificance: localizedSignificance,
    history: localizedHistory,
    traditionalMaterials: localizedMaterials,
    keyMotifs: localizedMotifs,
    uniqueFacts: localizedLore,
    tutorial: localizedTutorial
  };
};

// Localize a single TourItinerary object (Locked strictly to 1-Day Single Day itinerary)
export const getLocalizedTour = (tour: TourItinerary, lang?: SupportedLanguage | string): TourItinerary => {
  if (!lang || lang === 'en') {
    return {
      ...tour,
      duration: '1-Day Complete Heritage Route (08:30 AM – 07:30 PM)'
    };
  }
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;
  const localizedState = STATE_NAME_TRANSLATIONS[safeLang]?.[tour.stateName || ''] || tour.stateName;

  const durationMap: Record<SupportedLanguage, string> = {
    en: '1-Day Complete Heritage Route (08:30 AM – 07:30 PM)',
    hi: '1-दिवसीय पूर्ण धरोहर मार्ग (प्रातः 08:30 – सायं 07:30)',
    ta: '1-நாள் முழுமையான பாரம்பரியப் பாதை (காலை 08:30 – மாலை 07:30)',
    te: '1-రోజు సంపూర్ణ వారసత్వ యాత్ర (ఉదయం 08:30 – సాయంత్రం 07:30)',
    bn: '১-দিনের সম্পূর্ণ ঐতিহ্যবাহী ভ্রমণ (সকাল ০৮:৩০ – সন্ধ্যা ০৭:৩০)',
    mr: '१-दिवसीय संपूर्ण वारसा मार्ग (सकाळी ०८:३० – संध्याकाळी ०७:३०)',
    gu: '૧-દિવસીય સંપૂર્ણ વારસો માર્ગ (સવારે ૦૮:૩૦ – સાંજે ૦૭:૩૦)',
    kn: '೧-ದಿನದ ಸಂಪೂರ್ಣ ಪರಂಪರೆ ಮಾರ್ಗ (ಬೆಳಿಗ್ಗೆ ೦೮:೩೦ – ಸಂಜೆ ೦೭:೩೦)',
    ml: '1-ദിവസത്തെ സമ്പൂർണ്ണ പൈതൃക പാത (രാവിലെ 08:30 – വൈകുന്നേരം 07:30)',
    pa: '1-ਦਿਨਾ ਸੰਪੂਰਨ ਵਿਰਾਸਤੀ ਰੂਟ (ਸਵੇਰੇ 08:30 – ਸ਼ਾਮ 07:30)',
    or: '୧-ଦିନିଆ ସମ୍ପୂର୍ଣ୍ଣ ଐତିହ୍ୟ ଯାତ୍ରା (ସକାଳ ୦୮:୩୦ – ସନ୍ଧ୍ୟା ୦୭:୩୦)',
    as: '১-দিনীয়া সম্পূৰ্ণ ঐতিহ্য ভ্ৰমণ (ৰাতিপুৱা ০৮:৩০ – গধূলি ০৭:৩০)'
  };

  const periodMap: Record<SupportedLanguage, { Morning: string; Afternoon: string; Evening: string }> = {
    en: { Morning: 'Morning', Afternoon: 'Afternoon', Evening: 'Evening' },
    hi: { Morning: 'प्रातःकाल', Afternoon: 'दोपहर', Evening: 'संध्याकाल' },
    ta: { Morning: 'காலை', Afternoon: 'மதியம்', Evening: 'மாலை' },
    te: { Morning: 'ఉదయం', Afternoon: 'మధ్యాహ్నం', Evening: 'సాయంత్రం' },
    bn: { Morning: 'সকাল', Afternoon: 'দুপুর', Evening: 'সন্ধ্যা' },
    mr: { Morning: 'सकाळ', Afternoon: 'दुपार', Evening: 'संध्याकाळ' },
    gu: { Morning: 'સવાર', Afternoon: 'બપોર', Evening: 'સાંજ' },
    kn: { Morning: 'ಮುಂಜಾನೆ', Afternoon: 'ಮಧ್ಯಾಹ್ನ', Evening: 'ಸಂಜೆ' },
    ml: { Morning: 'രാവിലെ', Afternoon: 'ഉച്ചയ്ക്ക്', Evening: 'വൈകുന്നേരം' },
    pa: { Morning: 'ਸਵੇਰ', Afternoon: 'ਦੁਪਹਿਰ', Evening: 'ਸ਼ਾਮ' },
    or: { Morning: 'ପ୍ରଭାତ', Afternoon: 'ମଧ୍ୟାହ୍ନ', Evening: 'ସନ୍ଧ୍ୟା' },
    as: { Morning: 'ৰাতিপুৱা', Afternoon: 'দুপৰীয়া', Evening: 'সন্ধিয়া' }
  };

  return {
    ...tour,
    stateName: localizedState,
    duration: durationMap[safeLang] || durationMap.en,
    schedule: tour.schedule?.map((item) => ({
      ...item,
      period: periodMap[safeLang]?.[item.period as 'Morning' | 'Afternoon' | 'Evening'] || item.period,
      craftExperience: safeLang === 'hi' ? `मास्टर शिल्पी प्रत्यक्ष अनुभव: ${item.craftExperience}` : item.craftExperience,
      insiderTip: safeLang === 'hi' ? `विशेष मार्गदर्शिका: ${item.insiderTip}` : item.insiderTip
    }))
  };
};

// Localize a MarketplaceListing object
export const getLocalizedListing = (listing: MarketplaceListing, lang?: SupportedLanguage | string): MarketplaceListing => {
  if (!lang || lang === 'en') return listing;
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;

  const localizedState = STATE_NAME_TRANSLATIONS[safeLang]?.[listing.state] || listing.state;
  const localizedArt = ART_FORM_TRANSLATIONS[safeLang]?.[listing.artForm] || listing.artForm;

  const categoryTranslations: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    hi: {
      'Original Painting': 'मूल हस्तचित्र',
      'Handmade Craft': 'पारंपरिक हस्तशिल्प',
      'GI Heritage Art': 'जीआई प्रमाणित धरोहर कला',
      'Silk & Weaves': 'रेशम एवं हथकरघा'
    },
    ta: {
      'Original Painting': 'அசல் ஓவியம்',
      'Handmade Craft': 'கைவினைப் பொருள்',
      'GI Heritage Art': 'GI சான்றளிக்கப்பட்ட கலை',
      'Silk & Weaves': 'பட்டு மற்றும் நெசவு'
    },
    te: {
      'Original Painting': 'అసలైన పెయింటింగ్',
      'Handmade Craft': 'చేతివృత్తులు',
      'GI Heritage Art': 'GI గుర్తింపు పొందిన కళ',
      'Silk & Weaves': 'పట్టు మరియు చేనేత'
    },
    bn: {
      'Original Painting': 'আসল চিত্রশিল্প',
      'Handmade Craft': 'হস্তশিল্প',
      'GI Heritage Art': 'GI স্বীকৃত ঐতিহ্যবাহী শিল্প',
      'Silk & Weaves': 'রেশম ও তাঁত শিল্প'
    },
    mr: {
      'Original Painting': 'मूळ चित्रकला',
      'Handmade Craft': 'हस्तकला',
      'GI Heritage Art': 'GI प्रमाणित वारसा कला',
      'Silk & Weaves': 'रेशीम व विणकाम'
    },
    gu: {
      'Original Painting': 'મૂળ ચિત્રકળા',
      'Handmade Craft': 'હસ્તકળા',
      'GI Heritage Art': 'GI પ્રમાણિત વારસો કળા',
      'Silk & Weaves': 'રેશમ અને વણાટ'
    },
    kn: {
      'Original Painting': 'ಮೂಲ ವರ್ಣಚಿತ್ರ',
      'Handmade Craft': 'ಕರಕುಶಲ ಕಲೆ',
      'GI Heritage Art': 'GI ಮಾನ್ಯತೆ ಪಡೆದ ಕಲೆ',
      'Silk & Weaves': 'ರೇಷ್ಮೆ ಮತ್ತು ನೇಯ್ಗೆ'
    },
    ml: {
      'Original Painting': 'യഥാർത്ഥ പെയിന്റിംഗ്',
      'Handmade Craft': 'കരകൗശല വസ്തു',
      'GI Heritage Art': 'GI അംഗീകൃത പൈതൃക കല',
      'Silk & Weaves': 'പട്ടും നെയ്ത്തും'
    },
    pa: {
      'Original Painting': 'ਅਸਲੀ ਪੇਂਟਿੰਗ',
      'Handmade Craft': 'ਦਸਤਕਾਰੀ',
      'GI Heritage Art': 'GI ਪ੍ਰਮਾਣਿਤ ਵਿਰਾਸਤ',
      'Silk & Weaves': 'ਰੇਸ਼ਮ ਤੇ ਖੱਡੀ'
    },
    or: {
      'Original Painting': 'ମୂଳ ଚିତ୍ରକଳା',
      'Handmade Craft': 'ହସ୍ତଶିଳ୍ପ',
      'GI Heritage Art': 'GI ପ୍ରମାଣିତ ଐତିହ୍ୟ କଳା',
      'Silk & Weaves': 'ପାଟ ଓ ବୁଣାକାରୀ'
    },
    as: {
      'Original Painting': 'মূল চিত্ৰশিল্প',
      'Handmade Craft': 'হস্তশিল্প',
      'GI Heritage Art': 'GI স্বীকৃত ঐতিহ্য কলা',
      'Silk & Weaves': 'পাট-মুগা আৰু তাঁতশাল'
    }
  };

  const titlesMap: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    hi: {
      prod_madhubani_fish: 'मिथिला मत्स्य एवं पवित्र कमल कैनवास',
      prod_warli_tarpa: 'वारली तारपा नृत्य एवं ग्राम कटाई भित्तिचित्र',
      prod_pichwai_shrinathji: 'नाथद्वारा २४के स्वर्ण पत्र कदंब श्रीनाथजी',
      prod_kalamkari_tree: 'श्रीकालहस्ती कल्पवृक्ष हस्तनिर्मित स्क्रॉल',
      prod_pattachitra_ganesha: 'ताल पट्टचित्र ताड़पत्र उत्कीर्ण गणेश',
      prod_tanjore_krishna: 'तंजावूर २२के स्वर्ण पत्र यशोदा कृष्ण फ्रेम'
    },
    ta: {
      prod_madhubani_fish: 'மிதிலா மீன் மற்றும் தாமரை ஓவியம்',
      prod_warli_tarpa: 'வார்லி தார்ப்பா நடனம் & கிராம சுவரோவியம்',
      prod_pichwai_shrinathji: 'நாத்துவாரா 24K தங்க இலை ஸ்ரீநாத்ஜி',
      prod_kalamkari_tree: 'ஸ்ரீகாளஹஸ்தி கற்பகவிருட்சம் துணி ஓவியம்',
      prod_pattachitra_ganesha: 'ஒடிசா பனை ஓலை விநாயகர் செதுக்கல்',
      prod_tanjore_krishna: 'தஞ்சாவூர் 22K தங்க இலை யசோதை கிருஷ்ணர்'
    },
    te: {
      prod_madhubani_fish: 'మిథిల మత్స్య & తామర కాన్వాస్',
      prod_warli_tarpa: 'వార్లీ తార్పా నృత్యం & పంటల కుడ్యచిత్రం',
      prod_pichwai_shrinathji: 'నాథద్వారా 24K బంగారు రేకు శ్రీనాథ్‌జీ',
      prod_kalamkari_tree: 'శ్రీకాళహస్తి కల్పవృక్షం చేతివ్రాత వస్త్రం',
      prod_pattachitra_ganesha: 'తాళపత్ర చెక్కడపు వినాయకుడు',
      prod_tanjore_krishna: 'తంజావూరు 22K స్వర్ణ రేకు యశోద కృష్ణుడు'
    },
    bn: {
      prod_madhubani_fish: 'মিথিলা মৎস্য ও পদ্মফুল ক্যানভাস',
      prod_warli_tarpa: 'ওয়ারলি তারপা নৃত্য ও নবান্ন দেওয়ালচিত্র',
      prod_pichwai_shrinathji: 'নাথদ্বারা ২৪কে সোনার শ্রীনাথজি পট',
      prod_kalamkari_tree: 'শ্রীকালহস্তী কল্পবৃক্ষ হাতে আঁকা স্ক্রোল',
      prod_pattachitra_ganesha: 'তালপাতার পুথিতে খোদাই গণেশ',
      prod_tanjore_krishna: 'তাঞ্জোর ২২কে স্বর্ণপত্র যশোদা কৃষ্ণ'
    },
    mr: {
      prod_madhubani_fish: 'मिथिला मत्स्य आणि पवित्र कमळ कॅनव्हास',
      prod_warli_tarpa: 'वारली तारपा नृत्य आणि सुगी भित्तीचित्र',
      prod_pichwai_shrinathji: 'नाथद्वारा २४के सुवर्ण पत्र श्रीनाथजी',
      prod_kalamkari_tree: 'श्रीकालहस्ती कल्पवृक्ष हस्तनिर्मित स्क्रोल',
      prod_pattachitra_ganesha: 'ताडपत्री कोरीव काम केलेले श्री गणेश',
      prod_tanjore_krishna: 'तंजावर २२के सुवर्ण पत्र यशोदा कृष्ण'
    },
    gu: {
      prod_madhubani_fish: 'મિથિલા મત્સ્ય અને પવિત્ર કમળ કેનવાસ',
      prod_warli_tarpa: 'વારલી તારપા નૃત્ય ભીંતચિત્ર',
      prod_pichwai_shrinathji: 'નાથદ્વારા ૨૪કે ગોલ્ડ લીફ શ્રીનાથજી',
      prod_kalamkari_tree: 'શ્રીકાલહસ્તી કલ્પવૃક્ષ હેન્ડ-પેઇન્ટેડ સ્ક્ર્રોલ',
      prod_pattachitra_ganesha: 'તાડપત્ર પર કંડારેલા ગણેશજી',
      prod_tanjore_krishna: 'તંજાવુર ૨૨કે ગોલ્ડ ફોઇલ યશોદા કૃષ્ણ'
    },
    kn: {
      prod_madhubani_fish: 'ಮಿಥಿಲಾ ಮತ್ಸ್ಯ & ಪವಿತ್ರ ಕಮಲ ಚಿತ್ರ',
      prod_warli_tarpa: 'ವಾರ್ಲಿ ತಾರ್ಪಾ ನೃತ್ಯ ಮತ್ತು ಸುಗ್ಗಿ ಗೋಡೆಚಿತ್ರ',
      prod_pichwai_shrinathji: 'ನಾಥದ್ವಾರ ೨೪ಕೆ ಚಿನ್ನದ ಎಲೆಯ ಶ್ರೀನಾಥ್‌ಜಿ',
      prod_kalamkari_tree: 'ಶ್ರೀಕಾಳಹಸ್ತಿ ಕಲ್ಪವೃಕ್ಷ ಹಸ್ತಲಿಖಿತ ಚಿತ್ರ',
      prod_pattachitra_ganesha: 'ತಾಳೆಗರಿ ಕೆತ್ತನೆಯ ಶ್ರೀ ಗಣೇಶ',
      prod_tanjore_krishna: 'ತಂಜಾವೂರು ೨೨ಕೆ ಚಿನ್ನದ ಎಲೆಯ ಯಶೋದಾ ಕೃಷ್ಣ'
    },
    ml: {
      prod_madhubani_fish: 'മിഥില മത്സ്യ & താമര ക്യാൻവാസ്',
      prod_warli_tarpa: 'വാർലി താർപ്പ നൃത്ത ചുവർചിത്രം',
      prod_pichwai_shrinathji: 'നാഥ്ദ്വാര 24K സ്വർണ്ണ ശ്രീനാഥ്ജി',
      prod_kalamkari_tree: 'ശ്രീകാളഹസ്തി കല്പവൃക്ഷ തുണിചിത്രം',
      prod_pattachitra_ganesha: 'താളിയോലയിൽ കൊത്തിയെടുത്ത ഗണപതി',
      prod_tanjore_krishna: 'തഞ്ചാവൂർ 22K സ്വർണ്ണ യശോദ കൃഷ്ണ'
    },
    pa: {
      prod_madhubani_fish: 'ਮਿਥਿਲਾ ਮੱਛੀ ਅਤੇ ਕਮਲ ਕੈਨਵਸ',
      prod_warli_tarpa: 'ਵਾਰਲੀ ਤਾਰਪਾ ਨਾਚ ਕੰਧ ਚਿੱਤਰ',
      prod_pichwai_shrinathji: 'ਨਾਥਦੁਆਰਾ 24K ਸੋਨੇ ਦਾ ਸ਼੍ਰੀਨਾਥਜੀ',
      prod_kalamkari_tree: 'ਸ਼੍ਰੀਕਾਲਹਸਤੀ ਕਲਪਵ੍ਰਿਕਸ਼ ਸਕ੍ਰੋਲ',
      prod_pattachitra_ganesha: 'ਤਾੜਪੱਤਰ ਉੱਕਰਿਆ ਸ਼੍ਰੀ ਗਣੇਸ਼',
      prod_tanjore_krishna: 'ਤੰਜਾਵੁਰ 22K ਸੋਨੇ ਦਾ ਯਸ਼ੋਦਾ ਕ੍ਰਿਸ਼ਨ'
    },
    or: {
      prod_madhubani_fish: 'ମିଥିଳା ମତ୍ସ୍ୟ ଓ ପଦ୍ମଫୁଲ କାନଭାସ',
      prod_warli_tarpa: 'ୱାରଲି ତାରପା ନୃତ୍ୟ କାନ୍ଥଚିତ୍ର',
      prod_pichwai_shrinathji: 'ନାଥଦ୍ୱାରା ୨୪କେ ସ୍ୱର୍ଣ୍ଣ ଶ୍ରୀନାଥଜୀ ପଟ',
      prod_kalamkari_tree: 'ଶ୍ରୀକାଳହସ୍ତୀ କଳ୍ପବୃକ୍ଷ ହସ୍ତକୃତ ସ୍କ୍ରୋଲ',
      prod_pattachitra_ganesha: 'ତାଳପତ୍ର ଖୋଦେଇ ଶ୍ରୀ ଗଣେଶ',
      prod_tanjore_krishna: 'ତାଞ୍ଜୋର ୨୨କେ ସ୍ୱର୍ଣ୍ଣ ଯଶୋଦା କୃଷ୍ଣ'
    },
    as: {
      prod_madhubani_fish: 'মিথিলা মৎস্য আৰু পদুম কেনভাছ',
      prod_warli_tarpa: 'ৱাৰ্লি তাৰ্পা নৃত্যৰ বেৰৰ ছবি',
      prod_pichwai_shrinathji: 'নাথদ্বাৰা ২৪কে সোণালী শ্ৰীনাথজী পট',
      prod_kalamkari_tree: 'শ্ৰীক্কালহস্তী কল্পবৃক্ষ হস্তশিল্প',
      prod_pattachitra_ganesha: 'তালপাতৰ খোদিত শ্ৰী গণেশ',
      prod_tanjore_krishna: 'তাঞ্জোৰ ২২কে সোণালী যশোদা কৃষ্ণ'
    }
  };

  const localizedCategory = categoryTranslations[safeLang]?.[listing.category] || listing.category;
  const localizedTitle = titlesMap[safeLang]?.[listing.id] || listing.title;

  const descNotice = safeLang === 'hi'
    ? 'सत्यापित जीआई (GI) प्रमाणित मूल हस्तशिल्प। कारीगरों द्वारा प्राकृतिक खनिज रंगों एवं पारंपरिक तकनीकों से निर्मित। ८५% सीधा भुगतान मास्टर शिल्पी को।'
    : safeLang === 'ta'
    ? 'சான்றளிக்கப்பட்ட GI பாரம்பரிய கைவினைப்பொருள். இயற்கை வண்ணங்களால் உருவாக்கப்பட்டது. 85% நேரடி வருவாய் கலைஞருக்கு செல்கிறது.'
    : safeLang === 'te'
    ? 'ధృవీకరించబడిన GI సాంప్రదాయ హస్తకళ. సహజ రంగులతో రూపొందించబడింది. 85% చెల్లింపు నేరుగా కళాకారుడికి చేరుతుంది.'
    : listing.description;

  return {
    ...listing,
    title: localizedTitle,
    state: localizedState,
    artForm: localizedArt,
    category: localizedCategory,
    description: descNotice
  };
};

// Localize a Workshop object
export const getLocalizedWorkshop = (ws: Workshop, lang?: SupportedLanguage | string): Workshop => {
  if (!lang || lang === 'en') return ws;
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;

  const localizedState = STATE_NAME_TRANSLATIONS[safeLang]?.[ws.state || ws.hostState || ''] || ws.state;
  const localizedArt = ART_FORM_TRANSLATIONS[safeLang]?.[ws.artForm] || ws.artForm;

  const workshopTitles: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    hi: {
      ws_madhubani_master: 'मधुबनी पवित्र कमल एवं मत्स्य मास्टरक्लास',
      ws_warli_tarpa: 'वारली पैतृक ज्यामिति एवं तारपा नृत्य कार्यशाला'
    },
    ta: {
      ws_madhubani_master: 'மிதிலா தாமரை மற்றும் மீன் மாஸ்டர்கிளாஸ்',
      ws_warli_tarpa: 'வார்லி பாரம்பரிய வடிவவியல் & தார்ப்பா பயிலரங்கம்'
    },
    te: {
      ws_madhubani_master: 'మధుబని పవిత్ర తామర మరియు మత్స్య మాస్టర్‌క్లాస్',
      ws_warli_tarpa: 'వార్లీ పూర్వీకుల రేఖాగణితం & తార్పా వర్క్‌షాప్'
    },
    bn: {
      ws_madhubani_master: 'মধুবাণী পদ্ম ও মাছ আঁকার মাস্টারক্লাস',
      ws_warli_tarpa: 'ওয়ারলি জ্যামিতি ও তারপা নৃত্য কর্মশালা'
    },
    mr: {
      ws_madhubani_master: 'मधुबनी पवित्र कमळ आणि मत्स्य मास्टरक्लास',
      ws_warli_tarpa: 'वारली पूर्वजांची भूमिती व तारपा नृत्य कार्यशाळा'
    },
    gu: {
      ws_madhubani_master: 'મધુબની પવિત્ર કમળ અને મત્સ્ય માસ્ટરક્લાસ',
      ws_warli_tarpa: 'વારલી પૂર્વજોની ભૂમિતિ અને તારપા વર્કશોપ'
    },
    kn: {
      ws_madhubani_master: 'ಮಧುಬನಿ ಪವಿತ್ರ ಕಮಲ ಮತ್ತು ಮತ್ಸ್ಯ ಮಾಸ್ಟರ್‌ಕ್ಲಾಸ್',
      ws_warli_tarpa: 'ವಾರ್ಲಿ ರೇಖಾಗಣಿತ ಮತ್ತು ತಾರ್ಪಾ ನೃತ್ಯ ಕಾರ್ಯಾಗಾರ'
    },
    ml: {
      ws_madhubani_master: 'മധുബനി താമരയും മത്സ്യവും മാസ്റ്റർക്ലാസ്സ്',
      ws_warli_tarpa: 'വാർലി ജ്യാമിതി & താർപ്പ നൃത്ത ശിൽപ്പശാല'
    },
    pa: {
      ws_madhubani_master: 'ਮਧੂਬਨੀ ਪਵਿੱਤਰ ਕਮਲ ਅਤੇ ਮੱਛੀ ਮਾਸਟਰਕਲਾਸ',
      ws_warli_tarpa: 'ਵਾਰਲੀ ਜਿਓਮੈਟਰੀ ਅਤੇ ਤਾਰਪਾ ਨਾਚ ਵਰਕਸ਼ਾਪ'
    },
    or: {
      ws_madhubani_master: 'ମଧୁବନୀ ପବିତ୍ର ପଦ୍ମ ଓ ମାଛ ମାଷ୍ଟରକ୍ଲାସ',
      ws_warli_tarpa: 'ୱାରଲି ଜ୍ୟାମିତି ଓ ତାରପା ନୃତ୍ୟ କର୍ମଶାଳା'
    },
    as: {
      ws_madhubani_master: 'মধুৱনী পদুম আৰু মাছৰ চিত্ৰকলা মাষ্টাৰক্লাছ',
      ws_warli_tarpa: 'ৱাৰ্লি জ্যামিতিক আৰু তাৰ্পা নৃত্য কৰ্মশালা'
    }
  };

  const durationMap: Record<SupportedLanguage, string> = {
    en: ws.duration,
    hi: ws.duration.includes('90') ? '90 मिनट लाइव कार्यशाला' : '2 घंटे लाइव संवादात्मक सत्र',
    ta: ws.duration.includes('90') ? '90 நிமிடங்கள் நேரலை' : '2 மணி நேர நேரலை பயிலரங்கம்',
    te: ws.duration.includes('90') ? '90 నిమిషాల ప్రత్యక్ష తరగతి' : '2 గంటల లైవ్ వర్క్‌షాప్',
    bn: ws.duration.includes('90') ? '৯০ মিনিট লাইভ ক্লাস' : '২ ঘণ্টা লাইভ কর্মশালা',
    mr: ws.duration.includes('90') ? '९० मिनिटे थेट कार्यशाळा' : '२ तास थेट संवादात्मक सत्र',
    gu: ws.duration.includes('90') ? '૯૦ મિનિટ લાઇવ વર્કશોપ' : '૨ કલાક લાઇવ સત્ર',
    kn: ws.duration.includes('90') ? '೯೦ ನಿಮಿಷಗಳ ಲೈವ್ ಸೆಷನ್' : '೨ ಗಂಟೆಗಳ ಲೈವ್ ಕಾರ್ಯಾಗಾರ',
    ml: ws.duration.includes('90') ? '90 മിനിറ്റ് ലൈവ് ക്ലാസ്' : '2 മണിക്കൂർ ലൈവ് ശിൽപ്പശാല',
    pa: ws.duration.includes('90') ? '90 ਮਿੰਟ ਲਾਈਵ ਵਰਕਸ਼ਾਪ' : '2 ਘੰਟੇ ਲਾਈਵ ਸੈਸ਼ਨ',
    or: ws.duration.includes('90') ? '୯୦ ମିନିଟ ଲାଇଭ କର୍ମଶାଳା' : '୨ ଘଣ୍ଟା ଲାଇଭ ସତ୍ର',
    as: ws.duration.includes('90') ? '৯০ মিনিট লাইভ কৰ্মশালা' : '২ ঘণ্টা লাইভ অনুষ্ঠান'
  };

  const localizedTitle = workshopTitles[safeLang]?.[ws.id] || ws.title;

  return {
    ...ws,
    title: localizedTitle,
    state: localizedState,
    artForm: localizedArt,
    duration: durationMap[safeLang] || ws.duration,
    level: safeLang === 'hi' ? 'सभी स्तर (शुरुआती से उन्नत)' : ws.level,
    description: safeLang === 'hi'
      ? `प्रमाणित गुरु द्वारा प्राकृतिक रंगों के निर्माण एवं पारंपरिक तकनीकों का प्रत्यक्ष ऑनलाइन प्रशिक्षण। ৯०% सीधा भुगतान शिल्पी को।`
      : ws.description
  };
};

// Initial community posts with authentic artworks - cleared per user request for direct user uploads
export const INITIAL_LOCALIZED_POSTS: CommunityPost[] = [];

// Localize a CommunityPost object
export const getLocalizedCommunityPost = (post: CommunityPost, lang?: SupportedLanguage | string): CommunityPost => {
  if (!lang || lang === 'en') return post;
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;

  const localizedState = STATE_NAME_TRANSLATIONS[safeLang]?.[post.state || post.authorState || ''] || post.state;
  const localizedArt = ART_FORM_TRANSLATIONS[safeLang]?.[post.artForm] || post.artForm;

  const postTitles: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    hi: {
      post_bihar_mithila_1: 'मिथिला युगल मत्स्य एवं प्रफुल्लित कमल सीमांकन',
      post_mh_warli_1: 'तारपा नृत्य एवं ग्राम नवान्न उत्सव भित्तिचित्र',
      post_raj_pichwai_1: 'कदंब कुंज में २४के स्वर्ण पत्र जड़ित श्रीनाथजी'
    },
    ta: {
      post_bihar_mithila_1: 'மிதிலா இரட்டை மீன் & மலர்ந்த தாமரை ஓவியம்',
      post_mh_warli_1: 'வார்லி தார்ப்பா நடனம் & கிராம அறுவடை கொண்டாட்டம்',
      post_raj_pichwai_1: '24K தங்க வேலைப்பாட்டுடன் கூடிய ஸ்ரீநாத்ஜி'
    },
    te: {
      post_bihar_mithila_1: 'మిథిల జంట మత్స్య & వికసించిన తామర బోర్డర్',
      post_mh_warli_1: 'తార్పా నృత్యం & గ్రామీణ పంటల ఉత్సవం',
      post_raj_pichwai_1: '24K బంగారు రేకుతో కూడిన శ్రీనాథ్‌జీ పెయింటింగ్'
    },
    bn: {
      post_bihar_mithila_1: 'মিথিলা যুগল মৎস্য ও প্রস্ফুটিত পদ্ম বর্ডার',
      post_mh_warli_1: 'তারপা নৃত্য ও নবান্ন উৎসব পটচিত্র',
      post_raj_pichwai_1: '২৪কে সোনার কারুকাজ সমন্বিত শ্রীনাথজি'
    },
    mr: {
      post_bihar_mithila_1: 'मिथिला जोडी मत्स्य आणि बहरलेले कमळ बॉर्डर',
      post_mh_warli_1: 'तारपा नृत्य आणि ग्रामीण सुगी उत्सव भित्तीचित्र',
      post_raj_pichwai_1: 'कदंब कुंजात २४के सुवर्ण पत्र श्रीनाथजी'
    },
    gu: {
      post_bihar_mithila_1: 'મિથિલા યુગલ મત્સ્ય અને ખીલેલું કમળ બોર્ડર',
      post_mh_warli_1: 'તારપા નૃત્ય અને ગ્રામીણ લણણી ઉત્સવ',
      post_raj_pichwai_1: '૨૪કે ગોલ્ડ ઇનલે સાથે શ્રીનાથજી'
    },
    kn: {
      post_bihar_mithila_1: 'ಮಿಥಿಲಾ ಜೋಡಿ ಮೀನು & ಅರಳಿದ ಕಮಲದ ಗಡಿ',
      post_mh_warli_1: 'ತಾರ್ಪಾ ನೃತ್ಯ ಮತ್ತು ಸುಗ್ಗಿ ಹಬ್ಬದ ಆಚರಣೆ',
      post_raj_pichwai_1: '೨೪ಕೆ ಚಿನ್ನದ ಎಲೆಯ ಶ್ರೀನಾಥ್‌ಜಿ ಚಿತ್ರ'
    },
    ml: {
      post_bihar_mithila_1: 'മിഥില ഇരട്ട മത്സ്യവും വിരിഞ്ഞ താമരയും',
      post_mh_warli_1: 'താർപ്പ നൃത്തവും ഗ്രാമീണ വിളവെടുപ്പ് ആഘോഷവും',
      post_raj_pichwai_1: '24K സ്വർണ്ണപ്പണിയോടുകൂടിയ ശ്രീനാഥ്ജി'
    },
    pa: {
      post_bihar_mithila_1: 'ਮਿਥਿਲਾ ਜੋੜੀ ਮੱਛੀ ਅਤੇ ਖਿੜਿਆ ਕਮਲ ਬਾਰਡਰ',
      post_mh_warli_1: 'ਤਾਰਪਾ ਨਾਚ ਅਤੇ ਪਿੰਡ ਦਾ ਵਾਢੀ ਉਤਸਵ',
      post_raj_pichwai_1: '24K ਸੋਨੇ ਦੇ ਕੰਮ ਨਾਲ ਸ਼੍ਰੀਨਾਥਜੀ'
    },
    or: {
      post_bihar_mithila_1: 'ମିଥିଳା ଯୁଗଳ ମାଛ ଓ ପ୍ରସ୍ଫୁଟିତ ପଦ୍ମ ବର୍ଡର',
      post_mh_warli_1: 'ତାରପା ନୃତ୍ୟ ଓ ଗ୍ରାମୀଣ ଅମଳ ଉତ୍ସବ',
      post_raj_pichwai_1: '୨୪କେ ସ୍ୱର୍ଣ୍ଣ କାରୁକାର୍ଯ୍ୟ ଶ୍ରୀନାଥଜୀ'
    },
    as: {
      post_bihar_mithila_1: 'মিথিলা যুগল মাছ আৰু ফুলি থকা পদুমৰ সীমা',
      post_mh_warli_1: 'তাৰ্পা নৃত্য আৰু গাঁৱৰ শস্য চপোৱা উৎসৱ',
      post_raj_pichwai_1: '২৪কে সোণৰ কাম কৰা শ্ৰীনাথজী'
    }
  };

  const localizedTitle = postTitles[safeLang]?.[post.id] || post.title;

  return {
    ...post,
    title: localizedTitle,
    state: localizedState,
    authorState: localizedState,
    artForm: localizedArt
  };
};

// Localize KalaLens Feedback (translating the topic where recommendations are given)
export const getLocalizedLensFeedback = (feedback: KalaLensFeedback, lang?: SupportedLanguage | string): KalaLensFeedback => {
  if (!lang || lang === 'en') return feedback;
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;

  if (feedback.isTraditionalArt === false || feedback.rating == null) {
    if (safeLang === 'hi') {
      return {
        ...feedback,
        artFormDetected: 'पारंपरिक कला नहीं पाई गई',
        summary: feedback.summary || 'अपलोड की गई छवि किसी हस्तनिर्मित चित्रकला, पारंपरिक लोक कला या भारतीय शिल्प की नहीं प्रतीत होती है। कलालेंस गैर-पारंपरिक तस्वीरों को कोई अंक या रेटिंग नहीं देता।'
      };
    }
    return feedback;
  }

  if (safeLang === 'hi') {
    return {
      ...feedback,
      summary: 'अनुकरणीय कलात्मक साधना! आपकी कलाकृति में पारंपरिक दोहरी रेखा का सुदृढ़ अनुशासन, प्रामाणिक ज्यामितीय अनुपात और शास्त्रीय भारतीय प्रतीकों के प्रति गहन निष्ठा परिलक्षित होती है।',
      traditionalMotifsDetected: feedback.traditionalMotifsDetected?.map((m: any) => {
        const isObj = typeof m === 'object' && m !== null;
        const name = isObj ? m.name : String(m);
        return {
          name: name.includes('Border') ? 'पवित्र दोहरी रेखा सीमांकन (कचनी बॉर्डर)'
            : name.includes('Eye') ? 'शास्त्रीय बादामी नेत्र शैली'
            : name.includes('Fish') || name.includes('Matsya') ? 'मत्स्य एवं कमल जल प्रतीक'
            : 'पारंपरिक भराव रूपांकन (भरनी)',
          significance: isObj && m.significance ? m.significance : 'सौभाग्य, उर्वरता एवं दैवीय जीवन चक्र का प्रतीक',
          accuracyComment: isObj && m.accuracyComment ? m.accuracyComment : 'शास्त्रीय शास्त्रों के अनुसार सटीक अनुपात'
        };
      }),
      strengths: [
        'बिना स्याही फैले अखंड, प्रवाहपूर्ण दोहरी रेखा सीमा का अनुशासित अंकन।',
        'पारंपरिक लोक भित्तिचित्रों के अनुरूप शुद्ध ज्यामितीय लय एवं संतुलन।',
        'प्राकृतिक खनिज रंगों का सामंजस्यपूर्ण समन्वय जो आध्यात्मिक आभा प्रदान करता है।'
      ],
      areasForImprovement: [
        'द्वितीयक पंखुड़ियों में तिरछी रेखाओं (कचनी हैचिंग) का घनत्व थोड़ा और बढ़ाएं।',
        'गहरी रेखा कंट्रास्ट के लिए बबूल के गोंद के साथ पारंपरिक कज्जली (काजल) का उपयोग करें।',
        'हस्तनिर्मित स्वरूप को अक्षुण्ण रखने के लिए पत्तियों में हल्का जैविक विविधता बनाए रखें।'
      ],
      actionableSuggestions: [
        'बारीक रेखाओं के लिए 0.3mm बांस की कलम का अभ्यास करें।',
        'हल्दी के पीले रंग में नींबू की दो बूंद मिलाकर रंग की चमक को स्थिर करें।',
        'मुख्य देव आकृति के चारों ओर खाली स्थान छोड़ने के बजाय लता-पुष्पों का अंकन करें।'
      ],
      lineworkPrecision: '88% - न्यूनतम हिचकिचाहट के साथ आत्मविश्वासपूर्ण, प्रवाहपूर्ण रेखांकन।',
      symbolismAccuracy: '94% - क्षेत्रीय पौराणिक शास्त्रों के पूर्णतः अनुकूल पवित्र प्रतीक।'
    };
  }

  if (safeLang === 'ta') {
    return {
      ...feedback,
      summary: 'அற்புதமான கலைப்படைப்பு! பாரம்பரிய கோடுகள் மற்றும் வண்ணங்களின் நேர்த்தி மிகச் சிறப்பாக உள்ளது.',
      traditionalMotifsDetected: feedback.traditionalMotifsDetected?.map((m: any) => {
        const isObj = typeof m === 'object' && m !== null;
        return {
          name: isObj ? m.name : String(m),
          significance: 'புனித வடிவியல் மற்றும் பாரம்பரிய சின்னம்',
          accuracyComment: 'பாரம்பரிய விதிகளுக்கு ஏற்ப மிகத் துல்லியமாக வரையப்பட்டுள்ளது'
        };
      }),
      strengths: [
        'தூரிகையின் சீரான கட்டுப்பாடு மற்றும் தெளிவான எல்லைக் கோடுகள்.',
        'இயற்கை வண்ணங்களின் சமநிலையான பயன்பாடு.'
      ],
      areasForImprovement: [
        'இரண்டாம் நிலை இதழ்களில் கோடுகளின் அடர்த்தியை அதிகரிக்கவும்.',
        'ஆழ்ந்த நிறங்களுக்கு இயற்கை மரப்பிசினைப் பயன்படுத்தவும்.'
      ]
    };
  }

  if (safeLang === 'te') {
    return {
      ...feedback,
      summary: 'అద్భుతమైన కళాత్మక నైపుణ్యం! సాంప్రదాయ గీతల నియంత్రణ మరియు రంగుల సమతుల్యత ప్రశంసనీయం.',
      strengths: [
        'స్పష్టమైన నిరంతర సరిహద్దు గీతలు.',
        'పౌరాణిక సాంప్రదాయానికి అనుగుణంగా ఉన్న చిహ్నాలు.'
      ],
      areasForImprovement: [
        'గీతల మధ్య అంతరాన్ని సమానంగా ఉంచడానికి ప్రయత్నించండి.',
        'సహజ రంగుల తీవ్రతను పెంచడానికి జిగురు వాడండి.'
      ]
    };
  }

  // Bengali
  if (safeLang === 'bn') {
    return {
      ...feedback,
      summary: 'অনুকরণীয় শিল্পসাধনা! আপনার চিত্রকর্মে পরম্পরাগত বিশুদ্ধ দ্বৈত-রেখার শৃঙ্খলা ও সমৃদ্ধ ভারতীয় প্রতীকবাদ প্রতিফলিত হয়েছে।',
      strengths: [
        'নির্বিঘ্ন ও সাবলীল দ্বৈত-রেখার নিখুঁত সীমানা।',
        'ঐতিহ্যবাহী লোকশিল্পের আদর্শ জ্যামিতিক ছন্দ ও ভারসাম্য।'
      ],
      areasForImprovement: [
        'পাপড়িগুলোতে রেখাঙ্কনের ঘনত্ব কিছুটা বাড়াতে পারেন।',
        'উজ্জ্বল বৈপরীত্যের জন্য বাবুল আঠার সাথে খাঁটি প্রদীপ-কালি ব্যবহার করুন।'
      ]
    };
  }

  // Marathi
  if (safeLang === 'mr') {
    return {
      ...feedback,
      summary: 'उत्कृष्ट कलात्मक साधना! तुमच्या कलाकृतीत पारंपरिक दुहेरी रेषेचे अनुशासन आणि शास्त्रीय प्रतीकांप्रती निष्ठा दिसून येते.',
      strengths: [
        'शाई न पसरता अखंड, प्रवाही दुहेरी रेषेचे रेखाटन.',
        'पारंपरिक भित्तीचित्रांनुसार शुद्ध लय आणि तोल.'
      ],
      areasForImprovement: [
        'दुय्यम पाकळ्यांमध्ये तिरक्या रेषांची घनता वाढवा.',
        'खोल काळ्या रंगासाठी नैसर्गिक काजळाचा वापर करा.'
      ]
    };
  }

  // Gujarati
  if (safeLang === 'gu') {
    return {
      ...feedback,
      summary: 'અનુપમ કલાત્મક સાધના! તમારી કૃતિમાં પરંપરાગત બેવડી રેખા અને પવિત્ર પ્રતીકોની સુંદર અભિવ્યક્તિ છે.',
      strengths: [
        'સતત અને સ્થિર બેવડી સરહદ રેખાઓ.',
        'પ્રાકૃતિક રંગોનો સંતુલિત સમન્વય.'
      ],
      areasForImprovement: [
        'પાંખડીઓમાં રેખાંકનની ઘનતા વધારો.',
        'ગાઢ રંગો માટે કુદરતી ગૂંદરમાં કાજળ મિશ્રિત કરો.'
      ]
    };
  }

  // Kannada
  if (safeLang === 'kn') {
    return {
      ...feedback,
      summary: 'ಅದ್ಭುತ ಸಾಂಪ್ರದಾಯಿಕ ಕಲಾ ಸೃಷ್ಟಿ! ರೇಖೆಗಳ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ದೈವಿಕ ಸಂಕೇತಗಳ ಪರಿಪಾಲನೆ ಶ್ಲಾಘನೀಯ.',
      strengths: [
        'ನಿರಂತರ ಹಾಗೂ ದೃಢವಾದ ದ್ವಿಮುಖ ಗಡಿ ರೇಖೆಗಳು.',
        'ಸಹಜ ಬಣ್ಣಗಳ ಸುಂದರ ಸಮ್ಮಿಲನ.'
      ],
      areasForImprovement: [
        'ರೇಖೆಗಳ ನಡುವಣ ಅಂತರವನ್ನು ಸಮತೋಲನದಲ್ಲಿರಿಸಿ.',
        'ಆಳವಾದ ರೇಖಾ ಪ್ರಭಾವಕ್ಕಾಗಿ ನೈಸರ್ಗಿಕ ಜಿಗುಟು ಬಳಸಿ.'
      ]
    };
  }

  // Malayalam
  if (safeLang === 'ml') {
    return {
      ...feedback,
      summary: 'അതിമനോഹരമായ പാരമ്പര്യ കലാസൃഷ്ടി! വരകളുടെ കൃത്യതയും പ്രതീകാത്മകതയും പ്രശംസനീയമാണ്.',
      strengths: [
        'വ്യക്തവും തുടർച്ചയുള്ളതുമായ അതിർത്തി വരകൾ.',
        'പവിത്രമായ പാരമ്പര്യ രൂപങ്ങൾ.'
      ],
      areasForImprovement: [
        'ഇതളുകളിലെ വരകളുടെ സാന്ദ്രത വർദ്ധിപ്പിക്കുക.',
        'സ്വാഭാവിക പശ ഉപയോഗിച്ച് നിറങ്ങളുടെ ആഴം കൂട്ടുക.'
      ]
    };
  }

  // Odia
  if (safeLang === 'or') {
    return {
      ...feedback,
      summary: 'ଉଲ୍ଲେଖନୀୟ ପାରମ୍ପରିକ କଳା ସାଧନା! ଦ୍ୱିଗୁଣିତ ରେଖା ଓ ପବିତ୍ର ପ୍ରତୀକଗୁଡ଼ିକର ସଠିକ୍ ଅଙ୍କନ ହୋଇଛି।',
      strengths: [
        'ଅଖଣ୍ଡ ଓ ପ୍ରବାହମୟ ବର୍ଡର ରେଖା।',
        'ପାରମ୍ପରିକ ରଙ୍ଗ ବିନ୍ୟାସର ଉପଯୁକ୍ତ ପ୍ରୟୋଗ।'
      ],
      areasForImprovement: [
        'ପାଖୁଡ଼ା ମଧ୍ୟରେ ରେଖାଗୁଡ଼ିକର ଘନତା ବୃଦ୍ଧି କରନ୍ତୁ।',
        'ଗାଢ଼ ରଙ୍ଗ ପାଇଁ ବାବୁଲ ଅଠା ସହ କଜଳ ବ୍ୟବହାର କରନ୍ତୁ।'
      ]
    };
  }

  // Punjabi
  if (safeLang === 'pa') {
    return {
      ...feedback,
      summary: 'ਬਹੁਤ ਹੀ ਸ਼ਾਨਦਾਰ ਕਲਾਤਮਕ ਪੇਸ਼ਕਾਰੀ! ਰਵਾਇਤੀ ਦੋਹਰੀਆਂ ਰੇਖਾਵਾਂ ਅਤੇ ਪ੍ਰਤੀਕਾਂ ਦੀ ਖ਼ੂਬਸੂਰਤ ਵਰਤੋਂ ਕੀਤੀ ਗਈ ਹੈ।',
      strengths: [
        'ਸਾਫ਼ ਅਤੇ ਨਿਰੰਤਰ ਬਾਰਡਰ ਰੇਖਾਵਾਂ।',
        'ਰਵਾਇਤੀ ਰੰਗਾਂ ਦਾ ਸੰਤੁਲਿਤ ਸੁਮੇਲ।'
      ],
      areasForImprovement: [
        'ਪੱਤੀਆਂ ਵਿਚਕਾਰ ਬਾਰੀਕ ਰੇਖਾਵਾਂ ਦੀ ਘਣਤਾ ਵਧਾਓ।',
        'ਗੂੜ੍ਹੇ ਰੰਗ ਲਈ ਕੁਦਰਤੀ ਗੂੰਦ ਨਾਲ ਕੱਜਲ ਮਿਲਾਓ।'
      ]
    };
  }

  // Assamese
  if (safeLang === 'as') {
    return {
      ...feedback,
      summary: 'অনুপম পৰম্পৰাগত শিল্পসাধনা! দ্বৈত ৰেখা আৰু পৱিত্ৰ প্ৰতীকসমূহৰ নিখুঁত উপস্থাপন কৰা হৈছে।',
      strengths: [
        'নিৰবচ্ছিন্ন আৰু প্ৰৱাহমান সীমা ৰেখা।',
        'পৰম্পৰাগত ৰং সমন্বয়ৰ অপূৰ্ব প্ৰয়োগ।'
      ],
      areasForImprovement: [
        'পাহিবোৰত মিহি ৰেখাৰ ঘনত্ব বৃদ্ধি কৰক।',
        'গাঢ় ৰং প্ৰস্তুত কৰিবলৈ প্ৰাকৃতিক কজলা ব্যৱহাৰ কৰক।'
      ]
    };
  }

  return feedback;
};

// Localize Cultural Experience in KalaYatri & KalaTour
export const getLocalizedCulturalExperience = (exp: any, lang?: SupportedLanguage | string): any => {
  if (!lang || lang === 'en') return exp;
  const safeLang = (lang in STATE_NAME_TRANSLATIONS ? lang : 'en') as SupportedLanguage;

  const titlesMap: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    hi: {
      exp_mithila_atelier: 'मिथिला मास्टर एटेलियर: प्राकृतिक रंग एवं भरनी चित्रकला',
      exp_kalamkari_temple: 'पवित्र कलम: श्रीकालहस्ती मुक्तहस्त नदी व मंदिर स्क्रोल यात्रा',
      exp_warli_sahyadri: 'सह्याद्रि की गूंज: वारली जनजातीय चावल-भित्तिचित्र एवं तारपा यात्रा',
      exp_pichwai_nathdwara: 'दैवीय वैभव: नाथद्वारा पिछवाई, लाजवर्त एवं २४के स्वर्ण पत्र कार्यशाला',
      exp_pattachitra_odisha: 'शाश्वत पट्ट: रघुराजपुर तालपट्ट पट्टचित्र एवं गोटीपुआ परंपरा',
      exp_varanasi_silk_loom: 'काशी करघा: वाराणसी मास्टर जाकॉर्ड बुनाई एवं गुलाबी मीनाकारी'
    },
    ta: {
      exp_mithila_atelier: 'மிதிலா மாஸ்டர் பயிலரங்கம்: இயற்கை வண்ணங்கள் & ஓவியம்',
      exp_kalamkari_temple: 'ஸ்ரீகாளஹஸ்தி கலம்காரி நதி & கோயில் வண்ணப் பயணம்',
      exp_warli_sahyadri: 'வார்லி பழங்குடி அரிசி-சுவரோவியம் & தார்ப்பா பாரம்பரியம்',
      exp_pichwai_nathdwara: 'நாத்ద్వారా பிச்வாய் & 24K தங்கத் தகடு பயிலரங்கம்',
      exp_pattachitra_odisha: 'ரகுராஜ்பூர் பனை ஓலை செதுக்குதல் & கோட்டிபுவா பயணம்',
      exp_varanasi_silk_loom: 'வாரணாசி பட்டு நெசவு & குலாபி மீனாகாரி கலை'
    },
    te: {
      exp_mithila_atelier: 'మిథిల మాస్టర్ అటెలియర్: సహజ రంగులు & చిత్రకళ',
      exp_kalamkari_temple: 'శ్రీకాళహస్తి కలంకారీ నది & ఆలయ పర్యటన',
      exp_warli_sahyadri: 'వార్లీ గిరిజన బియ్యపు పిండి కుడ్యచిత్రం & తార్పా యాత్ర',
      exp_pichwai_nathdwara: 'నాథద్వారా పిచ్వాయి & 24K బంగారు రేకు వర్క్‌షాప్',
      exp_pattachitra_odisha: 'రఘురాజ్‌పూర్ తాళపత్ర చిత్రకళ & గోటిపువా యాత్ర',
      exp_varanasi_silk_loom: 'వారణాసి పట్టు చేనేత & గులాబీ మీనాకారీ కళ'
    },
    bn: {
      exp_mithila_atelier: 'মিথিলা মাস্টার কর্মশালা: প্রাকৃতিক রং ও ভরনী চিত্রকলা',
      exp_kalamkari_temple: 'শ্রীকালহস্তী কলমকারী নদী ও মন্দির পটচিত্র যাত্রা',
      exp_warli_sahyadri: 'ওয়ারলি আদিবাসী চালের গুঁড়োর দেওয়ালচিত্র ও তারপা যাত্রা',
      exp_pichwai_nathdwara: 'নাথদ্বারা পিচওয়াই ও ২৪কে স্বর্ণপত্র কর্মশালা',
      exp_pattachitra_odisha: 'রঘুরাজপুর তালপাতা খোদাই ও গোটিপুয়া নৃত্যযাত্রা',
      exp_varanasi_silk_loom: 'বারাণসী রেশম তাঁতশিল্প ও গোলাপি মীনাকারি'
    },
    mr: {
      exp_mithila_atelier: 'मिथिला मास्टर कार्यशाळा: नैसर्गिक रंग व भरणी चित्रकला',
      exp_kalamkari_temple: 'श्रीकालहस्ती कलमकारी नदी व मंदिर स्क्रोल यात्रा',
      exp_warli_sahyadri: 'वारली आदिवासी तांदूळ-भित्तीचित्र व तारपा वारसा',
      exp_pichwai_nathdwara: 'नाथद्वारा पिछवाई व २४के सुवर्ण पत्र कार्यशाळा',
      exp_pattachitra_odisha: 'रघुराजपूर ताडपत्री कोरीव काम व गोटीपुआ परंपरा',
      exp_varanasi_silk_loom: 'वाराणसी रेशीम विणकाम व गुलाबी मीनाकारी'
    },
    gu: {
      exp_mithila_atelier: 'મિથિલા માસ્ટર વર્કશોપ: પ્રાકૃતિક રંગ અને ભરની કલા',
      exp_kalamkari_temple: 'શ્રીકાલહસ્તી કલમકારી નદી અને મંદિર સ્ક્રોલ યાત્રા',
      exp_warli_sahyadri: 'વારલી આદિવાસી ભીંતચિત્ર અને તારપા પરંપરા',
      exp_pichwai_nathdwara: 'નાથદ્વારા પિછવાઈ અને ૨૪કે ગોલ્ડ લીફ વર્કશોપ',
      exp_pattachitra_odisha: 'રઘુરાજપુર તાડપત્ર કોતરણી અને ગોટીપુઆ યાત્રા',
      exp_varanasi_silk_loom: 'વારાણસી રેશમ વણાટ અને ગુલાબી મીનાકારી'
    },
    kn: {
      exp_mithila_atelier: 'ಮಿಥಿಲಾ ಮಾಸ್ಟರ್ ಕಾರ್ಯಾಗಾರ: ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳು & ಚಿತ್ರಕಲೆ',
      exp_kalamkari_temple: 'ಶ್ರೀಕಾಳಹಸ್ತಿ ಕಲಂಕಾರಿ ನದಿ & ದೇವಾಲಯ ಪ್ರವಾಸ',
      exp_warli_sahyadri: 'ವಾರ್ಲಿ ಬುಡಕಟ್ಟು ಅಕ್ಕಿ ಹಿಟ್ಟಿನ ಗೋಡೆಚಿತ್ರ & ತಾರ್ಪಾ ಪರಂಪರೆ',
      exp_pichwai_nathdwara: 'ನಾಥದ್ವಾರ ಪಿಚ್ವಾಯಿ & ೨೪ಕೆ ಚಿನ್ನದ ಎಲೆಯ ಕಾರ್ಯಾಗಾರ',
      exp_pattachitra_odisha: 'ರಘುರಾಜಪುರ ತಾಳೆಗರಿ ಕೆತ್ತನೆ & ಗೋಟಿಪುವಾ ಯಾತ್ರೆ',
      exp_varanasi_silk_loom: 'ವಾರಣಾಸಿ ರೇಷ್ಮೆ ಕೈಮಗ್ಗ & ಗುಲಾಬಿ ಮೀನಾಕಾರಿ'
    },
    ml: {
      exp_mithila_atelier: 'മിഥില മാസ്റ്റർ കളരി: പ്രകൃതിദത്ത നിറങ്ങളും ചിത്രകലയും',
      exp_kalamkari_temple: 'ശ്രീകാളഹസ്തി കലങ്കാരി നദീ-ക്ഷേത്ര പൈതൃക യാത്ര',
      exp_warli_sahyadri: 'വാർലി ഗോത്രവർഗ്ഗ ചുവർചിത്രവും താർപ്പ പൈതൃകവും',
      exp_pichwai_nathdwara: 'നാഥ്ദ്വാര പിച്ചവായ് & 24K സ്വർണ്ണപ്പണി ശിൽപ്പശാല',
      exp_pattachitra_odisha: 'രഘുരാജ്പൂർ താളിയോല കൊത്തുപണിയും ഗോട്ടിപുവയും',
      exp_varanasi_silk_loom: 'വാരാണസി പട്ടുനെയ്ത്തും ഗുലാബി മീനാകാരിയും'
    },
    pa: {
      exp_mithila_atelier: 'ਮਿਥਿਲਾ ਮਾਸਟਰ ਵਰਕਸ਼ਾਪ: ਕੁਦਰਤੀ ਰੰਗ ਅਤੇ ਭਰਨੀ ਚਿੱਤਰਕਾਰੀ',
      exp_kalamkari_temple: 'ਸ਼੍ਰੀਕਾਲਹਸਤੀ ਕਲਮਕਾਰੀ ਨਦੀ ਤੇ ਮੰਦਰ ਸਕ੍ਰੋਲ ਯਾਤਰਾ',
      exp_warli_sahyadri: 'ਵਾਰਲੀ ਕਬਾਇਲੀ ਚੌਲ-ਕੰਧ ਚਿੱਤਰਕਾਰੀ ਤੇ ਤਾਰਪਾ ਵਿਰਾਸਤ',
      exp_pichwai_nathdwara: 'ਨਾਥਦੁਆਰਾ ਪਿਛਵਾਈ ਅਤੇ 24K ਸੋਨੇ ਦਾ ਵਰਕ ਵਰਕਸ਼ਾਪ',
      exp_pattachitra_odisha: 'ਰਘੂਰਾਜਪੁਰ ਤਾੜਪੱਤਰ ਉੱਕਰੀ ਅਤੇ ਗੋਟੀਪੂਆ ਯਾਤਰਾ',
      exp_varanasi_silk_loom: 'ਵਾਰਾਣਸੀ ਰੇਸ਼ਮ ਬੁਣਾਈ ਅਤੇ ਗੁਲਾਬੀ ਮੀਨਾਕਾਰੀ'
    },
    or: {
      exp_mithila_atelier: 'ମିଥିଳା ମାଷ୍ଟର କର୍ମଶାଳା: ପ୍ରାକୃତିକ ରଙ୍ଗ ଓ ଭରନୀ ଚିତ୍ରକଳା',
      exp_kalamkari_temple: 'ଶ୍ରୀକାଳହସ୍ତୀ କଲମକାରୀ ନଦୀ ଓ ମନ୍ଦିର ସ୍କ୍ରୋଲ ଯାତ୍ରା',
      exp_warli_sahyadri: 'ୱାରଲି ଆଦିବାସୀ କାନ୍ଥଚିତ୍ର ଓ ତାରପା ପରମ୍ପରା',
      exp_pichwai_nathdwara: 'ନାଥଦ୍ୱାରା ପିଛୱାଇ ଓ ୨୪କେ ସ୍ୱର୍ଣ୍ଣ ପତ୍ର କର୍ମଶାଳା',
      exp_pattachitra_odisha: 'ରଘୁରାଜପୁର ତାଳପତ୍ର ଖୋଦେଇ ଓ ଗୋଟିପୁଅ ନୃତ୍ୟଯାତ୍ରା',
      exp_varanasi_silk_loom: 'ବାରାଣସୀ ରେଶମ ବୁଣାକାର ଓ ଗୋଲାପୀ ମୀନାକାରୀ'
    },
    as: {
      exp_mithila_atelier: 'মিথিলা মাষ্টাৰ কৰ্মশালা: প্ৰাকৃতিক ৰং আৰু চিত্ৰকলা',
      exp_kalamkari_temple: 'শ্ৰীক্কালহস্তী কলমকাৰী নদী আৰু মন্দিৰ যাত্ৰা',
      exp_warli_sahyadri: 'ৱাৰ্লি জনজাতীয় বেৰৰ ছবি আৰু তাৰ্পা ঐতিহ্য',
      exp_pichwai_nathdwara: 'নাথদ্বাৰা পিচৱাই আৰু ২৪কে সোণালী কৰ্মশালা',
      exp_pattachitra_odisha: 'ৰঘুৰাজপুৰ তালপাতৰ খোদিত আৰু গোটিপুৱা যাত্ৰা',
      exp_varanasi_silk_loom: 'বাৰাণসী পাট বোৱা আৰু গোলাপী মিনাকাৰী'
    }
  };

  const localizedTitle = titlesMap[safeLang]?.[exp.id] || exp.title;
  const localizedState = STATE_NAME_TRANSLATIONS[safeLang]?.[exp.state] || exp.state;
  const localizedArt = ART_FORM_TRANSLATIONS[safeLang]?.[exp.artForm] || exp.artForm;

  return {
    ...exp,
    title: localizedTitle,
    state: localizedState,
    artForm: localizedArt
  };
};
