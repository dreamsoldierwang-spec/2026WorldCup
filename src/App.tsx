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
import Scorers from './pages/Scorers';
import News from './pages/News';
import Standings from './pages/Standings';
import Knockout from './pages/Knockout';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-transparent">
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
            <Route path="/fan-zone" element={<Home />} />
            <Route path="/scorers" element={<Scorers />} />
            <Route path="/news" element={<News />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/knockout" element={<Knockout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
