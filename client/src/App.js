import React from 'react';
import './App.css';
import Banner from './pages/Home/Banner';
import Footer from './pages/Home/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';

const Home = () => (
  <div className="App">
    <div className="App-body">
      <Banner />
      <p>Test</p>
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
