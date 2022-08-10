// import firebase from "firebase/app";
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

	apiKey: "AIzaSyBeYM-tAH0eu4CoZzE25BGbWKS0gO2cKsU",

	authDomain: "music-d6098.firebaseapp.com",

	projectId: "music-d6098",

	storageBucket: "music-d6098.appspot.com",

	messagingSenderId: "117271725615",

	appId: "1:117271725615:web:9e82019faa2b9d86ee28da"

};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();


// Initialize Firebase

export {
	auth,
	db,
}
