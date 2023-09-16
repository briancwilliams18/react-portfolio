import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

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