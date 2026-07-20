// Renders team flag using SVG from flagcdn.com (works on all platforms)
// Falls back to Unicode emoji if countryCode is missing
import { useState } from 'react';

interface FlagImgProps {
  team: { flag: string; countryCode: string };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = { sm: 'w-5 h-4', md: 'w-6 h-5', lg: 'w-8 h-6', xl: 'w-12 h-9' };
const emojiSizeMap = { sm: 'text-base', md: 'text-lg', lg: 'text-2xl', xl: 'text-4xl' };

export default function FlagImg({ team, size = 'md', className = '' }: FlagImgProps) {
  const sizeClass = sizeMap[size];
  const emojiClass = emojiSizeMap[size];
  const src = `https://flagcdn.com/w80/${team.countryCode}.png`;
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`inline-flex items-center justify-center ${sizeClass} ${className} ${emojiClass}`}>
        {team.flag}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={team.flag}
      className={`inline-block object-cover rounded-sm shadow-sm ${sizeClass} ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function FlagImgFallback({ team, size = 'md', className = '' }: FlagImgProps) {
  const sizeClass = sizeMap[size];
  const emojiClass = emojiSizeMap[size];
  return (
    <span className={`inline-flex items-center justify-center ${sizeClass} ${className} ${emojiClass}`}>
      {team.flag}
    </span>
  );
}
