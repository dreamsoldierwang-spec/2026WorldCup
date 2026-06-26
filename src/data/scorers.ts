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
  // 5球 - 第1档
  { rank: 1, name: 'Lionel Messi', nameZh: '梅西', teamId: 'arg', goals: 5, matches: 3, position: 'Forward' },

  // 4球 - 第2档
  { rank: 2, name: 'Kylian Mbappe', nameZh: '姆巴佩', teamId: 'fra', goals: 4, matches: 2, position: 'Forward' },
  { rank: 2, name: 'Erling Haaland', nameZh: '哈兰德', teamId: 'nor', goals: 4, matches: 2, position: 'Forward' },
  { rank: 2, name: 'Vinicius Junior', nameZh: '维尼修斯', teamId: 'bra', goals: 4, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Jonathan David', nameZh: '乔纳森·戴维', teamId: 'can', goals: 4, matches: 3, position: 'Forward' },

  // 3球 - 第3档
  { rank: 6, name: 'Deniz Undav', nameZh: '翁达夫', teamId: 'ger', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Matheus Cunha', nameZh: '库尼亚', teamId: 'bra', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Manzambi', nameZh: '曼赞比', teamId: 'sui', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Seibari', nameZh: '赛巴里', teamId: 'mar', goals: 3, matches: 3, position: 'Midfielder' },
  { rank: 6, name: 'Raul Jimenez', nameZh: '劳尔·希门尼斯', teamId: 'mex', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Julian Alvarez', nameZh: '阿尔瓦雷斯', teamId: 'arg', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Cody Gakpo', nameZh: '加克波', teamId: 'ned', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Jamal Musiala', nameZh: '穆西亚拉', teamId: 'ger', goals: 3, matches: 3, position: 'Midfielder' },
  { rank: 6, name: 'Folarin Balogun', nameZh: '巴洛贡', teamId: 'usa', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Youssef En-Nesyri', nameZh: '恩-内斯里', teamId: 'mar', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Franck Kessie', nameZh: '凯西', teamId: 'civ', goals: 3, matches: 3, position: 'Midfielder' },

  // 2球 - 第4档
  { rank: 17, name: 'Crysencio Summerville', nameZh: '萨默维尔', teamId: 'ned', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Mikel Oyarzabal', nameZh: '奥亚萨瓦尔', teamId: 'esp', goals: 2, matches: 2, position: 'Forward' },
  { rank: 17, name: 'Maximiliano Araujo', nameZh: '阿劳霍', teamId: 'uru', goals: 2, matches: 2, position: 'Forward' },
  { rank: 17, name: 'Ayase Ueda', nameZh: '上田绮世', teamId: 'jpn', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Harry Kane', nameZh: '凯恩', teamId: 'eng', goals: 2, matches: 2, position: 'Forward' },
  { rank: 17, name: 'Kai Havertz', nameZh: '哈弗茨', teamId: 'ger', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Cristiano Ronaldo', nameZh: 'C罗', teamId: 'por', goals: 2, matches: 2, position: 'Forward' },
  { rank: 17, name: 'Julian Quinones', nameZh: '基尼奥内斯', teamId: 'mex', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Marcel Sabitzer', nameZh: '萨比策', teamId: 'aut', goals: 2, matches: 2, position: 'Midfielder' },
  { rank: 17, name: 'Florian Wirtz', nameZh: '维尔茨', teamId: 'ger', goals: 2, matches: 3, position: 'Midfielder' },
  { rank: 17, name: 'Niclas Fullkrug', nameZh: '菲尔克鲁格', teamId: 'ger', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Ritsu Doan', nameZh: '堂安律', teamId: 'jpn', goals: 2, matches: 3, position: 'Midfielder' },
  { rank: 17, name: 'Kaoru Mitoma', nameZh: '三笘薰', teamId: 'jpn', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Memphis Depay', nameZh: '德佩', teamId: 'ned', goals: 2, matches: 3, position: 'Forward' },
  { rank: 17, name: 'Alexander Isak', nameZh: '伊萨克', teamId: 'swe', goals: 2, matches: 3, position: 'Forward' },

  // 1球 - 第5档
  { rank: 32, name: 'Hwang In-beom', nameZh: '黄仁范', teamId: 'kor', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Oh Hyeon-gyu', nameZh: '吴贤揆', teamId: 'kor', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Ladislav Krejci', nameZh: '克雷伊奇', teamId: 'cze', goals: 1, matches: 3, position: 'Defender' },
  { rank: 32, name: 'Gio Reyna', nameZh: '雷纳', teamId: 'usa', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Cyle Larin', nameZh: '拉林', teamId: 'can', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Breel Embolo', nameZh: '恩博洛', teamId: 'sui', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'John McGinn', nameZh: '约翰·麦金', teamId: 'sco', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Nestory Irankunda', nameZh: '伊兰昆达', teamId: 'aus', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Connor Metcalfe', nameZh: '梅特卡夫', teamId: 'aus', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Ramon Mauricio', nameZh: '毛利西奥', teamId: 'par', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Serhou Guirassy', nameZh: '吉拉西', teamId: 'swe', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Ahmed Hush', nameZh: '扈希', teamId: 'qat', goals: 1, matches: 3, position: 'Defender' },
  { rank: 32, name: 'Moussa Diaby', nameZh: '迪亚比', teamId: 'aut', goals: 1, matches: 2, position: 'Forward' },
  { rank: 32, name: 'Mohamed Salah', nameZh: '萨拉赫', teamId: 'egy', goals: 1, matches: 2, position: 'Forward' },
  { rank: 32, name: 'Jude Bellingham', nameZh: '贝林厄姆', teamId: 'eng', goals: 1, matches: 1, position: 'Midfielder' },
  { rank: 32, name: 'Luis Diaz', nameZh: '路易斯·迪亚斯', teamId: 'col', goals: 1, matches: 1, position: 'Forward' },
  { rank: 32, name: 'Sofyan Amrabat', nameZh: '阿姆拉巴特', teamId: 'mar', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Ruben Vargas', nameZh: '巴尔加斯', teamId: 'sui', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Luis Chavez', nameZh: '查韦斯', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Alvaro Fidalgo', nameZh: '菲达尔戈', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Maseko', nameZh: '马塞科', teamId: 'rsa', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Isidor', nameZh: '伊西多尔', teamId: 'hai', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Alaybegovich', nameZh: '阿拉伊贝戈维奇', teamId: 'bih', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Mahmic', nameZh: '马米奇', teamId: 'bih', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Hassan Al-Haydos', nameZh: '海多斯', teamId: 'qat', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Nuno Mendes', nameZh: '努诺·门德斯', teamId: 'por', goals: 1, matches: 3, position: 'Defender' },
  { rank: 32, name: 'Rafael Leao', nameZh: '莱奥', teamId: 'por', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Daniel Munoz', nameZh: '穆尼奥斯', teamId: 'col', goals: 1, matches: 3, position: 'Defender' },
  { rank: 32, name: 'Achraf Hakimi', nameZh: '阿什拉夫', teamId: 'mar', goals: 1, matches: 3, position: 'Defender' },
  { rank: 32, name: 'Rahimi', nameZh: '拉希米', teamId: 'mar', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Yassin', nameZh: '亚辛', teamId: 'mar', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Ante Budimir', nameZh: '布迪米尔', teamId: 'cro', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Promise David', nameZh: '普罗米斯·戴维', teamId: 'can', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Kenan Yildiz', nameZh: '伊尔迪兹', teamId: 'tur', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Sebastien Haller', nameZh: '阿莱', teamId: 'civ', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Jurgen Locadia', nameZh: '洛卡迪亚', teamId: 'cuw', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Julio Enciso', nameZh: '恩西索', teamId: 'par', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Aaron Mooy', nameZh: '穆伊', teamId: 'aus', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 32, name: 'Kusini Yengi', nameZh: '库尔', teamId: 'aus', goals: 1, matches: 3, position: 'Forward' },
  { rank: 32, name: 'Enner Valencia', nameZh: '恩纳·瓦伦西亚', teamId: 'ecu', goals: 1, matches: 3, position: 'Forward' },
];

export function getScorerByTeam(teamId: string): Scorer[] {
  return scorers.filter(s => s.teamId === teamId);
}
