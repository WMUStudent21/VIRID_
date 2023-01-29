import { useAuth0 } from '@auth0/auth0-react';
import "../App.css"

const LogoutButton = () => {

    const { logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <button class="btn1" onClick = {() => logout()}>
                Sign Out
            </button>
        )
    )
} 

export default LogoutButton