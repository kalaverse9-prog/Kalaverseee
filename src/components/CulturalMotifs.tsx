import React from 'react';

// 1. Sacred Lotus Flower (Padma / Kamal) Motif
export const LotusMotif: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
}> = ({ className = '', size = 32, color = '#F59E0B', secondaryColor = '#E11D48' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Outer Petals */}
    <path
      d="M32 8C32 8 20 22 20 38C20 48 26 54 32 56C38 54 44 48 44 38C44 22 32 8 32 8Z"
      fill={secondaryColor}
      fillOpacity="0.25"
      stroke={secondaryColor}
      strokeWidth="1.5"
    />
    <path
      d="M32 16C32 16 12 28 12 40C12 48 18 52 24 53C18 46 22 36 32 28Z"
      fill={color}
      fillOpacity="0.35"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M32 16C32 16 52 28 52 40C52 48 46 52 40 53C46 46 42 36 32 28Z"
      fill={color}
      fillOpacity="0.35"
      stroke={color}
      strokeWidth="1.5"
    />
    {/* Inner Central Bloom */}
    <path
      d="M32 20C30 26 26 36 28 46C30 51 32 54 32 54C32 54 34 51 36 46C38 36 34 26 32 20Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
    />
    {/* Base Calyx & Pollen dots */}
    <path
      d="M20 54C26 57 38 57 44 54C42 59 36 61 32 61C28 61 22 59 20 54Z"
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeWidth="1.2"
    />
    <circle cx="32" cy="38" r="2" fill="#FEF08A" />
    <circle cx="28" cy="42" r="1.5" fill="#FEF08A" />
    <circle cx="36" cy="42" r="1.5" fill="#FEF08A" />
  </svg>
);

// 2. Royal Indian Paisley / Kalka / Mango Motif (Buta)
export const PaisleyMotif: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  flip?: boolean;
}> = ({ className = '', size = 32, color = '#D97706', flip = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${flip ? '-scale-x-100' : ''} ${className}`}
  >
    <path
      d="M28 58C14 58 6 46 6 34C6 20 18 10 30 6C36 4 44 6 48 10C53 15 54 22 50 28C46 34 38 34 34 30C30 26 34 18 42 16C40 14 36 12 32 14C22 18 14 26 14 36C14 44 20 52 30 52C42 52 50 42 52 32C53 28 56 26 58 28C60 30 59 36 56 42C50 52 40 58 28 58Z"
      fill={color}
      fillOpacity="0.3"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner floral scroll */}
    <circle cx="24" cy="36" r="4" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="1" />
    <path
      d="M24 40C28 44 34 44 38 40"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="34" cy="24" r="2.5" fill="#F59E0B" />
    <circle cx="20" cy="28" r="2" fill="#F59E0B" />
  </svg>
);

// 3. Royal Peacock (Mayura) Silhouette & Feather Motif
export const PeacockMotif: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
  flip?: boolean;
}> = ({
  className = '',
  size = 36,
  color = '#0284C7',
  accentColor = '#10B981',
  flip = false
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${flip ? '-scale-x-100' : ''} ${className}`}
  >
    {/* Peacock Crown Crest */}
    <path d="M26 12L24 6M28 11L28 4M30 12L32 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="5" r="1.5" fill="#F59E0B" />
    <circle cx="28" cy="3" r="1.5" fill="#F59E0B" />
    <circle cx="32" cy="5" r="1.5" fill="#F59E0B" />
    {/* Head & Elegant Graceful Neck */}
    <path
      d="M24 14C24 11 27 10 29 11C31 12 32 14 31 17C30 20 27 24 28 29C29 34 34 38 34 44C34 50 28 54 22 54C16 54 12 48 14 42C16 36 20 34 22 30C23 27 24 20 24 14Z"
      fill={color}
      fillOpacity="0.4"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Beak & Eye */}
    <path d="M31 13L36 15L31 17" fill={color} stroke={color} strokeWidth="1" />
    <circle cx="28" cy="13" r="1" fill="#FEF08A" />
    {/* Fan Tail & Feather Eyes */}
    <path
      d="M34 36C42 32 52 34 56 42C59 48 54 56 44 58C36 60 28 58 24 54"
      stroke={accentColor}
      strokeWidth="2"
      strokeDasharray="2 3"
      strokeLinecap="round"
    />
    <circle cx="48" cy="38" r="3.5" fill={accentColor} stroke="#047857" strokeWidth="1" />
    <circle cx="48" cy="38" r="1.5" fill="#F59E0B" />
    <circle cx="52" cy="48" r="3.5" fill={accentColor} stroke="#047857" strokeWidth="1" />
    <circle cx="52" cy="48" r="1.5" fill="#F59E0B" />
    <circle cx="42" cy="52" r="3.5" fill={accentColor} stroke="#047857" strokeWidth="1" />
    <circle cx="42" cy="52" r="1.5" fill="#F59E0B" />
  </svg>
);

// 4. Sacred Mandala Rosette / Yantra Design
export const MandalaRosette: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}> = ({ className = '', size = 44, color = '#F59E0B', accentColor = '#E11D48' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Outer Ring */}
    <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
    <circle cx="40" cy="40" r="32" stroke={color} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
    
    {/* 8-Pointed Star Petals */}
    <g stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.15">
      <path d="M40 8 L46 28 L66 28 L50 40 L56 60 L40 48 L24 60 L30 40 L14 28 L34 28 Z" />
    </g>

    {/* Secondary Layer Star */}
    <g stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.2">
      <path d="M40 18 L44 32 L58 32 L47 40 L51 54 L40 45 L29 54 L33 40 L22 32 L36 32 Z" />
    </g>

    {/* Central Bindu & Rings */}
    <circle cx="40" cy="40" r="10" stroke={color} strokeWidth="1.5" fill="#FFFBEB" />
    <circle cx="40" cy="40" r="6" fill={accentColor} />
    <circle cx="40" cy="40" r="2.5" fill="#FEF08A" />

    {/* Radiating Beads */}
    <circle cx="40" cy="11" r="2" fill={color} />
    <circle cx="69" cy="40" r="2" fill={color} />
    <circle cx="40" cy="69" r="2" fill={color} />
    <circle cx="11" cy="40" r="2" fill={color} />
    <circle cx="61" cy="19" r="1.5" fill={accentColor} />
    <circle cx="61" cy="61" r="1.5" fill={accentColor} />
    <circle cx="19" cy="61" r="1.5" fill={accentColor} />
    <circle cx="19" cy="19" r="1.5" fill={accentColor} />
  </svg>
);

// 5. Watermark Background Mandala (Subtle sacred background ornament)
export const MandalaWatermark: React.FC<{
  className?: string;
  size?: number;
  opacity?: number;
}> = ({ className = '', size = 300, opacity = 0.07 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity }}
  >
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="2" />
    
    {/* 16 Petal Radial Rays */}
    {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
      <g key={i} transform={`rotate(${deg} 100 100)`}>
        <path d="M100 25 C95 45 95 65 100 75 C105 65 105 45 100 25 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="15" r="3" fill="currentColor" />
        <circle cx="100" cy="5" r="2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

// 6. Vine & Creeper Floral Border (Lata / Vriksha floral tendrils)
export const VineCreeperBorder: React.FC<{
  className?: string;
  color?: string;
  flowerColor?: string;
}> = ({ className = '', color = '#059669', flowerColor = '#F59E0B' }) => (
  <div className={`w-full overflow-hidden flex items-center justify-center py-1 ${className}`}>
    <svg
      width="100%"
      height="24"
      viewBox="0 0 600 24"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Running Vine Wave */}
      <path
        d="M0 12 Q37.5 4 75 12 T150 12 T225 12 T300 12 T375 12 T450 12 T525 12 T600 12"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Secondary Counter-Wave Vine */}
      <path
        d="M0 12 Q37.5 20 75 12 T150 12 T225 12 T300 12 T375 12 T450 12 T525 12 T600 12"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.6"
        fill="none"
      />
      {/* Flowing Leaves & Buds along nodes */}
      {[37.5, 112.5, 187.5, 262.5, 337.5, 412.5, 487.5, 562.5].map((x, idx) => (
        <g key={idx}>
          {/* Alternating top/bottom leaves */}
          <path
            d={`M${x} 12 C${x - 8} ${idx % 2 === 0 ? 3 : 21}, ${x + 8} ${idx % 2 === 0 ? 3 : 21}, ${x + 12} 12`}
            fill={color}
            fillOpacity="0.45"
            stroke={color}
            strokeWidth="1"
          />
          {/* Flower Bud */}
          <circle cx={x} cy={idx % 2 === 0 ? 5 : 19} r="3" fill={flowerColor} stroke="#B45309" strokeWidth="0.8" />
          <circle cx={x} cy={idx % 2 === 0 ? 5 : 19} r="1" fill="#FEF08A" />
        </g>
      ))}
    </svg>
  </div>
);

// 7. Traditional Indian Toran / Temple Arch Fringe Border
export const ToranBorder: React.FC<{
  className?: string;
  color?: string;
  accentColor?: string;
}> = ({ className = '', color = '#F59E0B', accentColor = '#DC2626' }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg
      width="100%"
      height="18"
      viewBox="0 0 480 18"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="2" x2="480" y2="2" stroke={color} strokeWidth="3" />
      <line x1="0" y1="5" x2="480" y2="5" stroke={accentColor} strokeWidth="1" strokeDasharray="4 2" />
      
      {/* Repeating hanging Marigold & Mango leaf festoons (Toran drops) */}
      {Array.from({ length: 16 }).map((_, i) => {
        const x = i * 30 + 15;
        return (
          <g key={i}>
            {/* Hanging triangle leaf */}
            <polygon points={`${x - 8},5 ${x + 8},5 ${x},15`} fill={color} fillOpacity="0.75" stroke={color} strokeWidth="1" />
            {/* Round Marigold bead */}
            <circle cx={x} cy="15" r="2.5" fill={accentColor} />
            <circle cx={x} cy="15" r="1" fill="#FEF08A" />
          </g>
        );
      })}
    </svg>
  </div>
);

// 8. Traditional Rangoli Ornate Corner Brackets (for cards and frames)
export const OrnateCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
  size?: number;
}> = ({ position, className = '', color = '#F59E0B', size = 32 }) => {
  const transform = {
    'top-left': '',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)'
  }[position];

  return (
    <div
      className={`absolute pointer-events-none select-none z-10 ${
        position.includes('top') ? 'top-1' : 'bottom-1'
      } ${position.includes('left') ? 'left-1' : 'right-1'} ${className}`}
      style={{ transform, width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L2 18C2 18 6 10 14 10C22 10 22 2 22 2L2 2Z" fill={color} fillOpacity="0.2" />
        <path d="M2 2L2 22M2 2L22 2" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 6L6 16M6 6L16 6" stroke={color} strokeWidth="1" strokeOpacity="0.7" />
        <circle cx="6" cy="6" r="2" fill={color} />
        <circle cx="12" cy="12" r="1.5" fill={color} />
        <path d="M2 14C6 14 10 10 10 6" stroke={color} strokeWidth="1.2" />
      </svg>
    </div>
  );
};

// 9. Ornate Ethnic Section Header Banner
export const SectionHeaderBanner: React.FC<{
  title: string;
  subtitle: string;
  tag?: string;
  themeColor?: 'indigo' | 'amber' | 'rose' | 'emerald' | 'purple' | 'cyan' | 'teal' | 'blue' | 'green' | 'orange' | string;
  icon?: React.ReactNode;
  rightBadge?: React.ReactNode;
}> = ({
  title,
  subtitle,
  tag,
  themeColor = 'indigo',
  icon,
  rightBadge
}) => {
  const themeMap = {
    indigo: {
      gradient: 'from-[#1E1B4B] via-[#1E3A8A] to-[#312E81]',
      border: 'border-[#F59E0B]',
      accent: '#F59E0B',
      secondaryAccent: '#EC4899',
      tagBg: 'bg-[#F59E0B]/20 text-[#FEF08A] border-[#F59E0B]/40'
    },
    amber: {
      gradient: 'from-[#78350F] via-[#B45309] to-[#92400E]',
      border: 'border-[#FEF08A]',
      accent: '#FEF08A',
      secondaryAccent: '#F97316',
      tagBg: 'bg-white/20 text-[#FEF08A] border-white/40'
    },
    rose: {
      gradient: 'from-[#881337] via-[#BE123C] to-[#9F1239]',
      border: 'border-[#FDE047]',
      accent: '#FDE047',
      secondaryAccent: '#FB7185',
      tagBg: 'bg-white/20 text-[#FFF1F2] border-white/40'
    },
    emerald: {
      gradient: 'from-[#064E3B] via-[#047857] to-[#065F46]',
      border: 'border-[#F59E0B]',
      accent: '#F59E0B',
      secondaryAccent: '#34D399',
      tagBg: 'bg-[#F59E0B]/20 text-[#FEF08A] border-[#F59E0B]/40'
    },
    purple: {
      gradient: 'from-[#581C87] via-[#7E22CE] to-[#6B21A8]',
      border: 'border-[#FDE047]',
      accent: '#FDE047',
      secondaryAccent: '#C084FC',
      tagBg: 'bg-white/20 text-[#F3E8FF] border-white/40'
    },
    cyan: {
      gradient: 'from-[#164E63] via-[#0E7490] to-[#155E75]',
      border: 'border-[#F59E0B]',
      accent: '#F59E0B',
      secondaryAccent: '#22D3EE',
      tagBg: 'bg-[#F59E0B]/20 text-[#FEF08A] border-[#F59E0B]/40'
    },
    teal: {
      gradient: 'from-[#134E4A] via-[#0F766E] to-[#115E59]',
      border: 'border-[#2DD4BF]',
      accent: '#2DD4BF',
      secondaryAccent: '#FDE047',
      tagBg: 'bg-white/20 text-[#CCFBF1] border-white/40'
    },
    blue: {
      gradient: 'from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF]',
      border: 'border-[#60A5FA]',
      accent: '#60A5FA',
      secondaryAccent: '#FDE047',
      tagBg: 'bg-white/20 text-[#DBEAFE] border-white/40'
    },
    green: {
      gradient: 'from-[#14532D] via-[#16A34A] to-[#15803D]',
      border: 'border-[#4ADE80]',
      accent: '#4ADE80',
      secondaryAccent: '#FDE047',
      tagBg: 'bg-white/20 text-[#DCFCE7] border-white/40'
    },
    orange: {
      gradient: 'from-[#7C2D12] via-[#EA580C] to-[#C2410C]',
      border: 'border-[#FB923C]',
      accent: '#FB923C',
      secondaryAccent: '#FEF08A',
      tagBg: 'bg-white/20 text-[#FFEDD5] border-white/40'
    }
  };

  const themeStyles = themeMap[themeColor as keyof typeof themeMap] || themeMap.indigo;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden bg-gradient-to-r ${themeStyles.gradient} text-white p-6 sm:p-8 border-3 ${themeStyles.border} shadow-xl my-4`}
    >
      {/* Background Watermark Mandalas */}
      <div className="absolute -top-12 -right-12 text-white pointer-events-none">
        <MandalaWatermark size={240} opacity={0.12} />
      </div>
      <div className="absolute -bottom-16 -left-12 text-white pointer-events-none">
        <MandalaWatermark size={220} opacity={0.08} />
      </div>

      {/* Toran Fringe at top */}
      <div className="absolute top-0 left-0 right-0">
        <ToranBorder color={themeStyles.accent} accentColor={themeStyles.secondaryAccent} />
      </div>

      {/* Decorative Corner Flairs */}
      <OrnateCorner position="top-left" color={themeStyles.accent} size={28} />
      <OrnateCorner position="top-right" color={themeStyles.accent} size={28} />
      <OrnateCorner position="bottom-left" color={themeStyles.accent} size={28} />
      <OrnateCorner position="bottom-right" color={themeStyles.accent} size={28} />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
        <div className="space-y-2 max-w-2xl">
          {tag && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs backdrop-blur-sm">
              <LotusMotif size={16} color={themeStyles.accent} secondaryColor="#FFFFFF" />
              <span>{tag}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-md">
                {icon}
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>{title}</span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xl font-medium">
            {subtitle}
          </p>
        </div>

        {rightBadge && (
          <div className="shrink-0 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl">
            {rightBadge}
          </div>
        )}
      </div>

      {/* Bottom Vine Creeper accent */}
      <div className="mt-4 pt-2 border-t border-white/15">
        <VineCreeperBorder color={themeStyles.accent} flowerColor="#FFFFFF" />
      </div>
    </div>
  );
};
