import React from 'react'
import { io } from 'socket.io-client'

const App = () => {
  const socket = io('http://localhost:5001')
  return (
    <>
      <div className='bg-zinc-900 h-screen w-screen'>

      </div>
    </>
  )
}

export default App