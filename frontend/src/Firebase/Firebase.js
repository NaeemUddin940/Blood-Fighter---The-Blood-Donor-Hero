// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQHumlC_BQMOlsHAwgyqU7aUWoIXZMWdg",
  authDomain: "blood-fighter-50853.firebaseapp.com",
  projectId: "blood-fighter-50853",
  storageBucket: "blood-fighter-50853.firebasestorage.app",
  messagingSenderId: "1065143907385",
  appId: "1:1065143907385:web:047090dc929c8d69d809e8",
  measurementId: "G-1Q0RLX8EY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
