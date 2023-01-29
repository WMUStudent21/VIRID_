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

function writeVPointData(coordinate, imageURL, difficulty) {
    const db = getDatabase();
    const reference = ref(db, 'VPoint/' + coordinate);

    set(reference, {
        profile_pic: imageURL,
        difficulty: difficulty,
        coordinate: coordinate
    });
}

writeVPointData("19D034427A72D859759", "myURL", "Easy");
writeVPointData("19D036519A72D856597", "myURL", "Medium");

// function readVPointData(coordinate, imageURL, difficulty) {
//     const db = getDatabase();
//     const reference = ref(db, 'VPoint/' + coordinate);

//     set(reference, {
//         profile_pic: imageURL,
//         difficulty: difficulty,
//         coordinate: coordinate
//     });
// }


// Get a database reference to our posts
const db = getDatabase();
const ref1 = db.ref('VPoint');

// Attach an asynchronous callback to read the data at our posts reference
ref1.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 