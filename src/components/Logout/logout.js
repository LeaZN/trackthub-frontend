
// import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import {AiOutlinePoweroff} from "react-icons/ai";



function Logout () {

const { logout } = useAuth0();
  //   let navigate= useNavigate();
  // const routeChange = () => {

  //   let path = `/Browse`;
  //   navigate(path);
  // }
  const { user, isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
      <div className="logout">
    <img src={user.picture} alt={user.name} />
    <h4 className='nav-user-name'> {user.nickname} </h4>
    {/* {JSON.stringify(user, null, 2)}; */}
<button className="logout-button"onClick={() => logout({
  returnTo: window.location.origin,
})}>
<AiOutlinePoweroff size={18} />
</button>

      </div>
        )
    );
}

export default Logout;