import React from 'react';
import '../styles/home/learnmore.css'

interface Card {
  title: string;
  description: string;
  colorClass: string;
}

const cardsData: Card[] = [
  {
    title: 'About Us',
    description: 'Learn about the inner workings and history behind Project NexTech',
    colorClass: 'red-border',
  },
  {
    title: 'Our Team',
    description: 'Meet our talented leadership team',
    colorClass: 'blue-border',
  },
  {
    title: 'Courses',
    description: 'Learn more about the courses offered at Project NexTech',
    colorClass: 'red-border',
  },
  {
    title: 'Impact',
    description: 'Learn about how we make an impact on the community',
    colorClass: 'blue-border',
  },
  {
    title: 'Get Involved',
    description: 'Want to become a student leader, volunteer, or program host?',
    colorClass: 'red-border',
  },
  {
    title: 'Contact Us',
    description: 'Have any questions, comments, or feedback?',
    colorClass: 'blue-border',
  },
];

const LearnMore: React.FC = () => {
  return (
    <div className="learn-more-container">
      <h2 className="learn-more-title">Learn More</h2>
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <div className={`card ${card.colorClass}`} key={index}>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
