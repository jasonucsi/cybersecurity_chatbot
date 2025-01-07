// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBhIZnCMT9lHMTLnDKWPifnFM68SO_Xegg",
  authDomain: "cybersecurity-cbb12.firebaseapp.com",
  projectId: "cybersecurity-cbb12",
  storageBucket: "cybersecurity-cbb12.firebasestorage.app",
  messagingSenderId: "107375584793",
  appId: "1:107375584793:web:0abbee1de853ba0e7b6c88",
  measurementId: "G-VKM7R4EH82"
};

// Initialize Firebase and Analytics
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app);

// Get Analytics (only for projects with Analytics enabled)
const analytics = getAnalytics(app);
console.log("Analytics initialized:", analytics);

export { app, analytics };
