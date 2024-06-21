// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, query, where, getDocs } from 'firebase/firestore';

// const auth = getAuth(); // Initialize Firebase Auth
// const firestore = getFirestore(); // Initialize Firestore

// const LoginScreen = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredentials) => {
//                 const user = userCredentials.user;
//                 if (user.emailVerified) {
//                     const checkIfProfileExists = async () => {
//                         try {
//                             const profilesReference = firestore.collection('profiles'); // Define the Firestore collection
//                             const q = query(profilesReference, where("userId", "==", user.uid));
//                             const querySnapshot = await getDocs(q);
//                             if (querySnapshot.docs.length > 0) {
//                                 navigate("/dashboard"); // Adjust the route as needed
//                             } else {
//                                 console.log("Logged in with " + user.email);
//                                 navigate("/create-profile"); // Adjust the route as needed
//                             }
//                         } catch (error) {
//                             console.log(error);
//                         }
//                     };
//                     checkIfProfileExists();
//                 } else {
//                     alert('Please verify your email before logging in');
//                 }
//             })
//             .catch((error) => {
//                 alert('There was an error. Please check your credentials and try again.');
//                 console.log(error);
//             });
//     };

//     return (
//         <div>
//             <h1>Log In</h1>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value.toLowerCase())}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Log in</button>
//             <button onClick={() => navigate("/reset-password")}>Forgot Password?</button>
//             <button onClick={() => navigate("/register")}>Don't have an account? Sign up!</button>
//         </div>
//     );
// };

// export default LoginScreen;
