// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaDcgA8Yo1o14zdWp6JNYL2N2QTnJiRaU",
  authDomain: "virid-dd0c4.firebaseapp.com",
  projectId: "virid-dd0c4",
  storageBucket: "virid-dd0c4.appspot.com",
  messagingSenderId: "501359575644",
  appId: "1:501359575644:web:b1b045cb81ca52c5f19c99",
  measurementId: "G-QVSCYY2PGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, coordinate, imageURL) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);

    set(reference, {
        username: name,
        coordinate: coordinate,
        profile_pic: imageURL
    });
}

writeUserData("dummy1", "Hello", "19.0760° N, 72.8777° E", "myURL");
