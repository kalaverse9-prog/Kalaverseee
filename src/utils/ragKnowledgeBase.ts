import { CulturalExperience, UserTravelPreferences } from '../types';

export const BOOKABLE_CULTURAL_EXPERIENCES: CulturalExperience[] = [
  {
    id: 'exp_mithila_atelier',
    title: 'Mithila Master Atelier: Organic Pigments & Bharni Painting',
    artForm: 'Madhubani / Mithila Folk Painting',
    state: 'Bihar',
    district: 'Madhubani (Jitwarpur Village)',
    location: 'Jitwarpur Master Guild Courtyard, Madhubani',
    artisanName: 'National Awardee Smt. Sunita Devi & Chitrakar Guild',
    artisanTitle: 'Master Chitrakar & Mithila Heritage Preserver',
    rating: 4.9,
    reviewsCount: 142,
    priceINR: 1850,
    duration: 'Full Day (8:30 AM – 6:30 PM)',
    highlights: [
      'Private masterclass in 3 distinct styles: Bharni, Katchni, and Godna',
      'Forage and grind raw turmeric, aparajita flowers, and lamp soot into natural tempera',
      'Paint your own sacred Matsya (fish) on cow-dung treated handmade Wasli paper',
      'Authentic Maithili culinary feast (Litti Chokha, Baingan Bharta, Makhana Kheer)'
    ],
    inclusions: [
      'Handmade Wasli paper & bamboo nib kalam pen kit to take home',
      'All organic natural pigment materials',
      'Full Maithili regional lunch & herbal morning chai',
      'Certificate of Cultural Immersion signed by Master Chitrakar',
      'Fair-Trade 85% direct artisan remuneration contribution (15% platform commission)'
    ],
    accessibilityFeatures: [
      'Ground-floor village atelier with zero staircase steps',
      'Wheelchair-accessible courtyard and resting pavilions',
      'Gentle pacing with seated painting workstations',
      'Shaded courtyard with cooling clay-tiled verandahs'
    ],
    dietaryFeatures: [
      '100% Pure Vegetarian Maithili Thali',
      'Sattvic options (without onion/garlic) available upon request',
      'Fresh farm-harvested seasonal produce & mineral drinking water'
    ],
    meetingPoint: 'Jitwarpur Village Gate, 4.5 km from Madhubani Railway Station',
    nearestHub: 'Darbhanga Airport (35 km) / Madhubani Junction (5 km)',
    description: 'Immerse in the ancestral birthplace of Mithila painting. Step into village mud homes adorned with Kohbar marriage murals, grind your own natural pigments from fresh flora, and learn sacred geometric double-line linework directly from award-winning master women artists.',
    badge: 'GI-Certified Heritage Workshop'
  },
  {
    id: 'exp_kalamkari_temple',
    title: 'The Sacred Kalam: Srikalahasti Freehand River & Temple Scroll Expedition',
    artForm: 'Srikalahasti Freehand Kalamkari',
    state: 'Andhra Pradesh',
    district: 'Tirupati / Chittoor',
    location: 'Swarnamukhi Riverbank Guild, Srikalahasti',
    artisanName: 'Master Craftsman Shri G. Venkatagiri',
    artisanTitle: 'State Heritage Kalamkari Guru',
    rating: 4.95,
    reviewsCount: 118,
    priceINR: 2200,
    duration: 'Full Day (8:00 AM – 7:00 PM)',
    highlights: [
      'Witness the 17-step river washing and natural myrobalan mordant process',
      'Hold the traditional bamboo-and-wool Kalam pen used for over 600 years',
      'Extract deep black (Kasim) from fermented jaggery and iron scrap',
      'Traditional Rayalaseema temple lunch on fresh banana leaves'
    ],
    inclusions: [
      'Custom sharpened bamboo Kalam and cotton scroll panel to take home',
      'All botanical dye ingredients (Madder root, Myrobalan, Indigo)',
      'Traditional Rayalaseema banana leaf lunch & buttermilk',
      'VIP entry to Srikalahasteeswara Temple architectural tour',
      'Official GI-Authenticity seal on your completed scroll'
    ],
    accessibilityFeatures: [
      'Paved paths leading to craft society workshop',
      'Seated work desks with back support available',
      'Accessible clean washrooms at heritage center',
      'Guide assistance for riverbank walking portions'
    ],
    dietaryFeatures: [
      'Traditional South Indian Temple Vegetarian Thali',
      'Sattvic (No Onion/Garlic) preparation strictly followed',
      'Vegan-friendly choices (cold pressed sesame oil & coconut preparations)'
    ],
    meetingPoint: 'Sri Venkateswara Kalamkari Society, Near Srikalahasti Temple',
    nearestHub: 'Tirupati Airport (38 km) / Chennai International (110 km)',
    description: 'Discover the ancient 100% freehand pen art of Srikalahasti. Experience the alchemy of natural dyes in copper cauldrons with madder roots and create your own sacred deity panel with fermented iron inks.',
    badge: 'GI Tag Registered Guild'
  },
  {
    id: 'exp_warli_sahyadri',
    title: 'Echoes of the Sahyadri: Warli Tribal Rice-Mural & Tarpa Heritage Trail',
    artForm: 'Warli Folk & Tribal Murals',
    state: 'Maharashtra',
    district: 'Palghar (Jawhar & Dahanu)',
    location: 'Ganjad Village & Jawhar Forest Foothills',
    artisanName: 'Shri Balu Dumada & Tribal Elders Collective',
    artisanTitle: 'National Warli Heritage Master',
    rating: 4.88,
    reviewsCount: 96,
    priceINR: 1450,
    duration: 'Full Day (8:30 AM – 6:30 PM)',
    highlights: [
      'Chew natural bamboo twigs into fine brushes and grind fresh white rice paste',
      'Paint cosmic Warli human figures using intersecting triangles on terracotta tiles',
      'Walk through community sacred forest groves (Devrai) discovering medicinal plants',
      'Live hypnotic Tarpa trumpet music performance & spiral evening dance'
    ],
    inclusions: [
      'Terracotta wall plaque painted by you with bamboo brush',
      'Traditional village kitchen meal (Smoky Nachni Bhakri & Pitla)',
      'Tarpa music performance & community circle participation',
      'Fair-trade direct contribution to tribal women self-help collective'
    ],
    accessibilityFeatures: [
      'Level village pathways with minimal incline',
      'Rest chairs placed under banyan canopy during cultural talks',
      'Transport drop-off directly at village courtyard',
      'Senior-friendly relaxed pace'
    ],
    dietaryFeatures: [
      'Rustic Organic Farm-to-Table Maharashtrian Thali',
      'Nachni (Finger Millet) gluten-free flatbreads with fresh pitla',
      'Freshly pounded green chili thecha and seasonal chickoo dessert'
    ],
    meetingPoint: 'Ganjad Gram Panchayat Chhatri, Dahanu-Jawhar Road',
    nearestHub: 'Dahanu Road Railway Station (30 km) / Mumbai (120 km)',
    description: 'Connect with prehistoric nature-worshipping traditions. Paint with rice paste on red-ochre Geru walls, savor wholesome millets cooked on clay chulhas, and dance to the resonant sounds of the Tarpa horn under the Sahyadri twilight.',
    badge: 'Eco-Cultural Tribal Heritage'
  },
  {
    id: 'exp_pichwai_nathdwara',
    title: 'Divine Splendor: Nathdwara Pichwai, Lapis Lazuli & 24K Gold Leaf Atelier',
    artForm: 'Nathdwara Pichwai & Royal Mewar Miniature',
    state: 'Rajasthan',
    district: 'Rajsamand (Nathdwara) / Udaipur',
    location: 'Chitron Ki Gali Heritage Haveli, Nathdwara',
    artisanName: 'Master Chitrakar Kalyanmal Sharma',
    artisanTitle: 'Royal Shrinathji Darbar Artist',
    rating: 4.96,
    reviewsCount: 165,
    priceINR: 2800,
    duration: 'Full Day (8:00 AM – 7:30 PM)',
    highlights: [
      'Visit 400-year-old painters street havelis behind Shrinathji Temple',
      'Observe multi-week stone grinding of pure Persian lapis lazuli and malachite',
      'Burnish genuine 24-karat gold foil with polished Himalayan agate stones',
      'Royal Mewari Thali lunch with Dal Baati Churma and saffron Ghevar'
    ],
    inclusions: [
      'Framed Wasli paper artwork with genuine gold foil accents to take home',
      'Miniature squirrel-hair fine liner brush',
      'Lavish Royal Mewari Thali lunch & saffron thandai',
      'Exclusive haveli archive tour with antique 18th-century Pichwais',
      'Certificate of Royal Provenance'
    ],
    accessibilityFeatures: [
      'Air-conditioned indoor heritage haveli studios',
      'Elevator and ramp access to private gallery viewing rooms',
      'Comfortable cushioned floor baithaks and table-chair seating',
      'Step-free vehicle drop-off at temple gate entrance'
    ],
    dietaryFeatures: [
      'Pure Vegetarian Royal Mewari Feast',
      'Strictly Sattvic Shrinathji Darbar Prasad option (No Onion, No Garlic)',
      'Rich saffron sweets, dry fruit delicacies, and herbal teas'
    ],
    meetingPoint: 'Amet Haveli Gate, Near Shrinathji Temple, Nathdwara',
    nearestHub: 'Maharana Pratap Airport Udaipur (45 km)',
    description: 'Enter the sacred court of Shrinathji. Master the exquisite art of miniature temple backdrops using pulverized gemstones and 24-karat gold leaf, guided by a 14th-generation court artist family.',
    badge: 'Royal GI Heritage Masterclass'
  },
  {
    id: 'exp_pattachitra_odisha',
    title: 'The Eternal Scroll: Raghurajpur Palm-Leaf Tala Pattachitra & Gotipua Trail',
    artForm: 'Odisha Tala Pattachitra (Palm-Leaf Etching)',
    state: 'Odisha',
    district: 'Puri (Raghurajpur Village)',
    location: 'Raghurajpur Heritage Craft Village Gurukul',
    artisanName: 'National Awardee Guru Rabindra Behera',
    artisanTitle: 'Chitrakar Master & Palm-Leaf Virtuoso',
    rating: 4.92,
    reviewsCount: 134,
    priceINR: 1650,
    duration: 'Full Day (8:30 AM – 7:00 PM)',
    highlights: [
      'Explore Raghurajpur where every single household is a living open-air museum',
      'Incise dried palmyra palm leaves with a pointed iron Lekhani stylus',
      'Rub natural kajal lamp soot into grooves to reveal miraculous black linework',
      'Live Gotipua acrobatic temple dance performance in traditional silk attire'
    ],
    inclusions: [
      'Your engraved palm-leaf scroll bookmark and miniature Lord Ganesha talisman',
      'Iron Lekhani stylus & prepared palm-leaf slats kit',
      'Authentic Odia Dalma & Kanika lunch with warm Chhena Poda sweet',
      'Live Gotipua dance performance seating',
      'Official Raghurajpur Craft Guild Authenticity Stamp'
    ],
    accessibilityFeatures: [
      'Flat paved pedestrian village streets with no motor vehicular traffic',
      'Open verandah seating with cool natural breeze',
      'Wheelchair assistance available from village entrance',
      'Senior-friendly, tranquil walking trail'
    ],
    dietaryFeatures: [
      'Traditional Jagannath Temple Mahaprasad-style Vegetarian Feast',
      'Pure Sattvic preparation without onion or garlic',
      'Authentic Dalma lentils, raw papaya curry, and caramel Chhena Poda'
    ],
    meetingPoint: 'Raghurajpur Heritage Village Welcome Arch, Near Chandanpur',
    nearestHub: 'Puri Railway Station (14 km) / Bhubaneswar BPI Airport (50 km)',
    description: 'Walk through India’s most celebrated artist village where coconut palms sway over painted verandas. Learn the precision craft of etching palm leaves with iron styluses and experience acrobatic temple dances preserved for centuries.',
    badge: 'UNESCO-Recognized Heritage Village'
  },
  {
    id: 'exp_varanasi_silk_loom',
    title: 'Kashi Loom & Enamel: Varanasi Master Jacquard Weaving & Gulabi Meenakari',
    artForm: 'Banarasi Brocade & Gulabi Meenakari',
    state: 'Uttar Pradesh',
    district: 'Varanasi',
    location: 'Kabir Chaura & Chaukhamba Artisan Mohalla, Varanasi',
    artisanName: 'Master Weaver Haji Rais Ahmed & Meenakar Shri Bablu Ji',
    artisanTitle: 'Presidential Awardee Brocade Artisan',
    rating: 4.91,
    reviewsCount: 110,
    priceINR: 1950,
    duration: 'Full Day (9:00 AM – 6:30 PM)',
    highlights: [
      'Step into centuries-old weaver mohallas and hear the rhythmic clatter of pit looms',
      'Decode punch-card jacquard systems creating pure silver and gold Zari borders',
      'Hands-on Gulabi Meenakari (rare pink enamel) brushwork on silver ornaments',
      'Famous Banarasi breakfast (Kachori Jalebi) & chilled saffron Thandai'
    ],
    inclusions: [
      'Hand-woven Banarasi silk bookmark with pure zari weave',
      'Enamelled silver pendant crafted during workshop',
      'Banarasi street food breakfast & royal heritage lunch',
      'Direct artisan wholesale showroom access with Silk Mark seals'
    ],
    accessibilityFeatures: [
      'Battery e-rickshaw transport through old city lanes',
      'Comfortable seating at master weaver workshops',
      'Accessible ground-floor display galleries',
      'Personal guide escort for navigation'
    ],
    dietaryFeatures: [
      'Iconic Vegetarian Banarasi Cuisine',
      'Chilled Rose Thandai, Malaiyyo (seasonal), and fresh Banarasi Paan',
      'Sattvic options throughout the old city trail'
    ],
    meetingPoint: 'Kabir Chaura Math Heritage Gate, Varanasi',
    nearestHub: 'Lal Bahadur Shastri Airport Varanasi (24 km)',
    description: 'Witness the holy city’s legendary textile majesty. Discover how gold threads intertwine with raw silk on ancestral looms and try your hand at the rare Mughal art of pink enamel jewelry.',
    badge: 'GI Silk & Enamel Guild'
  }
];

