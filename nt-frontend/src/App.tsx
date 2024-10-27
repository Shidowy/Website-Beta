import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import OurTeam from './pages/team';
import Courses from './pages/courses';
import Impact from './pages/impact';
import GetInvolved from './pages/get-involved';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchHelloWorld = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/hello/');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHelloWorld();
  }, []);

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
        <p>{message}</p>
      </main>
    </Router>
  );
};

export default App;
