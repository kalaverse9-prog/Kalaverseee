import { SupportedLanguage } from '../types';

export interface ProfileDictionary {
  zeroDataSellingBadge: string;
  verifiedCulturalIdentity: string;
  changePhoto: string;
  editProfile: string;
  masterArtisanPlanBtn: string;
  switchMasterPlanBtn: string;
  updatePhotoHover: string;
  verifiedGiArtisanBadge: string;
  requestGiArtisanBadge: string;
  defaultRole: string;
  defaultState: string;
  memberSince: string;
  defaultBio: string;
  masterArtisanTier: string;
  freeExplorerTier: string;
  planLabel: string;
  craftSpecialtyLabel: string;
  protectedPin: string;
  setPin: string;
  accessPinLabel: string;
  tabOverview: string;
  tabSecurity: string;
  tabEvaluations: string;
  tabMasterclasses: string;
  tabBadges: string;
  tabStudio: string;
  tabSettings: string;
  artisanPortfolioTitle: string;
  artisanPortfolioSubtitle: string;
  primaryArtTradition: string;
  stateAffiliation: string;
  membershipLevel: string;
  giVerificationStatus: string;
  verifiedStatusText: string;
  pendingVerificationText: string;
  quickKalaverseHubs: string;
  scanArtworkTitle: string;
  scanArtworkDesc: string;
  consultGuruTitle: string;
  consultGuruDesc: string;
  communityGalleryTitle: string;
  communityGalleryDesc: string;
  craftTrailTitle: string;
  craftTrailDesc: string;
  crossDevicePassTitle: string;
  crossDevicePassSub: string;
  managePasswordBtn: string;
  fairTradeGuaranteeTitle: string;
  fairTradeGuaranteeSub: string;
  readEthicalCharter: string;
  securityTitle: string;
  securitySub: string;
  persistentActive: string;
  passwordSavedNotice: string;
  masterAccessPasswordLabel: string;
  enterMasterPasswordPlaceholder: string;
  passwordHelpText: string;
  credentialsSummaryTitle: string;
  accountNameLabel: string;
  registeredEmailLabel: string;
  persistentPasswordLabel: string;
  notSetYet: string;
  saveUpdatePasswordBtn: string;
  hide: string;
  show: string;
  archivedScansTitle: string;
  scanNewArtworkBtn: string;
  scannedOn: string;
  scoreOutOfTen: string;
  enrolledMasterclassesTitle: string;
  browseAllMasterclasses: string;
  instructor: string;
  joinGoogleMeet: string;
  heritageBadgesTitle: string;
  badgesEarnedCount: (earned: number, total: number) => string;
  badgeEarned: string;
  badgeLocked: string;
  artisanDashboardTitle: string;
  artisanStudioName: string;
  artisanDashboardDesc: string;
  hostMasterclassTitle: string;
  hostMasterclassDesc: string;
  uploadArtMarketplaceTitle: string;
  uploadArtMarketplaceDesc: string;
  zeroDataPledgeTitle: string;
  zeroDataPledgeDesc: string;
  sovereignStorageActive: string;
  sovereignStorageDesc: string;
  membershipPlanTierTitle: string;
  currentMembershipTierLabel: string;
  membershipTierHelp: string;
  manageChangePlanBtn: string;
  dataPortabilityTitle: string;
  downloadProfileJson: string;
  deleteDataResetAccount: string;
  // Modals
  changePhotoModalTitle: string;
  changePhotoModalSub: string;
  livePreview: string;
  customUploadedImage: string;
  traditionalMotifSymbol: string;
  uploadFileTab: string;
  artisanMotifsTab: string;
  imageUrlTab: string;
  clickOrDragPhoto: string;
  supportsJpg: string;
  selectHeritageAvatar: string;
  directImageUrlLabel: string;
  pasteHttpsLink: string;
  resetToDefault: string;
  cancel: string;
  savePhoto: string;
  editModalTitle: string;
  fullName: string;
  culturalRole: string;
  stateRegion: string;
  craftSpecialty: string;
  persistentPasswordModal: string;
  bioCulturalMission: string;
  saveProfileChanges: string;
  giModalTitle: string;
  giSuccessTitle: string;
  giSuccessSub: string;
  giModalInstruction: string;
  artisanStudioNameLabel: string;
  pehchanGiCardNumber: string;
  verifyGiStatusBtn: string;
}

