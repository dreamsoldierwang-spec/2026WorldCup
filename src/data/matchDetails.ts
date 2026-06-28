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
    summary: '澳大利亚在波士顿2-0力克土耳其，取得队史世界杯开门红！伊兰昆达第38分钟远射破门先拔头筹，梅特卡夫第65分钟接角球头球扩大比分。土耳其全场12次射门仅2次射正，伊尔迪兹被严加盯防未能制造威胁。',
    goals: [
      { time: '38\'', player: '伊兰昆达 (Irankunda)', team: 'home' },
      { time: '65\'', player: '梅特卡夫 (Metcalfe)', team: 'home' },
    ],
    stats: { homePossession: 48, awayPossession: 52, homeShots: 11, awayShots: 12, homeShotsOnTarget: 5, awayShotsOnTarget: 2, homeFouls: 14, awayFouls: 12, homeCorners: 5, awayCorners: 5, homePasses: 423, awayPasses: 461 },
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
  m010: {
    matchId: 'm010',
    summary: '瑞典在蒙特雷5-1大胜突尼斯，伊萨克上演帽子戏法成为全场最耀眼的明星！库卢塞夫斯基第23分钟推射扩大比分，姆萨克尼一度为突尼斯扳回一城，但伊萨克下半场再入两球彻底杀死悬念，哲凯赖什锦上添花。',
    goals: [
      { time: '8\'', player: '伊萨克 (Isak)', team: 'home' },
      { time: '23\'', player: '库卢塞夫斯基 (Kulusevski)', team: 'home' },
      { time: '35\'', player: '姆萨克尼 (Msakni)', team: 'away' },
      { time: '51\'', player: '伊萨克 (Isak)', team: 'home' },
      { time: '67\'', player: '哲凯赖什 (Gyokeres)', team: 'home' },
      { time: '82\'', player: '伊萨克 (Isak)', team: 'home' },
    ],
    stats: { homePossession: 58, awayPossession: 42, homeShots: 19, awayShots: 6, homeShotsOnTarget: 9, awayShotsOnTarget: 2, homeFouls: 9, awayFouls: 17, homeCorners: 8, awayCorners: 2, homePasses: 534, awayPasses: 387 },
  },
  m011: {
    matchId: 'm011',
    summary: '科特迪瓦在蒙特雷1-0力克厄瓜多尔，凯西第56分钟点球命中打入全场唯一进球。厄瓜多尔控球率占优但进攻缺乏致命一击，凯西点球命中后科特迪瓦全线退守保住胜果。',
    goals: [
      { time: '56\'', player: '凯西 (Kessie)', team: 'home' },
    ],
    stats: { homePossession: 46, awayPossession: 54, homeShots: 8, awayShots: 11, homeShotsOnTarget: 3, awayShotsOnTarget: 3, homeFouls: 15, awayFouls: 13, homeCorners: 3, awayCorners: 5, homePasses: 398, awayPasses: 467 },
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
  m013: {
    matchId: 'm013',
    summary: '西班牙在迈阿密狂轰23脚射门却0-0被世界杯新军佛得角逼平，爆出小组赛首轮冷门！佛得角门将沃津哈全场做出8次精彩扑救，力保大门不失。西班牙控球率高达72%却始终无法洞穿对手铁桶阵。',
    goals: [],
    stats: { homePossession: 72, awayPossession: 28, homeShots: 23, awayShots: 3, homeShotsOnTarget: 7, awayShotsOnTarget: 0, homeFouls: 8, awayFouls: 19, homeCorners: 11, awayCorners: 1, homePasses: 678, awayPasses: 245 },
  },
  m014: {
    matchId: 'm014',
    summary: '比利时在亚特兰大1-1战平埃及。卢卡库第18分钟禁区内爆射为比利时取得领先，萨拉赫第43分钟利用反击单刀低射扳平比分。下半场德布劳内多次制造威胁但埃及防线众志成城守住平局。',
    goals: [
      { time: '18\'', player: '卢卡库 (Lukaku)', team: 'home' },
      { time: '43\'', player: '萨拉赫 (Salah)', team: 'away' },
    ],
    stats: { homePossession: 57, awayPossession: 43, homeShots: 13, awayShots: 8, homeShotsOnTarget: 4, awayShotsOnTarget: 3, homeFouls: 11, awayFouls: 14, homeCorners: 6, awayCorners: 3, homePasses: 512, awayPasses: 389 },
  },
  m015: {
    matchId: 'm015',
    summary: '沙特在洛杉矶1-1逼平乌拉圭，爆出G组冷门！努涅斯第34分钟头球为乌拉圭打破僵局，但达瓦萨里第78分钟禁区外世界波扳平比分。乌拉圭全场15次射门却未能全取三分。',
    goals: [
      { time: '34\'', player: '努涅斯 (Nunez)', team: 'away' },
      { time: '78\'', player: '达瓦萨里 (Al-Dawsari)', team: 'home' },
    ],
    stats: { homePossession: 38, awayPossession: 62, homeShots: 7, awayShots: 15, homeShotsOnTarget: 3, awayShotsOnTarget: 5, homeFouls: 16, awayFouls: 10, homeCorners: 3, awayCorners: 7, homePasses: 334, awayPasses: 548 },
  },
  m016: {
    matchId: 'm016',
    summary: '伊朗在西雅图2-2战平新西兰，克里斯·伍德梅开二度一度为新西兰取得领先。塔雷米和阿兹蒙连入两球为伊朗反超比分，但伍德第81分钟头球再度扳平，新西兰从西亚狼口中抢走一分。',
    goals: [
      { time: '12\'', player: '克里斯·伍德 (Chris Wood)', team: 'away' },
      { time: '29\'', player: '塔雷米 (Taremi)', team: 'home' },
      { time: '54\'', player: '阿兹蒙 (Azmoun)', team: 'home' },
      { time: '81\'', player: '克里斯·伍德 (Chris Wood)', team: 'away' },
    ],
    stats: { homePossession: 51, awayPossession: 49, homeShots: 12, awayShots: 10, homeShotsOnTarget: 5, awayShotsOnTarget: 4, homeFouls: 13, awayFouls: 14, homeCorners: 4, awayCorners: 4, homePasses: 445, awayPasses: 423 },
  },
  m017: {
    matchId: 'm017',
    summary: '奥地利在旧金山3-1击败世界杯新军约旦。阿瑙托维奇第15分钟头球闪击得手，阿尔-塔马里第39分钟精彩远射为约旦扳平。萨比策第62分钟远射破门再度领先，阿瑙托维奇第88分钟单刀锁定胜局。',
    goals: [
      { time: '15\'', player: '阿瑙托维奇 (Arnautovic)', team: 'home' },
      { time: '39\'', player: '阿尔-塔马里 (Al-Tamari)', team: 'away' },
      { time: '62\'', player: '萨比策 (Sabitzer)', team: 'home' },
      { time: '88\'', player: '阿瑙托维奇 (Arnautovic)', team: 'home' },
    ],
    stats: { homePossession: 55, awayPossession: 45, homeShots: 14, awayShots: 8, homeShotsOnTarget: 6, awayShotsOnTarget: 3, homeFouls: 11, awayFouls: 13, homeCorners: 6, awayCorners: 3, homePasses: 498, awayPasses: 398 },
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
  m019: {
    matchId: 'm019',
    summary: '挪威在波士顿4-1大胜伊拉克，哈兰德上演帽子戏法统治比赛！哈兰德第11分钟单刀破门，侯赛因一度为伊拉克扳平比分，但哈兰德半场结束前再度超出，厄德高远射建功后哈兰德第74分钟完成帽子戏法。',
    goals: [
      { time: '11\'', player: '哈兰德 (Haaland)', team: 'away' },
      { time: '27\'', player: '侯赛因 (Hussein)', team: 'home' },
      { time: '42\'', player: '哈兰德 (Haaland)', team: 'away' },
      { time: '58\'', player: '厄德高 (Odegaard)', team: 'away' },
      { time: '74\'', player: '哈兰德 (Haaland)', team: 'away' },
    ],
    stats: { homePossession: 35, awayPossession: 65, homeShots: 6, awayShots: 18, homeShotsOnTarget: 2, awayShotsOnTarget: 9, homeFouls: 17, awayFouls: 9, homeCorners: 2, awayCorners: 7, homePasses: 312, awayPasses: 589 },
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
  m022: {
    matchId: 'm022',
    summary: '加纳在多伦多1-0小胜巴拿马，库杜斯第53分钟禁区内转身抽射打入全场唯一进球。巴拿马全场9次射门仅2次射正，加纳凭借顽强防守拿下关键三分。',
    goals: [
      { time: '53\'', player: '库杜斯 (Kudus)', team: 'home' },
    ],
    stats: { homePossession: 52, awayPossession: 48, homeShots: 11, awayShots: 9, homeShotsOnTarget: 4, awayShotsOnTarget: 2, homeFouls: 14, awayFouls: 12, homeCorners: 5, awayCorners: 4, homePasses: 445, awayPasses: 401 },
  },
  m023: {
    matchId: 'm023',
    summary: '哥伦比亚在墨西哥城3-1逆转乌兹别克斯坦。肖穆罗多夫第19分钟为主队取得领先，但路易斯·迪亚斯第33分钟扳平，J罗第57分钟远射反超，迪亚斯第79分钟单刀梅开二度锁定胜局。',
    goals: [
      { time: '19\'', player: '肖穆罗多夫 (Shomurodov)', team: 'home' },
      { time: '33\'', player: '路易斯·迪亚斯 (Luis Diaz)', team: 'away' },
      { time: '57\'', player: 'J罗 (James Rodriguez)', team: 'away' },
      { time: '79\'', player: '路易斯·迪亚斯 (Luis Diaz)', team: 'away' },
    ],
    stats: { homePossession: 42, awayPossession: 58, homeShots: 8, awayShots: 15, homeShotsOnTarget: 3, awayShotsOnTarget: 7, homeFouls: 13, awayFouls: 11, homeCorners: 3, awayCorners: 6, homePasses: 367, awayPasses: 512 },
  },
  m024: {
    matchId: 'm024',
    summary: '葡萄牙在休斯敦1-1被民主刚果逼平，爆出K组冷门。B费第28分钟远射为葡萄牙取得领先，但巴坎布第66分钟利用角球混战中扳平比分。葡萄牙全场16次射门却未能全取三分。',
    goals: [
      { time: '28\'', player: 'B费 (Bruno Fernandes)', team: 'home' },
      { time: '66\'', player: '巴坎布 (Bakambu)', team: 'away' },
    ],
    stats: { homePossession: 66, awayPossession: 34, homeShots: 16, awayShots: 5, homeShotsOnTarget: 5, awayShotsOnTarget: 2, homeFouls: 9, awayFouls: 15, homeCorners: 7, awayCorners: 2, homePasses: 598, awayPasses: 312 },
  },
  m025: {
    matchId: 'm025',
    summary: '捷克在亚特兰大1-1战平南非。希克第31分钟禁区内抢点破门为捷克取得领先，福斯特第74分钟头球扳平比分。南非拿到队史世界杯第二分，捷克则连续两场平局。',
    goals: [
      { time: '31\'', player: '希克 (Schick)', team: 'home' },
      { time: '74\'', player: '福斯特 (Foster)', team: 'away' },
    ],
    stats: { homePossession: 53, awayPossession: 47, homeShots: 12, awayShots: 9, homeShotsOnTarget: 4, awayShotsOnTarget: 3, homeFouls: 13, awayFouls: 12, homeCorners: 5, awayCorners: 4, homePasses: 478, awayPasses: 421 },
  },
  m026: {
    matchId: 'm026',
    summary: '瑞士在洛杉矶4-1大胜波黑，一扫首轮被卡塔尔逼平的郁闷。恩博洛第12分钟头球闪击，哲科第26分钟为波黑扳平，但扎卡半场补时远射再度超出，恩博洛第61分钟和巴尔加斯第83分钟连入两球锁定胜局。',
    goals: [
      { time: '12\'', player: '恩博洛 (Embolo)', team: 'home' },
      { time: '26\'', player: '哲科 (Dzeko)', team: 'away' },
      { time: '45+2\'', player: '扎卡 (Xhaka)', team: 'home' },
      { time: '61\'', player: '恩博洛 (Embolo)', team: 'home' },
      { time: '83\'', player: '巴尔加斯 (Vargas)', team: 'home' },
    ],
    stats: { homePossession: 59, awayPossession: 41, homeShots: 17, awayShots: 7, homeShotsOnTarget: 8, awayShotsOnTarget: 3, homeFouls: 10, awayFouls: 14, homeCorners: 7, awayCorners: 3, homePasses: 534, awayPasses: 378 },
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
  m028: {
    matchId: 'm028',
    summary: '墨西哥在萨波潘1-0小胜韩国，希门尼斯第49分钟头球打入全场唯一进球。韩国队孙兴慜状态依旧低迷，全场4次射门无一射正。墨西哥两连胜暂居A组榜首。',
    goals: [
      { time: '49\'', player: '希门尼斯 (Jimenez)', team: 'home' },
    ],
    stats: { homePossession: 52, awayPossession: 48, homeShots: 10, awayShots: 11, homeShotsOnTarget: 3, awayShotsOnTarget: 3, homeFouls: 15, awayFouls: 13, homeCorners: 4, awayCorners: 5, homePasses: 456, awayPasses: 432 },
  },
  m029: {
    matchId: 'm029',
    summary: '巴拉圭在旧金山1-0力克土耳其！毛利西奥第58分钟接阿尔米隆传中抢点破门打入全场唯一进球。土耳其全场12次射门但始终无法攻破巴拉圭门将费尔南德斯的十指关，巴拉圭拿下关键三分保留出线希望。',
    goals: [
      { time: '58\'', player: '毛利西奥 (Mauricio)', team: 'away' },
    ],
    stats: { homePossession: 56, awayPossession: 44, homeShots: 12, awayShots: 8, homeShotsOnTarget: 3, awayShotsOnTarget: 3, homeFouls: 13, awayFouls: 11, homeCorners: 6, awayCorners: 3, homePasses: 489, awayPasses: 378 },
  },
  m030: {
    matchId: 'm030',
    summary: '日本在蒙特雷4-0横扫突尼斯，展现亚洲足球顶级水准！三笘薰梅开二度，久保建英传射建功，上田绮世也有一球入账。日本控球率62%完全压制对手，两战积4分位居F组头名。',
    goals: [
      { time: '16\'', player: '三笘薰 (Mitoma)', team: 'away' },
      { time: '38\'', player: '久保建英 (Kubo)', team: 'away' },
      { time: '62\'', player: '上田绮世 (Ueda)', team: 'away' },
      { time: '85\'', player: '三笘薰 (Mitoma)', team: 'away' },
    ],
    stats: { homePossession: 38, awayPossession: 62, homeShots: 5, awayShots: 18, homeShotsOnTarget: 1, awayShotsOnTarget: 9, homeFouls: 16, awayFouls: 8, homeCorners: 2, awayCorners: 8, homePasses: 323, awayPasses: 567 },
  },
  m031: {
    matchId: 'm031',
    summary: '巴西在费城3-0完胜海地，维尼修斯、罗德里戈和拉菲尼亚各入一球。安切洛蒂的球队控球率63%完全掌控比赛，海地全场仅5次射门1次射正，巴西两战积4分位居C组头名。',
    goals: [
      { time: '22\'', player: '维尼修斯 (Vinicius Jr)', team: 'home' },
      { time: '47\'', player: '罗德里戈 (Rodrygo)', team: 'home' },
      { time: '76\'', player: '拉菲尼亚 (Raphinha)', team: 'home' },
    ],
    stats: { homePossession: 63, awayPossession: 37, homeShots: 18, awayShots: 5, homeShotsOnTarget: 8, awayShotsOnTarget: 1, homeFouls: 9, awayFouls: 15, homeCorners: 8, awayCorners: 2, homePasses: 578, awayPasses: 334 },
  },
  m032: {
    matchId: 'm032',
    summary: '摩洛哥在波士顿1-0击败苏格兰，恩-内斯里第39分钟头球打入全场唯一进球。苏格兰虽然控球率占优但进攻效率低下，阿什拉夫领衔的摩洛哥防线固若金汤，摩洛哥两战积4分。',
    goals: [
      { time: '39\'', player: '恩-内斯里 (En-Nesyri)', team: 'away' },
    ],
    stats: { homePossession: 54, awayPossession: 46, homeShots: 10, awayShots: 8, homeShotsOnTarget: 2, awayShotsOnTarget: 3, homeFouls: 12, awayFouls: 13, homeCorners: 5, awayCorners: 3, homePasses: 456, awayPasses: 389 },
  },
  m033: {
    matchId: 'm033',
    summary: '美国在西雅图2-0力克澳大利亚，普利西奇第28分钟禁区内低射破门，巴洛贡第71分钟单刀锁定胜局。美国两连胜积6分领跑D组，澳大利亚则遭遇两连败出线形势严峻。',
    goals: [
      { time: '28\'', player: '普利西奇 (Pulisic)', team: 'home' },
      { time: '71\'', player: '巴洛贡 (Balogun)', team: 'home' },
    ],
    stats: { homePossession: 57, awayPossession: 43, homeShots: 14, awayShots: 7, homeShotsOnTarget: 6, awayShotsOnTarget: 2, homeFouls: 11, awayFouls: 14, homeCorners: 6, awayCorners: 3, homePasses: 523, awayPasses: 398 },
  },
  m034: {
    matchId: 'm034',
    summary: '荷兰在休斯敦5-1横扫瑞典，报了首轮被日本逼平的一箭之仇！加克波梅开二度，西蒙斯和邓弗里斯各入一球，德佩也有进球入账。伊萨克为瑞典打入挽回颜面的一球。荷兰两战积4分升至F组头名。',
    goals: [
      { time: '9\'', player: '加克波 (Gakpo)', team: 'home' },
      { time: '24\'', player: '西蒙斯 (Xavi Simons)', team: 'home' },
      { time: '36\'', player: '伊萨克 (Isak)', team: 'away' },
      { time: '52\'', player: '德佩 (Depay)', team: 'home' },
      { time: '68\'', player: '加克波 (Gakpo)', team: 'home' },
      { time: '85\'', player: '邓弗里斯 (Dumfries)', team: 'home' },
    ],
    stats: { homePossession: 61, awayPossession: 39, homeShots: 20, awayShots: 8, homeShotsOnTarget: 10, awayShotsOnTarget: 3, homeFouls: 9, awayFouls: 12, homeCorners: 8, awayCorners: 3, homePasses: 567, awayPasses: 365 },
  },
  m035: {
    matchId: 'm035',
    summary: '德国在多伦多2-1逆转科特迪瓦。凯西第17分钟点球为科特迪瓦取得意外领先，穆西亚拉第41分钟远射扳平比分，哈弗茨第77分钟头球绝杀。德国两连胜积6分领跑E组。',
    goals: [
      { time: '17\'', player: '凯西 (Kessie)', team: 'away' },
      { time: '41\'', player: '穆西亚拉 (Musiala)', team: 'home' },
      { time: '77\'', player: '哈弗茨 (Havertz)', team: 'home' },
    ],
    stats: { homePossession: 60, awayPossession: 40, homeShots: 16, awayShots: 7, homeShotsOnTarget: 6, awayShotsOnTarget: 3, homeFouls: 10, awayFouls: 15, homeCorners: 7, awayCorners: 3, homePasses: 578, awayPasses: 378 },
  },
  m036: {
    matchId: 'm036',
    summary: '厄瓜多尔在堪萨斯城0-0被库拉索逼平，爆出E组冷门！厄瓜多尔全场15次射门64%控球率却始终无法破门，库拉索门将罗姆全场做出4次关键扑救，世界杯新军连续两场拿分。',
    goals: [],
    stats: { homePossession: 64, awayPossession: 36, homeShots: 15, awayShots: 4, homeShotsOnTarget: 4, awayShotsOnTarget: 1, homeFouls: 11, awayFouls: 14, homeCorners: 8, awayCorners: 2, homePasses: 545, awayPasses: 312 },
  },
  m037: {
    matchId: 'm037',
    summary: '埃及在温哥华3-1击败新西兰，萨拉赫梅开二度闪耀全场。马尔穆什第14分钟先拔头筹，萨拉赫第38分钟扩大比分，克里斯·伍德点球为新西兰扳回一城，但萨拉赫第82分钟单刀锁定胜局。',
    goals: [
      { time: '14\'', player: '马尔穆什 (Marmoush)', team: 'away' },
      { time: '38\'', player: '萨拉赫 (Salah)', team: 'away' },
      { time: '59\'', player: '克里斯·伍德 (Chris Wood)', team: 'home' },
      { time: '82\'', player: '萨拉赫 (Salah)', team: 'away' },
    ],
    stats: { homePossession: 43, awayPossession: 57, homeShots: 8, awayShots: 14, homeShotsOnTarget: 3, awayShotsOnTarget: 7, homeFouls: 13, awayFouls: 11, homeCorners: 3, awayCorners: 6, homePasses: 378, awayPasses: 501 },
  },
  m038: {
    matchId: 'm038',
    summary: '西班牙在亚特兰大4-0大胜沙特，一扫首轮被佛得角逼平的郁闷。亚马尔第18分钟世界波破门，佩德里第33分钟远射扩大比分，奥亚萨瓦尔和费兰·托雷斯下半场各入一球，西班牙控球率高达74%。',
    goals: [
      { time: '18\'', player: '亚马尔 (Yamal)', team: 'home' },
      { time: '33\'', player: '佩德里 (Pedri)', team: 'home' },
      { time: '57\'', player: '奥亚萨瓦尔 (Oyarzabal)', team: 'home' },
      { time: '81\'', player: '费兰·托雷斯 (Ferran Torres)', team: 'home' },
    ],
    stats: { homePossession: 74, awayPossession: 26, homeShots: 22, awayShots: 3, homeShotsOnTarget: 11, awayShotsOnTarget: 0, homeFouls: 7, awayFouls: 18, homeCorners: 10, awayCorners: 1, homePasses: 689, awayPasses: 234 },
  },
  m039: {
    matchId: 'm039',
    summary: '比利时在洛杉矶0-0被伊朗逼平，欧洲红魔全场14次射门却颗粒无收。德布劳内和卢卡库多次制造威胁但伊朗门将贝兰万德表现神勇，伊朗铁桶阵成功守住一分，比利时两连平出线告急。',
    goals: [],
    stats: { homePossession: 63, awayPossession: 37, homeShots: 14, awayShots: 5, homeShotsOnTarget: 4, awayShotsOnTarget: 1, homeFouls: 10, awayFouls: 13, homeCorners: 7, awayCorners: 2, homePasses: 567, awayPasses: 323 },
  },
  m040: {
    matchId: 'm040',
    summary: '乌拉圭在迈阿密2-2被佛得角逼平，世界杯新军再创奇迹！努涅斯第21分钟头球破门，塞梅多第44分钟扳平，巴尔韦德第63分钟远射再度超出，但蒙特罗第94分钟头球绝平！佛得角连续两场逼平强敌。',
    goals: [
      { time: '21\'', player: '努涅斯 (Nunez)', team: 'home' },
      { time: '44\'', player: '塞梅多 (Willy Semedo)', team: 'away' },
      { time: '63\'', player: '巴尔韦德 (Valverde)', team: 'home' },
      { time: '90+4\'', player: '蒙特罗 (Monteiro)', team: 'away' },
    ],
    stats: { homePossession: 65, awayPossession: 35, homeShots: 17, awayShots: 6, homeShotsOnTarget: 7, awayShotsOnTarget: 3, homeFouls: 9, awayFouls: 14, homeCorners: 8, awayCorners: 2, homePasses: 578, awayPasses: 298 },
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
      { time: '85\'', player: '图拉姆 (Thuram)', team: 'home' },
    ],
    stats: { homePossession: 64, awayPossession: 36, homeShots: 17, awayShots: 4, homeShotsOnTarget: 8, awayShotsOnTarget: 1, homeFouls: 7, awayFouls: 16, homeCorners: 7, awayCorners: 2, homePasses: 578, awayPasses: 321 },
  },
  m043: {
    matchId: 'm043',
    summary: '挪威在纽约1-0小胜塞内加尔，哈兰德第34分钟点球命中打入全场唯一进球。塞内加尔由马内领衔的锋线多次制造威胁但始终无法扳平比分，挪威积6分与法国同组领跑I组。',
    goals: [
      { time: '34\'', player: '哈兰德 (Haaland)', team: 'home' },
    ],
    stats: { homePossession: 52, awayPossession: 48, homeShots: 11, awayShots: 10, homeShotsOnTarget: 4, awayShotsOnTarget: 3, homeFouls: 12, awayFouls: 13, homeCorners: 5, awayCorners: 4, homePasses: 467, awayPasses: 423 },
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
  m045: {
    matchId: 'm045',
    summary: '哥伦比亚在萨波潘1-0力克民主刚果，J罗第64分钟禁区外远射打入全场唯一进球。哥伦比亚两连胜积6分领跑K组，民主刚果两连平积2分仍有出线希望。',
    goals: [
      { time: '64\'', player: 'J罗 (James Rodriguez)', team: 'home' },
    ],
    stats: { homePossession: 58, awayPossession: 42, homeShots: 13, awayShots: 7, homeShotsOnTarget: 5, awayShotsOnTarget: 2, homeFouls: 12, awayFouls: 11, homeCorners: 6, awayCorners: 3, homePasses: 512, awayPasses: 378 },
  },
  m046: {
    matchId: 'm046',
    summary: '克罗地亚在多伦多1-0小胜巴拿马，莫德里奇第53分钟点球命中打入全场唯一进球。40岁的莫德里奇发挥出色全场传球成功率高达93%，克罗地亚积3分保留出线希望。',
    goals: [
      { time: '53\'', player: '莫德里奇 (Modric)', team: 'away' },
    ],
    stats: { homePossession: 40, awayPossession: 60, homeShots: 7, awayShots: 13, homeShotsOnTarget: 2, awayShotsOnTarget: 5, homeFouls: 15, awayFouls: 10, homeCorners: 3, awayCorners: 6, homePasses: 356, awayPasses: 523 },
  },
  m047: {
    matchId: 'm047',
    summary: '英格兰在波士顿0-0被加纳逼平，爆出L组大冷门！英格兰全场17次射门控球率66%却始终无法破门，凯恩和贝林厄姆多次错失良机。加纳门将沃拉科特做出5次精彩扑救力保大门不失。',
    goals: [],
    stats: { homePossession: 66, awayPossession: 34, homeShots: 17, awayShots: 5, homeShotsOnTarget: 5, awayShotsOnTarget: 1, homeFouls: 9, awayFouls: 16, homeCorners: 8, awayCorners: 2, homePasses: 589, awayPasses: 298 },
  },
  m048: {
    matchId: 'm048',
    summary: '葡萄牙5-0大胜乌兹别克斯坦，C罗替补登场梅开二度创造历史！莱奥闪电破门，B费远射建功，C罗第67分钟替补登场后首次触球即头球破门，第89分钟再入一球，成为史上首位连续6届世界杯进球的球员！贡萨洛·拉莫斯也有一球入账。',
    goals: [
      { time: '12\'', player: '莱奥 (Leao)', team: 'home' },
      { time: '34\'', player: 'B费 (Bruno Fernandes)', team: 'home' },
      { time: '67\'', player: 'C罗 (Cristiano Ronaldo)', team: 'home' },
      { time: '73\'', player: '贡萨洛·拉莫斯 (Goncalo Ramos)', team: 'home' },
      { time: '89\'', player: 'C罗 (Cristiano Ronaldo)', team: 'home' },
    ],
    stats: { homePossession: 68, awayPossession: 32, homeShots: 21, awayShots: 3, homeShotsOnTarget: 10, awayShotsOnTarget: 0, homeFouls: 6, awayFouls: 18, homeCorners: 9, awayCorners: 1, homePasses: 612, awayPasses: 289 },
  },
  m049: {
    matchId: 'm049',
    summary: '瑞士在温哥华2-1力克东道主加拿大！沙奇里第19分钟任意球直接破门，乔纳森·戴维第42分钟为加拿大扳平比分，但恩博洛第74分钟头球绝杀。加拿大虽然控球率占优但未能把握住机会。',
    goals: [
      { time: '19\'', player: '沙奇里 (Shaqiri)', team: 'home' },
      { time: '42\'', player: '戴维 (David)', team: 'away' },
      { time: '74\'', player: '恩博洛 (Embolo)', team: 'home' },
    ],
    stats: { homePossession: 48, awayPossession: 52, homeShots: 10, awayShots: 12, homeShotsOnTarget: 4, awayShotsOnTarget: 4, homeFouls: 13, awayFouls: 11, homeCorners: 4, awayCorners: 6, homePasses: 434, awayPasses: 478 },
  },
  m050: {
    matchId: 'm050',
    summary: '波黑在西雅图3-1击败卡塔尔，哲科第11分钟头球闪击得手，阿菲夫第33分钟为卡塔尔扳平比分。德米罗维奇第58分钟头球再度超出，克鲁尼奇第86分钟远射锁定胜局。卡塔尔三连败小组垫底。',
    goals: [
      { time: '11\'', player: '哲科 (Dzeko)', team: 'home' },
      { time: '33\'', player: '阿菲夫 (Afif)', team: 'away' },
      { time: '58\'', player: '德米罗维奇 (Demirovic)', team: 'home' },
      { time: '86\'', player: '克鲁尼奇 (Krunic)', team: 'home' },
    ],
    stats: { homePossession: 54, awayPossession: 46, homeShots: 14, awayShots: 7, homeShotsOnTarget: 6, awayShotsOnTarget: 2, homeFouls: 12, awayFouls: 14, homeCorners: 5, awayCorners: 3, homePasses: 478, awayPasses: 398 },
  },
  m051: {
    matchId: 'm051',
    summary: '摩洛哥在亚特兰大4-2击败海地上演进球大战。恩-内斯里上演帽子戏法，齐耶赫和阿什拉夫各贡献传射。皮埃罗为海地梅开二度两度扳平，但恩-内斯里第89分钟头球完成帽子戏法绝杀。',
    goals: [
      { time: '8\'', player: '恩-内斯里 (En-Nesyri)', team: 'home' },
      { time: '25\'', player: '皮埃罗 (Pierrot)', team: 'away' },
      { time: '39\'', player: '齐耶赫 (Ziyech)', team: 'home' },
      { time: '56\'', player: '阿什拉夫 (Hakimi)', team: 'home' },
      { time: '72\'', player: '皮埃罗 (Pierrot)', team: 'away' },
      { time: '89\'', player: '恩-内斯里 (En-Nesyri)', team: 'home' },
    ],
    stats: { homePossession: 56, awayPossession: 44, homeShots: 16, awayShots: 9, homeShotsOnTarget: 8, awayShotsOnTarget: 4, homeFouls: 13, awayFouls: 12, homeCorners: 6, awayCorners: 4, homePasses: 489, awayPasses: 387 },
  },
  m052: {
    matchId: 'm052',
    summary: '巴西在迈阿密3-0完胜苏格兰，维尼修斯、罗德里戈和帕奎塔各入一球。苏格兰全场仅5次射门1次射正，巴西完全掌控比赛节奏。巴西三战积7分以C组头名晋级。',
    goals: [
      { time: '23\'', player: '维尼修斯 (Vinicius Jr)', team: 'away' },
      { time: '51\'', player: '罗德里戈 (Rodrygo)', team: 'away' },
      { time: '78\'', player: '帕奎塔 (Paqueta)', team: 'away' },
    ],
    stats: { homePossession: 38, awayPossession: 62, homeShots: 5, awayShots: 19, homeShotsOnTarget: 1, awayShotsOnTarget: 9, homeFouls: 14, awayFouls: 8, homeCorners: 2, awayCorners: 8, homePasses: 323, awayPasses: 578 },
  },
  m053: {
    matchId: 'm053',
    summary: '南非在蒙特雷1-0爆冷击败韩国！福斯特第59分钟单刀破门打入全场唯一进球。韩国全场13次射门4次射正却始终无法扳平比分，孙兴慜延续低迷状态。南非取得队史世界杯首胜！',
    goals: [
      { time: '59\'', player: '福斯特 (Foster)', team: 'home' },
    ],
    stats: { homePossession: 42, awayPossession: 58, homeShots: 7, awayShots: 13, homeShotsOnTarget: 3, awayShotsOnTarget: 4, homeFouls: 15, awayFouls: 11, homeCorners: 3, awayCorners: 6, homePasses: 356, awayPasses: 498 },
  },
  m054: {
    matchId: 'm054',
    summary: '墨西哥在阿兹特克球场3-0大胜捷克，三战全胜积9分以A组头名强势晋级！希门尼斯第26分钟头球破门，阿尔瓦雷斯第54分钟远射扩大比分，基尼奥内斯第82分钟单刀锁定胜局。捷克三连败小组垫底。',
    goals: [
      { time: '26\'', player: '希门尼斯 (Jimenez)', team: 'away' },
      { time: '54\'', player: '阿尔瓦雷斯 (Edson Alvarez)', team: 'away' },
      { time: '82\'', player: '基尼奥内斯 (Quinones)', team: 'away' },
    ],
    stats: { homePossession: 40, awayPossession: 60, homeShots: 6, awayShots: 17, homeShotsOnTarget: 1, awayShotsOnTarget: 8, homeFouls: 15, awayFouls: 9, homeCorners: 2, awayCorners: 7, homePasses: 345, awayPasses: 534 },
  },
  m055: {
    matchId: 'm055',
    summary: '大冷门！大面积轮换的德国队遭厄瓜多尔逆转。萨内第2分钟闪击破门，安古洛9分钟远射扳平，普拉塔第78分钟角球战术捅射绝杀。德国队虽已提前锁定头名，但失利终结了连胜势头。厄瓜多尔逆袭出线，球员相拥落泪。',
    goals: [
      { time: '2\'', player: '萨内 (Leroy Sane)', team: 'away' },
      { time: '9\'', player: '安古洛 (Angulo)', team: 'home' },
      { time: '78\'', player: '普拉塔 (Gonzalo Plata)', team: 'home' },
    ],
    stats: { homePossession: 35, awayPossession: 65, homeShots: 6, awayShots: 17, homeShotsOnTarget: 3, awayShotsOnTarget: 5, homeFouls: 14, awayFouls: 10, homeCorners: 2, awayCorners: 6, homePasses: 312, awayPasses: 589 },
  },
  m056: {
    matchId: 'm056',
    summary: '巴拉圭0-0闷平澳大利亚，双方携手出线。这场比赛被质疑为"默契球"——打平即可让巴拉圭积4分、澳大利亚积4分，两队凭净胜球优势双双晋级。比赛场面沉闷，双方均缺乏进攻欲望。',
    goals: [],
    stats: { homePossession: 48, awayPossession: 52, homeShots: 6, awayShots: 7, homeShotsOnTarget: 2, awayShotsOnTarget: 2, homeFouls: 13, awayFouls: 12, homeCorners: 4, awayCorners: 4, homePasses: 423, awayPasses: 456 },
  },
  m057: {
    matchId: 'm057',
    summary: '惊天冷门！已出局的土耳其补时绝杀3-2逆转东道主美国！特拉斯蒂角球爆射闪击，居莱尔推射扳平，柯克曲反超，贝尔哈特远射扳平，艾汗第98分钟禁区乱战绝杀！美国虽败仍以净胜球优势获头名。',
    goals: [
      { time: '3\'', player: '特拉斯蒂 (Auston Trusty)', team: 'away' },
      { time: '10\'', player: '阿尔达·居莱尔 (Arda Guler)', team: 'home' },
      { time: '29\'', player: '柯克曲 (Orkun Kokcu)', team: 'home' },
      { time: '49\'', player: '贝尔哈特 (Berhalter)', team: 'away' },
      { time: '90+7\'', player: '艾汗 (Kaan Ayhan)', team: 'home' },
    ],
    stats: { homePossession: 45, awayPossession: 55, homeShots: 12, awayShots: 14, homeShotsOnTarget: 6, awayShotsOnTarget: 5, homeFouls: 14, awayFouls: 11, homeCorners: 5, awayCorners: 6, homePasses: 398, awayPasses: 489 },
  },
  m058: {
    matchId: 'm058',
    summary: '日本1-1战平瑞典，携手荷兰出线！第56分钟日本队9脚连续传接配合后前田大然单刀推射破门，6分钟后埃兰加28.9米世界波挂死角扳平。铃木彩艳全场4次关键扑救守住平局。埃兰加的进球是瑞典队史世界杯第二远进球。',
    goals: [
      { time: '56\'', player: '前田大然 (Maeda Daizen)', team: 'home' },
      { time: '62\'', player: '埃兰加 (Anthony Elanga)', team: 'away' },
    ],
    stats: { homePossession: 52, awayPossession: 48, homeShots: 8, awayShots: 11, homeShotsOnTarget: 3, awayShotsOnTarget: 5, homeFouls: 12, awayFouls: 13, homeCorners: 2, awayCorners: 8, homePasses: 467, awayPasses: 434 },
  },
  m059: {
    matchId: 'm059',
    summary: '荷兰3-1击败突尼斯锁定小组头名！邓弗里斯造斯希里乌龙，布罗比爆射扩大比分，马斯图里为突尼斯扳回一球，范赫克头球锁定胜局。荷兰2胜1平不败，小组赛打入10球。',
    goals: [
      { time: '3\'', player: '斯希里 (Skhiri, 乌龙)', team: 'home', ownGoal: true },
      { time: '7\'', player: '布罗比 (Brian Brobbey)', team: 'away' },
      { time: '54\'', player: '马斯图里 (Mastouri)', team: 'home' },
      { time: '62\'', player: '范赫克 (Jan Paul van Hecke)', team: 'away' },
    ],
    stats: { homePossession: 38, awayPossession: 62, homeShots: 7, awayShots: 15, homeShotsOnTarget: 3, awayShotsOnTarget: 7, homeFouls: 15, awayFouls: 10, homeCorners: 2, awayCorners: 7, homePasses: 334, awayPasses: 556 },
  },
  m060: {
    matchId: 'm060',
    summary: '尼古拉·佩佩梅开二度！第7分钟接迪奥曼德传中包抄破门，第63分钟接桑加雷直塞梅开二度。科特迪瓦队史首次晋级世界杯淘汰赛！库拉索虽败犹荣，门将鲁姆首轮15次扑救令人印象深刻。',
    goals: [
      { time: '7\'', player: '尼古拉·佩佩 (Nicolas Pepe)', team: 'away' },
      { time: '63\'', player: '尼古拉·佩佩 (Nicolas Pepe)', team: 'away' },
    ],
    stats: { homePossession: 40, awayPossession: 60, homeShots: 5, awayShots: 14, homeShotsOnTarget: 2, awayShotsOnTarget: 6, homeFouls: 14, awayFouls: 11, homeCorners: 2, awayCorners: 6, homePasses: 345, awayPasses: 523 },
  },
  m061: {
    matchId: 'm061',
    summary: '法国4-1大胜挪威锁定头名！登贝莱上演帽子戏法，杜埃锦上添花。挪威大幅轮换，哈兰德替补未出场。法国三连胜进10球仅失2球，展现冠军相。',
    goals: [
      { time: '20\'', player: '登贝莱 (Dembele)', team: 'away' },
      { time: '45\'', player: '登贝莱 (Dembele)', team: 'away' },
      { time: '60\'', player: '登贝莱 (Dembele)', team: 'away' },
      { time: '75\'', player: '杜埃 (Doue)', team: 'away' },
      { time: '82\'', player: '厄德高 (Odegaard)', team: 'home' },
    ],
    stats: { homePossession: 45, awayPossession: 55, homeShots: 8, awayShots: 18, homeShotsOnTarget: 3, awayShotsOnTarget: 10, homeFouls: 10, awayFouls: 8, homeCorners: 3, awayCorners: 7, homePasses: 420, awayPasses: 530 },
  },
  m062: {
    matchId: 'm062',
    summary: '塞内加尔5-0血洗伊拉克！盖耶梅开二度，迪亚拉、恩迪亚耶、萨尔联袂破门。塞内加尔从两连败中逆袭，积3分以净胜球优势成为最佳小组第三晋级。',
    goals: [
      { time: '12\'', player: '盖耶 (Gueye)', team: 'home' },
      { time: '28\'', player: '哈比卜·迪亚拉 (Habib Diarra)', team: 'home' },
      { time: '34\'', player: '盖耶 (Gueye)', team: 'home' },
      { time: '56\'', player: '恩迪亚耶 (Ndiaye)', team: 'home' },
      { time: '71\'', player: '萨尔 (Sarr)', team: 'home' },
    ],
    stats: { homePossession: 62, awayPossession: 38, homeShots: 16, awayShots: 5, homeShotsOnTarget: 9, awayShotsOnTarget: 1, homeFouls: 12, awayFouls: 14, homeCorners: 8, awayCorners: 2, homePasses: 520, awayPasses: 320 },
  },
  m063: {
    matchId: 'm063',
    summary: '0-0闷平！56万人口的佛得角创造世界杯历史——首次参赛就以三连平（0-0西班牙、2-2乌拉圭、0-0沙特）奇迹般晋级淘汰赛！40岁老门将沃齐尼亚与梅西同场竞技的梦想即将实现。',
    goals: [],
    stats: { homePossession: 45, awayPossession: 55, homeShots: 7, awayShots: 9, homeShotsOnTarget: 2, awayShotsOnTarget: 3, homeFouls: 16, awayFouls: 12, homeCorners: 3, awayCorners: 5, homePasses: 360, awayPasses: 440 },
  },
  m064: {
    matchId: 'm064',
    summary: '西班牙1-0力克乌拉圭锁定头名！巴埃纳上半场头球破门，乌拉圭门将出现黄油手低级失误葬送球队。乌拉圭两连平后末轮失利，积2分遗憾出局。',
    goals: [
      { time: '38\'', player: '巴埃纳 (Baena)', team: 'away' },
    ],
    stats: { homePossession: 42, awayPossession: 58, homeShots: 6, awayShots: 12, homeShotsOnTarget: 2, awayShotsOnTarget: 5, homeFouls: 14, awayFouls: 10, homeCorners: 4, awayCorners: 6, homePasses: 410, awayPasses: 520 },
  },
  m065: {
    matchId: 'm065',
    summary: '比利时5-1大胜新西兰头名出线！黄金一代用一场大胜告别小组赛的低迷——特罗萨德、德布劳内、卢卡库、萨勒马科尔斯和多库各入一球。比利时从两连平的悬崖边绝地反击。',
    goals: [
      { time: '15\'', player: '特罗萨德 (Trossard)', team: 'away' },
      { time: '23\'', player: '克里斯·伍德 (Chris Wood)', team: 'home' },
      { time: '42\'', player: '德布劳内 (De Bruyne)', team: 'away' },
      { time: '51\'', player: '卢卡库 (Lukaku)', team: 'away' },
      { time: '68\'', player: '萨勒马科尔斯 (Saelemaekers)', team: 'away' },
      { time: '78\'', player: '多库 (Doku)', team: 'away' },
    ],
    stats: { homePossession: 40, awayPossession: 60, homeShots: 7, awayShots: 19, homeShotsOnTarget: 3, awayShotsOnTarget: 10, homeFouls: 12, awayFouls: 9, homeCorners: 3, awayCorners: 8, homePasses: 340, awayPasses: 540 },
  },
  m066: {
    matchId: 'm066',
    summary: '伊朗1-1战平埃及，积3分以最佳小组第三晋级！萨比尔开场破门，雷扎扬迅速扳平。塔雷米点球被扑出，哈利勒扎德绝杀被吹越位无效。伊朗三战全平但防守坚韧，挺进淘汰赛。',
    goals: [
      { time: '5\'', player: '萨比尔 (Sabir)', team: 'home' },
      { time: '14\'', player: '雷扎扬 (Rezaeian)', team: 'away' },
    ],
    stats: { homePossession: 48, awayPossession: 52, homeShots: 10, awayShots: 12, homeShotsOnTarget: 4, awayShotsOnTarget: 5, homeFouls: 13, awayFouls: 14, homeCorners: 4, awayCorners: 5, homePasses: 445, awayPasses: 460 },
  },
  m067: {
    matchId: 'm067',
    summary: '英格兰2-0击败巴拿马锁定L组头名！贝林厄姆第62分钟打破僵局，凯恩第67分钟扩大比分。英格兰2胜1平不败晋级，巴拿马三战全败出局。',
    goals: [
      { time: '62\'', player: '贝林厄姆 (Bellingham)', team: 'away' },
      { time: '67\'', player: '凯恩 (Kane)', team: 'away' },
    ],
    stats: { homePossession: 35, awayPossession: 65, homeShots: 3, awayShots: 15, homeShotsOnTarget: 1, awayShotsOnTarget: 6, homeFouls: 14, awayFouls: 9, homeCorners: 2, awayCorners: 7, homePasses: 298, awayPasses: 589 },
  },
  m068: {
    matchId: 'm068',
    summary: '克罗地亚2-1击败加纳小组第二出线！苏契奇和弗拉西奇各入一球，拉卡森为加纳扳回一球。加纳凭借3分以最佳小组第三晋级。',
    goals: [
      { time: '34\'', player: '苏契奇 (Sucic)', team: 'away' },
      { time: '58\'', player: '弗拉西奇 (Vlasic)', team: 'away' },
      { time: '76\'', player: '拉卡森 (Laccason)', team: 'home' },
    ],
    stats: { homePossession: 45, awayPossession: 55, homeShots: 8, awayShots: 12, homeShotsOnTarget: 3, awayShotsOnTarget: 6, homeFouls: 13, awayFouls: 11, homeCorners: 4, awayCorners: 6, homePasses: 378, awayPasses: 512 },
  },
  m069: {
    matchId: 'm069',
    summary: '哥伦比亚0-0闷平葡萄牙，两队携手出线。哥伦比亚2胜1平积7分获K组头名，葡萄牙1胜2平积5分获第二。C罗继续首发但未能破门。',
    goals: [],
    stats: { homePossession: 48, awayPossession: 52, homeShots: 8, awayShots: 9, homeShotsOnTarget: 2, awayShotsOnTarget: 3, homeFouls: 12, awayFouls: 10, homeCorners: 4, awayCorners: 5, homePasses: 456, awayPasses: 489 },
  },
  m070: {
    matchId: 'm070',
    summary: '刚果(金)3-1击败乌兹别克斯坦，逆袭晋级32强！刚果(金)从两连败中绝地反击，积4分以最佳小组第三出线。乌兹别克斯坦三战全败出局。',
    goals: [
      { time: '23\'', player: '姆布库 (Mbuku)', team: 'home' },
      { time: '41\'', player: '博拉西 (Bolasie)', team: 'home' },
      { time: '68\'', player: '巴坎布 (Bakambu)', team: 'home' },
      { time: '79\'', player: '肖穆罗多夫 (Shomurodov)', team: 'away' },
    ],
    stats: { homePossession: 58, awayPossession: 42, homeShots: 14, awayShots: 6, homeShotsOnTarget: 7, awayShotsOnTarget: 2, homeFouls: 11, awayFouls: 15, homeCorners: 6, awayCorners: 2, homePasses: 523, awayPasses: 378 },
  },
  m071: {
    matchId: 'm071',
    summary: '阿尔及利亚3-3战平奥地利！一场进球大战，阿尔及利亚凭借1胜1平1负积4分以最佳小组第三晋级，奥地利1胜1平1负积4分获J组第二出线。',
    goals: [
      { time: '12\'', player: '马赫雷斯 (Mahrez)', team: 'home' },
      { time: '29\'', player: '萨比策 (Sabitzer)', team: 'away' },
      { time: '45\'', player: '本拉赫马 (Benrahma)', team: 'home' },
      { time: '56\'', player: '阿瑙托维奇 (Arnautovic)', team: 'away' },
      { time: '71\'', player: '阿塔尔 (Atal)', team: 'home' },
      { time: '83\'', player: '格雷戈里奇 (Gregoritsch)', team: 'away' },
    ],
    stats: { homePossession: 50, awayPossession: 50, homeShots: 12, awayShots: 10, homeShotsOnTarget: 6, awayShotsOnTarget: 5, homeFouls: 13, awayFouls: 12, homeCorners: 5, awayCorners: 4, homePasses: 478, awayPasses: 467 },
  },
  m072: {
    matchId: 'm072',
    summary: '阿根廷3-1击败约旦，三战全胜零失球锁定J组头名！梅西领衔的卫冕冠军继续高歌猛进，展现恐怖统治力。',
    goals: [
      { time: '18\'', player: '梅西 (Messi)', team: 'away' },
      { time: '44\'', player: '阿尔瓦雷斯 (Alvarez)', team: 'away' },
      { time: '52\'', player: '劳塔罗 (Lautaro)', team: 'away' },
      { time: '67\'', player: '阿尔-塔马里 (Al-Tamari)', team: 'home' },
    ],
    stats: { homePossession: 32, awayPossession: 68, homeShots: 4, awayShots: 18, homeShotsOnTarget: 1, awayShotsOnTarget: 8, homeFouls: 16, awayFouls: 8, homeCorners: 1, awayCorners: 8, homePasses: 298, awayPasses: 612 },
  },
};

export function getMatchDetail(matchId: string): MatchDetail | undefined {
  return matchDetails[matchId];
}
