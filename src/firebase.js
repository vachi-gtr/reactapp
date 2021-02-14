import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyBZCeu2yARp5lIF_E0gm1iFEoFlws5h-A0",
    authDomain: "clone-28b9c.firebaseapp.com",
    projectId: "clone-28b9c",
    storageBucket: "clone-28b9c.appspot.com",
    messagingSenderId: "593347242713",
    appId: "1:593347242713:web:d7c0bba367c5e6081e2cc8",
    measurementId: "G-GQRM8SPLQR"
});

const db = firebaseApp.firestore();
const auth= firebase.auth();

export {db,auth};