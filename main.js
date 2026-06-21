import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { initLogin } from "./login.js";
import { loadProfiles } from "./profiles.js";
import { initDashboard } from "./dashboard.js"; // Import the new dashboard logic

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

// Initialize all modules
initLogin();
initDashboard();

onAuthStateChanged(auth, async (user) => {
    if (user) {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('profileScreen').classList.remove('hidden');
        await loadProfiles(user.uid, (name) => {
            document.getElementById('profileScreen').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        });
    } else {
        document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('profileScreen').classList.add('hidden');
        document.getElementById('dashboard').classList.add('hidden');
    }
});
