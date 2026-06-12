export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚽</span>
              <div>
                <h3 className="text-lg font-bold text-white">2026 世界杯</h3>
                <p className="text-sm text-gray-500">美国 · 加拿大 · 墨西哥</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              2026年国际足联世界杯是第23届世界杯足球赛，由美国、加拿大和墨西哥联合主办。
              共有48支球队参赛，比赛于2026年6月11日至7月19日举行。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">快速导航</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#/groups" className="hover:text-white transition-colors">分组情况</a>
              <a href="#/teams" className="hover:text-white transition-colors">参赛球队</a>
              <a href="#/schedule" className="hover:text-white transition-colors">赛程安排</a>
              <a href="#/stars" className="hover:text-white transition-colors">球星介绍</a>
              <a href="#/records" className="hover:text-white transition-colors">历史纪录</a>
              <a href="#/host-cities" className="hover:text-white transition-colors">主办城市</a>
              <a href="#/fan-zone" className="hover:text-white transition-colors">球迷专区</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">数据来源</h4>
            <ul className="text-sm space-y-1">
              <li>FIFA 官方数据</li>
              <li>ESPN / GOAL.com</li>
              <li>赛事时间：2026年6月11日 - 7月19日</li>
              <li>比赛总数：104场</li>
              <li>参赛球队：48支</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>2026 FIFA World Cup Fan Site | 本站为非官方球迷信息网站</p>
        </div>
      </div>
    </footer>
  );
}
