// 比赛结果 - 比赛结束后更新比分和状态
// 格式: { matchId: { homeScore: number, awayScore: number } }

export const matchResults: Record<string, { homeScore: number; awayScore: number }> = {
  // A组 第1轮
  m001: { homeScore: 2, awayScore: 0 },  // 墨西哥 2-0 南非 (6.12)
  m002: { homeScore: 2, awayScore: 1 },  // 韩国 2-1 捷克 (6.12)
  // B组 第1轮
  m003: { homeScore: 1, awayScore: 1 },  // 加拿大 1-1 波黑 (6.13)
  // D组 第1轮
  m004: { homeScore: 4, awayScore: 1 },  // 美国 4-1 巴拉圭 (6.13)
};

export function getMatchResult(matchId: string) {
  return matchResults[matchId] || null;
}
