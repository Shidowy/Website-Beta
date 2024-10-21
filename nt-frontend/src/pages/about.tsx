import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AboutHero from '../components/about/abouthero';
import Mission from '../components/about/mission';
import Founding from '../components/about/founding';
import Structure from '../components/about/structure';
import Values from '../components/about/values';

const About: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <Mission/>
      <Values/>
      <Founding/>
      <Structure/>
      <Footer/>
    </div>
  );
};

export default About;