import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Events from './pages/Events';
import Housing from './pages/Housing';
import Transport from './pages/Transport';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/events" element={<Events />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        {/* We can add more routes here as we migrate more pages */}
      </Routes>
    </Router>
  );
}

export default App;
