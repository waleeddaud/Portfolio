// src/App.jsx
import React from 'react';
import './App.css';
import UserManager from './components/UserManager';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="profile">
          <h1 className="name">Waleed Daud</h1> {/* Replace with your name */}
          <p className="profession">BackEnd WebDev</p> {/* Replace with your profession */}
          <img
            src={"waleed_picture.jpg"} // Replace with your image URL
            alt="Profile"
            className="profile-image"
          />
        </div>
      </header>

      <main className="main-content">
        <section className="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Achievement 1</li> {/* Replace with actual achievements */}
            <li>Achievement 2</li>
            <li>Achievement 3</li>
            <li>Achievement 4</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Project description here...</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Project description here...</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Project description here...</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
          <button className="contact-btn">Get in Touch</button>
        </section>

      </main>
      <UserManager />
      <footer className="footer">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
