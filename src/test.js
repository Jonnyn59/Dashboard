import { getDatabase, ref, onValue } from "firebase/database";
import { collection, serverTimestamp, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCz-XzI9pk1QMGl6c17wQSyaiIQ0bkTNOA",
  authDomain: "db-bd53e.firebaseapp.com",
  databaseURL: "https://db-bd53e-default-rtdb.firebaseio.com",
  projectId: "db-bd53e",
  storageBucket: "db-bd53e.firebasestorage.app",
  messagingSenderId: "485489455915",
  appId: "1:485489455915:web:4b59e92d8360a03afccb6e",
  measurementId: "G-PSRB5902S7"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const dbFirestore = getFirestore(app);

const refColl = collection(dbFirestore, "admin");

getDocs(refColl).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});

const dbRef = ref(db, "users");
onValue(dbRef, (data) => {
  console.log(data.val());
});

addDoc(refColl, {
  name: "Jonny 59",
  age: 30,
  occupation: "Software Engineer"
}).then(() => {
  console.log("Document added successfully");
}).catch((error) => {
  console.error("Error adding document: ", error);
});