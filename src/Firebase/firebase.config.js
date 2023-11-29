// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,

apiKey: "AIzaSyCUSVefOIbMIfbyotUONpYgCtGttg5Wqzk",
authDomain: "online-conversation-project.firebaseapp.com",
projectId: "online-conversation-project",
storageBucket: "online-conversation-project.appspot.com",
messagingSenderId: "907504410437",
appId: "1:907504410437:web:1d8d513c99ba5a8e7d682c"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;