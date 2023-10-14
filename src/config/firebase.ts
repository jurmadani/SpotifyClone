import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBAsXqDfdh7nBiALX8TRzQGO7uN7iZUpFg",
    authDomain: "react-spotify-clone-c4475.firebaseapp.com",
    projectId: "react-spotify-clone-c4475",
    storageBucket: "react-spotify-clone-c4475.appspot.com",
    messagingSenderId: "232312364195",
    appId: "1:232312364195:web:3ae8ed27ec6b663f567316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
