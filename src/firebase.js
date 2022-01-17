import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4PE0wBRzz9AARI2OHQIrWsAhA7R8VmwA",
  authDomain: "disneyplus-clone-f6736.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-f6736-default-rtdb.firebaseio.com",
  projectId: "disneyplus-clone-f6736",
  storageBucket: "disneyplus-clone-f6736.appspot.com",
  messagingSenderId: "298031067289",
  appId: "1:298031067289:web:60cad8faf5af31954b4808",
  measurementId: "G-M0DDW9WT4S"



};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
