import { initializeApp } from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsJFxiKajT4Qv5eHMLjAe1npC1YdVqQYg",
    authDomain: "muzika-15bc1.firebaseapp.com",
    projectId: "muzika-15bc1",
    storageBucket: "muzika-15bc1.appspot.com",
    //messagingSenderId: "793660473547",
    appId: "1:793660473547:web:30e1a14efee0130bd31b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication : reference to the service
const auth = getAuth(app)
// Initialize FireStroe DataBase
const db = getFirestore(app)
//Extract users Collection from FireStore DB
const usersCollection = collection(db,'users') 


//Export
export {
    auth,
    db,
    usersCollection
}
