// src/firebaseConfig.js



import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "process.env.REACT_APP_API_KEY",
    authDomain: "react-test64.firebaseapp.com",
    projectId: "react-test64",
    storageBucket: "react-test64.firebasestorage.app",
    messagingSenderId: "724328549470",
    appId: "1:724328549470:web:5530de033fccc8485378cf",
    measurementId: "G-P5HX8LGTKQ"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };