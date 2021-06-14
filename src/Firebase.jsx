
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr5UK0RDHnmRckUr5VVMztpk6GHtbnY-k",
  authDomain: "perfectlegal-dee1d.firebaseapp.com",
  databaseURL:"https://perfectlegal-dee1d-default-rtdb.firebaseio.com",
  projectId: "perfectlegal-dee1d",
  storageBucket: "perfectlegal-dee1d.appspot.com",
  messagingSenderId: "15830593196",
  appId: "1:15830593196:web:b504fbd726ff5fb078f909",
  measurementId: "G-EYLCCY2F4H"
};

const fireDb= firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
