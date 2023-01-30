import { initializeApp} from "firebase/app"

import {
    
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

  } from "firebase/auth"
  import {
    getFirestore,
    doc,
    getDoc,
    setDoc,


} from "firebase/firestore"
const config = {
 
    apiKey: "AIzaSyDqxNPIZOi8AHnnAg5DP02NerBTkdYAgd4",
    authDomain: "netflix-clone-dc88f.firebaseapp.com",
    projectId: "netflix-clone-dc88f",
    storageBucket: "netflix-clone-dc88f.appspot.com",
    messagingSenderId: "401899376664",
    appId: "1:401899376664:web:138919818531370ae3f36d",
    measurementId: "G-6JVL7P0XQY"
  }
  const firebase = initializeApp(config);
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:"select_account"
  })
  export const auth = getAuth()
  export const signInWithGooglePopup =()=>signInWithPopup(auth,provider)
  export const db = getFirestore()

  export const createUserDocumentFromAuth  = async (userAuth, additionalInformation = {})=>{
    const userDocRef =doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
      try {
        await setDoc(userDocRef, {
            displayName,
            email,
            ...additionalInformation,
        });
        console.log(displayName)
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;

  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };