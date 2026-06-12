import { useState } from 'react';

const EMOJI_GROUPS: { label: string; emojis: string[] }[] = [
  { label: '常用', emojis: ['😀','😂','😍','🥳','😎','🤩','😤','😢','😡','👍','👎','🙏','💪','🔥','❤️','🎉'] },
  { label: '足球', emojis: ['⚽','🏆','🥇','🥈','🥉','🎯','💫','🌟','⭐','👑','🎖️','🏟️','🥅','⚡','💥','📣'] },
  { label: '手势', emojis: ['👏','🙌','🤝','✌️','🤞','👊','🤙','💪','🫶','👋','🖐️','🤟'] },
  { label: '国旗', emojis: ['🇧🇷','🇦🇷','🇫🇷','🇩🇪','🇪🇸','🇵🇹','🇳🇱','🏴󠁧󠁢󠁥󠁮󠁧󠁿','🇧🇪','🇭🇷','🇺🇸','🇲🇽','🇨🇦','🇯🇵','🇰🇷','🇨🇳'] },
  { label: '表情', emojis: ['😊','😄','🤔','😅','😭','🥺','😴','🤣','🙂','😏','😬','🤗','🫡','😇','🤪','🫠'] },
];

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

export default function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <div className="absolute bottom-full left-0 mb-2 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 w-72 overflow-hidden">
        {/* Tab bar */}
        <div className="flex border-b border-gray-200 dark:border-gray-600 overflow-x-auto">
          {EMOJI_GROUPS.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActiveGroup(i)}
              className={`px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                activeGroup === i
                  ? 'text-wc-green border-b-2 border-wc-green'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        {/* Emoji grid */}
        <div className="grid grid-cols-8 gap-1 p-2 max-h-40 overflow-y-auto">
          {EMOJI_GROUPS[activeGroup].emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onSelect(emoji)}
              className="w-8 h-8 flex items-center justify-center text-xl rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors leading-none"
            >
              {emoji}
            </button>
          ))}
        </div>
        {/* Close button */}
        <div className="border-t border-gray-100 dark:border-gray-700 px-2 py-1">
          <button
            onClick={onClose}
            className="w-full text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 py-1"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
