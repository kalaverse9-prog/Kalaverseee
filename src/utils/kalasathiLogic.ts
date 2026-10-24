/**
 * KalaSathi Intent Detection, Input Validation, and Cultural Knowledge Engine
 * 
 * Accurately categorizes queries into:
 *  1. INAPPROPRIATE (harassment, sexual, abusive) -> safety rules
 *  2. GIBBERISH / UNCLEAR (random keys, repetition, nonsense) -> clarification request
 *  3. UNRELATED (weather, cricket, python coding, jokes, world capitals) -> polite redirection
 *  4. UNFAMILIAR (unidentifiable term claimed/asked as an art form) -> clarification request (no fabrication)
 *  5. ART_RELATED (traditional Indian arts, folk paintings, handicrafts, techniques, materials, history, significance, ideas)
 *     -> concise, focused, direct answers + follow-up context tracking.
 */

export type KalaSathiIntentCategory =
  | 'SELF_HARM'
  | 'INAPPROPRIATE'
  | 'GIBBERISH'
  | 'UNRELATED'
  | 'UNFAMILIAR'
  | 'GREETING'
  | 'ART_RELATED';

export type ArtSubIntent =
  | 'EXPLANATION'
  | 'HOW_TO'
  | 'MATERIALS'
  | 'SIGNIFICANCE'
  | 'MOTIFS'
  | 'IDEA'
  | 'GENERAL';

export interface ArtFormKnowledge {
  id: string;
  name: string;
  hindiName: string;
  state: string;
  aliases: string[];
  conciseExplanation: {
    en: string;
    hi: string;
    hinglish: string;
  };
  conciseMaterials: {
    en: string;
    hi: string;
    hinglish: string;
  };
  conciseHowTo: {
    en: string;
    hi: string;
    hinglish: string;
  };
  conciseSignificance: {
    en: string;
    hi: string;
    hinglish: string;
  };
  conciseMotifs: {
    en: string;
    hi: string;
    hinglish: string;
  };
  conciseIdea: {
    en: string;
    hi: string;
    hinglish: string;
  };
}

