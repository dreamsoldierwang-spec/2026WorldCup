import type { StandingRow } from '../types';

// 小组积分榜 - 比赛结束后更新
// P=场次 W=胜 D=平 L=负 GF=进球 GA=失球 GD=净胜球 Pts=积分
export const standings: Record<string, StandingRow[]> = {
  A: [
    { position: 1, teamId: 'mex', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, goalDiff: 2, points: 3 },
    { position: 2, teamId: 'kor', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDiff: 1, points: 3 },
    { position: 3, teamId: 'cze', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDiff: -1, points: 0 },
    { position: 4, teamId: 'rsa', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, goalDiff: -2, points: 0 },
  ],
  B: [
    { position: 1, teamId: 'can', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDiff: 0, points: 1 },
    { position: 1, teamId: 'bih', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDiff: 0, points: 1 },
    { position: 1, teamId: 'sui', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDiff: 0, points: 1 },
    { position: 1, teamId: 'qat', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDiff: 0, points: 1 },
  ],
  C: [
    { position: 1, teamId: 'bra', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDiff: 0, points: 1 },
    { position: 1, teamId: 'mar', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDiff: 0, points: 1 },
    { position: 3, teamId: 'sco', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 3, teamId: 'hai', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  D: [
    { position: 1, teamId: 'usa', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, goalDiff: 3, points: 3 },
    { position: 2, teamId: 'aus', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 2, teamId: 'tur', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 4, teamId: 'par', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 4, goalDiff: -3, points: 0 },
  ],
  E: [
    { position: 1, teamId: 'ger', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'ecu', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'civ', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'cuw', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  F: [
    { position: 1, teamId: 'ned', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'jpn', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'tun', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'swe', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  G: [
    { position: 1, teamId: 'bel', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'irn', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'egy', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'nzl', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  H: [
    { position: 1, teamId: 'esp', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'uru', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'ksa', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'cpv', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  I: [
    { position: 1, teamId: 'fra', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'sen', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'nor', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'irq', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  J: [
    { position: 1, teamId: 'arg', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'alg', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'aut', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'jor', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  K: [
    { position: 1, teamId: 'por', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'col', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'uzb', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'cod', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
  L: [
    { position: 1, teamId: 'eng', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'cro', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'gha', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
    { position: 1, teamId: 'pan', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  ],
};

export function getGroupStandings(groupId: string): StandingRow[] {
  return standings[groupId] || [];
}
