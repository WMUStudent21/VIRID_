import React from "react";
import "./App.css"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDaDcgA8Yo1o14zdWp6JNYL2N2QTnJiRaU",
  authDomain: "virid-dd0c4.firebaseapp.com",
  projectId: "virid-dd0c4",
  storageBucket: "virid-dd0c4.appspot.com",
  messagingSenderId: "501359575644",
  appId: "1:501359575644:web:b1b045cb81ca52c5f19c99",
  measurementId: "G-QVSCYY2PGC"
};

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



function Homepage() {
    return (
        <div className="App">
          <header className="App-header">
    
          <p>Hello World</p>
          <img src="" alt="not found" />
          </header>
        </div>
      );

}

export default Homepage