import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from './config';

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
