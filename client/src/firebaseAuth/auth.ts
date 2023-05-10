//Firebase auth
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


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
    // setID(userCredential.user.uid)
    // navigate('./products')
    return {id, loggedIn}
    // setLogIn(true)
  } catch (err) {
    console.log(err)
    const id = '';
    const loggedIn = false;
    return {id, loggedIn}
  }
}