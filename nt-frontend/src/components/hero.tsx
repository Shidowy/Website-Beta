import React from 'react';
import '../styles/home/hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Project NexTech</h1>
        <p className="hero-description">
          Providing Free & Effective STEM education for all.
        </p>
      </div>
    </section>
  );
}

export default Hero;
