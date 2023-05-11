//Firebase auth
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


//Ref: https://youtu.be/rQvOAnNvcNQ
const firebaseConfig = {
  apiKey: "AIzaSyB-S_yjhrbbMBmLHJtI5PdIqHKA1KhKsTE",
  authDomain: "test-ba3ab.firebaseapp.com",
  projectId: "test-ba3ab",
  storageBucket: "test-ba3ab.appspot.com",
  messagingSenderId: "209300872871",
  appId: "1:209300872871:web:bb37dac326ca36a11cc582"
};

export async function loginFunction(email: string, password:string) {
  // log(email, password)
  try {
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user.uid)
    const id = userCredential.user.uid;
    const loggedIn = true;
    return { id, loggedIn }
    
  } catch (err) {
    console.log(err)
    const id = '';
    const loggedIn = false;
    return {id, loggedIn}
  }
}

export async function registerFunction(email: string, password: string) {
  // log(email, password)
  try {
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user)
    const id = userCredential.user.uid;
    return { id, email}

  } catch (err) {
    console.log(err)
    return
  }
}