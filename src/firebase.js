import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwrPn0hvtIwmDYvuG5kL_x2od1J8E0UuA",
  authDomain: "react-firebase-todo-d5890.firebaseapp.com",
  projectId: "react-firebase-todo-d5890",
  storageBucket: "react-firebase-todo-d5890.appspot.com",
  messagingSenderId: "932712364137",
  appId: "1:932712364137:web:4403bab679182f7460caf8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
