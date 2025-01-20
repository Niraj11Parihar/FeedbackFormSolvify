import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1FaUDECH39PnXourd5v-ZYut8UiWf0g",
  authDomain: "feedbacksolvify.firebaseapp.com",
  databaseURL: "https://feedbacksolvify-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "feedbacksolvify",
  storageBucket: "feedbacksolvify.firebasestorage.app",
  messagingSenderId: "227904825588",
  appId: "1:227904825588:web:1fa4c2149341e5ef9156a1",
  measurementId: "G-RJRY38F8PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set };