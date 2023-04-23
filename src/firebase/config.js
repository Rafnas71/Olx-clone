import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDbglr8ouRHNRAv-0QOfVDpzOylTAWqNOo",
    authDomain: "olx-clone-32425.firebaseapp.com",
    projectId: "olx-clone-32425",
    storageBucket: "olx-clone-32425.appspot.com",
    messagingSenderId: "577261524839",
    appId: "1:577261524839:web:e56d406a2eeb91a6cf41c2",
    measurementId: "G-3CKVGN988P"
  };

export default firebase.initializeApp(firebaseConfig)