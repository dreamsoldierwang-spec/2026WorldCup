import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';

// ===== 数据定义 =====

interface Player {
  name: string;
  x: number; // 0-100, 左到右
  y: number; // 0-100, 上到下
}

interface Matchup {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeFormation: string;
  awayFormation: string;
  homePlayers: Player[];
  awayPlayers: Player[];
  homeColor: string;
  awayColor: string;
  homeTextColor: string;
  awayTextColor: string;
  keyMatchups: { homePlayer: string; awayPlayer: string; position: string; analysis: string }[];
  stats: { label: string; home: number; away: number }[];
  homeTactics: { strengths: string[]; weaknesses: string[] };
  awayTactics: { strengths: string[]; weaknesses: string[] };
  prediction: { score: string; keyFactors: string[] };
}

const getTeam = (id: string) => teams.find(t => t.id === id)!;

const semiFinals: Matchup[] = [
  {
    id: 'sf1',
    homeTeamId: 'fra',
    awayTeamId: 'esp',
    homeFormation: '4-2-3-1',
    awayFormation: '4-3-3',
    homeColor: '#2563EB',
    awayColor: '#DC2626',
    homeTextColor: '#93C5FD',
    awayTextColor: '#FCA5A5',
    homePlayers: [
      { name: '迈尼昂', x: 50, y: 93 },
      { name: '迪涅', x: 15, y: 73 },
      { name: '于帕梅卡诺', x: 36, y: 76 },
      { name: '萨利巴', x: 64, y: 76 },
      { name: '孔德', x: 85, y: 73 },
      { name: '楚阿梅尼', x: 38, y: 55 },
      { name: '坎特', x: 62, y: 55 },
      { name: '登贝莱', x: 15, y: 38 },
      { name: '奥利塞', x: 50, y: 36 },
      { name: '杜埃', x: 85, y: 38 },
      { name: '姆巴佩', x: 50, y: 18 },
    ],
    awayPlayers: [
      { name: '乌奈·西蒙', x: 50, y: 7 },
      { name: '库库雷利亚', x: 15, y: 27 },
      { name: '拉波尔特', x: 36, y: 24 },
      { name: '库巴西', x: 64, y: 24 },
      { name: '波罗', x: 85, y: 27 },
      { name: '罗德里', x: 35, y: 44 },
      { name: '法比安·鲁伊斯', x: 50, y: 42 },
      { name: '巴埃纳', x: 65, y: 44 },
      { name: '奥尔莫', x: 20, y: 62 },
      { name: '奥亚萨瓦尔', x: 50, y: 66 },
      { name: '亚马尔', x: 80, y: 62 },
    ],
    keyMatchups: [
      { homePlayer: '姆巴佩', awayPlayer: '库巴西', position: 'ST vs CB', analysis: '姆巴佩的速度与爆发力对库巴斯的防守意识是最大考验，库巴西本届世界杯表现出色但将面临最严峻挑战' },
      { homePlayer: '坎特', awayPlayer: '罗德里', position: 'CDM vs CM', analysis: '世界级后腰对决，坎特的拦截覆盖 vs 罗德里的组织推进，谁能控制中场将决定比赛走向' },
      { homePlayer: '登贝莱', awayPlayer: '波罗', position: 'LW vs RB', analysis: '登贝莱的盘带突破对波罗的攻防转换能力，边路攻防将直接影响双方进攻效率' },
      { homePlayer: '楚阿梅尼', awayPlayer: '法比安·鲁伊斯', position: 'CDM vs CM', analysis: '楚阿梅尼的防守硬度 vs 法比安的前插威胁，第二中场的较量同样关键' },
    ],
    stats: [
      { label: '控球率 (%)', home: 45, away: 58 },
      { label: '场均射门', home: 14.2, away: 16.8 },
      { label: '传球成功率 (%)', home: 85, away: 91 },
      { label: '场均抢断', home: 18.5, away: 15.2 },
      { label: '场均跑动距离 (km)', home: 108, away: 112 },
    ],
    homeTactics: {
      strengths: ['防守反击极为犀利，姆巴佩的速度是世界级武器', '坎特回归后中场硬度大幅提升', '定位球进攻效率高，于帕梅卡诺和萨利巴头球能力强'],
      weaknesses: ['控球率偏低，可能被西班牙压制', '两翼防守空间较大，亚马尔和奥尔莫的跑位会造成威胁', '奥利塞状态起伏较大，前腰位置的创造力有待验证'],
    },
    awayTactics: {
      strengths: ['传控体系成熟，短传配合行云流水', '亚马尔本届赛事表现惊艳，突破能力强', '罗德里坐镇中场，攻守转换极佳'],
      weaknesses: ['防线速度偏慢，面对快速反击容易暴露身后空间', '缺少纯正中锋，禁区内终结能力有限', '高位压迫可能被法国的长传打穿'],
    },
    prediction: {
      score: '法国 2-1 西班牙',
      keyFactors: ['法国的反击效率将在关键时刻致命', '坎特对罗德里的限制程度决定比赛走向', '姆巴佩的个人能力可能成为比赛转折点', '加时赛或点球的可能性不能排除'],
    },
  },
  {
    id: 'sf2',
    homeTeamId: 'eng',
    awayTeamId: 'arg',
    homeFormation: '4-2-3-1',
    awayFormation: '4-3-1-2',
    homeColor: '#FFFFFF',
    awayColor: '#7DD3FC',
    homeTextColor: '#E5E7EB',
    awayTextColor: '#BAE6FD',
    homePlayers: [
      { name: '皮克福德', x: 50, y: 93 },
      { name: '孔萨', x: 15, y: 73 },
      { name: '斯通斯', x: 36, y: 76 },
      { name: '邓弗里斯', x: 64, y: 76 },
      { name: '奥赖利', x: 85, y: 73 },
      { name: '赖斯', x: 38, y: 55 },
      { name: '梅努', x: 62, y: 55 },
      { name: '马杜埃凯', x: 15, y: 38 },
      { name: '贝林厄姆', x: 50, y: 36 },
      { name: '戈登', x: 85, y: 38 },
      { name: '凯恩', x: 50, y: 18 },
    ],
    awayPlayers: [
      { name: '大马丁', x: 50, y: 7 },
      { name: '塔利亚菲科', x: 15, y: 27 },
      { name: '奥塔门迪', x: 36, y: 24 },
      { name: '罗梅罗', x: 64, y: 24 },
      { name: '蒙铁尔', x: 85, y: 27 },
      { name: '德保罗', x: 30, y: 44 },
      { name: '恩佐', x: 50, y: 46 },
      { name: '帕雷德斯', x: 70, y: 44 },
      { name: '梅西', x: 50, y: 60 },
      { name: '劳塔罗', x: 35, y: 72 },
      { name: '阿尔瓦雷斯', x: 65, y: 72 },
    ],
    keyMatchups: [
      { homePlayer: '贝林厄姆', awayPlayer: '恩佐', position: 'AM vs CM', analysis: '两位皇马中场队友的直接对话，贝林厄姆的进攻威胁 vs 恩佐的全能覆盖' },
      { homePlayer: '凯恩', awayPlayer: '罗梅罗', position: 'ST vs CB', analysis: '凯恩的支点作用和射术对罗梅罗的防守硬度，中锋与中卫的正面交锋' },
      { homePlayer: '赖斯', awayPlayer: '梅西', position: 'CDM vs AM', analysis: '赖斯的防守覆盖需要限制梅西的自由游弋，这是英格兰防守体系最大的考验' },
      { homePlayer: '马杜埃凯', awayPlayer: '蒙铁尔', position: 'LW vs RB', analysis: '马杜埃凯的速度与突破 vs 蒙铁尔的防守经验，左路攻防将直接影响比赛节奏' },
    ],
    stats: [
      { label: '控球率 (%)', home: 52, away: 55 },
      { label: '场均射门', home: 13.5, away: 15.1 },
      { label: '传球成功率 (%)', home: 87, away: 89 },
      { label: '场均抢断', home: 17.8, away: 16.5 },
      { label: '场均跑动距离 (km)', home: 110, away: 106 },
    ],
    homeTactics: {
      strengths: ['贝林厄姆状态火热，前场创造力和得分能力兼备', '赖斯+梅努中场组合硬度出色，防守稳固', '凯恩的支点作用和定位球能力是稳定的得分手段'],
      weaknesses: ['右路防守相对薄弱，邓弗里斯客串中卫可能不适', '进攻过度依赖贝林厄姆和凯恩的个人发挥', '面对高强度逼抢时后场出球不够流畅'],
    },
    awayTactics: {
      strengths: ['梅西虽然年龄增长但依然是比赛的决定性因素', '双前锋体系火力充足，劳塔罗和阿尔瓦雷斯配合默契', '大马丁的门线技术和点球能力是世界顶级'],
      weaknesses: ['梅西体能储备有限，高强度比赛后半段可能下滑', '防线平均年龄偏大，面对年轻快速的英格兰边锋可能吃亏', '德保罗和帕雷德斯覆盖面积有限，中场宽度可能被拉开'],
    },
    prediction: {
      score: '英格兰 1-1 阿根廷（点球大战阿根廷胜）',
      keyFactors: ['梅西的大赛经验和关键球能力可能成为决定因素', '大马丁的点球扑救能力是阿根廷的巨大优势', '贝林厄姆的个人能力能否打破阿根廷防线是英格兰的关键', '比赛很可能进入加时甚至点球'],
    },
  },
];

