// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBauTbFyZcRzZ_3Sg7A5UikaiPXKud1X-k",
  authDomain: "eventive-cc96b.firebaseapp.com",
  databaseURL: "https://eventive-cc96b-default-rtdb.firebaseio.com",
  projectId: "eventive-cc96b",
  storageBucket: "eventive-cc96b.appspot.com",
  messagingSenderId: "314573185300",
  appId: "1:314573185300:web:003bcea74e6f8c08462201",
  measurementId: "G-MTQ78MH2TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);