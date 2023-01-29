import React, {useState} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
import {getAuth} from "firebase/auth";

const [diff, setDiff]  = useState("1");
const [long, setLong] = useState(0);
const [lat, setLat] = useState(0);
const [binary, setBinary] = useState(0);

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

let file_encoding = null; 

function encodeImage(e) {
    let ind_file = e.files[0]; // grab file object from files array
    const file_Reader = new FileReader();
    file_Reader.onloadend(() => {
        file_encoding = file_Reader.result;
    })
    file_Reader.readAsDataURL(ind_file)
}
function makeCoordinates(lat, long) {
    let complete = "";
   
    for (let i = 0; i < lat.length; i += 1) {
        if (lat[i] == ".") {
            complete += "D"
        }
        else {
            complete += lat[i];
        }
    }
    complete += "A"
    for (let i = 0; i < long.length; i += 1) {
        if (lat[i] == ".") {
            complete += "D"
        }
        else {
            complete += long[i];
        }
    }
    return complete
}

function convert_value(value) {
    let finished_value = "";

    if (value == "1") {
        finished_value = "Easy";
    }

    else if (value == "2") {
        finished_value = "Medium";
    }

    else {
        finished_value = "Hard";
    }
    return finished_value
}

function add_data() {
    
    const db = getDatabase();
    diff_value = document.getElementById("diff").value;
    long_value = document.getElementById("long").value;
    lat_value = document.getElementById("lat").value;
    let complete_value = makeCoordinates(lat, long);
    let final_diff = convert_value(diff_value);
    const db_ref = ref(db, "Vpoint/" + complete_value);
    set(db_ref, {
        coordinate: complete_value,
        difficulty: final_diff,
        image:file_encoding
        
    })


}

function addPoi(props) {
    return (<div>
        <h1>VIRID</h1>
        <form action="POST" method="POST" onSubmit={add_data()}>
            <input type="file" onChange={encodeImage(this)} id="selector"/>
            <input type="range" id = "diff" min = "1" max = "3"/>
            <input type="text" id ="lat" />
            <input type="text" id = "long"/>
            <input type="submit" id="sub"/>
        </form>
    </div>
    
    
    
    )
}

export default directions