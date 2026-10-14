// Plugmasters VTU - Firebase Config
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCpQL-JOS4-6bLa5L383dqR5yJmFrT5exA",
//   authDomain: "plugmasters-vtu.firebaseapp.com",
//   projectId: "plugmasters-vtu",
//   storageBucket: "plugmasters-vtu.firebasestorage.app",
//   messagingSenderId: "1055130850076",
//   appId: "1:1055130850076:web:6e5f8a1c2b3d4e5f6a7b8c"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// console.log("Plugmasters Firebase Connected!");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDu1FTxCs6D6M0y4R2iZ-5bX8nJ7p9q0wE",
  authDomain: "plugmasters-vtu.firebaseapp.com",
  projectId: "plugmasters-vtu",
  storageBucket: "plugmasters-vtu.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

// REPLACE WITH YOUR REAL CONFIG FROM FIREBASE CONSOLE
// Go Firebase > Project Settings > General > Your Apps > SDK Setup > Config

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
