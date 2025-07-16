
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs-CvVu4Oxuwi_VrxgL9N7LqFyuDIleu0",
  authDomain: "talk-to-me-acdef.firebaseapp.com",
  projectId: "talk-to-me-acdef",
  storageBucket: "talk-to-me-acdef.firebasestorage.app",
  messagingSenderId: "855471540478",
  appId: "1:855471540478:web:14baaf19a33426a11f3daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { app }

export {auth}