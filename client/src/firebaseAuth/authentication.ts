// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { create } from "zustand";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVY0K7xQijD3aKuygw_wxhFyicWyJpuY",
  authDomain: "aaron-e-commerce.firebaseapp.com",
  projectId: "aaron-e-commerce",
  storageBucket: "aaron-e-commerce.appspot.com",
  messagingSenderId: "274991169875",
  appId: "1:274991169875:web:cb4a9d44d04332bedb61a6",
  measurementId: "G-LB9S05C7R8",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(firebaseApp);

export async function loginUser(email: string, password: string) {
  // const firebaseApp = initializeApp(firebaseConfig);
  // const auth = getAuth(firebaseApp);
  // const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { id: user.uid, loggedIn: true };
  } catch (e) {
    console.log(e);
    return { id: "", loggedIn: false };
  }
}

export async function registerUser(email: string, password: string) {
  // const auth = getAuth();
  try {
    // const firebaseApp = initializeApp(firebaseConfig);
    // const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { id: user.uid, email };
  } catch (e) {
    console.log(e);
    return;
  }
}

export async function signOutUser() {
  try {
    // const firebaseApp = initializeApp(firebaseConfig);
    // const auth = getAuth(firebaseApp);
    await signOut(auth);
    console.log("signed out!");
  } catch (e) {
    console.log("ran into error while attempting sign-out");
  }
}
// detect auth state

// onAuthStateChanged(auth, (user) => {
//   if (user !== null) {
//     console.log("logged in");
//   } else {
//     console.log("no user");
//   }
// });
