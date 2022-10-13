// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYsRTQM3zCA0YwiPcujzMv22g3UJS1HcE",
  authDomain: "newsite-e2401.firebaseapp.com",
  projectId: "newsite-e2401",
  storageBucket: "newsite-e2401.appspot.com",
  messagingSenderId: "617034849398",
  appId: "1:617034849398:web:073524bdccc0ce1bf8d357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage();


export const CreateUser = async (email,password) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user);
    } catch(error){
       console.log(error.message); 
    }

}