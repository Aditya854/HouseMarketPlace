
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGgMKxSh6w24Pa1rL4DDFjDJhiUKPCdlo",
  authDomain: "housemarket-place-8cdda.firebaseapp.com",
  projectId: "housemarket-place-8cdda",
  storageBucket: "housemarket-place-8cdda.appspot.com",
  messagingSenderId: "317235998292",
  appId: "1:317235998292:web:1521e7f77232a1438007c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore();