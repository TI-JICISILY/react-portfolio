import React from 'react';
import download from '../images/download.png';
import lm from '../images/lm.jpg';
import webdevelopment from '../images/web development.jpg';

function Projects() {
  const projects = [
    {
      title: "Healthcare Management App",
      img: download,
      desc: "This full-stack Healthcare Management App is built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to book appointments, manage patient records, and track health data securely and efficiently."
    },
    {
      title: "Library Management System",
      img: lm,
      desc: "A comprehensive digital library management system that allows librarians to add, remove, and search for books. It also enables user registration and tracks borrowing history to ensure effective book management."
    },
    {
      title: "Web Development Portfolio",
      img: webdevelopment,
      desc: "This project is a portfolio website showcasing my web development work. It includes sections for about me, skills, projects, and contact, all styled with responsive design for mobile and desktop views."
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((proj, index) => (
          <div key={index}>
            <h3>{proj.title}</h3>
            <img src={proj.img} alt={proj.title} width="250" />
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
