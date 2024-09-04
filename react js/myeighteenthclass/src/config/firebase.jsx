// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPgXifPXon-dcwPyyMjvHugwxr3t26VlQ",
  authDomain: "jp-db-5f8d6.firebaseapp.com",
  databaseURL: "https://jp-db-5f8d6-default-rtdb.firebaseio.com",
  projectId: "jp-db-5f8d6",
  storageBucket: "jp-db-5f8d6.appspot.com",
  messagingSenderId: "297923268474",
  appId: "1:297923268474:web:5f167b10b8bd502e5050c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database };
