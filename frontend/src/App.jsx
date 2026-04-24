import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AgenticAI from './pages/AgenticAI';
import Communication from './pages/Communication';
import Blockchain from './pages/Blockchain';
import Contact from './pages/Contact';
import About from './pages/About';

// Placeholder Pages

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai" element={<AgenticAI />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
