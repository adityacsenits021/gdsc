import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import {auth} from './database';
import {onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from 'react';
import Login from './components/login/Login';
import Signup from './components/signup/Signup'
import Messenger from './components/messenger/Messenger'
import Chat from './components/Chat'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubAuth=onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        setUser(authUser);
        console.log(authUser);
        console.log("user email is:",authUser.email);
        console.log("display name is:",authUser.displayName);
      }
      else{
        // No user is logged in right now.
        console.log("No one is logged in")
        setUser(null);
      }
    })
  
    return () => {
      unsubAuth();
    }
  }, [user])

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home user={user} />}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/chat' element={<Chat user={user}/>} />
      </Routes>
      
    </div>
  )
}

export default App
