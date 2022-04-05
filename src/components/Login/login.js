
// import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';




function Login () {

const { loginWithRedirect, isAuthenticated } = useAuth0();


 

    return (

      !isAuthenticated &&(
      <div className="login-container">
      
      <button type="button" className="login-btn" onClick={() => loginWithRedirect()}>
      Login 
    </button>

      </div>
    )
    );
}

export default Login;