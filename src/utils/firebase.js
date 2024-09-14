// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT4Njv-_n6BMxRQGGDxjKGVXXY-4717lE",
  authDomain: "foodzie-2fae8.firebaseapp.com",
  projectId: "foodzie-2fae8",
  storageBucket: "foodzie-2fae8.appspot.com",
  messagingSenderId: "990254179644",
  appId: "1:990254179644:web:0f6b94300e71df12b3ea39",
  measurementId: "G-KB4DFFFHRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);