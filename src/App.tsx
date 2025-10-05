import React, { useState } from 'react';
import './App.css';

function App() {
  const [section, setSection] = useState('home');

  const education = [
    { degree: "B.Tech. in Computer Science", institution: "APJ Abdul Kalam Technological University", year: "2024" },
    { degree: "M.Sc. in Software Engineering", institution: "University of Limerick", year: "2025" }
  ];

  const skills = ["JavaScript", "React", "Node.js", "CSS", "Git", "REST APIs"];

  const pictures = [
    "https://via.placeholder.com/200x150",
    "https://via.placeholder.com/200x150",
    "https://via.placeholder.com/200x150"
  ];


  


  const videos = [
    "https://www.youtube.com/embed/by1iBAC9mnE",
    "https://www.youtube.com/embed/veto8JH4H-Y"
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="profile">
            <img src="abhaydev.jpg" alt="Abhaydev" className="profile-pic" />
        <span className="profile-name">Abhaydev</span>
        </div>


        <ul>
          <li className={section === 'home' ? 'active' : ''} onClick={() => setSection('home')}>Home</li>
          <li className={section === 'about' ? 'active' : ''} onClick={() => setSection('about')}>About</li>
          <li className={section === 'education' ? 'active' : ''} onClick={() => setSection('education')}>Education</li>
          <li className={section === 'professional' ? 'active' : ''} onClick={() => setSection('professional')}>Professional Knowledge</li>
          <li className={section === 'pictures' ? 'active' : ''} onClick={() => setSection('pictures')}>Projects</li>
          <li className={section === 'videos' ? 'active' : ''} onClick={() => setSection('videos')}>Video Gallery</li>
          <li className={section === 'contact' ? 'active' : ''} onClick={() => setSection('contact')}>Contact</li>
        </ul>
      </nav>

      {/* Home */}
{section === 'home' && (
  <header className="hero">
    <div className="home-box">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Exploring creativity, one project at a time. <br />
        I’m <strong>Abhaydev</strong>, passionate about turning ideas into impactful designs and meaningful experiences.
      </p>
      <button className="explore-link" onClick={() => setSection('pictures')}>
        Explore My Work →
      </button>
    </div>
  </header>
)}

{section === 'pictures' && (
  <section className="section">
    <div className="cards">
      <div className="card">
        
        <h3>TOGO PET APP</h3>
       <p> Togo Pet App A team-based project built using Flutter (frontend) and Spring Boot (backend), designed to help pet owners manage their pets well-being. Key features include health tracking, reminders, a vet directory, and online doctor consultations, providing a comprehensive platform for pet healthcare management..</p>
      </div>
      <div className="card">

        <h3>IIdentification of Ayurvedic Medicinal Plants and Raw Materials using Deep Learning </h3>
        <p>–Designed and implemented a deep learning model to accurately classify Ayurvedic medicinal plants and raw materials from images. The project helps in reliable identification of herbs, supporting applications in traditional medicine, research, and healthcare..</p>
      </div>
      <div className="card">
      
        <h3>Crop Yield Predictor Using Machine Learning</h3>
        <p>Designed and developed a machine learning model to forecast crop yield using parameters such as soil type, weather conditions, and historical data. The system helps farmers and researchers make data-driven decisions, improve productivity, and promote sustainable agricultural practices..</p>
      </div>
      
    </div>
  </section>
)}
    

      {section === 'about' && (
  <section className="section">
    <div className="about-box">
      <img src="abhaydev.jpg" alt="Abhaydev" className="about-image" />
      <h2>About Me</h2>
      <p>
        Hello! I am Abhay, a passionate software engineer with expertise in React and modern web development.
        I love creating interactive and user-friendly web applications.
      </p>
      <a
         href="/resume.pdf"
         download="Abhaydev_Resume.pdf"
         className="resume-button">
           Download Resume
</a>

    </div>
  </section>
)}

{section === 'contact' && (
  <section className="section">
    <div className="contact-box">
      <h2>📬 Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or connect on LinkedIn .</p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:abhaydevumesh123@gmail.com">abhaydevumesh123@gmail.com</a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://linkedin.com/in/abhaydev"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/abhaydev
        </a>
      </p>
    </div>
  </section>
)}



      {/* Education */}
      {section === 'education' && (
        <section className="section">
          <h2 className="education-title">🎓 Education</h2>
          <div className="cards">
            {education.map((edu, index) => (
              <div className="card" key={index}>
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <span>{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Knowledge */}
      {section === 'professional' && (
        <section className="section">
          <h2 className="professional-title">🎓 Professional Knowledge</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      

      {/* Video Gallery */}
      {section === 'videos' && (
        <section className="section">
          <h2 className="video-title">🎓 Video Gallery</h2>
          <div className="video-gallery">
            {videos.map((video, index) => (
              <iframe
                key={index}
                width="300"
                height="200"
                src={video}
                title={`video-${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
