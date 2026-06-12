// 比赛结果 - 比赛结束后更新比分和状态

// 已完成的比赛结果
// 格式: { matchId: { homeScore: number, awayScore: number } }
export const matchResults: Record<string, { homeScore: number; awayScore: number }> = {
  // A组 第1轮
  m001: { homeScore: 2, awayScore: 0 },  // 墨西哥 2-0 南非 (2026.6.12)
  m002: { homeScore: 2, awayScore: 1 },  // 韩国 2-1 捷克 (2026.6.12)
};

export function getMatchResult(matchId: string) {
  return matchResults[matchId] || null;
}