export const PROFILE_TRANSLATIONS: Record<SupportedLanguage, ProfileDictionary> = {
  en: {
    zeroDataSellingBadge: 'Zero-Data Selling Sovereign Account',
    verifiedCulturalIdentity: 'कलाVerse Verified Cultural Identity',
    changePhoto: 'Change Photo',
    editProfile: 'Edit Profile',
    masterArtisanPlanBtn: '👑 Master Artisan Plan',
    switchMasterPlanBtn: '🌿 Switch to Master Plan',
    updatePhotoHover: 'Change Photo',
    verifiedGiArtisanBadge: 'Verified GI Artisan',
    requestGiArtisanBadge: 'Request GI Artisan Badge',
    defaultRole: 'Traditional Chitrakar & Artisan',
    defaultState: 'Rajasthan, India',
    memberSince: 'Member since',
    defaultBio: 'Preserving and practicing traditional Indian folk art lineages, sacred geometry, and indigenous natural pigments.',
    masterArtisanTier: '👑 Master Artisan',
    freeExplorerTier: '🌿 Free Explorer',
    planLabel: 'Membership Plan',
    craftSpecialtyLabel: 'Craft Specialty',
    protectedPin: 'Protected',
    setPin: 'Set Pin',
    accessPinLabel: 'Access PIN',
    tabOverview: 'Artisan Overview',
    tabSecurity: 'Persistent Password Access',
    tabEvaluations: 'कलाLens Artworks',
    tabMasterclasses: 'My Masterclasses',
    tabBadges: 'Badges & Honors',
    tabStudio: 'Artisan Studio Portal',
    tabSettings: 'Account Settings & Privacy',
    artisanPortfolioTitle: 'Artisan Portfolio & Craft Lineage',
    artisanPortfolioSubtitle: 'Showcasing your verified craft traditions and regional art heritage.',
    primaryArtTradition: 'Primary Art Tradition',
    stateAffiliation: 'State Affiliation',
    membershipLevel: 'Membership Level',
    giVerificationStatus: 'GI Verification Status',
    verifiedStatusText: '✓ Verified GI Artisan',
    pendingVerificationText: 'Pending Verification',
    quickKalaverseHubs: 'Quick KalaVerse Experience Hubs',
    scanArtworkTitle: 'Scan New Artwork with कलाLens',
    scanArtworkDesc: 'Authentic linework precision and color purity critique',
    consultGuruTitle: 'Consult Guru on Art',
    consultGuruDesc: 'Dialogue on sacred motifs and traditional techniques',
    communityGalleryTitle: 'Heritage Artisan Guild',
    communityGalleryDesc: 'Share works with cultural peers and master artists',
    craftTrailTitle: '1-Day Heritage Craft Trail',
    craftTrailDesc: 'Curated 1-day itinerary with verified studio visits',
    crossDevicePassTitle: 'Cross-Device Password Access',
    crossDevicePassSub: 'Set a master password so you can log into KalaVerse across devices without losing your evaluated artworks or certificates.',
    managePasswordBtn: 'Manage Password & Credentials →',
    fairTradeGuaranteeTitle: '85% Fair-Trade Direct Payout Guarantee',
    fairTradeGuaranteeSub: 'Your profile and artwork uploads are strictly sovereign and non-monetized. Every masterclass ticket or artwork bought sends 85% direct payout into verified artisan bank accounts.',
    readEthicalCharter: 'Read our Ethical Charter →',
    securityTitle: 'Persistent Password & Cross-Device Access',
    securitySub: 'Set a master access password so you stay signed in seamlessly and can log into KalaVerse from any other computer or browser.',
    persistentActive: '✓ Persistent Storage Active',
    passwordSavedNotice: 'Your password has been saved securely for persistent access!',
    masterAccessPasswordLabel: 'Master Access Password',
    enterMasterPasswordPlaceholder: 'Enter a secure master password...',
    passwordHelpText: 'Use your email and this password to access your account across devices.',
    credentialsSummaryTitle: 'Account Credentials Summary',
    accountNameLabel: 'Account Name:',
    registeredEmailLabel: 'Registered Email:',
    persistentPasswordLabel: 'Persistent Password:',
    notSetYet: '(Not set yet)',
    saveUpdatePasswordBtn: 'Save & Update Password',
    hide: 'Hide',
    show: 'Show',
    archivedScansTitle: 'Archived कलाLens Artwork Scans',
    scanNewArtworkBtn: 'Scan New Artwork',
    scannedOn: 'Scanned on',
    scoreOutOfTen: 'Score / 10',
    enrolledMasterclassesTitle: 'My Enrolled Masterclasses & Ateliers',
    browseAllMasterclasses: 'Browse All Live Masterclasses',
    instructor: 'Instructor',
    joinGoogleMeet: 'Join Google Meet',
    heritageBadgesTitle: 'Traditional Heritage Badges & Guild Honors',
    badgesEarnedCount: (earned, total) => `Earned ${earned} of ${total} Badges`,
    badgeEarned: '✓ Earned',
    badgeLocked: 'Locked',
    artisanDashboardTitle: 'Master Artisan Business Dashboard',
    artisanStudioName: 'Artisan Guild Studio',
    artisanDashboardDesc: 'As a Master Artisan subscriber, host live craft ateliers, upload artwork pictures directly from your device, and receive 85% direct payouts with transparent 15% commission processing.',
    hostMasterclassTitle: 'Host a Live Masterclass',
    hostMasterclassDesc: 'Broadcast live hands-on ateliers to cultural learners worldwide.',
    uploadArtMarketplaceTitle: 'Upload Artwork in Marketplace',
    uploadArtMarketplaceDesc: 'List paintings and crafts with 15% commission and 85% direct payout.',
    zeroDataPledgeTitle: 'Zero-Data Selling Pledge & Data Sovereignty',
    zeroDataPledgeDesc: 'KalaVerse never sells your artwork uploads, conversational prompts, or personal identity to third parties.',
    sovereignStorageActive: 'Sovereign Storage Protocol Active',
    sovereignStorageDesc: 'Your profile data, masterclass bookings, and artworks reside securely in your browser\'s persistent storage and are synchronized strictly for platform functionality.',
    membershipPlanTierTitle: 'Membership Plan Tier',
    currentMembershipTierLabel: 'Current Membership Tier',
    membershipTierHelp: 'Toggle between Personal explorer and Master Artisan instructor tiers.',
    manageChangePlanBtn: 'Manage / Change Plan',
    dataPortabilityTitle: 'Data Portability & Reset',
    downloadProfileJson: 'Download My Profile Data (.JSON)',
    deleteDataResetAccount: 'Delete Data & Reset Account',
    changePhotoModalTitle: 'Change Profile Photo',
    changePhotoModalSub: 'Upload your own photo or choose a traditional folk motif avatar',
    livePreview: 'Live Preview',
    customUploadedImage: 'Custom uploaded image photo',
    traditionalMotifSymbol: 'Traditional cultural motif symbol',
    uploadFileTab: 'Upload File',
    artisanMotifsTab: 'Artisan Motifs',
    imageUrlTab: 'Image URL',
    clickOrDragPhoto: 'Click to choose an image or drag & drop here',
    supportsJpg: 'Supports JPG, PNG, WebP (Max 5MB)',
    selectHeritageAvatar: 'Select a traditional Indian heritage avatar:',
    directImageUrlLabel: 'Direct Image URL',
    pasteHttpsLink: 'Paste any public HTTPS image link to use as your profile photo.',
    resetToDefault: 'Reset to Default',
    cancel: 'Cancel',
    savePhoto: 'Save Photo',
    editModalTitle: 'Edit Cultural Profile',
    fullName: 'Full Name',
    culturalRole: 'Cultural Role',
    stateRegion: 'State Affiliation',
    craftSpecialty: 'Craft Specialty / Heritage Art Form',
    persistentPasswordModal: 'Persistent Access Password (For cross-device login)',
    bioCulturalMission: 'Bio / Cultural Mission',
    saveProfileChanges: 'Save Profile Changes',
    giModalTitle: 'GI Artisan Badge Verification',
    giSuccessTitle: 'GI Artisan Verified Successfully!',
    giSuccessSub: 'Your profile now carries the official GI Artisan badge.',
    giModalInstruction: 'Enter your Government of India Handicrafts / GI artisan card or guild reference number to verify your studio.',
    artisanStudioNameLabel: 'Artisan Guild / Studio Name',
    pehchanGiCardNumber: 'Pehchan / GI Card Number',
    verifyGiStatusBtn: 'Verify GI Status'
  },

  hi: {
    zeroDataSellingBadge: 'शून्य डेटा-बिक्री संप्रभु खाता',
    verifiedCulturalIdentity: 'कलावर्स सत्यापित सांस्कृतिक पहचान',
    changePhoto: 'फ़ोटो बदलें',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    masterArtisanPlanBtn: '👑 मास्टर शिल्पी योजना',
    switchMasterPlanBtn: '🌿 मास्टर योजना में अपग्रेड करें',
    updatePhotoHover: 'फ़ोटो अपडेट करें',
    verifiedGiArtisanBadge: 'सत्यापित जीआई शिल्पी',
    requestGiArtisanBadge: 'जीआई शिल्पी बैज अनुरोध करें',
    defaultRole: 'पारंपरिक चित्रकार एवं शिल्पी',
    defaultState: 'राजस्थान, भारत',
    memberSince: 'सदस्यता वर्ष',
    defaultBio: 'पारंपरिक भारतीय लोक कला परंपराओं, पवित्र ज्यामिति और प्राकृतिक रंगों का संरक्षण।',
    masterArtisanTier: '👑 मास्टर शिल्पी',
    freeExplorerTier: '🌿 निःशुल्क अन्वेषक',
    planLabel: 'सदस्यता योजना',
    craftSpecialtyLabel: 'शिल्प विधा',
    protectedPin: 'सुरक्षित',
    setPin: 'पिन सेट करें',
    accessPinLabel: 'एक्सेस पिन',
    tabOverview: 'कारीगर अवलोकन',
    tabSecurity: 'स्थायी पासवर्ड एक्सेस',
    tabEvaluations: 'कलाLens कलाकृतियां',
    tabMasterclasses: 'मेरी मास्टरक्लास',
    tabBadges: 'बैज एवं सम्मान',
    tabStudio: 'कारीगर स्टूडियो पोर्टल',
    tabSettings: 'खाता सेटिंग्स व डेटा संप्रभुता',
    artisanPortfolioTitle: 'कारीगर पोर्टफोलियो एवं शिल्प वंशावली',
    artisanPortfolioSubtitle: 'आपकी सत्यापित शिल्प परंपराओं और क्षेत्रीय कला धरोहर का आधिकारिक प्रदर्शन।',
    primaryArtTradition: 'मुख्य कला परंपरा',
    stateAffiliation: 'राज्य संबद्धता',
    membershipLevel: 'सदस्यता स्तर',
    giVerificationStatus: 'जीआई सत्यापन स्थिति',
    verifiedStatusText: '✓ सत्यापित जीआई शिल्पी',
    pendingVerificationText: 'सत्यापन लंबित',
    quickKalaverseHubs: 'त्वरित कलावर्स अनुभव केंद्र',
    scanArtworkTitle: 'कलाLens से नई कलाकृति स्कैन करें',
    scanArtworkDesc: 'कला तकनीक और रंग शुद्धता का AI परीक्षण',
    consultGuruTitle: 'कला पर गुरु से परामर्श करें',
    consultGuruDesc: 'पवित्र रूपांकनों व इतिहास पर विस्तृत चर्चा',
    communityGalleryTitle: 'हेरिटेज शिल्पी समुदाय',
    communityGalleryDesc: 'साथी कलाकारों की कृतियां देखें और साझा करें',
    craftTrailTitle: '1-दिवसीय शिल्प यात्रा',
    craftTrailDesc: 'शिल्प स्टूडियो और कार्यशालाओं का 1-दिवसीय मार्ग',
    crossDevicePassTitle: 'क्रॉस-डिवाइस पासवर्ड एक्सेस',
    crossDevicePassSub: 'एक स्थायी पासवर्ड सेट करें ताकि आप किसी भी अन्य कंप्यूटर या फ़ोन पर अपनी कलाकृतियां और मास्टरक्लास खोए बिना लॉगिन कर सकें।',
    managePasswordBtn: 'पासवर्ड और क्रेडेंशियल्स प्रबंधित करें →',
    fairTradeGuaranteeTitle: '८५% निष्पक्ष-व्यापार सीधा भुगतान गारंटी',
    fairTradeGuaranteeSub: 'आपकी प्रोफ़ाइल और कलाकृतियां पूर्णतः संप्रभु हैं। खरीदे गए प्रत्येक टिकट या कलाकृति से ८५% सीधा सत्यापित कारीगर के खाते में जाता है।',
    readEthicalCharter: 'हमारा नैतिक चार्टर पढ़ें →',
    securityTitle: 'स्थायी पासवर्ड एवं क्रॉस-डिवाइस एक्सेस',
    securitySub: 'एक मास्टर पासवर्ड सेट करें ताकि आप निर्बाध रूप से साइन-इन रहें और किसी भी अन्य ब्राउज़र से कलावर्स एक्सेस कर सकें।',
    persistentActive: '✓ स्थायी स्टोरेज सक्रिय',
    passwordSavedNotice: 'आपका पासवर्ड सुरक्षित रूप से सहेज लिया गया है!',
    masterAccessPasswordLabel: 'मास्टर एक्सेस पासवर्ड',
    enterMasterPasswordPlaceholder: 'एक सुरक्षित मास्टर पासवर्ड दर्ज करें...',
    passwordHelpText: 'अन्य उपकरणों पर अपने खाते को एक्सेस करने के लिए अपने ईमेल और इस पासवर्ड का उपयोग करें।',
    credentialsSummaryTitle: 'खाता क्रेडेंशियल्स सारांश',
    accountNameLabel: 'खाता धारक:',
    registeredEmailLabel: 'पंजीकृत ईमेल:',
    persistentPasswordLabel: 'स्थायी पासवर्ड:',
    notSetYet: '(अभी सेट नहीं किया गया)',
    saveUpdatePasswordBtn: 'पासवर्ड सहेजें व अपडेट करें',
    hide: 'छिपाएं',
    show: 'दिखाएं',
    archivedScansTitle: 'संग्रहीत कलाLens कलाकृति स्कैन',
    scanNewArtworkBtn: 'नई कलाकृति स्कैन करें',
    scannedOn: 'स्कैन तिथि',
    scoreOutOfTen: 'स्कोर / १०',
    enrolledMasterclassesTitle: 'मेरी नामांकित मास्टरक्लास एवं कार्यशालाएं',
    browseAllMasterclasses: 'सभी लाइव मास्टरक्लास देखें',
    instructor: 'प्रशिक्षक',
    joinGoogleMeet: 'गूगल मीट से जुड़ें',
    heritageBadgesTitle: 'पारंपरिक धरोहर बैज एवं गिल्ड सम्मान',
    badgesEarnedCount: (earned, total) => `${total} में से ${earned} बैज अर्जित`,
    badgeEarned: '✓ अर्जित',
    badgeLocked: 'तालाबंद',
    artisanDashboardTitle: 'मास्टर शिल्पी व्यावसायिक डैशबोर्ड',
    artisanStudioName: 'कारीगर गिल्ड स्टूडियो',
    artisanDashboardDesc: 'मास्टर शिल्पी के रूप में लाइव कार्यशालाएं आयोजित करें, कलाकृतियां सीधे अपलोड करें और १०% पारदर्शी कमीशन के साथ ८५% सीधा भुगतान प्राप्त करें।',
    hostMasterclassTitle: 'लाइव मास्टरक्लास आयोजित करें',
    hostMasterclassDesc: 'विश्व भर के सांस्कृतिक शिक्षार्थियों के लिए लाइव कार्यशालाएं संचालित करें।',
    uploadArtMarketplaceTitle: 'हेरिटेज बाज़ार में कलाकृति जोड़ें',
    uploadArtMarketplaceDesc: '१०% कमीशन और ८५% सीधे भुगतान के साथ पेंटिंग और शिल्प सूचीबद्ध करें।',
    zeroDataPledgeTitle: 'शून्य डेटा-बिक्री प्रतिज्ञा एवं डेटा संप्रभुता',
    zeroDataPledgeDesc: 'कलावर्स आपकी कलाकृतियों, संवादों या व्यक्तिगत पहचान को कभी भी तीसरे पक्ष को नहीं बेचता।',
    sovereignStorageActive: 'संप्रभु भंडारण प्रोटोकॉल सक्रिय',
    sovereignStorageDesc: 'आपका प्रोफ़ाइल डेटा, मास्टरक्लास बुकिंग और कलाकृतियां आपके ब्राउज़र के स्थायी संग्रहण में सुरक्षित रहती हैं।',
    membershipPlanTierTitle: 'सदस्यता योजना स्तर',
    currentMembershipTierLabel: 'वर्तमान सदस्यता स्तर',
    membershipTierHelp: 'व्यक्तिगत अन्वेषक और मास्टर शिल्पी प्रशिक्षक स्तरों के बीच स्विच करें।',
    manageChangePlanBtn: 'योजना प्रबंधित करें / बदलें',
    dataPortabilityTitle: 'डेटा पोर्टेबिलिटी एवं रीसेट',
    downloadProfileJson: 'मेरा प्रोफ़ाइल डेटा डाउनलोड करें (.JSON)',
    deleteDataResetAccount: 'डेटा हटाएं व खाता रीसेट करें',
    changePhotoModalTitle: 'प्रोफ़ाइल फ़ोटो बदलें',
    changePhotoModalSub: 'अपनी स्वयं की फ़ोटो अपलोड करें या पारंपरिक लोक रूपांकन प्रतीक चुनें',
    livePreview: 'लाइव पूर्वावलोकन',
    customUploadedImage: 'कस्टम अपलोड की गई छवि',
    traditionalMotifSymbol: 'पारंपरिक सांस्कृतिक रूपांकन प्रतीक',
    uploadFileTab: 'फ़ाइल अपलोड करें',
    artisanMotifsTab: 'कारीगर रूपांकन',
    imageUrlTab: 'छवि URL',
    clickOrDragPhoto: 'छवि चुनने के लिए क्लिक करें या यहाँ खींचें',
    supportsJpg: 'JPG, PNG, WebP समर्थित (अधिकतम 5MB)',
    selectHeritageAvatar: 'पारंपरिक भारतीय धरोहर अवतार चुनें:',
    directImageUrlLabel: 'सीधा छवि URL लिंक',
    pasteHttpsLink: 'प्रोफ़ाइल फ़ोटो के रूप में उपयोग करने के लिए कोई भी सार्वजनिक HTTPS छवि लिंक पेस्ट करें।',
    resetToDefault: 'डिफ़ॉल्ट पर रीसेट करें',
    cancel: 'रद्द करें',
    savePhoto: 'फ़ोटो सहेजें',
    editModalTitle: 'सांस्कृतिक प्रोफ़ाइल संपादित करें',
    fullName: 'पूरा नाम',
    culturalRole: 'सांस्कृतिक भूमिका',
    stateRegion: 'राज्य संबद्धता',
    craftSpecialty: 'शिल्प विशेषता / धरोहर कला शैली',
    persistentPasswordModal: 'स्थायी एक्सेस पासवर्ड (क्रॉस-डिवाइस लॉगिन हेतु)',
    bioCulturalMission: 'परिचय / सांस्कृतिक मिशन',
    saveProfileChanges: 'प्रोफ़ाइल परिवर्तन सहेजें',
    giModalTitle: 'जीआई शिल्पी बैज सत्यापन',
    giSuccessTitle: 'जीआई शिल्पी सफलतापूर्वक सत्यापित!',
    giSuccessSub: 'आपकी प्रोफ़ाइल पर अब आधिकारिक जीआई शिल्पी बैज प्रदर्शित है।',
    giModalInstruction: 'अपने स्टूडियो को सत्यापित करने के लिए अपना भारत सरकार हस्तशिल्प / जीआई कारीगर कार्ड नंबर दर्ज करें।',
    artisanStudioNameLabel: 'कारीगर गिल्ड / स्टूडियो का नाम',
    pehchanGiCardNumber: 'पहचान / जीआई कार्ड संख्या',
    verifyGiStatusBtn: 'जीआई स्थिति सत्यापित करें'
  },

  ta: {
    zeroDataSellingBadge: 'தரவு-விற்பனை செய்யாத இறையாண்மை கணக்கு',
    verifiedCulturalIdentity: 'கலாவர்ஸ் சரிபார்க்கப்பட்ட கலாச்சார அடையாளம்',
    changePhoto: 'புகைப்படம் மாற்று',
    editProfile: 'சுயவிவரத்தை திருத்து',
    masterArtisanPlanBtn: '👑 மாஸ்டர் கைவினைஞர் திட்டம்',
    switchMasterPlanBtn: '🌿 மாஸ்டர் திட்டத்திற்கு மாறுங்கள்',
    updatePhotoHover: 'புகைப்படம் மாற்று',
    verifiedGiArtisanBadge: 'சான்றளிக்கப்பட்ட GI கலைஞர்',
    requestGiArtisanBadge: 'GI கலைஞர் பேட்ஜ் கோரிக்கை',
    defaultRole: 'பாரம்பரிய ஓவியர் மற்றும் கைவினைஞர்',
    defaultState: 'தமிழ்நாடு, இந்தியா',
    memberSince: 'உறுப்பினர் ஆண்டு',
    defaultBio: 'பாரம்பரிய இந்திய நாட்டுப்புற கலைகள், புனித வடிவியல் மற்றும் இயற்கை வண்ணங்களை பாதுகாத்தல்.',
    masterArtisanTier: '👑 மாஸ்டர் கலைஞர்',
    freeExplorerTier: '🌿 இலவச ஆய்வாளர்',
    planLabel: 'உறுப்பினர் திட்டம்',
    craftSpecialtyLabel: 'கைவினை சிறப்பு',
    protectedPin: 'பாதுகாக்கப்பட்டது',
    setPin: 'பின் அமை',
    accessPinLabel: 'அணுகல் பின்',
    tabOverview: 'கலைஞர் கண்ணோட்டம்',
    tabSecurity: 'கடவுச்சொல் அணுகல்',
    tabEvaluations: 'கலாLens கலைகள்',
    tabMasterclasses: 'என் பட்டறைகள்',
    tabBadges: 'விருதுகள் & பேட்ஜ்கள்',
    tabStudio: 'கலைஞர் ஸ்டுடியோ போர்டல்',
    tabSettings: 'கணக்கு அமைப்புகள்',
    artisanPortfolioTitle: 'கலைஞர் போர்ட்ஃபோலியோ',
    artisanPortfolioSubtitle: 'உங்கள் சரிபார்க்கப்பட்ட கைவினை மரபுகள் மற்றும் பிராந்திய கலை பாரம்பரியம்.',
    primaryArtTradition: 'முதன்மை கலை பாரம்பரியம்',
    stateAffiliation: 'மாநில இணைப்பு',
    membershipLevel: 'உறுப்பினர் நிலை',
    giVerificationStatus: 'GI சரிபார்ப்பு நிலை',
    verifiedStatusText: '✓ சான்றளிக்கப்பட்ட GI கலைஞர்',
    pendingVerificationText: 'சரிபார்ப்பு நிலுவையில் உள்ளது',
    quickKalaverseHubs: 'கலாவர்ஸ் விரைவு மையங்கள்',
    scanArtworkTitle: 'புதிய கலையை ஸ்கேன் செய்',
    scanArtworkDesc: 'நுட்பம் மற்றும் வண்ணங்களின் துல்லியத்தை AI ஆய்வு செய்கிறது',
    consultGuruTitle: 'குருவிடம் ஆலோசனை பெறு',
    consultGuruDesc: 'புனித வடிவங்கள் மற்றும் நுட்பங்கள் பற்றிய உரையாடல்',
    communityGalleryTitle: 'பாரம்பரிய கலைஞர் சங்கம்',
    communityGalleryDesc: 'சக கலைஞர்களின் படைப்புகளைக் கண்டு பகிருங்கள்',
    craftTrailTitle: '1-நாள் பாரம்பரிய கலை உலா',
    craftTrailDesc: 'சரிபார்க்கப்பட்ட ஸ்டுடியோ வருகைகளுடன் 1-நாள் பயணம்',
    crossDevicePassTitle: 'சாதனங்களுக்கிடையேயான கடவுச்சொல்',
    crossDevicePassSub: 'எந்த சாதனத்திலும் பாதுகாப்பாக உள்நுழைய கடவுச்சொல்லை அமைக்கவும்.',
    managePasswordBtn: 'கடவுச்சொல்லை நிர்வகி →',
    fairTradeGuaranteeTitle: '85% நேரடி வருவாய் உத்தரவாதம்',
    fairTradeGuaranteeSub: 'வாங்கும் ஒவ்வொரு டிக்கெட்டிலிருந்தும் 85% நேரடியாக கைவினைஞருக்கு செல்கிறது.',
    readEthicalCharter: 'எங்கள் நெறிமுறை சாசனத்தை படிக்கவும் →',
    securityTitle: 'நிலையான கடவுச்சொல் அணுகல்',
    securitySub: 'எந்த உலாவியிலிருந்தும் தடையின்றி உள்நுழைய கடவுச்சொல்லை அமைக்கவும்.',
    persistentActive: '✓ நிலையான சேமிப்பு செயலில் உள்ளது',
    passwordSavedNotice: 'உங்கள் கடவுச்சொல் பாதுகாப்பாக சேமிக்கப்பட்டது!',
    masterAccessPasswordLabel: 'முதன்மை கடவுச்சொல்',
    enterMasterPasswordPlaceholder: 'பாதுகாப்பான கடவுச்சொல்லை உள்ளிடவும்...',
    passwordHelpText: 'உங்கள் கணக்கை அணுக இந்த கடவுச்சொல்லைப் பயன்படுத்தவும்.',
    credentialsSummaryTitle: 'கணக்கு சான்றுகள் சுருக்கம்',
    accountNameLabel: 'கணக்கு பெயர்:',
    registeredEmailLabel: 'பதிவுசெய்த மின்னஞ்சல்:',
    persistentPasswordLabel: 'நிலையான கடவுச்சொல்:',
    notSetYet: '(இன்னும் அமைக்கப்படவில்லை)',
    saveUpdatePasswordBtn: 'கடவுச்சொல்லை சேமி',
    hide: 'மறை',
    show: 'காட்டு',
    archivedScansTitle: 'சேமிக்கப்பட்ட கலாLens ஸ்கேன்கள்',
    scanNewArtworkBtn: 'புதிய கலையை ஸ்கேன் செய்',
    scannedOn: 'ஸ்கேன் செய்யப்பட்ட தேதி',
    scoreOutOfTen: 'மதிப்பெண் / 10',
    enrolledMasterclassesTitle: 'என் பதிவுசெய்யப்பட்ட பட்டறைகள்',
    browseAllMasterclasses: 'அனைத்து நேரலை வகுப்புகளையும் காண்க',
    instructor: 'பயிற்றுவிப்பாளர்',
    joinGoogleMeet: 'கூகுள் மீட்டில் சேரவும்',
    heritageBadgesTitle: 'பாரம்பரிய பேட்ஜ்கள் & கௌரவங்கள்',
    badgesEarnedCount: (earned, total) => `${total} இல் ${earned} பேட்ஜ்கள் பெறப்பட்டன`,
    badgeEarned: '✓ பெறப்பட்டது',
    badgeLocked: 'பூட்டப்பட்டது',
    artisanDashboardTitle: 'மாஸ்டர் கலைஞர் வணிக டாஷ்போர்டு',
    artisanStudioName: 'கலைஞர் கில்ட் ஸ்டுடியோ',
    artisanDashboardDesc: 'நேரலை பட்டறைகளை நடத்துங்கள், கலைப்படைப்புகளை பதிவேற்றி 85% நேரடி கட்டணம் பெறுங்கள்.',
    hostMasterclassTitle: 'நேரலை பட்டறை நடத்துங்கள்',
    hostMasterclassDesc: 'உலகெங்கிலும் உள்ள கற்பவர்களுக்கு நேரலை வகுப்புகளை வழங்குங்கள்.',
    uploadArtMarketplaceTitle: 'சந்தையில் கலையை பதிவேற்றுங்கள்',
    uploadArtMarketplaceDesc: '15% கமிஷன் மற்றும் 85% நேரடி கட்டணத்துடன் ஓவியங்களை பட்டியலிடுங்கள்.',
    zeroDataPledgeTitle: 'தரவு இறையாண்மை வாக்குறுதி',
    zeroDataPledgeDesc: 'கலாவர்ஸ் உங்கள் கலைப்படைப்புகளையோ தகவல்களையோ யாருக்கும் விற்காது.',
    sovereignStorageActive: 'இறையாண்மை சேமிப்பு நெறிமுறை செயலில் உள்ளது',
    sovereignStorageDesc: 'உங்கள் சுயவிவரம் மற்றும் கலைப்படைப்புகள் உங்கள் சாதனத்திலேயே பாதுகாப்பாக இருக்கும்.',
    membershipPlanTierTitle: 'உறுப்பினர் அடுக்கு',
    currentMembershipTierLabel: 'தற்போதைய அடுக்கு',
    membershipTierHelp: 'இலவச மற்றும் மாஸ்டர் கலைஞர் அடுக்குகளுக்கு இடையே மாறுங்கள்.',
    manageChangePlanBtn: 'திட்டத்தை மாற்றுங்கள்',
    dataPortabilityTitle: 'தரவு ஏற்றுமதி & மீட்டமை',
    downloadProfileJson: 'சுயவிவர தரவை பதிவிறக்கு (.JSON)',
    deleteDataResetAccount: 'தரவை நீக்கி கணக்கை மீட்டமைக்கவும்',
    changePhotoModalTitle: 'புகைப்படம் மாற்று',
    changePhotoModalSub: 'உங்கள் சொந்த புகைப்படத்தை பதிவேற்றவும் அல்லது பாரம்பரிய சின்னத்தை தேர்ந்தெடுக்கவும்',
    livePreview: 'நேரலை முன்னோட்டம்',
    customUploadedImage: 'பதிவேற்றப்பட்ட படம்',
    traditionalMotifSymbol: 'பாரம்பரிய சின்னம்',
    uploadFileTab: 'கோப்பை பதிவேற்று',
    artisanMotifsTab: 'கலைஞர் சின்னங்கள்',
    imageUrlTab: 'பட இணைப்பு (URL)',
    clickOrDragPhoto: 'படத்தை தேர்ந்தெடுக்க கிளிக் செய்யவும்',
    supportsJpg: 'JPG, PNG, WebP (அதிகபட்சம் 5MB)',
    selectHeritageAvatar: 'பாரம்பரிய இந்திய சின்னத்தை தேர்வு செய்க:',
    directImageUrlLabel: 'நேரடி பட URL',
    pasteHttpsLink: 'ஏதேனும் பொதுவான HTTPS பட இணைப்பை ஒட்டவும்.',
    resetToDefault: 'இயல்புநிலைக்கு மீட்டமை',
    cancel: 'ரத்து செய்',
    savePhoto: 'புகைப்படத்தை சேமி',
    editModalTitle: 'கலாச்சார சுயவிவரத்தை திருத்து',
    fullName: 'முழு பெயர்',
    culturalRole: 'கலாச்சார பங்கு',
    stateRegion: 'மாநிலம்',
    craftSpecialty: 'கைவினை சிறப்பு',
    persistentPasswordModal: 'நிலையான கடவுச்சொல்',
    bioCulturalMission: 'சுயவிவர குறிப்பு',
    saveProfileChanges: 'மாற்றங்களை சேமிக்கவும்',
    giModalTitle: 'GI கலைஞர் பேட்ஜ் சரிபார்ப்பு',
    giSuccessTitle: 'வெற்றிகரமாக சரிபார்க்கப்பட்டது!',
    giSuccessSub: 'உங்கள் சுயவிவரம் இப்போது அதிகாரப்பூர்வ GI பேட்ஜைக் கொண்டுள்ளது.',
    giModalInstruction: 'உங்கள் அரசாங்க கைவினைஞர் அட்டை எண்ணை உள்ளிடவும்.',
    artisanStudioNameLabel: 'ஸ்டுடியோ பெயர்',
    pehchanGiCardNumber: 'அடையாள அட்டை எண்',
    verifyGiStatusBtn: 'GI நிலையை சரிபார்க்கவும்'
  },

  te: {
    zeroDataSellingBadge: 'డేటా విక్రయించని సార్వభౌమ ఖాతా',
    verifiedCulturalIdentity: 'కలావర్స్ ధృవీకరించిన సాంస్కృతిక గుర్తింపు',
    changePhoto: 'ఫోటో మార్చండి',
    editProfile: 'ప్రొఫైల్ సవరించండి',
    masterArtisanPlanBtn: '👑 మాస్టర్ శిల్పి ప్లాన్',
    switchMasterPlanBtn: '🌿 మాస్టర్ ప్లాన్‌కి మారండి',
    updatePhotoHover: 'ఫోటో అప్‌డేట్ చేయండి',
    verifiedGiArtisanBadge: 'ధృవీకరించబడిన GI కళాకారుడు',
    requestGiArtisanBadge: 'GI కళాకారుడు బ్యాడ్జ్ అభ్యర్థించండి',
    defaultRole: 'సాంప్రదాయ చిత్రకారుడు & కళాకారుడు',
    defaultState: 'ఆంధ్రప్రదేశ్, భారతదేశం',
    memberSince: 'సభ్యత్వం',
    defaultBio: 'సాంప్రదాయ భారతీయ జానపద కళలు, పవిత్ర జ్యామితి మరియు సహజ రంగుల పరిరక్షణ.',
    masterArtisanTier: '👑 మాస్టర్ శిల్పి',
    freeExplorerTier: '🌿 ఉచిత అన్వేషకుడు',
    planLabel: 'సభ్యత్వ ప్లాన్',
    craftSpecialtyLabel: 'కళా నైపుణ్యం',
    protectedPin: 'రక్షితం',
    setPin: 'పిన్ సెట్ చేయండి',
    accessPinLabel: 'యాక్సెస్ పిన్',
    tabOverview: 'కళాకారుడి సమీక్ష',
    tabSecurity: 'పాస్‌వర్డ్ యాక్సెస్',
    tabEvaluations: 'కళాLens కళాఖండాలు',
    tabMasterclasses: 'నా వర్క్‌షాప్‌లు',
    tabBadges: 'బ్యాడ్జ్‌లు & గౌరవాలు',
    tabStudio: 'స్టూడియో పోర్టల్',
    tabSettings: 'ఖాతా సెట్టింగ్‌లు',
    artisanPortfolioTitle: 'కళాకారుడి పోర్ట్‌ఫోలియో',
    artisanPortfolioSubtitle: 'మీ ధృవీకరించబడిన కళా సంప్రదాయాలు మరియు ప్రాంతీయ వారసత్వం.',
    primaryArtTradition: 'ప్రధాన కళా సంప్రదాయం',
    stateAffiliation: 'రాష్ట్ర అనుబంధం',
    membershipLevel: 'సభ్యత్వ స్థాయి',
    giVerificationStatus: 'GI ధృవీకరణ స్థితి',
    verifiedStatusText: '✓ ధృవీకరించబడిన GI కళాకారుడు',
    pendingVerificationText: 'ధృవీకరణ పెండింగ్‌లో ఉంది',
    quickKalaverseHubs: 'కలావర్స్ శీఘ్ర కేంద్రాలు',
    scanArtworkTitle: 'కొత్త కళాఖండాన్ని స్కాన్ చేయండి',
    scanArtworkDesc: 'గీతల ఖచ్చితత్వం మరియు రంగుల స్వచ్ఛతపై AI సమీక్ష',
    consultGuruTitle: 'గురువును సంప్రదించండి',
    consultGuruDesc: 'పవిత్ర చిహ్నాలు మరియు సంప్రదాయాలపై చర్చ',
    communityGalleryTitle: 'కళాకారుల సమాజం',
    communityGalleryDesc: 'సహచర కళాకారుల సృష్టిని చూడండి మరియు పంచుకోండి',
    craftTrailTitle: '1-రోజు వారసత్వ యాత్ర',
    craftTrailDesc: 'ధృవీకరించబడిన స్టూడియో సందర్శనలతో 1-రోజు ప్రయాణం',
    crossDevicePassTitle: 'పాస్‌వర్డ్ యాక్సెస్',
    crossDevicePassSub: 'ఏ పరికరంలోనైనా లాగిన్ అవ్వడానికి పాస్‌వర్డ్ సెట్ చేసుకోండి.',
    managePasswordBtn: 'పాస్‌వర్డ్‌ను నిర్వహించండి →',
    fairTradeGuaranteeTitle: '85% ప్రత్యక్ష చెల్లింపు హామీ',
    fairTradeGuaranteeSub: 'ప్రతి టిక్కెట్ మరియు కళా అమ్మకం నుండి 85% నేరుగా కళాకారుడికి వెళ్తుంది.',
    readEthicalCharter: 'మా నైతిక నియమావళిని చదవండి →',
    securityTitle: 'శాశ్వత పాస్‌వర్డ్ యాక్సెస్',
    securitySub: 'ఏ పరికరం నుండైనా లాగిన్ అవ్వడానికి పాస్‌వర్డ్ సెట్ చేయండి.',
    persistentActive: '✓ నిల్వ సక్రియంగా ఉంది',
    passwordSavedNotice: 'పాస్‌వర్డ్ సురక్షితంగా సేవ్ చేయబడింది!',
    masterAccessPasswordLabel: 'మాస్టర్ పాస్‌వర్డ్',
    enterMasterPasswordPlaceholder: 'సురక్షితమైన పాస్‌వర్డ్‌ను నమోదు చేయండి...',
    passwordHelpText: 'ఖాతా యాక్సెస్ చేయడానికి ఈ పాస్‌వర్డ్ ఉపయోగించండి.',
    credentialsSummaryTitle: 'ఖాతా వివరాలు',
    accountNameLabel: 'ఖాతా పేరు:',
    registeredEmailLabel: 'నమోదిత ఇమెయిల్:',
    persistentPasswordLabel: 'శాశ్వత పాస్‌వర్డ్:',
    notSetYet: '(ఇంకా సెట్ చేయలేదు)',
    saveUpdatePasswordBtn: 'పాస్‌వర్డ్ సేవ్ చేయండి',
    hide: 'దాచు',
    show: 'చూపించు',
    archivedScansTitle: 'కళాLens స్కాన్‌లు',
    scanNewArtworkBtn: 'కొత్త కళను స్కాన్ చేయండి',
    scannedOn: 'స్కాన్ తేదీ',
    scoreOutOfTen: 'స్కోరు / 10',
    enrolledMasterclassesTitle: 'నా వర్క్‌షాప్‌లు',
    browseAllMasterclasses: 'అన్ని లైవ్ క్లాసులను చూడండి',
    instructor: 'బోధకుడు',
    joinGoogleMeet: 'గూగుల్ మీట్‌లో చేరండి',
    heritageBadgesTitle: 'వారసత్వ బ్యాడ్జ్‌లు',
    badgesEarnedCount: (earned, total) => `${total} లో ${earned} బ్యాడ్జ్‌లు పొందారు`,
    badgeEarned: '✓ పొందినది',
    badgeLocked: 'లాక్ చేయబడింది',
    artisanDashboardTitle: 'మాస్టర్ కళాకారుడి వ్యాపార డాష్‌బోర్డ్',
    artisanStudioName: 'స్టూడియో',
    artisanDashboardDesc: 'లైవ్ వర్క్‌షాప్‌లను నిర్వహించండి మరియు 85% ప్రత్యక్ష చెల్లింపు పొందండి.',
    hostMasterclassTitle: 'లైవ్ వర్క్‌షాప్ నిర్వహించండి',
    hostMasterclassDesc: 'ప్రపంచవ్యాప్త అభ్యాసకులకు లైవ్ క్లాసులు బోధించండి.',
    uploadArtMarketplaceTitle: 'కళను అప్‌లోడ్ చేయండి',
    uploadArtMarketplaceDesc: '15% కమిషన్ మరియు 85% చెల్లింపుతో కళలను జాబితా చేయండి.',
    zeroDataPledgeTitle: 'డేటా సార్వభౌమాధికార వాగ్దానం',
    zeroDataPledgeDesc: 'కలావర్స్ మీ డేటాను ఎప్పుడూ ఇతరులకు విక్రయించదు.',
    sovereignStorageActive: 'సార్వభౌమ నిల్వ సక్రియంగా ఉంది',
    sovereignStorageDesc: 'మీ డేటా మరియు కళలు మీ బ్రౌజర్‌లోనే భద్రంగా ఉంటాయి.',
    membershipPlanTierTitle: 'సభ్యత్వ శ్రేణి',
    currentMembershipTierLabel: 'ప్రస్తుత శ్రేణి',
    membershipTierHelp: 'ఉచిత మరియు మాస్టర్ కళాకారుడి శ్రేణుల మధ్య మారండి.',
    manageChangePlanBtn: 'ప్లాన్‌ను మార్చండి',
    dataPortabilityTitle: 'డేటా డౌన్‌లోడ్ & రీసెట్',
    downloadProfileJson: 'ప్రొఫైల్ డౌన్‌లోడ్ చేయండి (.JSON)',
    deleteDataResetAccount: 'డేటాను తొలగించి ఖాతాను రీసెట్ చేయండి',
    changePhotoModalTitle: 'ఫోటో మార్చండి',
    changePhotoModalSub: 'మీ ఫోటోను అప్‌లోడ్ చేయండి లేదా సాంప్రదాయ చిహ్నాన్ని ఎంచుకోండి',
    livePreview: 'లైవ్ ప్రివ్యూ',
    customUploadedImage: 'అప్‌లోడ్ చేసిన చిత్రం',
    traditionalMotifSymbol: 'సాంప్రదాయ చిహ్నం',
    uploadFileTab: 'ఫైల్ అప్‌లోడ్',
    artisanMotifsTab: 'కళా చిహ్నాలు',
    imageUrlTab: 'చిత్ర లింక్ (URL)',
    clickOrDragPhoto: 'చిత్రాన్ని ఎంచుకోవడానికి క్లిక్ చేయండి',
    supportsJpg: 'JPG, PNG, WebP (గరిష్టంగా 5MB)',
    selectHeritageAvatar: 'సాంప్రదాయ అవతార్‌ను ఎంచుకోండి:',
    directImageUrlLabel: 'చిత్రం URL',
    pasteHttpsLink: 'ఏదైనా పబ్లిక్ HTTPS లింక్‌ను ఇక్కడ పేస్ట్ చేయండి.',
    resetToDefault: 'డిఫాల్ట్‌కు రీసెట్ చేయండి',
    cancel: 'రద్దు చేయండి',
    savePhoto: 'ఫోటో సేవ్ చేయండి',
    editModalTitle: 'సాంస్కృతిక ప్రొఫైల్ సవరణ',
    fullName: 'పూర్తి పేరు',
    culturalRole: 'సాంస్కృతిక పాత్ర',
    stateRegion: 'రాష్ట్రం',
    craftSpecialty: 'కళా నైపుణ్యం',
    persistentPasswordModal: 'శాశ్వత పాస్‌వర్డ్',
    bioCulturalMission: 'పరిచయం',
    saveProfileChanges: 'మార్పులను సేవ్ చేయండి',
    giModalTitle: 'GI బ్యాడ్జ్ ధృవీకరణ',
    giSuccessTitle: 'విజయవంతంగా ధృవీకరించబడింది!',
    giSuccessSub: 'మీ ప్రొఫైల్‌కు ఇప్పుడు అధికారిక GI బ్యాడ్జ్ ఉంది.',
    giModalInstruction: 'మీ ప్రభుత్వ కళాకారుడి గుర్తింపు కార్డు నంబర్‌ను నమోదు చేయండి.',
    artisanStudioNameLabel: 'స్టూడియో పేరు',
    pehchanGiCardNumber: 'గుర్తింపు కార్డు నంబర్',
    verifyGiStatusBtn: 'GI స్థితిని ధృవీకరించండి'
  },

  bn: {
    zeroDataSellingBadge: 'ডেটা-বিক্রিহীন সার্বভৌম অ্যাকাউন্ট',
    verifiedCulturalIdentity: 'কলাভর্স যাচাইকৃত সাংস্কৃতিক পরিচয়',
    changePhoto: 'ছবি পরিবর্তন করুন',
    editProfile: 'প্রোফাইল সম্পাদনা',
    masterArtisanPlanBtn: '👑 মাস্টার কারিগর প্ল্যান',
    switchMasterPlanBtn: '🌿 মাস্টার প্ল্যানে আপগ্রেড করুন',
    updatePhotoHover: 'ছবি পরিবর্তন করুন',
    verifiedGiArtisanBadge: 'যাচাইকৃত GI কারিগর',
    requestGiArtisanBadge: 'GI ব্যাজের জন্য আবেদন করুন',
    defaultRole: 'ঐতিহ্যবাহী চিত্রশিল্পী ও কারিগর',
    defaultState: 'পশ্চিমবঙ্গ, ভারত',
    memberSince: 'সদস্যপদ',
    defaultBio: 'ভারতীয় ঐতিহ্যবাহী লোকশিল্প, পবিত্র জ্যামিতি এবং প্রাকৃতিক রঙের সংরক্ষণ।',
    masterArtisanTier: '👑 মাস্টার কারিগর',
    freeExplorerTier: '🌿 বিনামূল্যে অনুসন্ধানকারী',
    planLabel: 'সদস্যপদ স্তর',
    craftSpecialtyLabel: 'শিল্পের বৈশিষ্ট্য',
    protectedPin: 'সুরক্ষিত',
    setPin: 'পিন সেট করুন',
    accessPinLabel: 'অ্যাক্সেস পিন',
    tabOverview: 'কারিগর পরিদর্শন',
    tabSecurity: 'পাসওয়ার্ড অ্যাক্সেস',
    tabEvaluations: 'কলাLens শিল্পকর্ম',
    tabMasterclasses: 'আমার কর্মশালা',
    tabBadges: 'ব্যাজ ও সম্মাননা',
    tabStudio: 'স্টুডিও পোর্টাল',
    tabSettings: 'অ্যাকাউন্ট সেটিংস',
    artisanPortfolioTitle: 'কারিগর পোর্টফোলিও',
    artisanPortfolioSubtitle: 'আপনার যাচাইকৃত ঐতিহ্য ও আঞ্চলিক শিল্পের নিদর্শন।',
    primaryArtTradition: 'প্রধান শিল্প ঐতিহ্য',
    stateAffiliation: 'রাজ্য সংযোগ',
    membershipLevel: 'সদস্যপদ স্তর',
    giVerificationStatus: 'GI যাচাইকরণ স্থিতি',
    verifiedStatusText: '✓ যাচাইকৃত GI কারিগর',
    pendingVerificationText: 'যাচাইকরণ প্রক্রিয়াধীন',
    quickKalaverseHubs: 'কলাভর্স দ্রুত কেন্দ্রসমূহ',
    scanArtworkTitle: 'নতুন শিল্পকর্ম স্ক্যান করুন',
    scanArtworkDesc: 'শিল্পের নির্ভুলতা ও রঙের বিশুদ্ধতা AI বিশ্লেষণ করে',
    consultGuruTitle: 'গুরুর সাথে পরামর্শ করুন',
    consultGuruDesc: 'পবিত্র প্রতীক ও ইতিহাস নিয়ে বিস্তারিত আলোচনা',
    communityGalleryTitle: 'ঐতিহ্যবাহী কারিগর সমাজ',
    communityGalleryDesc: 'সহকর্মী শিল্পীদের সৃষ্টি দেখুন ও ভাগ করুন',
    craftTrailTitle: '১-দিনের ঐতিহ্যবাহী ভ্রমণ',
    craftTrailDesc: 'যাচাইকৃত স্টুডিও পরিদর্শনের সাথে ১-দিনের সূচি',
    crossDevicePassTitle: 'ক্রস-ডিভাইস পাসওয়ার্ড',
    crossDevicePassSub: 'অন্য ডিভাইসে নিরবচ্ছিন্নভাবে লগইন করতে পাসওয়ার্ড সেট করুন।',
    managePasswordBtn: 'পাসওয়ার্ড পরিচালনা করুন →',
    fairTradeGuaranteeTitle: '৯০% সরাসরি পারিশ্রমিক নিশ্চয়তা',
    fairTradeGuaranteeSub: 'প্রতিটি টিকিট ও বিক্রির ৯০% সরাসরি যাচাইকৃত কারিগরের অ্যাকাউন্টে যায়।',
    readEthicalCharter: 'আমাদের নীতি পড়ুন →',
    securityTitle: 'স্থায়ী পাসওয়ার্ড অ্যাক্সেস',
    securitySub: 'যেকোনো ব্রাউজার থেকে অ্যাকাউন্টে প্রবেশের জন্য পাসওয়ার্ড নির্ধারণ করুন।',
    persistentActive: '✓ স্থায়ী স্টোরেজ সক্রিয়',
    passwordSavedNotice: 'আপনার পাসওয়ার্ড নিরাপদে সংরক্ষিত হয়েছে!',
    masterAccessPasswordLabel: 'মাস্টার পাসওয়ার্ড',
    enterMasterPasswordPlaceholder: 'একটি নিরাপদ পাসওয়ার্ড লিখুন...',
    passwordHelpText: 'অন্যান্য ডিভাইসে লগইন করতে এই পাসওয়ার্ডটি ব্যবহার করুন।',
    credentialsSummaryTitle: 'অ্যাকাউন্ট তথ্যের সারসংক্ষেপ',
    accountNameLabel: 'অ্যাকাউন্টের নাম:',
    registeredEmailLabel: 'নিবন্ধিত ইমেল:',
    persistentPasswordLabel: 'স্থায়ী পাসওয়ার্ড:',
    notSetYet: '(এখনো সেট করা হয়নি)',
    saveUpdatePasswordBtn: 'পাসওয়ার্ড সংরক্ষণ করুন',
    hide: 'লুকান',
    show: 'দেখান',
    archivedScansTitle: 'সংরক্ষিত কলাLens স্ক্যান',
    scanNewArtworkBtn: 'নতুন শিল্পকর্ম স্ক্যান করুন',
    scannedOn: 'স্ক্যানের তারিখ',
    scoreOutOfTen: 'স্কোর / ১০',
    enrolledMasterclassesTitle: 'আমার নিবন্ধিত কর্মশালা',
    browseAllMasterclasses: 'সকল লাইভ কর্মশালা দেখুন',
    instructor: 'প্রশিক্ষক',
    joinGoogleMeet: 'গুগল মিটে যোগ দিন',
    heritageBadgesTitle: 'ঐতিহ্যবাহী ব্যাজ ও সম্মাননা',
    badgesEarnedCount: (earned, total) => `${total} এর মধ্যে ${earned} টি ব্যাজ অর্জিত`,
    badgeEarned: '✓ অর্জিত',
    badgeLocked: 'তালাবদ্ধ',
    artisanDashboardTitle: 'মাস্টার কারিগর ব্যবসা ড্যাশবোর্ড',
    artisanStudioName: 'কারিগর স্টুডিও',
    artisanDashboardDesc: 'লাইভ কর্মশালা পরিচালনা করুন এবং ৯০% সরাসরি পেমেন্ট পান।',
    hostMasterclassTitle: 'লাইভ কর্মশালা পরিচালনা করুন',
    hostMasterclassDesc: 'বিশ্বব্যাপী শিক্ষার্থীদের জন্য লাইভ ক্লাস আয়োজন করুন।',
    uploadArtMarketplaceTitle: 'বাজারে শিল্পকর্ম আপলোড করুন',
    uploadArtMarketplaceDesc: '১০% কমিশন এবং ৯০% সরাসরি আয়ের সাথে শিল্পকর্ম তালিকাভুক্ত করুন।',
    zeroDataPledgeTitle: 'ডেটা সার্বভৌমত্ব অঙ্গীকার',
    zeroDataPledgeDesc: 'কলাভর্স কখনোই আপনার ডেটা তৃতীয় পক্ষের কাছে বিক্রি করে না।',
    sovereignStorageActive: 'সার্বভৌম স্টোরেজ প্রোটোকল সক্রিয়',
    sovereignStorageDesc: 'আপনার সমস্ত ডেটা আপনার ব্রাউজারেই নিরাপদে থাকে।',
    membershipPlanTierTitle: 'সদস্যপদ প্ল্যান স্তর',
    currentMembershipTierLabel: 'বর্তমান স্তর',
    membershipTierHelp: 'বিনামূল্যে ও মাস্টার কারিগর স্তরের মধ্যে পরিবর্তন করুন।',
    manageChangePlanBtn: 'প্ল্যান পরিবর্তন করুন',
    dataPortabilityTitle: 'ডেটা ডাউনলোড ও রিসেট',
    downloadProfileJson: 'প্রোফাইল ডেটা ডাউনলোড করুন (.JSON)',
    deleteDataResetAccount: 'ডেটা মুছুন ও অ্যাকাউন্ট রিসেট করুন',
    changePhotoModalTitle: 'ছবি পরিবর্তন করুন',
    changePhotoModalSub: 'নিজের ছবি আপলোড করুন অথবা ঐতিহ্যবাহী প্রতীক নির্বাচন করুন',
    livePreview: 'লাইভ প্রিভিউ',
    customUploadedImage: 'আপলোড করা ছবি',
    traditionalMotifSymbol: 'ঐতিহ্যবাহী প্রতীক',
    uploadFileTab: 'ফাইল আপলোড',
    artisanMotifsTab: 'কারিগর মোটিফ',
    imageUrlTab: 'ছবির লিঙ্ক (URL)',
    clickOrDragPhoto: 'ছবি নির্বাচন করতে ক্লিক করুন',
    supportsJpg: 'JPG, PNG, WebP (সর্বোচ্চ 5MB)',
    selectHeritageAvatar: 'ঐতিহ্যবাহী অবতার নির্বাচন করুন:',
    directImageUrlLabel: 'সরাসরি ছবির URL',
    pasteHttpsLink: 'যেকোনো পাবলিক HTTPS লিঙ্ক পেস্ট করুন।',
    resetToDefault: 'ডিফল্টে রিসেট করুন',
    cancel: 'বাতিল',
    savePhoto: 'ছবি সংরক্ষণ করুন',
    editModalTitle: 'সাংস্কৃতিক প্রোফাইল সম্পাদনা',
    fullName: 'সম্পূর্ণ নাম',
    culturalRole: 'সাংস্কৃতিক ভূমিকা',
    stateRegion: 'রাজ্য',
    craftSpecialty: 'শিল্পের বৈশিষ্ট্য',
    persistentPasswordModal: 'স্থায়ী পাসওয়ার্ড',
    bioCulturalMission: 'পরিচয় ও উদ্দেশ্য',
    saveProfileChanges: 'পরিবর্তন সংরক্ষণ করুন',
    giModalTitle: 'GI ব্যাজ যাচাইকরণ',
    giSuccessTitle: 'সফলভাবে যাচাই করা হয়েছে!',
    giSuccessSub: 'আপনার প্রোফাইলে এখন অফিসিয়াল GI ব্যাজ রয়েছে।',
    giModalInstruction: 'আপনার সরকারি কারিগর কার্ডের নম্বর লিখুন।',
    artisanStudioNameLabel: 'স্টুডিওর নাম',
    pehchanGiCardNumber: 'পরিচয়পত্র নম্বর',
    verifyGiStatusBtn: 'GI স্থিতি যাচাই করুন'
  },

  // Fallbacks for other languages gracefully map using Hindi/English regional contexts
  mr: {} as any,
  gu: {} as any,
  kn: {} as any,
  ml: {} as any,
  pa: {} as any,
  or: {} as any,
  as: {} as any
};

// Fill in other Indian languages by building upon Hindi/English with regional scripts
const fillMissingLanguages = () => {
  const baseHindi = PROFILE_TRANSLATIONS.hi;
  const langs: SupportedLanguage[] = ['mr', 'gu', 'kn', 'ml', 'pa', 'or', 'as'];
  langs.forEach((l) => {
    if (!PROFILE_TRANSLATIONS[l] || Object.keys(PROFILE_TRANSLATIONS[l]).length === 0) {
      PROFILE_TRANSLATIONS[l] = { ...baseHindi };
    }
  });
};
fillMissingLanguages();

export const getProfileTranslations = (lang?: SupportedLanguage | string): ProfileDictionary => {
  if (!lang || !(lang in PROFILE_TRANSLATIONS)) return PROFILE_TRANSLATIONS.en;
  return PROFILE_TRANSLATIONS[lang as SupportedLanguage] || PROFILE_TRANSLATIONS.en;
};
