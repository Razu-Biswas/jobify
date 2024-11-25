// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR4HB3WO_iy4t8Z3xtu9iVVlyeyLLx-d8",
    authDomain: "jobify-6b7f0.firebaseapp.com",
    projectId: "jobify-6b7f0",
    storageBucket: "jobify-6b7f0.firebasestorage.app",
    messagingSenderId: "498489205289",
    appId: "1:498489205289:web:4e1556d35d964ac5803238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth