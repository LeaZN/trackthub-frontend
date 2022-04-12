
import { useSelector} from 'react-redux';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createLogin } from '../../actions/users';
import { useNavigate } from 'react-router-dom';

function Login () {

let navigate = useNavigate();
const dispatch = useDispatch();
    
const artists = useSelector((state) => state.artists);



const [loginData, setLoginData] = useState({
    email: '', password:'',
});

const [message, setMessage] = useState('');


const handleSubmitLogin = async event => {

    event.preventDefault();
    dispatch(createLogin(loginData));

    setTimeout( function checkToken() {

    if (localStorage.jwtToken){
    const path = `/browse`;
    navigate(path);
    }
    else {
    setMessage('login failed, please check your credentials');
    }
    },1000);

}


    return (

        <div className="login">
         <p className="message">{message}</p>
        <form autoComplete="off" onSubmit={handleSubmitLogin}>
            <h2 className="form-title" >Login</h2>
            <label>Email</label>
            <input type="text" name="email" placeholder="email" required 
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value})}
            />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required 
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value})}
            />
            <button className="login-btn" type="submit" >Login</button>
        </form>
        </div>

    );
}

export default Login;
