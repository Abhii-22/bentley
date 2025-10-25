import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const courseData = [
  {
    title: 'STAAD Pro Advanced',
    courseId: 'staad-pro',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '499',
    duration: '6 Months',
    students: '1,200+',
    successRate: '96%',
    rating: 4.9,
    tags: ['Structural Analysis', 'Steel Design', 'Concrete Design', 'Seismic'],
  },
  {
    title: 'OpenRoads Designer Complete',
    courseId: 'openroads-designer',
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '599',
    duration: '8 Months',
    students: '950+',
    successRate: '94%',
    rating: 4.8,
    tags: ['Civil Design', '3D Modeling', 'Corridor Modeling', 'Site Design'],
  },
  {
    title: 'MicroStation for Professionals',
    courseId: 'microstation',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '399',
    duration: '4 Months',
    students: '2,500+',
    successRate: '97%',
    rating: 4.7,
    tags: ['CAD', '2D Drafting', '3D Modeling', 'Visualization'],
  },
  {
    title: 'OpenFlows SewerGEMS',
    courseId: 'sewergems',
    image: 'https://images.pexels.com/photos/4392033/pexels-photo-4392033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '649',
    duration: '7 Months',
    students: '800+',
    successRate: '95%',
    rating: 4.9,
    tags: ['Hydraulics', 'Sewer Systems', 'Modeling'],
  },
  {
    title: 'OpenFlows WaterGEMS',
    courseId: 'watergems',
    image: 'https://images.pexels.com/photos/4392033/pexels-photo-4392033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '649',
    duration: '7 Months',
    students: '800+',
    successRate: '95%',
    rating: 4.9,
    tags: ['Hydraulics', 'Water Distribution', 'Modeling'],
  },
];

const Courses = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <h2 className="courses-heading">Our Popular Courses</h2>
        <p className="courses-subheading">
          Explore our most sought-after training programs designed for infrastructure professionals.
        </p>
      </div>

      <div className="courses-container">
        <button className="arrow-btn overlay left" onClick={scrollLeft}>⟵</button>

        <div className="courses-grid" ref={scrollRef}>
          {courseData.map((course, index) => (
            <div className="course-card" key={index}>
              <div
                className="card-image-container"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="price-badge">${course.price}</div>
              </div>
              <div className="card-content">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-meta">
                  <span>🕒 {course.duration}</span>
                  <span>👥 {course.students}</span>
                  <span>✅ {course.successRate}</span>
                </div>
                <div className="course-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating-text">{course.rating}</span>
                </div>
                <div className="course-tags">
                  {course.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <Link to={`/course/${course.courseId}`} className="enroll-button">
                  Enroll Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-btn overlay right" onClick={scrollRight}>⟶</button>
      </div>
    </section>
  );
};


export default Courses;
