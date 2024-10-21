import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import OurTeam from './pages/team';
import Courses from './pages/courses';
import Impact from './pages/impact';
import GetInvolved from './pages/get-involved';


const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;