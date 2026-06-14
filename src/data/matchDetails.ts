export interface MatchDetail {
  matchId: string;
  summary: string; // 比赛简述
  goals: { time: string; player: string; team: 'home' | 'away'; ownGoal?: boolean }[];
  stats: {
    homePossession: number;
    awayPossession: number;
    homeShots: number;
    awayShots: number;
    homeShotsOnTarget: number;
    awayShotsOnTarget: number;
    homeFouls: number;
    awayFouls: number;
    homeCorners: number;
    awayCorners: number;
    homePasses: number;
    awayPasses: number;
  };
}

export const matchDetails: Record<string, MatchDetail> = {
  m001: {
    matchId: 'm001',
    summary: '韩国队在先失一球的情况下完成逆转！捷克由克雷伊奇头球先拔头筹，黄仁范扳平后助攻吴贤揆打入制胜球。韩国队长孙兴慜本场表现低迷，6次射门仅1次射正。',
    goals: [
      { time: '59\'', player: '克雷伊奇 (Krejci)', team: 'away' },
      { time: '67\'', player: '黄仁范 (Hwang In-beom)', team: 'home' },
      { time: '80\'', player: '吴贤揆 (Oh Hyeon-gyu)', team: 'home' },
    ],
    stats: { homePossession: 52, awayPossession: 48, homeShots: 14, awayShots: 8, homeShotsOnTarget: 5, awayShotsOnTarget: 3, homeFouls: 12, awayFouls: 15, homeCorners: 6, awayCorners: 3, homePasses: 487, awayPasses: 452 },
  },
  m002: {
    matchId: 'm002',
    summary: '揭幕战中墨西哥凭借基尼奥内斯的闪电进球和希门尼斯的头球2-0完胜南非。比赛火药味十足，共出现3张红牌。墨西哥终结了8次世界杯揭幕战不胜的尴尬纪录。',
    goals: [
      { time: '9\'', player: '基尼奥内斯 (Quinones)', team: 'home' },
      { time: '67\'', player: '劳尔·希门尼斯 (Raul Jimenez)', team: 'home' },
    ],
    stats: { homePossession: 54, awayPossession: 46, homeShots: 11, awayShots: 6, homeShotsOnTarget: 4, awayShotsOnTarget: 1, homeFouls: 18, awayFouls: 22, homeCorners: 5, awayCorners: 2, homePasses: 523, awayPasses: 441 },
  },
  m003: {
    matchId: 'm003',
    summary: '东道主加拿大在多伦多主场先失一球的情况下，凭借替补奇兵拉林的闪电破门1-1逼平波黑。拉林登场仅121秒即得分，创造加拿大世界杯历史——斩获队史首个世界杯积分。',
    goals: [
      { time: '21\'', player: '卢基奇 (Lukic)', team: 'away' },
      { time: '78\'', player: '拉林 (Cyle Larin)', team: 'home' },
    ],
    stats: { homePossession: 47, awayPossession: 53, homeShots: 9, awayShots: 12, homeShotsOnTarget: 3, awayShotsOnTarget: 4, homeFouls: 14, awayFouls: 11, homeCorners: 3, awayCorners: 6, homePasses: 412, awayPasses: 478 },
  },
  m004: {
    matchId: 'm004',
    summary: '东道主美国在洛杉矶主场4-1大胜巴拉圭。巴洛贡世界杯首秀即上演梅开二度，普利西奇表现神勇贡献传射并制造乌龙。雷纳补时阶段外脚背建功锦上添花。美国队创队史世界杯单场进球纪录。',
    goals: [
      { time: '7\'', player: '博瓦迪利亚 (乌龙)', team: 'away', ownGoal: true },
      { time: '31\'', player: '巴洛贡 (Balogun)', team: 'home' },
      { time: '45+1\'', player: '巴洛贡 (Balogun)', team: 'home' },
      { time: '68\'', player: '毛利西奥 (Mauricio)', team: 'away' },
      { time: '90+3\'', player: '雷纳 (Gio Reyna)', team: 'home' },
    ],
    stats: { homePossession: 58, awayPossession: 42, homeShots: 18, awayShots: 7, homeShotsOnTarget: 8, awayShotsOnTarget: 2, homeFouls: 8, awayFouls: 16, homeCorners: 7, awayCorners: 2, homePasses: 532, awayPasses: 378 },
  },
  m005: {
    matchId: 'm005',
    summary: '澳大利亚在温哥华2-0力克土耳其，取得D组开门红。伊兰昆达上半场以一敌三低射破门，梅特卡夫下半场远射建功锁定胜局。澳大利亚18号比奇全场评分最高8.6分。',
    goals: [
      { time: '37\'', player: '伊兰昆达 (Irankunda)', team: 'home' },
      { time: '72\'', player: '梅特卡夫 (Metcalfe)', team: 'home' },
    ],
    stats: { homePossession: 45, awayPossession: 55, homeShots: 10, awayShots: 9, homeShotsOnTarget: 4, awayShotsOnTarget: 3, homeFouls: 13, awayFouls: 11, homeCorners: 4, awayCorners: 5, homePasses: 398, awayPasses: 487 },
  },
  m006: {
    matchId: 'm006',
    summary: '卡塔尔在旧金山1-1逼平瑞士，斩获队史首个世界杯积分！瑞士凭借恩博洛点球先下一城，卡塔尔在补时第5分钟由扈希头球绝平，全场沸腾。',
    goals: [
      { time: '41\'', player: '恩博洛 (Embolo)', team: 'away' },
      { time: '90+5\'', player: '扈希 (Hush)', team: 'home' },
    ],
    stats: { homePossession: 38, awayPossession: 62, homeShots: 6, awayShots: 14, homeShotsOnTarget: 2, awayShotsOnTarget: 5, homeFouls: 15, awayFouls: 9, homeCorners: 2, awayCorners: 8, homePasses: 335, awayPasses: 556 },
  },
  m007: {
    matchId: 'm007',
    summary: '巴西与摩洛哥在纽约1-1握手言和。摩洛哥由塞巴里单刀破门先声夺人，维尼修斯第31分钟在禁区内抽射扳平。马尔基尼奥斯与阿什拉夫的"巴黎队长德比"成为赛后话题。',
    goals: [
      { time: '21\'', player: '塞巴里 (Sabari)', team: 'away' },
      { time: '31\'', player: '维尼修斯 (Vinicius Jr)', team: 'home' },
    ],
    stats: { homePossession: 56, awayPossession: 44, homeShots: 13, awayShots: 6, homeShotsOnTarget: 5, awayShotsOnTarget: 2, homeFouls: 10, awayFouls: 17, homeCorners: 6, awayCorners: 3, homePasses: 518, awayPasses: 401 },
  },
  m008: {
    matchId: 'm008',
    summary: '苏格兰在波士顿1-0小胜海地，约翰·麦金第28分钟打入全场唯一进球。海地虽然控球率占优（54%），但进攻效率不足，全场仅2次射正。苏格兰时隔28年再迎世界杯首战胜利。',
    goals: [
      { time: '28\'', player: '约翰·麦金 (John McGinn)', team: 'away' },
    ],
    stats: { homePossession: 54, awayPossession: 46, homeShots: 11, awayShots: 7, homeShotsOnTarget: 2, awayShotsOnTarget: 2, homeFouls: 12, awayFouls: 14, homeCorners: 4, awayCorners: 3, homePasses: 468, awayPasses: 402 },
  },
};

export function getMatchDetail(matchId: string): MatchDetail | undefined {
  return matchDetails[matchId];
}
