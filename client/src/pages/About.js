import React from 'react';
// Importing the image from the local images folder
import TijiImage from '../images/Tiji.jpeg'; // Adjust the path as needed

function About() {
  return (
    <section>
      {/* Section title */}
      <h2>About Me</h2>

      {/* Display the imported image with alt text and fixed width */}
      <img src={TijiImage} alt="My portrait" width={150} />

      {/* Description paragraph about myself */}
      <p>
        Hello! My name is Tiji Cisily Jogy, and I am a passionate web developer with a strong enthusiasm for creating beautiful, functional, and user-friendly websites and applications. I specialize in modern web technologies like React, JavaScript, and CSS, and I enjoy turning ideas into reality through clean, efficient code.

        I’m always eager to learn new tools and techniques to improve my skills and deliver the best experience possible. When I’m not coding, I enjoy exploring design trends, contributing to open-source projects, and collaborating with others who share my passion for technology.

        My goal is to continuously grow as a developer and make a meaningful impact by building digital solutions that help people and businesses thrive.
      </p>

      {/* Link to download the resume PDF file located in the public folder */}
      <a href="/Tiji Jogy.pdf" download>Download My Resume</a>
    </section>
  );
}

export default About;
