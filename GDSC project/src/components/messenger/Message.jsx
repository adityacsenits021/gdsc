import React from 'react'
import './Messenger.css'

const Message = ({own, message}) => {
  return (
    <div>
        <div class={own ? "message my_message" : "message frnd_message"}>
                <p>{message.text}<br/><span>12:15</span></p>
            </div>
    </div>
  )
}

export default Message