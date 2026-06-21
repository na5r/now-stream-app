
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = { /* YOUR CONFIG HERE */ };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Logic to switch screens
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in, show Profile Screen logic
        console.log("Logged in!");
    } else {
        // User is logged out, show Login Screen logic
        console.log("Logged out!");
    }
});
