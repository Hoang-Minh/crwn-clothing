import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsObO8TF7NreIOIwBH1SSwyMT1RoNRBvQ",
  authDomain: "crwn-clothing-db-53f83.firebaseapp.com",
  projectId: "crwn-clothing-db-53f83",
  storageBucket: "crwn-clothing-db-53f83.appspot.com",
  messagingSenderId: "176579183707",
  appId: "1:176579183707:web:af68da85fef245b48cab7e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRe = doc(db, "users", userAuth.uid);

    console.log(userDocRe);

    const userSnapshot = await getDoc(userDocRe);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRe, {
                displayName,
                email,
                createdAt
            });
        }catch(error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRe;
}
