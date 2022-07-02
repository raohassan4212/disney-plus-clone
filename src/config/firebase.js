import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCOn0c68WX2TUFznXVoCpP-Y8UunFBr21Y",
  authDomain: "hack2-c4083.firebaseapp.com",
  databaseURL: "https://hack2-c4083-default-rtdb.firebaseio.com",
  projectId: "hack2-c4083",
  storageBucket: "hack2-c4083.appspot.com",
  messagingSenderId: "545853817781",
  appId: "1:545853817781:web:5b4922e72a4f0e0b458ffc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {
    auth,
    provider,
    storage
};

export default db;