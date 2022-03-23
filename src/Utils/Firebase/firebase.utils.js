import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5dN32wfgdMvgjNb9cYy09I1xFZFBxA2I",
  authDomain: "crown-ecommerce-3f9b0.firebaseapp.com",
  projectId: "crown-ecommerce-3f9b0",
  storageBucket: "crown-ecommerce-3f9b0.appspot.com",
  messagingSenderId: "319029207592",
  appId: "1:319029207592:web:c8dda756fa61b8195acb1d",
};

const Firebase = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( userAuth, additionalInformation = {} ) => {

  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const user = await getDoc(userDocRef);

  console.log(user);
  console.log(user.exists());

  if (!user.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
