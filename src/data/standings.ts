import type { StandingRow } from '../types';

// 小组积分榜 - 比赛结束后更新
export const standings: Record<string, StandingRow[]> = {
  A: [
    { position: 1, teamId: 'mex', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, goalDiff: 2, points: 3 },
    { position: 2, teamId: 'kor', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDiff: 1, points: 3 },
    { position: 3, teamId: 'cze', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDiff: -1, points: 0 },
    { position: 4, teamId: 'rsa', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, goalDiff: -2, points: 0 },
  ],
};

export function getGroupStandings(groupId: string): StandingRow[] {
  return standings[groupId] || [];
}
