// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS3LEEgGdZw8Aqr3mhgJTDB4PNvJc2Ddc",
  authDomain: "react-ce677.firebaseapp.com",
  projectId: "react-ce677",
  storageBucket: "react-ce677.appspot.com",
  messagingSenderId: "767171093918",
  appId: "1:767171093918:web:3c2d8befddb61d1fa4a28f"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);