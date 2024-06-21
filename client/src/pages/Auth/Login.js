import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';
import Banner from '../Home/Banner';
import Footer from '../Home/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='Login'>
      <Banner />
      <h2>Login</h2>
      <div className='form-container'>
        <form onSubmit={handleLogin} className='smaller-container'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className='form-input'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className='form-input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className='button'>Login</button>
        </form>
        {error && <p className='error-message'>{error}</p>}
        <p className='App-link'>Not registered yet? <span onClick={() => navigate('/signup')}>Sign up</span></p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
