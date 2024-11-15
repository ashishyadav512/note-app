// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDUOtxv9sT_ho46SGiHqzWLVF1HFS8bw_U",
//   authDomain: "notes-app-cce68.firebaseapp.com",
//   projectId: "notes-app-cce68",
//   storageBucket: "notes-app-cce68.firebasestorage.app",
//   messagingSenderId: "443142162802",
//   appId: "1:443142162802:web:42bdf579764a0840f5f5eb",
//   measurementId: "G-Q7XZ3DLTDN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the necessary functions from the Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUOtxv9sT_ho46SGiHqzWLVF1HFS8bw_U",
//   authDomain: "notes-app-cce68.firebaseapp.com",
//   projectId: "notes-app-cce68",
//   storageBucket: "notes-app-cce68.appspot.com",
//   messagingSenderId: "443142162802",
//   appId: "1:443142162802:web:42bdf579764a0840f5f5eb",
//   measurementId: "G-Q7XZ3DLTDN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Authentication and Firestore services
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Export the initialized instances
// export { auth, db };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUOtxv9sT_ho46SGiHqzWLVF1HFS8bw_U",
  authDomain: "notes-app-cce68.firebaseapp.com",
  projectId: "notes-app-cce68",
  storageBucket: "notes-app-cce68.firebasestorage.app",
  messagingSenderId: "443142162802",
  appId: "1:443142162802:web:42bdf579764a0840f5f5eb",
  measurementId: "G-Q7XZ3DLTDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);