import { StateArtData } from '../types';
import { TRADITIONAL_ARTWORKS } from './artworksData';

export const INDIAN_STATES_DATA: Record<string, StateArtData> = {
  bihar: {
    id: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    zone: 'East',
    primaryArtForm: 'Madhubani / Mithila Painting',
    otherCrafts: ['Sikki Grass Crafts', 'Tikuli Art', 'Bhojpur Stone Carving', 'Bhagalpur Tussar Silk'],
    history: 'Madhubani painting traces its roots to the ancient kingdom of Mithila, said to have originated when King Janaka commissioned artists to paint the grand wedding ceremony of his daughter Sita to Lord Rama.',
    culturalSignificance: 'Traditionally painted on freshly plastered mud walls and floors during auspicious lifecycle events like Kohbar (wedding chambers), festivals like Chhath Puja, and harvests. Women passed down intricate geometric knowledge across generations.',
    uniqueFacts: [
      'Traditionally divided into five distinct styles: Bharni, Katchni, Tantrik, Godna, and Kohbar.',
      'Natural pigments were prepared from aparajita flowers, turmeric, indigo, soot, and bilva leaves.',
      'Received prestigious Geographical Indication (GI) tag protecting authentic Mithila artisans.'
    ],
    traditionalMaterials: ['Handmade wasli paper soaked in cow-dung water', 'Bamboo stylus nibs', 'Natural vegetable and mineral dyes', 'Rice powder binder'],
    keyMotifs: ['Matsya (Fish - fertility & good luck)', 'Padma (Sacred Lotus - purity & cosmic creation)', 'Mayura (Peacock - beauty & divine love)', 'Surya & Chandra (Cosmic vitality)', 'Bans (Bamboo grove - lineage continuation)'],
    artwork: TRADITIONAL_ARTWORKS.madhubani_bihar,
    tutorial: {
      title: 'Creating Authentic Madhubani / Mithila Painting: Border, Matsya (Fish) & Kachni Hatching',
      estimatedTime: '2 - 3 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/h1uYQ49376M?si=xauqN-I8DG3RnhFD',
      youtubeId: 'h1uYQ49376M',
      materialsNeeded: ['A4 Cartridge paper or Handmade Wasli Paper', '0.5mm Black pigment fine liner pen / Nib & Ink', 'Vibrant watercolors / Acrylics (Turmeric Yellow, Crimson, Prussian Blue, Sap Green)', 'Round paintbrush size 2 and 4'],
      steps: [
        {
          stepNumber: 1,
          title: 'Establish the Double-Line Sacred Border (Simarekha)',
          description: 'As demonstrated in the master tutorial video, start by drawing a 1-inch outer border framing the paper with two strictly parallel lines 5mm apart. Traditional Mithila art is never left open or unframed.',
          proTip: 'Infill the space between the parallel lines with rhythmic diagonal cross-hatching (Katchni) or chevron triangular leaves.'
        },
        {
          stepNumber: 2,
          title: 'Draft the Central Auspicious Matsya (Fish) & Padma (Lotus)',
          description: 'Draw the flowing almond-shaped contour of the sacred Matsya fish in the center. Give it graceful dorsal and pectoral fins, a broad fan tail, and a prominent circular divine eye with an auspicious forehead tilak.',
          proTip: 'Keep pen strokes confident and continuous without lifting off the paper to maintain authentic folk fluidity.'
        },
        {
          stepNumber: 3,
          title: 'Divide Body into Geometric Compartments & Fine Hatching (Kachni)',
          description: 'Divide the fish body into 4 curved segment arches. Fill each section with ultra-fine parallel hatching, diagonal micro-stripes, and small fish-scale textures as shown in the video.',
          proTip: 'Varying line density produces rich optical contrast and shading without any blurred gradients.'
        },
        {
          stepNumber: 4,
          title: 'Fill Background with Nature Flourishes (Horror Vacui Principle)',
          description: 'Following Mithila custom, leave no empty void. Fill the surrounding background with four-petaled flowers, leafy creepers, lotus buds, and swimming micro-fishes.',
          proTip: 'Draw five-petaled folk flowers with delicate circular stamens in all negative spaces.'
        },
        {
          stepNumber: 5,
          title: 'Apply Flat Vibrant Saturated Colors (Bharni Style)',
          description: 'Smoothly color each segment using bright crimson red, turmeric yellow, sap green, and deep indigo blue with flat unblended gouache tones. Retrace outer lines once dry for razor-sharp finish.',
          proTip: 'Let colors dry thoroughly, then re-ink the outer contour with black pigment pen to make the sacred linework snap.'
        }
      ]
    }
  },

  andhra_pradesh: {
    id: 'andhra_pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    zone: 'South',
    primaryArtForm: 'Srikalahasti Kalamkari Painting',
    otherCrafts: ['Kondapalli Wooden Toys', 'Machilipatnam Block Kalamkari', 'Dharmavaram Silk', 'Etikoppaka Lacquer Toys'],
    history: 'Kalamkari translates to "pen craft" (Kalam = pen, Kari = craftsmanship). Under the patronage of the Vijayanagara Empire, temple scrolls depicting epic narratives from the Ramayana, Mahabharata, and Puranas flourished around the Swarnamukhi river in Srikalahasti.',
    culturalSignificance: 'Kalamkari scrolls served as visual teaching tools carried by wandering village bards (Katha-vachakas) who sang temple folklore to rural congregations. The entire process uses 17 organic wash and mordant stages.',
    uniqueFacts: [
      'The Swarnamukhi river water is rich in specific minerals that react with myrobalan to yield deep indelible black and madder red dyes.',
      'Artisans use buffalo milk washes to prevent the natural vegetable dyes from bleeding into adjacent cloth fibers.',
      'Srikalahasti is one of the only surviving centers where pure freehand pen drawing is practiced without wooden blocks.'
    ],
    traditionalMaterials: ['Bamboo reed pen (Kalam) with sheep wool reservoir', 'Unbleached pure cotton (Kora)', 'Fermented iron-jaggery liquor (Kasim)', 'Myrobalan fruit extract', 'Alum mordant'],
    keyMotifs: ['Hamsa (Celestial Swan of wisdom)', 'Kalash & Tree of Life (Abundance & prosperity)', 'Gopuram Temple Motifs', 'Karru Creeper Vine Patterns', 'Mayura & Floral Meanders'],
    artwork: TRADITIONAL_ARTWORKS.kalamkari_andhra,
    tutorial: {
      title: 'Srikalahasti Freehand Kalamkari: Bamboo Kalam Drawing, Kasim Black Inking & Natural Dyes',
      estimatedTime: '3 - 4 hours',
      difficulty: 'Intermediate',
      videoUrl: 'https://youtu.be/Ae1JQ7cAyCE?si=-AEgpc85WxjQzqUX',
      youtubeId: 'Ae1JQ7cAyCE',
      materialsNeeded: ['Cotton canvas or heavy cold-press watercolor paper', 'Bamboo reed Kalam (or 0.3mm archival sepia/black ink pen)', 'Natural madder red, fermented iron black, ochre yellow, indigo pigments', 'Fine detail liner brush and wool reservoir'],
      steps: [
        {
          stepNumber: 1,
          title: 'Cloth Priming & Milk-Myrobalan Wash (Preventing Bleed)',
          description: 'As demonstrated in the authentic Kalamkari atelier video, prepare the unbleached fabric or heavy paper with a light myrobalan and buffalo milk wash. This organic mordant creates a golden parchment hue and stops the natural dyes from bleeding into adjacent fibers.',
          proTip: 'Let the base dry naturally under mild sunlight for an antique temple-cloth patina.'
        },
        {
          stepNumber: 2,
          title: 'Freehand Charcoal Drafting & Bamboo Kalam Inking',
          description: 'Trace the flowing contours of the celestial Hamsa (Swan) and Tree of Life using tamarind twig charcoal, then ink over with the sharpened bamboo reed pen soaked in fermented iron-jaggery liquor (Kasim).',
          proTip: 'Squeeze the wool reservoir gently on the bamboo kalam to ensure an unbroken, expressive ink flow.'
        },
        {
          stepNumber: 3,
          title: 'Outlining Deity Temple Features & Feather Plumage',
          description: 'Inscribe the large almond-shaped lotus eyes, regal headdress (Mukuta), and sweeping ornamental feathers with dense Kasim black lines as shown in the masterclass.',
          proTip: 'Draw continuous curved meanders along the wings without lifting your hand.'
        },
        {
          stepNumber: 4,
          title: 'Applying Madder Red Dye & Alum Mordant',
          description: 'Paint the backdrop and floral ornaments with madder root red (Manjistha) treated with alum mordant. Watch the red pigment fix permanently into the cloth fibers.',
          proTip: 'Keep the swan breast pure ivory white to generate dramatic temple contrast.'
        },
        {
          stepNumber: 5,
          title: 'Karru Creeper Border & Indigo Accents',
          description: 'Enclose the composition with traditional Karru vine borders with four-petaled florets and add delicate washes of natural plant indigo and pomegranate rind yellow.',
          proTip: 'A gentle rinse in running water or light matte spray protects the natural dye sheen.'
        }
      ]
    }
  },

  maharashtra: {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    zone: 'West',
    primaryArtForm: 'Warli Folk Tribal Painting',
    otherCrafts: ['Paithani Silk Sarees', 'Kolhapuri Chappals', 'Sawantwadi Lacquerware', 'Bidriware of Aurangabad'],
    history: 'Warli art is one of the oldest living tribal art forms in India, with roots dating back to the Neolithic period (2500–3000 BCE). Created by the Warli tribe residing on the Sahyadri mountains of northern Maharashtra.',
    culturalSignificance: 'Warli paintings do not depict mythological deities; instead, they capture human harmony with mother nature (Mother Palghata), farming, hunting, rituals, and the iconic circular Tarpa dance celebrating cosmic time.',
    uniqueFacts: [
      'Uses only three elementary geometric shapes: Circle (Sun & Moon), Triangle (Mountains & Conical Trees), and Square (Sacred Land & Palghat chowk).',
      'The human figure is formed by two inverse triangles joined at the tip, symbolizing balance of physical and spiritual energies.',
      'Traditionally painted exclusively by tribal women (Suhasinis) to consecrate wedding homes.'
    ],
    traditionalMaterials: ['Rice flour mixed with water and babool tree gum', 'Red ochre (Geru) and cow-dung mud wall base', 'Crushed bamboo stick chewed into a flexible brush'],
    keyMotifs: ['Tarpa Circle Dance (Cosmic time & unity)', 'Kalpavriksha (Sacred Tree of Life)', 'Palghat Chowk (Goddess of Fertility square)', 'Sun and Crescent Moon (Eternal celestial witnesses)', 'Spotted Forest Deer & Sacred Cattle'],
    artwork: TRADITIONAL_ARTWORKS.warli_maharashtra,
    tutorial: {
      title: 'Warli Tribal Art: Sacred Mud Base, Rice Paste Geometry & The Cosmic Tarpa Dance',
      estimatedTime: '1.5 - 2 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/xetipGtr_aw?si=MPssN_9Oaf8UoO31',
      youtubeId: 'xetipGtr_aw',
      materialsNeeded: ['Terracotta / Kraft brown paper or canvas board', 'White acrylic / poster color or authentic Rice flour paste', '0 and 1 round detail brushes / bamboo toothpick', 'White gel pen for fine accents'],
      steps: [
        {
          stepNumber: 1,
          title: 'Prepare the Mud-Ochre Earthy Ground (Geru Base)',
          description: 'As demonstrated in the master Warli painting video, prime your paper or canvas board with a warm terracotta red or burnt sienna base to replicate the cow-dung and red ochre plaster of Sahyadri tribal walls.',
          proTip: 'Use gentle stippling with a soft sponge to create realistic natural mud-wall texture.'
        },
        {
          stepNumber: 2,
          title: 'Construct the Sacred Tree of Life (Kalpavriksha)',
          description: 'Draw a central vertical trunk in pure white. Sprout paired diagonal branches extending outward symmetrically. Crown each branch with clusters of triangular paired leaves and dot florets.',
          proTip: 'Keep branches balanced on both sides, symbolizing the cosmic equilibrium of nature.'
        },
        {
          stepNumber: 3,
          title: 'Construct Human Figures using Opposing Triangles',
          description: 'Draw a simple solid white circle for the head with a tuft of hair or turban. Beneath it, form the human body by intersecting an inverted triangle (chest) with an upright triangle (hips) meeting at a single pinpoint waist.',
          proTip: 'Add curved single-stroke lines for arms and bent legs to depict lively dancing and harvesting motions.'
        },
        {
          stepNumber: 4,
          title: 'The Concentric Tarpa Spiral Dance Circle',
          description: 'Draw the Tarpa musician playing the long wind-pipe horn in the center. Surround him with chains of villagers holding hands in a magnificent expanding spiral, capturing the eternal cycle of life and harvest.',
          proTip: 'Vary leg angles across the spiral to convey the dynamic bouncing rhythm of the tribal dance.'
        },
        {
          stepNumber: 5,
          title: 'Celestial Sun, Crescent Moon & Sacred Triangular Border',
          description: 'Frame the painting with alternating white triangular chevron bands (the sacred wedding border). Add the radiant sun and crescent moon witnessing the human celebration from above.',
          proTip: 'A crisp, opaque white against the rich terracotta red ground makes the artwork truly timeless.'
        }
      ]
    }
  },

  rajasthan: {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    zone: 'West',
    primaryArtForm: 'Pichwai & Miniature Royal Art',
    otherCrafts: ['Blue Pottery of Jaipur', 'Kathputli Puppetry', 'Bandhani & Leheriya', 'Thewa Gold Jewelry', 'Mojari Footwear'],
    history: 'Pichwai originated over 400 years ago in Nathdwara near Udaipur as devotional cloth backdrops hung behind the idol of Shrinathji (Lord Krishna). Rajasthani miniature painting schools (Mewar, Marwar, Kishangarh, Bundi) set the pinnacle of Indian courtly artistry.',
    culturalSignificance: 'Pichwais reflect the changing seasons, festivals (Janmashtami, Sharad Purnima, Annakoot), and divine moods (Bhavas). Miniature paintings celebrated poetry (Rasikapriya, Gita Govinda) and royal processions with boundless splendor.',
    uniqueFacts: [
      'Miniature masters use paintbrushes crafted from a single hair plucked from the tail of a living squirrel.',
      'Pure gold and silver leaf (Zari / Vark) are ground with gum and burnished with agate stone to produce gleaming 3D jewelry.',
      'A master-grade 6x4 foot Pichwai takes an entire family of master painters up to 6 months to complete.'
    ],
    traditionalMaterials: ['Pure gold & silver leaf', 'Natural lapis lazuli stone powder', 'Kajal black', 'Malachite green', 'Starched khadi cloth or wasli paper'],
    keyMotifs: ['Kadamba Tree & Sacred Cows (Kamadhenu)', 'Kamal Talav (Blooming Pink Lotus Ponds)', 'Mayura (Dancing Royal Peacocks)', 'Shri Krishna Shrinathji Tilak & Crown', 'Kaman-daar Almond Eyes & Floral Borders'],
    artwork: TRADITIONAL_ARTWORKS.pichwai_rajasthan,
    tutorial: {
      title: 'Nathdwara Pichwai Painting: Shreenathji Lotus Pond, Sacred Cows & 24K Gold Embellishment',
      estimatedTime: '3 - 5 hours',
      difficulty: 'Intermediate',
      videoUrl: 'https://youtu.be/4VUvWE7qLA8?si=dqpCeBf7nZtGjCv9',
      youtubeId: '4VUvWE7qLA8',
      materialsNeeded: ['Stretched canvas board or heavy watercolor paper', 'Acrylic / Gouache paints (Midnight Indigo, Sap Green, Lotus Pink, Crimson, Gold)', 'Metallic Gold paint or 24K Gold Leaf Foil with gilding size', 'Fine liner brushes size 0 and 000'],
      steps: [
        {
          stepNumber: 1,
          title: 'Prime the Deep Midnight Indigo Background',
          description: 'As demonstrated in the master Pichwai video, coat your canvas with two velvety layers of rich Prussian blue or midnight indigo to simulate the sacred nocturnal Yamuna river sky.',
          proTip: 'A smooth, streak-free dark ground allows vibrant lotuses and golden jewelry to radiate.'
        },
        {
          stepNumber: 2,
          title: 'Sketch the Kadamba Tree & Sacred Kamadhenu Cows',
          description: 'Draw the gnarled branches of the sacred Kadamba tree and the devoted Kamadhenu cows with decorated horns, floral garlands, and hand-printed auspicious saffron handprints (Thapa).',
          proTip: 'In Pichwai, holy cows feature gentle almond eyes and serene postures facing the divine presence.'
        },
        {
          stepNumber: 3,
          title: 'Multi-Tone Leaf Foliage Stippling',
          description: 'Stipple dense rounded leaf clusters using deep viridian green. Highlight individual leaf contours and veins with pale olive and lime green using your ultra-fine 000 brush.',
          proTip: 'Layering three tones of green produces the luxuriant, lush depth characteristic of Mewar groves.'
        },
        {
          stepNumber: 4,
          title: 'Blooming Lotus Pond (Kamal Kund) Shading',
          description: 'At the bottom of the canvas, paint open pink lotuses, unopened buds, and expansive emerald lily pads. Apply a subtle white rim to petal tips to convey transcendental purity.',
          proTip: 'Soft wet-in-wet blending from deep magenta at the base to pale blush pink at the tip gives lotuses life.'
        },
        {
          stepNumber: 5,
          title: 'Apply 24K Gold Leaf / Metallic Embellishment',
          description: 'Apply sizing adhesive and press gold leaf foil onto the crowns, cow bell necklaces, and royal floral borders. Buff gently with a dry squirrel brush for an opulent temple glow.',
          proTip: 'Burnishing the metallic gold with the smooth back of a spoon makes it shine like real palace jewelry.'
        }
      ]
    }
  },

  odisha: {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    zone: 'East',
    primaryArtForm: 'Raghurajpur Pattachitra',
    otherCrafts: ['Pipili Applique Work', 'Dhokra Brass Casting', 'Silver Filigree (Tarakasi)', 'Sambalpuri Ikat', 'Stone Sculpting of Konark'],
    history: 'Pattachitra (Patta = cloth/canvas, Chitra = picture) is rooted in the 12th-century worship of Lord Jagannath at Puri. When the deities undergo their annual ritual bath (Anasara) and remain sequestered, massive Pattachitras are installed as living icons in the sanctum sanctorum.',
    culturalSignificance: 'Raghurajpur near Puri is a designated Heritage Crafts Village where every single household preserves the Chitrakar lineage, grinding conch shells and mineral stones into indelible pigments.',
    uniqueFacts: [
      'The canvas is prepared by pasting two layers of cotton cloth together using tamarind seed paste (Niryas kalpa) and crushed limestone.',
      'Lines are drawn directly with the brush without any preliminary pencil sketching.',
      'Finished paintings are passed over a charcoal fire and coated with pure tree lacquer, making them water-resistant for centuries.'
    ],
    traditionalMaterials: ['Pattachitra cloth canvas (Patta)', 'Conch shell (Shankha) white', 'Hingula (cinnabar) red', 'Haritala yellow', 'Tree lacquer (Juna)'],
    keyMotifs: ['Lord Jagannath Eyes & Trinetra', 'Radha Krishna Rasalila Roundels', 'Badi Scrolling Floral Borders', 'Shankha (Conch) & Chakra Motifs', 'Pancha Mukhi Celestial Avatars'],
    artwork: TRADITIONAL_ARTWORKS.pattachitra_odisha,
    tutorial: {
      title: 'Raghurajpur Pattachitra: Tamarind Seed Canvas (Pata), Conch Shell White & Chiseled Contours',
      estimatedTime: '3 - 4 hours',
      difficulty: 'Advanced',
      videoUrl: 'https://youtu.be/NXSmSmbVMQM?si=25PGIFQ6N_zL8jNx',
      youtubeId: 'NXSmSmbVMQM',
      materialsNeeded: ['Heavy cotton canvas / gesso board', 'Bright Gouache or Acrylics (Crimson, Lemon Yellow, Royal Blue, Viridian, Conch White, Lampblack)', 'Round brushes size 00, 1, 3', 'Gloss varnish to simulate traditional tree resin lacquer'],
      steps: [
        {
          stepNumber: 1,
          title: 'Prepare Pata Canvas & Intricate Border (Badi)',
          description: 'As demonstrated in the Raghurajpur master video, traditional Pattachitra begins with the multi-tiered ornamental border (Badi). Inscribe scrolling floral creepers, triangular tooth motifs, and diamond bands framing the sacred workspace.',
          proTip: 'The border establishes the sacred threshold; Chitrakars always complete the frame before touching inner deities.'
        },
        {
          stepNumber: 2,
          title: 'Direct Brush Sketching of Sacred Silhouettes (Tipana)',
          description: 'Draw the figures of Lord Jagannath, Rama, or Krishna with light cinnabar red brushstrokes without using a pencil or eraser. Give figures dramatic aquiline noses, wide elongated theatrical eyes extending to the ears, and decorative chin curls.',
          proTip: 'Trust your muscle memory and fluid wrist movement for unbroken rhythmic contours.'
        },
        {
          stepNumber: 3,
          title: 'Apply Pure Flat Primary Pigments (Hingula & Haritala)',
          description: 'Fill each region with pure, unblended mineral hues: divine sapphire blue for Rama/Krishna, golden orpiment yellow for Sita, and conch shell white for garments.',
          proTip: 'Keep pigment layers solid and flat; traditional Pattachitra relies on graphic purity without Western shadows.'
        },
        {
          stepNumber: 4,
          title: 'Chiseled Black Lampblack Contouring (Ranga)',
          description: 'Using your finest 00 brush and dense lampblack ink, outline every figure contour, crown jewel, fluttering sash, and mythological weapon with razor-sharp precision.',
          proTip: 'Exhale slowly while drawing continuous long lines to eliminate hand tremors.'
        },
        {
          stepNumber: 5,
          title: 'White Pearl Stippling & Protective Gloss Lacquer',
          description: 'Apply tiny white dots along borders, necklaces, and garment hems mimicking pearls. Once dry, coat with a protective clear gloss finish replicating the ancient wood resin smoke-lacquer technique.',
          proTip: 'The white dot highlights bring divine radiance and life to the painted murti.'
        }
      ]
    }
  },

  sikkim: {
    id: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    zone: 'North-East',
    primaryArtForm: 'Tibetan-Indian Thangka Scroll Art',
    otherCrafts: ['Choktse Carved Wooden Tables', 'Lepcha Weaving', 'Handmade Rice Paper', 'Brocade Silk Embroidery'],
    history: 'Thangkas arrived in Sikkim with Guru Padmasambhava and Tibetan Buddhist monastic traditions in the 8th century. Preserved by the lamas of Rumtek, Enchey, and Pemayangtse monasteries.',
    culturalSignificance: 'A Thangka is not merely decorative art, but a consecrated visual meditation blueprint (Yantra). Masters must undergo strict meditative cleansing and follow sacred geometric grids (Iconometry).',
    uniqueFacts: [
      'The proportions of the Buddha’s face, torso, and lotus throne follow exact mathematical ratios defined in the Kālachakra Tantra.',
      'Gold details are burnished with polished cat-eye or agate stones to create matte and shiny alternating textures.',
      'Traditionally framed in three layers of pure silk brocade symbolizing the three realms of existence.'
    ],
    traditionalMaterials: ['Handspun cotton sized with yak-hide glue & chalk', 'Crushed lapis lazuli, malachite, cinnabar minerals', '24K pure gold leaf paint', 'Fine horsehair brushes'],
    keyMotifs: ['Ashtamangala (Eight Auspicious Buddhist Symbols)', 'Double Dorje & Dharma Wheel', 'Sacred Lotus Throne & Radiant Auras', 'Cloud Swirls & Himalayan Peak Silhouettes', 'Bhumisparsha Earth-Touching Mudra'],
    artwork: TRADITIONAL_ARTWORKS.thangka_sikkim,
    tutorial: {
      title: 'Sacred Tibetan Thangka Painting: Iconometric Grids, Lapis Lazuli & Gold Cloud Meanders',
      estimatedTime: '4 - 6 hours',
      difficulty: 'Advanced',
      videoUrl: 'https://youtu.be/aIl6iiLzQ8s?si=G7x7xmFZEVFXuQ9T',
      youtubeId: 'aIl6iiLzQ8s',
      materialsNeeded: ['Stretched watercolor canvas paper or silk-mounted board', 'Fine gouache/acrylic paints (Lapis Lazuli Blue, Cinnabar Red, Malachite Green, Lotus Pink)', 'Metallic 24K Gold paint / Gold ink liner', 'Grid ruler and 0.3mm mechanical pencil'],
      steps: [
        {
          stepNumber: 1,
          title: 'Establish the Sacred Mathematical Grid (Thigse)',
          description: 'As demonstrated in the monastic Thangka master video, construct the vertical central plumb line (Brahmasutra) and horizontal coordinate grid according to Buddhist iconometric texts. Every facial feature and torso proportion follows exact sacred ratios.',
          proTip: 'Precision in initial grid layout is essential for capturing the sublime serene expression of the Buddha.'
        },
        {
          stepNumber: 2,
          title: 'Draft Lotus Throne & Radiant Body Auras (Prabhamandala)',
          description: 'Draw the multi-layered lotus petals at the base in alternating pink and azure blue. Draw the circular head halo and expansive oval body aura with radiating golden rays.',
          proTip: 'Keep lotus petal curves harmonious and symmetrical on both left and right flanks.'
        },
        {
          stepNumber: 3,
          title: 'Layer Pure Mineral Pigments on Landscape & Robes',
          description: 'Apply soft gradated washes of sky blue, misty Himalayan mountain ranges, and rich cinnabar red and saffron orange on the monastic robes.',
          proTip: 'Use delicate wet-on-wet blending with clean water to produce ethereal swirling clouds.'
        },
        {
          stepNumber: 4,
          title: 'Facial Features & Earth-Touching Mudra (Bhumisparsha)',
          description: 'Paint the blue-black Ushnisha hair curls, downwards meditative half-closed eyes, and the right hand descending gracefully in the Earth-Witnessing gesture.',
          proTip: 'Painting the eyes (Chen-Re) is traditionally performed with reverent focus in quiet contemplative atmosphere.'
        },
        {
          stepNumber: 5,
          title: 'Pure Gold Line Detailing (Ser-Zang) & Cloud Flourishes',
          description: 'Using fine metallic gold, line the robe borders with sacred swastika and lotus meanders, and draw fine hair-thin rays emanating outward from the deity halo.',
          proTip: 'Burnishing dry gold highlights gives the sacred scroll an authentic monastery temple radiance.'
        }
      ]
    }
  },

  karnataka: {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    zone: 'South',
    primaryArtForm: 'Mysore Traditional Gold Gesso Painting',
    otherCrafts: ['Channapatna Wooden Toys', 'Mysore Silk Weaving', 'Bidriware of Bidar', 'Sandalwood Carvings', 'Kinhal Toys'],
    history: 'Flourished under the Wodeyar Dynasty in the cultural capital of Mysuru, particularly during the reign of Raja Wodeyar and Mummadi Krishnaraja Wodeyar in the 17th–19th centuries.',
    culturalSignificance: 'Mysore paintings are renowned for their delicate lyricism, subtle muted color palettes, and low-relief gesso work that is less heavy than Tanjore, creating a refined classical elegance.',
    uniqueFacts: [
      'Gesso paste (Gesso relief) is prepared using zinc oxide (white lead) and pure gum arabic applied in subtle 1mm relief.',
      'Pure 24-karat gold leaves are pressed on the gesso and burnished so that only jewelry and thrones catch the light.',
      'The faces are characterized by soft, rounded oval beauty, serene expressions, and realistic skin shading.'
    ],
    traditionalMaterials: ['Zinc oxide and makku paste', '24K pure gold foil', 'Cartouche paper mounted on wood', 'Camel hair brushes'],
    keyMotifs: ['Goddess Sharadamba & Veena', 'Gesso Embossed Mukuta Crowns', 'Prabhavali Temple Sanctum Archways', 'Elephant & Gandhabherunda (Two-headed bird)', 'Muted Floral Arabesques with 24K Burnished Gold'],
    artwork: TRADITIONAL_ARTWORKS.mysore_karnataka,
    tutorial: {
      title: 'Creating a Mysore Style Gold-Embossed Goddess Sharada',
      estimatedTime: '3 - 5 hours',
      difficulty: 'Intermediate',
      materialsNeeded: ['Wood panel or heavy watercolor board', '3D Outliner paste or ceramic relief paste for gesso', 'Gold leaf foil sheets or metallic gold paint', 'Acrylic paints (Cream, Deep Red, Emerald, Ochre)'],
      steps: [
        {
          stepNumber: 1,
          title: 'Pencil Sketch on Mounted Board',
          description: 'Draw the serene seated figure of Goddess Sharadamba playing the Veena, with celestial Gandharva attendants in the background.',
          proTip: 'Keep proportions regal and peaceful with gentle curvature in limbs.'
        },
        {
          stepNumber: 2,
          title: 'Apply 3D Gesso Relief on Jewelry & Arch',
          description: 'Using your relief outliner, pipe delicate raised beads and lines onto the crown (Mukuta), necklaces, bracelets, and the Veena bridge.',
          proTip: 'Let the relief dry completely for 2 hours until rock hard.'
        },
        {
          stepNumber: 3,
          title: 'Apply Gold Leaf on Relief Work',
          description: 'Apply gilding size glue to the raised relief, place the 24K gold leaf sheet gently, and buff away excess with a soft dry brush.',
          proTip: 'The gold clings only to the raised jewels, creating a shimmering 3D royal effect.'
        },
        {
          stepNumber: 4,
          title: 'Paint Soft Classical Tones',
          description: 'Paint the body in soft sandalwood cream, the saree in pearl white with gold borders, and the background in deep Prussian slate.',
          proTip: 'Soft blending around cheekbones and veena gives Mysore painting its poetic softness.'
        },
        {
          stepNumber: 5,
          title: 'Border Framing and Sealing',
          description: 'Create an embossed gold leaf border around the wooden frame and protect the work with a clear protective spray.',
          proTip: 'Display in a glass box frame to let ambient light bounce off the gold relief.'
        }
      ]
    }
  },

  tamil_nadu: {
    id: 'tamil_nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    zone: 'South',
    primaryArtForm: 'Thanjavur (Tanjore) 24K Gold & Gemstone Painting',
    otherCrafts: ['Kanchipuram Silk Sarees', 'Swamimalai Bronze Idols', 'Nachiarcoil Brass Lamps', 'Pattamadai Mats', 'Chettinad Kottan Baskets'],
    history: 'Emerged in the 16th century in the Chola heartland of Thanjavur under the patronage of Nayaka and Maratha rulers (notably King Serfoji II).',
    culturalSignificance: 'Tanjore paintings are sacred icons designed to transform living spaces into sanctified temple inner shrines (Garbhagriha). The high-relief gold and glittering gemstones catch oil-lamp light.',
    uniqueFacts: [
      'Gesso is made from powdered unboiled limestone (Chunnam) or French chalk combined with tamarind seed gum.',
      'Encrusted with genuine Jaipur uncut semi-precious gems (Kundan) and covered with 22K/24K gold foils (Thagadu).',
      'The central deity is portrayed with a charming plump face, almond eyes, and nestled beneath a grand carved temple arch (Prabhavali).'
    ],
    traditionalMaterials: ['Muck powder (French chalk)', 'Arabic / Tamarind gum', 'Jaipur glass gemstones and semi-precious rubies/emeralds', '24K gold foil sheets', 'Teakwood base board'],
    keyMotifs: ['Kundan Gemstone Encrusted Prabhavali Arches', 'Baby Krishna (Butter Thief - Navaneetha Krishna)', 'Yali & Temple Pillar Sculptures', 'Swarna Thagadu (24K Gold Foil Filigree Relief)', 'Sacred Cow & Kalpavriksha Groves'],
    artwork: TRADITIONAL_ARTWORKS.tanjore_tamilnadu,
    tutorial: {
      title: 'Thanjavur (Tanjore) Painting: Jackfruit Board, Relief Gesso & Pure 22K Gold Foil Gilding',
      estimatedTime: '4 - 6 hours',
      difficulty: 'Advanced',
      videoUrl: 'https://youtu.be/a5nRWog7OxA?si=bMY5o8xF532YQn17',
      youtubeId: 'a5nRWog7OxA',
      materialsNeeded: ['MDF / Teakwood base board mounted with cotton cloth', 'Muck paste (French chalk powder + Arabic gum)', 'Jaipur uncut red and emerald craft gemstones (Kundan)', '22K/24K Gold foil sheets (Thagadu) & gilding size', 'Poster / Acrylic paints (Crimson, Cobalt, Sandalwood ivory)'],
      steps: [
        {
          stepNumber: 1,
          title: 'Mounting Board & Sacred Arch Layout (Prabhavali)',
          description: 'As demonstrated in the Tanjore masterclass video, stretch cotton cloth over the wooden board with paste. Draw the monumental multi-tiered temple archway (Prabhavali) and the divine posture of Navaneetha Krishna.',
          proTip: 'A symmetrical temple arch creates the sanctified feeling of a temple sanctum (Garbhagriha).'
        },
        {
          stepNumber: 2,
          title: 'Setting Jaipur Semi-Precious Gemstones',
          description: 'Press sparkling red rubies and emerald gems firmly into the pillar capitals, crown, and necklace contours using water-resistant adhesive.',
          proTip: 'Fix stones directly to the cloth base before piping the relief gesso around them.'
        },
        {
          stepNumber: 3,
          title: 'Sculpting 3D Gesso Relief (Muck Work)',
          description: 'Using an icing-style cone, pipe creamy French chalk muck paste around all gemstones, pillar borders, and ornamental garlands to create dramatic 3mm to 5mm raised relief filigree.',
          proTip: 'Smooth wet relief edges with a moist camel-hair brush before it cures rock-hard.'
        },
        {
          stepNumber: 4,
          title: 'Applying Pure Gold Foil (Thagadu Gilding)',
          description: 'Apply adhesive over the dried relief. Lay the 22K/24K gold foil sheets carefully over the raised gesso. Press firmly into every groove with a soft stylus, then trim gold away from gemstones.',
          proTip: 'The contrast of glittering gemstones nestled in gleaming 22K gold creates the legendary Tanjore sparkle.'
        },
        {
          stepNumber: 5,
          title: 'Classical Face Tempera Painting (Chhavi)',
          description: 'Paint the divine child-like face in warm sandalwood cream or divine dark blue, with full cheeks, lotus eyes, and serene lips. Coat the background in deep vermilion red.',
          proTip: 'Tanjore paintings are traditionally illuminated with oil lamps to make the gold relief shimmer.'
        }
      ]
    }
  },

  himachal_pradesh: {
    id: 'himachal_pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    zone: 'North',
    primaryArtForm: 'Kangra Pahari Miniature Painting',
    otherCrafts: ['Chamba Rumal Embroidery', 'Kullu Shawls', 'Kinnauri Weaving', 'Kangra Wood Carvings', 'Metal Mohras'],
    history: 'Flourished in the 18th century under Maharaja Sansar Chand of Kangra in the picturesque Kangra valley, after Mughal court painters migrated to the peaceful Shivalik foothills.',
    culturalSignificance: 'Kangra miniatures are celebrated for their romantic lyrical sensitivity, delicate depiction of women (Nayikas), lush green Himalayan landscapes, and devotion to Radha-Krishna.',
    uniqueFacts: [
      'Artisans used natural colors derived from crushed rocks, lapis lazuli, wild flowers, and Himalayan tree saps.',
      'The fine lines were painted using the down-hair of baby birds or single squirrel tail bristles.',
      'Vasanta (Spring) and rainy monsoon seasons are depicted with unmatched botanical and avian precision.'
    ],
    traditionalMaterials: ['Handmade Sialkot wasli paper', 'Fine squirrel tail brushes', 'Natural mineral & botanical pigments', 'Agate stone burnisher'],
    keyMotifs: ['Nayika in Love & Separation (Ashtanayika)', 'Almond Blossom Orchards & Himalayan Pines', 'Sapphire Peacocks Drinking from Lotus Springs', 'Translucent Fine Pearl Odhanis (Veils)', 'Rolling Shivalik Green Foothills'],
    artwork: TRADITIONAL_ARTWORKS.kangra_himachal,
    tutorial: {
      title: 'Kangra Pahari Miniature: Sialkot Paper, Single-Hair Squirrel Brush & Lyrical Shading',
      estimatedTime: '3 - 4 hours',
      difficulty: 'Intermediate',
      videoUrl: 'https://youtu.be/j5lIeXIjuSE?si=NVE8T3xUArLkhOy-',
      youtubeId: 'j5lIeXIjuSE',
      materialsNeeded: ['Smooth cold-press watercolor paper / Wasli board', 'Fine gouache/watercolors (Sap Green, Mint, Saffron Orange, Ultramarine Blue, Pearl White)', '000 detail brush / squirrel-bristle liner', 'Metallic gold ink pen'],
      steps: [
        {
          stepNumber: 1,
          title: 'Underpainting the Rolling Shivalik Foothills',
          description: 'As demonstrated in the Kangra master video, lay down translucent gradient washes of Himalayan meadow greens, from pale mist at the crest to deep emerald in the foreground.',
          proTip: 'Multiple sheer glazes create the soft, poetic atmospheric depth of the Kangra valley.'
        },
        {
          stepNumber: 2,
          title: 'Fine Red Ochre Sketching of the Graceful Nayika',
          description: 'Trace the maiden’s delicate profile with curved eyebrow arches, expressive almond eyes, and swirling translucent veil (Odhani) using burnt sienna red ink.',
          proTip: 'Keep contours curving gently like mountain rivulets; avoid rigid straight strokes.'
        },
        {
          stepNumber: 3,
          title: 'Stippling Almond Blossom Foliage (Pardaz)',
          description: 'Paint slender dark tree trunks branching into delicate clusters of pale pink and white almond blossoms using micro-stippling strokes.',
          proTip: 'Use opaque white gouache over dry greens so individual blossom clusters float softly.'
        },
        {
          stepNumber: 4,
          title: 'Royal Sapphire Peacock & Pastoral Fauna',
          description: 'Paint the perched peacock beside the Nayika in vibrant ultramarine and iridescent turquoise, tilting its head upwards to receive her blessing.',
          proTip: 'Paint fine golden barbs along the tail feathers for miniature courtly refinement.'
        },
        {
          stepNumber: 5,
          title: 'Microscopic Pearl Stippling & Translucent Veil Glaze',
          description: 'With your 000 brush, add microscopic pearl necklaces and delicate golden hem borders over the translucent saffron odhani veil.',
          proTip: 'A light burnish on gold details with a smooth agate stone produces a regal museum sheen.'
        }
      ]
    }
  },

  madhya_pradesh: {
    id: 'madhya_pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    zone: 'Central',
    primaryArtForm: 'Gond Dotted Tribal Painting',
    otherCrafts: ['Bagh Print Textiles', 'Chanderi & Maheshwari Sarees', 'Bastar Dhokra Art', 'Tikamgarh Bell Metal', 'Bhil Pithora Art'],
    history: 'Originated with the Gond tribe, one of the largest indigenous tribal communities in India residing in the forests of central India. Pioneered to global acclaim by legendary master Jangarh Singh Shyam.',
    culturalSignificance: 'Gonds believe that viewing good art brings good luck (chitravans). Every natural element—trees, birds, tigers, rivers—is inhabited by a sacred spirit that is brought to life through intricate repetitive line and dot textures.',
    uniqueFacts: [
      'Each Gond artist develops their own signature texture pattern (dots, dashes, fish scales, drops, or diagonal lines).',
      'The Mahua tree is honored as the giver of life, shade, sweet flowers, and spirit communication.',
      'Traditional pigments were harvested from yellow clay (Peeli mitti), black charcoal, plant sap, and red ironstone.'
    ],
    traditionalMaterials: ['Handmade paper or raw canvas', 'Acrylic / Natural earth pigments', 'Fine-tipped round brushes', 'Bamboo styluses'],
    keyMotifs: ['Mahua Tree of Life & Ancestral Spirits', 'Rhythmic Dotted Fauna (Tigers, Stags, Cranes)', 'Water Serpent (Bhavar) & Cosmic Streams', 'Signature Tribal Dot & Line Vibration Weaves', 'Stylized Folk Birds & Wing Textures'],
    artwork: TRADITIONAL_ARTWORKS.gond_madhyapradesh,
    tutorial: {
      title: 'Gond Tribal Art: Sacred Forest Animals, Tree of Life & Intricate Micro-Pattern Textures',
      estimatedTime: '2 - 3 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/trOblPZZrT8?si=h5Zvb4q_evwdr50a',
      youtubeId: 'trOblPZZrT8',
      materialsNeeded: ['Heavy drawing paper / canvas board', 'Acrylic or gouache paints (Deep Black, Ochre Yellow, Brick Red, Leaf Green, White)', 'Fine round brushes size 0, 1, 2', 'Bamboo toothpick or fine dotting stylus'],
      steps: [
        {
          stepNumber: 1,
          title: 'Draw the Fluid Organic Silhouette of Fauna & Tree',
          description: 'As demonstrated in the master Gond video, sketch the sweeping, rounded contours of sacred deer, peacocks, or tigers beneath the branches of the holy Mahua Tree of Life.',
          proTip: 'Gond forms celebrate soft, flowing organic curves without harsh geometric corners.'
        },
        {
          stepNumber: 2,
          title: 'Fill with Flat Bold Primary Color Blocks',
          description: 'Paint the body of each creature in solid, vibrant unshaded color blocks (one in charcoal black, another in rich brick red or turmeric ochre).',
          proTip: 'Allow the base coat to dry completely before applying the signature tribal patterns.'
        },
        {
          stepNumber: 3,
          title: 'Apply Rhythmic Gond Dot Patterns (Signature Danedar Textures)',
          description: 'Dip your fine brush or stylus into white or contrasting paint. Inscribe rhythmic, evenly spaced rows of dots following the muscular contours of the creature’s body.',
          proTip: 'Consistent spacing between dots generates mesmerizing optical vibration and energy.'
        },
        {
          stepNumber: 4,
          title: 'Infill Tree Leaves with Directional Hatching (Katori Patterns)',
          description: 'Fill each leaf of the sacred tree with fine parallel hatch lines, delicate fish-scale scallops, or raindrop dashes.',
          proTip: 'Varying the pattern angle across adjacent leaves creates the illusion of wind rustling the forest.'
        },
        {
          stepNumber: 5,
          title: 'Eye Dotting & Tribal Framing Border',
          description: 'Add prominent white and black concentric eyes to bring the animal spirit to life. Frame the artwork with a simple tribal dotted perimeter border.',
          proTip: 'The repetitive rhythm transforms simple outlines into a living spiritual landscape.'
        }
      ]
    }
  },

  gujarat: {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    zone: 'West',
    primaryArtForm: 'Rogan Art & Pithora Wall Painting',
    otherCrafts: ['Patan Patola Double Ikat', 'Kutch Lippan Mud & Mirror Art', 'Bandhani Tie & Dye', 'Sankheda Lacquered Furniture', 'Tangaliya Shawls'],
    history: 'Rogan art is a rare 400-year-old Persian-origin craft preserved exclusively by the Khatri family in Nirona village, Kutch. Pithora paintings are sacred ritual murals painted by Rathwa and Bhil tribes.',
    culturalSignificance: 'Rogan involves boiling castor seed oil for days into a sticky paste mixed with mineral pigments, drawn with a 6-inch metal stylus without touching the fabric directly. Lippan art cools desert mud huts with sparkling mirrors.',
    uniqueFacts: [
      'Rogan paint is folded in half across the fabric to create a perfect mirror image of the complex mandala pattern.',
      'Only a handful of master artisans in the world possess the secret of brewing the castor oil Rogan paste.',
      'Lippan art uses clay mixed with camel dung and small geometric mirrors to reflect desert lantern light.'
    ],
    traditionalMaterials: ['Castor oil paste', 'Natural stone pigments', 'Iron rod stylus', 'Treated castor silk cloth', 'Camel dung & clay for Lippan'],
    keyMotifs: ['Aabhla (Sparkling Diamond & Round Mirrors)', 'Lippan Clay Geometric Relief Coils', 'Tree of Life & Peacock Roost', 'Pithora Sacred Horses & Village Shamans', 'Intricate Rogan Symmetrical Mandalas'],
    artwork: TRADITIONAL_ARTWORKS.gujarat_tribal,
    tutorial: {
      title: 'Rathwa Tribal Pithora Painting: Sacred Horses, Lipan Wall Prep & Folk Symbolism',
      estimatedTime: '2 - 3 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/hdik_ai-KBQ?si=Dub5XsLKAUGWpK2L',
      youtubeId: 'hdik_ai-KBQ',
      materialsNeeded: ['Wooden board or heavy handmade paper', 'Natural earth colors / Acrylics (Chalk White, Ochre, Vermilion Red, Indigo, Leaf Green)', 'Fine round brushes size 1 and 2', 'Bamboo quill or wooden stylus for sacred dotting'],
      steps: [
        {
          stepNumber: 1,
          title: 'Preparing Sacred Lipan Wall / Canvas Enclosure (Dev-Chauk)',
          description: 'As demonstrated in the authentic Rathwa tribal video, prime your surface with a warm clay and cow-dung wash (*Lipan*). Enclose the sacred workspace inside a rectangular geometric border (*Dev-Chauk*) to demarcate the dwelling of the ancestors.',
          proTip: 'The border is consecrated first before any deity horse is painted inside.'
        },
        {
          stepNumber: 2,
          title: 'Drafting Baba Pithora & Rani Pithorani on Royal Horses',
          description: 'Draw the grand silhouette of Baba Pithora mounted on the royal five-colored white stallion. Draw arched proud necks, stepped mane lines, and riders seated with ceremonial victory flags.',
          proTip: 'Pithora horses feature elongated, graceful bellies and strong triangular legs standing firmly on Mother Earth.'
        },
        {
          stepNumber: 3,
          title: 'Painting Village Spirits, Sun, Moon & Forest Animals',
          description: 'Surround the sacred riders with the celestial Sun and Moon, flying birds, peacocks in trees, and village shamans (*Badwa*) playing ritual dhols.',
          proTip: 'Leave no space isolated; every element is interconnected in tribal cosmology.'
        },
        {
          stepNumber: 4,
          title: 'Infilling with Saturated Primary Hues',
          description: 'Fill the horse blankets, saddles, and ceremonial garments with bright saffron red, turmeric yellow, and deep indigo blue.',
          proTip: 'Keep colors flat, cheerful, and unblended to honor tribal ritual simplicity.'
        },
        {
          stepNumber: 5,
          title: 'Sacred Dotting & Border Consecration',
          description: 'Dip a bamboo quill into vermilion and white paint. Stamp rhythmic sacred dots along the horses’ bodies and the boundary frame as final blessing.',
          proTip: 'The red dots symbolize ancestral breath and divine presence.'
        }
      ]
    }
  },

  west_bengal: {
    id: 'west_bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    zone: 'East',
    primaryArtForm: 'Kalighat Painting & Bengal Patachitra',
    otherCrafts: ['Bankura Terracotta Horses', 'Dokra Metal Casting', 'Kantha Embroidery', 'Sholapith Crafts', 'Baluchari Silk Sarees'],
    history: 'Kalighat painting emerged in the 19th century around the Kali Temple in Kolkata, where rural scroll painters adapted to urban life by creating swift, fluid brush drawings on inexpensive paper for pilgrims.',
    culturalSignificance: 'Famous for bold theatrical strokes, expressive satirical depictions of the Bengali Babus, and divine depictions of Goddess Kali, Durga, and Shiva with sweeping brush contours.',
    uniqueFacts: [
      'Pioneered early modern Indian secular and satirical art alongside sacred iconography.',
      'Shaded contours were achieved with a single sweeping brush loaded with dark pigment on one edge and water on the other.',
      'Influenced legendary modern master Jamini Roy.'
    ],
    traditionalMaterials: ['Handmade mill paper', 'Earthenware pigment bowls', 'Goat hair mop brushes', 'Gum arabic and lamp soot'],
    keyMotifs: ['Durga Mahishasuramardini Fierce & Compassionate Eyes', 'Bengali Babu & Bibi Satirical Vignettes', 'Fish (Maach) - Auspicious Bengal River Symbol', 'Bold Two-Tone Contoured Brush Shading', 'Alpona White Rice Paste Motifs'],
    artwork: TRADITIONAL_ARTWORKS.kalighat_bengal,
    tutorial: {
      title: 'Kalighat Patachitra: Mill-Paper Scrolls, Sweeping Black Contours & Volumetric Shading',
      estimatedTime: '2 - 3 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/SSgUeFCjOPw?si=h4VkXtGkrJ05xv-4',
      youtubeId: 'SSgUeFCjOPw',
      materialsNeeded: ['Heavy watercolor paper / newsprint wash', 'Black Indian ink / Gouache', 'Red, Yellow ochre, Ultramarine watercolors', 'Large round mop brush and detail liner brush'],
      steps: [
        {
          stepNumber: 1,
          title: 'Swift Continuous Freehand Brush Drafting',
          description: 'As demonstrated in the Kalighat master tutorial video, sketch the voluptuous rounded face and fish-shaped eyes (Meenakshi) of Goddess Durga or Kali using sweeping, uninterrupted brush lines.',
          proTip: 'Kalighat lines thrive on swift, confident conviction without erasing.'
        },
        {
          stepNumber: 2,
          title: 'Signature Two-Tone Volumetric Gradient Shading (Dhalano)',
          description: 'Load a soft round brush with pigment on the tip and clear water on the belly. Sweep along the outer edge of limbs and cheeks in one stroke to create instant sculptural 3D volume.',
          proTip: 'This iconic shading technique gives Kalighat figures their theatrical rounded presence.'
        },
        {
          stepNumber: 3,
          title: 'Fill with Flat Saturated Mineral Tones',
          description: 'Color the Mukuta crown and ornaments in bright warm turmeric yellow, the third eye in vermilion red, and drapery in bold unblended primary gouache.',
          proTip: 'Keep palette minimal: yellow, red, white, and black provide maximum graphic impact.'
        },
        {
          stepNumber: 4,
          title: 'Dramatic Lampblack Contours & Curls',
          description: 'Lay down thick, bold lampblack outlines defining the arched eyebrows, nose ridge, and voluminous jet-black hair curls framing the countenance.',
          proTip: 'The contrast of deep black against soft gradient shading creates the iconic Kalighat look.'
        },
        {
          stepNumber: 5,
          title: 'Silver Brocade Accents & Auspicious Alpona Border',
          description: 'Add fine silver metallic or white lines along the saree borders and necklace pearls. Frame with a simple sweeping red and black border.',
          proTip: 'Display with generous margins to honor traditional temple pilgrim scrolls.'
        }
      ]
    }
  },

  kerala: {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    zone: 'South',
    primaryArtForm: 'Kerala Temple Mural Painting',
    otherCrafts: ['Aranmula Metal Mirrors', 'Nettur Petti Jewelry Boxes', 'Kathakali Masks & Headgears', 'Coir Crafts', 'Bell Metal Ware'],
    history: 'Kerala murals adorn the walls of ancient temples and palaces like Padmanabhapuram, Mattancherry, and Guruvayur, dating between the 9th and 18th centuries CE.',
    culturalSignificance: 'Depicts scenes from the Dhyana Shlokas using the Panchavarna (five sacred natural colors: Red, Yellow, Green, Blue/Black, White) following ancient Natyashastra stances.',
    uniqueFacts: [
      'Artisans use the white lime plaster on laterite temple walls as the natural white color without adding white paint.',
      'Characters are categorized into Sattvika (divine green), Rajasika (royal red/yellow), and Tamasika (dark blue/black).',
      'The eyes are painted in a sacred concluding ritual called Nayanonmeelanam (Opening of the Eyes).'
    ],
    traditionalMaterials: ['Laterite wall plaster', 'Red laterite stone (Chayilyam)', 'Yellow orpiment stone', 'Neelamala plant green', 'Coconut shell bowls'],
    keyMotifs: ['Sattvika Divine Green & Panchavarna Sacred Palette', 'Tribhanga Classical Dance Stances', 'Nayanonmeelanam (Wide Radiant Sacred Eyes)', 'Elaborate Makuta Crowns & Temple Garlands', 'Anantasayana Vishnu & Dancing Shiva'],
    artwork: TRADITIONAL_ARTWORKS.mural_kerala,
    tutorial: {
      title: 'Kerala Temple Mural Art: Panchavarna (Five Colors), Mudra Gestures & Dhyana Shlokas',
      estimatedTime: '3 - 5 hours',
      difficulty: 'Intermediate',
      videoUrl: 'https://youtu.be/hphsMzxYwj4?si=yeXZM6VdAkMpcPpm',
      youtubeId: 'hphsMzxYwj4',
      materialsNeeded: ['Canvas board or smooth primed wooden panel', 'Panchavarna acrylic/tempera colors (Yellow Ochre, Indian Terracotta Red, Sap Green, Ivory White, Lampblack)', 'Round brushes 00, 2, 4', 'Stippling brush for volumetric shadow'],
      steps: [
        {
          stepNumber: 1,
          title: 'Draw the Classical Temple Stance (Tribhanga)',
          description: 'As demonstrated in the Guruvayur/Padmanabhapuram mural video, sketch the divine deity in the graceful three-bend Tribhanga posture playing the flute, enclosed under sacred temple garlands.',
          proTip: 'Mural faces feature rounded cheeks, stylized arched brows, and expressive dance mudras.'
        },
        {
          stepNumber: 2,
          title: 'Luminous Yellow Ochre Undertone Wash (Kavippu)',
          description: 'Wash the entire figure with luminous yellow ochre. This serves as the divine undertone giving Kerala murals their sacred temple glow.',
          proTip: 'Yellow undertones create the warm lamp-lit radiance characteristic of sanctum sanctorum murals.'
        },
        {
          stepNumber: 3,
          title: 'Sattvika Emerald Green Skin Layering',
          description: 'Layer rich emerald green over the divine body, leaving jewels, crowns, and celestial garlands in warm golden yellow.',
          proTip: 'Use delicate micro-stippling along muscle and jaw contours with deeper green for volumetric depth.'
        },
        {
          stepNumber: 4,
          title: 'Indian Red Terracotta Shading & Drapery Folds',
          description: 'Define outlines and costume drapery folds with warm Indian red terracotta. In traditional Kerala murals, depth is produced purely with red and dark green, never muddy black.',
          proTip: 'Terracotta lines create vibrant harmony against the green body without deadening the hue.'
        },
        {
          stepNumber: 5,
          title: 'Opening of the Eyes (Nayanonmeelanam) & White Pearl Accents',
          description: 'Perform the sacred eye opening ritual by painting large wide-open sclera, sharp black pupils, and curved black brows. Add white dot highlights to necklaces and crowns as the final consecration.',
          proTip: 'The white pearl stipples make the painted murti emanate divine grace.'
        }
      ]
    }
  },

  punjab: {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    zone: 'North',
    primaryArtForm: 'Phulkari Floral Silk Embroidery & Mud Wall Art',
    otherCrafts: ['Punjabi Jutti Making', 'Wood Inlay of Hoshiarpur', 'Durries of Bathinda', 'Paranda Weaving', 'Terracotta Toys'],
    history: 'Phulkari ("flower craft") has been referenced in the 18th-century Punjabi epic Heer Ranjha. Embroidered by mothers and grandmothers on home-spun khaddar fabric as heirlooms for brides.',
    culturalSignificance: 'Every stitch is counted on the reverse side of coarse cotton cloth using untwisted pure silk floss (Pat). Bagh (garden) Phulkaris cover the entire fabric so no base cloth is visible.',
    uniqueFacts: [
      'Embroidered from the back of the cloth using the darning stitch, requiring intense spatial memory.',
      'Sainchi Phulkari depicts rural scenes: spinning wheels (charkha), birds, village jewelry, and weddings.',
      'Traditionally gifted during the birth of a child and worn at wedding ceremonies.'
    ],
    traditionalMaterials: ['Hand-spun indigo/madder coarse Khaddar cloth', 'Pure untwisted Pat silk threads', 'Bone needles', 'Natural indigo and turmeric dyes'],
    keyMotifs: ['Bagh Diamond Geometric Grid Formations', 'Pat Silk Lustrous Thread Floss Weaves', 'Charkha (Spinning Wheel) & Village Peacocks', 'Mor (Peacock) & Trikona (Triangle) Facets', 'Nazar Battu (Auspicious Protective Flaw Motif)'],
    artwork: TRADITIONAL_ARTWORKS.phulkari_punjab,
    tutorial: {
      title: 'Punjab Phulkari: Coarse Khaddar Cotton, Darning Stitch & Radiant Pat Silk Geometry',
      estimatedTime: '2 - 3 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/BZvX0TlP7OM?si=rozJUSwUkjnkp1Tt',
      youtubeId: 'BZvX0TlP7OM',
      materialsNeeded: ['Grid paper or heavy canvas / Khaddar cloth', 'Gouache/Acrylics (Mustard Yellow, Saffron Orange, Hot Magenta, Peacock Teal, Gold)', 'Flat chisel brush 1/4 inch (or embroidery needle & silk floss)', 'Fine line marker'],
      steps: [
        {
          stepNumber: 1,
          title: 'Establish the Interlocking Diamond Geometric Grid',
          description: 'As demonstrated in the authentic Punjabi Phulkari video, construct a precise grid of interlocking stepped diamond units across your surface. Phulkari relies on counted-thread geometry.',
          proTip: 'Each diamond module represents a stylized blooming flower (*Phul*) or garden plot (*Bagh*).'
        },
        {
          stepNumber: 2,
          title: 'Simulate Directional Untwisted Silk Floss (Pat Sheen)',
          description: 'Lay down parallel horizontal or diagonal brushstrokes inside each diamond facet using luminous saffron and hot magenta.',
          proTip: 'Varying stroke directions across adjacent facets creates the shimmering sheen of untwisted silk thread catching sunlight.'
        },
        {
          stepNumber: 3,
          title: 'Alternate High-Contrast Radiant Color Blocks',
          description: 'Infill neighbouring diamond facets with bright mustard yellow and royal peacock turquoise to generate dazzling festive vibration.',
          proTip: 'High chromatic contrast gives Phulkari its joyful, celebratory Punjabi wedding spirit.'
        },
        {
          stepNumber: 4,
          title: 'Add Stylized Geometric Peacocks & Floral Corners',
          description: 'In the four corner borders, paint geometric peacocks with fanned tail feathers constructed from stepped triangles and diamond crests.',
          proTip: 'Phulkari birds celebrate folk geometric abstraction rather than photorealism.'
        },
        {
          stepNumber: 5,
          title: 'Incorporate the Nazar-Battu (Auspicious Protective Flaw)',
          description: 'Intentionally leave one small petal or diamond in a contrasting unexpected color (e.g. blue instead of orange) to ward off the evil eye.',
          proTip: 'A cherished folk tradition honoring the artisan’s humility before cosmic perfection.'
        }
      ]
    }
  },

  telangana: {
    id: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    zone: 'South',
    primaryArtForm: 'Cheriyal Scroll Painting & Nirmal Art',
    otherCrafts: ['Pochampally Ikat', 'Nirmal Toys & Paintings', 'Bidriware of Hyderabad', 'Pembarthi Metal Craft', 'Gollabhama Sarees'],
    history: 'Cheriyal scrolls flourished in Telangana for over 400 years as continuous narrative cloth scrolls up to 40 feet long, sung by traveling storytellers (Kaki Padagollu) in rural villages.',
    culturalSignificance: 'Cheriyal art uses vibrant red background canvases and stylized theatrical characters with bulbous eyes, vivid costumes, and comic expressions illustrating folk legends.',
    uniqueFacts: [
      'Canvas is prepared by applying Khadi cloth treated with tamarind seed paste, white mud, and tree gum.',
      'Accompanied by handmade 3D Cheriyal masks crafted from sawdust and tamarind paste.',
      'Received prestigious Geographical Indication (GI) protection.'
    ],
    traditionalMaterials: ['Handloom khadi cloth', 'Tamarind seed paste (Chinta Ginjalapappu)', 'Natural stone & vegetable pigments', 'Squirrel hair brush'],
    keyMotifs: ['Cheriyal Fiery Vermilion Backgrounds', 'Storyteller Scroll Episodes (Katha Panels)', 'Stylized Bold-Eyed Village Folk Silhouettes', 'Four-Petaled Floral Episode Dividers', '3D Sawdust & Tamarind Ritual Masks'],
    artwork: TRADITIONAL_ARTWORKS.cheriyal_telangana,
    tutorial: {
      title: 'Cheriyal Scroll Painting: Khadi Cloth Tamarind Gesso, Narrative Comic Panels & Vibrant Red Ground',
      estimatedTime: '2 - 3 hours',
      difficulty: 'Easy',
      videoUrl: 'https://youtu.be/SPQeDlKYooE?si=PS-ip3vf6mC93_VC',
      youtubeId: 'SPQeDlKYooE',
      materialsNeeded: ['Canvas panel or heavy paper', 'Acrylic paints (Fiery Vermilion Red, Chalk White, Turmeric Ochre, Emerald Green, Lampblack)', 'Detail brushes size 0, 1, 2', 'White gel pen / fine stylus'],
      steps: [
        {
          stepNumber: 1,
          title: 'Prime the Iconic Fiery Vermilion Background Ground',
          description: 'As demonstrated in the Cheriyal master storytelling video, coat the entire canvas with a flat, vibrant scarlet vermilion red wash. This intense crimson is the signature visual hallmark of all Telangana scrolls.',
          proTip: 'Apply two smooth opaque coats to create the glowing theatrical backdrop.'
        },
        {
          stepNumber: 2,
          title: 'Draft Stylized Folk Characters & Bold Eye Outlines',
          description: 'Sketch village heroes and mythical deities with circular expressive heads, sharp hooked noses, and wide staring bulbous eyes that reach the temples.',
          proTip: 'Characters embody theatrical warmth, rural humor, and bold comic posture.'
        },
        {
          stepNumber: 3,
          title: 'Infill Costumes with Primary Ochre & White Hues',
          description: 'Color the traditional dhotis, turbans, and sarees in rich turmeric ochre, leaf green, and chalk white with geometric cross-stripes.',
          proTip: 'Solid primary colors ensure figures stand out vividly against the fiery red background.'
        },
        {
          stepNumber: 4,
          title: 'Bold Expressive Lampblack Contours',
          description: 'Outline every figure, muscle crease, mustache, and weapon with strong, confident black brush lines.',
          proTip: 'Heavy black lines give Cheriyal storytelling panels their iconic graphic punch.'
        },
        {
          stepNumber: 5,
          title: 'Four-Petaled Floral Story Dividers & White Dots (Chukka)',
          description: 'Paint vertical border ribbons of four-petaled white flowers to separate narrative episodes. Finish with fine white dots along jewelry and garment borders.',
          proTip: 'White Chukka dot embellishments make the folk characters leap out with festive vibrancy.'
        }
      ]
    }
  }
};
