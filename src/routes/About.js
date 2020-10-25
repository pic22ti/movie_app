import React from 'react';
import './About.css';

function About(props) {
  return (
    <section className="about">
      <h1 className="about_title">About</h1>
      <div className="about_container">
        <span className="about_text">About this app</span>
      </div>
    </section>
  );
}

export default About;