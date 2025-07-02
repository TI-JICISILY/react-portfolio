import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to My Portfolio</h1>
      <p>Mission: To build elegant and efficient web applications.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </section>
  );
}

export default Home;
