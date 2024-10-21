import React from 'react';
import '../../styles/about/abouthero.css';

const AboutHero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-description">
          Learn about the history and iner workings of project NexTech
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