export const ART_FORMS_DATABASE: Record<string, ArtFormKnowledge> = {
  madhubani: {
    id: 'madhubani',
    name: 'Madhubani / Mithila Painting',
    hindiName: 'मधुबनी / मिथिला चित्रकला',
    state: 'Bihar',
    aliases: ['madhubani', 'mithila', 'bharni', 'katchni', 'kachni', 'godna', 'kohbar', 'jitwarpur', 'matubani', 'madhubani painting', 'mithila art', 'मधुबनी', 'मिथिला', 'कचनी', 'भरनी', 'गोदना'],
    conciseExplanation: {
      en: 'Madhubani (or Mithila) painting is a centuries-old folk art from the Mithila region of Bihar. It is recognized by its vibrant natural colors, prominent double-line borders with geometric hatching (Katchni) or solid color fills (Bharni), and depictions of nature, deities, and wedding ceremonies.',
      hi: 'मधुबनी (मिथिला) चित्रकला बिहार के मिथिलांचल की प्राचीन लोक कला है। इसकी मुख्य पहचान दोहरी रूपरेखा (double-line border), प्राकृतिक रंगों का प्रयोग और ज्यामितीय रेखाओं (कचनी) या समतल रंगों (भरनी) से प्रकृति, देवी-देवताओं व मांगलिक प्रतीकों का चित्रण है।',
      hinglish: 'Madhubani (Mithila) painting Bihar ke Mithila region ki famous folk art hai. Isme double-line borders, geometric hatching (Katchni) ya solid color fills (Bharni), aur natural colors se nature aur deities banaye jaate hain.'
    },
    conciseMaterials: {
      en: 'Traditional Madhubani materials include:\n• **Base**: Handmade Wasli paper or cotton cloth (traditionally treated with cow dung/rice paste).\n• **Drawing Tools**: Sharpened bamboo twigs/nibs or matchsticks wrapped in cotton.\n• **Natural Pigments**: Lamp soot (black), raw turmeric (yellow), indigo leaves (blue), Palash/Aparajita flowers (red/orange), and lime/rice paste (white).',
      hi: 'पारंपरिक मधुबनी चित्रकला की सामग्रियां:\n• **आधार**: हस्तनिर्मित वास्ली कागज़ या सूती वस्त्र (पारंपरिक रूप से गोबर व लेप से तैयार)।\n• **कलम**: नुकीली बाँस की सींकें या रुई लिपटी तीली।\n• **प्राकृतिक वर्ण**: दीपक का काजल (काला), हल्दी (पीला), नील (नीला), पलाश व अपराजिता पुष्प (लाल/केसरिया), और पिसा हुआ चावल (सफेद)।',
      hinglish: 'Madhubani me traditional materials use hote hain:\n• **Base**: Handmade Wasli paper ya cotton cloth.\n• **Tools**: Bamboo twigs (kalam) ya cotton wrapped sticks.\n• **Colors**: Lamp soot (kaala), haldi (peela), indigo (neela), flowers jaise Palash/Aparajita (laal/kesariya), aur rice paste (safed).'
    },
    conciseHowTo: {
      en: 'To make a Madhubani painting:\n1. **Border**: Draw a characteristic double-line geometric border around the paper.\n2. **Outline**: Sketch your central subject (such as fish, peacocks, tree of life, or deities) with fine black ink.\n3. **Detailing**: Fill inner areas with delicate hatching/cross-hatch lines (*Katchni*) or flat colors (*Bharni*).\n4. **Background**: Fill any remaining empty spaces with small floral or leaf motifs to honor the traditional *horror vacui* aesthetic.',
      hi: 'मधुबनी पेंटिंग बनाने के चरण:\n1. **सीमा रेखा (Border)**: कागज़ के चारों ओर पारंपरिक दोहरी रेखा वाला ज्यामितीय बॉर्डर बनाएं।\n2. **रूपरेखा (Outline)**: काली स्याही से मुख्य विषय (मत्स्य, मयूर, जीवन वृक्ष या देवता) की रूपरेखा खींचें।\n3. **भराव (Filling)**: आकृतियों को बारीक रेखाओं (*कचनी*) या समतल प्राकृतिक रंगों (*भरनी*) से भरें।\n4. **पृष्ठभूमि**: खाली स्थान न छोड़ें; आस-पास पत्ते, फूल और लताएं बनाकर सजाएं।',
      hinglish: 'Madhubani painting banane ke steps:\n1. **Border**: Pehle charo taraf traditional double-line geometric border draw karein.\n2. **Outline**: Black ink se central subject (machli, peacock, ya tree of life) ki outline banayein.\n3. **Fillings**: Andar fine cross-hatching (*Katchni*) ya solid colors (*Bharni*) bharein.\n4. **Background**: Khali jagah me chote floral motifs ya leaves banakar complete karein.'
    },
    conciseSignificance: {
      en: 'Culturally, Madhubani paintings were created by women on the freshly plastered mud walls of bridal chambers (*Kohbar*) and courtyards to invoke fertility, prosperity, and cosmic harmony. Auspicious motifs like the sacred Fish (*Matsya*) signify fertility, the Peacock represents devotion and love, and the Lotus represents purity.',
      hi: 'सांस्कृतिक रूप से मधुबनी चित्रकला मिथिला की महिलाओं द्वारा मांगलिक अवसरों व कोहबर (विवाह कक्ष) की दीवारों पर समृद्धि और उर्वरता के आह्वान हेतु बनाई जाती थी। इसमें मत्स्य (मछली) उर्वरता और सौभाग्य का, मयूर प्रेम व भक्ति का, और कमल पवित्रता का प्रतीक है।',
      hinglish: 'Madhubani painting ka cultural significance prosperity aur fertility se juda hai. Yeh traditionally women dwara wedding chambers (Kohbar) aur festivals par banayi jaati thi. Isme Matsya (fish) fertility aur Lotus purity ka symbol hai.'
    },
    conciseMotifs: {
      en: 'Key Madhubani motifs include:\n• **Matsya (Fish)**: Fertility and good fortune.\n• **Mayura (Peacock)**: Grace and romantic devotion.\n• **Padma (Lotus)**: Spiritual purity and divine blessing.\n• **Kalpavriksha (Tree of Life)**: Interconnectedness of all life.',
      hi: 'मधुबनी के प्रमुख रूपांकन (Motifs):\n• **मत्स्य (मछली)**: उर्वरता और सौभाग्य।\n• **मयूर (मोर)**: पवित्र प्रेम और वर्षा का उल्लास।\n• **पद्म (कमल)**: आध्यात्मिक शुद्धि और देवी लक्ष्मी का वास।\n• **कल्पवृक्ष**: जीवन का ब्रह्मांडीय चक्र।',
      hinglish: 'Key Madhubani motifs:\n• **Matsya (Fish)**: Prosperity aur fertility.\n• **Peacock**: Prem aur grace.\n• **Lotus**: Purity aur auspiciousness.\n• **Tree of Life**: Nature ke sath balance.'
    },
    conciseIdea: {
      en: 'A great composition idea: Paint a central pair of arched sacred fishes facing each other in the *Katchni* line style, encircled by a ring of open lotus blossoms and framed with a double-line chevron border.',
      hi: 'एक सुंदर रचना विचार: केंद्र में दो घुमावदार पवित्र मछलियों (मत्स्य) को कचनी शैली में आमने-सामने बनाएं, जिसके चारों ओर खिले हुए कमल के फूलों का चक्र और दोहरा बॉर्डर हो।',
      hinglish: 'Ek creative composition idea: Center me do curved sacred fish face-to-face banayein fine Katchni lines me, aur charo taraf lotus flowers aur chevron border dein.'
    }
  },

  warli: {
    id: 'warli',
    name: 'Warli Folk Painting',
    hindiName: 'वारली लोक चित्रकला',
    state: 'Maharashtra',
    aliases: ['warli', 'varli', 'palghar', 'tarpa', 'dahanu', 'jawhar', 'warli art', 'warli painting', 'warlie', 'वारली', 'वरली', 'तारपा', 'पालघाट'],
    conciseExplanation: {
      en: 'Warli painting is a 2,500-year-old tribal art created by the Warli tribe in the Sahyadri mountains of Maharashtra. It is renowned for its minimalist visual language using simple geometric shapes—circles, triangles, and squares—drawn in white rice paste on earthy red-ochre mud backgrounds.',
      hi: 'वारली चित्रकला महाराष्ट्र के सह्याद्रि पर्वतीय क्षेत्र की वारली जनजाति की प्राचीन लोक कला है। इसमें केवल सरल ज्यामितीय आकृतियों—वृत्त, त्रिभुज और वर्ग—का उपयोग कर गेरू की लाल मिट्टी की पृष्ठभूमि पर सफेद चावल के लेप से प्रकृति और ग्रामीण जीवन दर्शाया जाता है।',
      hinglish: 'Warli painting Maharashtra ke Sahyadri hills ki ancient tribal art hai. Isme basic geometric shapes—circle, triangle, square—ka use karke red ochre (geru) base par white rice paste se painting banayi jaati hai.'
    },
    conciseMaterials: {
      en: 'Traditional Warli materials include:\n• **Background Base**: Red ochre mud (*Geru*), cow dung, and water plaster applied to walls or handmade canvas.\n• **Paint**: White pigment prepared from grounded rice flour paste mixed with water and natural gum.\n• **Stylus**: A small chewed or cut bamboo twig used as a fine paintbrush.',
      hi: 'पारंपरिक वारली चित्रकला की सामग्रियां:\n• **पृष्ठभूमि आधार**: गेरू (लाल मिट्टी), गोबर और पानी का प्लास्टर कागज़ या दीवार पर।\n• **रंग**: पिसे हुए सफेद चावल के आटे और गोंद का गाढ़ा मिश्रण।\n• **तूलिका (Brush)**: चबाई हुई या तराशी हुई बाँस की सींक।',
      hinglish: 'Warli art ke traditional materials:\n• **Base**: Red ochre (*Geru*) ya mud base.\n• **Color**: Chawal ka aata (white rice paste) mixed with tree gum.\n• **Brush**: Bamboo stick (kalam) jiski tip ko chew karke brush jaisa banaya jata hai.'
    },
    conciseHowTo: {
      en: 'To make a Warli painting:\n1. **Base**: Prepare a warm terracotta or red-ochre background.\n2. **Human Figures**: Form human and animal bodies using two inverted triangles meeting at the tip (symbolizing balance of masculine and feminine energy).\n3. **Limbs & Head**: Add a simple circle for the head and straight dashes for arms and legs.\n4. **Scene Composition**: Draw common daily scenes like the circular Tarpa dance, farming, harvest, or the sacred tree of life.',
      hi: 'वारली पेंटिंग बनाने के चरण:\n1. **आधार**: गेरुआ या भूरी पृष्ठभूमि तैयार करें।\n2. **मानव आकृतियां**: दो उल्टे त्रिभुजों को नोक पर मिलाकर धड़ बनाएं (यह प्रकृति के संतुलन का प्रतीक है)।\n3. **अंग व मुख**: सिर के लिए छोटा गोला और हाथ-पैरों के लिए सरल रेखाएं खींचें।\n4. **दृश्य रचना**: घेरेदार तारपा नृत्य, कृषि कार्य या जीवन वृक्ष का दृश्य चित्रित करें।',
      hinglish: 'Warli painting kaise banayein:\n1. **Base**: Red ochre ya terracotta brown background taiyar karein.\n2. **Human figures**: Do inverted triangles ko tip par jodkar body banayein.\n3. **Head & limbs**: Head ke liye circle aur arms/legs ke liye simple lines draw karein.\n4. **Scene**: Center me circular Tarpa dance ya harvest scene banayein.'
    },
    conciseSignificance: {
      en: 'Warli paintings represent a deep harmony with Mother Earth. Unlike court miniature arts, Warli does not depict mythological gods or royalty; it celebrates everyday community life, harvest, maternal nature (*Mother Goddess Palaghata*), and the infinite cyclical rhythm of nature symbolized by the circular *Tarpa* dance.',
      hi: 'वारली चित्रकला प्रकृति और मनुष्य के अटूट संबंध का उत्सव है। इसमें महलों या पौराणिक युद्धों के बजाय दैनिक सामुदायिक जीवन, फसल कटाई, धरती माता (पालघाट देवी) और तारपा नृत्य के माध्यम से जीवन के कभी न समाप्त होने वाले चक्र को दर्शाया जाता है।',
      hinglish: 'Warli painting ka cultural significance nature ke sath harmony hai. Isme deities ya kings ke bajay village community, harvest, Mother Goddess Palaghata, aur life cycle ko Tarpa dance ke through celebrate kiya jata hai.'
    },
    conciseMotifs: {
      en: 'Key Warli motifs:\n• **Tarpa Dance**: Circular community dance symbolizing the unending cycle of life.\n• **Two Triangles**: Man and nature in equilibrium.\n• **Mother Goddess Palaghata**: Symbol of fertility and corn harvest.\n• **Sacred Animals**: Bullocks, horses, and birds living in ecological peace.',
      hi: 'वारली के मुख्य रूपांकन:\n• **तारपा नृत्य**: जीवन के निरंतर चक्र का प्रतीक गोल नृत्य।\n• **दो त्रिभुज**: पुरुष और प्रकृति का संतुलन।\n• **पालघाट देवी**: उर्वरता और अन्न की देवी।\n• **पशु-पक्षी**: बैल, मोर और गाय जो ग्रामीण सह-अस्तित्व को दर्शाते हैं।',
      hinglish: 'Warli ke key motifs: Circular Tarpa dance, Palaghata devi (fertility), aur do triangles se bane human figures jo nature ke balance ko darshate hain.'
    },
    conciseIdea: {
      en: 'A classic composition: Paint a village festival scene with musicians playing the spiral *Tarpa* horn at the center, surrounded by concentric rings of dancers holding hands under a crescent moon and starry sky.',
      hi: 'सुंदर विचार: केंद्र में तारपा वादक और उसके चारों ओर हाथ थामे गोल घेरे में नाचते ग्रामीणों का दृश्य बनाएं, जिसके ऊपर अर्धचंद्र और तारे चमक रहे हों।',
      hinglish: 'Composition idea: Center me spiral Tarpa horn bajata musician, charo taraf circular line me dancing villagers, aur background me huts aur crescent moon.'
    }
  },

  pattachitra: {
    id: 'pattachitra',
    name: 'Raghurajpur / Odisha Pattachitra',
    hindiName: 'पट्टचित्र (ओडिशा व बंगाल)',
    state: 'Odisha / West Bengal',
    aliases: ['pattachitra', 'patachitra', 'raghurajpur', 'patua', 'puri', 'jagannath', 'patachitro', 'pattachitra painting', 'पट्टचित्र', 'पटचित्र', 'रघुराजपुर', 'जगन्नाथ'],
    conciseExplanation: {
      en: 'Pattachitra is a classical scroll painting tradition rooted in Odisha (especially Raghurajpur) and Bengal. Done on treated cloth (*Patta*) or palm leaves (*Talapatra*), it is distinguished by crisp mythological narratives, bold theatrical eyes, intricate floral margins, and 100% natural stone and mineral pigments.',
      hi: 'पट्टचित्र ओडिशा (विशेषकर रघुराजपुर) और बंगाल की प्राचीन चित्रकला परंपरा है। यह सूती वस्त्र (पट्ट) या ताड़पत्र पर तैयार की जाती है। इसकी पहचान तीखे नयन-नक्श, भगवान जगन्नाथ व कृष्ण लीला की कथाएं, समृद्ध पुष्प बॉर्डर और पूरी तरह प्राकृतिक पत्थरों के रंग हैं।',
      hinglish: 'Pattachitra Odisha (Raghurajpur) aur Bengal ki classical scroll painting hai. Yeh treated cloth (patta) ya palm leaf par banti hai. Isme crisp linework, large expressive eyes, aur Lord Jagannath/Krishna ki mythological stories dikhayi jaati hain.'
    },
    conciseMaterials: {
      en: 'Traditional Pattachitra materials include:\n• **Canvas (*Patta*)**: Layers of cotton fabric bonded with paste made of tamarind seed powder and soft chalk stone powder, polished with sea shells.\n• **Brushes**: Fine animal hair brushes (traditionally squirrel or mongoose hair) mounted on bamboo holders.\n• **Natural Pigments**: Conch shell (*Shankha*) for white, lamp black (*Kajal*) for deep black, Hingula (cinnabar) for red, Haritala (orpiment) for yellow, and green from stone leaves.',
      hi: 'पट्टचित्र की पारंपरिक सामग्रियां:\n• **कैनवास (पट्ट)**: इमली के बीज के चूर्ण और खड़िया मिट्टी के लेप से जोड़े गए सूती वस्त्र की परतें, जिसे कौड़ी/शंख से घिसकर चिकना किया जाता है।\n• **तूलिका (Brushes)**: गिलहरी के बालों से बनी बारीक ब्रश।\n• **प्राकृतिक वर्ण**: शंख भस्म (सफेद), काजल (काला), हिंगुल (लाल), हरिताल (पीला) और नील (नीला)।',
      hinglish: 'Pattachitra materials:\n• **Canvas (Patta)**: Cotton cloth layers jise tamarind seed paste aur chalk powder se joda jata hai.\n• **Colors**: Conch shell powder (white), kajal (black), mineral stones like Hingula (red) aur Haritala (yellow).\n• **Finish**: Lacquer coating for water resistance.'
    },
    conciseHowTo: {
      en: 'To create a Pattachitra artwork:\n1. **Canvas Prep**: Treat layered cotton cloth with tamarind seed gum and chalk powder; dry and burnish until leathery smooth.\n2. **Rough Sketch**: Lightly delineate the composition using faint red or yellow natural wash.\n3. **Color Blocking (*Hingula/Ranga*)**: Fill primary body and costume colors with flat natural tones.\n4. **Fine Contours & Motifs**: Outline with dense black (*Kala*) linework, accentuate the eyes, and frame with intricate decorative floral borders.',
      hi: 'पट्टचित्र बनाने की विधि:\n1. **पट्ट निर्माण**: सूती कपड़े पर इमली के बीज का लेप लगाकर सुखाएं और पत्थर से घिसकर चिकना कैनवास बनाएं।\n2. **हल्का रेखांकन**: हल्के पीले या लाल रंग से प्रारंभिक रूपरेखा बनाएं।\n3. **रंग भरना**: पोशाकों और देह में प्राकृतिक रंग भरें।\n4. **बारीक आउटलाइन**: गाढ़ी काली स्याही से नयन और वस्त्राभूषणों की बारीक रेखाएं खींचें व पुष्प बॉर्डर बनाएं।',
      hinglish: 'Pattachitra banane ka tarika:\n1. Cloth canvas ko tamarind paste se prepare aur burnish karein.\n2. Faint sketch banayein.\n3. Flat natural pigments se base colors bharein.\n4. Fine black ink se sharp outline, expressive eyes aur ornate floral borders banayein.'
    },
    conciseSignificance: {
      en: 'Pattachitra is deeply sacred to Lord Jagannath in Puri. During the ritual bathing festival (*Snana Yatra*), when the temple deities fall ill and rest in seclusion for 15 days (*Anavasara*), painted Pattachitras (*Anavasara Patti*) are worshiped in the sanctum sanctorum in place of the wooden idols.',
      hi: 'पट्टचित्र पुरी के भगवान जगन्नाथ के साथ आध्यात्मिक रूप से जुड़ा है। स्नान यात्रा के बाद जब भगवान 15 दिनों के लिए एकांतवास (अणसर) में जाते हैं, तब गर्भगृह में दर्शन व पूजा के लिए पट्टचित्र (अणसर पट्टी) ही स्थापित किए जाते हैं।',
      hinglish: 'Pattachitra Jagannath Temple (Puri) se deeply connected hai. Snana Yatra ke baad jab deities 15 days ke Anavasara period me rehte hain, tab temple me darshan ke liye Anavasara Patti (Pattachitra) hi rakhi jaati hai.'
    },
    conciseMotifs: {
      en: 'Key Pattachitra motifs:\n• **Jagannath, Balabhadra, Subhadra**: Iconic large circular eyes and stylized facial contours.\n• **Krishna Leela**: Kaliya Damana, Vastra Harana, and Rasa Leela.\n• **Ornate Floral Borders**: Multi-tiered creepers framing the narrative panel.',
      hi: 'मुख्य रूपांकन:\n• **जगन्नाथ त्रिमूर्ति**: बड़े गोल नयन और दैवीय स्वरूप।\n• **कृष्ण लीला**: कालिया दमन और रासलीला के दृश्य।\n• **पुष्प व लता बॉर्डर**: चारों तरफ बारीक अलंकृत हाशिए।',
      hinglish: 'Key motifs: Lord Jagannath ke circular divine eyes, Krishna leela episodes, Dasavatara, aur detailed multi-layer floral borders.'
    },
    conciseIdea: {
      en: 'Paint an oval central medallion of Lord Krishna playing the flute under the Kadamba tree, framed by a continuous ornamental vine border (*Lata*) with miniature dancing peacocks in the corners.',
      hi: 'रचना विचार: कदंब वृक्ष के नीचे वेणु बजाते भगवान श्रीकृष्ण का मनमोहक रूप बनाएं, जिसके चारों ओर बारीक पुष्प-बेलों (लता) और कोनों में मयूरों का बॉर्डर हो।',
      hinglish: 'Composition idea: Kadamba tree ke niche bansuri bajate Krishna ji ka portrait, charo taraf detailed floral creeper border ke sath.'
    }
  },

  kalamkari: {
    id: 'kalamkari',
    name: 'Srikalahasti Kalamkari',
    hindiName: 'कलमकारी (श्रीकालहस्ती व मछलीपट्टनम)',
    state: 'Andhra Pradesh / Telangana',
    aliases: ['kalamkari', 'srikalahasti', 'machilipatnam', 'kalam', 'pedana', 'kalamkari art', 'kalamkaree', 'कलमकारी', 'श्रीकालहस्ती', 'मछलीपट्टनम'],
    conciseExplanation: {
      en: 'Kalamkari (literally "pen craftsmanship") is an ancient hand-painted or block-printed cotton textile art from Andhra Pradesh. The Srikalahasti style is completely drawn freehand using a sharpened bamboo reed pen (*Kalam*) with vegetable dyes and temple-inspired epic narratives.',
      hi: 'कलमकारी (कलम + कारीगरी) आंध्र प्रदेश की प्राचीन सूती वस्त्र चित्रकला है। श्रीकालहस्ती शैली में बाँस की कलम और प्राकृतिक वानस्पतिक रंगों से पूरी तरह हाथ से रामायण, महाभारत और पौराणिक देवताओं के चित्र बनाए जाते हैं।',
      hinglish: 'Kalamkari Andhra Pradesh ki ancient textile art hai. Srikalahasti style me bamboo pen (kalam) se 100% freehand temple narratives, deities, aur peacocks natural dyes ke sath cotton cloth par draw kiye jaate hain.'
    },
    conciseMaterials: {
      en: 'Traditional Kalamkari materials include:\n• **Fabric**: Unbleached organic cotton treated with buffalo milk and myrobalan fruit extract.\n• **Pen (*Kalam*)**: Sharpened bamboo reed with a ball of wool wrapped near the tip to act as an ink reservoir.\n• **Natural Inks**: Fermented iron and jaggery (*Kasim*) for jet black, Madder root for red, Indigo leaves for blue, and Pomegranate rind for yellow.',
      hi: 'कलमकारी की सामग्रियां:\n• **कपड़ा**: भैंस के दूध और हरड़ (Myrobalan) के रस में संसाधित सूती कपड़ा।\n• **कलम**: बाँस की नोकदार सींक जिस पर स्याही के सोखने हेतु ऊनी धागा बंधा होता है।\n• **रंग**: लोहे और गुड़ के किण्वन से बनी काली स्याही (कसीस), मजीठ की जड़ (लाल), नील (नीला), और अनार का छिलका (पीला)।',
      hinglish: 'Kalamkari materials:\n• **Fabric**: Cotton processed with buffalo milk & myrobalan (harda).\n• **Kalam**: Bamboo reed jisme wool reservoir bandha hota hai.\n• **Colors**: Fermented jaggery/iron (black Kasim), madder root (red), indigo (blue).'
    },
    conciseHowTo: {
      en: 'To make freehand Kalamkari:\n1. **Fabric Prep**: Soak cloth in myrobalan and buffalo milk to prevent dye bleeding.\n2. **Charcoal Sketch**: Trace light outlines using burnt tamarind twigs.\n3. **Black Linework**: Draw bold permanent outlines with the bamboo Kalam dipped in fermented iron-jaggery ink (*Kasim*).\n4. **Coloring & Washing**: Paint vegetable dyes inside contours, followed by river water washing and boiling with madder root.',
      hi: 'कलमकारी बनाने की विधि:\n1. **कपड़ा शोधन**: कपड़े को हरड़ और दूध में भिगोकर धूप में सुखाएं।\n2. **रेखांकन**: इमली की कोयला तीली से हल्के रेखाचित्र बनाएं।\n3. **कलम से आउटलाइन**: बाँस की कलम को कसीस (लोहे-गुड़ की स्याही) में डुबोकर पक्की रूपरेखा खींचें।\n4. **रंगाई व धुलाई**: प्राकृतिक वानस्पतिक रंग भरें और बहते जल में धोकर तांबे के बर्तन में उबालें।',
      hinglish: 'Kalamkari process:\n1. Milk and myrobalan wash.\n2. Tamarind charcoal se preliminary sketch.\n3. Bamboo pen aur Kasim ink se black outline.\n4. Natural vegetable colors fill karein aur water wash karein.'
    },
    conciseSignificance: {
      en: 'Originating as temple backdrops (*Kalamkari Vriksha* and wall hangings), Kalamkari was used by traveling bards and temple storytellers to narrate divine epics. The motifs symbolize cosmic grace, purity, and reverence for holy rivers and nature.',
      hi: 'कलमकारी का उद्भव मंदिरों के वस्त्र-पट के रूप में हुआ, जिनका उपयोग पौराणिक कथावाचक जनमानस को रामायण व महाभारत की कथाएं सुनाने के लिए करते थे। इसके मयूर और कल्पवृक्ष पवित्रता और प्रकृति की दिव्यता के प्रतीक हैं।',
      hinglish: 'Kalamkari historically temples ke backdrop panels aur storytelling ke liye use hoti thi. Iska cultural connection temple worship aur oral folklore narration se hai.'
    },
    conciseMotifs: {
      en: 'Key Kalamkari motifs: The Royal Peacock (*Mayura*), Tree of Life (*Kalpavriksha*), floral paisley swirls (*Karru*), and divine avatars.',
      hi: 'प्रमुख रूपांकन: राजहंस, मयूर, कल्पवृक्ष (जीवन वृक्ष) और पारंपरिक आंभी (पैस्ले/अंबी) के अलंकृत डिजाइन।',
      hinglish: 'Key motifs: Royal peacock, Tree of Life (Kalpavriksha), lotus ponds, and paisley (aambi) patterns.'
    },
    conciseIdea: {
      en: 'Composition idea: A royal crowned peacock with blooming plumage standing beside a flowering Tree of Life, set against a rich natural indigo-blue background.',
      hi: 'रचना विचार: गहरे नीले नील (Indigo) की पृष्ठभूमि पर कल्पवृक्ष के निकट अपने सुंदर पंख फैलाए हुए मुकुटधारी मयूर का चित्र बनाएं।',
      hinglish: 'Idea: Deep indigo background par flowering Tree of Life ke sath crowned peacock draw karein.'
    }
  },

  pichwai: {
    id: 'pichwai',
    name: 'Pichwai Painting',
    hindiName: 'पिछवाई चित्रकला',
    state: 'Rajasthan',
    aliases: ['pichwai', 'pichhwai', 'nathdwara', 'shrinathji', 'pichwai painting', 'pichvai', 'पिछवाई', 'पिचवाई', 'नाथद्वारा', 'श्रीनाथजी'],
    conciseExplanation: {
      en: 'Pichwai is a 400-year-old devotional cloth painting tradition from Nathdwara, Rajasthan. Literally meaning "at the back" (*pichh-wai*), these large ornate textile artworks are hung behind the idol of Shrinathji (Lord Krishna as a child) to celebrate seasons and divine festivals.',
      hi: 'पिछवाई राजस्थान के नाथद्वारा की 400 वर्ष पुरानी भक्तिमयी चित्रकला है। इसका शाब्दिक अर्थ है "पीछे लटकने वाला" (पिछ-वाई)। यह भव्य वस्त्र कला श्रीनाथजी (बाल कृष्ण) के विग्रह के पीछे उत्सवों और ऋतुओं के अनुसार श्रृंगार के रूप में लगाई जाती है।',
      hinglish: 'Pichwai Rajasthan ke Nathdwara ki 400-year-old traditional art hai. "Pichh-wai" ka matlab piche latkane wala cloth. Yeh Shrinathji ke idol ke peeche temple decoration ke liye hang ki jaati hai.'
    },
    conciseMaterials: {
      en: 'Pichwai materials:\n• **Surface**: Starched handwoven cotton fabric.\n• **Pigments**: Natural stone pigments (lapis lazuli blue, malachite green, cinnabar red, yellow ochre).\n• **Gold Embellishments**: Pure 24K gold foil (*Swarna Vark*) applied with gum arabic.\n• **Brushes**: Fine goat-hair and squirrel-hair brushes.',
      hi: 'सामग्रियां:\n• **आधार**: माड़ी लगा हुआ हाथ से बुना सूती कपड़ा।\n• **रंग**: प्राकृतिक कीमती पत्थर (लाजवर्त, हरिताल, हिंगुल) और वनस्पति रंग।\n• **स्वर्ण**: 24-कैरेट शुद्ध सोने का वर्क और सोने की स्याही।\n• **तूलिका**: गिलहरी और बकरी के बालों की कोमल ब्रश।',
      hinglish: 'Pichwai materials:\n• Starched cotton cloth base.\n• Real stone minerals (lapis lazuli, malachite) & pure 24K gold foil (swarna vark).\n• Fine squirrel-hair brushes.'
    },
    conciseHowTo: {
      en: 'To make a Pichwai:\n1. **Base**: Coat cotton cloth with natural starch and polish with agate stone.\n2. **Sketch**: Trace deity or holy cow outlines with coal/red wash.\n3. **Coloring**: Layer vibrant mineral tempera colors.\n4. **Gold Detailing**: Apply 24K gold leaf to jewelry and garments, and outline figures with delicate dark strokes.',
      hi: 'बनाने के चरण:\n1. कपड़े को मांड़ लगाकर अकीक पत्थर से घिसें।\n2. श्रीनाथजी या कामधेनु गायों का हल्का रेखांकन करें।\n3. खनिज रंगों की परतें लगाएं।\n4. आभूषणों व वस्त्रों पर 24K सोने का वर्क लगाएं और बारीक रेखाओं से श्रृंगार उभारें।',
      hinglish: 'Steps: Cotton cloth ko starch aur burnish karein, light outline draw karein, mineral pigments fill karein, aur gold leaf se jewelry highlight karein.'
    },
    conciseSignificance: {
      en: 'Pichwai embodies pure devotion (*Pushtimarg Bhakti*). Each painting depicts specific festivals like Annakut, Sharad Purnima (night under the full moon), or monsoons, invoking divine joy and communion with Lord Krishna.',
      hi: 'पिछवाई पुष्टिमार्गीय भक्ति का प्रत्यक्ष स्वरूप है। इसमें अन्नकूट, शरद पूर्णिमा और वर्षा ऋतु जैसे उत्सवों में श्रीनाथजी के दिव्य बाल स्वरूप की लीलाओं का गुणगान किया जाता है।',
      hinglish: 'Pichwai Pushtimarg Bhakti tradition se judi hai. Yeh festivals jaise Sharad Purnima, Annakut, aur Krishna prem ko celebrate karti hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: Holy Kamadhenu cows with handprints (*Chhap*), dancing peacocks, lotus ponds (*Kamal Talav*), and Kadamba trees.',
      hi: 'प्रमुख रूपांकन: कामधेनु गायें (हाथ के छापों सहित), खिले हुए कमल दल, नाचते मोर और कदंब की छांव।',
      hinglish: 'Key motifs: Sacred Kamadhenu cows, blooming pink lotuses, and Shrinathji posture.'
    },
    conciseIdea: {
      en: 'Paint two adorned Kamadhenu cows with decorative silver neck-bells gazing affectionately toward a pond of blooming pink lotuses on a deep indigo night.',
      hi: 'रचना विचार: गहरे नीले आकाश के नीचे खिले हुए गुलाबी कमलों के सरोवर के दोनों ओर खड़ी अलंकृत कामधेनु गायों का सुंदर चित्र बनाएं।',
      hinglish: 'Idea: Indigo background par blooming lotuses ke talab ke paas do decorated Kamadhenu cows face-to-face banayein.'
    }
  },

  gond: {
    id: 'gond',
    name: 'Gond Tribal Painting',
    hindiName: 'गोंड जनजातीय चित्रकला',
    state: 'Madhya Pradesh',
    aliases: ['gond', 'gondi', 'jangarh', 'patangarh', 'dindori', 'gond art', 'gond painting', 'गोंड', 'गोंडी', 'डिंडोरी', 'जंगढ़'],
    conciseExplanation: {
      en: 'Gond painting is an imaginative tribal art form of the Gond Pradhan community in Madhya Pradesh. Famous for its vibrant colors, dynamic animal/nature silhouettes, and meticulous internal patterns of repetitive dots and dashes, it transforms daily folklore into mystical visual poetry.',
      hi: 'गोंड चित्रकला मध्य प्रदेश के गोंड प्रधान समुदाय की जीवंत आदिवासी कला है। इसकी सबसे बड़ी विशेषता आकृतियों के भीतर बारीक बिंदुओं (dots) और छोटी-छोटी रेखाओं (dashes) के अनूठे दोहराव से बना पैटर्न है जो प्रकृति और लोककथाओं को जीवंत करता है।',
      hinglish: 'Gond painting Madhya Pradesh ki Pradhan Gond tribe ki colorful art hai. Isme birds, animals aur trees ke andar repetitive dots aur fine dashes se intricate patterns banaye jaate hain.'
    },
    conciseMaterials: {
      en: 'Traditional Gond materials: Handmade paper or canvas, fine round nibs/brushes, and natural colors sourced from colored soils (*Peeli Mitti*), charcoal (*Kala*), leaves (*Hara*), and cow dung.',
      hi: 'सामग्रियां: हस्तनिर्मित कागज़ या कैनवास, बारीक ब्रश, और रंगीन मिट्टी (पीली व गेरू मिट्टी), लकड़ी का कोयला और पत्तियों से निकाले गए प्राकृतिक रंग।',
      hinglish: 'Materials: Handmade paper/canvas, fine point brushes, aur colored clay/soils, charcoal, aur plant extracts.'
    },
    conciseHowTo: {
      en: 'To make Gond art:\n1. Draw a bold, organic silhouette of an animal, bird, or tree.\n2. Fill sections with bright, flat contrasting colors.\n3. Meticulously texture every surface with uniform rhythmic dots, fine dashes, or fish-scale arches to infuse the subject with visual energy.',
      hi: 'विधि:\n1. किसी पशु, पक्षी या कल्पवृक्ष की घुमावदार रूपरेखा बनाएं।\n2. विभिन्न भागों में चटख रंग भरें।\n3. पूरी आकृति के भीतर एकसमान लयबद्ध बिंदु (dots) या छोटी रेखाएं (dashes) बनाकर पैटर्न पूरा करें।',
      hinglish: 'How to make: Bold animal/tree outline draw karein, bright base colors fill karein, aur har hisse me rhythmic dots aur fine dashes se pattern bharein.'
    },
    conciseSignificance: {
      en: 'The Gonds believe that viewing good artwork brings good luck (*Bhagirath*). In their animistic world, trees, animals, and rivers possess spirits, and the painting honors the sacred soul dwelling inside every living being.',
      hi: 'गोंड मान्यता के अनुसार सुंदर चित्र देखने से सौभाग्य और समृद्धि आती है। गोंड संस्कृति में पेड़, नदियां और पशु सभी में आत्मा का वास माना जाता है, और यह कला उस आंतरिक चेतना को नमन करती है।',
      hinglish: 'Gond tradition me mana jata hai ki achi art dekhne se good luck aata hai. Har animal aur tree me divine spirit hoti hai jise yeh art reflect karti hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: The Mahua tree, flying deer, spotted birds, peacocks, and intertwined serpent deities.',
      hi: 'प्रमुख रूपांकन: महुआ का पेड़, उड़ते हुए बारहसिंगा, चिड़ियां, हाथी और नाग देवता।',
      hinglish: 'Key motifs: Mahua Tree of Life, spotted deer, multi-colored birds, aur elephants.'
    },
    conciseIdea: {
      en: 'Paint a majestic Hornbill perched on a spiral-branched Mahua tree, filled with emerald green and saffron yellow dots against a midnight blue sky.',
      hi: 'रचना विचार: घुमावदार शाखाओं वाले महुआ वृक्ष पर बैठी एक धनेश (Hornbill) चिड़िया का चित्र बनाएं, जिसके पंखों में पीले और हरे बिंदुओं का सुंदर पैटर्न हो।',
      hinglish: 'Idea: Spiral-branched Mahua tree par baithi Hornbill bird banayein, jiske feather patterns yellow aur green dots se textured hon.'
    }
  },

  tanjore: {
    id: 'tanjore',
    name: 'Thanjavur (Tanjore) Painting',
    hindiName: 'तंजौर / तंजावूर चित्रकला',
    state: 'Tamil Nadu',
    aliases: ['tanjore', 'thanjavur', 'tanjavur', 'tanjore painting', 'thanjavur art', 'तंजौर', 'तंजावूर', 'तंजावुर'],
    conciseExplanation: {
      en: 'Thanjavur (Tanjore) painting is a regal classical South Indian art form originating in Tamil Nadu during the Maratha and Nayaka courts. It is famed for its relief gesso work, glittering 24K gold foil overlays, semi-precious Jaipur gemstones, and iconic rounded portraits of deities in ornate architectural arches.',
      hi: 'तंजावूर (तंजौर) चित्रकला तमिलनाडु की शाही शास्त्रीय कला है। इसकी भव्य पहचान उभरे हुए गेसो (Gesso) रिलीफ वर्क, 24-कैरेट शुद्ध सोने के वर्क, जयपुर के रत्नों और सुंदर अलंकृत मेहराबों में विराजित गोल-मटोल बाल कृष्ण व देवी-देवताओं के विग्रह हैं।',
      hinglish: 'Tanjore painting Tamil Nadu ki royal classical art hai. Isme 3D relief gesso work, 24K pure gold foil, semi-precious stones, aur ornate wooden frames me deities ka portrait banaya jata hai.'
    },
    conciseMaterials: {
      en: 'Tanjore materials:\n• **Board**: Jackfruit or teak wood board covered with glued cotton cloth.\n• **Gesso Paste**: Chalk powder (*Sukka*) mixed with Arabic gum for 3D embossed relief work.\n• **Gold & Stones**: 24-karat pure gold foil sheets and Jaipur glass stones/uncut gems.\n• **Colors**: Rich poster or natural pigment tempera.',
      hi: 'सामग्रियां:\n• **फलक (Board)**: कटहल या सागौन की लकड़ी का तख्ता सूती कपड़े से मढ़ा हुआ।\n• **उभार लेप (Gesso)**: खड़िया मिट्टी और गोंद का गाढ़ा मिश्रण जिससे 3D उभार बनता है।\n• **स्वर्ण व रत्न**: 24-कैरेट असली सोने का वर्क और जयपुर के रंगीन रत्न/कुंदन।\n• **रंग**: चटख पारंपरिक रंग।',
      hinglish: 'Materials: Teakwood board with cotton cloth, chalk-gum gesso paste for 3D relief, 24K real gold foil sheets, aur semi-precious stones.'
    },
    conciseHowTo: {
      en: 'To create a Tanjore painting:\n1. Prepare the wooden board with cotton fabric and smooth chalk paste.\n2. Sketch the deity and architectural arch (*Prabhavali*).\n3. Apply gesso paste to build 3D relief on pillars, crowns, and jewelry, embedding stones.\n4. Apply 24K gold foil over the dried gesso, and finally paint vibrant colors on the divine face and body.',
      hi: 'बनाने की विधि:\n1. लकड़ी के बोर्ड पर कपड़ा चिपकाकर खड़िया लेप से समतल सतह तैयार करें।\n2. मेहराब और देवता का रेखांकन करें।\n3. मुकुट, खंभों और आभूषणों पर गेसो का उभरा हुआ 3D लेप लगाएं और रत्न जड़ें।\n4. सूखे उभार पर 24K सोने का वर्क चिपकाएं और अंत में मुखमंडल में सौम्य रंग भरें।',
      hinglish: 'Steps: Board prepare karein, sketch banayein, gesso paste se 3D relief banakar stones lagayein, 24K gold foil chipkayein, aur face/body par fine painting karein.'
    },
    conciseSignificance: {
      en: 'Tanjore paintings serve as sacred household altars and temple sanctum icons. The luminous gold and shimmering gems are intended to catch flickering oil lamp light in darkened pooja rooms, invoking divine presence and regal grandeur.',
      hi: 'तंजौर चित्रकला पूजा घरों में साक्षात् देव-प्रतिमा के रूप में स्थापित की जाती है। सोने का वर्क और रत्न अंधेरे गर्भगृह में दीपक की लौ से जगमगा उठते हैं, जो दिव्य अलौकिक आभा का संचार करते हैं।',
      hinglish: 'Tanjore art sacred pooja rooms ke liye banayi jaati hai. Deepak (diya) ki light me real gold foil aur stones sparkle karte hain jo divine temple atmosphere create karte hain.'
    },
    conciseMotifs: {
      en: 'Key motifs: Baby Krishna (*Makhan Chor*), Goddess Lakshmi, Lord Ganesha, and elaborate Maratha archways (*Prabhavali*).',
      hi: 'प्रमुख रूपांकन: मक्खन चोर बाल कृष्ण, गजलक्ष्मी, विघ्नहर्ता गणेश और अलंकृत मेहराब (प्रभासा/तोरण)।',
      hinglish: 'Key motifs: Baby Krishna with butter pot, Goddess Lakshmi, and grand temple archways.'
    },
    conciseIdea: {
      en: 'Paint a seated Balaji (Lord Venkateswara) or butter-eating Krishna adorned with an embossed 24K gold crown, framed by a multi-tiered gem-studded Tanjore temple arch.',
      hi: 'रचना विचार: अलंकृत मेहराब के नीचे माखन की मटकी लिए बैठे बाल कृष्ण का चित्र बनाएं, जिसमें मुकुट और वस्त्र 24-कैरेट सोने के उभार में चमक रहे हों।',
      hinglish: 'Idea: Ornate temple arch ke andar butter pot ke sath Bal Krishna banayein, jisme crown aur jewelry 24K gold foil me embossed hon.'
    }
  },

  mysore: {
    id: 'mysore',
    name: 'Mysore Gold Gesso Painting',
    hindiName: 'मैसूर चित्रकला',
    state: 'Karnataka',
    aliases: ['mysore', 'mysore painting', 'mysore art', 'gesso mysore', 'karnataka art'],
    conciseExplanation: {
      en: 'Mysore painting is a classical South Indian art form developed under the patronage of the Wadiyar dynasty in Karnataka. Renowned for its subtle muted colors, delicate low-relief gesso linework, and pure gold foil overlay, it depicts classical Hindu deities with serene expressions and graceful anatomy.',
      hi: 'मैसूर चित्रकला कर्नाटक के वाडियार राजवंश के संरक्षण में विकसित शास्त्रीय चित्रकला है। यह अपने सौम्य रंगों, हल्के गेसो उभार (low-relief gesso) और शुद्ध स्वर्ण पत्र के सूक्ष्म कार्य के लिए प्रसिद्ध है, जिसमें देवी-देवताओं के शांत व सौम्य मुखमंडल बनाए जाते हैं।',
      hinglish: 'Mysore painting Karnataka ki royal art hai jo subtle muted colors, delicate gesso relief work, aur pure gold leaf embellishments ke sath serene deities ko depict karti hai.'
    },
    conciseMaterials: {
      en: 'Mysore painting materials:\n• **Base**: Handmade paper pasted on wooden board or cartouche paper.\n• **Gesso Paste**: White lead (*Kambada*) and gum arabic.\n• **Gold**: Pure 24K gold leaf.\n• **Colors**: Traditional water-based herbal and mineral pigments.',
      hi: 'सामग्रियां: लकड़ी के तख्ते पर चिपकाया गया हस्तनिर्मित कागज़, सफेदा व बबूल गोंद से बना गेसो लेप, 24K शुद्ध सोने का वर्क और सौम्य खनिज रंग।',
      hinglish: 'Materials: Wood base with paper, white lead & gum arabic gesso paste, pure 24K gold foil, aur natural water pigments.'
    },
    conciseHowTo: {
      en: 'To make a Mysore painting:\n1. Sketch the divine figure on prepared paper.\n2. Apply delicate gesso paste only on jewelry, crowns, and pillars for gentle relief.\n3. Burnish gold foil over the dried gesso.\n4. Paint soft, luminous colors on skin and drapery with delicate shading.',
      hi: 'विधि: प्रारंभिक रेखांकन करें, आभूषणों पर गेसो का सूक्ष्म उभार बनाएं, उस पर स्वर्ण पत्र चिपकाएं और मुखमंडल में सौम्य रंग भरें।',
      hinglish: 'Steps: Deity ka sketch banayein, jewelry par delicate gesso relief lagayein, gold foil chipkayein, aur soft colors se gentle shading karein.'
    },
    conciseSignificance: {
      en: 'Mysore paintings invoke *Shanta Rasa* (peace and spiritual tranquility). Unlike the heavy dramatic relief of Tanjore, Mysore paintings emphasize grace, modesty, and divine composure.',
      hi: 'मैसूर चित्रकला शांत रस और आध्यात्मिक शांति का संचार करती है। इसमें तंजौर के भारी उभार की तुलना में सूक्ष्म लालित्य और सौम्यता को प्राथमिकता दी जाती है।',
      hinglish: 'Mysore art Shanta Rasa (peace) ko depict karti hai, jisme loud colors ke bajay subtle grace aur divine tranquility par focus hota hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: Goddess Chamundeshwari, Rajarajeshwari, Rama Pattabhisheka, and Saraswati.',
      hi: 'प्रमुख रूपांकन: देवी चामुंडेश्वरी, राजराजेश्वरी, राम पट्टाभिषेक और वीणावादिनी सरस्वती।',
      hinglish: 'Key motifs: Goddess Saraswati, Chamundeshwari, and Rama Pattabhisheka.'
    },
    conciseIdea: {
      en: 'Composition idea: Goddess Saraswati seated gracefully on a white lotus holding the Veena, with gold foil embossing on her crown and pearls.',
      hi: 'रचना विचार: श्वेत कमल पर वीणा लिए विराजमान देवी सरस्वती का शांत चित्र, जिसमें मुकुट और वीणा पर सूक्ष्म स्वर्ण वर्क हो।',
      hinglish: 'Idea: White lotus par seated Goddess Saraswati veena bajate hue, subtle gold relief accents ke sath.'
    }
  },

  kangra: {
    id: 'kangra',
    name: 'Kangra Pahari Miniature',
    hindiName: 'कांगड़ा पहाड़ी लघुचित्रकला',
    state: 'Himachal Pradesh',
    aliases: ['kangra', 'pahari', 'guler', 'basohli', 'chamba', 'himachal miniature'],
    conciseExplanation: {
      en: 'Kangra painting is a lyrical school of Pahari miniature art that flourished in the Kangra valley of Himachal Pradesh under Raja Sansar Chand. Famed for its poetic romanticism, flowing fine lines, lush Himalayan landscapes, and tender depictions of Radha and Krishna, it captures the heights of devotional love (*Bhakti Rasa*).',
      hi: 'कांगड़ा चित्रकला हिमाचल प्रदेश की कांगड़ा घाटी में राजा संसार चंद के काल में विकसित पहाड़ी लघुचित्रकला है। यह अपने गीतात्मक सौंदर्य, अत्यंत कोमल रेखाओं, हरे-भरे हिमालयी दृश्यों और राधा-कृष्ण के निश्छल प्रेम चित्रण के लिए विश्वविख्यात है।',
      hinglish: 'Kangra painting Himachal Pradesh ki poetic Pahari miniature art hai. Isme flowing delicate lines, lush green Himalayan hills, aur Radha-Krishna ke tender divine love ko depict kiya jata hai.'
    },
    conciseMaterials: {
      en: 'Kangra materials: Sialkot handmade Wasli paper, fine bird-feather or squirrel-hair brushes, pure gold powder (*Kalam-dani* gold), and natural mineral pigments (vermilion, lapis lazuli, yellow ochre).',
      hi: 'सामग्रियां: सियालकोटी वास्ली कागज़, गिलहरी के बालों की अति बारीक तूलिका, सोने का चूर्ण और प्राकृतिक खनिज रंग।',
      hinglish: 'Materials: Wasli handmade paper, squirrel-hair brush, pure gold dust, aur natural mineral paints.'
    },
    conciseHowTo: {
      en: 'To create Kangra miniature:\n1. Prepare smooth Wasli paper with rice starch.\n2. Draw rhythmic, fluid outlines of figures and mountain slopes in sepia or faint red.\n3. Layer luminous opaque gouache colors.\n4. Add microscopic details to facial eyes, garments, and flowering trees with a single-hair brush.',
      hi: 'विधि: वास्ली कागज़ तैयार करें, हल्के लाल रंग से आकृतियों की सुकोमल रेखाएं खींचें, खनिज रंग भरें और बारीक ब्रश से नयन व वनस्पति की सूक्ष्म सजावट करें।',
      hinglish: 'Steps: Wasli paper smooth karein, faint red se fluid outline draw karein, opaque gouache colors layer karein, aur single-hair brush se fine eyes aur leaves draw karein.'
    },
    conciseSignificance: {
      en: 'Kangra art translates Jayadeva\'s *Gita Govinda* and classical Sanskrit poetry into visual melody, celebrating the soul\'s union with the divine through romantic metaphor.',
      hi: 'कांगड़ा कला जयदेव के गीत गोविंद और रीतिकालीन काव्य का चित्रात्मक संगीत है, जो आत्मा और परमात्मा के मिलन को राधा-कृष्ण के प्रेम के माध्यम से प्रस्तुत करती है।',
      hinglish: 'Kangra art Gita Govinda poetry ko visual form me present karti hai, celebrating divine Bhakti and love.'
    },
    conciseMotifs: {
      en: 'Key motifs: Radha-Krishna under flowering creepers, gazelle-like elongated eyes, rain clouds with golden lightning, and mountain streams.',
      hi: 'प्रमुख रूपांकन: कुंज-गलियों में राधा-कृष्ण, हिरणी जैसे नयन, मेघों में चमकती स्वर्णिम बिजली और हरी-भरी पहाड़ियां।',
      hinglish: 'Key motifs: Radha-Krishna under blooming trees, monsoon clouds with lightning, aur lush green mountains.'
    },
    conciseIdea: {
      en: 'Paint Radha and Krishna sharing a single decorative shawl under a sudden monsoon rain shower, surrounded by blooming Kadamba groves and perched peacocks.',
      hi: 'रचना विचार: सावन की रिमझिम फुहारों के बीच एक ही ओढ़नी की छांव में खड़े राधा-कृष्ण का दृश्य बनाएं, जिसके आस-पास मयूर और कदंब के वृक्ष हों।',
      hinglish: 'Idea: Monsoon rain ke dauran ek shawl ke niche Radha-Krishna, charo taraf green groves aur peacocks.'
    }
  },

  cheriyal: {
    id: 'cheriyal',
    name: 'Cheriyal Narrative Scroll',
    hindiName: 'चेरियाल स्क्रॉल चित्रकला',
    state: 'Telangana',
    aliases: ['cheriyal', 'cherial', 'nakashi', 'telangana scroll', 'cheriyal painting'],
    conciseExplanation: {
      en: 'Cheriyal scroll painting is a narrative folk art from Telangana practiced by the Nakashi artisan community. Painted in vertical comic-strip panels on treated khadi cloth with bold red backgrounds, these scrolls were historically carried by wandering bards to illustrate regional folklore and village epics.',
      hi: 'चेरियाल स्क्रॉल चित्रकला तेलंगाना के नक्काशी समुदाय की पारंपरिक कथा-वाचन लोक कला है। इसे खादी के लंबे स्क्रॉल पर लाल पृष्ठभूमि में कॉमिक्स की तरह क्रमिक खानों (panels) में बनाया जाता है, जिसका उपयोग घुमंतू कथाकार लोकगाथाएं सुनाने के लिए करते थे।',
      hinglish: 'Cheriyal scroll painting Telangana ki traditional storytelling art hai. Isme treated khadi cloth par bold red background me episodic narrative panels banaye jaate hain.'
    },
    conciseMaterials: {
      en: 'Cheriyal materials: Handwoven khadi cloth treated with tamarind seed paste and white clay (*Sudha Mattu*), sea shell white, fermented iron black, and stone mineral colors.',
      hi: 'सामग्रियां: खादी का कपड़ा, इमली के बीज का लेप और खड़िया मिट्टी, शंख भस्म (सफेद), लोहे की स्याही (काला) और प्राकृतिक खनिज रंग।',
      hinglish: 'Materials: Khadi canvas treated with tamarind seed paste & white mud, conch white, iron ink black, aur natural earth colors.'
    },
    conciseHowTo: {
      en: 'To make Cheriyal art:\n1. Coat khadi fabric with tamarind gum and chalk; polish smooth.\n2. Divide the canvas into distinct story panels framed by decorative floral bands.\n3. Paint deep crimson red backgrounds.\n4. Illustrate expressive village and mythological characters with bold profiles and large expressive eyes.',
      hi: 'विधि: खादी पर लेप लगाकर चिकना करें, कथा-पैनलों में विभाजित करें, लाल पृष्ठभूमि भरें और तीखे नयन-नक्श वाली ग्रामीण व पौराणिक आकृतियां बनाएं।',
      hinglish: 'Steps: Khadi cloth prepare karein, story panels me divide karein, bold red background paint karein, aur stylized character figures draw karein.'
    },
    conciseSignificance: {
      en: 'Cheriyal art forms the visual backbone of Telangana’s oral ballad traditions, celebrating community identity, folklore heroes, and pastoral life.',
      hi: 'चेरियाल चित्रकला तेलंगाना के ग्रामीण मौखिक इतिहास की जीवनरेखा है, जो समुदाय के नायकों और लोक उत्सवों को अमर बनाती है।',
      hinglish: 'Cheriyal art Telangana ki oral storytelling tradition ko visuals provide karti hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: Wandering bards, village musicians, farmers with bullock carts, and stylized folk deities.',
      hi: 'प्रमुख रूपांकन: लोकगाथा गायक, ढोलकिया, बैलगाड़ी वाले किसान और ग्रामीण देवी-देवता।',
      hinglish: 'Key motifs: Folk storytellers, village musicians, and local deities on crimson backgrounds.'
    },
    conciseIdea: {
      en: 'A three-panel narrative strip showing a village festival: musicians playing dholak in panel 1, elders under the banyan tree in panel 2, and women performing Bathukamma dance in panel 3.',
      hi: 'रचना विचार: तीन भागों में बंटा ग्रामीण दृश्य: पहले भाग में ढोलक वादक, दूसरे में बरगद नीचे चौपाल, और तीसरे में बतुकम्मा नृत्य करती महिलाएं।',
      hinglish: 'Idea: 3-panel strip showing village musicians, temple procession, aur women performing folk dance.'
    }
  },

  rogan: {
    id: 'rogan',
    name: 'Kutch Rogan Art',
    hindiName: 'रोगन कला (कच्छ, गुजरात)',
    state: 'Gujarat',
    aliases: ['rogan', 'rogan art', 'kutch rogan', 'nirona', 'castor oil art'],
    conciseExplanation: {
      en: 'Rogan art is a rare, 300-year-old textile painting craft preserved exclusively by the Khatri family in Nirona village, Kutch, Gujarat. Boiled castor oil is cooked into a dense resin jelly, mixed with mineral pigments, and stretched into fine paint threads using a blunt metal stylus without the tool ever directly touching the fabric.',
      hi: 'रोगन कला गुजरात के कच्छ (निरोना गाँव) के खत्री परिवार द्वारा संरक्षित अत्यंत दुर्लभ 300 वर्ष पुरानी वस्त्र कला है। इसमें अरंडी (कैस्टर) के तेल को कई दिनों तक उबालकर गाढ़ा जैल बनाया जाता है, जिसमें खनिज रंग मिलाकर लोहे की सलाई से धागे जैसा खींचकर बिना कपड़ा छुए जादुई डिजाइन उकेरे जाते हैं।',
      hinglish: 'Rogan art Kutch (Gujarat) ki rare craft hai. Isme boiled castor oil paste ko metal stylus se thread-like stretch karke cloth par bina touch kiye intricate symmetric patterns draw kiye jaate hain.'
    },
    conciseMaterials: {
      en: 'Rogan materials: Pure castor oil boiled for 48 hours to create jelly resin, mineral powder pigments, and a 6-inch blunt brass/iron metal stylus (*Sui*).',
      hi: 'सामग्रियां: 48 घंटे उबला हुआ अरंडी का तेल (जैल बेस), खनिज चूर्ण रंग, और 6 इंच लंबी लोहे या पीतल की सलाई।',
      hinglish: 'Materials: Boiled castor oil paste, colored mineral powders, aur blunt metal stylus rod.'
    },
    conciseHowTo: {
      en: 'To execute Rogan craft:\n1. Roll a small ball of colored castor oil paste in your palm using body heat.\n2. Draw fine paint threads off the paste using the metal stylus.\n3. Lay the paint threads onto one half of dark fabric.\n4. Fold the cloth in half and press gently to create a mirror-image symmetrical print.',
      hi: 'विधि: हथेली पर रोगन के गाढ़े लेप को गर्मी से नरम करें, लोहे की सलाई से रंग का बारीक धागा खींचकर कपड़े के एक हिस्से पर रखें, फिर कपड़े को मोड़कर दबाएं ताकि सममित (mirror) छाप बन जाए।',
      hinglish: 'Steps: Palm me paste ko warm karein, stylus se paint thread stretch karein, cloth ke ek side par pattern banayein aur cloth ko fold karke mirror print lein.'
    },
    conciseSignificance: {
      en: 'Rogan art is celebrated as a living national treasure of Gujarat, famous for its iconic "Tree of Life" which was gifted by Prime Minister Narendra Modi to world leaders.',
      hi: 'रोगन कला गुजरात की अमूल्य राष्ट्रीय धरोहर है। इसका "ट्री ऑफ लाइफ" रूपांकन अंतरराष्ट्रीय स्तर पर भारत के सांस्कृतिक गौरव का प्रतीक बन चुका है।',
      hinglish: 'Rogan art ka Tree of Life motif Gujarat ki iconic heritage hai jise international level par showcase kiya gaya hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: The Tree of Life, circular mandalas, geometric floral borders, and peacocks.',
      hi: 'प्रमुख रूपांकन: जीवन वृक्ष (Tree of Life), गोलाकार मंडला, पुष्प बेलें और मयूर।',
      hinglish: 'Key motifs: Iconic Tree of Life, circular floral mandalas, and symmetric borders.'
    },
    conciseIdea: {
      en: 'A grand symmetrical Tree of Life in golden yellow and white Rogan threads on deep black silk, radiating delicate curved branches filled with tiny blossoms.',
      hi: 'रचना विचार: गहरे काले रेशमी कपड़े पर सुनहरे-पीले और सफेद रंग के रोगन धागों से बना भव्य जीवन वृक्ष (Tree of Life) बनाएं।',
      hinglish: 'Idea: Black silk fabric par golden aur white Rogan threads se symmetric Tree of Life banayein.'
    }
  },

  lippan: {
    id: 'lippan',
    name: 'Kutch Lippan Mud & Mirror Art',
    hindiName: 'लिप्पन काम (कच्छ का मिट्टी व दर्पण शिल्प)',
    state: 'Gujarat',
    aliases: ['lippan', 'lippan kaam', 'lippan art', 'mud mirror', 'kutch mud art', 'mud work'],
    conciseExplanation: {
      en: 'Lippan Kaam (or Mud and Mirror work) is a traditional mural craft from the Kutch desert of Gujarat, practiced by the Rabari, Mutwa, and Marwada communities. Created by rolling clay coils onto walls and embedding tiny glittering mirrors (*Aabhla*), it keeps mud houses cool while reflecting desert sunlight and oil lamps.',
      hi: 'लिप्पन काम कच्छ (गुजरात) के रेगिस्तानी क्षेत्र की पारंपरिक दीवार शिल्प कला है, जिसे रबारी और मुतवा समुदाय की महिलाएं बनाती हैं। इसमें चिकनी मिट्टी और गोबर के पतले रोल बनाकर दीवारों पर ज्यामितीय आकृतियां बनाई जाती हैं और उनके बीच छोटे-छोटे चमकीले कांच (आभला) जड़े जाते हैं।',
      hinglish: 'Lippan Kaam Kutch (Gujarat) ki traditional mud and mirror craft hai. Isme clay dough ki thin coils se geometric patterns banakar unke beech small mirrors (aabhla) embed kiye jaate hain.'
    },
    conciseMaterials: {
      en: 'Lippan materials: Fine clay/multani mitti mixed with camel/cow dung or ceramic chalk powder and glue, water, and various geometric mirror pieces (rounds, diamonds, triangles).',
      hi: 'सामग्रियां: चिकनी मिट्टी, गोबर या सिरेमिक चॉक पाउडर, फेविकोल, पानी, और विभिन्न आकृतियों के छोटे कांच/आईने (गोल, चौकोर, त्रिकोण)।',
      hinglish: 'Materials: Clay / ceramic chalk dough, PVA glue, aur small cut mirrors (*Aabhla*).'
    },
    conciseHowTo: {
      en: 'To make Lippan art:\n1. Prepare a pliable clay dough with glue and chalk powder.\n2. Roll thin, uniform cylindrical clay coils with your palms.\n3. Trace geometric or mandala patterns on an MDF board or wall.\n4. Stick the clay coils along the lines and press small glass mirrors into the wet clay intersections. When dry, paint with white chalk paint.',
      hi: 'विधि: मिट्टी या चॉक का चिकना आटा गूंधें, पतली रोल बत्तियां बनाएं, बोर्ड पर ज्यामितीय मांडना बनाएं, मिट्टी की बत्तियों को चिपकाकर उनके बीच कांच जड़ें और सूखने पर सफेद पेंट करें।',
      hinglish: 'Steps: Dough banayein, thin coils roll karein, pattern outline par coils stick karein, beech me mirrors press karein, aur dry hone par pure white paint karein.'
    },
    conciseSignificance: {
      en: 'Lippan art turned rustic mud huts (*Bhungas*) into dazzling illuminated sanctuaries. The mirrors bounce the light of a single oil lamp to light up the entire desert hut at night.',
      hi: 'लिप्पन काम कच्छ के पारंपरिक गोल घरों (भूंगों) को ठंडा रखता है और रात में एक छोटे दीपक की रोशनी को कई गुना बढ़ाकर पूरे घर को रोशन कर देता है।',
      hinglish: 'Lippan art desert homes (Bhungas) ko cool rakhti hai aur single diya ki light ko mirrors se reflect karke pure room ko illuminate karti hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: Geometric concentric mandalas, peacocks, camels, the sun, and the Tree of Life.',
      hi: 'प्रमुख रूपांकन: गोलाकार ज्यामितीय चक्र, मयूर, ऊंट, सूर्य और कल्पवृक्ष।',
      hinglish: 'Key motifs: Circular mandalas, peacocks, camels, and sacred sun designs.'
    },
    conciseIdea: {
      en: 'A central circular mandala framed by triangular borders, textured with white clay coils and inset with diamond and teardrop-shaped mirrors.',
      hi: 'रचना विचार: सफेद मिट्टी के उभार में बना केंद्रस्थ गोल मंडला, जिसके चारों ओर त्रिकोणीय बॉर्डर और हीरक व अश्रु-आकार के कांच जड़े हों।',
      hinglish: 'Idea: White clay relief se bana concentric circular mandala jisme center me round mirror aur arms me diamond mirrors hon.'
    }
  },

  thangka: {
    id: 'thangka',
    name: 'Tibetan-Indian Thangka Scroll Art',
    hindiName: 'थांगका चित्रकला (सिक्किम व लद्दाख)',
    state: 'Sikkim / Ladakh',
    aliases: ['thangka', 'thanka', 'tibetan scroll', 'sikkim art', 'buddhist scroll', 'थांगका', 'थांका', 'सिक्किम'],
    conciseExplanation: {
      en: 'Thangka painting is a sacred Buddhist scroll art preserved in Sikkim, Ladakh, and Himachal Pradesh. Painted on cotton or silk canvas mounted with brocade, it follows rigorous mathematical grid proportions (*Iconometry*) to depict Buddha, Bodhisattvas, and cosmological mandalas.',
      hi: 'थांगका चित्रकला सिक्किम, लद्दाख और हिमाचल प्रदेश में संरक्षित पवित्र बौद्ध स्क्रॉल कला है। इसे सूती या रेशमी कपड़े पर सोने और खनिज रंगों से सख्त ज्यामितीय अनुपातों (Iconometry) के अनुसार बनाया जाता है, जिसमें भगवान बुद्ध, बोधिसत्व और मंडला चित्रित होते हैं।',
      hinglish: 'Thangka painting Sikkim aur Ladakh ki sacred Buddhist scroll art hai. Isme strict geometric proportions aur natural mineral pigments/gold se Lord Buddha aur Mandalas paint kiye jaate hain.'
    },
    conciseMaterials: {
      en: 'Thangka materials:\n• **Canvas**: Stretched cotton treated with animal hide glue and chalk powder, polished with a conch shell.\n• **Pigments**: Mineral pigments like malachite (green), azurite (blue), cinnabar (red), and real 24K gold dust (*Ser*).\n• **Brushes**: Fine yak-hair or sable brushes.',
      hi: 'सामग्रियां: सरेस व खड़िया से लेपित सूती कैनवास, लापिस लाजुली व हिंगुल जैसे खनिज पत्थर के रंग, शुद्ध 24K सोने की स्याही और याक के बालों की बारीक तूलिका।',
      hinglish: 'Materials: Cotton canvas polished with conch shell, real 24K gold dust ink, cinnabar, malachite, aur yak-hair brushes.'
    },
    conciseHowTo: {
      en: 'To make a Thangka:\n1. Draw precise proportional geometric grids (*Tig-tse*).\n2. Sketch the deity contours adhering strictly to sacred canons.\n3. Apply flat mineral colors from lighter to darker tones.\n4. Paint facial features in meditative silence, line with pure gold dust, and mount in silk brocade.',
      hi: 'विधि: पहले पवित्र ज्यामितीय ग्रिड बनाएं, देवता की शास्त्रीय रूपरेखा खींचें, खनिज रंग भरें, 24K सोने की स्याही से बारीक रेखाएं बनाएं और रेशमी ब्रोकेड में मढ़ें।',
      hinglish: 'Steps: Sacred geometric grid draw karein, deity sketch banayein, mineral base colors fill karein, gold ink se details dein, aur silk brocade me mount karein.'
    },
    conciseSignificance: {
      en: 'Thangkas serve as meditation tools (*Yantras*) for visualization in Vajrayana Buddhism. Painting or viewing a Thangka is considered a sacred act of accumulating spiritual merit (*Karma*).',
      hi: 'थांगका केवल कला नहीं बल्कि ध्यान का साधन (साधना) है। इसे बनाना और देखना आत्मिक शांति और पुण्य संचय का माध्यम माना जाता है।',
      hinglish: 'Thangka art meditation aur spiritual contemplation ka sacred medium hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: Shakyamuni Buddha in Bhumisparsha mudra, White Tara, Wheel of Life (Bhavachakra), and Kalachakra mandala.',
      hi: 'प्रमुख रूपांकन: भूमिस্পর্শ मुद्रा में बुद्ध, श्वेत तारा, भवचक्र और कालचक्र मंडला।',
      hinglish: 'Key motifs: Lord Buddha in meditation, White Tara, and intricate Mandalas.'
    },
    conciseIdea: {
      en: 'Paint a Shakyamuni Buddha in deep meditation seated upon a double lotus throne, encircled by radiant golden aura rays and stylized blue clouds.',
      hi: 'रचना विचार: दोहरे कमल आसन पर ध्यानस्थ भगवान बुद्ध का चित्र बनाएं, जिसके चारों ओर स्वर्णिम प्रभामंडल और पारलौकिक नीले मेघ हों।',
      hinglish: 'Idea: Double lotus throne par seated Buddha with golden aura and Himalayan blue clouds.'
    }
  },

  kerala_mural: {
    id: 'kerala_mural',
    name: 'Kerala Temple Mural Art',
    hindiName: 'केरल भित्ति चित्रकला',
    state: 'Kerala',
    aliases: ['kerala mural', 'kerala murals', 'temple mural', 'panchavarna', 'mattancherry', 'केरल भित्ति', 'केरल म्यूरल'],
    conciseExplanation: {
      en: 'Kerala mural painting is a classical fresco tradition found on ancient temple and palace walls (like Mattancherry and Padmanabhaswamy). Characterized by dynamic, theatrical poses, heavy decorative ornamentation, large expressive eyes, and an auspicious 5-color palette (*Panchavarna*), it portrays Hindu epic legends.',
      hi: 'केरल भित्ति चित्रकला मंदिरों और महलों की दीवारों पर उकेरी जाने वाली प्राचीन शास्त्रीय परंपरा है। इसकी पहचान पांच पावन प्राकृतिक रंगों (पंचवर्ण), बड़ी-बड़ी भावपूर्ण आंखों, भव्य आभूषणों और भगवान शिव, विष्णु व श्रीकृष्ण के नाटकीय पौराणिक स्वरूप हैं।',
      hinglish: 'Kerala mural art ancient temple walls ki fresco tradition hai. Isme Panchavarna (5 natural colors), large expressive eyes, aur heavy gold ornaments ke sath divine figures depict hote hain.'
    },
    conciseMaterials: {
      en: 'Kerala mural materials:\n• **Panchavarna Palette**: Red ochre, yellow ochre, green (from Eravikkara plant leaves), carbon lamp soot black, and pure white.\n• **Medium**: Neemb gum (*Vengai*) and tender coconut water used as binders.',
      hi: 'सामग्रियां: पंचवर्ण (लाल मिट्टी, पीली मिट्टी, पत्तियों का हरा रंग, काजल काला, और श्वेत चूना) तथा नीम का गोंद व नारियल पानी।',
      hinglish: 'Materials: 5 natural colors (Panchavarna: red, yellow, green, black, white), coconut water & neem gum binders.'
    },
    conciseHowTo: {
      en: 'To make a Kerala mural:\n1. Prepare an off-white ground.\n2. Sketch dynamic figures with yellow ochre wash.\n3. Lay flat base colors (greens for calm deities, reds/yellows for fiery powers).\n4. Apply fine stippling shading and finish with crisp black contour outlines.',
      hi: 'विधि: हल्के पीले रंग से देवता की गतिमान रूपरेखा बनाएं, पंचवर्ण रंग भरें, बिंदु-छायांकन (stippling) से गहराई लाएं और गाढ़ी काली रेखाओं से उभारें।',
      hinglish: 'Steps: Yellow outline karein, Panchavarna colors fill karein, fine stippling shading karein, aur sharp black outline se complete karein.'
    },
    conciseSignificance: {
      en: 'Created in adherence to the *Dhyana Shlokas* (sacred visualization verses of the Tantrasamuchaya), each Kerala mural captures the divine attributes and transcendent cosmic rhythm of temple deities.',
      hi: 'यह कला तंत्रसमुच्चय के ध्यान श्लोकों पर आधारित है, जो मंदिर में देवताओं की दिव्य ऊर्जा और सात्विक सौंदर्य को जागृत करती है।',
      hinglish: 'Kerala murals Dhyana Shlokas ke basis par divine cosmic rhythm ko express karte hain.'
    },
    conciseMotifs: {
      en: 'Key motifs: Anantasayanam Vishnu, Shiva Nataraja, Ganesha, and flute-playing Krishna with grazing cows.',
      hi: 'प्रमुख रूपांकन: अनंतशयनम् विष्णु, नटराज शिव, गजानन गणेश और वेणुगोपाल कृष्ण।',
      hinglish: 'Key motifs: Anantasayana Vishnu, Shiva Nataraja, and Venugopala Krishna.'
    },
    conciseIdea: {
      en: 'A radiant portrait of Lord Ganesha in warm ochre and emerald green, adorned with traditional temple crown and holding a sweet modak.',
      hi: 'रचना विचार: पन्ना हरे और गेरुआ रंगों में अलंकृत बाल गणेश का चित्र, जिसमें पारंपरिक मुकुट और मोदक का सुंदर अंकन हो।',
      hinglish: 'Idea: Emerald green and saffron ochre tones me crowned Lord Ganesha with modak.'
    }
  },

  kalighat: {
    id: 'kalighat',
    name: 'Kalighat Pat Art',
    hindiName: 'कालीघाट पट चित्रकला (कोलकाता, पश्चिम बंगाल)',
    state: 'West Bengal',
    aliases: ['kalighat', 'kalighat painting', 'kalighat pat', 'patua kolkata', 'कालीघाट', 'कालीघाट पट'],
    conciseExplanation: {
      en: 'Kalighat painting originated in the 19th century near the Kali temple in Kolkata, West Bengal. Created by rural Patua scroll painters on cheap mill-made paper, it is famous for swift, bold, sweeping brush contours, shaded watercolor volumes, and witty satirical depictions of colonial city life and Goddess Kali.',
      hi: 'कालीघाट चित्रकला 19वीं सदी में कोलकाता के काली मंदिर के पास विकसित हुई। ग्रामीण पटुआ कलाकारों द्वारा शुरू की गई यह कला अपनी तेज, निर्भीक व घुमावदार ब्रश रेखाओं, जलरंगों के छायांकन, मां काली के उग्र-सौम्य रूपों और औपनिवेशिक बाबू संस्कृति पर तीखे व्यंग्य के लिए प्रसिद्ध है।',
      hinglish: 'Kalighat painting 19th-century Kolkata (West Bengal) ki unique art hai. Isme bold sweeping brushstrokes, shaded contours, aur Goddess Kali/social satire scenes depict kiye jaate hain.'
    },
    conciseMaterials: {
      en: 'Kalighat materials: Hand-ground watercolor washes, broad squirrel-hair brushes, silver colloidal ink, and smooth mill-made or handmade paper.',
      hi: 'सामग्रियां: जलरंग (वाटरकलर वॉश), चौड़े गिलहरी-बाल ब्रश, चांदी की स्याही और चिकना कागज़।',
      hinglish: 'Materials: Smooth paper, transparent watercolor washes, broad squirrel-hair brush, aur silver ink.'
    },
    conciseHowTo: {
      en: 'To make a Kalighat painting:\n1. Lay down bold curvilinear graphite or faint wash outlines.\n2. Apply a transparent watercolor tone across the form.\n3. Swiftly blend a darker shade along the outer edges to create a 3D cylindrical volume.\n4. Accentuate with final crisp black calligraphic strokes and silver touches.',
      hi: 'विधि: घुमावदार रेखाचित्र बनाएं, पारदर्शी जलरंग भरें, किनारों पर गहरा रंग मिलाकर 3D उभार (छायांकन) दें और अंत में काली स्याही की तेज रेखाओं से विवरण पूरा करें।',
      hinglish: 'Steps: Fluid outline banayein, light wash fill karein, edge shading se rounded volume dein, aur bold black calligraphic strokes se complete karein.'
    },
    conciseSignificance: {
      en: 'Kalighat art bridges sacred Indian temple worship with modern urban secular satire. It was India’s first modern urban folk art movement, influencing legends like Jamini Roy.',
      hi: 'कालीघाट कला धार्मिक आस्था और आधुनिक सामाजिक व्यंग्य का अनूठा संगम है। इसने जामिनी रॉय जैसे आधुनिक भारतीय चित्रकारों को गहरा प्रभावित किया।',
      hinglish: 'Kalighat art India ki pehli modern urban folk art thi jisne Jamini Roy jaise masters ko inspire kiya.'
    },
    conciseMotifs: {
      en: 'Key motifs: Goddess Kali slaying the demon, Shiva-Parvati, Babu and Bibi in Victorian dress, and cats with prawns.',
      hi: 'प्रमुख रूपांकन: मां काली का स्वरूप, शिव-पार्वती, बाबू-बीबी और मछली पकड़े बिल्ली का प्रसिद्ध व्यंग्य।',
      hinglish: 'Key motifs: Goddess Kali, musicians, and famous satirical cat with prawn in mouth.'
    },
    conciseIdea: {
      en: 'Paint the powerful face of Goddess Kali with large expressive fish-shaped eyes and bold vermilion tongue, framed by sweeping calligraphic black hair curls.',
      hi: 'रचना विचार: मां काली का मुखमंडल बनाएं, जिसमें तीखे बड़े नयन, लाल जिह्वा और काले घुंघराले केशों का तेज बहाव हो।',
      hinglish: 'Idea: Bold calligraphic black strokes se Goddess Kali ka expressive face with large eyes and red tongue.'
    }
  },

  phulkari: {
    id: 'phulkari',
    name: 'Punjab Phulkari Heritage Craft',
    hindiName: 'फुलकारी शिल्प (पंजाब)',
    state: 'Punjab',
    aliases: ['phulkari', 'bagh', 'punjabi phulkari', 'khaddar embroidery', 'फुलकारी', 'पंजाब'],
    conciseExplanation: {
      en: 'Phulkari (literally "flower work") is the traditional geometric folk embroidery of Punjab. Handcrafted on homespun coarse cotton fabric (*Khaddar*) using untwisted silk floss (*Pat*) stitched from the reverse side, it creates luminous diamond, zigzag, and floral tapestries.',
      hi: 'फुलकारी (फूल + कारी) पंजाब की पारंपरिक हस्तशिल्प कढ़ाई कला है। इसे घर पर बुने मोटे खादी के कपड़े (खद्दर) पर पीछे की तरफ से बिना बटे कच्चे रेशमी धागे (पाट) से ज्यामितीय पुष्प और बाग़ के रूप में काढ़ा जाता है।',
      hinglish: 'Phulkari Punjab ki traditional floral and geometric embroidery craft hai. Yeh coarse cotton (Khaddar) par untwisted silk threads (Pat) se reverse darning stitch ke sath banayi jaati hai.'
    },
    conciseMaterials: {
      en: 'Phulkari materials: Handspun dyed coarse cotton (*Khaddar* in madder red, indigo blue, or black), untwisted silk floss thread (*Pat* in golden yellow, orange, and magenta), and a fine embroidery needle.',
      hi: 'सामग्रियां: हाथ का कता खद्दर (मोटे सूती कपड़ा), बिना ऐंठन का कच्चा रेशमी धागा (पाट), और बारीक कढ़ाई की सुई।',
      hinglish: 'Materials: Coarse Khaddar fabric, bright silk floss (*Pat*), aur fine embroidery needle.'
    },
    conciseHowTo: {
      en: 'To make Phulkari:\n1. Count threads on the coarse Khaddar fabric without pre-stamping.\n2. Work entirely from the reverse side using short and long darning stitches (*Topa*).\n3. Alternate vertical and horizontal stitch directions to catch light at different angles.\n4. Complete the entire field for an opulent heirloom shawl (*Bagh*).',
      hi: 'विधि: कपड़े के धागे गिनकर पीछे की ओर से सुई चलाएं, सीधे और आड़े टांके (Darning stitch) लगाकर ज्यामितीय फूल बनाएं ताकि रेशम पर रोशनी चमक सके।',
      hinglish: 'Steps: Khaddar threads count karein, reverse side se darning stitch karein, stitch directions alternate karke light sheen create karein.'
    },
    conciseSignificance: {
      en: 'Phulkari is an auspicious emblem of maternal love and bridal blessing in Punjab. Grandmothers and mothers lovingly embroider Chope and Bagh shawls for their daughters\' weddings as generational family heirlooms.',
      hi: 'फुलकारी पंजाब में मातृ-प्रेम और मांगलिक आशीर्वाद का प्रतीक है। नानी और दादी अपनी बेटियों और नातिनों के विवाह के लिए वर्षों तक यह शॉल काढ़ती हैं।',
      hinglish: 'Phulkari Punjab me bridal blessing aur generational family heirloom ka auspicious symbol hai.'
    },
    conciseMotifs: {
      en: 'Key motifs: Golden marigold flowers (*Gainda*), rolling waves (*Leheriya*), peacocks, and five-river geometric diamonds.',
      hi: 'प्रमुख रूपांकन: गेंदे का फूल, लहरिया, मयूर, पंच-नद (पांच नदियां) और ज्यामितीय चौप।',
      hinglish: 'Key motifs: Geometric diamond grids, marigold flowers, and wavy Leheriya lines.'
    },
    conciseIdea: {
      en: 'A vibrant geometric Bagh composition on deep madder-red cloth, filled with alternating diagonal chevron blocks in golden yellow and magenta silk stitches.',
      hi: 'रचना विचार: गहरे लाल खद्दर पर सुनहरे पीले और गुलाबी रेशम के टांकों से बना सुंदर ज्यामितीय फुलकारी बाग़ डिजाइन।',
      hinglish: 'Idea: Red Khaddar cloth par golden yellow aur hot pink silk stitches se diagonal geometric Bagh pattern.'
    }
  }
};

