import firebase from 'firebase/app';

// tell nextJS to bundle firebase SDKs to main js bundle
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB4HdHd2f40sL-9D70lqqKLpr-3i8coqo0',
  authDomain: 'firestore-23015.firebaseapp.com',
  projectId: 'firestore-23015',
  storageBucket: 'firestore-23015.appspot.com',
  messagingSenderId: '268730779778',
  appId: '1:268730779778:web:3c9e711f8b6b87936dcc9b',
  measurementId: 'G-W5EGJFNRDM',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
