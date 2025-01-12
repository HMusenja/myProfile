// Import functions neesded
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc,getDoc,setDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU5uoT_RLym6bTo8mSi-JwGHrkuwbeD1Q",
  authDomain: "my-portfolio-e447b.firebaseapp.com",
  projectId: "my-portfolio-e447b",
  storageBucket: "my-portfolio-e447b.firebasestorage.app",
  messagingSenderId: "575765645761",
  appId: "1:575765645761:web:2a4899ad45e0637324c740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth, collection, getDocs, doc, getDoc, setDoc };
export const storage = getStorage(app);