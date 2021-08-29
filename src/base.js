import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAhKT1rPVF3YvOgoB7ZNMu-xUs2MPG0iEk",
    authDomain: "commonpage-273cc.firebaseapp.com",
    projectId: "commonpage-273cc",
    storageBucket: "commonpage-273cc.appspot.com",
    messagingSenderId: "853811946502",
    appId: "1:853811946502:web:69a3e0a3d7821ca24dcf87"
})

const base = Rebase.createClass(firebaseApp.database());