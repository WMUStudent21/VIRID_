import { useAuth0 } from '@auth0/auth0-react';
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

const Profile = () => {

    function writeUserData(userId, score) {
        const db = getDatabase();
        const reference = ref(db, 'Users/' + userId);
    
        set(reference, {
            score: score
        });
    }

    function encodeKey(s) { return encodeURIComponent(s).replaceAll('.', '%2E'); }

    const { user, isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        writeUserData(encodeKey(user?.email), 0);
    }

    return (
        isAuthenticated && (
            <article>
                <h2 style = {{color:"black"}}>{user?.name} </h2>
            </article>

        )

    )
} 

export default Profile