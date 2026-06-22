import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
export function initAuth() {
    const auth = getAuth();
    document.getElementById('loginBtn').onclick = () => {
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;
        signInWithEmailAndPassword(auth, email, pass).then(() => {
            document.getElementById('loginScreen').classList.add('hidden');
            document.getElementById('profileScreen').classList.remove('hidden');
        }).catch(err => alert(err.message));
    };
}