export interface VerifiedKnowledgeChunk {
  id: string;
  source: string;
  category: 'itinerary' | 'craft' | 'materials' | 'food' | 'accessibility' | 'logistics';
  state: string;
  keywords: string[];
  content: string;
}

export const VERIFIED_CULTURAL_KNOWLEDGE_BASE: VerifiedKnowledgeChunk[] = [
  {
    id: 'kb_bihar_madhubani',
    source: 'KalaVerse GI Heritage Registry - Bihar Madhubani',
    category: 'itinerary',
    state: 'Bihar',
    keywords: ['madhubani', 'mithila', 'bihar', 'jitwarpur', 'ranti', 'bharni', 'katchni', 'godna', 'fish', 'lotus', 'wasli'],
    content: `Madhubani (Mithila) art originates from Bihar's Mithila region. Authentic centers: Jitwarpur and Ranti villages in Madhubani district.
Styles: Bharni (vibrant color filling), Katchni (fine monochrome hatching), Godna (concentric tattoo motifs), Tantrik (sacred yantras), and Kohbar (nuptial chamber murals).
Materials: Handmade cow-dung washed Wasli paper, beveled bamboo nib pens (Kalam), natural pigments (turmeric for yellow, aparajita for blue, fermented iron molasses for black, cow urine/peeli mitti for ochre).
1-Day Itinerary: 8:30 AM arrival in Jitwarpur -> 11:00 AM masterclass grinding organic dyes -> 1:30 PM Maithili lunch (Litti Chokha & Makhana Kheer) -> 3:30 PM Kohbar mural walk -> 6:00 PM Direct Fair-Trade SHG market.
Best months: October to March. Nearest airport: Darbhanga (35 km). Nearest railway: Madhubani Junction.`
  },
  {
    id: 'kb_andhra_kalamkari',
    source: 'KalaVerse GI Heritage Registry - Andhra Srikalahasti',
    category: 'itinerary',
    state: 'Andhra Pradesh',
    keywords: ['kalamkari', 'andhra', 'srikalahasti', 'kalam', 'river', 'swarnamukhi', 'myrobalan', 'madder', 'temple', 'scroll'],
    content: `Srikalahasti Kalamkari is a 100% freehand temple scroll painting tradition dating back over 600 years to Vijayanagara kings.
Distinctive feature: The Kalam pen made of sharp bamboo reed wrapped with wool reservoir.
Natural alchemy: Treated in buffalo milk and myrobalan nuts to stop dye bleeding. Inked with fermented iron-molasses (Kasim) and boiled with madder root in copper cauldrons for deep red.
1-Day Itinerary: 8:00 AM river washing at Swarnamukhi Ghats -> 10:30 AM freehand charcoal & Kalam inking -> 1:00 PM Rayalaseema Thali lunch -> 3:00 PM copper vat boiling miracle -> 5:30 PM Srikalahasteeswara Temple architecture & GI cooperative bazaar.
Nearest airport: Tirupati (38 km). Nearest station: Srikalahasti.`
  },
  {
    id: 'kb_maharashtra_warli',
    source: 'KalaVerse Living Traditions - Maharashtra Sahyadri',
    category: 'itinerary',
    state: 'Maharashtra',
    keywords: ['warli', 'maharashtra', 'jawhar', 'dahanu', 'palghar', 'tarpa', 'rice', 'geru', 'tribal', 'triangle', 'kalpavriksha'],
    content: `Warli is a prehistoric Neolithic tribal mural art of the Sahyadri mountains in Palghar, Maharashtra.
Iconography: Built using only circle (sun/moon), triangle (mountains/pointed trees), and square (sacred enclosure/Chowk). Two opposing triangles represent the balance of male and female energy.
Materials: Natural Geru (red ochre) and cow-dung background wash, white rice paste mixed with natural gum, chewed bamboo sticks.
1-Day Itinerary: 8:30 AM arrival in Ganjad village -> 11:00 AM bamboo brush chewing & rice paste masterclass -> 1:30 PM Nachni Bhakri & Pitla village meal -> 3:30 PM Devrai sacred forest walk -> 5:30 PM twilight Tarpa spiral dance.
Nearest station: Dahanu Road (30 km) / Mumbai (120 km).`
  },
  {
    id: 'kb_rajasthan_pichwai',
    source: 'KalaVerse Royal Ateliers - Rajasthan Nathdwara',
    category: 'itinerary',
    state: 'Rajasthan',
    keywords: ['pichwai', 'rajasthan', 'nathdwara', 'shrinathji', 'udaipur', 'gold', 'miniature', 'lapis', 'kadamba', 'haveli'],
    content: `Pichwai (meaning 'that which hangs behind') originated in Nathdwara 400 years ago as devotional cloth backdrops for Lord Shrinathji.
Technique: Starched khadi cloth, hand-ground Persian lapis lazuli stone, cinnabar red, malachite green, and 24-karat gold leaf burnished with smooth Himalayan agate stones. Single squirrel-hair brushes used for razor-thin lines.
1-Day Itinerary: 8:00 AM Chitron Ki Gali painters lane walk -> 10:30 AM stone grinding & gold leaf burnishing workshop -> 1:00 PM Royal Mewari Thali at heritage haveli -> 3:00 PM Shrinathji iconography darshan -> 6:00 PM Master gallery viewing.
Nearest airport: Udaipur Maharana Pratap (45 km).`
  },
  {
    id: 'kb_odisha_pattachitra',
    source: 'KalaVerse Temple Crafts - Odisha Raghurajpur',
    category: 'itinerary',
    state: 'Odisha',
    keywords: ['pattachitra', 'odisha', 'raghurajpur', 'puri', 'palm', 'leaf', 'gotipua', 'conch', 'tamarind', 'lekhani'],
    content: `Raghurajpur is India's premier heritage crafts village where every resident is a Chitrakar.
Tala Pattachitra: Palmyra palm leaves stitched together, incised with an iron stylus (Lekhani), and wiped with natural lampblack soot.
Canvas Pattachitra: Tamarind seed gum layered onto cotton fabric, coated with conch shell white (Shankha Bhasma).
1-Day Itinerary: 8:30 AM welcome to Raghurajpur painted verandahs -> 11:00 AM palm leaf incising workshop -> 1:30 PM Odia Dalma & Chhena Poda feast -> 3:30 PM Gotipua temple dance recital -> 5:30 PM artisan verandah walk & Pipli applique tour.
Nearest station: Puri (14 km) / Bhubaneswar Airport (50 km).`
  },
  {
    id: 'kb_accessibility_guidelines',
    source: 'KalaVerse Accessible Heritage Standards',
    category: 'accessibility',
    state: 'Pan-India',
    keywords: ['accessibility', 'wheelchair', 'senior', 'elderly', 'step-free', 'rest', 'pacing', 'easy', 'flat'],
    content: `KalaVerse KalaTour itineraries provide verified accessibility support:
- Jitwarpur (Madhubani): Level earthen village tracks, step-free verandahs, resting cots in shaded courtyards.
- Nathdwara (Pichwai): Elevator & ramp access in master havelis, air-conditioned studio spaces, cushioned floor and chair options.
- Raghurajpur (Pattachitra): 100% pedestrian village street free of motor vehicles, wide verandahs, level surface throughout.
- Srikalahasti: Ground floor workshop halls with table-and-chair seating and guide escorts.
- Senior travelers can request 'Relaxed Pace' with extended 45-minute tea and resting pauses between studio sessions.`
  },
  {
    id: 'kb_culinary_heritage',
    source: 'KalaVerse Cultural Dining Registry',
    category: 'food',
    state: 'Pan-India',
    keywords: ['food', 'dining', 'thali', 'sattvic', 'vegetarian', 'litti', 'dalma', 'nachni', 'dal baati', 'lunch', 'jain'],
    content: `Every KalaTour includes authentic, regionally grounded, hygienic meals cooked by local communities:
- Bihar: Roasted sattu Litti with smoked eggplant Chokha, Govindobhog rice, and foxnut Makhana Kheer.
- Andhra Pradesh: Steaming hot banana-leaf Rayalaseema Thali with tangy Gongura pachadi, Pappu, and crispy Pappadam.
- Maharashtra: Smoky ragi Nachni Bhakri, fresh green chili Thecha, hot pitla, and sweet chickoo halwa.
- Rajasthan: Desi ghee Dal Baati Churma, desert Ker Sangri, Gatte ki Sabzi, and saffron Ghevar.
- Odisha: Temple-style Kanika sweet rice, Dalma lentils with raw papaya & pumpkin, and warm caramel Chhena Poda.
Strict Sattvic (without onion and garlic) and Vegan options are always supported.`
  },
  {
    id: 'kb_fair_trade_guarantee',
    source: 'KalaVerse 85% Direct Artisan Payout Policy',
    category: 'logistics',
    state: 'Pan-India',
    keywords: ['payment', 'price', 'fair-trade', 'payout', 'tickets', 'booking', 'commission', 'artisan', 'cost'],
    content: `KalaVerse operates on a transparent 85% Direct Artisan Remuneration Model:
- For every ticket booked through KalaTour, exactly 85% goes directly to the master artisan and village self-help collective.
- The remaining 15% covers platform commission, payment gateway processing, and fair-trade verification.
- Zero predatory commercial agent markups.
- Verified GI (Geographical Indication) tags and Artisan Pehchan ID numbers are checked on all experiences.`
  }
];

