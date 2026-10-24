import { LanguageTrack } from '../types';

export const INDIAN_LANGUAGES_TRACKS: Record<string, LanguageTrack> = {
  hindi: {
    id: 'hindi',
    language: 'Hindi (हिंदी)',
    nativeScript: 'हिंदी',
    statesSpoken: ['Bihar', 'Madhya Pradesh', 'Rajasthan', 'Uttar Pradesh', 'Delhi', 'Himachal Pradesh'],
    flagEmoji: '🇮🇳',
    description: 'The national language of India and the medium of legendary Mithila, Kangra, and Pichwai artisan guilds across North and Central India.',
    culturalTieIn: 'Learn how to converse with Madhubani artists in Bihar, Pichwai masters in Nathdwara, and miniature painters in Rajasthan.',
    lessons: [
      {
        id: 'hindi_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Greetings, Colors & Artisan Basics',
        topic: 'Foundations & Colors in Traditional Art',
        culturalInsight: 'In Indian classical aesthetic theory (Rasa Shastra), colors (Varnas) carry emotional vibrations: Saffron (Kesari) evokes courage and devotion, Indigo (Neel) represents the infinite cosmos, and Emerald (Panna) symbolizes life.',
        vocabulary: [
          {
            nativeWord: 'नमस्ते',
            romanization: 'Namaste',
            englishMeaning: 'Hello / I bow to the divine within you',
            exampleSentenceNative: 'नमस्ते, आप कैसे हैं?',
            exampleSentenceEnglish: 'Hello, how are you?'
          },
          {
            nativeWord: 'कला',
            romanization: 'Kala',
            englishMeaning: 'Art / Craftsmanship',
            exampleSentenceNative: 'यह पारंपरिक कला बहुत सुंदर है।',
            exampleSentenceEnglish: 'This traditional art is very beautiful.'
          },
          {
            nativeWord: 'रंग',
            romanization: 'Rang',
            englishMeaning: 'Color / Pigment',
            exampleSentenceNative: 'यह प्राकृतिक रंग हल्दी से बना है।',
            exampleSentenceEnglish: 'This natural color is made from turmeric.'
          },
          {
            nativeWord: 'चित्रकार',
            romanization: 'Chitrakar',
            englishMeaning: 'Painter / Artist',
            exampleSentenceNative: 'चित्रकार ने बहुत सुंदर मधुबनी बनाई।',
            exampleSentenceEnglish: 'The artist painted a very beautiful Madhubani.'
          }
        ],
        questions: [
          {
            id: 'h_q1',
            type: 'multiple-choice',
            prompt: 'What is the Hindi word for "Art / Craftsmanship"?',
            options: ['कला (Kala)', 'रंग (Rang)', 'किताब (Kitab)', 'गीत (Geet)'],
            correctAnswer: 'कला (Kala)',
            explanation: '"कला" (Kala) denotes the 64 traditional arts and crafts in ancient Indian heritage.'
          },
          {
            id: 'h_q2',
            type: 'translate',
            prompt: 'Translate to English: "यह पारंपरिक कला बहुत सुंदर है।"',
            options: [
              'This traditional art is very beautiful.',
              'I want to buy this modern painting.',
              'The colors are made from flowers.',
              'Where is the nearest artisan market?'
            ],
            correctAnswer: 'This traditional art is very beautiful.',
            explanation: '"यह" (This) + "पारंपरिक कला" (traditional art) + "बहुत सुंदर है" (is very beautiful).'
          },
          {
            id: 'h_q3',
            type: 'cultural-match',
            prompt: 'Which natural ingredient is traditionally used in Hindi-speaking regions to produce sacred yellow pigment?',
            options: ['हल्दी (Turmeric)', 'नील (Indigo)', 'कोयला (Charcoal)', 'मिट्टी (Clay)'],
            correctAnswer: 'हल्दी (Turmeric)',
            explanation: 'Haldi (turmeric) is revered both as an auspicious dye and sacred antiseptic across Indian arts.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'hindi_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Bargaining & Craft Inquiries at Dilli Haat',
        topic: 'Conversing with Traditional Artisans',
        culturalInsight: 'Visiting an artisan haat or craft cluster involves respectful dialogue where buyers appreciate the weeks of manual labor before discussing fair pricing.',
        vocabulary: [
          {
            nativeWord: 'कीमत',
            romanization: 'Keemat / Daam',
            englishMeaning: 'Price / Value',
            exampleSentenceNative: 'इस हाथ से बनी पेंटिंग की क्या कीमत है?',
            exampleSentenceEnglish: 'What is the price of this handmade painting?'
          },
          {
            nativeWord: 'हाथ से बना',
            romanization: 'Haath se bana',
            englishMeaning: 'Handmade / Handcrafted',
            exampleSentenceNative: 'यह पूरा काम हाथ से बना हुआ है।',
            exampleSentenceEnglish: 'This entire work is handmade.'
          },
          {
            nativeWord: 'समय',
            romanization: 'Samay / Waqt',
            englishMeaning: 'Time duration',
            exampleSentenceNative: 'इसे बनाने में कितना समय लगा?',
            exampleSentenceEnglish: 'How much time did it take to create this?'
          }
        ],
        questions: [
          {
            id: 'h_q4',
            type: 'translate',
            prompt: 'How do you politely ask an artisan "How much time did it take to create this?" in Hindi?',
            options: [
              'इसे बनाने में कितना समय लगा? (Ise banane mein kitna samay laga?)',
              'आप कहाँ रहते हैं? (Aap kahan rehte hain?)',
              'यह कौन सा रंग है? (Yeh kaun sa rang hai?)',
              'मुझे यह पसंद नहीं है। (Mujhe yeh pasand nahi hai.)'
            ],
            correctAnswer: 'इसे बनाने में कितना समय लगा? (Ise banane mein kitna samay laga?)',
            explanation: '"बनाने में" (in making) + "कितना समय लगा" (how much time took).'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'hindi_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Rasa Theory, Symbolism & Philosophy',
        topic: 'Aesthetic Philosophy and Devotional Poetry',
        culturalInsight: 'In classical Indian aesthetic treatises, the viewer (Sahridaya) experiences aesthetic bliss (Ananda) through the harmony of colors, rhythm, and devotion (Bhakti).',
        vocabulary: [
          {
            nativeWord: 'प्रतीक',
            romanization: 'Prateek',
            englishMeaning: 'Symbol / Sacred Allegory',
            exampleSentenceNative: 'मत्स्य जीवन और उर्वरता का पावन प्रतीक है।',
            exampleSentenceEnglish: 'The fish is a sacred symbol of life and fertility.'
          },
          {
            nativeWord: 'विरासत',
            romanization: 'Virasat',
            englishMeaning: 'Cultural Heritage / Lineage',
            exampleSentenceNative: 'भारतीय कला हमारी अनमोल सांस्कृतिक विरासत है।',
            exampleSentenceEnglish: 'Indian art is our priceless cultural heritage.'
          }
        ],
        questions: [
          {
            id: 'h_q5',
            type: 'fill-blank',
            prompt: 'Complete the sentence: "भारतीय कला हमारी अनमोल सांस्कृतिक _______ है।" (Indian art is our priceless cultural heritage.)',
            options: ['विरासत (Virasat)', 'दुकान (Dukaan)', 'किताब (Kitab)', 'गाड़ी (Gaadi)'],
            correctAnswer: 'विरासत (Virasat)',
            explanation: '"विरासत" means cultural heritage passed down across millennia.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  tamil: {
    id: 'tamil',
    language: 'Tamil (தமிழ்)',
    nativeScript: 'தமிழ்',
    statesSpoken: ['Tamil Nadu', 'Puducherry'],
    flagEmoji: '🪷',
    description: 'One of the world’s oldest classical languages, holding the living heritage of Sangam literature, Chola bronzes, and Thanjavur 24K gold gemstone paintings.',
    culturalTieIn: 'Master everyday and classical Tamil to understand temple inscriptions, Swamimalai bronze casters, and Tanjore art masters.',
    lessons: [
      {
        id: 'tamil_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Vanakkam & Thanjavur Art Foundations',
        topic: 'Greetings & Sacred Temple Craft Terms',
        culturalInsight: 'Tamil greetings are grounded in deep humility. "Vanakkam" brings the palms together at heart center, honoring the divine in others.',
        vocabulary: [
          {
            nativeWord: 'வணக்கம்',
            romanization: 'Vanakkam',
            englishMeaning: 'Greetings / Hello',
            exampleSentenceNative: 'அனைவருக்கும் வணக்கம்.',
            exampleSentenceEnglish: 'Greetings to everyone.'
          },
          {
            nativeWord: 'கலை',
            romanization: 'Kalai',
            englishMeaning: 'Art / Cultural expression',
            exampleSentenceNative: 'தஞ்சாவூர் ஓவியம் ஒரு சிறந்த கலை.',
            exampleSentenceEnglish: 'Thanjavur painting is an exquisite art.'
          },
          {
            nativeWord: 'தங்கம்',
            romanization: 'Thangam',
            englishMeaning: 'Gold / Pure Gold Foil',
            exampleSentenceNative: 'இதில் தூய தங்க இழை பயன்படுத்தப்பட்டுள்ளது.',
            exampleSentenceEnglish: 'Pure gold foil is used in this.'
          },
          {
            nativeWord: 'கோயில்',
            romanization: 'Koyil',
            englishMeaning: 'Temple / Abode of King & Divine',
            exampleSentenceNative: 'தஞ்சை பெரிய கோயில் மிகவும் பிரம்மாண்டமானது.',
            exampleSentenceEnglish: 'The Thanjavur Big Temple is magnificent.'
          }
        ],
        questions: [
          {
            id: 't_q1',
            type: 'multiple-choice',
            prompt: 'What is the classical Tamil word for "Art"?',
            options: ['கலை (Kalai)', 'பாட்டு (Paattu)', 'நூல் (Nool)', 'மரம் (Maram)'],
            correctAnswer: 'கலை (Kalai)',
            explanation: '"கலை" (Kalai) signifies the 64 fine arts (Arupathu Naangu Kalaigal).'
          },
          {
            id: 't_q2',
            type: 'translate',
            prompt: 'Translate: "தஞ்சாவூர் ஓவியம் ஒரு சிறந்த கலை."',
            options: [
              'Thanjavur painting is an exquisite art.',
              'I am traveling to Chennai tomorrow.',
              'Where is the Swamimalai bronze foundry?',
              'Please give me pure silk thread.'
            ],
            correctAnswer: 'Thanjavur painting is an exquisite art.',
            explanation: '"தஞ்சாவூர் ஓவியம்" (Thanjavur painting) + "சிறந்த கலை" (exquisite art).'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'tamil_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Speaking with Swamimalai & Kanchipuram Weavers',
        topic: 'Artisan Dialogues & Craft Appreciation',
        culturalInsight: 'In Kanchipuram and Thanjavur, craft knowledge is passed through Guru-Shishya lineage known as Marabu.',
        vocabulary: [
          {
            nativeWord: 'கைவினைஞர்',
            romanization: 'Kaivinaignar',
            englishMeaning: 'Artisan / Craftsman',
            exampleSentenceNative: 'இந்த கைவினைஞர் பாரம்பரியமாக வேலை செய்கிறார்.',
            exampleSentenceEnglish: 'This artisan works traditionally.'
          },
          {
            nativeWord: 'பட்டு',
            romanization: 'Pattu',
            englishMeaning: 'Pure Silk',
            exampleSentenceNative: 'இது அசல் காஞ்சிபுரம் பட்டு.',
            exampleSentenceEnglish: 'This is authentic Kanchipuram silk.'
          }
        ],
        questions: [
          {
            id: 't_q3',
            type: 'multiple-choice',
            prompt: 'What is the Tamil word for "Handmade Artisan"?',
            options: ['கைவினைஞர் (Kaivinaignar)', 'ஓட்டுநர் (Oottunar)', 'மருத்துவர் (Maruthuvar)', 'ஆசிரியர் (Aasiriyar)'],
            correctAnswer: 'கைவினைஞர் (Kaivinaignar)',
            explanation: '"கை" (hand) + "வினை" (action/craft) + "ஞர்" (practitioner).'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'tamil_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Sangam Poetry & Sacred Chola Bronzes',
        topic: 'Lost-Wax Casting Philosophy & Sacred Aesthetics',
        culturalInsight: 'Chola bronze sculptors (Sthapathis) chant the Shilpa Shastra Dhyana Shlokas to mentally visualize Nataraja’s cosmic dance (Ananda Tandavam).',
        vocabulary: [
          {
            nativeWord: 'மரபு',
            romanization: 'Marabu',
            englishMeaning: 'Living Tradition / Heritage',
            exampleSentenceNative: 'நம் தமிழர் மரபு பல ஆயிரம் ஆண்டுகள் பழமையானது.',
            exampleSentenceEnglish: 'Our Tamil heritage is thousands of years old.'
          }
        ],
        questions: [
          {
            id: 't_q4',
            type: 'cultural-match',
            prompt: 'Which metal casting method has been preserved for 1,000 years in Swamimalai, Tamil Nadu?',
            options: ['மெழுகு வார்ப்பு (Lost-Wax Casting)', 'மணல் வார்ப்பு (Sand Casting)', 'மர செதுக்கல் (Wood Carving)', 'கண்ணாடி வேலை (Glass Work)'],
            correctAnswer: 'மெழுகு வார்ப்பு (Lost-Wax Casting)',
            explanation: 'Madhuchishtavidhana (lost-wax casting in beeswax) creates hollow-free solid sacred bronzes.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  telangana_andhra: {
    id: 'telugu',
    language: 'Telugu (తెలుగు)',
    nativeScript: 'తెలుగు',
    statesSpoken: ['Andhra Pradesh', 'Telangana'],
    flagEmoji: '🪶',
    description: 'Renowned as "The Italian of the East" for its sweet, vowel-ending musicality and the artistic legacy of Srikalahasti Kalamkari, Kondapalli toys, and Cheriyal scrolls.',
    culturalTieIn: 'Communicate effortlessly with Kalamkari cloth painters, Pochampally Ikat weavers, and Cheriyal scroll storytellers.',
    lessons: [
      {
        id: 'telugu_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Namaskaram & Kalamkari Pen Lore',
        topic: 'Basic Greetings & Traditional Art Vocabulary',
        culturalInsight: 'Telugu culture celebrates the meeting of music, poetry, and painting, often embodied in Thyagaraja Kritis and temple Kalamkari hangings.',
        vocabulary: [
          {
            nativeWord: 'నమస్కారం',
            romanization: 'Namaskaram',
            englishMeaning: 'Hello / Greetings',
            exampleSentenceNative: 'అందరికీ నమస్కారం.',
            exampleSentenceEnglish: 'Greetings to all.'
          },
          {
            nativeWord: 'కళ',
            romanization: 'Kala',
            englishMeaning: 'Art / Craft',
            exampleSentenceNative: 'కలంకారీ కళ ఎంతో ప్రసిద్ధి చెందింది.',
            exampleSentenceEnglish: 'Kalamkari art is very famous.'
          },
          {
            nativeWord: 'రంగులు',
            romanization: 'Rangulu',
            englishMeaning: 'Colors / Natural Dyes',
            exampleSentenceNative: 'ఇందులో సహజ రంగులు వాడారు.',
            exampleSentenceEnglish: 'Natural colors were used in this.'
          }
        ],
        questions: [
          {
            id: 'tel_q1',
            type: 'multiple-choice',
            prompt: 'How do you say "Natural colors were used in this" in Telugu?',
            options: [
              'ఇందులో సహజ రంగులు వాడారు. (Indulo sahaja rangulu vaadaru.)',
              'నాకు ఇది వద్దు. (Naaku idi vaddu.)',
              'ఈ రోజు పండుగ. (Ee roju panduga.)',
              'ఇక్కడ వర్షం పడుతోంది. (Ikkada varsham padutondi.)'
            ],
            correctAnswer: 'ఇందులో సహజ రంగులు వాడారు. (Indulo sahaja rangulu vaadaru.)',
            explanation: '"సహజ రంగులు" means natural colors.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'telugu_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Exploring Lepakshi & Kondapalli Villages',
        topic: 'Conversations with Toy Makers & Weavers',
        culturalInsight: 'Kondapalli toys (Bommalu) are carved from lightweight Tella Poniki softwood and painted with natural tamarind-paste dyes.',
        vocabulary: [
          {
            nativeWord: 'బొమ్మలు',
            romanization: 'Bommalu',
            englishMeaning: 'Toys / Sculpted Figurines',
            exampleSentenceNative: 'కొండపల్లి బొమ్మలు చాలా అందంగా ఉన్నాయి.',
            exampleSentenceEnglish: 'Kondapalli toys are very pretty.'
          },
          {
            nativeWord: 'చేనేత',
            romanization: 'Chenetha',
            englishMeaning: 'Handloom Weaving',
            exampleSentenceNative: 'పోచంపల్లి చేనేత చీరలు చాలా ప్రసిద్ధం.',
            exampleSentenceEnglish: 'Pochampally handloom sarees are very renowned.'
          }
        ],
        questions: [
          {
            id: 'tel_q2',
            type: 'multiple-choice',
            prompt: 'What does "చేనేత" (Chenetha) mean in Telugu?',
            options: ['Handloom Weaving', 'Clay Pottery', 'Temple Bell', 'Stone Statue'],
            correctAnswer: 'Handloom Weaving',
            explanation: '"చేతి నేత" -> Chenetha refers to traditional hand-operated looms.'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'telugu_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Cheriyal Narrative Lore & Puranic Heritage',
        topic: 'Epic Storytelling & Sanskrit-Telugu Syncretism',
        culturalInsight: 'Cheriyal scrolls preserved ancient folktales and village histories recited during festival nights.',
        vocabulary: [
          {
            nativeWord: 'సంస్కృతి',
            romanization: 'Samskruthi',
            englishMeaning: 'Culture / Heritage',
            exampleSentenceNative: 'మన తెలుగు సంస్కృతి ఎంతో గొప్పది.',
            exampleSentenceEnglish: 'Our Telugu culture is truly great.'
          }
        ],
        questions: [
          {
            id: 'tel_q3',
            type: 'fill-blank',
            prompt: 'Fill the blank: "మన తెలుగు _______ ఎంతో గొప్పది." (Our Telugu culture is truly great.)',
            options: ['సంస్కృతి (Samskruthi)', 'పుస్తకం (Pusthakam)', 'ఇల్లు (Illu)', 'నీరు (Neeru)'],
            correctAnswer: 'సంస్కృతి (Samskruthi)',
            explanation: 'Samskruthi denotes the living cultural matrix of rituals, arts, and traditions.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  marathi: {
    id: 'marathi',
    language: 'Marathi (मराठी)',
    nativeScript: 'मराठी',
    statesSpoken: ['Maharashtra', 'Goa'],
    flagEmoji: '🐅',
    description: 'The vibrant language of the Sahyadri ranges, Warli tribal art, Paithani peacock sarees, and the historic fortresses of Chhatrapati Shivaji Maharaj.',
    culturalTieIn: 'Learn authentic Warli folk terms, Paithani weaving terminology, and cultural idioms of Maharashtra.',
    lessons: [
      {
        id: 'marathi_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Namaskar & Warli Tribal Art Wisdom',
        topic: 'Greetings & Ecological Harmony Terms',
        culturalInsight: 'Warli art vocabulary is intimately tied to agricultural cycles, the Tarpa wind instrument, and Mother Nature (Dhartari Mata).',
        vocabulary: [
          {
            nativeWord: 'नमस्कार',
            romanization: 'Namaskar',
            englishMeaning: 'Hello / Greetings',
            exampleSentenceNative: 'सर्वांना नमस्कार.',
            exampleSentenceEnglish: 'Greetings to everyone.'
          },
          {
            nativeWord: 'वारली चित्रकला',
            romanization: 'Warli Chitrakala',
            englishMeaning: 'Warli Painting',
            exampleSentenceNative: 'वारली चित्रकला निसर्गाशी जोडलेली आहे.',
            exampleSentenceEnglish: 'Warli painting is deeply connected with nature.'
          },
          {
            nativeWord: 'तांदळाचे पीठ',
            romanization: 'Tandlache Peeth',
            englishMeaning: 'Rice Flour Paste (White pigment)',
            exampleSentenceNative: 'चित्रासाठी तांदळाचे पीठ वापरले जाते.',
            exampleSentenceEnglish: 'Rice flour paste is used for the painting.'
          }
        ],
        questions: [
          {
            id: 'm_q1',
            type: 'multiple-choice',
            prompt: 'In Warli painting, what traditional ingredient is "तांदळाचे पीठ" (Tandlache Peeth)?',
            options: ['Rice Flour Paste', 'Crushed Brick', 'Turmeric Powder', 'Indigo Plant'],
            correctAnswer: 'Rice Flour Paste',
            explanation: 'White rice flour paste mixed with water and tree gum creates the indelible white pigment of Warli art.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'marathi_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Paithani Saree & Kolhapur Craft Inquiries',
        topic: 'Bazaar Conversations & Heritage Crafts',
        culturalInsight: 'Paithani sarees feature a pure gold Zari pallu adorned with the iconic Asavali (flowering vine) and Mor (peacock) motifs.',
        vocabulary: [
          {
            nativeWord: 'पैठणी',
            romanization: 'Paithani',
            englishMeaning: 'Royal Silk Saree of Paithan',
            exampleSentenceNative: 'या पैठणीचा पदर खूप सुंदर आहे.',
            exampleSentenceEnglish: 'The pallu of this Paithani is very beautiful.'
          }
        ],
        questions: [
          {
            id: 'm_q2',
            type: 'translate',
            prompt: 'Translate: "या पैठणीचा पदर खूप सुंदर आहे."',
            options: [
              'The pallu of this Paithani is very beautiful.',
              'Where is the Gateway of India?',
              'I want to purchase mud pottery.',
              'This is a modern wooden chair.'
            ],
            correctAnswer: 'The pallu of this Paithani is very beautiful.',
            explanation: '"पदर" (padar / pallu) + "खूप सुंदर आहे" (is very beautiful).'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'marathi_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Sant Sahitya & Folk Philosophy',
        topic: 'Poetic Metaphors & Sahyadri Heritage',
        culturalInsight: 'The Varkari saint-poets (Tukaram, Dnyaneshwar) celebrated the divine through Abhangas, deeply influencing Maharashtra’s folk visual culture.',
        vocabulary: [
          {
            nativeWord: 'परंपरा',
            romanization: 'Parampara',
            englishMeaning: 'Tradition / Living Lineage',
            exampleSentenceNative: 'महाराष्ट्राची लोककला ही आमची समृद्ध परंपरा आहे.',
            exampleSentenceEnglish: 'The folk art of Maharashtra is our rich tradition.'
          }
        ],
        questions: [
          {
            id: 'm_q3',
            type: 'multiple-choice',
            prompt: 'What does "परंपरा" (Parampara) mean in Marathi?',
            options: ['Tradition / Heritage Lineage', 'Marketplace', 'New invention', 'Train station'],
            correctAnswer: 'Tradition / Heritage Lineage',
            explanation: 'Parampara refers to the uninterrupted continuum of artistic tradition.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  bengali: {
    id: 'bengali',
    language: 'Bengali (বাংলা)',
    nativeScript: 'বাংলা',
    statesSpoken: ['West Bengal', 'Tripura', 'Assam (Barak Valley)'],
    flagEmoji: '🎭',
    description: 'The literary and artistic language of Rabindranath Tagore, Jamini Roy, Kalighat pats, Bankura terracotta horses, and Durga Puja Alpona.',
    culturalTieIn: 'Immerse in the vocabulary of Kalighat painters, Dokra brass casters, and Kantha embroidery artisans.',
    lessons: [
      {
        id: 'bengali_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Nomoshkar & Kalighat Pat Foundations',
        topic: 'Greetings, Alpona & Visual Expressions',
        culturalInsight: 'Alpona is sacred rice-paste floor art drawn by women on festive mornings to invite Goddess Lakshmi (Lokkhi) into homes.',
        vocabulary: [
          {
            nativeWord: 'নমস্কার',
            romanization: 'Nomoshkar',
            englishMeaning: 'Greetings / Hello',
            exampleSentenceNative: 'সবাইকে নমস্কার।',
            exampleSentenceEnglish: 'Greetings to everyone.'
          },
          {
            nativeWord: 'চিত্রকলা',
            romanization: 'Chitrokola',
            englishMeaning: 'Painting / Fine Art',
            exampleSentenceNative: 'কালীঘাট চিত্রকলা বিশ্বখ্যাত।',
            exampleSentenceEnglish: 'Kalighat painting is world famous.'
          },
          {
            nativeWord: 'আলপনা',
            romanization: 'Alpona',
            englishMeaning: 'Sacred Rice-Paste Floor Art',
            exampleSentenceNative: 'পূজোর জন্য সুন্দর আলপনা আঁকা হয়েছে।',
            exampleSentenceEnglish: 'Beautiful Alpona has been drawn for the Puja.'
          }
        ],
        questions: [
          {
            id: 'b_q1',
            type: 'multiple-choice',
            prompt: 'What is the traditional Bengali ritual rice-paste floor art called?',
            options: ['আলপনা (Alpona)', 'রসগোল্লা (Rasgulla)', 'নৌকা (Nouka)', 'গান (Gaan)'],
            correctAnswer: 'আলপনা (Alpona)',
            explanation: 'Alpona (from Sanskrit "alimpana") is the sacred floor art of Bengal.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'bengali_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Talking to Bankura & Dokra Artisans',
        topic: 'Appreciating Terracotta & Lost-Wax Metalcraft',
        culturalInsight: 'Bankura terracotta horses with their tall erect ears and regal necks originated as votive offerings to village deity Dharma Thakur.',
        vocabulary: [
          {
            nativeWord: 'পোড়ামাটি',
            romanization: 'Poramati',
            englishMeaning: 'Terracotta / Burnt Clay',
            exampleSentenceNative: 'বাঁকুড়ার পোড়ামাটির ঘোড়া খুব বিখ্যাত।',
            exampleSentenceEnglish: 'Bankura terracotta horses are very famous.'
          },
          {
            nativeWord: 'ডোকরা',
            romanization: 'Dokra',
            englishMeaning: 'Ancient Lost-Wax Bell Metal Craft',
            exampleSentenceNative: 'এই ডোকরা মূর্তিটি সম্পূর্ণ হাতে তৈরি।',
            exampleSentenceEnglish: 'This Dokra statue is completely handmade.'
          }
        ],
        questions: [
          {
            id: 'b_q2',
            type: 'translate',
            prompt: 'Translate: "বাঁকুড়ার পোড়ামাটির ঘোড়া খুব বিখ্যাত।"',
            options: [
              'Bankura terracotta horses are very famous.',
              'Kolkata sweet shops are crowded today.',
              'We are watching a folk theater show.',
              'The river Hooghly flows into the sea.'
            ],
            correctAnswer: 'Bankura terracotta horses are very famous.',
            explanation: '"পোড়ামাটি" (poramati) means burnt earth/terracotta.'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'bengali_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Shantiniketan Renaissance & Kantha Lore',
        topic: 'Modern Indian Art History & Folk Narrative Stitches',
        culturalInsight: 'Kantha embroidery repurposes soft vintage cotton dhotis and sarees layered together and stitched with colorful threads telling folk stories.',
        vocabulary: [
          {
            nativeWord: 'নকশিকাঁথা',
            romanization: 'Nokshi Kantha',
            englishMeaning: 'Embroidered Narrative Quilt',
            exampleSentenceNative: 'নকশিকাঁথায় গ্রামীণ জীবনের গল্প ফুটে ওঠে।',
            exampleSentenceEnglish: 'Stories of rural life come alive in Nakshi Kantha.'
          }
        ],
        questions: [
          {
            id: 'b_q3',
            type: 'cultural-match',
            prompt: 'Which artistic movement centered in Bengal synthesized traditional folk motifs with modern aesthetics?',
            options: ['শান্তিনিকেতন শিল্পধারা (Shantiniketan School)', 'মোগল দরবার (Mughal Court)', 'পাশ্চাত্য শিল্প (Western Art)', 'আধুনিক সিনেমা (Modern Cinema)'],
            correctAnswer: 'শান্তিনিকেতন শিল্পধারা (Shantiniketan School)',
            explanation: 'Led by Nandalal Bose, Rabindranath Tagore, and Benode Behari Mukherjee at Kala Bhavana.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  gujarati: {
    id: 'gujarati',
    language: 'Gujarati (ગુજરાતી)',
    nativeScript: 'ગુજરાતી',
    statesSpoken: ['Gujarat'],
    flagEmoji: '🪁',
    description: 'The energetic language of the Great Rann of Kutch, Rogan castor art, Patan Patola double ikat, Bandhani, and Lippan mirror art.',
    culturalTieIn: 'Learn to chat with Kutch artisans, Lippan mud masters, and Patan master weavers.',
    lessons: [
      {
        id: 'gujarati_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Kem Chho & Kutch Lippan Basics',
        topic: 'Greetings, Mirror Craft & Desert Color Terms',
        culturalInsight: '"Kem Chho" (How are you?) is answered cheerfully with "Majama" (I am in joy/fun), reflecting Gujarat’s warm entrepreneurial optimism.',
        vocabulary: [
          {
            nativeWord: 'નમસ્તે / કેમ છો',
            romanization: 'Kem Chho',
            englishMeaning: 'Hello / How are you?',
            exampleSentenceNative: 'કેમ છો? મજામાં છો?',
            exampleSentenceEnglish: 'How are you? Are you doing well?'
          },
          {
            nativeWord: 'આભલા',
            romanization: 'Aabhla',
            englishMeaning: 'Small Mirrors (Used in Lippan & Embroidery)',
            exampleSentenceNative: 'લિપ્પણ કામમાં આભલા ચમકે છે.',
            exampleSentenceEnglish: 'Mirrors sparkle in Lippan work.'
          },
          {
            nativeWord: 'રોગન કળા',
            romanization: 'Rogan Kala',
            englishMeaning: 'Castor Oil Fabric Art of Nirona',
            exampleSentenceNative: 'રોગન કળા આખી દુનિયામાં અનોખી છે.',
            exampleSentenceEnglish: 'Rogan art is unique in the whole world.'
          }
        ],
        questions: [
          {
            id: 'g_q1',
            type: 'multiple-choice',
            prompt: 'What are the tiny decorative mirrors called in Gujarati craft embroidery & Lippan art?',
            options: ['આભલા (Aabhla)', 'પથ્થર (Patthar)', 'પાણી (Paani)', 'લાકડું (Laakdu)'],
            correctAnswer: 'આભલા (Aabhla)',
            explanation: 'Aabhla are convex and flat mirrors embedded into clay or fabric to deflect negative energy and reflect light.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'gujarati_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Shopping at Bhuj & Patan Weavers Guild',
        topic: 'Double Ikat Patola & Bandhani Appreciation',
        culturalInsight: 'Patan Patola is so meticulously tied and dyed on silk that the proverb says "Padi Patole Bhaat, Phate Pan Phite Nahin" (The pattern in Patola may tear with time, but the color will never fade).',
        vocabulary: [
          {
            nativeWord: 'પાટોળા',
            romanization: 'Patola',
            englishMeaning: 'Double-Ikat Pure Silk Saree',
            exampleSentenceNative: 'પાટણનું પટોળું બનાવવામાં છ મહિના લાગે છે.',
            exampleSentenceEnglish: 'It takes six months to weave a Patan Patola.'
          }
        ],
        questions: [
          {
            id: 'g_q2',
            type: 'translate',
            prompt: 'Translate: "પાટણનું પટોળું બનાવવામાં છ મહિના લાગે છે."',
            options: [
              'It takes six months to weave a Patan Patola.',
              'The desert sand is very cold at night.',
              'We are going to Ahmedabad tomorrow morning.',
              'Please show me pure cotton kurtas.'
            ],
            correctAnswer: 'It takes six months to weave a Patan Patola.',
            explanation: '"છ મહિના લાગે છે" means it takes six months.'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'gujarati_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Rathwa Pithora Devotional Murals',
        topic: 'Sacred Tribal Horse Frescoes & Ritual Vows',
        culturalInsight: 'Pithora murals are consecrated by the Lakharas (tribal artists) to invoke prosperity and peace from Baba Pithora and nature deities.',
        vocabulary: [
          {
            nativeWord: 'પીઠોરા',
            romanization: 'Pithora',
            englishMeaning: 'Sacred Tribal Ritual Wall Mural',
            exampleSentenceNative: 'પીઠોરા ચિત્રમાં પવિત્ર ઘોડા દોરવામાં આવે છે.',
            exampleSentenceEnglish: 'Sacred horses are painted in Pithora murals.'
          }
        ],
        questions: [
          {
            id: 'g_q3',
            type: 'multiple-choice',
            prompt: 'Which animal is the central sacred motif in Rathwa Pithora wall paintings?',
            options: ['ઘોડો (Sacred Horse)', 'સિંહ (Lion)', 'ઊંટ (Camel)', 'માછલી (Fish)'],
            correctAnswer: 'ઘોડો (Sacred Horse)',
            explanation: 'Horses symbolize the divine messengers carrying prayers to the supreme cosmic deities.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  kannada: {
    id: 'kannada',
    language: 'Kannada (ಕನ್ನಡ)',
    nativeScript: 'ಕನ್ನಡ',
    statesSpoken: ['Karnataka'],
    flagEmoji: '🐘',
    description: 'The ancient classical language of the Vijayanagara Empire, Hoysala stone temples, Mysore gold leaf paintings, and Channapatna wooden toy artisans.',
    culturalTieIn: 'Learn to speak with Mysore palace artists, sandalwood carvers, and Bidriware inlay masters.',
    lessons: [
      {
        id: 'kannada_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Namaskara & Mysore Painting Foundations',
        topic: 'Greetings, Gesso Gold & Royal Palaces',
        culturalInsight: 'Mysore painting is renowned for its subdued beauty and 24K gold foil (Gesso) work that illuminates deity forms without glare.',
        vocabulary: [
          {
            nativeWord: 'ನಮಸ್ಕಾರ',
            romanization: 'Namaskara',
            englishMeaning: 'Hello / Greetings',
            exampleSentenceNative: 'ಎಲ್ಲರಿಗೂ ನಮಸ್ಕಾರ.',
            exampleSentenceEnglish: 'Greetings to everyone.'
          },
          {
            nativeWord: 'ಚಿತ್ರಕಲೆ',
            romanization: 'Chitrakale',
            englishMeaning: 'Painting / Visual Art',
            exampleSentenceNative: 'ಮೈಸೂರು ಚಿತ್ರಕಲೆ ಅತ್ಯಂತ ಸೊಗಸಾಗಿದೆ.',
            exampleSentenceEnglish: 'Mysore painting is exceptionally graceful.'
          },
          {
            nativeWord: 'ಚಿನ್ನದ ಹಾಳೆ',
            romanization: 'Chinnada Haale',
            englishMeaning: 'Pure Gold Leaf Foil',
            exampleSentenceNative: 'ಇದರಲ್ಲಿ ಅಸಲಿ ಚಿನ್ನದ ಹಾಳೆ ಬಳಸಲಾಗಿದೆ.',
            exampleSentenceEnglish: 'Authentic gold leaf foil is used in this.'
          }
        ],
        questions: [
          {
            id: 'k_q1',
            type: 'multiple-choice',
            prompt: 'What is the Kannada term for "Painting / Visual Art"?',
            options: ['ಚಿತ್ರಕಲೆ (Chitrakale)', 'ಹಾಡು (Haadu)', 'ಕಥೆ (Kathe)', 'ಮನೆ (Mane)'],
            correctAnswer: 'ಚಿತ್ರಕಲೆ (Chitrakale)',
            explanation: '"ಚಿತ್ರ" (picture) + "ಕಲೆ" (art) = Chitrakale.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'kannada_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Channapatna Toys & Bidriware of Bidar',
        topic: 'Visiting Ivory Wood & Silver Inlay Clusters',
        culturalInsight: 'Channapatna toys are turned on high-speed lathes from Aale Mara (Ivory Wood) and polished using natural vegetable dyes and Lac resin.',
        vocabulary: [
          {
            nativeWord: 'ಗೊಂಬೆಗಳು',
            romanization: 'Gombegalu',
            englishMeaning: 'Wooden Toys / Dolls',
            exampleSentenceNative: 'ಚನ್ನಪಟ್ಟಣದ ಗೊಂಬೆಗಳು ಪರಿಸರ ಸ್ನೇಹಿ.',
            exampleSentenceEnglish: 'Channapatna toys are eco-friendly.'
          },
          {
            nativeWord: 'ಬಿದ್ರಿ ಕಲೆ',
            romanization: 'Bidri Kale',
            englishMeaning: 'Silver Inlay on Zinc Alloy of Bidar',
            exampleSentenceNative: 'ಬಿದ್ರಿ ಕಲೆಯು ಬೆಳ್ಳಿಯ ಕೆತ್ತನೆಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.',
            exampleSentenceEnglish: 'Bidri art is famous for silver carving.'
          }
        ],
        questions: [
          {
            id: 'k_q2',
            type: 'translate',
            prompt: 'Translate: "ಚನ್ನಪಟ್ಟಣದ ಗೊಂಬೆಗಳು ಪರಿಸರ ಸ್ನೇಹಿ."',
            options: [
              'Channapatna toys are eco-friendly.',
              'Mysore palace is lit with thousands of bulbs.',
              'Where can I find pure sandalwood oil?',
              'We are taking the morning train to Hampi.'
            ],
            correctAnswer: 'Channapatna toys are eco-friendly.',
            explanation: '"ಪರಿಸರ ಸ್ನೇಹಿ" means environmentally friendly / non-toxic.'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'kannada_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Hoysala Architecture & Shilpa Shastra',
        topic: 'Soapstone Carvings of Belur & Halebidu',
        culturalInsight: 'Hoysala sculptors (like master Jakanachari) carved detailed friezes in Chloritic Schist (soapstone) so fine that one could rotate stone earrings in deity ears.',
        vocabulary: [
          {
            nativeWord: 'ಶಿಲ್ಪಕಲೆ',
            romanization: 'Shilpakale',
            englishMeaning: 'Sculpture / Temple Stone Carving',
            exampleSentenceNative: 'ಬೇಲೂರಿನ ಶಿಲ್ಪಕಲೆ ಅದ್ಭುತವಾಗಿದೆ.',
            exampleSentenceEnglish: 'The stone sculpting of Belur is wondrous.'
          }
        ],
        questions: [
          {
            id: 'k_q3',
            type: 'cultural-match',
            prompt: 'Which famous dynasty created the intricate star-shaped soapstone temples of Belur and Halebidu?',
            options: ['ಹೊಯ್ಸಳರು (Hoysalas)', 'ಮೊಘಲರು (Mughals)', 'ಚೋಳರು (Cholas)', 'ಮರಾಠರು (Marathas)'],
            correctAnswer: 'ಹೊಯ್ಸಳರು (Hoysalas)',
            explanation: 'The Hoysala Empire (10th–14th century) created masterpieces of Indian temple sculpture.'
          }
        ],
        rewardXP: 100
      }
    ]
  },

  odia: {
    id: 'odia',
    language: 'Odia (ଓଡ଼ିଆ)',
    nativeScript: 'ଓଡ଼ିଆ',
    statesSpoken: ['Odisha'],
    flagEmoji: '🐚',
    description: 'An ancient classical language intimately woven with Lord Jagannath temple rituals, Raghurajpur Pattachitra, palm-leaf Tala Pattachitra etchings, and silver filigree.',
    culturalTieIn: 'Learn to discuss cloth preparation, natural mineral stone grinding, and palm leaf etchings with Chitrakar families in Raghurajpur.',
    lessons: [
      {
        id: 'odia_lvl1_1',
        levelNumber: 1,
        levelName: 'Level 1: Basic Foundations',
        title: 'Namaskara & Pattachitra Sacred Canvas',
        topic: 'Greetings & Jagannath Culture Vocabulary',
        culturalInsight: 'In Odisha, art is an act of Seva (sacred service) to Lord Jagannath, where colors are derived from ocean conch shells and sacred mineral stones.',
        vocabulary: [
          {
            nativeWord: 'ନମସ୍କାର',
            romanization: 'Namaskara',
            englishMeaning: 'Hello / Greetings',
            exampleSentenceNative: 'ସମସ୍ତଙ୍କୁ ନମସ୍କାର।',
            exampleSentenceEnglish: 'Greetings to everyone.'
          },
          {
            nativeWord: 'ପଟ୍ଟଚିତ୍ର',
            romanization: 'Pattachitra',
            englishMeaning: 'Cloth Scroll Painting',
            exampleSentenceNative: 'ରଘୁରାଜପୁରର ପଟ୍ଟଚିତ୍ର ବହୁତ ସୁନ୍ଦର।',
            exampleSentenceEnglish: 'The Pattachitra of Raghurajpur is very beautiful.'
          },
          {
            nativeWord: 'ଶଙ୍ଖ ରଙ୍ଗ',
            romanization: 'Shankha Ranga',
            englishMeaning: 'Conch Shell White Pigment',
            exampleSentenceNative: 'ଶଙ୍ଖ ଚୂର୍ଣ୍ଣରୁ ଧଳା ରଙ୍ଗ ତିଆରି ହୁଏ।',
            exampleSentenceEnglish: 'White color is prepared from powdered conch shell.'
          }
        ],
        questions: [
          {
            id: 'o_q1',
            type: 'multiple-choice',
            prompt: 'In traditional Odishan Pattachitra, what natural marine source yields the pure white pigment (Shankha Ranga)?',
            options: ['Conch Shells (ଶଙ୍ଖ)', 'Limestone', 'Rice Powder', 'Pearl Dust'],
            correctAnswer: 'Conch Shells (ଶଙ୍ଖ)',
            explanation: 'Artisans boil, grind, and filter sea conch shells to create bright, luminous white paint.'
          }
        ],
        rewardXP: 50
      },
      {
        id: 'odia_lvl2_1',
        levelNumber: 2,
        levelName: 'Level 2: Conversational (Artisans & Daily Life)',
        title: 'Exploring Raghurajpur & Pipli Applique',
        topic: 'Palm-Leaf Etchings & Festival Applique Canopy',
        culturalInsight: 'Tala Pattachitra involves incising palm leaves with an iron stylus (Lekhani) and rubbing lampblack into the fine incisions.',
        vocabulary: [
          {
            nativeWord: 'ତାଳପତ୍ର ଚିତ୍ର',
            romanization: 'Talapatra Chitra',
            englishMeaning: 'Palm-Leaf Etching',
            exampleSentenceNative: 'ତାଳପତ୍ରରେ ଲୁହା କଲମରେ ଚିତ୍ର ଅଙ୍କାଯାଏ।',
            exampleSentenceEnglish: 'Drawings are incised on palm leaves with an iron stylus.'
          },
          {
            nativeWord: 'ତାରକସି',
            romanization: 'Tarakasi',
            englishMeaning: 'Cuttack Silver Filigree',
            exampleSentenceNative: 'କଟକର ତାରକସି କାମ ଅତ୍ୟନ୍ତ ସୂକ୍ଷ୍ମ।',
            exampleSentenceEnglish: 'Cuttack silver filigree is extremely delicate.'
          }
        ],
        questions: [
          {
            id: 'o_q2',
            type: 'translate',
            prompt: 'Translate: "କଟକର ତାରକସି କାମ ଅତ୍ୟନ୍ତ ସୂକ୍ଷ୍ମ।"',
            options: [
              'Cuttack silver filigree is extremely delicate.',
              'Puri temple kitchen serves Mahaprasad.',
              'The Konark sun temple wheels tell time.',
              'Let us buy Sambalpuri handloom sarees.'
            ],
            correctAnswer: 'Cuttack silver filigree is extremely delicate.',
            explanation: '"ସୂକ୍ଷ୍ମ" (sookshma) means delicate / ultra-fine.'
          }
        ],
        rewardXP: 75
      },
      {
        id: 'odia_lvl3_1',
        levelNumber: 3,
        levelName: 'Level 3: Master (Cultural Heritage & Art Idioms)',
        title: 'Geeta Govinda & Odissi Dance Nuances',
        topic: 'Jayadeva’s Devotional Poetry in Visual Art',
        culturalInsight: 'Poet Jayadeva’s Geeta Govinda (12th century) inspired both the visual compositions of Pattachitra and the abhinaya mudras of Odissi classical dance.',
        vocabulary: [
          {
            nativeWord: 'ଐତିହ୍ୟ',
            romanization: 'Aithihya',
            englishMeaning: 'Ancient Heritage / Sacred Lineage',
            exampleSentenceNative: 'ଓଡ଼ିଶାର କଳା ଓ ଐତିହ୍ୟ ଅତୁଳନୀୟ।',
            exampleSentenceEnglish: 'The art and heritage of Odisha is incomparable.'
          }
        ],
        questions: [
          {
            id: 'o_q3',
            type: 'fill-blank',
            prompt: 'Fill the blank: "ଓଡ଼ିଶାର କଳା ଓ _______ ଅତୁଳନୀୟ।" (The art and heritage of Odisha is incomparable.)',
            options: ['ଐତିହ୍ୟ (Aithihya / Heritage)', 'ପାଣି (Paani)', 'ରାସ୍ତା (Raasta)', 'ଘର (Ghara)'],
            correctAnswer: 'ଐତିହ୍ୟ (Aithihya / Heritage)',
            explanation: '"ଐତିହ୍ୟ" signifies timeless cultural heritage.'
          }
        ],
        rewardXP: 100
      }
    ]
  }
};
