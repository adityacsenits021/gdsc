import React from 'react'
import {auth} from '../../database';
import {signInWithEmailAndPassword} from 'firebase/auth';
import './login.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const [credential, setcredential] = useState({name:"",password:"",email:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password} =credential;
        signInWithEmailAndPassword(auth, email, password)
            .then(cred => {
            console.log('user logged in:', cred.user);
            navigate('/');
    })
    .catch(err => {
      console.log(err.message)
    })
    }
  return (
    <div className='loginwindow'>
        <div className="container">
            <form action="" onSubmit={handleSubmit}>
                <div className="input">
                <label htmlFor="">Email</label>
                <input type="email" name="email" 
                onChange={(e)=>{
                    e.preventDefault();
                    setcredential({
                        ...credential,[e.target.name]:e.target.value
                    })
                }}
                id="" />
                </div>
                <div className="input">
                <label htmlFor="">Password</label>
                <input type="password" name="password" 
                onChange={(e)=>{
                    e.preventDefault();
                    setcredential({
                        ...credential,[e.target.name]:e.target.value
                    })
                }}
                id="" />
                </div>
                <button type="submit" >Login</button>
                <div className="signuplink">
                <h9>Don't have an account ?</h9>
                <button 
                onClick={()=>{
                    navigate('/signup',{replace:true})
                }}
                >Signup</button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default Login