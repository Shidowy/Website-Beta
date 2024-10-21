import React from 'react';
import '../../styles/home/info.css'; // Import CSS for styling

const Info: React.FC = () => {
  return (
    <div className="project-nextech-container">
      <h1 className="title">What is Project NexTech?</h1>
      <p className="description">
        Project NexTech, Inc. is a student-led 501(c)(3) nonprofit organization whose mission is to
        provide free, high-quality, and effective STEM education to the next generation of technology 
        enthusiasts and entrepreneurs of all backgrounds around the world. We host a diverse array of 
        STEM programs and take care of the whole process from outreach, securing locations to volunteer, 
        marketing, and more, all the way to creating our own custom curriculum curated to what skills 
        are actually important in the real world and teaching the programs to students.
      </p>
      <div className="stats-container">
        <div className="stat-box">
          <h2>40+</h2>
          <p>Volunteers</p>
        </div>
        <div className="stat-box">
          <h2>300+</h2>
          <p>Students Reached</p>
        </div>
        <div className="stat-box">
          <h2>14+</h2>
          <p>Branches</p>
        </div>
      </div>
    </div>
  );
};

export default Info;