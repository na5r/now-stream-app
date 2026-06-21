
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./main.js"; // Import the auth instance we created in main.js

export function initLogin() {
    const loginBtn = document.querySelector("#loginScreen .main-btn");
    
    loginBtn.addEventListener("click", async () => {
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;

        try {
            await signInWithEmailAndPassword(auth, email, pass);
            // Once this succeeds, main.js will detect the user and switch screens
        } catch (e) {
            alert("Login failed: " + e.message);
        }
    });
}
