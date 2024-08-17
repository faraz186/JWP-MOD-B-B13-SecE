// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvmkvrUJidL-0laN7bpNPVVlZ4VZS5KiM",
  authDomain: "reactauth-4461a.firebaseapp.com",
  projectId: "reactauth-4461a",
  storageBucket: "reactauth-4461a.appspot.com",
  messagingSenderId: "192261412456",
  appId: "1:192261412456:web:6dfa262fe05f031a0e4ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export  {app,auth}