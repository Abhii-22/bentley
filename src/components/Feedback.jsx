import React from 'react';
import './Feedback.css';

const feedbacks = [
  { name: 'Rahul Sharma', text: 'Amazing learning experience! The training was practical and easy to understand.' },
  { name: 'Priya Verma', text: 'Loved the real-world examples and projects. Great for career growth!' },
  { name: 'Amit Singh', text: 'Professional trainers and very helpful team. Highly recommended!' },
  { name: 'Sneha Patel', text: 'Excellent platform to gain industry-level skills quickly.' },
  { name: 'Ravi Kumar', text: 'The placement support was very impressive and genuine.' },
  { name: 'Neha Gupta', text: 'The trainers explained everything clearly with patience and examples.' },
  { name: 'Vikram Joshi', text: 'The UI/UX and flow of the sessions were amazing. Great job!' },
  { name: 'Kavya Iyer', text: 'Hands-on projects helped me a lot in understanding complex concepts.' },
  { name: 'Saurabh Jain', text: 'It was a great experience. I improved my technical as well as soft skills.' },
  { name: 'Ananya Das', text: 'Wonderful mentors and learning environment. Highly satisfied!' }
];

const Feedback = () => {
  return (
    <section className="feedback-section">
      <h2>What Our Students Say</h2>
      <div className="feedback-slider">
        <div className="feedback-track">
          {[...feedbacks, ...feedbacks].map((f, index) => (
            <div className="feedback-card" key={index}>
              <p className="feedback-text">“{f.text}”</p>
              <h4 className="feedback-name">- {f.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <h3>🌟 1000+ Happy Learners</h3>
        <p>Building successful careers with real-world training and placements.</p>
      </div>
    </section>
  );
};

export default Feedback;
