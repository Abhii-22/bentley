import React, { useState, useEffect } from 'react';
import './Home.css';

const slides = [
  {
    src: '/images/STAAD.jpg',
    text: {
      title: 'STAAD Pro',
      description:
        'Structural analysis and design software for buildings, bridges, and towers. Enables accurate modeling and design as per global codes.'
    }
  },
  {
    src: '/images/save.jpg',
    text: {
      title: 'OpenFlows SewerGEMS',
      description:
        'Advanced software for the design and analysis of sanitary and combined sewer systems with powerful hydraulic modeling tools.'
    }
  },
  {
    src: '/images/micro.jpg',
    text: {
      title: 'MicroStation',
      description:
        'Powerful CAD software for 2D and 3D design, drafting, and modeling in architecture, engineering, and construction.'
    }
  },
  {
    src: '/images/open.jpg',
    text: {
      title: 'OpenRoads Designer',
      description:
        'Civil infrastructure design software offering 3D modeling, terrain modeling, drainage, and corridor modeling in a unified platform.'
    }
  },
  {
    src: '/images/pipe.jpg',
    text: {
      title: 'OpenFlows WaterGEMS',
      description:
        'Water distribution modeling software that helps engineers design and optimize water systems with advanced hydraulic modeling.'
    }
  }
];

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animation, setAnimation] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fade-out');
      setTimeout(() => {
        setCurrentSlideIndex(prev => (prev + 1) % slides.length);
        setAnimation('fade-in');
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div id="home">
      <div
        className="home-slider"
        style={{ backgroundImage: `url(${currentSlide.src})` }}
      >
        <div className={`slider-text ${animation}`}>
          <h1>{currentSlide.text.title}</h1>
          <p>{currentSlide.text.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
