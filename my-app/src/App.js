import './App.css';
import { initializeApp } from "firebase/app";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Link} from 'react-router-dom';
import { getDatabase, onValue, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDaDcgA8Yo1o14zdWp6JNYL2N2QTnJiRaU",
  authDomain: "virid-dd0c4.firebaseapp.com",
  projectId: "virid-dd0c4",
  storageBucket: "virid-dd0c4.appspot.com",
  messagingSenderId: "501359575644",
  appId: "1:501359575644:web:b1b045cb81ca52c5f19c99",
  measurementId: "G-QVSCYY2PGC"
};

function getVpoints() {
  const db = getDatabase()

  const vRef = ref(db, "Vpoint")

  onValue(vRef, (snap) => {
    snap.forEach(function (element) {  
    
    })
    })
  
  }
    



const app = initializeApp(firebaseConfig);

function App() {
  
  function sayThanks() {
    alert('Submitted. Thank you!');
  }
  
  const {isLoading, error} = useAuth0();
  const db = getDatabase()

  const vRef = ref(db, "Vpoint")

  getVpoints();
  
  


  return (
    <div className="App">
        <div class = "navbar">
          <img class = "logo" src = {require('./Pictures/Logo.png')} alt = "Error"/>
          <div id="right_wrapper">
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
              <LoginButton style={{float: 'right', backgroundColor: 'white'}} class="btn3"/>
              <LogoutButton style={{float: 'right', backgroundColor: 'white'}} class="btn3"/>
              <Profile style={{float: 'left', backgroundColor: 'white'}}/>
            </>
          )}
          </div>
          
          {/* <button class="btn3" onClick = {sayHello} >Sign in</button> */}
          

      
      
      </div>


      
        
      <header className="App-header">
        {/* Write loop to go over all vpoints */}
        

      <div class="container">
          <img src = {require('./Pictures/Easy.png')} alt = "Error" />
          
          <Link  to="/add_poi" >
          <button class="btn2" onClick = {sayThanks}>Submit</button></Link>
      </div>
      <div class="container">
          <img src = {require('./Pictures/Medium.png')} alt = "Error" />
          
          <Link to="/add_poi">
          <button class="btn2">Submit</button></Link>
      </div>
      <div>
      <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/a1040528-6548-4414-ada8-daa9e37f6dfe/page/vypDD"></iframe>
      </div>
      


      </header>
    </div>
    
  );
}

export default App;
