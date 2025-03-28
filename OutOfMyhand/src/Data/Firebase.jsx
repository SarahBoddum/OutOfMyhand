// firebase.js (eller en hvilken som helst passende filnavn)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Firestore database
import { getAuth } from "firebase/auth";  // Authentication
import { getStorage } from "firebase/storage";  // Storage til filer

// Firebase-konfigurationen - er tilgængelig i Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAhDiKDpoXHCo5m4XFCEyMmmT5Ekmbaux4",
  authDomain: "oomh-76375.firebaseapp.com",
  projectId: "oomh-76375",
  storageBucket: "oomh-76375.appspot.com",  // Ret URL her
  messagingSenderId: "236894290482",
  appId: "1:236894290482:web:276318de269844740a322b",
  measurementId: "G-6NC9GHT2VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore, Auth og Storage
const db = getFirestore(app); 
const auth = getAuth(app); 
const storage = getStorage(app); 

// Eksportér objekterne, så du kan bruge dem i andre filer
export { app, db, auth, storage };
