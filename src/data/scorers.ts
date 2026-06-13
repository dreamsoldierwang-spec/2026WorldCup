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
  // USA 4-1 Paraguay
  { rank: 1, name: 'Folarin Balogun', nameZh: '巴洛贡', teamId: 'usa', goals: 2, matches: 1, position: 'Forward' },
  // Mexico 2-0 South Africa
  { rank: 2, name: 'Julian Quinones', nameZh: '基尼奥内斯', teamId: 'mex', goals: 1, matches: 1, position: 'Forward' },
  { rank: 2, name: 'Raul Jimenez', nameZh: '劳尔·希门尼斯', teamId: 'mex', goals: 1, matches: 1, position: 'Forward' },
  // South Korea 2-1 Czech Republic
  { rank: 2, name: 'Hwang In-beom', nameZh: '黄仁范', teamId: 'kor', goals: 1, matches: 1, position: 'Midfielder' },
  { rank: 2, name: 'Oh Hyeon-gyu', nameZh: '吴贤揆', teamId: 'kor', goals: 1, matches: 1, position: 'Forward' },
  { rank: 2, name: 'Ladislav Krejci', nameZh: '克雷伊奇', teamId: 'cze', goals: 1, matches: 1, position: 'Defender' },
  // USA 4-1 Paraguay (continued)
  { rank: 2, name: 'Gio Reyna', nameZh: '雷纳', teamId: 'usa', goals: 1, matches: 1, position: 'Midfielder' },
  { rank: 2, name: 'Ramon Mauricio', nameZh: '毛利西奥', teamId: 'par', goals: 1, matches: 1, position: 'Forward' },
  // Canada 1-1 Bosnia
  { rank: 2, name: 'Cyle Larin', nameZh: '拉林', teamId: 'can', goals: 1, matches: 1, position: 'Forward' },
  { rank: 2, name: 'Stjepan Lukic', nameZh: '卢基奇', teamId: 'bih', goals: 1, matches: 1, position: 'Midfielder' },
];

export function getScorerByTeam(teamId: string): Scorer[] {
  return scorers.filter(s => s.teamId === teamId);
}
