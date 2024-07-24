// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyCmFGFFpFHqS6oPOpIO3rsnQyngYOF00nA",
// 	authDomain: "miko-clon.firebaseapp.com",
// 	projectId: "miko-clon",
// 	storageBucket: "miko-clon.appspot.com",
// 	messagingSenderId: "880389928583",
// 	appId: "1:880389928583:web:ac7093925c64f9429b2a22",
// 	measurementId: "G-HYH9FYXFHE",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and Firestore
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCmFGFFpFHqS6oPOpIO3rsnQyngYOF00nA",
	authDomain: "miko-clon.firebaseapp.com",
	projectId: "miko-clon",
	storageBucket: "miko-clon.appspot.com",
	messagingSenderId: "880389928583",
	appId: "1:880389928583:web:ac7093925c64f9429b2a22",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
