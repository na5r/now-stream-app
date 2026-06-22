import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./main.js";
import { renderHomeScreen } from "./home.js";

export async function loadProfiles(uid) {
    const snap = await getDoc(doc(db, "users", uid));
    const grid = document.getElementById('profileGrid');
    grid.innerHTML = '';
    if (snap.exists()) {
        snap.data().profiles.forEach(p => {
            const div = document.createElement('div');
            div.className = 'profile-card';
            div.innerHTML = `<div class="avatar"><img src="${p.avatar}" style="width:100%;height:100%;object-fit:cover;"></div><p>${p.name}</p>`;
            div.onclick = () => {
                document.getElementById('profileScreen').classList.add('hidden');
                document.getElementById('homeScreen').classList.remove('hidden');
                renderHomeScreen();
            };
            grid.appendChild(div);
        });
    }
}
