// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqdJ_e8xQWkCvmhZBFXoidn16jbtBVTtc",
  authDomain: "fir-auth-8eb43.firebaseapp.com",
  projectId: "fir-auth-8eb43",
  storageBucket: "fir-auth-8eb43.appspot.com",
  messagingSenderId: "339281544526",
  appId: "1:339281544526:web:068178fe6f9d8b658a4a1f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export { auth };