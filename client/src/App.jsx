import React from 'react'
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");

const App = () => {
  return (
    <div className='App'></div>
  )
}

export default App