/**
 * List of recognized Indian art forms, crafts, techniques, and materials
 * to verify if a mentioned word is a legitimate traditional art topic.
 */
export const RECOGNIZED_ART_TERMS = new Set([
  // Core Painting traditions
  'madhubani', 'mithila', 'warli', 'varli', 'pattachitra', 'patachitra', 'kalamkari',
  'pichwai', 'pichhwai', 'pichvai', 'gond', 'tanjore', 'thanjavur', 'mysore',
  'kangra', 'pahari', 'cheriyal', 'rogan', 'lippan', 'kerala mural', 'kalighat',
  'phulkari', 'thangka', 'thanka', 'sanjhi', 'basohli', 'miniature', 'bikaner',
  'kishangarh', 'mewar', 'malwa', 'marwar', 'manjusha', 'tikuli', 'mata ni pachedi',
  'sohrai', 'khovar', 'saura', 'patua', 'nathdwara', 'srikalahasti', 'machilipatnam',
  'raghurajpur', 'jitwarpur', 'jawhar', 'dahanu',

  // Crafts, Handlooms & Sculptures
  'dhokra', 'dokra', 'channapatna', 'blue pottery', 'bidriware', 'bidri',
  'meenakari', 'chikankari', 'zardozi', 'ikat', 'pochampally', 'sambalpuri',
  'patola', 'bandhani', 'bandhej', 'block printing', 'sanganeri', 'bagru',
  'dabu', 'ajrakh', 'terracotta', 'bankura', 'sholapith', 'swamimalai',
  'chola bronze', 'kantha', 'sujani', 'kasuti', 'tussar', 'muga', 'eri',
  'banarasi', 'chanderi', 'maheshwari', 'kashmiri carpet', 'pashmina',
  'sozni', 'kani', 'walnut wood', 'papier mache', 'bell metal',

  // Techniques, Materials, & Iconography
  'kalam', 'wasli', 'gesso', 'kachni', 'katchni', 'bharni', 'godna', 'kohbar',
  'tarpa', 'geru', 'kasim', 'myrobalan', 'swarna vark', 'gold foil', 'natural dye',
  'natural dyes', 'natural pigments', 'tempera', 'mordant', 'indigo', 'turmeric',
  'lamp soot', 'kajal', 'conch shell', 'bamboo pen', 'tribhanga', 'mudra',
  'kalpavriksha', 'padma', 'lotus', 'mayura', 'peacock', 'matsya', 'fish',
  'horror vacui', 'prabhavali', 'rasa', 'chitrakar', 'folk art', 'tribal art',
  'handicraft', 'handicrafts', 'indian art', 'traditional art', 'traditional craft',
  'heritage art', 'indian painting', 'indian craft',
  
  // Everyday tools, materials and common artistic terms
  'brush', 'brushes', 'canvas', 'paper', 'cloth', 'fabric', 'cotton', 'silk',
  'wood', 'clay', 'mud', 'cowdung', 'mirror', 'mirrors', 'stone', 'pigment',
  'pigments', 'ink', 'color', 'colors', 'paint', 'painting', 'drawing', 'sketch',
  'linework', 'border', 'borders', 'motif', 'motifs', 'pattern', 'patterns',
  'symmetry', 'shading', 'stippling', 'contour', 'hatching', 'texture', 'proportions',
  'deity', 'deities', 'krishna', 'shiva', 'ganesha', 'vishnu', 'durga', 'kali',
  'tree', 'trees', 'flower', 'flowers', 'leaf', 'leaves', 'animal', 'animals',
  'cow', 'cows', 'elephant', 'elephants', 'deer', 'camel', 'camels', 'bird', 'birds'
]);

/**
 * Words/patterns indicating self-harm, suicide, self-injury, or crisis
 */
const SELF_HARM_PATTERNS = [
  /\b(kill\s*my\s*self|kms|suicide|commit\s*suicide|end\s*my\s*life|want\s*to\s*die|wish\s*i\s*was\s*dead|cutting\s*my\s*wrists?|cut\s*my\s*wrists?|slit\s*my\s*wrists?|hanging\s*my\s*self|hang\s*myself|overdose|overdosing|self[\s-]*harm|harming\s*myself|hurt\s*myself|hurting\s*myself|take\s*my\s*own\s*life|suicidal|don'?t\s*want\s*to\s*live|how\s*to\s*(die|commit\s*suicide|kill\s*myself)|ways\s*to\s*die|jumping\s*off\s*a\s*bridge|poison\s*myself|slit\s*throat)\b/i,
  /\b(आत्महत्या|खुदकुशी|मरना\s*चाहता|मरना\s*चाहती|जान\s*देना|जान\s*दे\s*दूँगा|फांसी\s*लगाना|खुद\s*को\s*नुकसान|हाथ\s*की\s*नस\s*काटना)\b/i,
  /\b(aatmhatya|khudkushi|mar\s*jaunga|mar\s*jaungi|marna\s*hai|marna\s*chahta|jaan\s*de\s*dunga|jaan\s*dena|khud\s*ko\s*khatam)\b/i
];

/**
 * Words/patterns indicating inappropriate, abusive, sexually explicit, violent, or insult queries
 */
const INSULT_PATTERNS = [
  /\b(ur|u\s*r|you\s*are|youre|you\'re)\s*(stupid|an?\s*idiot|dumb|fool|moron|retard|loser|useless|trash|garbage|crazy|blind|bad|shit|annoying)\b/i,
  /\b(idiot|stupid|dumb|moron|retard|fool|loser|shut\s*up|get\s*lost|you\s*suck|f\s*off|fuck\s*off|useless\s*bot|stupid\s*bot)\b/i,
  /\b(pagal|kamine|gadhe|gadha|bewakoof|bewkoof|saale|chirkut|kutta|ullu|bakwas|jahil)\b/i,
  /\b(ur|u\s*r|you\'re|youre|you\s*are)\s*(a\s*joke|a\s*clown|worthless)\b/i,
  /\b(how\s*to\s*make\s*a\s*bomb|make\s*explosives|buy\s*illegal\s*drugs|child\s*porn|cp|rape|sexual\s*assault|murder|how\s*to\s*kill\s*someone|how\s*to\s*poison)\b/i
];

const INAPPROPRIATE_KEYWORDS = [
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'porn', 'sex', 'nude',
  'naked', 'erotic', 'boobs', 'penis', 'vagina', 'chutiya', 'madarchod',
  'bhenchod', 'harami', 'randi', 'gaand', 'lund', 'tits', 'anal', 'blowjob',
  'hentai', 'rape', 'harass', 'kill yourself', 'terrorist', 'bomb make',
  'nsfw', 'xxx', 'horny', 'pussy', 'dick', 'cock', 'dildo', 'masturbat',
  'gangbang', 'incest', 'deepfake', 'gore', 'beheading', 'torture'
];

/**
 * Common off-topic patterns (unrelated topics)
 */
const UNRELATED_PATTERNS = [
  // World geography / non-Indian politics
  /capital of (france|germany|usa|america|england|russia|japan|china|italy|spain|brazil|canada|australia)/i,
  /फ्रांस की राजधानी|अमेरिका की राजधानी|राजधानी क्या है/i,
  /who is the president/i,
  /who is the prime minister of (uk|canada|usa|france)/i,
  
  // Weather forecasts
  /\bweather\b/i,
  /\btemperature\b/i,
  /\bforecast\b/i,
  /\bwill it rain\b/i,
  /\bmausam\b/i,
  /\bbarish\b/i,
  /मौसम/i,
  /बारिश/i,
  /तापमान/i,
  
  // Programming & Computing
  /\bpython\b/i,
  /\bjavascript\b/i,
  /\bc\+\+\b/i,
  /\bjava\b/i,
  /\bprogram\b/i,
  /\bcode\b/i,
  /\bcoding\b/i,
  /\balgorithm\b/i,
  /\bbinary search\b/i,
  /\breact\b/i,
  /\bhtml\b/i,
  /\bsql query\b/i,
  /\bdebug\b/i,
  /प्रोग्राम/i,
  /कोडिंग/i,
  /पायथन/i,
  
  // Sports & Games
  /\bcricket\b/i,
  /\bfootball\b/i,
  /\bipl\b/i,
  /\bmatch\b/i,
  /\bwho will win\b/i,
  /\bworld cup\b/i,
  /\bscore\b/i,
  /क्रिकेट/i,
  /मैच/i,
  /फुटबॉल/i,
  
  // Jokes & Casual entertainment
  /\btell me a joke\b/i,
  /\bjoke sunao\b/i,
  /\bsing a song\b/i,
  /\bgana sunao\b/i,
  /चुटकुला/i,
  /जोक/i,
  /गाना सुनाओ/i,
  /\bwho created you\b/i,
  /\bstock market\b/i,
  /\bbitcoin\b/i,
  /\bcrypto\b/i,
  /\bmedical advice\b/i,
  /\bhow to make money\b/i,
  /\b(math|equation|calculate|2\+2|solve)\b/i
];

/**
 * Follow-up detection patterns
 */
const FOLLOW_UP_PATTERNS = [
  /^(why|why\?|kyun|kyu|kyu\?|kyun\?)$/i,
  /^(explain more|tell me more|aur batao|aur bataiye|aur samjhao|elaborate|aur details)$/i,
  /^(what materials are needed\??|materials\??|materials needed\??|kya saman chahiye\??|konse rang use hote hai\??|saman\??)$/i,
  /^(how do i make it\??|how to make it\??|kaise banate hain\??|kaise banaye\??|kaise banta hai\??|process kya hai\??)$/i,
  /^(what does it mean\??|meaning\??|significance\??|prateek kya hai\??)$/i,
  /^(give me an idea|composition idea|aur idea do|kuch aur idea)$/i,
  /\b(materials needed|how to make it|explain more|tell me more|why is it|why is this)\b/i
];

/**
 * Detect polite greetings and welcome inquiries
 */
export function isGreeting(text: string): boolean {
  const clean = text.trim().toLowerCase().replace(/[?!.,।]/g, '');
  if (!clean) return false;
  const greetings = new Set([
    'hi', 'hello', 'hey', 'namaste', 'namaskar', 'pranam', 'pranaam', 'vanakkam',
    'namaskaram', 'nomoshkar', 'sasriakal', 'sat sri akal', 'good morning', 'good evening',
    'good afternoon', 'help', 'who are you', 'what can you do', 'who created you', 'kya kar sakte ho',
    'kaise ho', 'how are you', 'greetings', 'greeting', 'नमस्ते', 'प्रणाम', 'नमस्कार',
    'வணக்கம்', 'నమస్కారం', 'নমস্কার', 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', 'નમસ્તે'
  ]);
  if (greetings.has(clean)) return true;
  if (/^(hi|hello|hey|namaste|vanakkam)\s+(kala|kalasathi|kalayatri|there|everyone|sir|guru|mentor|ji)$/i.test(clean)) return true;
  if (/^(who\s+are\s+you|what\s+can\s+you\s+do|how\s+can\s+you\s+help\s+me)\b/i.test(clean)) return true;
  return false;
}

/**
 * Check if a text is gibberish or unclear input
 */
export function isGibberishOrUnclear(text: string): boolean {
  const trimmed = text.trim();
  if (trimmed.length === 0) return true;

  // Question mark or punctuation only strings: "??????", "!!!!!", "....", "???!!"
  if (/^[\p{P}\s]+$/u.test(trimmed)) {
    return true;
  }

  // Common keyboard mashing / repeated strings
  const lower = trimmed.toLowerCase();
  if (
    lower === 'asdfghjkl' ||
    lower === 'asdf' ||
    lower === 'qwerty' ||
    lower === 'qwertyuiop' ||
    lower === 'xyz123xyz' ||
    lower === 'xyz' ||
    lower === 'blablabla' ||
    lower === 'bla bla bla' ||
    lower === '123456' ||
    lower === 'abcdef'
  ) {
    return true;
  }

  // Repeated same character 4 or more times: "aaaaa", "zzzzzz"
  if (/^(.)\1{3,}$/.test(lower)) {
    return true;
  }

  // Letters-only string without vowels (and not known abbreviation/Hindi transliteration) of length > 5: "sdfghjkl"
  const cleanLetters = lower.replace(/[^a-z]/g, '');
  if (cleanLetters.length >= 6 && !/[aeiouy]/.test(cleanLetters)) {
    return true;
  }

  // Long sequence of consonants with no vowel break (keyboard spam)
  if (/[bcdfghjklmnpqrstvwxz]{7,}/i.test(lower)) {
    return true;
  }

  return false;
}

/**
 * Check if the input mentions self-harm, suicide, or crisis
 */
export function isSelfHarm(text: string): boolean {
  const lower = text.toLowerCase().trim();
  for (const pat of SELF_HARM_PATTERNS) {
    if (pat.test(lower)) {
      return true;
    }
  }
  return false;
}

/**
 * Check if the input is inappropriate, abusive, an insult, or harmful
 */
export function isInappropriate(text: string): boolean {
  const lower = text.toLowerCase().trim();
  for (const pat of INSULT_PATTERNS) {
    if (pat.test(lower)) {
      return true;
    }
  }
  for (const kw of INAPPROPRIATE_KEYWORDS) {
    // Word boundary check or substring for strong vulgarities
    const regex = new RegExp(`\\b${kw}\\b`, 'i');
    if (regex.test(lower) || lower.includes(` ${kw} `) || lower.startsWith(`${kw} `) || lower.endsWith(` ${kw}`)) {
      return true;
    }
  }
  return false;
}

/**
 * Check if the query is unrelated (weather, cricket, python, capital of france, jokes)
 */
export function isUnrelatedQuery(text: string): { isUnrelated: boolean; topic?: string } {
  const lower = text.toLowerCase().trim();

  for (const pattern of UNRELATED_PATTERNS) {
    if (pattern.test(lower)) {
      if (/capital of|राजधानी/i.test(lower)) return { isUnrelated: true, topic: 'world geography and non-Indian capitals' };
      if (/weather|mausam|rain|barish|मौसम|बारिश|तापमान/i.test(lower)) return { isUnrelated: true, topic: 'weather and meteorological forecasts' };
      if (/python|javascript|program|code|coding|algorithm|binary search|react|प्रोग्राम|कोडिंग|पायथन/i.test(lower)) return { isUnrelated: true, topic: 'computer programming and software engineering' };
      if (/cricket|ipl|football|match|score|who will win|क्रिकेट|मैच|फुटबॉल/i.test(lower)) return { isUnrelated: true, topic: 'sports and cricket matches' };
      if (/joke|gana|song|चुटकुला|मजाक|जोक|गाना/i.test(lower)) return { isUnrelated: true, topic: 'jokes and general entertainment' };
      if (/crypto|bitcoin|stock/i.test(lower)) return { isUnrelated: true, topic: 'cryptocurrency and financial stock trading' };
      if (/math|equation|calculate|2\+2/i.test(lower)) return { isUnrelated: true, topic: 'general arithmetic and non-art math' };
      return { isUnrelated: true, topic: 'general non-art topics' };
    }
  }

  return { isUnrelated: false };
}

/**
 * Check if a query is unrelated to travel, heritage tours, artisan clusters, or craft experiences
 */
export function isUnrelatedTravelQuery(text: string): { isUnrelated: boolean; topic?: string } {
  const lower = text.toLowerCase().trim();

  // Legitimate travel queries should NOT be marked unrelated even if they mention season or weather
  const isTravelIntent = /\b(visit|tour|trip|travel|itinerary|ticket|book|booking|stay|hotel|route|reach|train|station|airport|flight|timing|schedule|morning|evening|afternoon|accessibility|wheelchair|food|cuisine|thali|lunch|dinner|breakfast|artisan|workshop|craft|trail|cluster|gi tag|payout|guide|cost|budget|price|rupee|rs|inr|how to go|kaise jaye|kab jaye|best time|best month|best season|mausam kaisa|weather in)\b/i.test(lower);

  // If travel intent is clear and it does not mention programming/crypto/sports, it is related
  if (isTravelIntent && !/\b(python|javascript|coding|cricket|ipl|crypto|bitcoin|stock)\b/i.test(lower)) {
    return { isUnrelated: false };
  }

  // Purely unrelated off-topic categories
  if (/\b(python|javascript|c\+\+|java|react|code|coding|algorithm|binary search|html|css|sql|debug|developer|programming)\b/i.test(lower)) {
    return { isUnrelated: true, topic: 'computer programming and software development' };
  }
  if (/\b(cricket|football|ipl|match|score|who will win|world cup|fifa|tournament)\b/i.test(lower)) {
    return { isUnrelated: true, topic: 'sports matches and games' };
  }
  if (/\b(crypto|bitcoin|ethereum|stock market|shares|mutual fund|trading)\b/i.test(lower)) {
    return { isUnrelated: true, topic: 'cryptocurrency and financial stock trading' };
  }
  if (/\b(tell me a joke|joke sunao|sing a song|gana sunao|चुटकुला|जोक|गाना)\b/i.test(lower)) {
    return { isUnrelated: true, topic: 'jokes and general casual entertainment' };
  }
  if (/\b(math|equation|calculate|2\+2|algebra|calculus)\b/i.test(lower)) {
    return { isUnrelated: true, topic: 'mathematical calculations' };
  }
  if (/capital of (france|germany|usa|america|england|russia|japan|china|italy|spain|brazil|canada|australia)/i.test(lower)) {
    return { isUnrelated: true, topic: 'world geography and non-Indian capitals' };
  }
  if (/who is the president of usa|who is the prime minister of (uk|canada|usa|france)/i.test(lower)) {
    return { isUnrelated: true, topic: 'international political figures' };
  }

  return { isUnrelated: false };
}

/**
 * Extract active art form from query or conversation history
 */
export function resolveArtForm(
  query: string,
  history: Array<{ role: string; content?: string; text?: string }>,
  selectedArtFormFallback?: string
): ArtFormKnowledge | null {
  const queryLower = query.toLowerCase();

  // 1. Direct match in query
  for (const key of Object.keys(ART_FORMS_DATABASE)) {
    const art = ART_FORMS_DATABASE[key];
    for (const alias of art.aliases) {
      if (queryLower.includes(alias)) {
        return art;
      }
    }
  }

  // 2. Look back in conversation history (from newest to oldest)
  if (Array.isArray(history) && history.length > 0) {
    for (let i = history.length - 1; i >= 0; i--) {
      const msg = history[i];
      const msgText = (msg.content || msg.text || '').toLowerCase();
      for (const key of Object.keys(ART_FORMS_DATABASE)) {
        const art = ART_FORMS_DATABASE[key];
        for (const alias of art.aliases) {
          if (msgText.includes(alias)) {
            return art;
          }
        }
      }
    }
  }

  // 3. Fallback to user-selected dropdown art form if valid
  if (selectedArtFormFallback) {
    const fallbackLower = selectedArtFormFallback.toLowerCase();
    for (const key of Object.keys(ART_FORMS_DATABASE)) {
      const art = ART_FORMS_DATABASE[key];
      for (const alias of art.aliases) {
        if (fallbackLower.includes(alias)) {
          return art;
        }
      }
    }
  }

  return null;
}

/**
 * Check if the query contains an unfamiliar single word / made-up term that is not in recognized art databases
 */
export function detectUnfamiliarTerm(query: string): string | null {
  const clean = query.trim().replace(/[?!.,]/g, '').trim();

  // NEVER treat greetings as unfamiliar
  if (isGreeting(clean)) return null;

  // Question patterns explicitly inquiring about an unknown art style
  const questionPatterns = [
    /^(?:is there an art (?:form|called)|is|what is|tell me about)\s+([a-zA-Z]{3,25})\s+(?:art|painting|craft|technique)$/i,
    /^(?:kya)\s+([a-zA-Z]{3,25})\s+(?:art|painting|craft|kala)\s+(?:hai|hoti hai)$/i
  ];

  for (const pat of questionPatterns) {
    const match = clean.match(pat);
    if (match && match[1]) {
      const candidate = match[1].toLowerCase();
      // Extensive set of standard words and art concepts that should NEVER be unfamiliar
      const standardWords = new Set([
        'art', 'painting', 'craft', 'color', 'colors', 'paint', 'canvas', 'history', 'materials',
        'process', 'why', 'how', 'what', 'who', 'when', 'style', 'ideas', 'idea', 'paper', 'cloth',
        'cotton', 'silk', 'wood', 'stone', 'brush', 'brushes', 'kalam', 'border', 'motif', 'motifs',
        'pigment', 'pigments', 'dye', 'dyes', 'sketch', 'shading', 'flower', 'flowers', 'tree', 'trees',
        'peacock', 'lotus', 'fish', 'cow', 'temple', 'deity', 'folk', 'tribal', 'classical', 'indian',
        'traditional', 'heritage', 'symmetry', 'texture', 'linework', 'contour', 'drawing', 'steps',
        'begin', 'start', 'learn', 'teach', 'practice', 'advice', 'tip', 'tips', 'help'
      ]);
      if (standardWords.has(candidate)) return null;
      if (RECOGNIZED_ART_TERMS.has(candidate)) return null;

      for (const key of Object.keys(ART_FORMS_DATABASE)) {
        if (ART_FORMS_DATABASE[key].aliases.some(a => a.includes(candidate) || candidate.includes(a))) {
          return null;
        }
      }

      // If it looks like a made-up/alien word not in standard words or art terms
      if (candidate.length >= 4) {
        return candidate;
      }
    }
  }

  return null;
}

/**
 * Detect sub-intent (Materials, How-To, Significance, Motifs, Idea, Explanation)
 */
export function detectSubIntent(query: string): ArtSubIntent {
  const lower = query.toLowerCase();

  // Materials
  if (
    lower.includes('material') ||
    lower.includes('pigment') ||
    lower.includes('color') ||
    lower.includes('rang') ||
    lower.includes('brush') ||
    lower.includes('kalam') ||
    lower.includes('saman') ||
    lower.includes('samagri') ||
    lower.includes('सामग्री') ||
    lower.includes('रंग') ||
    lower.includes('समान') ||
    lower.includes('सामान') ||
    lower.includes('ink')
  ) {
    return 'MATERIALS';
  }

  // How-To / Process
  if (
    lower.includes('how do i make') ||
    lower.includes('how to make') ||
    lower.includes('how to paint') ||
    lower.includes('how to draw') ||
    lower.includes('kaise banate') ||
    lower.includes('kaise banaye') ||
    lower.includes('steps') ||
    lower.includes('process') ||
    lower.includes('technique') ||
    lower.includes('step by step') ||
    lower.includes('कैसे बनाते') ||
    lower.includes('कैसे बनाएं') ||
    lower.includes('विधि') ||
    lower.includes('तरीका')
  ) {
    return 'HOW_TO';
  }

  // Cultural Significance
  if (
    lower.includes('significance') ||
    lower.includes('cultural') ||
    lower.includes('meaning') ||
    lower.includes('symbolism') ||
    lower.includes('prateek') ||
    lower.includes('kyun') ||
    lower.includes('kyu') ||
    lower.includes('why') ||
    lower.includes('history') ||
    lower.includes('spiritual') ||
    lower.includes('महत्व') ||
    lower.includes('अर्थ') ||
    lower.includes('सांस्कृतिक') ||
    lower.includes('क्यों') ||
    lower.includes('इतिहास')
  ) {
    return 'SIGNIFICANCE';
  }

  // Motifs
  if (
    lower.includes('motif') ||
    lower.includes('symbol') ||
    lower.includes('design') ||
    lower.includes('pattern') ||
    lower.includes('rupan') ||
    lower.includes('रूपांकन') ||
    lower.includes('प्रतीक')
  ) {
    return 'MOTIFS';
  }

  // Creative Ideas
  if (
    lower.includes('idea') ||
    lower.includes('composition') ||
    lower.includes('what should i paint') ||
    lower.includes('kya banau') ||
    lower.includes('suggestion') ||
    lower.includes('विचार') ||
    lower.includes('सुझाव')
  ) {
    return 'IDEA';
  }

  // Explanation
  if (
    lower.includes('explain') ||
    lower.includes('what is') ||
    lower.includes('tell me about') ||
    lower.includes('kya hai') ||
    lower.includes('ke bare me') ||
    lower.includes('about') ||
    lower.includes('क्या है') ||
    lower.includes('के बारे में') ||
    lower.includes('बताएं') ||
    lower.includes('समझाएं')
  ) {
    return 'EXPLANATION';
  }

  return 'GENERAL';
}

/**
 * Full classification function
 */
export function classifyKalaSathiMessage(
  query: string,
  history: Array<{ role: string; content?: string; text?: string }>,
  selectedArtFormFallback?: string
): {
  category: KalaSathiIntentCategory;
  subIntent?: ArtSubIntent;
  artForm?: ArtFormKnowledge | null;
  isFollowUp?: boolean;
  unfamiliarTerm?: string;
  unrelatedTopic?: string;
} {
  const trimmed = query.trim();

  // 1. Self-Harm / Suicide / Crisis -> strictly decline with support helplines
  if (isSelfHarm(trimmed)) {
    return { category: 'SELF_HARM' };
  }

  // 2. Inappropriate / Abusive / Explicit / Insult
  if (isInappropriate(trimmed)) {
    return { category: 'INAPPROPRIATE' };
  }

  // 3. Gibberish or Unclear
  if (isGibberishOrUnclear(trimmed)) {
    return { category: 'GIBBERISH' };
  }

  // 4. Greetings
  if (isGreeting(trimmed)) {
    return { category: 'GREETING' };
  }

  // 5. Unrelated query (weather, cricket, coding, jokes, world capitals)
  const unrelatedCheck = isUnrelatedQuery(trimmed);
  if (unrelatedCheck.isUnrelated) {
    return { category: 'UNRELATED', unrelatedTopic: unrelatedCheck.topic };
  }

  // 6. Check for unfamiliar/fabricated term
  const unfamiliar = detectUnfamiliarTerm(trimmed);
  if (unfamiliar) {
    return { category: 'UNFAMILIAR', unfamiliarTerm: unfamiliar };
  }

  // 7. Check if it's a follow-up or art-related
  const isFollowUp = FOLLOW_UP_PATTERNS.some(p => p.test(trimmed));
  const artForm = resolveArtForm(trimmed, history, selectedArtFormFallback);
  const subIntent = detectSubIntent(trimmed);

  return {
    category: 'ART_RELATED',
    subIntent,
    artForm,
    isFollowUp
  };
}

/**
 * Multilingual response builders
 */
export function buildSelfHarmRefusal(language: string = 'en'): string {
  switch (language) {
    case 'hi':
      return 'मैं आत्महत्या, आत्म-क्षति या खुद को नुकसान पहुंचाने से जुड़े किसी भी प्रश्न या संदेश का उत्तर देने में असमर्थ हूँ। यदि आप या आपका कोई प्रियजन कठिन समय, तनाव या संकट से गुजर रहा है, तो कृपया जानें कि आप अकेले नहीं हैं और सहायता उपलब्ध है:\n\n• **टेली-मानस (Tele-MANAS)**: 14416 या 1800-891-4416 (24x7 निःशुल्क)\n• **किरण (KIRAN)**: 1800-599-0019\n• **वंद्रेवाला फाउंडेशन**: +91 9999 666 555\n\nकलाVerse (कलासाथी, कलालेंस व कलायात्री) केवल पारंपरिक भारतीय कला और सांस्कृतिक धरोहर के लिए समर्पित है। कृपया अपना ख्याल रखें।';
    case 'ta':
      return 'சுய தீங்கு அல்லது தற்கொலை தொடர்பான எந்தவொரு கோரிக்கைக்கும் என்னால் பதிலளிக்க முடியாது. நீங்கள் அல்லது உங்களுக்குத் தெரிந்தவர்கள் மன அழுத்தத்தில் இருந்தால், ஆதரவு எப்போதும் உள்ளது:\n\n• **Tele-MANAS (இந்தியா)**: 14416 / 1800-891-4416\n• **சினேகா ஹெல்ப்லைன்**: +91 44 2464 0050\n• **KIRAN**: 1800-599-0019\n\nகலாVerse பாரம்பரிய இந்தியக் கலைகளுக்கு மட்டுமே அர்ப்பணிக்கப்பட்டுள்ளது.';
    case 'te':
      return 'స్వీయ హాని లేదా ఆత్మహత్యకు సంబంధించిన అంశాలకు నేను సమాధానం ఇవ్వలేను. మీకు లేదా మీ సన్నిహితులకు సహాయం అవసరమైతే, దయచేసి హెల్ప్‌లైన్‌ను సంప్రదించండి:\n\n• **Tele-MANAS**: 14416 లేదా 1800-891-4416\n• **కిరణ్ (KIRAN)**: 1800-599-0019\n• **వంద్రేవాాలా ఫౌండేషన్**: +91 9999 666 555\n\nకళావర్స్ సాంప్రదాయ భారతీయ కళలకు మాత్రమే అంకితం చేయబడింది.';
    default:
      return 'I cannot assist with queries related to self-harm, suicide, or personal crisis. If you or someone you know is going through a difficult time, please remember you are not alone and support is readily available:\n\n• **India**: Tele-MANAS at 14416 / 1800-891-4416 (24x7 toll-free), KIRAN at 1800-599-0019, or Vandrevala Foundation at +91 9999 666 555\n• **US & Canada**: Call or text 988 (Suicide & Crisis Lifeline)\n• **UK**: Call 111 or Samaritans at 116 123\n• **International**: Please contact your local emergency services or a mental health professional.\n\nKalaVerse (KalaSathi, KalaLens, and KalaYatri) is exclusively dedicated to traditional Indian arts, crafts, and cultural heritage.';
  }
}

export function buildSafetyRefusal(language: string = 'en'): string {
  switch (language) {
    case 'hi':
      return 'मैं इस प्रकार के संदेश या प्रश्न का उत्तर नहीं दे सकता। कलासाथी, कलालेंस और कलायात्री केवल पारंपरिक भारतीय कला, शिल्प और सांस्कृतिक यात्रा की गरिमापूर्ण चर्चा के लिए समर्पित हैं। कृपया किसी भारतीय लोक कला, तकनीक, शिल्प या सांस्कृतिक यात्रा के बारे में पूछें।';
    case 'ta':
      return 'இத்தகைய செய்திகளுக்கு என்னால் பதிலளிக்க முடியாது. கலாசாதி, கலாலென்ஸ் மற்றும் கலாயாத்ரி பாரம்பரிய இந்தியக் கலைகள் மற்றும் கலாச்சாரப் பயணங்களை மரியாதையுடன் விவாதிக்க மட்டுமே அர்ப்பணிக்கப்பட்டுள்ளன. தயவுசெய்து பாரம்பரிய கலைகள் அல்லது பயணங்கள் பற்றி கேளுங்கள்.';
    case 'te':
      return 'నేను ఈ రకమైన సందేశాలకు సమాధానం ఇవ్వలేను. కళాసాథి, కళాలెన్స్ మరియు కళాయాత్రి సాంప్రదాయ భారతీయ కళలు, చేతివృత్తులు మరియు సాంస్కృతిక ప్రయాణాల గురించి గౌరవప్రదంగా చర్చించడానికి మాత్రమే రూపొందించబడ్డాయి.';
    default:
      return 'I cannot respond to this request. KalaVerse (KalaSathi, KalaLens, and KalaYatri) maintains a respectful space dedicated exclusively to traditional Indian arts, crafts, and cultural heritage trails. Please ask questions about Indian folk paintings, handicrafts, materials, techniques, or heritage craft tours.';
  }
}

export function buildGreetingResponse(language: string = 'en', selectedArtForm?: string): string {
  const artName = selectedArtForm || 'Madhubani, Warli, Pichwai, Kalamkari, and Pattachitra';
  switch (language) {
    case 'hi':
      return `नमस्ते! 🙏 मैं आपका सांस्कृतिक परामर्शक **कलासाथी (KalaSathi)** हूँ—पारंपरिक भारतीय कलाओं, लोक शिल्पों और अमूर्त धरोहर में आपका समर्पित साथी।\n\n### 🪷 मैं आपकी किस प्रकार सहायता कर सकता हूँ?\n1. **तकनीक एवं विधि**: रेखांकन (linework), ज्यामिति, दोहरी सीमा रेखा (double-line borders) और कचनी/भरनी जैसी विधियों का विस्तृत ज्ञान।\n2. **प्राकृतिक सामग्रियां**: हस्तनिर्मित वास्ली कागज़, बाँस की कलम, खनिज व वानस्पतिक प्राकृतिक रंग (हल्दी, नील, काजल, मजीठ)।\n3. **शास्त्रीय प्रतीक व रूपांकन**: कल्पवृक्ष, पवित्र मत्स्य, मयूर, कमल और पौराणिक कथाओं का गहरा सांस्कृतिक महत्व।\n4. **कला निर्माण प्रेरणा**: **${artName}** सहित भारत की किसी भी पारंपरिक लोक कला पर रचनात्मक मार्गदर्शन।\n\nआप आज किस कला रूप, तकनीक या सामग्री के बारे में विस्तार से जानना चाहते हैं?`;
    case 'ta':
      return `வணக்கம்! 🙏 நான் உங்கள் கலாச்சார வழிகாட்டி **கலாசாதி (KalaSathi)**—பாரம்பரிய இந்தியக் கலைகள் மற்றும் கைவினைப் பொருட்களில் உங்கள் ஆன்மீக கலை வழிகாட்டி.\n\nமதுபானி, வார்லி, பிச்வாய், கலம்காரி, பட்டசித்ரா உள்ளிட்ட இந்தியாவின் செழுமையான கலைப் பாரம்பரியங்கள், இயற்கை வண்ணங்கள், பாரம்பரிய நுட்பங்கள் மற்றும் ஓவிய முறைகள் குறித்து நான் உங்களுக்கு முழுமையாக வழிகாட்ட முடியும்.\n\nஇன்று எந்த பாரம்பரிய கலை வடிவம் பற்றி அறிய விரும்புகிறீர்கள்?`;
    default:
      return `Namaste! 🙏 I am **KalaSathi**, your esteemed master consultant and spiritual guide dedicated to traditional Indian arts, folk paintings, and heritage crafts on KalaVerse.\n\n### 🪷 How I Can Guide You:\n1. **Master Techniques & Canons**: Step-by-step guidance on contour outlines, double-line framing, geometric symmetry, and continuous-breath strokes.\n2. **Authentic Natural Pigments**: Preparing botanical dyes (indigo, turmeric, madder root) and mineral binders (gum arabic, cow dung plaster, conch shell white).\n3. **Sacred Symbolism & Motifs**: Deep cultural origins of the Tree of Life (*Kalpavriksha*), sacred Fish (*Matsya*), Peacock (*Mayura*), and Lotus (*Padma*).\n4. **Artisan Consultation**: Comprehensive explorations of **${artName}**, Tanjore, Gond, Lippan, Cheriyal, and more.\n\nWhich traditional art form, technique, or motif would you like to explore today?`;
  }
}

export function buildClarificationResponse(language: string = 'en', unfamiliarTerm?: string): string {
  if (unfamiliarTerm) {
    switch (language) {
      case 'hi':
        return `मैं "${unfamiliarTerm}" को किसी ज्ञात पारंपरिक भारतीय कला या शिल्प के रूप में नहीं पहचान सका। क्या आप इसके क्षेत्र, शैली या वर्तनी (spelling) के बारे में थोड़ा स्पष्ट कर सकते हैं ताकि मैं सही मार्गदर्शन कर सकूँ?`;
      case 'ta':
        return `"${unfamiliarTerm}" என்பது அங்கீகரிக்கப்பட்ட பாரம்பரிய இந்தியக் கலையாக அறியப்படவில்லை. இதன் பகுதி, பாணி அல்லது சரியான எழுத்துப்பிழை பற்றி தெளிவுபடுத்த முடியுமா?`;
      default:
        return `I couldn't identify "${unfamiliarTerm}" as a recognized traditional Indian art form, craft, or technique. Could you please clarify the spelling, region, or style you are referring to?`;
    }
  }

  switch (language) {
    case 'hi':
      return 'मुझे आपका प्रश्न स्पष्ट रूप से समझ में नहीं आया। कृपया पारंपरिक भारतीय कला, शिल्प, तकनीक या सामग्री से संबंधित अपना प्रश्न स्पष्ट शब्दों में पूछें।';
    case 'ta':
      return 'உங்கள் கேள்வி எனக்கு தெளிவாகப் புரியவில்லை. பாரம்பரிய இந்தியக் கலை, கைவினை அல்லது நுட்பங்கள் தொடர்பான உங்கள் கேள்வியை தெளிவுபடுத்துங்கள்.';
    default:
      return "I couldn't quite understand that. Could you please clarify your question about Indian traditional arts and crafts?";
  }
}

export function buildRedirectionResponse(language: string = 'en', topic?: string): string {
  const topicDesc = topic ? ` (${topic})` : '';
  switch (language) {
    case 'hi':
      return `नमस्ते! मैं आपका कला परामर्शक कलासाथी हूँ। मैं विशेष रूप से पारंपरिक भारतीय कलाओं, लोक चित्रकलाओं और शिल्पों (जैसे मधुबनी, वारली, कलमकारी, पट्टचित्र, तंजौर आदि) में विशेषज्ञता रखता हूँ।\n\nमैं सामान्य विषयों${topicDesc} पर उत्तर देने में असमर्थ हूँ। क्या आप किसी भारतीय लोक कला, उसकी सामग्री, या चित्र बनाने की विधि के बारे में कुछ जानना चाहते हैं?`;
    case 'ta':
      return `வணக்கம்! நான் கலாசாதி. நான் பாரம்பரிய இந்தியக் கலைகள் மற்றும் கைவினைப் பொருட்களில் (மதுபானி, வார்லி, கலம்காரி, பட்டசித்ரா போன்றவை) மட்டுமே கவனம் செலுத்துகிறேன்.\n\nபொதுவான தலைப்புகளுக்கு${topicDesc} என்னால் பதிலளிக்க முடியாது. பாரம்பரிய ஓவியக் கலைகள் பற்றி ஏதேனும் கேட்க விரும்புகிறீர்களா?`;
    default:
      return `Namaste! As KalaSathi, I specialize specifically in authentic Indian traditional arts, folk paintings, and regional handicrafts (such as Madhubani, Warli, Kalamkari, Pattachitra, Pichwai, and Tanjore).\n\nI am unable to answer general questions${topicDesc}. I would love to assist you with Indian art techniques, traditional materials, cultural significance, or painting ideas. Which art form would you like to explore?`;
  }
}

/**
 * Validation helper for KalaLens interactive Q&A
 * Recognizes and prevents inappropriate, vulgar, and irrelevant questions about the artwork
 */
export function validateArtworkQuestion(
  question: string,
  artForm?: string,
  language: string = 'en'
): { allowed: boolean; reason?: 'SELF_HARM' | 'INAPPROPRIATE' | 'UNRELATED'; reply?: string } {
  const trimmed = question.trim();
  if (isSelfHarm(trimmed)) {
    return { allowed: false, reason: 'SELF_HARM', reply: buildSelfHarmRefusal(language) };
  }
  if (isInappropriate(trimmed)) {
    return { allowed: false, reason: 'INAPPROPRIATE', reply: buildSafetyRefusal(language) };
  }
  const unrelatedCheck = isUnrelatedQuery(trimmed);
  if (unrelatedCheck.isUnrelated) {
    return { allowed: false, reason: 'UNRELATED', reply: buildLensRedirection(language, unrelatedCheck.topic) };
  }
  return { allowed: true };
}

export function buildLensRedirection(language: string = 'en', topic?: string): string {
  const topicDesc = topic ? ` (${topic})` : '';
  switch (language) {
    case 'hi':
      return `नमस्ते! कलालेंस गुरु (KalaLens Mentor) विशेष रूप से आपकी कलाकृति और पारंपरिक भारतीय कला तकनीकों (जैसे रेखांकन, प्राकृतिक वर्णक, पवित्र रूपांकन, समरूपता व रचना) पर मार्गदर्शन के लिए है। मैं असंबंधित विषयों${topicDesc} पर उत्तर देने में असमर्थ हूँ। कृपया अपनी पेंटिंग या किसी भारतीय पारंपरिक कला से जुड़ा प्रश्न पूछें।`;
    case 'ta':
      return `வணக்கம்! கலாலென்ஸ் மென்டார் (KalaLens Mentor) உங்கள் ஓவியம் மற்றும் பாரம்பரிய இந்தியக் கலை நுட்பங்கள் (நேர்த்தியான கோடுகள், இயற்கை வண்ணங்கள், பாரம்பரிய வடிவங்கள்) பற்றிய வழிகாட்டலுக்கு மட்டுமே அர்ப்பணிக்கப்பட்டுள்ளது. பிற தலைப்புகளுக்கு${topicDesc} என்னால் பதிலளிக்க முடியாது. உங்கள் ஓவியம் தொடர்பான கேள்விகளை தயவுசெய்து கேளுங்கள்.`;
    default:
      return `Namaste! KalaLens Mentor is exclusively dedicated to analyzing your artwork and guiding you on traditional Indian art techniques (such as contour linework, organic pigments, sacred motifs, composition, and symmetry). I cannot answer questions about unrelated topics${topicDesc}. Please ask a question related to your painting or Indian traditional art.`;
  }
}

/**
 * Validation helper for KalaYatri cultural travel assistant
 * Recognizes and prevents inappropriate, vulgar, and irrelevant questions about non-travel topics
 */
export function validateTravelQuery(
  query: string,
  language: string = 'en'
): { allowed: boolean; reason?: 'SELF_HARM' | 'INAPPROPRIATE' | 'UNRELATED'; reply?: string } {
  const trimmed = query.trim();
  if (isSelfHarm(trimmed)) {
    return { allowed: false, reason: 'SELF_HARM', reply: buildSelfHarmRefusal(language) };
  }
  if (isInappropriate(trimmed)) {
    return { allowed: false, reason: 'INAPPROPRIATE', reply: buildSafetyRefusal(language) };
  }
  const unrelatedCheck = isUnrelatedTravelQuery(trimmed);
  if (unrelatedCheck.isUnrelated) {
    return { allowed: false, reason: 'UNRELATED', reply: buildTravelRedirection(language, unrelatedCheck.topic) };
  }
  return { allowed: true };
}

export function buildTravelRedirection(language: string = 'en', topic?: string): string {
  const topicDesc = topic ? ` (${topic})` : '';
  switch (language) {
    case 'hi':
      return `नमस्ते! मैं आपका व्यक्तिगत सांस्कृतिक यात्रा सहायक **कलायात्री (KalaYatri)** हूँ। मैं विशेष रूप से भारत के पारंपरिक शिल्प मार्गों, 1-दिवसीय हेरिटेज यात्राओं और मास्टर शिल्पकार कार्यशालाओं (जैसे बिहार में मधुबनी, आंध्र में कलमकारी, महाराष्ट्र में वारली, राजस्थान में पिछवाई व ओडिशा में पट्टचित्र) के मार्गदर्शन के लिए हूँ।\n\nमैं सामान्य या असंबंधित विषयों${topicDesc} पर उत्तर देने में असमर्थ हूँ। कृपया अपनी सांस्कृतिक यात्रा, समय सारणी, सुगमता (accessibility) या कार्यशाला बुकिंग से जुड़ा प्रश्न पूछें।`;
    case 'ta':
      return `வணக்கம்! நான் உங்கள் கலாச்சார பயண உதவியாளர் **கலாயாத்ரி (KalaYatri)**. நான் பாரம்பரிய இந்திய கைவினைப் பயணங்கள், 1-நாள் சுற்றுலாத் திட்டங்கள் மற்றும் கைவினைஞர் பட்டறைகள் (மதுபானி, கலம்காரி, வார்லி போன்றவை) ஆகியவற்றிற்கு மட்டுமே வழிகாட்டுகிறேன்.\n\nதொடர்பற்ற தலைப்புகளுக்கு${topicDesc} என்னால் பதிலளிக்க முடியாது. உங்கள் கலாச்சார பயணம் குறித்து தயவுசெய்து கேளுங்கள்.`;
    default:
      return `Namaste! As **KalaYatri**, I am your dedicated AI Cultural Travel Assistant and KalaTour Concierge, grounded in KalaVerse's verified knowledge base. I specialize exclusively in authentic Indian craft trails, 1-day heritage itineraries, master artisan ateliers, and booking verified cultural experiences (such as Madhubani in Bihar, Kalamkari in Andhra Pradesh, Warli in Maharashtra, Pichwai in Rajasthan, and Pattachitra in Odisha).\n\nI am unable to answer questions on unrelated topics${topicDesc}. Please ask about cultural travel itineraries, village craft clusters, accessibility, regional cuisine, or reserving an authentic 1-day craft tour.`;
  }
}

/**
 * Generate a concise, direct, and modular art response based on the detected sub-intent
 */
export function buildConciseArtResponse(
  artForm: ArtFormKnowledge,
  subIntent: ArtSubIntent,
  language: string = 'en',
  isHinglish: boolean = false
): string {
  const langKey = isHinglish ? 'hinglish' : language === 'hi' ? 'hi' : 'en';

  const expl = artForm.conciseExplanation[langKey] || artForm.conciseExplanation.en;
  const mat = artForm.conciseMaterials[langKey] || artForm.conciseMaterials.en;
  const howTo = artForm.conciseHowTo[langKey] || artForm.conciseHowTo.en;
  const sig = artForm.conciseSignificance[langKey] || artForm.conciseSignificance.en;
  const motifs = artForm.conciseMotifs[langKey] || artForm.conciseMotifs.en;
  const idea = artForm.conciseIdea[langKey] || artForm.conciseIdea.en;

  let content = '';

  switch (subIntent) {
    case 'MATERIALS':
      content = langKey === 'hi'
        ? `### 🌿 ${artForm.hindiName} - पारंपरिक सामग्रियां व प्राकृतिक रंग\n\n${mat}\n\n### 📜 ऐतिहासिक आधार\n${expl}`
        : `### 🌿 ${artForm.name} - Traditional Materials & Natural Pigments\n\n${mat}\n\n### 📜 Historical Context\n${expl}`;
      break;

    case 'HOW_TO':
      content = langKey === 'hi'
        ? `### 🖌️ ${artForm.hindiName} - निर्माण विधि एवं तकनीक\n\n${howTo}\n\n### 🎨 आवश्यक सामग्रियां\n${mat}`
        : `### 🖌️ ${artForm.name} - Step-by-Step Creation & Technique\n\n${howTo}\n\n### 🎨 Required Materials\n${mat}`;
      break;

    case 'SIGNIFICANCE':
      content = langKey === 'hi'
        ? `### 🕉️ ${artForm.hindiName} - सांस्कृतिक व आध्यात्मिक महत्व\n\n${sig}\n\n### 🦚 प्रमुख पारंपरिक रूपांकन\n${motifs}`
        : `### 🕉️ ${artForm.name} - Cultural & Spiritual Significance\n\n${sig}\n\n### 🦚 Key Sacred Motifs\n${motifs}`;
      break;

    case 'MOTIFS':
      content = langKey === 'hi'
        ? `### 🦚 ${artForm.hindiName} - शास्त्रीय रूपांकन व प्रतीकवाद\n\n${motifs}\n\n### ✨ सांस्कृतिक पृष्ठभूमि\n${sig}`
        : `### 🦚 ${artForm.name} - Classical Motifs & Symbolism\n\n${motifs}\n\n### ✨ Cultural Lore\n${sig}`;
      break;

    case 'IDEA':
      content = langKey === 'hi'
        ? `### 💡 ${artForm.hindiName} - रचना एवं डिज़ाइन विचार\n\n${idea}\n\n### 🖌️ बनाने की विधि\n${howTo}`
        : `### 💡 ${artForm.name} - Creative Composition Idea\n\n${idea}\n\n### 🖌️ Recommended Execution Technique\n${howTo}`;
      break;

    case 'EXPLANATION':
    case 'GENERAL':
    default:
      content = langKey === 'hi'
        ? `### 🎨 ${artForm.hindiName} (${artForm.state})\n\n${expl}\n\n### 🌿 प्राकृतिक सामग्रियां एवं रंग\n${mat}\n\n### 🦚 प्रमुख रूपांकन व सांस्कृतिक महत्व\n${sig}\n\n### 🖌️ मुख्य कलात्मक विधि\n${howTo}`
        : `### 🎨 ${artForm.name} (${artForm.state})\n\n${expl}\n\n### 🌿 Authentic Traditional Materials\n${mat}\n\n### 🦚 Cultural Significance & Sacred Motifs\n${sig}\n\n### 🖌️ Master Painting Technique\n${howTo}`;
      break;
  }

  // Invitation for follow-up
  const followUpPrompt =
    langKey === 'hi'
      ? '\n\n*क्या आप इसके किसी विशेष रूपांकन (motif), रंग तैयार करने की विधि अथवा बॉर्डर तकनीक पर और मार्गदर्शन चाहते हैं?*'
      : langKey === 'hinglish'
      ? '\n\n*Aap iske kisi specific motif, natural color preparation, ya border technique ke baare me aur pooch sakte hain!*'
      : '\n\n*Would you like to explore deeper into a specific motif, natural pigment preparation, or border composition technique?*';

  return `${content}${followUpPrompt}`;
}

/**
 * Builds the strict, concise System Prompt for Gemini API
 */
export function buildKalaSathiSystemPrompt(
  targetLangName: string,
  language: string,
  selectedState?: string,
  selectedArtForm?: string
): string {
  return `You are KalaSathi (कला साथी), the authentic master consultant and spiritual guide of traditional Indian arts and crafts on the KalaVerse platform.

CRITICAL MANDATES & SAFETY BOUNDARIES:
1. TARGET LANGUAGE: Respond in "${targetLangName}" (language code: "${language}"). If the user queries in Hindi or Hinglish, match their natural tone seamlessly while maintaining respect.
2. INPUT VALIDATION, SAFETY & RELEVANCE MANDATES:
   - SELF-HARM & CRISIS: If the user query touches on self-harm, suicide, self-injury, or emotional crisis, immediately refuse politely and provide official support resources (such as Tele-MANAS 14416 / 1800-891-4416 in India, or 988). Never generate or engage with self-harm content.
   - INAPPROPRIATE CONTENT: Any vulgarity, harassment, hate speech, abusive language, or sexually explicit content must be strictly declined with a polite refusal stating that KalaSathi maintains a dignified space for traditional art.
   - IRRELEVANT / UNRELATED: Any irrelevant non-art question (e.g. weather, cricket, coding/Python, general news, jokes, world capitals, math). Do NOT answer the off-topic question. Decline politely and redirect to Indian traditional arts and crafts.
   - GIBBERISH / UNCLEAR: Meaningless strings (e.g. "asdfghjkl", "xyz123xyz", "blablabla", "??????"). Ask the user politely to clarify their question about Indian traditional arts.
   - UNFAMILIAR: If a word might be an art form name but cannot be reliably identified in recognized Indian art history, ask for clarification instead of fabricating an art form.
   - ART-RELATED: Genuine questions about Indian traditional arts, folk paintings, handicrafts, techniques, materials, history, cultural significance, or creative ideas.
3. DEPTH & DETAIL REQUIREMENT (DETAILED YET BALANCED):
   **Make your answers detailed, culturally rich, and educational, without being excessively long or overwhelming (aim for 3 to 4 well-structured, informative paragraphs or bulleted sections).**
   - Provide genuine depth on the origins, regional traditions, and cultural or spiritual significance.
   - Thoroughly explain traditional techniques, visual canons (e.g. double-line borders, geometric symmetry, horror vacui, continuous-breath linework).
   - Detail specific authentic materials (e.g. handspun cotton canvas, Wasli paper, bamboo nibs, natural mineral & plant pigments like lampblack, indigo, turmeric, madder root).
   - Include practical, actionable master tips or step-by-step guidance for artists and admirers.
   - Do NOT give bare 1-line or overly brief answers; provide deep artisan knowledge while remaining engaging and well-formatted.
4. CONTEXT & FOLLOW-UP CONTINUITY:
   - Understand follow-ups like "Why?", "Explain more", "What materials are needed?", and "Kaise banate hain?" using the art form established in conversation history.
   - If the user was discussing Madhubani and then asks "What materials are needed?", answer in context for Madhubani.
   - If the user suddenly switches to an unrelated topic like "What is the weather today?", recognize the topic switch, do NOT assume it's art, and politely redirect them.
${selectedState ? `Active state context: ${selectedState}.` : ''}
${selectedArtForm ? `Active art form context: ${selectedArtForm}.` : ''}`;
}