export function retrieveCulturalContext(
  query: string,
  preferences?: Partial<UserTravelPreferences>
): { chunks: VerifiedKnowledgeChunk[]; citations: string[] } {
  const queryLower = (query || '').toLowerCase();
  const prefTokens = [
    ...(preferences?.interests || []),
    preferences?.availableTime || '',
    preferences?.foodPreferences || '',
    preferences?.experienceType || '',
    ...(preferences?.accessibilityRequirements || []),
    preferences?.budget ? `₹${preferences.budget}` : ''
  ]
    .join(' ')
    .toLowerCase();

  const combinedSearch = `${queryLower} ${prefTokens}`;

  const scored = VERIFIED_CULTURAL_KNOWLEDGE_BASE.map((chunk) => {
    let score = 0;
    for (const kw of chunk.keywords) {
      if (combinedSearch.includes(kw)) {
        score += 3;
      }
    }
    if (combinedSearch.includes(chunk.state.toLowerCase())) {
      score += 5;
    }
    if (chunk.content.toLowerCase().includes(queryLower) && queryLower.length > 3) {
      score += 4;
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Top matching chunks (minimum 2, up to 4)
  const topMatches = scored.filter((item) => item.score > 0).slice(0, 4);
  const selectedChunks = topMatches.length > 0 ? topMatches.map((m) => m.chunk) : VERIFIED_CULTURAL_KNOWLEDGE_BASE.slice(0, 2);

  const citations = Array.from(new Set(selectedChunks.map((c) => c.source)));

  return { chunks: selectedChunks, citations };
}

export function findMatchingExperience(queryOrState: string): CulturalExperience | undefined {
  const q = queryOrState.toLowerCase();
  return BOOKABLE_CULTURAL_EXPERIENCES.find((exp) =>
    exp.state.toLowerCase().includes(q) ||
    exp.artForm.toLowerCase().includes(q) ||
    exp.title.toLowerCase().includes(q) ||
    exp.district.toLowerCase().includes(q) ||
    exp.id.toLowerCase().includes(q)
  );
}
