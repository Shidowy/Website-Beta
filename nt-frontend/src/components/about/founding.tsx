import React from 'react';
import '../../styles/about/founding.css';

interface FoundingBoxProps {
    title: string;
    description: string;
  }
  
  const FoundingBox: React.FC<FoundingBoxProps> = ({ title, description }) => {
    return (
      <div className="founding-box">
        <h2 className="founding-title">{title}</h2>
        <p className="founding-description">{description}</p>
      </div>
    );
  };
  
  const Founding: React.FC = () => {
    return (
      <div className="founding">
        <FoundingBox
          title="Initial Conception"
          description="Media Sured was initially formed with the idea of solving key issues in the social media landscape..."
        />
        <FoundingBox
          title="First Lessons"
          description="Through early lessons in managing partnerships and learning how to navigate complex challenges, Media Sured..."
        />
      </div>
    );
  };
  
  export default Founding;