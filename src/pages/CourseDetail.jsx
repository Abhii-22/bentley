import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coursesData = {
    'openroads-designer': {
      title: 'OpenRoads Designer',
      category: 'Engineering Software',
      description: 'Civil infrastructure design software for roadways, offering 3D modeling, terrain modeling, drainage, and corridor modeling in a single platform.',
      duration: '40-50 Hours',
      level: 'Beginner',
      audience: 'Civil/Architectural (CIV/ARCH)',
      curriculum: [
        'User Interface & Project Setup',
        'Terrain Modeling & Survey Data',
        'Horizontal and Vertical Alignment Design',
        'Corridor Modeling and Templates',
        'Cross-Sections and Profile Views',
        'Earthwork Calculations',
        'Annotation and Sheet Production'
      ],
      whatYoullLearn: [
        'Survey data import and terrain modeling',
        'Cross-section and profile generation',
        'Alignment and corridor modeling',
        'Drainage and utility modeling'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Basic computer skills',
        'No prior CAD experience required'
      ]
    },
    'watergems': {
      title: 'OpenFlows WaterGEMS',
      category: 'Engineering Software',
      description: 'Water distribution modeling software that helps engineers plan, design, and optimize water systems with advanced hydraulic modeling capabilities.',
      duration: '30 Hours',
      level: 'Intermediate',
      audience: 'Water Engineers, Civil Engineers (CIV/ENV)',
      curriculum: [
        'Introduction to Hydraulic Modeling',
        'Network Building and Layout',
        'Junctions, Pipes, Pumps, and Tanks',
        'Demand Allocation and Scenarios',
        'Hydraulic Analysis (Steady and EPS)',
        'Fire Flow and Criticality Analysis',
        'Model Calibration and Optimization'
      ],
      whatYoullLearn: [
        'Creating water network models',
        'Extended period simulation',
        'Scenario comparison',
        'Demand analysis and pipe sizing',
        'Fire flow and pump analysis'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Civil engineering background',
        'Understanding of hydraulic principles'
      ]
    },
    'staad-pro': {
      title: 'STAAD Pro Advanced',
      category: 'Structural Analysis',
      description: 'Comprehensive structural analysis and design software for buildings, bridges, towers, and other structures with advanced modeling capabilities.',
      duration: '6 Months',
      level: 'Advanced',
      audience: 'Structural Engineers, Civil Engineers (CIV)',
      curriculum: [
        'Introduction to STAAD Pro',
        'Model Creation and Geometry',
        'Load Definition and Analysis',
        'Steel Design and Optimization',
        'Concrete Design',
        'Foundation Design',
        'Advanced Analysis Techniques'
      ],
      whatYoullLearn: [
        'Structural modeling and analysis',
        'Steel and concrete design',
        'Load combinations and analysis',
        'Foundation design principles'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Structural engineering background',
        'Basic understanding of structural analysis'
      ]
    },
    'microstation': {
      title: 'MicroStation for Professionals',
      category: 'CAD Software',
      description: 'Professional CAD software for 2D and 3D design, drafting, and modeling with advanced visualization and documentation capabilities.',
      duration: '4 Months',
      level: 'Intermediate',
      audience: 'CAD Professionals, Engineers (ALL)',
      curriculum: [
        'MicroStation Interface and Navigation',
        '2D Drafting and Drawing Tools',
        '3D Modeling Fundamentals',
        'Advanced 3D Techniques',
        'Visualization and Rendering',
        'Documentation and Annotation',
        'Collaboration and File Management'
      ],
      whatYoullLearn: [
        'Professional CAD drafting',
        '3D modeling and visualization',
        'Technical documentation',
        'Project collaboration'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Basic computer skills',
        'Understanding of technical drawings'
      ]
    },
    'sewergems': {
      title: 'OpenFlows SewerGEMS',
      category: 'Hydraulic Modeling',
      description: 'Comprehensive sewer system modeling software for planning, design, and analysis of wastewater collection systems.',
      duration: '7 Months',
      level: 'Intermediate',
      audience: 'Environmental Engineers, Civil Engineers (CIV/ENV)',
      curriculum: [
        'Introduction to Sewer System Modeling',
        'Network Building and Layout',
        'Flow Estimation and Allocation',
        'Hydraulic Analysis and Design',
        'Pump Station Design',
        'System Optimization',
        'Model Calibration and Validation'
      ],
      whatYoullLearn: [
        'Sewer system modeling',
        'Hydraulic analysis techniques',
        'Pump station design',
        'System optimization methods'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Environmental engineering background',
        'Understanding of hydraulic principles'
      ]
    }
  };

  const course = coursesData[courseId] || coursesData['watergems'];

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">
                <button onClick={() => navigate(-1)} className="back-link">&larr; Back to Courses</button>
        <div className="course-detail-content">
          <main className="course-main-content">
            <span className="course-category">{course.category}</span>
            <h1>{course.title}</h1>
            <p className="course-description">{course.description}</p>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">⏱️</div>
                <span>Duration</span>
                <strong>{course.duration}</strong>
              </div>
              <div className="info-card">
                <div className="info-icon">🎓</div>
                <span>Level</span>
                <strong>{course.level}</strong>
              </div>
              <div className="info-card">
                <div className="info-icon">👥</div>
                <span>Audience</span>
                <strong>{course.audience}</strong>
              </div>
            </div>
            <div className="curriculum">
              <h2>Curriculum</h2>
              <ul>
                {course.curriculum.map((item, index) => (
                  <li key={index}><span>{index + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="learning-outcomes">
              <h2>What You'll Learn</h2>
              <div className="outcomes-grid">
                <ul>
                  {course.whatYoullLearn.slice(0, 2).map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
                <ul>
                  {course.whatYoullLearn.slice(2, 4).map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
          <aside className="course-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-header">
                <div className="provider-icon">🏢</div>
                <h3>Course Information</h3>
              </div>
              <div className="provider-info">
                <span className="provider-label">Provider</span>
                <span className="provider-name">{course.provider}</span>
              </div>
              <div className="prerequisites-section">
                <h4>📋 Prerequisites</h4>
                <ul>
                  {course.prerequisites.map((item, index) => (
                    <li key={index}>
                      <span className="prereq-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="enroll-now-btn">
                <span className="btn-icon">🚀</span>
                Enroll Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
