#!/usr/bin/env python3
"""Rebuild schedule.ts from official FIFA 2026 World Cup match schedule."""

# Match data: (date, time_bj, group, home_id, away_id, stadium, city_zh, status, home_score, away_score)
# status: 'finished', 'scheduled'
# home_score/away_score: None for 'scheduled', int for 'finished'

GROUP_MATCHES = [
    # ============ Round 1 ============
    # June 11
    ('6月11日', '03:00', 'A', 'mex', 'rsa', 'Mexico City Stadium', '墨西哥城', 'finished', 2, 0),
    ('6月11日', '09:00', 'A', 'kor', 'cze', 'Estadio Akron', '萨波潘', 'finished', 2, 1),
    # June 12
    ('6月12日', '03:00', 'B', 'can', 'bih', 'BMO Field', '多伦多', 'finished', 1, 1),
    ('6月12日', '09:00', 'D', 'usa', 'par', 'SoFi Stadium', '洛杉矶', 'finished', 4, 1),
    # June 13
    ('6月13日', '03:00', 'C', 'hai', 'sco', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('6月13日', '06:00', 'D', 'aus', 'tur', 'BC Place', '温哥华', 'scheduled', None, None),
    ('6月13日', '09:00', 'C', 'bra', 'mar', 'MetLife Stadium', '纽约/新泽西', 'finished', 1, 1),
    ('6月13日', '12:00', 'B', 'qat', 'sui', "Levi's Stadium", '旧金山湾区', 'finished', 1, 1),
    # June 14
    ('6月14日', '03:00', 'E', 'civ', 'ecu', 'Lincoln Financial Field', '费城', 'scheduled', None, None),
    ('6月14日', '06:00', 'E', 'ger', 'cuw', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('6月14日', '09:00', 'F', 'ned', 'jpn', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('6月14日', '12:00', 'F', 'swe', 'tun', 'Estadio BBVA', '蒙特雷', 'scheduled', None, None),
    # June 15
    ('6月15日', '03:00', 'H', 'ksa', 'uru', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),
    ('6月15日', '06:00', 'H', 'esp', 'cpv', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
    ('6月15日', '09:00', 'G', 'irn', 'nzl', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('6月15日', '12:00', 'G', 'bel', 'egy', 'Lumen Field', '西雅图', 'scheduled', None, None),
    # June 16
    ('6月16日', '03:00', 'I', 'fra', 'sen', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
    ('6月16日', '06:00', 'I', 'irq', 'nor', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('6月16日', '09:00', 'J', 'arg', 'alg', 'Arrowhead Stadium', '堪萨斯城', 'scheduled', None, None),
    ('6月16日', '12:00', 'J', 'aut', 'jor', "Levi's Stadium", '旧金山湾区', 'scheduled', None, None),
    # June 17
    ('6月17日', '03:00', 'L', 'gha', 'pan', 'BMO Field', '多伦多', 'scheduled', None, None),
    ('6月17日', '06:00', 'L', 'eng', 'cro', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('6月17日', '09:00', 'K', 'por', 'cod', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('6月17日', '12:00', 'K', 'uzb', 'col', 'Mexico City Stadium', '墨西哥城', 'scheduled', None, None),

    # ============ Round 2 ============
    # June 18
    ('6月18日', '03:00', 'A', 'cze', 'rsa', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
    ('6月18日', '06:00', 'B', 'sui', 'bih', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('6月18日', '09:00', 'B', 'can', 'qat', 'BC Place', '温哥华', 'scheduled', None, None),
    ('6月18日', '12:00', 'A', 'mex', 'kor', 'Estadio Akron', '萨波潘', 'scheduled', None, None),
    # June 19
    ('6月19日', '03:00', 'C', 'bra', 'hai', 'Lincoln Financial Field', '费城', 'scheduled', None, None),
    ('6月19日', '06:00', 'C', 'sco', 'mar', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('6月19日', '09:00', 'D', 'tur', 'par', "Levi's Stadium", '旧金山湾区', 'scheduled', None, None),
    ('6月19日', '12:00', 'D', 'usa', 'aus', 'Lumen Field', '西雅图', 'scheduled', None, None),
    # June 20
    ('6月20日', '03:00', 'E', 'ger', 'civ', 'BMO Field', '多伦多', 'scheduled', None, None),
    ('6月20日', '06:00', 'E', 'ecu', 'cuw', 'Arrowhead Stadium', '堪萨斯城', 'scheduled', None, None),
    ('6月20日', '09:00', 'F', 'ned', 'swe', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('6月20日', '12:00', 'F', 'tun', 'jpn', 'Estadio BBVA', '蒙特雷', 'scheduled', None, None),
    # June 21
    ('6月21日', '03:00', 'H', 'uru', 'cpv', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),
    ('6月21日', '06:00', 'H', 'esp', 'ksa', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
    ('6月21日', '09:00', 'G', 'bel', 'irn', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('6月21日', '12:00', 'G', 'nzl', 'egy', 'BC Place', '温哥华', 'scheduled', None, None),
    # June 22
    ('6月22日', '03:00', 'I', 'nor', 'sen', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
    ('6月22日', '06:00', 'I', 'fra', 'irq', 'Lincoln Financial Field', '费城', 'scheduled', None, None),
    ('6月22日', '09:00', 'J', 'arg', 'aut', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('6月22日', '12:00', 'J', 'jor', 'alg', "Levi's Stadium", '旧金山湾区', 'scheduled', None, None),
    # June 23
    ('6月23日', '03:00', 'L', 'eng', 'gha', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('6月23日', '06:00', 'L', 'pan', 'cro', 'BMO Field', '多伦多', 'scheduled', None, None),
    ('6月23日', '09:00', 'K', 'por', 'uzb', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('6月23日', '12:00', 'K', 'col', 'cod', 'Estadio Akron', '萨波潘', 'scheduled', None, None),

    # ============ Round 3 ============
    # June 24
    ('6月24日', '03:00', 'C', 'sco', 'bra', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),
    ('6月24日', '03:00', 'C', 'mar', 'hai', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
    ('6月24日', '09:00', 'B', 'sui', 'can', 'BC Place', '温哥华', 'scheduled', None, None),
    ('6月24日', '09:00', 'B', 'bih', 'qat', 'Lumen Field', '西雅图', 'scheduled', None, None),
    ('6月24日', '12:00', 'A', 'cze', 'mex', 'Mexico City Stadium', '墨西哥城', 'scheduled', None, None),
    ('6月24日', '12:00', 'A', 'rsa', 'kor', 'Estadio BBVA', '蒙特雷', 'scheduled', None, None),
    # June 25
    ('6月25日', '03:00', 'E', 'cuw', 'civ', 'Lincoln Financial Field', '费城', 'scheduled', None, None),
    ('6月25日', '03:00', 'E', 'ecu', 'ger', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
    ('6月25日', '09:00', 'F', 'jpn', 'swe', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('6月25日', '09:00', 'F', 'tun', 'ned', 'Arrowhead Stadium', '堪萨斯城', 'scheduled', None, None),
    ('6月25日', '12:00', 'D', 'tur', 'usa', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('6月25日', '12:00', 'D', 'par', 'aus', "Levi's Stadium", '旧金山湾区', 'scheduled', None, None),
    # June 26
    ('6月26日', '03:00', 'I', 'nor', 'fra', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('6月26日', '03:00', 'I', 'sen', 'irq', 'BMO Field', '多伦多', 'scheduled', None, None),
    ('6月26日', '09:00', 'G', 'egy', 'irn', 'Lumen Field', '西雅图', 'scheduled', None, None),
    ('6月26日', '09:00', 'G', 'nzl', 'bel', 'BC Place', '温哥华', 'scheduled', None, None),
    ('6月26日', '12:00', 'H', 'cpv', 'ksa', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('6月26日', '12:00', 'H', 'uru', 'esp', 'Estadio Akron', '萨波潘', 'scheduled', None, None),
    # June 27
    ('6月27日', '03:00', 'L', 'pan', 'eng', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
    ('6月27日', '03:00', 'L', 'cro', 'gha', 'Lincoln Financial Field', '费城', 'scheduled', None, None),
    ('6月27日', '09:00', 'J', 'alg', 'aut', 'Arrowhead Stadium', '堪萨斯城', 'scheduled', None, None),
    ('6月27日', '09:00', 'J', 'jor', 'arg', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('6月27日', '12:00', 'K', 'col', 'por', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),
    ('6月27日', '12:00', 'K', 'cod', 'uzb', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
]

# Knockout stages
KO_MATCHES = [
    # Round of 32 (6/28-7/3)
    ('6月28日', '09:00', None, '', '', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('6月28日', '12:00', None, '', '', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('6月29日', '03:00', None, '', '', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('6月29日', '06:00', None, '', '', 'Estadio BBVA', '蒙特雷', 'scheduled', None, None),
    ('6月29日', '09:00', None, '', '', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('6月30日', '03:00', None, '', '', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
    ('6月30日', '06:00', None, '', '', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('6月30日', '09:00', None, '', '', 'Mexico City Stadium', '墨西哥城', 'scheduled', None, None),
    ('7月1日', '03:00', None, '', '', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
    ('7月1日', '06:00', None, '', '', "Levi's Stadium", '旧金山湾区', 'scheduled', None, None),
    ('7月1日', '09:00', None, '', '', 'Lumen Field', '西雅图', 'scheduled', None, None),
    ('7月2日', '03:00', None, '', '', 'BMO Field', '多伦多', 'scheduled', None, None),
    ('7月2日', '06:00', None, '', '', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('7月2日', '09:00', None, '', '', 'BC Place', '温哥华', 'scheduled', None, None),
    ('7月3日', '03:00', None, '', '', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),
    ('7月3日', '06:00', None, '', '', 'Arrowhead Stadium', '堪萨斯城', 'scheduled', None, None),

    # Round of 16 (7/4-7/7)
    ('7月4日', '09:00', None, '', '', 'Lincoln Financial Field', '费城', 'scheduled', None, None),
    ('7月5日', '03:00', None, '', '', 'NRG Stadium', '休斯顿', 'scheduled', None, None),
    ('7月5日', '09:00', None, '', '', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
    ('7月6日', '03:00', None, '', '', 'Mexico City Stadium', '墨西哥城', 'scheduled', None, None),
    ('7月6日', '09:00', None, '', '', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('7月7日', '03:00', None, '', '', 'Lumen Field', '西雅图', 'scheduled', None, None),
    ('7月7日', '09:00', None, '', '', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),
    ('7月8日', '09:00', None, '', '', 'BC Place', '温哥华', 'scheduled', None, None),

    # Quarter-finals (7/9-7/11)
    ('7月9日', '03:00', None, '', '', 'Gillette Stadium', '波士顿', 'scheduled', None, None),
    ('7月10日', '03:00', None, '', '', 'SoFi Stadium', '洛杉矶', 'scheduled', None, None),
    ('7月11日', '03:00', None, '', '', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),
    ('7月11日', '09:00', None, '', '', 'Arrowhead Stadium', '堪萨斯城', 'scheduled', None, None),

    # Semi-finals (7/14-7/15)
    ('7月14日', '09:00', None, '', '', 'AT&T Stadium', '达拉斯', 'scheduled', None, None),
    ('7月15日', '09:00', None, '', '', 'Mercedes-Benz Stadium', '亚特兰大', 'scheduled', None, None),

    # Third place (7/18)
    ('7月18日', '09:00', None, '', '', 'Hard Rock Stadium', '迈阿密', 'scheduled', None, None),

    # Final (7/19)
    ('7月19日', '03:00', None, '', '', 'MetLife Stadium', '纽约/新泽西', 'scheduled', None, None),
]

KO_STAGES = [
    'round32','round32','round32','round32','round32','round32','round32','round32',
    'round32','round32','round32','round32','round32','round32','round32','round32',
    'round16','round16','round16','round16','round16','round16','round16','round16',
    'quarter','quarter','quarter','quarter',
    'semi','semi',
    'third',
    'final',
]

KO_ROUNDS = [
    'A组第2 vs B组第2','E组第1 vs 最佳小组第三','F组第1 vs C组第2','C组第1 vs F组第2',
    'I组第1 vs 最佳小组第三','E组第2 vs I组第2','A组第1 vs 最佳小组第三','L组第1 vs 最佳小组第三',
    'D组第1 vs 最佳小组第三','G组第1 vs 最佳小组第三','K组第2 vs L组第2','H组第1 vs J组第2',
    'B组第1 vs 最佳小组第三','J组第1 vs H组第2','K组第1 vs 最佳小组第三','D组第2 vs G组第2',
    'W74 vs W77','W73 vs W75','W76 vs W78','W79 vs W80',
    'W83 vs W84','W81 vs W82','W86 vs W88','W85 vs W87',
    'W89 vs W90','W93 vs W94','W91 vs W92','W95 vs W96',
    'W97 vs W98','W99 vs W100',
    'L101 vs L102',
    'W101 vs W102',
]

# Generate TypeScript
HEADER = """// 2026 FIFA World Cup Official Match Schedule
// Source: FIFA official match schedule (fifawc-2026.com)
// Updated: 2026-06-14

import type { Match } from '../types';

export const schedule: Match[] = [
"""

def gen_match(idx, date, time, group, home, away, stadium, city, status, hscore, ascore, stage='group', round_name=None):
    group_line = f"    group: '{group}'," if group else "    group: undefined,"
    score_lines = ""
    if status == 'finished' and hscore is not None:
        score_lines = f"\n    homeScore: {hscore},\n    awayScore: {ascore},"
    round_line = f"\n    round: '{round_name}'," if round_name else ""
    match_num_line = f"\n    matchNumber: {idx}," if stage != 'group' else ""

    return f"""  {{
    id: 'm{idx:03d}',
    stage: '{stage}',{match_num_line}
    date: '{date}',
    time: '{time}',
    timeBeijing: '{time} (北京时间)',
{group_line}
    homeTeamId: '{home}',
    awayTeamId: '{away}',{score_lines}
    stadium: '{stadium}',
    city: '{city}',
    cityZh: '{city}',
    status: '{status}' as const,{round_line}
  }},"""

matches = []
idx = 1

# Group stage
for m in GROUP_MATCHES:
    date, time, group, home, away, stadium, city, status, hs, as_ = m
    matches.append(gen_match(idx, date, time, group, home, away, stadium, city, status, hs, as_))
    idx += 1

# Knockout
for i, m in enumerate(KO_MATCHES):
    date, time, _, home, away, stadium, city, status, hs, as_ = m
    stage = KO_STAGES[i]
    round_name = KO_ROUNDS[i]
    matches.append(gen_match(idx, date, time, None, home, away, stadium, city, status, hs, as_, stage, round_name))
    idx += 1

FOOTER = "];\n"

content = HEADER + "\n".join(matches) + "\n" + FOOTER

with open("src/data/schedule.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"✅ Generated {idx-1} matches: {len(GROUP_MATCHES)} group + {len(KO_MATCHES)} knockout")
