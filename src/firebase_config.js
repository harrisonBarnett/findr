import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAX7VCOGf1ntoowI6VawbOJP4RuqOaB7LY",
  authDomain: "findr-956d6.firebaseapp.com",
  projectId: "findr-956d6",
  storageBucket: "findr-956d6.appspot.com",
  messagingSenderId: "40927690533",
  appId: "1:40927690533:web:6c923963825658bb5964cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)