import React from 'react';

interface ArtworkCanvasProps {
  artworkId: string;
  className?: string;
  showFraming?: boolean;
}

export const ArtworkCanvas: React.FC<ArtworkCanvasProps> = ({
  artworkId,
  className = 'w-full h-full object-cover',
  showFraming = false,
}) => {
  const renderSVG = () => {
    switch (artworkId) {
      case 'madhubani_bihar':
        return (
          <svg viewBox="0 0 500 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="500" fill="#FBBF24" />
            {/* Outer Traditional Red Frame with Beads */}
            <rect x="10" y="10" width="480" height="480" fill="none" stroke="#DC2626" strokeWidth="18" />
            <rect x="25" y="25" width="450" height="450" fill="none" stroke="#2D2D2D" strokeWidth="3" />
            <line x1="250" y1="10" x2="250" y2="490" stroke="#DC2626" strokeWidth="10" />
            <line x1="10" y1="250" x2="490" y2="250" stroke="#DC2626" strokeWidth="10" />

            {/* Top Left: Mayura (Peacock) */}
            <g transform="translate(30, 30)">
              <rect width="210" height="210" fill="#FDF6B2" />
              {/* Peacock Plumage Fan */}
              <circle cx="95" cy="115" r="70" fill="#047857" stroke="#2D2D2D" strokeWidth="3" />
              <path d="M40 120 C 40 70, 150 70, 150 120 Z" fill="#1E3A8A" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M55 120 C 55 85, 135 85, 135 120 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              {/* Peacock Body & Crest */}
              <path d="M120 160 C 170 140, 150 80, 130 65 C 110 50, 95 60, 90 75 C 90 95, 110 130, 120 160 Z" fill="#2563EB" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="120" cy="70" r="5" fill="#2D2D2D" />
              <polygon points="135,68 150,73 135,78" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              {/* Peacock Crest */}
              <path d="M110 50 L 100 35 M 115 48 L 115 30 M 120 50 L 130 35" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="100" cy="35" r="4" fill="#047857" />
              <circle cx="115" cy="30" r="4" fill="#DC2626" />
              <circle cx="130" cy="35" r="4" fill="#F59E0B" />
              {/* Madhubani Flora Fill */}
              <circle cx="170" cy="40" r="14" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="45" cy="45" r="12" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M160 170 C 180 150, 190 180, 190 190" stroke="#047857" strokeWidth="4" />
            </g>

            {/* Top Right: Devi with Radiating Sun */}
            <g transform="translate(260, 30)">
              <rect width="210" height="210" fill="#FEF08A" />
              {/* Radiant Sun */}
              <circle cx="155" cy="55" r="28" fill="#F59E0B" stroke="#DC2626" strokeWidth="4" />
              <circle cx="155" cy="55" r="20" fill="#FEF08A" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="148" cy="50" r="3" fill="#2D2D2D" />
              <circle cx="162" cy="50" r="3" fill="#2D2D2D" />
              <path d="M148 60 Q 155 66 162 60" stroke="#DC2626" strokeWidth="2" fill="none" />
              {/* Sun Rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <polygon
                  key={i}
                  points="155,20 150,30 160,30"
                  fill="#DC2626"
                  transform={`rotate(${angle} 155 55)`}
                />
              ))}
              {/* Madhubani Goddess Profile with Large Lotus Eyes */}
              <path d="M40 70 Q 70 40 100 70 Q 110 110 80 140 Q 40 130 40 70 Z" fill="#FDE047" stroke="#2D2D2D" strokeWidth="3" />
              <path d="M85 85 Q 105 75 110 85 Q 100 100 85 85 Z" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="98" cy="85" r="5" fill="#2D2D2D" />
              {/* Long Hair & Traditional Saree Pallu */}
              <path d="M40 70 Q 20 120 70 190 L 180 190 Q 130 130 70 90" fill="#1F2937" stroke="#2D2D2D" strokeWidth="3" />
              <path d="M60 140 L 170 190 L 80 190 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              {/* Kundan Earring */}
              <circle cx="70" cy="115" r="9" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="2" />
            </g>

            {/* Bottom Left: Matsya (Sacred Fish) */}
            <g transform="translate(30, 260)">
              <rect width="210" height="210" fill="#FEF08A" />
              {/* Sacred Waves */}
              <path d="M0 180 Q 50 160 100 180 T 200 180 L 210 210 L 0 210 Z" fill="#0284C7" stroke="#1E3A8A" strokeWidth="3" />
              {/* Madhubani Textured Fish */}
              <g transform="translate(10, 10)">
                <path d="M30 90 Q 100 10 160 80 Q 100 150 30 90 Z" fill="#EA580C" stroke="#2D2D2D" strokeWidth="3" />
                <path d="M160 80 L 195 50 L 180 80 L 195 110 Z" fill="#047857" stroke="#2D2D2D" strokeWidth="3" />
                {/* Scales Hatching */}
                <path d="M70 45 Q 85 80 70 120 M 95 35 Q 115 80 95 130 M 120 40 Q 135 80 120 120" stroke="#2D2D2D" strokeWidth="2" fill="none" />
                <circle cx="55" cy="75" r="7" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="2" />
                <circle cx="55" cy="75" r="3" fill="#2D2D2D" />
              </g>
              {/* Lotus Lotus buds in water */}
              <circle cx="160" cy="140" r="10" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="35" cy="40" r="12" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
            </g>

            {/* Bottom Right: Radha Krishna Union */}
            <g transform="translate(260, 260)">
              <rect width="210" height="210" fill="#FDF6B2" />
              {/* Krishna (Blue) and Radha (Golden Ochre) */}
              {/* Krishna */}
              <path d="M40 70 Q 60 50 75 70 Q 80 100 60 120 Q 30 110 40 70 Z" fill="#0284C7" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="62" cy="78" r="4" fill="#2D2D2D" />
              <path d="M50 120 L 70 190 L 30 190 Z" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="2" />
              {/* Radha */}
              <path d="M140 70 Q 160 50 175 70 Q 180 100 160 120 Q 130 110 140 70 Z" fill="#FDE047" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="150" cy="78" r="4" fill="#2D2D2D" />
              <path d="M130 120 L 180 190 L 110 190 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
              {/* Holding Hands */}
              <path d="M65 110 Q 100 130 135 110" stroke="#2D2D2D" strokeWidth="3" fill="none" />
              {/* Tree of Life Vine */}
              <path d="M100 20 L 100 200" stroke="#047857" strokeWidth="4" />
              <circle cx="100" cy="150" r="14" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'kalamkari_andhra':
        return (
          <svg viewBox="0 0 450 550" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="550" fill="#B91C1C" />
            {/* Intricate Kalamkari Arch & Borders */}
            <rect x="15" y="15" width="420" height="520" fill="none" stroke="#2D2D2D" strokeWidth="12" />
            <rect x="25" y="25" width="400" height="500" fill="none" stroke="#FFF8E7" strokeWidth="3" strokeDasharray="6 4" />
            {/* Inner Sacred Arch with Floral Stippling */}
            <path d="M40 200 C 40 70, 410 70, 410 200 L 410 500 L 40 500 Z" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="4" />
            <path d="M50 200 C 50 90, 400 90, 400 200 L 400 490 L 50 490 Z" fill="#B91C1C" />

            {/* Sacred Hamsa (Swan) */}
            <g transform="translate(180, 240)">
              <path d="M10 140 C 40 90, 140 100, 180 130 C 220 160, 230 220, 160 230 C 90 240, 30 200, 10 140 Z" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="4" />
              {/* Swan Head */}
              <path d="M170 120 C 185 80, 220 70, 230 90 C 240 110, 210 130, 190 140 Z" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="215" cy="85" r="5" fill="#2D2D2D" />
              <polygon points="230,85 245,88 230,95" fill="#2D2D2D" />
              {/* Feathers Inking */}
              <path d="M50 180 Q 90 160 130 180 M 60 200 Q 100 180 140 200" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeDasharray="3 3" />
            </g>

            {/* Goddess Saraswati Seated in Lalitasana */}
            <g transform="translate(100, 70)">
              {/* Divine Halo */}
              <circle cx="110" cy="90" r="55" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="4" />
              <circle cx="110" cy="90" r="48" fill="#B91C1C" stroke="#2D2D2D" strokeWidth="2" />
              {/* Head and Crown (Mukuta) */}
              <polygon points="90,40 110,10 130,40 110,50" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
              <path d="M85 70 Q 110 50 135 70 Q 135 110 110 125 Q 85 110 85 70 Z" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
              {/* Kalamkari Lotus Eyes and Nose Ring */}
              <path d="M92 78 Q 100 70 108 78 Q 100 84 92 78 Z" fill="#2D2D2D" />
              <path d="M116 78 Q 124 70 132 78 Q 124 84 116 78 Z" fill="#2D2D2D" />
              <circle cx="108" cy="86" r="2" fill="#B91C1C" />
              {/* Ornate Torso & Temple Jewels */}
              <path d="M85 125 L 140 125 L 155 200 L 70 200 Z" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
              {/* Intricate Black Inked Veena */}
              <g transform="translate(10, 110) rotate(-25)">
                <rect x="0" y="30" width="180" height="14" rx="7" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
                <circle cx="20" cy="37" r="22" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="4" />
                <circle cx="160" cy="37" r="16" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
                <line x1="20" y1="34" x2="160" y2="34" stroke="#2D2D2D" strokeWidth="2" />
                <line x1="20" y1="40" x2="160" y2="40" stroke="#2D2D2D" strokeWidth="2" />
              </g>
              {/* Saree with Patterned Kalamkari Stippling */}
              <path d="M60 200 C 40 280, 180 320, 160 250 C 140 220, 100 200, 60 200 Z" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="4" />
              {/* Floral Stipple Patterns */}
              <circle cx="85" cy="240" r="8" fill="#2D2D2D" />
              <circle cx="115" cy="260" r="8" fill="#2D2D2D" />
              <circle cx="135" cy="235" r="8" fill="#2D2D2D" />
            </g>
          </svg>
        );

      case 'warli_maharashtra':
        return (
          <svg viewBox="0 0 500 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="450" fill="#D97706" />
            {/* Mud Wall Ochre Background Texture */}
            <rect width="500" height="450" fill="#E5AA70" opacity="0.3" />
            
            {/* Central Sacred Tree of Life (Kalpavriksha) */}
            <g transform="translate(240, 40)">
              {/* Trunk */}
              <path d="M0 380 L 15 150 L 0 80 L -15 150 L 0 380" fill="#1F2937" />
              {/* Branch Network */}
              <path d="M0 180 Q -80 130 -140 100" stroke="#1F2937" strokeWidth="12" strokeLinecap="round" fill="none" />
              <path d="M0 160 Q 80 120 150 90" stroke="#1F2937" strokeWidth="12" strokeLinecap="round" fill="none" />
              <path d="M0 120 Q -60 70 -100 30" stroke="#1F2937" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M0 100 Q 60 50 110 20" stroke="#1F2937" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M0 80 L 0 -10" stroke="#1F2937" strokeWidth="10" strokeLinecap="round" />

              {/* Foliage Leaf Clusters */}
              {[-130, -90, -50, 0, 50, 90, 130].map((x, idx) => (
                <g key={idx} transform={`translate(${x}, ${30 + (idx % 3) * 20})`}>
                  <ellipse cx="0" cy="0" rx="14" ry="7" fill="#1F2937" transform="rotate(30)" />
                  <ellipse cx="10" cy="-8" rx="14" ry="7" fill="#1F2937" transform="rotate(-30)" />
                </g>
              ))}

              {/* Tree Animal (Spotted Deer in Tree) */}
              <g transform="translate(-100, 90)">
                <path d="M0 0 Q 30 -20 60 0 Q 40 20 0 0" fill="#FFFFFF" stroke="#1F2937" strokeWidth="3" />
                <circle cx="5" cy="-10" r="6" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
                <line x1="10" y1="10" x2="15" y2="40" stroke="#1F2937" strokeWidth="3" />
                <line x1="45" y1="10" x2="50" y2="40" stroke="#1F2937" strokeWidth="3" />
                <circle cx="20" cy="0" r="2" fill="#1F2937" />
                <circle cx="35" cy="-3" r="2" fill="#1F2937" />
                <circle cx="45" cy="3" r="2" fill="#1F2937" />
              </g>
            </g>

            {/* Warli Figures & Spotted Cattle at Ground */}
            {/* Left Tribal Hunter/Woman */}
            <g transform="translate(60, 260)">
              <circle cx="30" cy="30" r="14" fill="#1F2937" />
              {/* Ponytail */}
              <path d="M20 25 Q 5 20 0 35 M 20 28 Q 2 30 0 45" stroke="#1F2937" strokeWidth="3" fill="none" />
              {/* Intersecting Triangles Body */}
              <polygon points="30,45 10,80 50,80" fill="#1F2937" />
              <polygon points="30,115 10,80 50,80" fill="#1F2937" />
              {/* White dots on body */}
              <circle cx="30" cy="70" r="3" fill="#FFFFFF" />
              <circle cx="23" cy="90" r="3" fill="#FFFFFF" />
              <circle cx="37" cy="90" r="3" fill="#FFFFFF" />
              {/* Legs */}
              <line x1="20" y1="115" x2="15" y2="160" stroke="#1F2937" strokeWidth="4" />
              <line x1="40" y1="115" x2="45" y2="160" stroke="#1F2937" strokeWidth="4" />
              {/* Stick */}
              <line x1="45" y1="80" x2="110" y2="95" stroke="#1F2937" strokeWidth="3" />
            </g>

            {/* Spotted Calf */}
            <g transform="translate(130, 310)">
              <path d="M10 20 Q 50 5 80 20 Q 60 50 10 20" fill="#FFFFFF" stroke="#1F2937" strokeWidth="3" />
              <circle cx="75" cy="5" r="8" fill="#1F2937" />
              <line x1="20" y1="30" x2="18" y2="70" stroke="#1F2937" strokeWidth="3" />
              <line x1="65" y1="30" x2="65" y2="70" stroke="#1F2937" strokeWidth="3" />
              <circle cx="30" cy="20" r="3" fill="#1F2937" />
              <circle cx="45" cy="15" r="3" fill="#1F2937" />
              <circle cx="55" cy="25" r="3" fill="#1F2937" />
            </g>

            {/* Right Spotted Bull with Humanized Head */}
            <g transform="translate(320, 280)">
              <path d="M20 50 Q 80 20 140 50 Q 100 100 20 50" fill="#FFFFFF" stroke="#1F2937" strokeWidth="4" />
              <circle cx="25" cy="20" r="16" fill="#1F2937" />
              {/* Horns */}
              <path d="M20 10 Q 15 -10 10 0 M 30 10 Q 35 -10 40 0" stroke="#1F2937" strokeWidth="3" fill="none" />
              {/* Four Legs */}
              <line x1="35" y1="70" x2="30" y2="140" stroke="#1F2937" strokeWidth="4" />
              <line x1="55" y1="70" x2="55" y2="140" stroke="#1F2937" strokeWidth="4" />
              <line x1="115" y1="70" x2="115" y2="140" stroke="#1F2937" strokeWidth="4" />
              <line x1="135" y1="70" x2="140" y2="140" stroke="#1F2937" strokeWidth="4" />
              {/* Spots */}
              {[35, 50, 65, 80, 95, 110, 125].map((sx, i) => (
                <circle key={i} cx={sx} cy={50 + (i % 2) * 10} r="4" fill="#1F2937" />
              ))}
            </g>
          </svg>
        );

      case 'pichwai_rajasthan':
        return (
          <svg viewBox="0 0 500 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="400" fill="#0F172A" />
            {/* Ornate Red & Gold Top Border */}
            <rect x="0" y="0" width="500" height="24" fill="#DC2626" />
            <line x1="0" y1="24" x2="500" y2="24" stroke="#F59E0B" strokeWidth="4" />

            {/* Dense Flowering Kadamba Tree Canopy */}
            <g transform="translate(180, 20)">
              {/* Gnarled Trunk */}
              <path d="M0 320 Q -40 200 10 120 Q 30 80 0 20" stroke="#78350F" strokeWidth="22" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="100" r="110" fill="#064E3B" opacity="0.9" />
              <circle cx="100" cy="70" r="90" fill="#047857" opacity="0.8" />
              <circle cx="-60" cy="80" r="80" fill="#059669" opacity="0.8" />
              {/* Golden Flowers & Birds */}
              {[[-40, 50], [20, 30], [80, 50], [0, 90], [60, 110], [-50, 110], [120, 80]].map(([bx, by], i) => (
                <circle key={i} cx={bx} cy={by} r="7" fill="#F59E0B" stroke="#FFF8E7" strokeWidth="2" />
              ))}
              {/* Birds in Tree */}
              <path d="M20 40 Q 40 20 60 35 Q 40 50 20 40 Z" fill="#FFF8E7" stroke="#DC2626" strokeWidth="2" />
              <path d="M-30 60 Q -10 40 10 55 Q -10 70 -30 60 Z" fill="#FBBF24" stroke="#DC2626" strokeWidth="2" />
            </g>

            {/* Rolling Green Hills at Base */}
            <path d="M0 340 Q 150 310 300 340 T 500 340 L 500 400 L 0 400 Z" fill="#047857" />
            <path d="M0 360 Q 250 330 500 360 L 500 400 L 0 400 Z" fill="#065F46" />

            {/* Left White Royal Horse & Rider (Goddess/Princess) */}
            <g transform="translate(100, 190)">
              {/* White Steed */}
              <path d="M10 100 Q 60 70 120 90 Q 150 50 140 20 Q 110 30 100 50 Q 60 60 30 80 Z" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="135" cy="28" r="4" fill="#2D2D2D" />
              <path d="M110 90 L 120 160 M 130 95 L 140 160 M 30 100 L 20 160 M 45 105 L 40 160" stroke="#2D2D2D" strokeWidth="4" />
              {/* Saddle (Saffron & Gold) */}
              <rect x="55" y="75" width="45" height="30" rx="6" fill="#F59E0B" stroke="#DC2626" strokeWidth="2" />
              {/* Rider */}
              <circle cx="75" cy="35" r="12" fill="#FEF08A" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M65 47 L 85 47 L 90 75 L 60 75 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="2" />
            </g>

            {/* Right Chestnut Steed & Royal Prince */}
            <g transform="translate(300, 180)">
              {/* Chestnut Steed */}
              <path d="M130 110 Q 80 80 20 100 Q -10 60 0 30 Q 30 40 40 60 Q 80 70 110 90 Z" fill="#B45309" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="10" cy="38" r="4" fill="#2D2D2D" />
              <path d="M30 100 L 20 170 M 45 105 L 35 170 M 110 110 L 120 170 M 125 115 L 135 170" stroke="#2D2D2D" strokeWidth="4" />
              {/* Saddle */}
              <rect x="45" y="85" width="45" height="30" rx="6" fill="#DC2626" stroke="#F59E0B" strokeWidth="2" />
              {/* Rider with Mukuta Crown */}
              <circle cx="70" cy="45" r="12" fill="#FEF08A" stroke="#2D2D2D" strokeWidth="2" />
              <polygon points="65,33 70,18 75,33" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M60 57 L 80 57 L 85 85 L 55 85 Z" fill="#047857" stroke="#2D2D2D" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'pattachitra_odisha':
        return (
          <svg viewBox="0 0 480 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="480" fill="#FEF3C7" />
            {/* Distinctive Orissan Pattachitra Frame with Multi-Colored Floral Borders */}
            <rect x="12" y="12" width="456" height="456" fill="none" stroke="#DC2626" strokeWidth="16" />
            <rect x="26" y="26" width="428" height="428" fill="none" stroke="#F59E0B" strokeWidth="8" />
            <rect x="36" y="36" width="408" height="408" fill="none" stroke="#2D2D2D" strokeWidth="3" />

            {/* Royal Umbrella (Chhatra) with Hanging Tassels */}
            <g transform="translate(60, 45)">
              <path d="M0 60 Q 90 -10 180 60 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="4" />
              <polygon points="85,0 95,0 90,-20" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="2" />
              <line x1="90" y1="0" x2="90" y2="120" stroke="#2D2D2D" strokeWidth="4" />
              {/* Tassels */}
              {[20, 50, 80, 110, 140, 160].map((tx, idx) => (
                <circle key={idx} cx={tx} cy={65} r="5" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="2" />
              ))}
            </g>

            {/* Devi Sita & Lord Rama on Royal Throne */}
            <g transform="translate(60, 160)">
              {/* Throne Base (Simhasana) */}
              <rect x="0" y="160" width="220" height="60" rx="10" fill="#0284C7" stroke="#2D2D2D" strokeWidth="3" />
              {/* Sita (Golden Ochre) */}
              <circle cx="45" cy="70" r="22" fill="#FDE047" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="52" cy="68" r="5" fill="#2D2D2D" />
              <path d="M25 92 L 65 92 L 80 160 L 10 160 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="3" />

              {/* Rama (Neelamegha Shyama - Azure Blue) with Lotus */}
              <circle cx="125" cy="50" r="24" fill="#0284C7" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="132" cy="48" r="5" fill="#2D2D2D" />
              {/* Orissan Mukuta */}
              <polygon points="110,30 125,0 140,30" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="3" />
              {/* Silk Angavastram */}
              <path d="M100 74 L 150 74 L 170 160 L 80 160 Z" fill="#DC2626" stroke="#2D2D2D" strokeWidth="3" />
              {/* Hand Holding Lotus */}
              <line x1="145" y1="90" x2="185" y2="70" stroke="#0284C7" strokeWidth="4" />
              <circle cx="190" cy="65" r="9" fill="#EC4899" stroke="#2D2D2D" strokeWidth="2" />
            </g>

            {/* Devoted Lord Hanuman in Saffron with Gada */}
            <g transform="translate(300, 120)">
              {/* Halo */}
              <circle cx="70" cy="80" r="45" fill="#FEF08A" stroke="#2D2D2D" strokeWidth="3" />
              {/* Head & Crown */}
              <circle cx="70" cy="80" r="26" fill="#F97316" stroke="#2D2D2D" strokeWidth="3" />
              <polygon points="58,58 70,30 82,58" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="62" cy="76" r="4" fill="#2D2D2D" />
              <path d="M50 90 Q 70 100 85 90" stroke="#2D2D2D" strokeWidth="3" fill="none" />
              {/* Anjali Mudra Folded Hands in Reverence */}
              <path d="M40 100 Q 15 130 0 110 Q 20 90 40 100 Z" fill="#F97316" stroke="#2D2D2D" strokeWidth="3" />
              {/* Muscular Body */}
              <path d="M45 106 L 95 106 L 105 200 L 35 200 Z" fill="#F97316" stroke="#2D2D2D" strokeWidth="3" />
              {/* Green & Gold Scarf */}
              <path d="M40 110 L 30 240 M 100 110 L 110 240" stroke="#047857" strokeWidth="6" />
              {/* Gada (Golden Mace) Resting beside */}
              <g transform="translate(110, 180)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#2D2D2D" strokeWidth="4" />
                <circle cx="0" cy="80" r="16" fill="#F59E0B" stroke="#2D2D2D" strokeWidth="3" />
              </g>
              {/* Legs */}
              <line x1="50" y1="200" x2="50" y2="280" stroke="#F97316" strokeWidth="8" />
              <line x1="85" y1="200" x2="85" y2="280" stroke="#F97316" strokeWidth="8" />
            </g>
          </svg>
        );

      case 'thangka_sikkim':
        return (
          <svg viewBox="0 0 450 550" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="550" fill="#38BDF8" />
            {/* Luminous Rainbow Rays of Enlightenment */}
            <g transform="translate(225, 230)">
              {[-60, -40, -20, 0, 20, 40, 60].map((deg, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={Math.sin((deg * Math.PI) / 180) * 300}
                  y2={-Math.cos((deg * Math.PI) / 180) * 300}
                  stroke={['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'][i % 5]}
                  strokeWidth="18"
                  opacity="0.35"
                />
              ))}
            </g>

            {/* Glowing Vermilion Halo */}
            <circle cx="225" cy="180" r="85" fill="#DC2626" stroke="#F59E0B" strokeWidth="6" />

            {/* Shakyamuni Buddha in Golden Glow */}
            <g transform="translate(150, 90)">
              {/* Blue Ushnisha (Cranial Knott) & Curls */}
              <circle cx="75" cy="50" r="18" fill="#1E3A8A" />
              <circle cx="75" cy="30" r="8" fill="#1E3A8A" />
              {/* Serene Face */}
              <ellipse cx="75" cy="65" rx="30" ry="34" fill="#FDE047" stroke="#D97706" strokeWidth="3" />
              {/* Long Earlobes */}
              <path d="M43 65 L 43 90 M 107 65 L 107 90" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
              {/* Meditative Half-Closed Eyes */}
              <path d="M58 65 Q 66 60 74 65 M 76 65 Q 84 60 92 65" stroke="#2D2D2D" strokeWidth="3" fill="none" />
              <circle cx="75" cy="54" r="3" fill="#DC2626" /> {/* Urna */}
              
              {/* Saffron Robe Draped across Shoulder */}
              <path d="M40 95 C 40 180, 110 180, 110 95 Z" fill="#EA580C" stroke="#B45309" strokeWidth="3" />
              <path d="M30 130 C 30 220, 120 220, 120 130 Z" fill="#DC2626" />
              
              {/* Earth-Touching Mudra Hand (Right) & Lapis Bowl (Left) */}
              <line x1="30" y1="170" x2="10" y2="240" stroke="#FDE047" strokeWidth="10" strokeLinecap="round" />
              <circle cx="75" cy="200" r="14" fill="#1E3A8A" stroke="#F59E0B" strokeWidth="3" />
            </g>

            {/* Sacred Multi-Tiered Blooming Peony Lotus Throne */}
            <g transform="translate(75, 340)">
              {/* Lotus Petals Layer 1 (Pink/Red) */}
              {[30, 80, 130, 180, 230, 270].map((px, i) => (
                <path
                  key={i}
                  d={`M${px} 60 C ${px - 20} 0, ${px + 20} 0, ${px + 40} 60 Z`}
                  fill={i % 2 === 0 ? '#F43F5E' : '#FDA4AF'}
                  stroke="#BE123C"
                  strokeWidth="2"
                />
              ))}
              {/* Lotus Petals Layer 2 (Cyan/White) */}
              {[50, 100, 150, 200, 250].map((px, i) => (
                <path
                  key={i}
                  d={`M${px} 80 C ${px - 25} 30, ${px + 25} 30, ${px + 45} 80 Z`}
                  fill={i % 2 === 0 ? '#38BDF8' : '#FFF8E7'}
                  stroke="#0284C7"
                  strokeWidth="2"
                />
              ))}
            </g>

            {/* Floating White Doves at Top */}
            <path d="M70 40 Q 90 20 110 35 Q 90 50 70 40 Z" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="2" />
            <path d="M340 40 Q 360 20 380 35 Q 360 50 340 40 Z" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="2" />
          </svg>
        );

      case 'mysore_karnataka':
        return (
          <svg viewBox="0 0 450 550" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="550" fill="#1E293B" />
            {/* Heavy Embossed Gold Leaf Border (Mysore Style) */}
            <rect x="15" y="15" width="420" height="520" fill="none" stroke="#F59E0B" strokeWidth="18" />
            <rect x="28" y="28" width="394" height="494" fill="none" stroke="#DC2626" strokeWidth="4" />

            {/* Embossed Crown Mukuta of Goddess Sharada */}
            <g transform="translate(140, 50)">
              <polygon points="50,10 85,90 120,10 85,0" fill="#F59E0B" stroke="#B45309" strokeWidth="4" />
              <rect x="60" y="80" width="50" height="15" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
              <circle cx="85" cy="40" r="8" fill="#DC2626" />
            </g>

            {/* Goddess Sharadamba in White Silk with Gold Brocade */}
            <g transform="translate(100, 140)">
              {/* Serene Luminous Face */}
              <ellipse cx="125" cy="50" rx="30" ry="34" fill="#FEF3C7" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M110 46 Q 118 40 126 46 M 128 46 Q 136 40 144 46" stroke="#2D2D2D" strokeWidth="3" fill="none" />
              <circle cx="127" cy="40" r="3" fill="#DC2626" />

              {/* Ornate Gold Gesso Body & Four Arms */}
              <path d="M90 90 L 160 90 L 175 220 L 75 220 Z" fill="#FFF8E7" stroke="#F59E0B" strokeWidth="4" />
              {/* Embossed Gesso Ornaments */}
              <path d="M90 100 L 160 100 M 95 120 L 155 120 M 100 140 L 150 140" stroke="#F59E0B" strokeWidth="6" />

              {/* Mysore Inlaid Veena */}
              <g transform="translate(-10, 110) rotate(-30)">
                <rect x="0" y="40" width="220" height="20" rx="10" fill="#92400E" stroke="#F59E0B" strokeWidth="3" />
                <circle cx="20" cy="50" r="35" fill="#F59E0B" stroke="#78350F" strokeWidth="4" />
                <circle cx="190" cy="50" r="22" fill="#F59E0B" stroke="#78350F" strokeWidth="3" />
              </g>

              {/* Pink Lotus Pedestal */}
              <path d="M20 280 Q 125 240 230 280 L 210 320 L 40 320 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="4" />
            </g>

            {/* Gandharvas & Rishis in Background */}
            <g transform="translate(40, 80)">
              <circle cx="30" cy="30" r="14" fill="#FEF3C7" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M15 45 L 45 45 L 50 90 L 10 90 Z" fill="#F59E0B" />
            </g>
            <g transform="translate(340, 80)">
              <circle cx="30" cy="30" r="14" fill="#FEF3C7" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M15 45 L 45 45 L 50 90 L 10 90 Z" fill="#F59E0B" />
            </g>
          </svg>
        );

      case 'tanjore_tamilnadu':
        return (
          <svg viewBox="0 0 450 550" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="550" fill="#450A0A" />
            {/* Grand 24K Gold Arch (Prabhavali) with Inset Gemstones */}
            <path d="M40 500 L 40 220 C 40 70, 410 70, 410 220 L 410 500 Z" fill="#F59E0B" stroke="#78350F" strokeWidth="8" />
            <path d="M70 500 L 70 230 C 70 110, 380 110, 380 230 L 380 500 Z" fill="#7F1D1D" />

            {/* Inset Kundan Gemstones (Ruby Red & Emerald Green) along Arch */}
            {[0, 30, 60, 90, 120, 150, 180].map((ang, i) => {
              const rad = (ang * Math.PI) / 180;
              const gx = 225 - Math.cos(rad) * 155;
              const gy = 200 - Math.sin(rad) * 115;
              return (
                <circle
                  key={i}
                  cx={gx}
                  cy={gy}
                  r="8"
                  fill={i % 2 === 0 ? '#DC2626' : '#10B981'}
                  stroke="#FFF8E7"
                  strokeWidth="3"
                />
              );
            })}

            {/* Dark Stone Murti Goddess Lakshmi / Meenakshi */}
            <g transform="translate(135, 140)">
              {/* Crown (Kireetam) Encrusted in Gold */}
              <polygon points="65,10 90,-40 115,10" fill="#F59E0B" stroke="#78350F" strokeWidth="4" />
              {/* Dark Deity Face */}
              <circle cx="90" cy="50" r="32" fill="#1E293B" stroke="#F59E0B" strokeWidth="3" />
              {/* Tilak and Nose Ring */}
              <circle cx="90" cy="42" r="3" fill="#DC2626" />
              <circle cx="99" cy="52" r="3" fill="#F59E0B" />

              {/* Heavy Gold Plated Temple Jewelry & Vastra */}
              <path d="M50 85 L 130 85 L 150 250 L 30 250 Z" fill="#F59E0B" stroke="#78350F" strokeWidth="5" />
              {/* Heavy Malas (Garlands) of Jasmine & Lotus */}
              <path d="M30 85 Q 90 200 150 85" stroke="#FFF8E7" strokeWidth="14" fill="none" />
              <path d="M40 95 Q 90 220 140 95" stroke="#F43F5E" strokeWidth="12" fill="none" />
            </g>

            {/* Lotus Throne Base */}
            <path d="M60 460 Q 225 410 390 460 L 380 510 L 70 510 Z" fill="#FDA4AF" stroke="#BE123C" strokeWidth="4" />
          </svg>
        );

      case 'kangra_himachal':
        return (
          <svg viewBox="0 0 450 550" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="550" fill="#D1FAE5" />
            {/* Lush Rolling Hills & Blossoming Almond Tree */}
            <path d="M0 450 Q 200 380 450 450 L 450 550 L 0 550 Z" fill="#10B981" />
            
            {/* Almond Blossom Tree */}
            <g transform="translate(300, 60)">
              <path d="M40 380 Q 20 200 80 80 Q 100 40 60 10" stroke="#78350F" strokeWidth="14" fill="none" />
              {/* Delicate White & Pink Almond Blossoms */}
              {[
                [40, 20], [80, 40], [20, 60], [70, 80], [10, 100], [90, 120], [30, 140]
              ].map(([fx, fy], i) => (
                <circle key={i} cx={fx} cy={fy} r="9" fill="#FFF8E7" stroke="#F43F5E" strokeWidth="2" />
              ))}
            </g>

            {/* Kangra Nayika (Graceful Maiden) */}
            <g transform="translate(80, 120)">
              {/* Delicate Pahari Profile */}
              <circle cx="95" cy="50" r="26" fill="#FEF3C7" stroke="#2D2D2D" strokeWidth="2" />
              <path d="M92 48 Q 102 42 110 48" stroke="#2D2D2D" strokeWidth="2" fill="none" />
              <circle cx="108" cy="52" r="2" fill="#DC2626" />
              {/* Royal Blue Translucent Odhani / Dupatta with Gold Dots */}
              <path d="M60 40 C 40 160, 150 280, 170 340 L 80 340 C 40 240, 30 120, 60 40 Z" fill="#1E3A8A" opacity="0.9" />
              {/* Saffron Peshwaj Dress */}
              <path d="M65 75 L 115 75 L 140 340 L 40 340 Z" fill="#EA580C" stroke="#C2410C" strokeWidth="3" />
              {/* Extended Arm Holding Pearl Necklace */}
              <line x1="110" y1="95" x2="230" y2="130" stroke="#FEF3C7" strokeWidth="6" strokeLinecap="round" />
              {/* Pearl Necklace */}
              <path d="M230 130 Q 250 170 230 190 Q 210 170 230 130" stroke="#FFF8E7" strokeWidth="3" fill="none" strokeDasharray="3 3" />
            </g>

            {/* Royal Blue Peacock looking up eagerly */}
            <g transform="translate(290, 310)">
              <ellipse cx="60" cy="80" rx="35" ry="50" fill="#1E3A8A" stroke="#2D2D2D" strokeWidth="3" />
              {/* Neck & Crest */}
              <path d="M60 40 Q 50 10 30 15 Q 40 30 55 45 Z" fill="#0284C7" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="36" cy="18" r="3" fill="#2D2D2D" />
              <polygon points="30,15 20,18 30,22" fill="#DC2626" />
            </g>
          </svg>
        );

      case 'gond_madhyapradesh':
        return (
          <svg viewBox="0 0 500 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="450" fill="#FFFBEB" />
            
            {/* Grand Mahua Tree with Pattern-Filled Leaves */}
            <g transform="translate(250, 40)">
              <path d="M0 380 L 18 120 L 0 60 L -18 120 Z" fill="#1F2937" />
              <circle cx="-90" cy="90" r="60" fill="#047857" opacity="0.8" />
              <circle cx="90" cy="90" r="60" fill="#B45309" opacity="0.8" />
              <circle cx="0" cy="60" r="70" fill="#1F2937" opacity="0.8" />

              {/* Gond Texture Lines inside Leaves */}
              {[-120, -80, -40, 0, 40, 80, 120].map((lx, idx) => (
                <ellipse key={idx} cx={lx} cy={60 + (idx % 2) * 20} rx="16" ry="8" fill="#FFFBEB" stroke="#1F2937" strokeWidth="2" />
              ))}
            </g>

            {/* Left Dotted Gond Bull */}
            <g transform="translate(60, 240)">
              <path d="M20 40 Q 80 15 130 40 Q 100 90 20 40" fill="#1F2937" stroke="#1F2937" strokeWidth="3" />
              <circle cx="15" cy="20" r="14" fill="#1F2937" />
              {/* Distinctive White Gond Dots Pattern */}
              {[30, 45, 60, 75, 90, 105, 120].map((dx, i) => (
                <circle key={i} cx={dx} cy={42 + (i % 2) * 8} r="3" fill="#FFFFFF" />
              ))}
              {/* Legs */}
              <line x1="30" y1="60" x2="30" y2="130" stroke="#1F2937" strokeWidth="5" />
              <line x1="110" y1="60" x2="110" y2="130" stroke="#1F2937" strokeWidth="5" />
            </g>

            {/* Right Patterned Gond Bull in Brick Red Coat */}
            <g transform="translate(280, 240)">
              <path d="M20 40 Q 80 15 130 40 Q 100 90 20 40" fill="#991B1B" stroke="#1F2937" strokeWidth="3" />
              <circle cx="15" cy="20" r="14" fill="#1F2937" />
              {/* Dot Grid */}
              {[30, 45, 60, 75, 90, 105, 120].map((dx, i) => (
                <circle key={i} cx={dx} cy={42 + (i % 2) * 8} r="3" fill="#FDE047" />
              ))}
              {/* Legs */}
              <line x1="30" y1="60" x2="30" y2="130" stroke="#1F2937" strokeWidth="5" />
              <line x1="110" y1="60" x2="110" y2="130" stroke="#1F2937" strokeWidth="5" />
            </g>
          </svg>
        );

      case 'shrinathji_rajasthan':
        return (
          <svg viewBox="0 0 450 550" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="550" fill="#0284C7" />
            {/* Pichwai Celestial Border */}
            <rect x="15" y="15" width="420" height="520" fill="none" stroke="#F59E0B" strokeWidth="12" />
            <rect x="25" y="25" width="400" height="500" fill="none" stroke="#DC2626" strokeWidth="4" />

            {/* Golden Radiating Sun Halo */}
            <circle cx="225" cy="140" r="75" fill="#F59E0B" stroke="#FEF08A" strokeWidth="6" />

            {/* Lord Krishna in Tribhanga Posture Playing Venu (Flute) */}
            <g transform="translate(140, 80)">
              {/* Peacock Feather (Mor Pankh) Crown */}
              <polygon points="70,10 85,-35 100,10" fill="#F59E0B" stroke="#78350F" strokeWidth="3" />
              <circle cx="85" cy="-20" r="9" fill="#047857" stroke="#1E3A8A" strokeWidth="3" />

              {/* Blue Face with Sweet Expression */}
              <ellipse cx="85" cy="50" rx="28" ry="32" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" />
              <path d="M72 45 Q 80 38 88 45 M 90 45 Q 98 38 106 45" stroke="#1E3A8A" strokeWidth="3" fill="none" />
              <circle cx="85" cy="38" r="3" fill="#DC2626" />

              {/* Golden Venu (Flute) */}
              <line x1="-30" y1="75" x2="160" y2="70" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
              
              {/* Pink & Gold Pitambari Silk Dhoti in Graceful Swirl */}
              <path d="M50 110 L 120 110 L 140 280 C 120 330, 40 330, 30 280 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="4" />
              <path d="M60 110 L 110 110 L 120 200 L 50 200 Z" fill="#F59E0B" />
              {/* Pearl Necklaces (Vanamala) */}
              <path d="M55 100 Q 85 200 115 100" stroke="#FFF8E7" strokeWidth="4" fill="none" strokeDasharray="4 4" />
            </g>

            {/* Devoted Kamadhenu Cow at Feet */}
            <g transform="translate(50, 360)">
              <ellipse cx="60" cy="40" rx="35" ry="24" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="3" />
              <circle cx="25" cy="25" r="14" fill="#FFF8E7" stroke="#2D2D2D" strokeWidth="2" />
              <circle cx="20" cy="22" r="3" fill="#2D2D2D" />
              <polygon points="15,10 20,5 25,10" fill="#DC2626" />
              {/* Cow Garland */}
              <path d="M35 30 Q 55 45 75 30" stroke="#DC2626" strokeWidth="4" fill="none" />
            </g>

            {/* Sacred Brass Incense Urn (Dhoopdani) */}
            <g transform="translate(320, 370)">
              <ellipse cx="40" cy="40" rx="35" ry="18" fill="#F59E0B" stroke="#78350F" strokeWidth="3" />
              <path d="M20 40 L 30 80 L 50 80 L 60 40 Z" fill="#D97706" />
              <polygon points="35,10 45,10 40,-10" fill="#F59E0B" stroke="#78350F" strokeWidth="2" />
            </g>
          </svg>
        );

      default:
        return (
          <div className="w-full h-full bg-[#1E3A8A] flex flex-col items-center justify-center p-6 text-center text-[#FFF8E7]">
            <div className="text-3xl mb-2 font-display">कलाVerse</div>
            <div className="text-sm opacity-80">Authentic Indian Art Heritage</div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#FFF8E7] ${
        showFraming ? 'border-4 border-[#F59E0B] shadow-lg ring-2 ring-[#1E3A8A]/20' : ''
      } ${className}`}
    >
      {renderSVG()}
    </div>
  );
};
