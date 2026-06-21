import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./main.js"; 

export async function loadProfiles(uid, onSelect) {
    const userDoc = await getDoc(doc(db, "users", uid));
    const grid = document.getElementById('profileGrid');
    grid.innerHTML = ''; 

    if (userDoc.exists()) {
        const profiles = userDoc.data().profiles;
        profiles.forEach(p => {
            // Create a wrapper for each profile
            const profileDiv = document.createElement('div');
            profileDiv.style.margin = "20px";
            profileDiv.style.cursor = "pointer";
            
            // This pulls the string from your Firestore 'avatar' field!
            profileDiv.innerHTML = `
                <img src="${p.avatar}" style="width:100px; height:100px; border-radius:50%; object-fit:cover; border: 2px solid #333;">
                <p style="text-align:center;">${p.name}</p>
            `;
            
            profileDiv.onclick = () => onSelect(p.name);
            grid.appendChild(profileDiv);
        });
    }
}
