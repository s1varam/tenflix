import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyD-AeMjRGug5NAH7SrFP_wADyC3UWXUoos",
    authDomain: "netflix-clone-5a98e.firebaseapp.com",
    projectId: "netflix-clone-5a98e",
    storageBucket: "netflix-clone-5a98e.appspot.com",
    messagingSenderId: "175425181699",
    appId: "1:175425181699:web:ed1ff7c846a8a948d51636"
} ;


const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase }; 