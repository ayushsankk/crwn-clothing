import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKRyfnWWBuwosQc9lGGSasdg4guwrNPjw",
    authDomain: "crwn-db-41603.firebaseapp.com",
    projectId: "crwn-db-41603",
    storageBucket: "crwn-db-41603.appspot.com",
    messagingSenderId: "245307648577",
    appId: "1:245307648577:web:11f24a024ca4dc04e4b4c0",
    measurementId: "G-FCMY6JCEJF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;