import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default Home;