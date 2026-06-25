import type { Team } from '../types';

export interface Scorer {
  rank: number;
  name: string;
  nameZh: string;
  teamId: string;
  goals: number;
  matches: number;
  position: string;
}

// 2026世界杯射手榜 - 实时更新
export const scorers: Scorer[] = [
  { rank: 1, name: 'Lionel Messi', nameZh: '梅西', teamId: 'arg', goals: 5, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Kylian Mbappe', nameZh: '姆巴佩', teamId: 'fra', goals: 4, matches: 2, position: 'Forward' },
  { rank: 2, name: 'Erling Haaland', nameZh: '哈兰德', teamId: 'nor', goals: 4, matches: 2, position: 'Forward' },
  { rank: 2, name: 'Vinicius Junior', nameZh: '维尼修斯', teamId: 'bra', goals: 4, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Jonathan David', nameZh: '乔纳森·戴维', teamId: 'can', goals: 4, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Deniz Undav', nameZh: '翁达夫', teamId: 'ger', goals: 3, matches: 2, position: 'Forward' },
  { rank: 6, name: 'Matheus Cunha', nameZh: '库尼亚', teamId: 'bra', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Manzambi', nameZh: '曼赞比', teamId: 'sui', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Seibari', nameZh: '赛巴里', teamId: 'mar', goals: 3, matches: 3, position: 'Midfielder' },
  { rank: 10, name: 'Cody Gakpo', nameZh: '加克波', teamId: 'ned', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Crysencio Summerville', nameZh: '萨默维尔', teamId: 'ned', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Mikel Oyarzabal', nameZh: '奥亚萨瓦尔', teamId: 'esp', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Maximiliano Araujo', nameZh: '阿劳霍', teamId: 'uru', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Ayase Ueda', nameZh: '上田绮世', teamId: 'jpn', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Harry Kane', nameZh: '凯恩', teamId: 'eng', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Kai Havertz', nameZh: '哈弗茨', teamId: 'ger', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Cristiano Ronaldo', nameZh: 'C罗', teamId: 'por', goals: 2, matches: 2, position: 'Forward' },
  { rank: 10, name: 'Julian Quinones', nameZh: '基尼奥内斯', teamId: 'mex', goals: 2, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Raul Jimenez', nameZh: '劳尔·希门尼斯', teamId: 'mex', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Hwang In-beom', nameZh: '黄仁范', teamId: 'kor', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 19, name: 'Oh Hyeon-gyu', nameZh: '吴贤揆', teamId: 'kor', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Ladislav Krejci', nameZh: '克雷伊奇', teamId: 'cze', goals: 1, matches: 2, position: 'Defender' },
  { rank: 19, name: 'Folarin Balogun', nameZh: '巴洛贡', teamId: 'usa', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Gio Reyna', nameZh: '雷纳', teamId: 'usa', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 19, name: 'Cyle Larin', nameZh: '拉林', teamId: 'can', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Breel Embolo', nameZh: '恩博洛', teamId: 'sui', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'John McGinn', nameZh: '约翰·麦金', teamId: 'sco', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 19, name: 'Nestory Irankunda', nameZh: '伊兰昆达', teamId: 'aus', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Connor Metcalfe', nameZh: '梅特卡夫', teamId: 'aus', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 19, name: 'Ramon Mauricio', nameZh: '毛利西奥', teamId: 'par', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Alexander Isak', nameZh: '伊萨克', teamId: 'swe', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Serhou Guirassy', nameZh: '吉拉西', teamId: 'swe', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Ahmed Hush', nameZh: '扈希', teamId: 'qat', goals: 1, matches: 2, position: 'Defender' },
  { rank: 19, name: 'Julian Alvarez', nameZh: '阿尔瓦雷斯', teamId: 'arg', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Moussa Diaby', nameZh: '迪亚比', teamId: 'aut', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Mohamed Salah', nameZh: '萨拉赫', teamId: 'egy', goals: 1, matches: 2, position: 'Forward' },
  { rank: 19, name: 'Jude Bellingham', nameZh: '贝林厄姆', teamId: 'eng', goals: 1, matches: 1, position: 'Midfielder' },
  { rank: 19, name: 'Luis Diaz', nameZh: '路易斯·迪亚斯', teamId: 'col', goals: 1, matches: 1, position: 'Forward' },
  { rank: 19, name: 'Sofyan Amrabat', nameZh: '阿姆拉巴特', teamId: 'mar', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 19, name: 'Ruben Vargas', nameZh: '巴尔加斯', teamId: 'sui', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Luis Chavez', nameZh: '查韦斯', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 19, name: 'Alvaro Fidalgo', nameZh: '菲达尔戈', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 19, name: 'Maseko', nameZh: '马塞科', teamId: 'rsa', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Isidor', nameZh: '伊西多尔', teamId: 'hai', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Alaybegovich', nameZh: '阿拉伊贝戈维奇', teamId: 'bih', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Mahmic', nameZh: '马米奇', teamId: 'bih', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 19, name: 'Hassan Al-Haydos', nameZh: '海多斯', teamId: 'qat', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Nuno Mendes', nameZh: '努诺·门德斯', teamId: 'por', goals: 1, matches: 3, position: 'Defender' },
  { rank: 19, name: 'Rafael Leao', nameZh: '莱奥', teamId: 'por', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Daniel Munoz', nameZh: '穆尼奥斯', teamId: 'col', goals: 1, matches: 3, position: 'Defender' },
  { rank: 19, name: 'Achraf Hakimi', nameZh: '阿什拉夫', teamId: 'mar', goals: 1, matches: 3, position: 'Defender' },
  { rank: 19, name: 'Rahimi', nameZh: '拉希米', teamId: 'mar', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Yassin', nameZh: '亚辛', teamId: 'mar', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Ante Budimir', nameZh: '布迪米尔', teamId: 'cro', goals: 1, matches: 3, position: 'Forward' },
  { rank: 19, name: 'Promise David', nameZh: '普罗米斯·戴维', teamId: 'can', goals: 1, matches: 3, position: 'Forward' },
];

export function getScorerByTeam(teamId: string): Scorer[] {
  return scorers.filter(s => s.teamId === teamId);
}
