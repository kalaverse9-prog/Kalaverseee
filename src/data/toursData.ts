import { TourItinerary } from '../types';

export const ART_TOURS_DATA: Record<string, TourItinerary> = {
  bihar_madhubani: {
    id: 'bihar_madhubani',
    stateId: 'bihar',
    stateName: 'Bihar',
    title: 'Mithila Sacred Canvas: Madhubani Heritage & Village Trail',
    theme: 'Folk Wall Murals, Natural Pigments & Kohbar Traditions',
    duration: 'Full Day (8:30 AM – 7:30 PM)',
    heroImageId: 'madhubani_bihar',
    highlights: [
      'Private session with National Awardee Mithila masters in Ranti & Jitwarpur',
      'Hands-on workshop extracting natural yellow from turmeric and blue from aparajita',
      'Walk through village mud homes adorned with Kohbar fertility marriage murals',
      'Authentic Maithili culinary lunch (Litti Chokha & Makhana Kheer)'
    ],
    practicalTips: [
      'Nearest Railway Station: Madhubani / Darbhanga Airport (35 km)',
      'Best Months: October to March when village walls are freshly painted after monsoon',
      'Artisan Etiquette: Always ask permission before photographing family Kohbar bedrooms',
      'Souvenir Buying: Buy directly from registered women artisan self-help groups (SHGs) with GI authenticity seals'
    ],
    schedule: [
      {
        timeSlot: '08:30 AM - 10:30 AM',
        period: 'Morning',
        activityTitle: 'Arrival & Welcome in Jitwarpur Artisan Heritage Village',
        location: 'Jitwarpur Village, Madhubani District',
        description: 'Arrive in Jitwarpur, celebrated as the world epicentre of Madhubani painting with over three Padma Shri awardees. Enjoy warm ginger chai while meeting the Chitrakar community.',
        craftExperience: 'Observe the three distinct styles: Godna (tattoo art), Bharni (vibrant color filling), and Katchni (fine line hatching).',
        insiderTip: 'Look closely at the exterior mud walls of homes—each tells the genealogical story of the household.'
      },
      {
        timeSlot: '11:00 AM - 01:30 PM',
        period: 'Morning',
        activityTitle: 'Masterclass: Grinding Natural Dyes & Bamboo Stylus Nib Crafting',
        location: 'Ranti Craft Collective Studio',
        description: 'Join master women artists in extracting authentic organic colors from cow dung, lampblack, pomegranate peel, and Aparajita petals. Learn to bevel fresh green bamboo reeds into traditional pen nibs.',
        craftExperience: 'Paint your own sacred Matsya (fish) motif on cow-dung treated handmade Wasli paper.',
        insiderTip: 'The cow dung wash acts as a natural insect repellent that protects paper for hundreds of years.'
      },
      {
        timeSlot: '01:30 PM - 03:00 PM',
        period: 'Afternoon',
        activityTitle: 'Traditional Maithili Feast & Sikki Grass Weaving Demo',
        location: 'Mithila Rural Heritage Courtyard',
        description: 'Savor organic local delicacies: roasted sattu litti with smoked eggplant chokha, fragrant Govindobhog rice, and slow-cooked makhana (foxnut) payasam.',
        craftExperience: 'Watch rural grandmothers weave golden Sikki grass into lightweight dowry baskets and boxes.',
        insiderTip: 'Sikki grass is harvested only once a year during monsoon and changes from green to pure golden lacquer.'
      },
      {
        timeSlot: '03:30 PM - 05:30 PM',
        period: 'Afternoon',
        activityTitle: 'Kohbar Nuptial Chamber Mural Walk & Folk Lore',
        location: 'Old Rajnagar Raj Darbhanga Ruins & Village Shrines',
        description: 'Explore the sacred Kohbar room where traditional wedding rituals take place. Study the cosmic symbolism of the central lotus pond (Purain leaf), bamboo grove (lineage continuity), sun, and moon.',
        craftExperience: 'Interactive guided iconography tour detailing Ramayana episodes painted in Mithila style.',
        insiderTip: 'Ask about the Tantrik school of Madhubani, which uses sacred geometry to channel spiritual focus.'
      },
      {
        timeSlot: '06:00 PM - 07:30 PM',
        period: 'Evening',
        activityTitle: 'Direct Fair-Trade Artisan Bazaar & Evening Folk Songs',
        location: 'Gramin Kala Kendra, Madhubani',
        description: 'Meet independent women artisans selling hand-painted silk sarees, stoles, bookmarks, and framed canvases directly without middlemen. Listen to soulful Maithili folk songs sung to the rhythm of dholak.',
        craftExperience: 'Personalized artwork signing by the master artist who created your piece.',
        insiderTip: 'Ensure your purchase has the official "Craftmark" or "India Handloom" holographic stamp.'
      }
    ]
  },

  andhra_kalamkari: {
    id: 'andhra_kalamkari',
    stateId: 'andhra_pradesh',
    stateName: 'Andhra Pradesh',
    title: 'The Sacred Pen: Srikalahasti Kalamkari & Temple Scroll Expedition',
    theme: 'Organic Dyes, Swarnamukhi River Alchemy & Epic Temple Hangings',
    duration: 'Full Day (8:00 AM – 7:00 PM)',
    heroImageId: 'kalamkari_andhra',
    highlights: [
      'Witness the 17-step river washing and natural myrobalan mordant process',
      'Hold the traditional bamboo-and-sheep-wool Kalam pen used for 600 years',
      'Exclusive viewing of ancient Vijayanagara era temple scrolls at Srikalahasti',
      'Learn how buffalo milk prevents natural madder dye from bleeding on cotton'
    ],
    practicalTips: [
      'Nearest Major Hub: Tirupati (38 km) / Chennai Airport (110 km)',
      'What to Wear: Breathable cotton clothing suitable for walking near riverbanks',
      'Photography: Permitted in artisan workshops; avoid flash in temple sanctums',
      'Craft Verification: Srikalahasti style is 100% freehand pen work; distinct from Machilipatnam block print'
    ],
    schedule: [
      {
        timeSlot: '08:00 AM - 10:00 AM',
        period: 'Morning',
        activityTitle: 'Swarnamukhi River Washing & Cloth Preparation',
        location: 'Swarnamukhi River Ghats, Srikalahasti',
        description: 'Witness master dyers dipping unbleached cotton cloth into the mineral-rich waters of the Swarnamukhi river and treating it with crushed myrobalan (Karakkai) nut extract and buffalo milk.',
        craftExperience: 'Feel the stiff, golden-cream texture of the cured fabric ready for pen drawing.',
        insiderTip: 'The river’s unique sulfur and iron mineral ratio is what produces the deep jet black dye.'
      },
      {
        timeSlot: '10:30 AM - 01:00 PM',
        period: 'Morning',
        activityTitle: 'The Kalam Masterclass: Freehand Charcoal & Kasim Inking',
        location: 'Sri Venkateswara Kalamkari Craft Society',
        description: 'Master the traditional Kalam stylus: a sharpened bamboo reed wound with sheep wool that acts as an ink reservoir. Sketch deities using burnt tamarind twigs, then ink permanently with fermented jaggery-iron solution.',
        craftExperience: 'Ink your own Saraswati / Hamsa scroll panel and watch the black lines oxidize in real time.',
        insiderTip: 'Squeeze the wool ball gently between your fingers to control the flow of natural ink to the pen tip.'
      },
      {
        timeSlot: '01:00 PM - 02:30 PM',
        period: 'Afternoon',
        activityTitle: 'Rayalaseema Temple Lunch & Spice Garden Walk',
        location: 'Heritage Dining Hall, Srikalahasti',
        description: 'Enjoy traditional Andhra thali served on fresh banana leaves: hot Gongura pickle, Pappu, Tamarind Pulihora, and fresh buttermilk.',
        craftExperience: 'Walk through organic dye gardens where madder root (Manjistha), indigo, and marigolds are cultivated.',
        insiderTip: 'Taste the Srikalahasti special pootharekulu sweet wrapped in paper-thin rice starch wafers.'
      },
      {
        timeSlot: '03:00 PM - 05:00 PM',
        period: 'Afternoon',
        activityTitle: 'Boiling in Copper Vats: Madder Red Color Miracle',
        location: 'Community Boiling Vats (Bhatti)',
        description: 'Watch the dramatic boiling of inked cloth in giant copper cauldrons with crushed Surudu bark and Madder roots. In minutes, the alum-mordanted pencil lines bloom into radiant vermilion red while untouched areas remain pure ivory.',
        craftExperience: 'Learn the chemistry behind traditional mineral mordants (Phatkari).',
        insiderTip: 'No modern chemical dye can match the earthy, calming aroma of herbal madder root.'
      },
      {
        timeSlot: '05:30 PM - 07:00 PM',
        period: 'Evening',
        activityTitle: 'Srikalahasteeswara Temple Architectural Tour & Artisan Guild',
        location: 'Srikalahasti Temple & Artisan Bazaars',
        description: 'Visit the 1,000-year-old Vayu Linga temple whose carved granite gopurams inspired generations of Kalamkari scroll layouts. Finish at the artisan cooperative where master weavers and painters showcase GI-tagged textiles.',
        craftExperience: 'Direct purchase of GI-certified dupattas, wall tapestries, and tree-of-life paintings.',
        insiderTip: 'Check the back of the cloth—authentic Kalamkari shows dye penetration through to the reverse side.'
      }
    ]
  },

  maharashtra_warli: {
    id: 'maharashtra_warli',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    title: 'Echoes of the Sahyadri: Warli Tribal Forest & Sacred Canvas Trail',
    theme: 'Neolithic Geometry, Rice Flour Murals & the Cosmic Tarpa Dance',
    duration: 'Full Day (8:30 AM – 6:30 PM)',
    heroImageId: 'warli_maharashtra',
    highlights: [
      'Visit ancestral tribal hamlets in Dahanu and Jawhar nested in the Sahyadris',
      'Learn the ancient Warli human figure construction using intersecting balance triangles',
      'Listen to live hypnotic Tarpa trumpet music during a twilight village circle dance',
      'Cook organic Nachni (finger millet) bhakri on village earthen stoves'
    ],
    practicalTips: [
      'Nearest Railway Station: Dahanu Road / Mumbai (120 km)',
      'Recommended Gear: Comfortable walking shoes for rustic red-earth village trails',
      'Respectful Conduct: Warli culture is egalitarian and nature-worshipping; preserve village cleanliness',
      'Authenticity Check: True Warli uses rice paste on mud/geru background without bright chemical pigments'
    ],
    schedule: [
      {
        timeSlot: '08:30 AM - 10:30 AM',
        period: 'Morning',
        activityTitle: 'Journey through Sahyadri Foothills into Ganjad Tribal Hamlet',
        location: 'Ganjad Village, Dahanu Taluka',
        description: 'Arrive at the rustic tribal settlement surrounded by mango and chickoo orchards. Step into mud-walled huts freshly coated with red ochre (Geru) and dried cow dung.',
        craftExperience: 'Meet local tribal elders who explain why Warli paintings contain no royal hierarchies or religious divisions.',
        insiderTip: 'Notice the house entrance—the "Chowk" painting guards the family from negative spirits.'
      },
      {
        timeSlot: '11:00 AM - 01:30 PM',
        period: 'Morning',
        activityTitle: 'Workshop: Chewing Bamboo Brushes & Rice Paste Alchemy',
        location: 'Warli Artisan Collective, Jawhar',
        description: 'Grind white rice on stone querns, blend with water and natural babool resin. Take a dry bamboo twig and chew the tip into fine natural bristles. Learn the symbolic geometry of sun, tree, and spirit triangles.',
        craftExperience: 'Paint a traditional Warli Kalpavriksha (Tree of Life) and community harvesting scene on a handmade terracotta tile.',
        insiderTip: 'Hold the bamboo stick at a 45-degree angle to keep lines delicate and continuous.'
      },
      {
        timeSlot: '01:30 PM - 03:00 PM',
        period: 'Afternoon',
        activityTitle: 'Rustic Tribal Kitchen Experience & Village Meal',
        location: 'Palghar Organic Village Community Kitchen',
        description: 'Enjoy smoky Nachni (ragi) Bhakri with freshly pounded green chili Thecha, organic pit-cooked Pitla, and sweet chickoo halwa.',
        craftExperience: 'Try your hand at patting ragi dough into flat round rotis on hot clay griddles.',
        insiderTip: 'Nachni is high in calcium and the ancient staple grain of the Sahyadri tribes.'
      },
      {
        timeSlot: '03:30 PM - 05:00 PM',
        period: 'Afternoon',
        activityTitle: 'The Story of Goddess Palghata & Forest Flora Discovery',
        location: 'Sacred Forest Grove (Devrai), Jawhar',
        description: 'Take a guided walk into the untouched community sacred grove. Discover medicinal herbs, ancient banyan roots, and listen to folk tales of Waghdeva (the Tiger God) and Kansari (the Corn Mother).',
        craftExperience: 'Collect fallen wild Mahua seeds and understand their cultural significance in tribal art.',
        insiderTip: 'Devrais are biodiversity sanctuaries strictly protected from tree cutting for thousands of years.'
      },
      {
        timeSlot: '05:30 PM - 06:30 PM',
        period: 'Evening',
        activityTitle: 'Twilight Tarpa Performance & Tribal Dance Circle',
        location: 'Village Open Courtyard under the Banyan Tree',
        description: 'As the sun sets over the Sahyadri hills, village youth play the Tarpa—a wind instrument made from dried gourd and bamboo. Join hands in the spiraling Warli dance that mirrors the cosmos.',
        craftExperience: 'Browse and purchase certified GI Warli canvases, terracotta pottery, and bamboo flutes directly from the artisan families.',
        insiderTip: 'The Tarpa dance never reverses direction—it always turns clockwise mirroring the sun’s daily path.'
      }
    ]
  },

  rajasthan_pichwai: {
    id: 'rajasthan_pichwai',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    title: 'Divine Splendor: Nathdwara Pichwai & Royal Mewar Miniature Trail',
    theme: '24K Gold Leaf, Lapis Lazuli, Sacred Kadamba Trees & Temple Backdrops',
    duration: 'Full Day (8:00 AM – 7:30 PM)',
    heroImageId: 'pichwai_rajasthan',
    highlights: [
      'Visit 400-year-old Chitron Ki Gali (Street of Painters) in temple town Nathdwara',
      'Observe grinding of pure lapis lazuli, malachite, and 24-karat gold leaf',
      'Learn the squirrel-hair miniature brush control technique for micro-details',
      'Mewari royal lunch overlooking Lake Pichola / Aravalli hills'
    ],
    practicalTips: [
      'Nearest Airport: Maharana Pratap Airport Udaipur (45 km)',
      'Best Time to Visit: Sharad Purnima or Janmashtami when Pichwais are changed for every festival',
      'Artisan Etiquette: Remove footwear before entering traditional painter havelis',
      'Buying Guide: Look for smooth burnished gold leaf that catches natural sunlight with warm yellow luster'
    ],
    schedule: [
      {
        timeSlot: '08:00 AM - 10:00 AM',
        period: 'Morning',
        activityTitle: 'Walk through Chitron Ki Gali (Painters Street), Nathdwara',
        location: 'Nathdwara, Rajsamand District',
        description: 'Walk through narrow whitewashed lanes lined with historic havelis where generations of Pichwai masters (Chitrakars) have painted for Shrinathji temple for four centuries.',
        craftExperience: 'Watch master painters starched khadi cloth stretched on wooden frames (Takhti).',
        insiderTip: 'The atmosphere is fragrant with rose petals, sandalwood, and incense from morning temple aartis.'
      },
      {
        timeSlot: '10:30 AM - 01:00 PM',
        period: 'Morning',
        activityTitle: 'Master Workshop: Stone Grinding & Agate Burnishing',
        location: 'Ustaad B.G. Sharma Traditional Art Academy',
        description: 'Learn how raw Persian lapis lazuli stones, cinnabar, and gold leaves are pulverized with pestles for weeks to yield luminous gouache pigments. Master the technique of burnishing gold with a polished agate stone.',
        craftExperience: 'Paint delicate Pichwai Kadamba tree leaves and golden jewelry on primed handmade Wasli paper.',
        insiderTip: 'A single squirrel-hair brush can draw lines thinner than a human hair with razor precision.'
      },
      {
        timeSlot: '01:00 PM - 02:30 PM',
        period: 'Afternoon',
        activityTitle: 'Royal Mewari Thali at Historic Heritage Haveli',
        location: 'Amet Haveli / Nathdwara Courtyard',
        description: 'Indulge in authentic royal cuisine: Dal Baati Churma with pure desi ghee, Ker Sangri of the desert, Gatte ki Sabzi, and saffron Ghevar.',
        craftExperience: 'Interact with royal art historians discussing the 6 major Rajasthani miniature painting schools.',
        insiderTip: 'Try the iconic Nathdwara thandai garnished with saffron, pistachios, and rose petals.'
      },
      {
        timeSlot: '03:00 PM - 05:30 PM',
        period: 'Afternoon',
        activityTitle: 'Shrinathji Temple Architecture & Iconography Tour',
        location: 'Shrinathji Temple Complex',
        description: 'Explore the architectural layout of the temple designed as a residential Haveli. Understand the 8 daily Darshans (Ashtayama) and how specific Pichwais are chosen to match weather, mood, and festival.',
        craftExperience: 'Learn the sacred iconography of Kamadhenu cows with silver handprints, blossoming lotus ponds, and monsoon clouds.',
        insiderTip: 'Notice the cows painted with deep blue/green body tones—they reflect the reflection of Lord Krishna.'
      },
      {
        timeSlot: '06:00 PM - 07:30 PM',
        period: 'Evening',
        activityTitle: 'Private Gallery Viewing & Certified Fair-Trade Studio Visit',
        location: 'Shree Pichwai Heritage Foundation, Nathdwara',
        description: 'View museum-grade heritage Pichwai tapestries dating back to the 18th century. Meet contemporary master artists who are blending classical Pichwai compositions into modern architectural spaces.',
        craftExperience: 'Purchase authentic, signed miniature paintings with Certificates of Provenance.',
        insiderTip: 'Check that the gold work has been burnished with stone—it should have a 3D tactile sheen.'
      }
    ]
  },

  odisha_pattachitra: {
    id: 'odisha_pattachitra',
    stateId: 'odisha',
    stateName: 'Odisha',
    title: 'The Eternal Scroll: Raghurajpur Heritage Craft Village & Puri Trail',
    theme: 'Conch Shell White, Palm-Leaf Etchings & Jagannath Devotional Art',
    duration: 'Full Day (8:30 AM – 7:00 PM)',
    heroImageId: 'pattachitra_odisha',
    highlights: [
      'Spend a full day in Raghurajpur where every single home is an open art gallery',
      'Etch intricate Tala Pattachitra using an iron stylus on dried palm leaves',
      'Watch conch shells ground with tamarind seeds to create glowing white pigment',
      'Witness an authentic Gotipua acrobatic temple dance performance'
    ],
    practicalTips: [
      'Nearest Major Station: Puri (14 km) / Bhubaneswar Airport (50 km)',
      'Village Courtesy: Walk leisurely through both village streets; every family welcomes guests with warmth',
      'Palm Leaf Care: Keep palm-leaf scrolls away from excessive moisture to preserve lampblack inking',
      'Authenticity Seal: Ensure your Pattachitra is painted on pure tamarind-cloth canvas or palm fronds'
    ],
    schedule: [
      {
        timeSlot: '08:30 AM - 10:30 AM',
        period: 'Morning',
        activityTitle: 'Welcome to Raghurajpur: The Living Heritage Village',
        location: 'Raghurajpur Village, Puri District',
        description: 'Step into the tranquil village nestled amidst coconut groves and betel nut plantations. Both sides of the two main village streets feature open verandas adorned with colorful mural frescoes.',
        craftExperience: 'Meet the Chitrakar families and learn about their generational connection to the Puri Jagannath Temple.',
        insiderTip: 'Look at the veranda walls: scenes from Gita Govinda and Ramayana greet every visitor.'
      },
      {
        timeSlot: '11:00 AM - 01:30 PM',
        period: 'Morning',
        activityTitle: 'Tala Pattachitra (Palm Leaf) & Mineral Grinding Workshop',
        location: 'Guru Jagannath Mahapatra Art Gurukul',
        description: 'Learn how palmyra palm leaves are harvested, dried in marsh mud, boiled with turmeric, and cut into uniform slats. Take the pointed iron stylus (Lekhani) to incise intricate figures, then rub natural lampblack into the grooves.',
        craftExperience: 'Create your own folding palm-leaf bookmark or Lord Ganesha miniature scroll.',
        insiderTip: 'When you rub the black paste over the scratched leaf and wash it with water, the incisions miraculously turn jet black!'
      },
      {
        timeSlot: '01:30 PM - 03:00 PM',
        period: 'Afternoon',
        activityTitle: 'Traditional Odia Dalma Feast & Village Courtyard Relaxation',
        location: 'Village Heritage Community Kitchen',
        description: 'Feast on wholesome Odia culinary classics: aromatic Kanika sweet rice, Dalma (lentils simmered with raw papaya and pumpkin), Besara, and Chhena Poda (baked caramelized cottage cheese dessert).',
        craftExperience: 'Taste authentic temple-style Mahaprasad preparation techniques.',
        insiderTip: 'Chhena Poda was born in Nayagarh, Odisha, and is baked for hours wrapped in sal leaves.'
      },
      {
        timeSlot: '03:30 PM - 05:00 PM',
        period: 'Afternoon',
        activityTitle: 'Gotipua Traditional Temple Dance Recital',
        location: 'Gotipua Gurukul Dance Mandap, Raghurajpur',
        description: 'Watch young Gotipua dancers—the precursors to classical Odissi dance—perform intricate bandhas (acrobatic postures) dressed in ornate silk patolas and silver jewelry to the rhythm of Mardala drums.',
        craftExperience: 'Observe how the dancers’ hand mudras and facial expressions directly mirror Pattachitra figures.',
        insiderTip: 'Raghurajpur is the birthplace of legendary Odissi maestro Guru Kelucharan Mohapatra.'
      },
      {
        timeSlot: '05:30 PM - 07:00 PM',
        period: 'Evening',
        activityTitle: 'Direct Master Artisan Village Walk & Pipili Applique Stop',
        location: 'Chitrakar Verandahs & Pipli Village Enroute',
        description: 'Walk from veranda to veranda acquiring original Pattachitra canvases, papier-mâché masks, cow-dung toys, and stop at nearby Pipli to admire monumental festive applique umbrellas and lanterns.',
        craftExperience: 'Direct fair-trade purchase supporting over 140 artisan families directly.',
        insiderTip: 'Ask the artist to explain the hidden narrative in the border of your chosen painting.'
      }
    ]
  }
};
