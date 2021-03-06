import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBmH-OxEDrFkPJ1WTQwBtfYwVYMUBit0Mk',
  authDomain: 'winsome-db.firebaseapp.com',
  databaseURL: 'https://winsome-db.firebaseio.com',
  projectId: 'winsome-db',
  storageBucket: 'winsome-db.appspot.com',
  messagingSenderId: '208323850391',
  appId: '1:208323850391:web:7ef71895d23833a7f779d2',
  measurementId: 'G-Q9L4H85H33',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const { exists } = await userRef.get();
  if (!exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
