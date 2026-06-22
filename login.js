import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./main.js";

export function initLogin() {
    document.getElementById("loginBtn").onclick = async () => {
        const e = document.getElementById('email').value;
        const p = document.getElementById('pass').value;
        try { await signInWithEmailAndPassword(auth, e, p); } 
        catch (err) { alert("Login failed: " + err.message); }
    };
}
