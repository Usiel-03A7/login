// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYkKjTXnyun2s6bal5QeKkvzv-DcWfd7w",
  authDomain: "login-738fd.firebaseapp.com",
  projectId: "login-738fd",
  storageBucket: "login-738fd.appspot.com",
  messagingSenderId: "1074026832312",
  appId: "1:1074026832312:web:ce3e0dfc91cfa73a2e2f4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)