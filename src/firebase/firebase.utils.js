import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyDnblz1P1g6oawSd7wZ_b0NQqLv8H2dzQM",
  authDomain: "crwn-db-ec75a.firebaseapp.com",
  projectId: "crwn-db-ec75a",
  storageBucket: "crwn-db-ec75a.appspot.com",
  messagingSenderId: "728647264724",
  appId: "1:728647264724:web:a93527817749dd3f6b4e41"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase