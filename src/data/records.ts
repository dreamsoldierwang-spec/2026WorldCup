// Auto-generated from research data - 2026 FIFA World Cup

import type { RecordEntry } from '../types';

export interface RecordCategory {
  title: string;
  titleZh: string;
  icon: string;
  records: RecordEntry[];
  note?: string;
}

export const records: RecordCategory[] = [
  {
    title: 'Most World Cup Titles',
    titleZh: '夺冠次数最多',
    icon: '🏆',
    records: [
      { rank: 1, label: '巴西', value: '5次', detail: '1958, 1962, 1970, 1994, 2002' },
      { rank: 2, label: '德国', value: '4次', detail: '1954, 1974, 1990, 2014' },
      { rank: 2, label: '意大利', value: '4次', detail: '1934, 1938, 1982, 2006' },
      { rank: 4, label: '阿根廷', value: '3次', detail: '1978, 1986, 2022' },
      { rank: 5, label: '法国', value: '2次', detail: '1998, 2018' },
      { rank: 5, label: '乌拉圭', value: '2次', detail: '1930, 1950' },
      { rank: 5, label: '西班牙', value: '2次', detail: '2010, 2026 🔥' },
      { rank: 8, label: '英格兰', value: '1次', detail: '1966' },
    ],
  },
  {
    title: 'All-Time Top Scorers',
    titleZh: '历史射手王',
    icon: '⚽',
    records: [
      { rank: 1, label: '梅西 (阿根廷)', value: '21球', detail: '31场 • 2006-2026 🔥' },
      { rank: 1, label: '姆巴佩 (法国)', value: '21球', detail: '21场 • 2018-2026 🔥' },
      { rank: 3, label: '克洛泽 (德国)', value: '16球', detail: '24场 • 2002-2014' },
      { rank: 4, label: '罗纳尔多 (巴西)', value: '15球', detail: '19场 • 1998-2006' },
      { rank: 5, label: '盖德·穆勒 (德国)', value: '14球', detail: '13场 • 1970-1974' },
      { rank: 6, label: '方丹 (法国)', value: '13球', detail: '6场 • 1958' },
      { rank: 7, label: '贝利 (巴西)', value: '12球', detail: '14场 • 1958-1970' },
      { rank: 8, label: '柯奇士 (匈牙利)', value: '11球', detail: '5场 • 1954' },
      { rank: 9, label: '巴蒂斯图塔 (阿根廷)', value: '10球', detail: '12场 • 1994-2002' },
      { rank: 9, label: '莱因克尔 (英格兰)', value: '10球', detail: '12场 • 1986-1990' },
    ],
  },
  {
    title: 'All-Time Top Assists',
    titleZh: '历史助攻王',
    icon: '🎯',
    records: [
      { rank: 1, label: '梅西 (阿根廷)', value: '10次', detail: '31场 • 2006-2026 🔥' },
      { rank: 2, label: '马拉多纳 (阿根廷)', value: '8次', detail: '21场 • 1982-1994' },
      { rank: 3, label: '贝利 (巴西)', value: '7次', detail: '14场 • 1958-1970' },
      { rank: 4, label: '德布劳内 (比利时)', value: '7次', detail: '16场 • 2014-2026 🔥' },
    ],
  },
  {
    title: 'Most Appearances',
    titleZh: '出场次数最多',
    icon: '👕',
    records: [
      { rank: 1, label: '梅西 (阿根廷)', value: '31场', detail: '6届世界杯 • 2006-2026 🔥' },
      { rank: 2, label: '马特乌斯 (德国)', value: '25场', detail: '5届世界杯 • 1982-1998' },
      { rank: 3, label: '克洛泽 (德国)', value: '24场', detail: '4届世界杯 • 2002-2014' },
      { rank: 4, label: '马尔蒂尼 (意大利)', value: '23场', detail: '4届世界杯 • 1990-2002' },
      { rank: 5, label: 'C罗 (葡萄牙)', value: '23场', detail: '6届世界杯 • 2006-2026 🔥' },
    ],
    note: '🔥 = 包含2026年世界杯数据',
  },
  {
    title: 'Most WC Appearances by Country',
    titleZh: '参赛次数最多的国家',
    icon: '🌍',
    records: [
      { rank: 1, label: '巴西', value: '22次', detail: '唯一全勤球队！' },
      { rank: 2, label: '德国', value: '20次', detail: '' },
      { rank: 3, label: '意大利', value: '18次', detail: '' },
      { rank: 3, label: '阿根廷', value: '18次', detail: '' },
      { rank: 5, label: '墨西哥', value: '17次', detail: '' },
    ],
  },
  {
    title: 'Biggest Victories',
    titleZh: '历史最大比分',
    icon: '💥',
    records: [
      { rank: 1, label: '匈牙利 10-1 萨尔瓦多', value: '1982', detail: '' },
      { rank: 2, label: '匈牙利 9-0 韩国', value: '1954', detail: '' },
      { rank: 2, label: '南斯拉夫 9-0 扎伊尔', value: '1974', detail: '' },
      { rank: 4, label: '瑞典 8-0 古巴', value: '1938', detail: '' },
      { rank: 4, label: '乌拉圭 8-0 玻利维亚', value: '1950', detail: '' },
    ],
  },
  {
    title: '2026 World Cup Records',
    titleZh: '2026 本届新纪录',
    icon: '🔥',
    records: [
      { rank: 0, label: '梅西 · 历史射手王', value: '21球', detail: '超越克洛泽16球纪录，与姆巴佩并列历史第一' },
      { rank: 0, label: '梅西 · 出场王', value: '31场', detail: '6届世界杯，历史出场次数第一人' },
      { rank: 0, label: '亚马尔 · 双冠天才', value: '18岁', detail: '欧洲杯+世界杯双冠，史上最年轻双冠王' },
      { rank: 0, label: '西班牙 · 决赛零封射门', value: '阿根廷0射门', detail: '1966年以来世界杯决赛上半场射门最少纪录' },
      { rank: 0, label: '英格兰 · 10球大战', value: '6-4法国', detail: '1982年以来世界杯首次单场10球（季军赛）' },
      { rank: 0, label: '费兰·托雷斯 · 加时绝杀', value: '106\'', detail: '世界杯决赛加时赛绝杀，一剑封喉' },
      { rank: 0, label: '西班牙 · 极致传控夺冠', value: '65%控球', detail: '决赛全场压制阿根廷，传控足球的终极胜利' },
      { rank: 0, label: '首次三国合办', value: '2026', detail: '美国、加拿大、墨西哥联合主办' },
      { rank: 0, label: '最大规模', value: '48队 104场', detail: '2026年扩军至48支球队，史上最盛大' },
    ],
  },
  {
    title: 'Interesting Records',
    titleZh: '趣味纪录',
    icon: '📖',
    records: [
      { rank: 0, label: '最年轻进球者', value: '贝利 (17岁239天)', detail: '1958年' },
      { rank: 0, label: '最年长进球者', value: '罗杰·米拉 (42岁39天)', detail: '1994年喀麦隆' },
      { rank: 0, label: '最快进球', value: '哈坎·苏克 (11秒)', detail: '2002年 土耳其 vs 韩国' },
      { rank: 0, label: '单场最多牌', value: '16黄+4红', detail: '2006年 葡萄牙 vs 荷兰 • "纽伦堡之战"' },
      { rank: 0, label: '最高上座率', value: '173,850人', detail: '1950年 乌拉圭 vs 巴西 • 马拉卡纳' },
      { rank: 0, label: '最多进球比赛', value: '12球', detail: '1954年 奥地利 7-5 瑞士' },
    ],
  },
];
