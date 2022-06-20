import React from 'react'
import { useState } from 'react'

const Chat = ({socket, userName , room}) => {
    const [currentMessage,setCurrentMessage] = useState("");
    
    const sendMessage = () => {
        
    }

  return (
    <>
    <div className="chat-header">
        <p>Live Chat</p>
    </div>
    <div className="chat-body"></div>
    <div className="chat-footer">
        <input type="text" placeholder='Hey...' onChange={(event) => {setCurrentMessage(event.target.value); console.log(currentMessage);}}/>
        <button>&#9658;</button>
    </div>
    </>
  )
}

export default Chat