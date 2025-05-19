import React from 'react';
import './Education.css';

export const Education = () => {
  return (
    <div className="education-section">
      <h1 className="education-heading">
        🎓 <span className="black-text">My</span> <span className="purple-text">Education</span>
      </h1>
      <p className="education-subheading">
        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
      </p>

      {/* B.Tech Card */}
      <div className="education-card">
        <img src="Nitj.jpg" alt="NIT Jalandhar" className="education-image" />
        <div className="education-content">
          <h2>Bachelor Of Technology In Computer Science</h2>
          <p>Dr B R Ambedkar National Institute of Technology, Jalandhar | Punjab</p>
          <p className="highlight">2020-2024 | 7 CGPA</p>
        </div>
      </div>

      {/* 12th Card */}
      <div className="education-card">
        <img src="122.jpg" alt="School" className="education-image" />
        <div className="education-content">
          <h2>12<sup>th</sup> Standard</h2>
          <p>Adarsh Gram Bal Vidhalay Loonwa Senior Secondary School| RBSE</p>
          <p className="highlight">72% | 2019-20</p>
        </div>
      </div>

      {/* 10th Card */}
      <div className="education-card">
        <img src="12.jpg" alt="School" className="education-image" />
        <div className="education-content">
          <h2>10<sup>th</sup> Standard</h2>
          <p>Jai Jwala Vidhya Mandir Senior Secondary Bhadwa SambharLake | RBSE</p>
          <p className="highlight">86.00% | 2017-18</p>
        </div>
      </div>
    </div>
  );
};
