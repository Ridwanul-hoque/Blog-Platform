// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-bccfd.firebaseapp.com",
  projectId: "next-blog-bccfd",
  storageBucket: "next-blog-bccfd.firebasestorage.app",
  messagingSenderId: "75071506521",
  appId: "1:75071506521:web:9723c53082a6554bcd0948"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);