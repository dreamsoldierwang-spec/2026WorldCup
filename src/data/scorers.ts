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
// Updated: 2026-06-27 (更新G/H/I组第三轮真实赛果)
export const scorers: Scorer[] = [
  // 5球 - 第1档
  { rank: 1, name: 'Lionel Messi', nameZh: '梅西', teamId: 'arg', goals: 5, matches: 3, position: 'Forward' },

  // 4球 - 第2档
  { rank: 2, name: 'Kylian Mbappe', nameZh: '姆巴佩', teamId: 'fra', goals: 4, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Erling Haaland', nameZh: '哈兰德', teamId: 'nor', goals: 4, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Vinicius Junior', nameZh: '维尼修斯', teamId: 'bra', goals: 4, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Jonathan David', nameZh: '乔纳森·戴维', teamId: 'can', goals: 4, matches: 3, position: 'Forward' },
  { rank: 2, name: 'Ousmane Dembele', nameZh: '登贝莱', teamId: 'fra', goals: 4, matches: 3, position: 'Forward' },

  // 3球 - 第3档
  { rank: 6, name: 'Breel Embolo', nameZh: '恩博洛', teamId: 'sui', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Raul Jimenez', nameZh: '劳尔·希门尼斯', teamId: 'mex', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Youssef En-Nesyri', nameZh: '恩-内斯里', teamId: 'mar', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Alexander Isak', nameZh: '伊萨克', teamId: 'swe', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Kaoru Mitoma', nameZh: '三笘薰', teamId: 'jpn', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Kai Havertz', nameZh: '哈弗茨', teamId: 'ger', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Folarin Balogun', nameZh: '巴洛贡', teamId: 'usa', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Cody Gakpo', nameZh: '加克波', teamId: 'ned', goals: 3, matches: 3, position: 'Forward' },
  { rank: 6, name: 'Chris Wood', nameZh: '克里斯·伍德', teamId: 'nzl', goals: 3, matches: 3, position: 'Forward' },

  // 2球 - 第4档
  { rank: 14, name: 'Deniz Undav', nameZh: '翁达夫', teamId: 'ger', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Marko Arnautovic', nameZh: '阿瑙托维奇', teamId: 'aut', goals: 2, matches: 2, position: 'Forward' },
  { rank: 14, name: 'Mohamed Salah', nameZh: '萨拉赫', teamId: 'egy', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Jamal Musiala', nameZh: '穆西亚拉', teamId: 'ger', goals: 2, matches: 3, position: 'Midfielder' },
  { rank: 14, name: 'Rodrygo', nameZh: '罗德里戈', teamId: 'bra', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Julian Quinones', nameZh: '基尼奥内斯', teamId: 'mex', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Marcel Sabitzer', nameZh: '萨比策', teamId: 'aut', goals: 2, matches: 2, position: 'Midfielder' },
  { rank: 14, name: 'Ramon Mauricio', nameZh: '毛利西奥', teamId: 'par', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Franck Kessie', nameZh: '凯西', teamId: 'civ', goals: 2, matches: 3, position: 'Midfielder' },
  { rank: 14, name: 'Nicolas Pepe', nameZh: '尼古拉·佩佩', teamId: 'civ', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Cristiano Ronaldo', nameZh: 'C罗', teamId: 'por', goals: 2, matches: 2, position: 'Forward' },
  { rank: 14, name: 'Harry Kane', nameZh: '凯恩', teamId: 'eng', goals: 2, matches: 2, position: 'Forward' },
  { rank: 14, name: 'Mikel Oyarzabal', nameZh: '奥亚萨瓦尔', teamId: 'esp', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Luis Diaz', nameZh: '路易斯·迪亚斯', teamId: 'col', goals: 2, matches: 2, position: 'Forward' },
  { rank: 14, name: 'Edin Dzeko', nameZh: '哲科', teamId: 'bih', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Pierrot', nameZh: '皮埃罗', teamId: 'hai', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Romelu Lukaku', nameZh: '卢卡库', teamId: 'bel', goals: 2, matches: 3, position: 'Forward' },
  { rank: 14, name: 'Idrissa Gueye', nameZh: '盖耶', teamId: 'sen', goals: 2, matches: 3, position: 'Midfielder' },

  // 1球 - 第5档
  { rank: 31, name: 'Hwang In-beom', nameZh: '黄仁范', teamId: 'kor', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Oh Hyeon-gyu', nameZh: '吴贤揆', teamId: 'kor', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Ladislav Krejci', nameZh: '克雷伊奇', teamId: 'cze', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Gio Reyna', nameZh: '雷纳', teamId: 'usa', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Christian Pulisic', nameZh: '普利西奇', teamId: 'usa', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Cyle Larin', nameZh: '拉林', teamId: 'can', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Alphonso Davies', nameZh: '阿方索·戴维斯', teamId: 'can', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Tajon Buchanan', nameZh: '布坎南', teamId: 'can', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'John McGinn', nameZh: '约翰·麦金', teamId: 'sco', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Nestory Irankunda', nameZh: '伊兰昆达', teamId: 'aus', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Connor Metcalfe', nameZh: '梅特卡夫', teamId: 'aus', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Anthony Elanga', nameZh: '埃兰加', teamId: 'swe', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Dejan Kulusevski', nameZh: '库卢塞夫斯基', teamId: 'swe', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Viktor Gyokeres', nameZh: '哲凯赖什', teamId: 'swe', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Ahmed Hush', nameZh: '扈希', teamId: 'qat', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Akram Afif', nameZh: '阿菲夫', teamId: 'qat', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Jude Bellingham', nameZh: '贝林厄姆', teamId: 'eng', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 31, name: 'Bukayo Saka', nameZh: '萨卡', teamId: 'eng', goals: 1, matches: 2, position: 'Forward' },
  { rank: 31, name: 'Granit Xhaka', nameZh: '扎卡', teamId: 'sui', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Ruben Vargas', nameZh: '巴尔加斯', teamId: 'sui', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Xherdan Shaqiri', nameZh: '沙奇里', teamId: 'sui', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Luis Chavez', nameZh: '查韦斯', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Alvaro Fidalgo', nameZh: '菲达尔戈', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Edson Alvarez', nameZh: '阿尔瓦雷斯', teamId: 'mex', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Maseko', nameZh: '马塞科', teamId: 'rsa', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Foster', nameZh: '福斯特', teamId: 'rsa', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Isidor', nameZh: '伊西多尔', teamId: 'hai', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Demirovic', nameZh: '德米罗维奇', teamId: 'bih', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Krunic', nameZh: '克鲁尼奇', teamId: 'bih', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Rafael Leao', nameZh: '莱奥', teamId: 'por', goals: 1, matches: 2, position: 'Forward' },
  { rank: 31, name: 'Bruno Fernandes', nameZh: 'B费', teamId: 'por', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 31, name: 'Goncalo Ramos', nameZh: '贡萨洛·拉莫斯', teamId: 'por', goals: 1, matches: 2, position: 'Forward' },
  { rank: 31, name: 'Achraf Hakimi', nameZh: '阿什拉夫', teamId: 'mar', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Hakim Ziyech', nameZh: '齐耶赫', teamId: 'mar', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Ante Budimir', nameZh: '布迪米尔', teamId: 'cro', goals: 1, matches: 2, position: 'Forward' },
  { rank: 31, name: 'Luka Modric', nameZh: '莫德里奇', teamId: 'cro', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 31, name: 'Kudus', nameZh: '库杜斯', teamId: 'gha', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 31, name: 'James Rodriguez', nameZh: 'J罗', teamId: 'col', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 31, name: 'Marcus Thuram', nameZh: '图拉姆', teamId: 'fra', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Martin Odegaard', nameZh: '厄德高', teamId: 'nor', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Lamine Yamal', nameZh: '亚马尔', teamId: 'esp', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Pedri', nameZh: '佩德里', teamId: 'esp', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Ferran Torres', nameZh: '费兰·托雷斯', teamId: 'esp', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Marmoush', nameZh: '马尔穆什', teamId: 'egy', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Nunez', nameZh: '努涅斯', teamId: 'uru', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Valverde', nameZh: '巴尔韦德', teamId: 'uru', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Bennacer', nameZh: '本纳赛尔', teamId: 'alg', goals: 1, matches: 2, position: 'Midfielder' },
  { rank: 31, name: 'Bounedjah', nameZh: '布内贾', teamId: 'alg', goals: 1, matches: 2, position: 'Forward' },
  { rank: 31, name: 'Prince', nameZh: '普林斯', teamId: 'cuw', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Florian Wirtz', nameZh: '维尔茨', teamId: 'ger', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Leroy Sane', nameZh: '萨内', teamId: 'ger', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Angulo', nameZh: '安古洛', teamId: 'ecu', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Gonzalo Plata', nameZh: '普拉塔', teamId: 'ecu', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Maeda Daizen', nameZh: '前田大然', teamId: 'jpn', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Ayase Ueda', nameZh: '上田绮世', teamId: 'jpn', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Takefusa Kubo', nameZh: '久保建英', teamId: 'jpn', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Brian Brobbey', nameZh: '布罗比', teamId: 'ned', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Jan Paul van Hecke', nameZh: '范赫克', teamId: 'ned', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Xavi Simons', nameZh: '哈维·西蒙斯', teamId: 'ned', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Denzel Dumfries', nameZh: '邓弗里斯', teamId: 'ned', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Mastouri', nameZh: '马斯图里', teamId: 'tun', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Msakni', nameZh: '姆萨克尼', teamId: 'tun', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Auston Trusty', nameZh: '特拉斯蒂', teamId: 'usa', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Berhalter', nameZh: '贝尔哈特', teamId: 'usa', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Arda Guler', nameZh: '阿尔达·居莱尔', teamId: 'tur', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Orkun Kokcu', nameZh: '柯克曲', teamId: 'tur', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Kaan Ayhan', nameZh: '艾汗', teamId: 'tur', goals: 1, matches: 3, position: 'Defender' },
  { rank: 31, name: 'Raphinha', nameZh: '拉菲尼亚', teamId: 'bra', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Paqueta', nameZh: '帕奎塔', teamId: 'bra', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Desire Doue', nameZh: '杜埃', teamId: 'fra', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Habib Diarra', nameZh: '哈比卜·迪亚拉', teamId: 'sen', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Iliman Ndiaye', nameZh: '恩迪亚耶', teamId: 'sen', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Pape Matar Sarr', nameZh: '萨尔', teamId: 'sen', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Alex Baena', nameZh: '巴埃纳', teamId: 'esp', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Leandro Trossard', nameZh: '特罗萨德', teamId: 'bel', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Kevin De Bruyne', nameZh: '德布劳内', teamId: 'bel', goals: 1, matches: 3, position: 'Midfielder' },
  { rank: 31, name: 'Alexis Saelemaekers', nameZh: '萨勒马科尔斯', teamId: 'bel', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Sabry', nameZh: '萨比尔', teamId: 'egy', goals: 1, matches: 3, position: 'Forward' },
  { rank: 31, name: 'Ramin Rezaeian', nameZh: '雷扎扬', teamId: 'irn', goals: 1, matches: 3, position: 'Defender' },
];

export function getScorerByTeam(teamId: string): Scorer[] {
  return scorers.filter(s => s.teamId === teamId);
}
