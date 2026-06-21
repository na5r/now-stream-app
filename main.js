// ... existing imports ...
import { loadProfiles } from "./profiles.js"; // Import the new loader

// ... (firebaseConfig and auth/db initialization) ...

onAuthStateChanged(auth, async (user) => {
    if (user) {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('profileScreen').classList.remove('hidden');
        
        // Load the profiles using our new module!
        await loadProfiles(user.uid, (profileName) => {
            console.log("Selected:", profileName);
            document.getElementById('profileScreen').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        });
    } else {
        document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('profileScreen').classList.add('hidden');
        document.getElementById('dashboard').classList.add('hidden');
    }
});
