import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Todo App",
      img: "https://via.placeholder.com/200",
      desc: "Built a full-stack todo app using MERN stack."
    },
    {
      title: "Portfolio Site",
      img: "https://via.placeholder.com/200",
      desc: "This personal site showcases my skills and work."
    },
    {
      title: "Weather App",
      img: "https://via.placeholder.com/200",
      desc: "Used APIs to show real-time weather updates."
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((proj, index) => (
          <div key={index}>
            <h3>{proj.title}</h3>
            <img src={proj.img} alt={proj.title} />
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
