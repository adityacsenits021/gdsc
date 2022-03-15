import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './signup.css';
import {auth,} from '../../database';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
function Signup() {
    const navigate=useNavigate();
    const [credential, setcredential] = useState({name:"",password:"",email:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password} =credential;
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                updateProfile(cred.user,{
                    displayName:credential.name,
                })
                console.log('user created:', cred.user)
                navigate('/',{replace:true})
            })
            .catch(err => {
                console.log(err.message)
            })
    }
  return (
    <div className='signupwindow'>
        <div className="container">
            <form action="" onSubmit={handleSubmit}>
                <div className="input">
                <label htmlFor="">Name</label>
                <input type="text" name="name" id=""
                onChange={(e)=>{
                    e.preventDefault();
                    setcredential({
                        ...credential,[e.target.name]:e.target.value
                    })
                }}  
                />
                </div>
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
                <button type="submit" >Sign Up</button>
            </form>
        </div>
        
        
    </div>
  )
}

export default Signup