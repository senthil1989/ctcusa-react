import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Slider from './components/Slider';
import About from './pages/About';
// import NotFound from './pages/NotFound';
import './App.css';
import Footer from './components/Footer';
import Leadership from './pages/LeaderShip';
import Membership from './pages/Membership';

function App() {
  return (
    <Router>
      <div className="main position-relative">
      <Header />
      {<Slider/>}
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leadership" element={<Leadership />} />
      
      <Route path="/membership" element={<Membership/>} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
