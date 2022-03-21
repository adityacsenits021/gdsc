import React from 'react'
import Messenger from './messenger/Messenger'

const Chat = (props) => {
  return (
    <div>
         {!props.user?
      "":
     
      <Messenger user={props.user}/>
      
      
    }
    </div>
  )
}

export default Chat