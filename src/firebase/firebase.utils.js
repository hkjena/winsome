import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBiovQrZBVWhDKRWsk6TidHifBWa_03760',
  authDomain: 'winsome-2d922.firebaseapp.com',
  databaseURL: 'https://winsome-2d922.firebaseio.com',
  projectId: 'winsome-2d922',
  storageBucket: 'winsome-2d922.appspot.com',
  messagingSenderId: '1004648455758',
  appId: '1:1004648455758:web:09b0ab9753e4e9e979ad1f',
  measurementId: 'G-PWR0VGV40E',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
