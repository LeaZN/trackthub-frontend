import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';


function SignUp () {




    const [registerData, setRegisterData] = useState({
        name: '', email: '', password: '',
    });



    const [message, setMessage] = useState('');


    const dispatch = useDispatch();



    
    const handleSubmitRegister = event => {

        if( !/(.+)@(.+){2,}\.(.+){2,}/.test(registerData.email)){
            event.preventDefault();

            setMessage('please enter a valid email');


        }

        else if(registerData.password.length < 8){
            event.preventDefault();

            setMessage('password must be at least 8 characters');

                }
        
         else {  
             clearMessage();
            event.preventDefault();

            dispatch(createUser(registerData));
            clearRegister();
            setMessage('Success! Please Log in');
         }
        }
      

        const clearRegister = () => {
          setRegisterData({name: '', email: '', password: ''});
           
        }

        const clearMessage = () => {
                   setMessage("");
        }

        return (

            <div className="signUp">
                           <p className="message2">{message}</p>

                {/* <pre> {JSON.stringify([ `${registerData.name}`, `${registerData.email}`, `${registerData.password}`], undefined, 2)}</pre> */}
            <form id="form" autoComplete="off" onSubmit={handleSubmitRegister}>
                <h2 className="form-title" >Sign Up</h2>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" required 
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value})}
                />
                <label>Email</label>
                <input type="text" name="email" placeholder="email"  required 
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value})}
                />
                <label>Password</label>
                <input type="password" name="pasword" placeholder="Password"  required 
                 value={registerData.password}
                 onChange={(e) => setRegisterData({ ...registerData, password: e.target.value})}
                />
                <button id="submit" className="signUp-btn" type="submit">Sign Up</button>

            </form>

    
            </div>
    
    
        );
    }
    
    export default SignUp;