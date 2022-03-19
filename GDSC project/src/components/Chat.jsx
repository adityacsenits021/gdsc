import React from 'react'
import Messenger from './messenger/Messenger'

const Chat = (props) => {
  return (
    <div>
         {!props.user?
      "":
     
      <Messenger/>
      
      
    }
    </div>
  )
}

export default Chat