// ============ 2026 FIFA World Cup Type Definitions ============

export type GroupId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

export type Confederation = 'UEFA' | 'CONMEBOL' | 'CONCACAF' | 'CAF' | 'AFC' | 'OFC';

export type MatchStage = 'group' | 'round32' | 'round16' | 'quarter' | 'semi' | 'third' | 'final';

export type MatchStatus = 'scheduled' | 'live' | 'finished';

export type HostCountry = 'USA' | 'Canada' | 'Mexico';

export interface Team {
  id: string;
  name: string;
  nameZh: string;
  flag: string;            // Unicode emoji flag (fallback)
  countryCode: string;     // ISO 3166-1 alpha-2 country code for SVG flag
  confederation: Confederation;
  fifaRank: number;
  headCoach: string;
  starPlayers: string[];
  lastThreeWc: {
    year: number;
    result: string;
  }[];
  group: GroupId;
  isHost: boolean;
  isFirstWc: boolean;
}

export interface Group {
  id: GroupId;
  teams: string[];  // team ids
}

export interface Match {
  id: string;
  stage: MatchStage;
  date: string;          // "6月12日"
  time: string;          // "03:00"
  timeBeijing: string;   // "03:00 (北京时间)"
  group?: GroupId;
  homeTeamId: string;
  awayTeamId: string;
  stadium: string;
  city: string;
  cityZh: string;
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
  round?: string;        // knockout round label
  matchNumber?: number;  // knockout match number
}

export interface Player {
  id: string;
  name: string;
  nameZh: string;
  nationality: string;
  nationalityZh: string;
  teamId: string;
  age: number;
  position: string;
  positionZh: string;
  club: string;
  clubZh?: string;
  notable: string[];
  isTopStar: boolean;
  imageUrl?: string;
}

export interface Stadium {
  id: string;
  name: string;
  nameZh: string;
  fifaName: string;
  city: string;
  cityZh: string;
  state?: string;
  country: HostCountry;
  capacity: number;
  matches: number;
  keyMatches?: string[];
  openedYear?: number;
}

export interface StandingRow {
  position: number;
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
  qualified?: boolean;  // 是否已晋级淘汰赛
  qualifiedAs?: 'direct' | 'best3rd';  // 晋级方式：直接晋级（前两名）或最佳小组第三
}

export interface RecordEntry {
  rank: number;
  label: string;
  value: string;
  detail?: string;
}
