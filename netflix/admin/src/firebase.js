import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8TB9KseHxkjwOpLhl5fB7b4zmGrT6LmI",
  authDomain: "netflix-10c4f.firebaseapp.com",
  projectId: "netflix-10c4f",
  storageBucket: "netflix-10c4f.appspot.com",
  messagingSenderId: "537691734795",
  appId: "1:537691734795:web:417a8ff6d0ff1b4f4c180e",
  measurementId: "G-7NNXT0YWNH"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;