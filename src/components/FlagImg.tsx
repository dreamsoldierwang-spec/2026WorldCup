// Renders team flag using SVG from flagcdn.com (works on all platforms)
// Falls back to Unicode emoji if countryCode is missing
interface FlagImgProps {
  team: { flag: string; countryCode: string };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = { sm: 'w-5 h-4', md: 'w-6 h-5', lg: 'w-8 h-6', xl: 'w-12 h-9' };

export default function FlagImg({ team, size = 'md', className = '' }: FlagImgProps) {
  const sizeClass = sizeMap[size];
  const src = `https://flagcdn.com/w80/${team.countryCode}.png`;

  return (
    <img
      src={src}
      alt={team.flag}
      className={`inline-block object-cover rounded-sm shadow-sm ${sizeClass} ${className}`}
      loading="lazy"
      onError={(e) => {
        // Fall back to emoji if SVG fails to load
        (e.target as HTMLImageElement).style.display = 'none';
        const parent = (e.target as HTMLImageElement).parentElement;
        if (parent) {
          parent.setAttribute('data-fallback', team.flag);
        }
      }}
    />
  );
}

export function FlagImgFallback({ team, size = 'md', className = '' }: FlagImgProps) {
  const sizeClass = sizeMap[size];
  return (
    <span className={`inline-flex items-center ${sizeClass} ${className}`}>
      {team.flag}
    </span>
  );
}
