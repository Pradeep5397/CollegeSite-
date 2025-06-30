import React from 'react';
import './Admissions.css';

function Admissions() {
  return (
    <div className="admissions-container">
      <h1>Admissions 2024</h1>
      
      <div className="course-info">
        <h2>Available Courses</h2>
        
        <div className="course">
          <h3>Computer Science & Engineering</h3>
          <p>Total Seats: 120</p>
          <p>Available Seats: 22</p>
          <p>Course Duration: 4 Years</p>
          <p>Course Fee: ₹1,50,000 per year</p>
          <button>Apply Now</button>
        </div>

        <div className="course">
          <h3>Mechanical Engineering</h3>
          <p>Total Seats: 60</p>
          <p>Available Seats: 15</p>
          <p>Course Duration: 4 Years</p>
          <p>Course Fee: ₹1,25,000 per year</p>
          <button>Apply Now</button>
        </div>

        <div className="course">
          <h3>Electronics Engineering</h3>
          <p>Total Seats: 60</p>
          <p>Available Seats: 8</p>
          <p>Course Duration: 4 Years</p>
          <p>Course Fee: ₹1,35,000 per year</p>
          <button>Apply Now</button>
        </div>

        <div className="course">
          <h3>Civil Engineering</h3>
          <p>Total Seats: 60</p>
          <p>Available Seats: 22</p>
          <p>Course Duration: 4 Years</p>
          <p>Course Fee: ₹1,20,000 per year</p>
          <button>Apply Now</button>
        </div>
      </div>

      <div className="admission-steps">
        <h2>How to Apply</h2>
        <ol>
          <li>Fill out the application form</li>
          <li>Submit your documents</li>
          <li>Pay application fee</li>
          <li>Attend entrance test</li>
          <li>Complete admission process</li>
        </ol>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: admissions@engineeringcollege.edu</p>
        <p>Address: 123 College Road, Engineering City, State 12345</p>
      </div>
    </div>
  );
}

export default Admissions; 