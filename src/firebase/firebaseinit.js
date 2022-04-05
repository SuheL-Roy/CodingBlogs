import  firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCG76-9zcFCZETI2FckTUbJGm2_UuOtQj8",
  authDomain: "bangladesh-46e13.firebaseapp.com",
  databaseURL: "https://bangladesh-46e13.firebaseio.com",
  projectId: "bangladesh-46e13",
  storageBucket: "bangladesh-46e13.appspot.com",
  messagingSenderId: "931654366133",
  appId: "1:931654366133:web:c017d7c3a5f130aeb59ffc",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//console.log(firebaseApp)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { timestamp };
export default firebaseApp.firestore();
