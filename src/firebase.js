import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBllP0qxgnRuWYgS_geWN3TAFLAkebGjD4",
  authDomain: "clone-64d96.firebaseapp.com",
  projectId: "clone-64d96",
  storageBucket: "clone-64d96.appspot.com",
  messagingSenderId: "495487525905",
  appId: "1:495487525905:web:ba08cb856114dd9470bdb0",
  measurementId: "G-C371HNVCZ3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
