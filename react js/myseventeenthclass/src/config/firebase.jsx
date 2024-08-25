// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
     
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzwQ-sIQ-JrRru2Nj3ChGuEgOHTQSd60M",
  authDomain: "jp-db-965f0.firebaseapp.com",
  projectId: "jp-db-965f0",
  storageBucket: "jp-db-965f0.appspot.com",
  messagingSenderId: "1050242598931",
  appId: "1:1050242598931:web:bc07ed257ba0364e9557e6",
};
   
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database };
