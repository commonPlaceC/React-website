import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhKT1rPVF3YvOgoB7ZNMu-xUs2MPG0iEk",
    authDomain: "commonpage-273cc.firebaseapp.com",
    projectId: "commonpage-273cc",
    storageBucket: "commonpage-273cc.appspot.com",
    messagingSenderId: "853811946502",
    appId: "1:853811946502:web:69a3e0a3d7821ca24dcf87"
  };


firebase.initializeApp(firebaseConfig);
  
var storage = firebase.storage();
  
export default storage;