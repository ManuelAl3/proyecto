import "firebase/compat/firestore";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useState, useEffect } from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7rfNOU9uCn-GJhtpkYfEAfRJd5l8fvSo",
    authDomain: "sitioencuestas.firebaseapp.com",
    projectId: "sitioencuestas",
    storageBucket: "sitioencuestas.appspot.com",
    messagingSenderId: "287292305673",
    appId: "1:287292305673:web:8864995f4f77aaf9aae3d8",
    measurementId: "G-KGPN7YVDQ1"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  export const db = getFirestore();

  export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }

  export function logout(){
    return signOut(auth);
  }

  //Custom Hook
  export function useAuth(){
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])

    return currentUser;
  }