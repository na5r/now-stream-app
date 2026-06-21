
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./main.js";

export function initDashboard() {
    const logoutBtn = document.querySelector(".logout-btn");
    
    logoutBtn.addEventListener("click", async () => {
        try {
            await signOut(auth);
            location.reload(); // Simple, clean way to reset everything
        } catch (e) {
            console.error("Logout failed:", e);
        }
    });
}
