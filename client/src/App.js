import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Auth & Forms Pages
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import QualificationPage from './pages/QualificationPage';
import AddProjectPage from './pages/AddProjectPage';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth routes */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* Form routes */}
          <Route path="/qualification" element={<QualificationPage />} />
          <Route path="/add-project" element={<AddProjectPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
