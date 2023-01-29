import React, {useState} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
import {getAuth} from "firebase/auth";
import "./add_poi.css"


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

function encodeImage() {
   
    let ind_file = document.getElementById("selector").files[0] // grab file object from files array
    const file_Reader = new FileReader();
    file_Reader.onloadend = () => {
        file_encoding = file_Reader.result;
    }
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

function add_data(e) {
    e.preventDefault();
    const db = getDatabase();
    let diff_value = document.getElementById("diff").value;
    let long_value = document.getElementById("long").value;
    let lat_value = document.getElementById("lat").value;
    let complete_value = makeCoordinates(lat_value, long_value);
   
    const db_ref = ref(db, "Vpoint/" + complete_value);
    set(db_ref, {
        coordinate: complete_value,
        difficulty: diff_value,
        image:file_encoding
        
    })


}

function AddPoi(props) {
    return (
    <div className="App_Poi">
        <div class= "center_content">
        <h1>VIRID</h1>
        
        <form action="/" onSubmit={add_data}>
        <div class="flex-column">
            <input type="file" onChange={encodeImage} id="selector"/>
            <select name="" id="diff">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <input type="text" id ="lat" />
            <input type="text" id = "long"/>
            <input type="submit" id="sub"/>
        </div>
        </form>
     
        </div>
    
    </div>
    
    
    
    
    )
}

export default AddPoi