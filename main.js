import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { renderHomeScreen } from "./home.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdSeTJht66G67mMQq5oRyW0YVVffoQKWM",
  authDomain: "kaistreams.firebaseapp.com",
  databaseURL: "https://kaistreams-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kaistreams",
  storageBucket: "kaistreams.firebasestorage.app",
  messagingSenderId: "232696634492",
  appId: "1:232696634492:web:de0122ecc33ebe71237df9",
  measurementId: "G-FXLJM4LCXC"
};

initializeApp(firebaseConfig);
renderHomeScreen();
