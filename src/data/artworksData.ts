import { ArtworkImage } from '../types';

// Authentic Traditional Indian Artworks corresponding to states in exact order with images
export const TRADITIONAL_ARTWORKS: Record<string, ArtworkImage> = {
  madhubani_bihar: {
    id: 'madhubani_bihar',
    title: 'Mithila / Madhubani Two Sacred Fishes (Matsya)',
    artForm: 'Madhubani / Mithila Painting',
    state: 'Bihar',
    region: 'Mithila, Madhubani & Jitwarpur',
    imageUrl: '/assets/states/bihar.jpg',
    description: 'Iconic Madhubani painting showing two arched sacred fishes (Matsya) meeting to form a central heart shape, rendered in fine black Kachni line work with bright orange fins and tails, surrounded by swirling aquatic waves and lotus water flora.',
    aspectRatio: '3:4',
    colors: ['#EA580C', '#2D2D2D', '#FFFFFF', '#F59E0B', '#1E3A8A'],
    symbolism: [
      'Matsya (Fish): Procreation, fertility, cosmic life-flow, and auspicious blessing',
      'Heart-shaped arch: Harmony between Prakriti (Nature) and Purusha (Consciousness)',
      'Fine line Kachni hatching: Spiritual patience and meditative devotion'
    ],
    materials: ['Natural bamboo nib (kalam)', 'Cow dung wash treated handmade paper', 'Lamp soot black', 'Geru & kusum flower orange'],
    svgData: 'madhubani'
  },

  kalamkari_andhra: {
    id: 'kalamkari_andhra',
    title: 'Srikalahasti Kalamkari Royal Peacock',
    artForm: 'Srikalahasti Kalamkari',
    state: 'Andhra Pradesh',
    region: 'Srikalahasti, Chittoor & Krishna District',
    imageUrl: '/assets/states/andhra_pradesh.jpg',
    description: 'Magnificent pen-drawn Srikalahasti Kalamkari peacock (Mayura) on a deep cobalt blue background, featuring ornate white curved neck, cyan-blue fishnet hatching, and billowing feather plumage in intricate black and white paisley flourishes.',
    aspectRatio: '1:1',
    colors: ['#1E3A8A', '#0284C7', '#2D2D2D', '#FFFFFF', '#F59E0B'],
    symbolism: [
      'Mayura (Peacock): Celestial beauty, immortality, and monsoon celebration',
      'Paisley swirls (Karru): The eternal seed of creation and continuous life cycle',
      'Cobalt Blue Background: The infinite cosmic sky and divine protection'
    ],
    materials: ['Tamarind twig charcoal', 'Bamboo reed pen (kalam) with sheep wool reservoir', 'Fermented iron jaggery black ink (Kasim)', 'Natural indigo dye', 'Buffalo milk wash'],
    svgData: 'kalamkari'
  },

  warli_maharashtra: {
    id: 'warli_maharashtra',
    title: 'Warli Village Night Dance & Sacred Tree',
    artForm: 'Warli Folk Painting',
    state: 'Maharashtra',
    region: 'Palghar & Sahyadri Foothills',
    imageUrl: '/assets/states/maharashtra.jpg',
    description: 'Authentic Warli tribal painting on red ochre mud wall with white rice paste. Shows a village under the crescent moon and starry sky: circular Tarpa dance around the fire, thatched huts, sacred tree, and farmers with livestock in ecological harmony.',
    aspectRatio: '16:9',
    colors: ['#7F1D1D', '#FFFFFF', '#D97706', '#2D2D2D'],
    symbolism: [
      'Circular Tarpa Dance: Life cycle with no beginning and no end',
      'Crescent Moon & Starry Night: Cosmic time guiding agricultural rituals',
      'Intersecting Triangles: Balance of universal masculine and feminine energies'
    ],
    materials: ['Rice flour paste mixed with water and edible tree gum', 'Chewed bamboo stylus', 'Red ochre (Geru) and cow-dung mud plaster base'],
    svgData: 'warli'
  },

  pichwai_rajasthan: {
    id: 'pichwai_rajasthan',
    title: 'Nathdwara Pichwai Shrinathji in Lotus Lake',
    artForm: 'Pichwai & Miniature Painting',
    state: 'Rajasthan',
    region: 'Nathdwara, Mewar & Kishangarh',
    imageUrl: '/assets/states/rajasthan.jpg',
    description: 'Opulent Nathdwara Pichwai depicting the serene dark blue countenance of Lord Shrinathji Krishna surrounded by a sacred lake of blooming pink lotuses and emerald pads (Kamal Talai), adorned with a jeweled mukut crown, pearl nose ring, and tiered necklaces.',
    aspectRatio: '3:4',
    colors: ['#1E3A8A', '#EC4899', '#10B981', '#F59E0B', '#2D2D2D', '#FFFFFF'],
    symbolism: [
      'Kamal Talai (Lotus Lake): Spiritual purity and devotion blossoming in worldly waters',
      'Shrinathji Face: The manifestation of supreme divine bliss (Ananda)',
      'Jeweled Mukut: Sovereignty over cosmic consciousness'
    ],
    materials: ['Pure gold leaf (Zari / Vark)', 'Lapis lazuli stone pigment', 'Malachite mineral green', 'Kajal black', 'Squirrel hair fine liner brushes'],
    svgData: 'pichwai'
  },

  pattachitra_odisha: {
    id: 'pattachitra_odisha',
    title: 'Raghurajpur Pattachitra Shri Ram Sabha',
    artForm: 'Raghurajpur Pattachitra',
    state: 'Odisha',
    region: 'Raghurajpur Heritage Crafts Village, Puri',
    imageUrl: '/assets/states/odisha.jpg',
    description: 'Classical Orissan cloth scroll painting portraying green-complexioned Lord Rama and Devi Sita enthroned on a carved wooden throne beneath a royal canopy, with devoted Lord Hanuman kneeling at their feet, bordered by multi-tiered floral creeper bands.',
    aspectRatio: '3:4',
    colors: ['#DC2626', '#10B981', '#F59E0B', '#1E3A8A', '#2D2D2D', '#FFF8E7'],
    symbolism: [
      'Ram Sabha: Righteous governance, spiritual harmony, and supreme Dharma',
      'Hanuman in Prayer: Selfless devotion (Bhakti) and unwavering loyalty',
      'Floral Creeper Border (Pana): Sacred threshold separating divine realm from mundane'
    ],
    materials: ['Treated tussar silk and tamarind-gum cotton cloth (Patta)', 'Conch shell (Shankha) white', 'Hingula (cinnabar) red', 'Haritala (orpiment) yellow', 'Lamp soot black', 'Tree resin lacquer coating'],
    svgData: 'pattachitra'
  },

  thangka_sikkim: {
    id: 'thangka_sikkim',
    title: 'Sikkim Thangka of Guru Padmasambhava',
    artForm: 'Tibetan-Indian Thangka Scroll Painting',
    state: 'Sikkim',
    region: 'Gangtok, Rumtek & West Sikkim',
    imageUrl: '/assets/states/sikkim.jpg',
    description: 'Sacred Buddhist Thangka scroll depicting Guru Padmasambhava (Guru Rinpoche) seated in vajra posture on a lotus throne, draped in golden robes, holding the vajra, kapala skull cup, and khatvanga trident, framed by celestial clouds and auspicious offerings.',
    aspectRatio: '3:4',
    colors: ['#F59E0B', '#DC2626', '#0284C7', '#10B981', '#EC4899', '#FFF8E7'],
    symbolism: [
      'Guru Padmasambhava: The Second Buddha who tames mental delusions and establishes Dharma',
      'Vajra & Kapala: Union of skillful compassion and transcendent wisdom',
      'Rainbow Light Rays: The realization of the pristine clear-light nature of mind'
    ],
    materials: ['Pure 24K powdered gold pigment', 'Crushed lapis lazuli, coral, cinnabar and turquoise minerals', 'Yak hide glue binder', 'Hand-woven brocade silk mounting'],
    svgData: 'thangka'
  },

  tanjore_tamilnadu: {
    id: 'tanjore_tamilnadu',
    title: 'Thanjavur 24K Gold Arch Goddess Saraswati',
    artForm: 'Tanjore / Thanjavur Painting',
    state: 'Tamil Nadu',
    region: 'Thanjavur, Trichy & Kumbakonam',
    imageUrl: '/assets/states/tamil_nadu.jpg',
    description: 'Regal classical Tanjore painting of four-armed Goddess Saraswati playing the Veena on a white lotus throne, framed by a three-dimensional 24K gold foil relief gopuram arch encrusted with glittering red and green gemstones, flanked by two attendants.',
    aspectRatio: '3:4',
    colors: ['#F59E0B', '#DC2626', '#10B981', '#1E3A8A', '#2D2D2D', '#FFFFFF'],
    symbolism: [
      'Veena: Mastery over the sound vibration of creation (Nada Brahma)',
      'Gopuram Arch (Prabhavali): The gateway to transcendental supreme knowledge',
      'Uncut Gemstones (Kundan): Indestructible jewels of wisdom and clarity'
    ],
    materials: ['Uncut semi-precious rubies and emeralds', 'French chalk (Muck powder) and tamarind paste for 3D gesso', 'Pure gold foil (Thagadu)', 'Seasoned teak wood plank'],
    svgData: 'tanjore'
  },

  mysore_karnataka: {
    id: 'mysore_karnataka',
    title: 'Mysore Traditional Lord Venkateswara (Balaji)',
    artForm: 'Mysore Traditional Painting',
    state: 'Karnataka',
    region: 'Mysuru & Srirangapatna',
    imageUrl: '/assets/states/karnataka.jpg',
    description: 'Opulent South Indian gold gesso relief painting of Lord Venkateswara (Tirupati Balaji) in black stone adorned with dazzling embossed gold ornaments, red and white tilak, flanked by Goddess Padmavathi on a pink lotus under an ornate golden gopuram arch.',
    aspectRatio: '3:4',
    colors: ['#F59E0B', '#1E3A8A', '#DC2626', '#FFF8E7', '#2D2D2D', '#D97706'],
    symbolism: [
      'Lord Venkateswara: Kaliyuga protector and granter of boon to sincere seekers',
      'Golden Temple Lamps (Deepams): Dispersal of spiritual ignorance',
      'Embossed Gesso Gold Relief: Radiance of divine presence'
    ],
    materials: ['Zinc oxide and arabic gum gesso paste for low relief embossing', 'Pure 24K gold foil leaves', 'Watercolors on cartouche paper pasted on seasoned wood'],
    svgData: 'mysore'
  },

  gond_madhyapradesh: {
    id: 'gond_madhyapradesh',
    title: 'Gond Sacred Mahua Tree, Birds and Deer',
    artForm: 'Gond Tribal Painting',
    state: 'Madhya Pradesh',
    region: 'Dindori, Patangarh & Mandla',
    imageUrl: '/assets/states/madhya_pradesh.jpg',
    description: 'Dynamic Gond tribal masterpiece depicting the sacred Mahua tree with colorful perched birds and two patterned deer (one azure blue, one golden yellow) adorned with signature rhythmic dashed line and dot textures.',
    aspectRatio: '1:1',
    colors: ['#2D2D2D', '#DC2626', '#0284C7', '#F59E0B', '#10B981', '#FFF8E7'],
    symbolism: [
      'Sacred Mahua Tree: Giver of shelter, medicine, food, and ecological sanctity',
      'Patterned Dots and Dashes: Every living cell and creature vibrates with divine energy (Jiva)',
      'Paired Deer: Gentle harmony of forest life'
    ],
    materials: ['Chuna (lime) white', 'Peeli mitti (yellow clay)', 'Kala koyla (charcoal black)', 'Geru (red ochre)', 'Neem tree gum binder'],
    svgData: 'gond'
  },

  gujarat_tribal: {
    id: 'gujarat_tribal',
    title: 'Pithora / Tribal Women on Sacred Tree Swing',
    artForm: 'Pithora & Gujarat Tribal Art',
    state: 'Gujarat',
    region: 'Chhota Udaipur & Panchmahal',
    imageUrl: '/assets/states/gujarat.jpg',
    description: 'Vibrant Gujarati tribal folk painting showing two village women in colorful patterned ghagra choli enjoying a swing hanging from a lush banyan tree filled with multi-hued fruits and pointillist foliage.',
    aspectRatio: '3:4',
    colors: ['#10B981', '#7C3AED', '#DC2626', '#F59E0B', '#2D2D2D', '#FFF8E7'],
    symbolism: [
      'Tree Swing: Joyous festival celebration (Jhoola) and seasonal harvest gratitude',
      'Pointillist Dots: Tribal technique invoking ancestor blessings and rain prosperity',
      'Verdant Tree Canopy: Everlasting maternal abundance'
    ],
    materials: ['Natural stone pigments and chalk', 'Handmade cotton paper base', 'Neem gum binder', 'Hand-cut bamboo stylus'],
    svgData: 'gujarat'
  },

  kalighat_bengal: {
    id: 'kalighat_bengal',
    title: 'Kalighat Mahishasuramardini Goddess Durga',
    artForm: 'Kalighat Patachitra',
    state: 'West Bengal',
    region: 'Kalighat, Kolkata & Midnapore',
    imageUrl: '/assets/states/west_bengal.jpg',
    description: 'Powerful traditional Kalighat painting of ten-armed Goddess Durga slaying the green buffalo demon Mahishasura with her spear trident atop her roaring lion mount against a bold vermilion red background.',
    aspectRatio: '3:4',
    colors: ['#DC2626', '#F59E0B', '#1E3A8A', '#10B981', '#2D2D2D', '#FFFFFF'],
    symbolism: [
      'Mahishasuramardini: Victory of cosmic virtue (Dharma) over ego and tyranny',
      'Ten Weapons: Divine faculties united to eliminate discord',
      'Half-Blue Half-Gold Face: Cosmic balance of fierce destruction and maternal grace'
    ],
    materials: ['Hand-ground stone pigments', 'Tamarind seed glue', 'Squirrel-hair shading brushes', 'Handmade rag paper'],
    svgData: 'kalighat'
  },

  mural_kerala: {
    id: 'mural_kerala',
    title: 'Kerala Temple Mural Lord Krishna with Lotus Eyes',
    artForm: 'Kerala Mural Painting',
    state: 'Kerala',
    region: 'Thrissur, Guruvayur & Padmanabhaswamy',
    imageUrl: '/assets/states/kerala.jpg',
    description: 'Traditional Kerala temple fresco of Lord Krishna in vibrant azure blue, elaborate golden circular crown with peacock feathers, large lotus-petal eyes, surrounded by blooming pink lotuses and rhythmic cloud scrolls.',
    aspectRatio: '3:4',
    colors: ['#0284C7', '#F59E0B', '#DC2626', '#EC4899', '#10B981', '#2D2D2D'],
    symbolism: [
      'Lotus-Shaped Eyes: Unconditional compassionate gaze (Kripa Kataksha)',
      'Panchavarna (Five Colors): Pure earth pigments honoring the five primal elements',
      'Sunburst Headpiece: Radiant divine aura illuminating temple sanctums'
    ],
    materials: ['Laterite stone red', 'Yellow ochre stone', 'Neelampara green leaves', 'Coconut water binder', 'Limestone plaster wall base'],
    svgData: 'kerala'
  },

  phulkari_punjab: {
    id: 'phulkari_punjab',
    title: 'Punjab Geometric Silk Phulkari Embroidery',
    artForm: 'Phulkari Textile Embroidery',
    state: 'Punjab',
    region: 'Patiala, Amritsar & Bathinda',
    imageUrl: '/assets/states/punjab.jpg',
    description: 'Masterwork Punjabi Phulkari featuring geometric floral medallions, eight-pointed stars, and chevron diamonds densely embroidered with untwisted silk floss (pat) threads in magenta, orange, and turquoise on mustard khaddar.',
    aspectRatio: '1:1',
    colors: ['#F59E0B', '#EC4899', '#0284C7', '#EA580C', '#10B981'],
    symbolism: [
      'Phulkari (Flower Work): Auspicious blessing woven by grandmothers for weddings',
      'Darning Stitch: Strength, continuity of domestic lineage and warmth',
      'Eight-Pointed Star (Champa): Abundance and seasonal vitality'
    ],
    materials: ['Untwisted silk floss thread (Pat)', 'Hand-spun and hand-woven cotton cloth (Khaddar)', 'Madder, turmeric, and indigo botanical fabric dyes'],
    svgData: 'phulkari'
  },

  cheriyal_telangana: {
    id: 'cheriyal_telangana',
    title: 'Cheriyal Village Narrative at the Stone Well',
    artForm: 'Cheriyal Scroll Painting',
    state: 'Telangana',
    region: 'Cheriyal Village, Siddipet & Warangal',
    imageUrl: '/assets/states/telangana.jpg',
    description: 'Traditional Telangana Cheriyal scroll narrative showing daily rural life: village women drawing water from a stone well, making white kolam rangoli, farmer with water pot shoulder yoke, and woman churning butter.',
    aspectRatio: '1:1',
    colors: ['#84CC16', '#DC2626', '#0284C7', '#F59E0B', '#2D2D2D', '#FFFFFF'],
    symbolism: [
      'Village Well: The community heart and life-giving water source',
      'White Kolam Rangoli: Daily threshold blessing welcoming Goddess Lakshmi',
      'Scroll Narrative: Preserving oral folklore and agrarian community heritage'
    ],
    materials: ['Handmade khadi cloth treated with tamarind seed paste and white clay', 'Natural stone colors ground on granite slabs', 'Tree gum binder', 'Goat hair brushes'],
    svgData: 'cheriyal'
  },

  kangra_himachal: {
    id: 'kangra_himachal',
    title: 'Kangra Pahari Miniature: Nayika and Peacock',
    artForm: 'Kangra Pahari Miniature Painting',
    state: 'Himachal Pradesh',
    region: 'Kangra Valley, Guler & Nurpur',
    imageUrl: '/assets/states/himachal_pradesh.jpg',
    description: 'Poetic Pahari miniature painting of a graceful maiden (Nayika) in swirling saffron and royal blue attire offering a pearl necklace to a peacock beside a flowering tree on rolling green Himalayan hills.',
    aspectRatio: '3:4',
    colors: ['#F59E0B', '#1E3A8A', '#10B981', '#EA580C', '#FFF8E7'],
    symbolism: [
      'Pearl Necklace: Pure romantic devotion and unspoken longing (Viraha)',
      'Flowering Almond Tree: Spring season (Vasant), love blossoming',
      'Curved lyrical contours: Supreme grace of Kangra female aesthetics'
    ],
    materials: ['Sialkot hand-made wasli paper', 'Fine single-hair squirrel tail brushes', 'Precious crushed minerals', 'Agate stone burnishing'],
    svgData: 'kangra'
  }
};
