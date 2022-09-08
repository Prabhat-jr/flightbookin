// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xm7lO8pG2kK9aPTHiE55RXJC2gbn0aA",
  authDomain: "flight-booking-web.firebaseapp.com",
  projectId: "flight-booking-web",
  storageBucket: "flight-booking-web.appspot.com",
  messagingSenderId: "133269291674",
  appId: "1:133269291674:web:79f872e34f810ebe561523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export {auth}