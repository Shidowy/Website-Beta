import React from 'react';
import '../styles/hero.css'; 

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website!</h1>
        <p>Your journey to success starts here.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
