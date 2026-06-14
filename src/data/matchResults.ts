// 比赛结果映射 (matchId -> scores)
export const matchResults: Record<string, { homeScore: number; awayScore: number }> = {
  m001: { homeScore: 2, awayScore: 1 },  // 韩国 2-1 捷克 (6.12)
  m002: { homeScore: 2, awayScore: 0 },  // 墨西哥 2-0 南非 (6.12)
  m003: { homeScore: 1, awayScore: 1 },  // 加拿大 1-1 波黑 (6.13)
  m004: { homeScore: 4, awayScore: 1 },  // 美国 4-1 巴拉圭 (6.13)
  m006: { homeScore: 1, awayScore: 1 },  // 卡塔尔 1-1 瑞士 (6.14)
  m007: { homeScore: 1, awayScore: 1 },  // 巴西 1-1 摩洛哥 (6.14)
  m008: { homeScore: 0, awayScore: 1 },  // 海地 0-1 苏格兰 (6.14)
};

export function getMatchResult(matchId: string) {
  return matchResults[matchId] || null;
}
