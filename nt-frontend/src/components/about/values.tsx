import React from 'react';
import '../../styles/about/values.css';

const Values: React.FC = () => {
    return (
      <section className="values-section">
        <h2 className="values-title">Values</h2>
        <div className="values-cards">
          
          <div className="values-card">
            <h3 className="values-card-title">Powered by Student Volunteers</h3>
            <p className="values-card-text">
              As a student-led organization, we let design curricula that best suit students' unique learning needs because we have real-time experience going through STEM education in the modern world. Our student leaders and student STEM curriculum contributors are up-to-date on what works for students in the classroom today.
            </p>
            <p className="values-card-text">
              We've also found that students learn better from other students than from adults, and that this keeps younger students engaged at higher rates (than traditional methods).
            </p>
          </div>
          
          <div className="values-card">
            <h3 className="values-card-title">Connecting the Dots</h3>
            <p className="values-card-text">
              Today, high school and college students have more experience than ever before. This ranges from volunteering to robotics, to mentorship and coaching, and more. Through Project H.A.R.T., students with these experiences have the opportunity to lend their skills toward strengthening the next generation's understanding of STEM topics in real projects.
            </p>
            <p className="values-card-text">
              The math just works out: Students from today can give younger students the experiences and the space where access to STEM subjects should be improved.
            </p>
          </div>
          
          <div className="values-card">
            <h3 className="values-card-title">Free For All</h3>
            <p className="values-card-text">
              Many nonprofit organizations sell products or charge money for STEM programs. One example is FIRST Robotics and Rec Foundation charging students and teams enormous amounts of money to participate in STEM robotics, but leadership and entrepreneurship in STEM should never be limited to students who can pay. 
            </p>
            <p className="values-card-text">
              That's why, with Project H.A.R.T., all students have a voice. All students have access to the same curriculum for free. We'll never charge money for a program that seeks to close the gap between students who need to lead and those who want to make a difference in STEM for future generations. 
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Values;
