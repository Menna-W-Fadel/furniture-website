// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF0fbf4LCBpMD8A_Xj98z0Bj9pKKKElJ8",
  authDomain: "furniture-26347.firebaseapp.com",
  projectId: "furniture-26347",
  storageBucket: "furniture-26347.firebasestorage.app",
  messagingSenderId: "306412898743",
  appId: "1:306412898743:web:c21d5b9730b381ee8e0032",
  measurementId: "G-RRVH2N9PGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);