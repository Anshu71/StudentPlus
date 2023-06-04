

import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import pages from './../pages/landing';

// Update with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXin9tL0OS68Ta90mu8LqszmJfdF39Pf8",
    authDomain: "codespot-9aba0.firebaseapp.com",
    databaseURL: "https://codespot-9aba0-default-rtdb.firebaseio.com",
    projectId: "codespot-9aba0",
    storageBucket: "codespot-9aba0.appspot.com",
    messagingSenderId: "1086111554947",
    appId: "1:1086111554947:web:8f179a12cdcf1230e3eab6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function Login() {
    
  const [emailid, setEmailid] = useState('');
  const [passw, setPassw] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  const hemail = (event) => {
    setEmailid(event.target.value);
  };

  const hpass = (event) => {
    setPassw(event.target.value);
  };
  
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission

    signInWithEmailAndPassword(getAuth(), emailid, passw)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Logged in:', user);
       // alert('Successfully logged in');
        //window.location.href = "C:\Users\Hiral Vaghasiya\Desktop\mumbaiHacks\StudentPlus\src\pages\landing.js";
        navigate('/');
      })
      .catch((error) => {
        // Handle login error
        console.log('Login error:', error);
        setError("Wrong Email or Password");
      });
  };

  return (
    <section className="text-gray-600 body-font bg-[#101828]">
      <div className="container px-3 py-12 mx-auto flex flex-wrap items-center justify-center min-h-screen">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-0 w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="form">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" value={emailid} onChange={hemail} className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" value={passw} onChange={hpass} className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <input type="submit" className="text-white cursor-pointer bg-[#475467] border-0 py-2 px-8 focus:outline-none hover:bg-[#101828] rounded text-lg" value="Login" />

          </form>
          <p className="text-sm text-gray-500 mt-3"><a href="/signup"><u>Create an Account</u></a></p>
          <p className="text-xs text-gray-500 mt-3">By signing up, you agree to <a href="#"><u>Terms of Use</u></a> and <a href="#"> <u> Privacy Policy</u></a>.</p>

        </div>
      </div>
    </section>
  );
}

export default Login;