// ===== 绿茵场组件 =====
function FootballField({ homeTeam, awayTeam, matchup }: { homeTeam: ReturnType<typeof getTeam>; awayTeam: ReturnType<typeof getTeam>; matchup: Matchup }) {
  return (
    <div className="relative w-full max-w-[600px] mx-auto" style={{ aspectRatio: '3/4' }}>
      {/* 绿茵场主体 */}
      <div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a6e2a 0%, #228B22 25%, #1a7a2e 50%, #228B22 75%, #1a6e2a 100%)',
          border: '3px solid rgba(255,255,255,0.9)',
        }}
      >
        {/* 中线 */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/90 -translate-y-1/2" />
        {/* 中圈 */}
        <div className="absolute left-1/2 top-1/2 w-[15%] h-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/90" />
        {/* 中点 */}
        <div className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2" />

        {/* 上方禁区 */}
        <div className="absolute left-[25%] right-[25%] top-0 h-[14%] border-b-2 border-l-2 border-r-2 border-white/90" />
        <div className="absolute left-[37.5%] right-[37.5%] top-0 h-[6%] border-b-2 border-l-2 border-r-2 border-white/90" />
        <div className="absolute left-1/2 top-[11%] w-1.5 h-1.5 rounded-full bg-white/90 -translate-x-1/2" />
        {/* 上方罚球弧 */}
        <div className="absolute left-1/2 top-[14%] w-[12%] h-[5%] -translate-x-1/2 border-b-2 border-white/90 rounded-b-full" />

        {/* 下方禁区 */}
        <div className="absolute left-[25%] right-[25%] bottom-0 h-[14%] border-t-2 border-l-2 border-r-2 border-white/90" />
        <div className="absolute left-[37.5%] right-[37.5%] bottom-0 h-[6%] border-t-2 border-l-2 border-r-2 border-white/90" />
        <div className="absolute left-1/2 bottom-[11%] w-1.5 h-1.5 rounded-full bg-white/90 -translate-x-1/2" />
        {/* 下方罚球弧 */}
        <div className="absolute left-1/2 bottom-[14%] w-[12%] h-[5%] -translate-x-1/2 border-t-2 border-white/90 rounded-t-full" />

        {/* 角旗弧 */}
        <div className="absolute left-0 top-0 w-4 h-4 border-b-2 border-r-2 border-white/60 rounded-br-full" />
        <div className="absolute right-0 top-0 w-4 h-4 border-b-2 border-l-2 border-white/60 rounded-bl-full" />
        <div className="absolute left-0 bottom-0 w-4 h-4 border-t-2 border-r-2 border-white/60 rounded-tr-full" />
        <div className="absolute right-0 bottom-0 w-4 h-4 border-t-2 border-l-2 border-white/60 rounded-tl-full" />

        {/* 上方球员（客队） */}
        {matchup.awayPlayers.map((p, i) => (
          <div
            key={`away-${i}`}
            className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className="text-[8px] sm:text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap mb-0.5"
              style={{ color: matchup.awayTextColor }}
            >
              {p.name}
            </span>
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white/80 shadow-lg shadow-black/50 flex items-center justify-center"
              style={{ backgroundColor: matchup.awayColor }}
            />
          </div>
        ))}

        {/* 下方球员（主队） */}
        {matchup.homePlayers.map((p, i) => (
          <div
            key={`home-${i}`}
            className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white/80 shadow-lg shadow-black/50 flex items-center justify-center"
              style={{ backgroundColor: matchup.homeColor }}
            />
            <span className="text-[8px] sm:text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap mt-0.5"
              style={{ color: matchup.homeTextColor }}
            >
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== 关键对位卡片 =====
function KeyMatchups({ matchups, homeTeam, awayTeam }: { matchups: Matchup['keyMatchups']; homeTeam: ReturnType<typeof getTeam>; awayTeam: ReturnType<typeof getTeam> }) {
  return (
    <div className="space-y-3">
      {matchups.map((m, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-[#FFD700]/30 transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 text-right pr-3">
              <span className="text-sm font-bold text-white">{m.homePlayer}</span>
              <span className="text-xs text-[#FFD700]/70 ml-2">{m.position.split(' vs ')[0]}</span>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#FFD700]/50 bg-[#FFD700]/10 flex items-center justify-center">
              <span className="text-xs font-black text-[#FFD700]">VS</span>
            </div>
            <div className="flex-1 text-left pl-3">
              <span className="text-xs text-[#FFD700]/70 mr-2">{m.position.split(' vs ')[1] || ''}</span>
              <span className="text-sm font-bold text-white">{m.awayPlayer}</span>
            </div>
          </div>
          <p className="text-xs text-white/60 leading-relaxed text-center">{m.analysis}</p>
        </div>
      ))}
    </div>
  );
}

// ===== CSS条形图对比 =====
function StatComparison({ stats, homeTeam, awayTeam }: { stats: Matchup['stats']; homeTeam: ReturnType<typeof getTeam>; awayTeam: ReturnType<typeof getTeam> }) {
  return (
    <div className="space-y-4">
      {stats.map((stat, i) => {
        const total = stat.home + stat.away;
        const homePct = (stat.home / total) * 100;
        const awayPct = (stat.away / total) * 100;

        return (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1 text-right">
              <span className="text-sm font-bold text-[#FFD700] tabular-nums">{stat.home}</span>
            </div>
            <div className="w-full max-w-xs">
              <div className="flex items-center gap-0.5 rounded-full overflow-hidden h-7 bg-white/5">
                <div
                  className="h-full rounded-l-full transition-all duration-700 flex items-center justify-end pr-2"
                  style={{
                    width: `${homePct}%`,
                    background: 'linear-gradient(90deg, #2563EB80, #3B82F6)',
                    minWidth: stat.home > 0 ? '20px' : '0',
                  }}
                >
                  <span className="text-[9px] sm:text-[10px] font-bold text-white/90 hidden sm:inline">{homeTeam.nameZh}</span>
                </div>
                <div className="flex-shrink-0 w-[2px] h-4 bg-white/30" />
                <div
                  className="h-full rounded-r-full transition-all duration-700 flex items-center pl-2"
                  style={{
                    width: `${awayPct}%`,
                    background: 'linear-gradient(90deg, #EF4444, #DC262680)',
                    minWidth: stat.away > 0 ? '20px' : '0',
                  }}
                >
                  <span className="text-[9px] sm:text-[10px] font-bold text-white/90 hidden sm:inline">{awayTeam.nameZh}</span>
                </div>
              </div>
              <div className="text-center mt-1">
                <span className="text-[10px] text-white/40">{stat.label}</span>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold text-[#FFD700] tabular-nums">{stat.away}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ===== 战术要点卡片 =====
function TacticsPanel({ homeTeam, awayTeam, homeTactics, awayTactics }: { homeTeam: ReturnType<typeof getTeam>; awayTeam: ReturnType<typeof getTeam>; homeTactics: Matchup['homeTactics']; awayTactics: Matchup['awayTactics'] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TacticsCard team={homeTeam} tactics={homeTactics} label="战术分析" />
      <TacticsCard team={awayTeam} tactics={awayTactics} label="战术分析" />
    </div>
  );
}

function TacticsCard({ team, tactics, label }: { team: ReturnType<typeof getTeam>; tactics: { strengths: string[]; weaknesses: string[] }; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-[#FFD700]/30 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <FlagImg team={team} size="md" />
        <span className="text-sm font-bold text-white">{team.nameZh}</span>
        <span className="text-xs text-white/40">{label}</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs font-bold text-green-400">优势</span>
          </div>
          <ul className="space-y-1.5">
            {tactics.strengths.map((s, i) => (
              <li key={i} className="text-xs text-white/60 leading-relaxed flex gap-2">
                <span className="text-green-400/50 flex-shrink-0">+</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-xs font-bold text-red-400">隐患</span>
          </div>
          <ul className="space-y-1.5">
            {tactics.weaknesses.map((w, i) => (
              <li key={i} className="text-xs text-white/60 leading-relaxed flex gap-2">
                <span className="text-red-400/50 flex-shrink-0">-</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ===== 赛前预测 =====
function PredictionCard({ prediction }: { prediction: Matchup['prediction'] }) {
  return (
    <div className="rounded-2xl border border-[#FFD700]/30 bg-gradient-to-br from-[#FFD700]/10 to-transparent p-6 text-center">
      <div className="text-xs text-[#FFD700]/60 font-bold tracking-widest uppercase mb-3">AI 预测比分</div>
      <div className="text-3xl sm:text-4xl font-black text-[#FFD700] mb-4 tracking-wide">{prediction.score}</div>
      <div className="space-y-2 mt-6">
        <div className="text-xs text-white/40 font-bold tracking-wider">关键胜负手</div>
        {prediction.keyFactors.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-left">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30 flex items-center justify-center mt-0.5">
              <span className="text-[10px] font-black text-[#FFD700]">{i + 1}</span>
            </div>
            <span className="text-xs text-white/70 leading-relaxed">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== 单场比赛 Section =====
function MatchSection({ matchup, index }: { matchup: Matchup; index: number }) {
  const homeTeam = getTeam(matchup.homeTeamId);
  const awayTeam = getTeam(matchup.awayTeamId);

  return (
    <section className="mb-20">
      {/* 比赛标题 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 mb-4">
          <span className="text-xs font-bold text-[#FFD700] tracking-widest">
            半决赛 {index === 0 ? 'A' : 'B'}
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <FlagImg team={homeTeam} size="lg" />
            <span className="text-lg sm:text-xl font-black text-white">{homeTeam.nameZh}</span>
            <span className="text-xs text-white/30 font-mono">{matchup.homeFormation}</span>
          </div>
          <div className="text-2xl font-black text-[#FFD700]">VS</div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/30 font-mono">{matchup.awayFormation}</span>
            <span className="text-lg sm:text-xl font-black text-white">{awayTeam.nameZh}</span>
            <FlagImg team={awayTeam} size="lg" />
          </div>
        </div>
      </div>

      {/* A. 绿茵场阵容图 */}
      <div className="mb-12">
        <SectionTitle emoji="⚽" title="预测首发阵容" />
        <FootballField homeTeam={homeTeam} awayTeam={awayTeam} matchup={matchup} />
        {/* 图例 */}
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-white/80" style={{ backgroundColor: matchup.homeColor }} />
            <span className="text-xs text-white/50">{homeTeam.nameZh}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-white/80" style={{ backgroundColor: matchup.awayColor }} />
            <span className="text-xs text-white/50">{awayTeam.nameZh}</span>
          </div>
        </div>
      </div>

      {/* B. 关键对位分析 */}
      <div className="mb-12">
        <SectionTitle emoji="🔥" title="关键对位分析" />
        <KeyMatchups matchups={matchup.keyMatchups} homeTeam={homeTeam} awayTeam={awayTeam} />
      </div>

      {/* C. 数据对比 */}
      <div className="mb-12">
        <SectionTitle emoji="📊" title="数据对比" />
        <StatComparison stats={matchup.stats} homeTeam={homeTeam} awayTeam={awayTeam} />
      </div>

      {/* D. 战术要点 */}
      <div className="mb-12">
        <SectionTitle emoji="📋" title="战术要点" />
        <TacticsPanel
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          homeTactics={matchup.homeTactics}
          awayTactics={matchup.awayTactics}
        />
      </div>

      {/* E. 赛前预测 */}
      <div>
        <SectionTitle emoji="🎯" title="赛前预测" />
        <PredictionCard prediction={matchup.prediction} />
      </div>

      {/* 分隔线（非最后一个） */}
      {index < semiFinals.length - 1 && (
        <div className="mt-20 mb-20 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-white/20 text-sm">|</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}
    </section>
  );
}

// ===== 小节标题 =====
function SectionTitle({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="text-[#FFD700]">{emoji}</span>
      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{title}</h3>
    </div>
  );
}

// ===== 主页面组件 =====
export default function SemiFinalPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a0533] to-[#0a0a1a]">
      {/* Hero 区域 */}
      <div className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-24 pb-16 text-center">
          {/* 装饰线 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#FFD700]/50" />
            <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em]">2026 FIFA WORLD CUP</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#FFD700]/50" />
          </div>

          {/* 标题 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            半决赛前瞻
          </h1>

          {/* 副标题 */}
          <p className="text-base sm:text-lg text-white/50 font-medium tracking-widest">
            四强决战 · 谁将问鼎决赛
          </p>

          {/* 装饰线 */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-[#FFD700]/30" />
            <div className="w-2 h-2 rounded-full bg-[#FFD700]/50" />
            <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD700]/50" />
            <div className="w-2 h-2 rounded-full bg-[#FFD700]/30" />
          </div>
        </div>
      </div>

      {/* 比赛内容 */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {semiFinals.map((matchup, index) => (
          <MatchSection key={matchup.id} matchup={matchup} index={index} />
        ))}
      </div>

      {/* 底部 */}
      <div className="text-center pb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-[10px] text-white/20 tracking-widest">SEMI-FINAL PREVIEW</span>
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </div>
  );
}
