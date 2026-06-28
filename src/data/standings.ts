import type { StandingRow } from '../types';

// 小组积分榜 - 比赛结束后更新
// P=场次 W=胜 D=平 L=负 GF=进球 GA=失球 GD=净胜球 Pts=积分
export const standings: Record<string, StandingRow[]> = {
  A: [
    { position: 1, teamId: 'mex', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 0, goalDiff: 6, points: 9, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'rsa', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, goalDiff: -1, points: 4, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'kor', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 3, goalDiff: -1, points: 3 },
    { position: 4, teamId: 'cze', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 6, goalDiff: -4, points: 1 },
  ],
  B: [
    { position: 1, teamId: 'sui', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDiff: 4, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'can', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 3, goalDiff: 5, points: 4, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'bih', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 6, goalDiff: -1, points: 4 },
    { position: 4, teamId: 'qat', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 10, goalDiff: -7, points: 1 },
  ],
  C: [
    { position: 1, teamId: 'bra', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 1, goalDiff: 6, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'mar', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 3, goalDiff: 3, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'sco', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 4, goalDiff: -3, points: 3 },
    { position: 4, teamId: 'hai', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDiff: -6, points: 0 },
  ],
  D: [
    { position: 1, teamId: 'usa', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 4, goalDiff: 4, points: 6, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'aus', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDiff: 0, points: 4, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'par', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 4, goalDiff: -2, points: 4, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'tur', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 5, goalDiff: -2, points: 3 },
  ],
  E: [
    { position: 1, teamId: 'ger', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 10, goalsAgainst: 4, goalDiff: 6, points: 6, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'civ', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 2, goalDiff: 2, points: 6, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'ecu', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDiff: 0, points: 4, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'cuw', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 9, goalDiff: -8, points: 1 },
  ],
  F: [
    { position: 1, teamId: 'ned', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 10, goalsAgainst: 4, goalDiff: 6, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'jpn', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDiff: 4, points: 5, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'swe', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 7, goalsAgainst: 7, goalDiff: 0, points: 4, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'tun', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 12, goalDiff: -10, points: 0 },
  ],
  G: [
    { position: 1, teamId: 'bel', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDiff: 4, points: 5, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'egy', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 5, goalsAgainst: 3, goalDiff: 2, points: 5, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'irn', played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 4, goalsAgainst: 4, goalDiff: 0, points: 3, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'nzl', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 4, goalsAgainst: 10, goalDiff: -6, points: 1 },
  ],
  H: [
    { position: 1, teamId: 'esp', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 0, goalDiff: 5, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'cpv', played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDiff: 0, points: 3, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'uru', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 3, goalsAgainst: 4, goalDiff: -1, points: 2 },
    { position: 4, teamId: 'ksa', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 1, goalsAgainst: 5, goalDiff: -4, points: 2 },
  ],
  I: [
    { position: 1, teamId: 'fra', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 2, goalDiff: 8, points: 9, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'nor', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 8, goalDiff: 0, points: 6, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'sen', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 8, goalsAgainst: 9, goalDiff: -1, points: 3, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'irq', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 13, goalDiff: -12, points: 0 },
  ],
  J: [
    { position: 1, teamId: 'arg', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, goalDiff: 7, points: 9, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'aut', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 5, goalDiff: 0, points: 4, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'alg', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 5, goalDiff: 0, points: 4, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'jor', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 9, goalDiff: -7, points: 0 },
  ],
  K: [
    { position: 1, teamId: 'col', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 1, goalDiff: 4, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'por', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 4, goalsAgainst: 2, goalDiff: 2, points: 5, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'cod', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDiff: 0, points: 4, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'uzb', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 7, goalDiff: -6, points: 0 },
  ],
  L: [
    { position: 1, teamId: 'eng', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDiff: 5, points: 7, qualified: true, qualifiedAs: 'direct' },
    { position: 2, teamId: 'cro', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 3, goalDiff: 2, points: 6, qualified: true, qualifiedAs: 'direct' },
    { position: 3, teamId: 'gha', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 4, goalDiff: -1, points: 3, qualified: true, qualifiedAs: 'best3rd' },
    { position: 4, teamId: 'pan', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 7, goalDiff: -6, points: 0 },
  ],
};

export function getGroupStandings(groupId: string): StandingRow[] {
  return standings[groupId] || [];
}
