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
  m009: {
    matchId: 'm009',
    summary: '荷兰与日本上演精彩对攻战。加克波为荷兰首开纪录，日本迅速扳平比分。下半场双方各入一球，最终2-2握手言和。',
    goals: [
      { time: '23\'', player: '加克波 (Gakpo)', team: 'home' },
      { time: '38\'', player: '三笘薰 (Mitoma)', team: 'away' },
      { time: '56\'', player: '萨默维尔 (Summerville)', team: 'home' },
      { time: '71\'', player: '上田绮世 (Ueda)', team: 'away' },
    ],
    stats: { homePossession: 58, awayPossession: 42, homeShots: 15, awayShots: 9, homeShotsOnTarget: 6, awayShotsOnTarget: 4, homeFouls: 11, awayFouls: 13, homeCorners: 7, awayCorners: 3, homePasses: 534, awayPasses: 389 },
  },
  m012: {
    matchId: 'm012',
    summary: '德国队7-1狂胜世界杯新军库拉索，展现强大实力。哈弗茨梅开二度，翁达夫替补登场打入处子球。库拉索由普林斯扳回一城但无力回天。',
    goals: [
      { time: '12\'', player: '哈弗茨 (Havertz)', team: 'home' },
      { time: '28\'', player: '穆西亚拉 (Musiala)', team: 'home' },
      { time: '45\'', player: '翁达夫 (Undav)', team: 'home' },
      { time: '53\'', player: '普林斯 (Prince)', team: 'away' },
      { time: '61\'', player: '哈弗茨 (Havertz)', team: 'home' },
      { time: '74\'', player: '维尔茨 (Wirtz)', team: 'home' },
      { time: '88\'', player: '翁达夫 (Undav)', team: 'home' },
    ],
    stats: { homePossession: 65, awayPossession: 35, homeShots: 22, awayShots: 4, homeShotsOnTarget: 11, awayShotsOnTarget: 1, homeFouls: 7, awayFouls: 16, homeCorners: 9, awayCorners: 1, homePasses: 612, awayPasses: 328 },
  },
  m018: {
    matchId: 'm018',
    summary: '梅西在世界杯首战上演帽子戏法，阿根廷3-0完胜阿尔及利亚。梅西第16分钟点球破门，第34分钟任意球直接得分，第78分钟单刀锁定胜局。世界杯总进球达到16球追平克洛泽。',
    goals: [
      { time: '16\'', player: '梅西 (Messi)', team: 'home' },
      { time: '34\'', player: '梅西 (Messi)', team: 'home' },
      { time: '78\'', player: '梅西 (Messi)', team: 'home' },
    ],
    stats: { homePossession: 62, awayPossession: 38, homeShots: 16, awayShots: 5, homeShotsOnTarget: 7, awayShotsOnTarget: 1, homeFouls: 9, awayFouls: 14, homeCorners: 6, awayCorners: 2, homePasses: 567, awayPasses: 345 },
  },
  m020: {
    matchId: 'm020',
    summary: '法国3-1击败塞内加尔，姆巴佩贡献一传一射。姆巴佩第22分钟打破僵局，塞内加尔由马内扳平，但法国下半场连入两球锁定胜局。',
    goals: [
      { time: '22\'', player: '姆巴佩 (Mbappe)', team: 'home' },
      { time: '41\'', player: '马内 (Mane)', team: 'away' },
      { time: '58\'', player: '登贝莱 (Dembele)', team: 'home' },
      { time: '76\'', player: '姆巴佩 (Mbappe)', team: 'home' },
    ],
    stats: { homePossession: 60, awayPossession: 40, homeShots: 14, awayShots: 7, homeShotsOnTarget: 6, awayShotsOnTarget: 3, homeFouls: 10, awayFouls: 15, homeCorners: 5, awayCorners: 3, homePasses: 545, awayPasses: 362 },
  },
  m021: {
    matchId: 'm021',
    summary: '英格兰4-2力克克罗地亚。凯恩梅开二度，贝林厄姆也有一球入账。克罗地亚由莫德里奇点球和克拉马里奇各入一球两度扳平，但英格兰最终取胜。',
    goals: [
      { time: '18\'', player: '凯恩 (Kane)', team: 'home' },
      { time: '35\'', player: '莫德里奇 (Modric)', team: 'away' },
      { time: '52\'', player: '贝林厄姆 (Bellingham)', team: 'home' },
      { time: '67\'', player: '克拉马里奇 (Kramaric)', team: 'away' },
      { time: '81\'', player: '凯恩 (Kane)', team: 'home' },
      { time: '90+2\'', player: '萨卡 (Saka)', team: 'home' },
    ],
    stats: { homePossession: 55, awayPossession: 45, homeShots: 13, awayShots: 10, homeShotsOnTarget: 6, awayShotsOnTarget: 5, homeFouls: 11, awayFouls: 13, homeCorners: 6, awayCorners: 4, homePasses: 498, awayPasses: 412 },
  },
  m027: {
    matchId: 'm027',
    summary: '加拿大主场6-0血洗卡塔尔，创造队史世界杯最大比分胜利。乔纳森·戴维梅开二度，卡塔尔单场两红牌加一乌龙，惨遭小组赛两连败。',
    goals: [
      { time: '15\'', player: '戴维 (David)', team: 'home' },
      { time: '33\'', player: '卡塔尔 (乌龙)', team: 'away', ownGoal: true },
      { time: '48\'', player: '戴维 (David)', team: 'home' },
      { time: '62\'', player: '戴维斯 (Davies)', team: 'home' },
      { time: '75\'', player: '拉林 (Larin)', team: 'home' },
      { time: '89\'', player: '布坎南 (Buchanan)', team: 'home' },
    ],
    stats: { homePossession: 61, awayPossession: 39, homeShots: 20, awayShots: 3, homeShotsOnTarget: 10, awayShotsOnTarget: 0, homeFouls: 8, awayFouls: 19, homeCorners: 8, awayCorners: 1, homePasses: 556, awayPasses: 342 },
  },
  m041: {
    matchId: 'm041',
    summary: '梅西梅开二度，世界杯总进球达到18球，正式超越克洛泽独占历史射手榜榜首！阿根廷2-0击败奥地利，两战全胜提前出线。梅西同时刷新连续6场进球纪录、历史出场王（28场）、胜场数第一（18胜）等多项纪录。',
    goals: [
      { time: '31\'', player: '梅西 (Messi)', team: 'home' },
      { time: '73\'', player: '梅西 (Messi)', team: 'home' },
    ],
    stats: { homePossession: 59, awayPossession: 41, homeShots: 12, awayShots: 6, homeShotsOnTarget: 5, awayShotsOnTarget: 2, homeFouls: 9, awayFouls: 14, homeCorners: 5, awayCorners: 3, homePasses: 523, awayPasses: 367 },
  },
  m042: {
    matchId: 'm042',
    summary: '法国3-0大胜伊拉克，但比赛因费城突发雷暴中断约2小时。姆巴佩代表法国国家队第100场比赛梅开二度，世界杯总进球达16球追平克洛泽。',
    goals: [
      { time: '18\'', player: '姆巴佩 (Mbappe)', team: 'home' },
      { time: '68\'', player: '姆巴佩 (Mbappe)', team: 'home' },
      { time: '85\'', player: '图拉姆 ( Thuram)', team: 'home' },
    ],
    stats: { homePossession: 64, awayPossession: 36, homeShots: 17, awayShots: 4, homeShotsOnTarget: 8, awayShotsOnTarget: 1, homeFouls: 7, awayFouls: 16, homeCorners: 7, awayCorners: 2, homePasses: 578, awayPasses: 321 },
  },
  m044: {
    matchId: 'm044',
    summary: '阿尔及利亚在J组2-1逆转约旦，取得本届世界杯首胜。约旦率先破门取得领先，但阿尔及利亚下半场连入两球完成逆转。约旦两战皆负小组出线渺茫。',
    goals: [
      { time: '24\'', player: '阿尔-纳马特 (Al-Naimat)', team: 'home' },
      { time: '58\'', player: '本纳赛尔 (Bennacer)', team: 'away' },
      { time: '79\'', player: '布内贾 (Bounedjah)', team: 'away' },
    ],
    stats: { homePossession: 44, awayPossession: 56, homeShots: 8, awayShots: 14, homeShotsOnTarget: 3, awayShotsOnTarget: 6, homeFouls: 13, awayFouls: 10, homeCorners: 3, awayCorners: 6, homePasses: 378, awayPasses: 489 },
  },
  m048: {
    matchId: 'm048',
    summary: '葡萄牙5-0大胜乌兹别克斯坦，展现强大进攻火力。C罗替补登场但未能进球，连续10场大赛进球荒延续。葡萄牙队多点开花，两轮不败积4分排名K组第一。',
    goals: [
      { time: '12\'', player: '莱奥 (Leao)', team: 'home' },
      { time: '34\'', player: 'B费 (Bruno Fernandes)', team: 'home' },
      { time: '52\'', player: '贡萨洛·拉莫斯 (Goncalo Ramos)', team: 'home' },
      { time: '71\'', player: '莱奥 (Leao)', team: 'home' },
      { time: '88\'', player: '内托 (Neto)', team: 'home' },
    ],
    stats: { homePossession: 68, awayPossession: 32, homeShots: 21, awayShots: 3, homeShotsOnTarget: 10, awayShotsOnTarget: 0, homeFouls: 6, awayFouls: 18, homeCorners: 9, awayCorners: 1, homePasses: 612, awayPasses: 289 },
  },
};

export function getMatchDetail(matchId: string): MatchDetail | undefined {
  return matchDetails[matchId];
}
