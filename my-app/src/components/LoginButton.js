import { useAuth0 } from '@auth0/auth0-react';
import "../App.css"

const LoginButton = () => {

    const { loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <button class="btn1" onClick = {() => loginWithRedirect()}>
                Sign In
            </button>

        )

    )
} 

export default LoginButton