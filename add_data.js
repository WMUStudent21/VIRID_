import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
import {getAuth} from "firebase/auth";



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

  function convertToData(imageURL) {
    
    let data_uri = null
    fetch(imageURL).then((response) => {
      return response.blob()
    }).then((blob) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load" ,() => {
        data_uri = fileReader.result;
      })
      fileReader.readAsDataURL(blob)

      
    })

    if (data_uri == null) {
      console.log("Data uri is Null!");
      return null
    }
    else {
      console.log("Data uri is not Null!")
      return data_uri
    }
    
  }


  function writeSite(imageURL, difficulty, coordinate, ) {
    const db = getDatabase();
    const data_ref = ref(db, "Vpoint/" + coordinate);
   
    // get file encoded as data url

    set(data_ref, {
      difficulty: difficulty,
      coordinate: coordinate,
      image: imageURL
    })
    
  }

  writeSite("https://firebasestorage.googleapis.com/v0/b/virid-dd0c4.appspot.com/o/Medium.png?alt=media&token=f717b6d6-680d-41c4-82d4-72c594f69b0f", "Medium", "19D036519A72D856597");
  
