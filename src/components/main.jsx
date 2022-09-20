import React from 'react'
import videoBG from '../assets/videoBg.mp4'

function Main() {
  return (
      <div className='main'>
          <div id="overlay">  </div>
          <video src={videoBG} autoPlay loop muted />
          <div className="content">
              <h1>Welcome</h1>
              <p>--to my first video overlay</p>
          </div>
          </div>
    
  )
}

export default Main