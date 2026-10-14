import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpQl-jOS4-6bLa5L383dqR5y3JmFT5exA",
  authDomain: "plugmasters-vtu.firebaseapp.com",
  projectId: "plugmasters-vtu",
  storageBucket: "plugmasters-vtu.firebasestorage.app",
  messagingSenderId: "217536430232",
  appId: "1:217536430232:web:8a56dd1f34b38a380e10ed",
  measurementId: "G-DMX4JC8X78"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
try { getAnalytics(app); } catch(e) {}
