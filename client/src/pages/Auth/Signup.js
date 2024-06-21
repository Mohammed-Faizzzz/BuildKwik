import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from './../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css';
import Banner from '../Home/Banner';
import Footer from '../Home/Footer';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [uen, setUen] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('Visitor');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // console.log(auth, email, password);
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;

      // // Add additional user details to Firestore
      // await setDoc(doc(db, 'users', user.uid), {
      //   firstName,
      //   lastName,
      //   username,
      //   email,
      //   contactNumber,
      //   uen: userType === 'Organiser' ? uen : '',
      //   userType,
      // });

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='Signup'>
      <Banner />
      <h2>Sign Up</h2>
      <div className='form-container'>
        <div className='tabs'>
          <button
            className={`tab ${userType === 'Visitor' ? 'active' : ''}`}
            onClick={() => setUserType('Visitor')}
            style={{ borderRadius: '1rem 0 0 1rem' }}
          >
            Visitor
          </button>
          <button
            className={`tab ${userType === 'Organiser' ? 'active' : ''}`}
            onClick={() => setUserType('Organiser')}
            style={{ borderRadius: '0 1rem 1rem 0' }}
          >
            Organiser
          </button>
        </div>
        <form onSubmit={handleSignup} className='smaller-container'>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            className='form-input'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            className='form-input'
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            className='form-input'
            onChange={(e) => setUsername(e.target.value)}
          />
          {userType === 'Organiser' && (
            <input
              type="text"
              placeholder="UEN"
              value={uen}
              className='form-input'
              onChange={(e) => setUen(e.target.value)}
            />
          )}
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            className='form-input'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            className='form-input'
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <button type="submit" className='button'>Sign Up</button>
        </form>
      </div>
      {error && <p className='error-message'>{error}</p>}
      <Footer />
    </div>
  );
};

export default Signup;
