import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBcffp29xhfK5XRreD3eH6gI1KWlZmbWg",
  authDomain: "housemarketplace-b9b54.firebaseapp.com",
  projectId: "housemarketplace-b9b54",
  storageBucket: "housemarketplace-b9b54.appspot.com",
  messagingSenderId: "129797438113",
  appId: "1:129797438113:web:f05b5a3a6094ecb00f0ee0"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()