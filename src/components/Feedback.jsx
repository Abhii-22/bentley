import React from 'react';
import './Feedback.css';

const feedbacks = [
  { name: 'Priya', text: 'The curriculum is perfectly aligned with industry needs. I felt job-ready right after completing my course.' },
  { name: 'Arjun', text: 'Bentley\'s hands-on approach made all the difference. The instructors are experts in their field.' },
  { name: 'Ananya', text: 'A fantastic platform for upskilling. The flexible schedule allowed me to learn at my own pace.' },
  { name: 'Rohan', text: 'I can\'t thank the placement team enough. They provided excellent support and helped me land a great job.' },
  { name: 'Deepika', text: 'The course content was comprehensive and up-to-date. I highly recommend Bentley to anyone serious about their career.' },
  { name: 'Aditya', text: 'From the quality of the teaching to the support staff, everything was top-notch. A truly five-star experience.' },
  { name: 'Isha', text: 'The practical projects were the best part. They helped solidify my understanding and build a strong portfolio.' },
  { name: 'Sameer', text: 'I was hesitant about online learning, but Bentley\'s interactive platform made it engaging and effective.' },
  { name: 'Meera', text: 'The mentors are incredibly knowledgeable and always ready to help. It\'s a very supportive community.' },
  { name: 'Karan', text: 'This was a game-changer for my career. The skills I learned here are directly applicable to my job.' }
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
