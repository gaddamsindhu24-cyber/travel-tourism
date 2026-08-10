import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDgZ6RfhR6oZ0J8HmveEVbso-u7SX2eo-U",
  authDomain: "travelgo-3135b.firebaseapp.com",
  projectId: "travelgo-3135b",
  storageBucket: "travelgo-3135b.firebasestorage.app",
  messagingSenderId: "18251024147",
  appId: "1:18251024147:web:b53ad41f7f08d3bfeafce6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;