import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./main.js"; 

export async function loadProfiles(uid, onSelect) {
    const userDoc = await getDoc(doc(db, "users", uid));
    const grid = document.getElementById('profileGrid');
    grid.innerHTML = ''; 

    if (userDoc.exists()) {
        const profiles = userDoc.data().profiles;
        
        // This log will help us debug if the data is arriving
        console.log("Profiles data received:", profiles);

        profiles.forEach(p => {
            const profileDiv = document.createElement('div');
            profileDiv.style.margin = "20px";
            profileDiv.style.cursor = "pointer";
            profileDiv.style.display = "inline-block"; // Ensures they sit side-by-side
            
            // This pulls the string from your Firestore 'avatar' field!
            profileDiv.innerHTML = `
                <img src="${p.avatar}" 
                     style="width:100px; height:100px; border-radius:50%; object-fit:cover; border: 2px solid #efa11b;"
                     onerror="this.style.display='none'; console.error('Failed to load image:', '${p.avatar}');">
                <p style="text-align:center; margin-top: 10px; color: white;">${p.name}</p>
            `;
            
            profileDiv.onclick = () => onSelect(p.name);
            grid.appendChild(profileDiv);
        });
    } else {
        console.error("No such document found for UID:", uid);
    }
}
