import React from 'react';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="https://via.placeholder.com/150" alt="My portrait" />
      <p>Hello! My name is John Doe. I’m a passionate web developer...</p>
      <a href="/resume.pdf" download>Download My Resume</a>
    </section>
  );
}

export default About;
