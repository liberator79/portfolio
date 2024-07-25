import React from 'react'
import Background from './Background'
import Terminal from './Terminal'
const Main = () => {
  return (
    <div>

      <div className='h-screen w-full flex flex-col items-center justify-center absolute z-10 '>
        <Terminal />
      </div>
      <div className='h-[100vh] w-[100%] absolute'>
        <Background />
      </div>

    </div>
  )
}

export default Main
