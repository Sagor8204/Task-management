// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmExbLP-w-xzkEWco7A_Lpx1YLBrx08yA",
  authDomain: "todo-cc5f0.firebaseapp.com",
  databaseURL: "https://todo-cc5f0-default-rtdb.firebaseio.com",
  projectId: "todo-cc5f0",
  storageBucket: "todo-cc5f0.appspot.com",
  messagingSenderId: "608397581146",
  appId: "1:608397581146:web:c0b18f6c63aba7cc42b163",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;
