import React from 'react';
import '../styles/hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to Our STEM Education Hub</h1>
        <p className="hero-description">
          Empowering the next generation of technology enthusiasts and entrepreneurs through quality education.
        </p>
        <a href="/get-involved" className="hero-cta">Get Started</a>
      </div>
    </section>
  );
}

export default Hero;
