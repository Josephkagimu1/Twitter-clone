// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5w427PexB7pQmu5q2jyGKdUndoTwnGk8",
  authDomain: "twitter-clone-c5d25.firebaseapp.com",
  projectId: "twitter-clone-c5d25",
  storageBucket: "twitter-clone-c5d25.appspot.com",
  messagingSenderId: "724631186526",
  appId: "1:724631186526:web:7ebe7004e87ff7207e18cf",
  measurementId: "G-CLP1F8GG6P"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;