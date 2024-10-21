import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import Info from '../../components/info';
import Partners from '../../components/partners';
import LearnMore from '../../components/learnmore';

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