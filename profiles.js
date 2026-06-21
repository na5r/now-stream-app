
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./main.js"; // Import db from main.js

export async function loadProfiles(uid, onSelect) {
    const userDoc = await getDoc(doc(db, "users", uid));
    const grid = document.getElementById('profileGrid');
    grid.innerHTML = ''; // Clear previous

    if (userDoc.exists()) {
        const profiles = userDoc.data().profiles;
        profiles.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'profile-btn';
            btn.innerText = p.name;
            btn.onclick = () => onSelect(p.name);
            grid.appendChild(btn);
        });
    }
}
