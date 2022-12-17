
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZh_EpNE-ZiCVwP52y-x3drqCpuFTRIlA",
  authDomain: "react-43635.firebaseapp.com",
  projectId: "react-43635",
  storageBucket: "react-43635.appspot.com",
  messagingSenderId: "119575294187",
  appId: "1:119575294187:web:dc078048bc7b75958fceae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)