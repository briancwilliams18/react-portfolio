import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './components/Header';
import About from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* The About section is the default */}
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;