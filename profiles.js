import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./main.js";

export async function loadProfiles(uid) {
    const snap = await getDoc(doc(db, "users", uid));
    const grid = document.getElementById('profileGrid');
    grid.innerHTML = '';
    
    if (snap.exists()) {
        snap.data().profiles.forEach(p => {
            const div = document.createElement('div');
            div.className = 'profile-container';
            div.innerHTML = `
                <div class="profile-circle"><img src="${p.avatar}" style="width:100%; height:100%; object-fit:cover;"></div>
                <p>${p.name}</p>
            `;
            grid.appendChild(div);
        });
        // Add "New Profile" button
        grid.innerHTML += `<div class="profile-container"><div class="profile-circle" style="background:#333; display:flex; align-items:center; justify-content:center; font-size:50px;">+</div><p>New Profile</p></div>`;
    }
}
