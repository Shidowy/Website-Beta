import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Hero from '../components/home/hero';
import Info from '../components/home/info';
import Partners from '../components/home/partners';
import LearnMore from '../components/home/learnmore';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info/>
      <Partners/>
      <LearnMore/>
      <Footer/>
    </div>
  );
};

export default Home;