import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdt5WdKKNlgzSQ8ELrUWkTpJgkIQUJqBA",
  authDomain: "minor-project-fb92a.firebaseapp.com",
  projectId: "minor-project-fb92a",
  storageBucket: "minor-project-fb92a.appspot.com",
  messagingSenderId: "759173261917",
  appId: "1:759173261917:web:6b67bb39fa1f9d4003fbb4",
  measurementId: "${config.measurementId}"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };