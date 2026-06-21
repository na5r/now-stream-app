import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { initLogin } from "./login.js"; // Import your new login function

const firebaseConfig = { apiKey: "AIzaSyAdSeTJht66G67mMQq5oRyW0YVVffoQKWM",
  authDomain: "kaistreams.firebaseapp.com",
  databaseURL: "https://kaistreams-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kaistreams",
  storageBucket: "kaistreams.firebasestorage.app",
  messagingSenderId: "232696634492",
  appId: "1:232696634492:web:de0122ecc33ebe71237df9",
  measurementId: "G-FXLJM4LCXC" };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Login logic
initLogin();

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('loginScreen').classList.add('hidden');
        console.log("User is logged in, show profiles!");
    } else {
        document.getElementById('loginScreen').classList.remove('hidden');
    }
});
