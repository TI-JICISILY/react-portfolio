import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to My Portfolio</h1>
       <p>This portfolio was built using React, optimized, and deployed with CI/CD.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </section>
  );
}

export default Home;
