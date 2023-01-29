// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
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
    const reference = ref(db, 'VPoint/' + coordinate);

    set(reference, {
        coordinate: coordinate,
        profile_pic: imageURL,
        difficulty: difficulty
    });
}

function retrieveCoordinates() {
  const db = getDatabase();
  const Ref = ref(db, "VPoint/");

  const list = [];
  onValue(Ref, snapshot => {
    snapshot.forEach(function(element){
      var coord = JSON.stringify(element.val().coordinate);
      var diff = JSON.stringify(element.val().difficulty);
      var profile_pic = JSON.stringify(element.val().profile_pic);
      for (let i = 0; i < 2; i++) {
        coord = coord.replace("D",".");
        coord = coord.replace("A",",");
      }
      list.push(coord.split(','), diff, profile_pic);
    });
  });
  return list;
};



const x = retrieveCoordinates();
const dummy_start = ["19.021767", "72.857851"]

console.log(x);
// API KEY = AIzaSyCb5zQfEwi3KzCaMDjctIOEX89V5g9joSs

// function distance(current_location,destination_coordinates) {
//   var origin = new google.maps.LatLng(Number(current_location[0]), Number(current_location[1]));
//   var destination = new google.maps.LatLng(Number(destination_coordinates[0]), Number(destination_coordinates[1]));

//   var service = new google.maps.DistanceMatrixService();
//   service.getDistanceMatrix(
//     {
//       origins: [origin],
//       destinations: [destination],
//       travelMode: 'WALKING',
//       transitOptions: TransitOptions,
//       drivingOptions: DrivingOptions,
//       unitSystem: UnitSystem,
//       avoidHighways: Boolean,
//       avoidTolls: Boolean,
//     }, callback); 
// };

// function callback(response, status) {
//   if (status == 'OK') {
//     var origins = response.originAddresses;
//     var destinations = response.destinationAddresses;

//     for (var i = 0; i < origins.length; i++) {
//       var results = response.rows[i].elements;
//       for (var j = 0; j < results.length; j++) {
//         var element = results[j];
//         var distance = element.distance.text;
//         var duration = element.duration.text;
//         var from = origins[i];
//         var to = destinations[j];
//       }
//     }
//   }
// }

// distance(dummy_start,x[0]);
