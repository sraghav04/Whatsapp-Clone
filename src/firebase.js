// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAtGMGVCt13C2vtuNx2AAK98VMIaxOJbX4",
  authDomain: "watsapp-clone-221fb.firebaseapp.com",
  databaseURL: "https://watsapp-clone-221fb.firebaseio.com",
  projectId: "watsapp-clone-221fb",
  storageBucket: "watsapp-clone-221fb.appspot.com",
  messagingSenderId: "845618235637",
  appId: "1:845618235637:web:ef3c1e6901869521b0ddbc",
  measurementId: "G-8HYEPCC9JT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
