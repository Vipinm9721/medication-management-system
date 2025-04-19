
// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // <-- Add this

// const firebaseConfig = {
//     apiKey: "AIzaSyBf2UdeJjaeJoj6j4mwLV5Hq77h2fx_dOs",
//     authDomain: "medical-management-318bf.firebaseapp.com",
//     projectId: "medical-management-318bf",
//     storageBucket: "medical-management-318bf.appspot.com",
//     messagingSenderId: "228126178483",
//     appId: "1:228126178483:web:c56625b831b81f4ad184c6",
//     measurementId: "G-2Q4W8XXJV4"
//   };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app); // <-- Export Firestore






// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBf2UdeJjaeJoj6j4mwLV5Hq77h2fx_dOs",
  authDomain: "medical-management-318bf.firebaseapp.com",
  projectId: "medical-management-318bf",
  storageBucket: "medical-management-318bf.appspot.com",
  messagingSenderId: "228126178483",
  appId: "1:228126178483:web:c56625b831b81f4ad184c6",
  measurementId: "G-2Q4W8XXJV4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
