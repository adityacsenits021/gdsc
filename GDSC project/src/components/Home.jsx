import React from 'react'
import Footer from './footer/Footer'
import Signup from './signup/Signup'

function Home(props) {
  return (
    <div>
      {!props.user?
      <Signup/>:
      // <div className="home">Home</div>
      <Footer/>
      // <Additem user={props.user} />
      
    }
    </div>
  )
}

export default Home