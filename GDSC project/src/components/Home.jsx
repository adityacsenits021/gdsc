import React from 'react'
import Homecontent from './homecontent/Homecontent'
import Signup from './signup/Signup'

function Home(props) {
  return (
    <div>
      {!props.user?
      <Signup/>:
     
      <Homecontent/>
      
      
    }
    
    </div>
  )
}

export default Home