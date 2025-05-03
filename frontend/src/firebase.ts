import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "communitybridge13.firebaseapp.com",
    databaseURL: "https://communitybridge13-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "communitybridge13",
    storageBucket: "communitybridge13.firebasestorage.app",
    messagingSenderId: "1006881884681",
    appId: "1:1006881884681:web:f7a29e2ba3fa460b4506d8",
    measurementId: "G-ZJ1HWZQ74Z"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();