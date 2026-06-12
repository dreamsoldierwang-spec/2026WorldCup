import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import Schedule from './pages/Schedule';
import Stars from './pages/Stars';
import Records from './pages/Records';
import HostCities from './pages/HostCities';
import FanZone from './pages/FanZone';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:groupId" element={<GroupDetail />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<TeamDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/records" element={<Records />} />
            <Route path="/host-cities" element={<HostCities />} />
            <Route path="/fan-zone" element={<FanZone />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
