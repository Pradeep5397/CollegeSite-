import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const courseDetails = {
    'Computer Science & Engineering': {
      duration: '4 Years',
      degree: 'B.Tech',
      intake: '120 seats',
      description: `Our Computer Science & Engineering program offers a comprehensive curriculum that covers:
      • Advanced Programming Languages (Java, Python, C++)
      • Data Structures and Algorithms
      • Artificial Intelligence and Machine Learning
      • Cloud Computing and Big Data
      • Web and Mobile Development
      • Cybersecurity
      
      Career Opportunities:
      • Software Developer
      • Data Scientist
      • AI/ML Engineer
      • Cloud Architect
      • Security Analyst
      
      The program includes hands-on projects, internships, and industry collaborations with leading tech companies.`,
    },
    'Mechanical Engineering': {
      duration: '4 Years',
      degree: 'B.Tech',
      intake: '60 seats',
      description: `Our Mechanical Engineering program focuses on:
      • CAD/CAM Technologies
      • Thermodynamics and Heat Transfer
      • Manufacturing Processes
      • Robotics and Automation
      • Industrial Design
      • Automotive Engineering
      
      Career Opportunities:
      • Design Engineer
      • Production Manager
      • Robotics Engineer
      • R&D Specialist
      • Project Manager
      
      Students get practical experience through our state-of-the-art workshops and industry partnerships.`,
    },
    'Electronics Engineering': {
      duration: '4 Years',
      degree: 'B.Tech',
      intake: '60 seats',
      description: `Our Electronics Engineering program covers:
      • Digital Electronics
      • VLSI Design
      • Embedded Systems
      • Communication Systems
      • Signal Processing
      • IoT and Sensor Networks
      
      Career Opportunities:
      • Electronics Design Engineer
      • VLSI Designer
      • Embedded Systems Engineer
      • IoT Specialist
      • Communications Engineer
      
      The program includes extensive lab work and industry projects with leading electronics companies.`,
    },
    'Civil Engineering': {
      duration: '4 Years',
      degree: 'B.Tech',
      intake: '60 seats',
      description: `Our Civil Engineering program encompasses:
      • Structural Engineering
      • Environmental Engineering
      • Transportation Systems
      • Geotechnical Engineering
      • Construction Management
      • Smart Cities Planning
      
      Career Opportunities:
      • Structural Engineer
      • Construction Manager
      • Environmental Consultant
      • Urban Planner
      • Project Engineer
      
      Students participate in real-world projects and get exposure to modern surveying and design tools.`,
    },
  };

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    // Show success message
    setShowSuccess(true);
    // Clear form
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    programsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const openCourseModal = (courseName) => {
    setSelectedCourse(courseName);
  };

  const closeCourseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Engineering Excellence</h1>
          <p>Shaping Tomorrow's Leaders in Technology and Innovation</p>
          <button className="explore-btn" onClick={scrollToPrograms}>Explore Programs</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <h2>30+</h2>
          <p>Years of Excellence</p>
        </div>
        <div className="stat-item">
          <h2>25,000+</h2>
          <p>Alumni Worldwide</p>
        </div>
        <div className="stat-item">
          <h2>100%</h2>
          <p>Placement Rate</p>
        </div>
        <div className="stat-item">
          <h2>50+</h2>
          <p>Industry Partners</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>Welcome to one of India's premier engineering institutions, where innovation meets excellence. 
           Our state-of-the-art campus, distinguished faculty, and industry-aligned curriculum create 
           the perfect environment for nurturing future technology leaders.</p>
        
        <div className="about-cards">
          <div className="about-card">
            <h3>Vision</h3>
            <p>To be a globally recognized institution in engineering education, research, and innovation.</p>
          </div>
          <div className="about-card">
            <h3>Mission</h3>
            <p>To empower students with cutting-edge technical knowledge and leadership skills.</p>
          </div>
        </div>

        <ul className="achievements">
          <li>NAAC 'A++' Accredited Institution</li>
          <li>NBA Accredited Programs</li>
          <li>UGC Recognized Center of Excellence</li>
          <li>AICTE Approved Curriculum</li>
        </ul>
      </div>

      {/* Programs Section */}
      <div id="programs" className="programs-section">
        <h2>Our Programs</h2>
        <div className="program-list">
          {Object.keys(courseDetails).map((courseName) => (
            <div 
              key={courseName} 
              className="program-item" 
              onClick={() => openCourseModal(courseName)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{courseName}</h3>
              <p>{courseDetails[courseName].description.split('\n')[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={closeCourseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCourseModal}>×</button>
            <h2>{selectedCourse}</h2>
            <div className="course-info">
              <p><strong>Duration:</strong> {courseDetails[selectedCourse].duration}</p>
              <p><strong>Degree:</strong> {courseDetails[selectedCourse].degree}</p>
              <p><strong>Annual Intake:</strong> {courseDetails[selectedCourse].intake}</p>
            </div>
            <div className="course-description">
              {courseDetails[selectedCourse].description.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose Us</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>State-of-the-art Facilities</h3>
            <p>Modern laboratories equipped with the latest technology and research equipment</p>
          </div>
          <div className="feature-item">
            <h3>Expert Faculty</h3>
            <p>Highly qualified professors with industry and research experience</p>
          </div>
          <div className="feature-item">
            <h3>Industry Connections</h3>
            <p>Strong partnerships with leading technology companies</p>
          </div>
          <div className="feature-item">
            <h3>Global Exposure</h3>
            <p>International collaborations and exchange programs</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>📍 123 College Road, Engineering City, State 12345</p>
            <p>📞 +1 (123) 456-7890</p>
            <p>✉️ admissions@engineeringcollege.edu</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleFormChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
            {showSuccess && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#calendar">Academic Calendar</a></li>
              <li><a href="#research">Research Centers</a></li>
              <li><a href="#campus">Campus Life</a></li>
              <li><a href="#placements">Placements</a></li>
              <li><a href="#alumni">Alumni</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Engineering College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;