
import { useNavigate } from "react-router-dom";
import {AiOutlinePoweroff} from "react-icons/ai";


function Logout () {

    let navigate = useNavigate();

    const tokenDelete = () => {
    
      localStorage.clear();
      const path = `/`;
      navigate(path);
      alert ("you have been logged out");
  
  
    }
 



  if (localStorage.jwtToken) {

    return (

      <div className="logout">
 
    <div className="mock-user-photo">
    <span className="mock-user-photo-content">
      {localStorage.username.charAt(0).toUpperCase()}
      
      </span>
      </div>
    <h4 className='nav-user-name'>
      {localStorage.username}</h4>
   
<button className="logout-button" type="button" onClick={tokenDelete}>
<AiOutlinePoweroff size={18} />
</button>
 
      </div>
        
    )}
    else {
return null
    };
}


export default Logout;