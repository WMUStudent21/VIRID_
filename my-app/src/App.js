import './App.css';
import { initializeApp } from "firebase/app";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

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

function App() {
  
  function sayHello() {
    alert('Hello');
  }
  
  const {isLoading, error} = useAuth0();

  return (
    <div className="App">
        <div class = "navbar">
          <img class = "logo" src = {require('./Pictures/Logo.png')} alt = "Error"/> 
          {/* <button class="btn3" onClick = {sayHello} >Sign in</button> */}
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
              <LoginButton class="btn3"/>
              <LogoutButton class="btn3"/>
              <Profile/>
            </>
          )}

          <button class="btn4" onClick = {sayHello} >Contact Us</button>
        </div>
      <header className="App-header">
      <div class="container">
          <img src = {require('./Pictures/Easy.png')} alt = "Error" />
          <button class="btn1" onClick = {sayHello} >Directions</button>
          <button class="btn2">Submit</button>
      </div>

      <div class="container">
          <img src = {require('./Pictures/Medium.png')} alt = "Error" />
          <button class="btn1">Directions</button>
          <button class="btn2">Submit</button>
      </div>


      </header>
    </div>
  );
}

export default App;
