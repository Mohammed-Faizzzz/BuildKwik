import React from 'react';
import './App.css';
import Banner from './pages/Home/Banner';
import Footer from './pages/Home/Footer';
import List from './pages/Home/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';

// const logo = process.env.PUBLIC_URL + '/logo.png';

const Home = () => (
  <div className="App">
    <Banner />
    <div className="App-body">
      <p>Test</p>
    </div>
    <div className="App-footer">
    <Footer />
    </div>
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
