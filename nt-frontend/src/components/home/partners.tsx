import React from 'react';
import '../../styles/home/partners.css';

interface Partner {
    imageSrc: string;
    name: string;
    description: string;
  }
  
  const partnersData: Partner[] = [
    {
      imageSrc: '/path/to/iro-logo.png', // Replace with actual path or URL
      name: 'International Research Olympiad (IRO)',
      description:
        'In conjunction with the IRO, Project NexTech helps promote STEM, science fair, and research to allow students to dive deep into their STEM passions. Through our Research department, we expand access for interested and talented students in our regions to participate in science fairs with guidance from Project NexTech volunteers. All Project NexTech clubs at schools are also International Research Olympiad-affiliated.',
    },
    {
      imageSrc: '/path/to/gsdsef-logo.png', // Replace with actual path or URL
      name: 'Greater San Diego Science and Engineering Fair (GSDSEF)',
      description:
        'In conjunction with the GSDSEF, Project NexTech helps promote research and science fairs to allow students to gain recognition and assistance while pursuing their passions. We host sessions for students to be introduced to science fairs and get guidance on their projects. After these sessions, students participate in GSDSEF’s programs to inspire San Diego middle school students into STEM and engineering work.',
    },
  ];
  
  const Partners: React.FC = () => {
    return (
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-grid">
          {partnersData.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.imageSrc} alt={partner.name} className="partner-logo" />
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Partners;